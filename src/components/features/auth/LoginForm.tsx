import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { login } from "../../../services/authService";

const LoginForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    const { email, password } = data;

    const { success, message, user } = await login(email, password);

    if (!success) {
      alert(message);
      return;
    }

    const userData = {
      id: user.id,
      email: user.email,
    };

    if (user) {
      localStorage.setItem("userData", JSON.stringify(userData));
      navigate("/");
    }
  };

  return (
    <form
      className="flex w-1/2 flex-col justify-center p-8 text-center"
      onSubmit={handleSubmit(handleLogin)}
    >
      <h2 className="mb-6 text-3xl font-semibold text-lightBlack">Sign in</h2>

      <input
        type="email"
        placeholder="Email"
        className={`mt-4 w-full rounded border border-gray-300 p-2 focus:border-customOrange focus:outline-none ${errors.email ? "border-red-500" : ""}`}
        {...register("email", {
          required: "Email is required.",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Email address is invalid.",
          },
        })}
      />
      {errors.email && (
        <p className="text-sm text-red-500">{errors.email.message}</p>
      )}

      <input
        type="password"
        placeholder="Password"
        className={`mt-4 w-full rounded border border-gray-300 p-2 focus:border-customOrange focus:outline-none ${errors.password ? "border-red-500" : ""}`}
        {...register("password", {
          required: "Password is required.",
        })}
      />
      {errors.password && (
        <p className="text-sm text-red-500">{errors.password.message}</p>
      )}

      <button
        type="submit"
        className="mt-9 w-full rounded-lg border-2 border-customOrange bg-customOrange py-2 font-medium text-white transition-colors duration-200 hover:bg-white hover:text-customOrange"
      >
        SIGN IN
      </button>
    </form>
  );
};

export default LoginForm;
