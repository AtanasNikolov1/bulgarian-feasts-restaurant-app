import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import supabase from "../../../config/supabaseClient";

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async () => {
    const { data, error } = await supabase
      .from("contacts")
      .insert([{ email, name, message }]);

    if (error) {
      setError(error.message);
      setSuccess(false);
    } else {
      setSuccess(true);
      setError("");
      setEmail("");
      setName("");
      setMessage("");
    }
  };

  useEffect(() => {
    let timer;
    if (success) {
      timer = setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [success]);

  return (
    <div className="mb-28 mt-40 flex flex-col items-center p-8">
      <h1 className="mb-4 font-headings text-5xl font-bold text-customOrange">
        Contact Us
      </h1>
      <p className="mb-4 text-lg">
        Any questions or remarks? Just write us a message!
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
        <div className="mb-4">
          <input
            type="email"
            placeholder="Enter a valid email address"
            value={email}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full rounded border ${errors.email ? "border-red-500" : "border-gray-300"} p-2 outline-none focus:border-customOrange`}
          />
          {errors.email && (
            <p className="mt-1 text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            {...register("name", { required: "Name is required" })}
            onChange={(e) => setName(e.target.value)}
            className={`w-full rounded border ${errors.name ? "border-red-500" : "border-gray-300"} p-2 outline-none focus:border-customOrange`}
          />
          {errors.name && (
            <p className="mt-1 text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Enter your message"
            value={message}
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters long",
              },
              maxLength: {
                value: 500,
                message: "Message cannot exceed 500 characters",
              },
            })}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            className={`w-full rounded border ${errors.message ? "border-red-500" : "border-gray-300"} p-2 outline-none focus:border-customOrange`}
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-red-500">{errors.message.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full rounded border-2 border-customOrange bg-customOrange py-3 text-xl text-white hover:bg-white hover:text-customOrange"
        >
          Submit
        </button>
      </form>
      {success && (
        <p className="mt-4 text-green-500">Message sent successfully!</p>
      )}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      <div className="mt-8 flex w-full max-w-3xl justify-between">
        <div className="text-center">
          <div className="mb-2 flex items-center justify-center">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-customOrange text-white">
              <i className="fas fa-info"></i>
            </span>
          </div>
          <div className="font-bold">ABOUT US</div>
          <div>Traditional Bulgarian Cuisine</div>
        </div>
        <div className="text-center">
          <div className="mb-2 flex items-center justify-center">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-customOrange text-white">
              <i className="fas fa-phone"></i>
            </span>
          </div>
          <div className="font-bold">PHONE (LANDLINE)</div>
          <div>+359 123 456 789</div>
        </div>
        <div className="text-center">
          <div className="mb-2 flex items-center justify-center">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-customOrange text-white">
              <i className="fas fa-map-marker-alt"></i>
            </span>
          </div>
          <div className="font-bold">OUR LOCATION</div>
          <div>1234 Culinary Blvd, Sofia, Bulgaria</div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
