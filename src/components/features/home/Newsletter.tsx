import { useState } from "react";
import supabase from "../../../config/supabaseClient";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) return;

    const { data, error } = await supabase
      .from("newsletters")
      .insert([{ email: email }])
      .select();

    if (error) {
      return alert(error.message);
    }

    setEmail("");
    alert("You have subscribed to the newsletter");
  };

  return (
    <div className="mt-12 flex items-center justify-between bg-orangeGradient px-8 py-6">
      <p className="text-lg font-semibold text-white">
        Subscribe to receive the latest news, special offers, and delicious
        updates from our restaurant. Let's stay in touch!
      </p>
      <form
        className="flex w-2/6 items-center rounded-3xl bg-white"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="w-full border-none bg-transparent px-4 py-1 text-gray-900 outline-none"
        />
        <button
          type="submit"
          className="m-2 mr-4 rounded-3xl border-2 border-lightBlack bg-lightBlack px-6 py-2 text-lg text-snow transition-colors duration-300 hover:bg-snow hover:text-lightBlack"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
