import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../../services/authService";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      onSubmit={handleSubmit}
    >
      <h2 className="mb-6 text-3xl font-semibold text-lightBlack">Sign in</h2>
      <input
        type="email"
        placeholder="Email"
        className="mb-6 w-full rounded border border-gray-300 p-2 focus:border-customOrange focus:outline-none"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="mb-9 w-full rounded border border-gray-300 p-2 focus:border-customOrange focus:outline-none"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className="w-full rounded-lg border-2 border-customOrange bg-customOrange py-2 font-medium text-white transition-colors duration-200 hover:bg-white hover:text-customOrange"
      >
        SIGN IN
      </button>
    </form>
  );
};

export default LoginForm;
