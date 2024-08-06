import { useReducer } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { register } from "../../../services/authService";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  rePassword: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIRST_NAME":
      return { ...state, firstName: action.payload };
    case "SET_LAST_NAME":
      return { ...state, lastName: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_RE_PASSWORD":
      return { ...state, rePassword: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const RegisterForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitForm = async (data) => {
    const { success, message } = await register(data);

    if (!success) {
      alert(message);
      return;
    }

    dispatch({ type: "RESET" });

    const proceed = window.confirm(
      "Registration successful! Click OK to go to the login page.",
    );

    if (proceed) {
      navigate("/login");
    }
  };

  return (
    <form
      className="w-1/2 overflow-hidden p-8"
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <h2 className="mb-6 text-center text-3xl font-semibold text-lightBlack">
        Create Account
      </h2>
      <input
        type="text"
        value={state.firstName}
        placeholder="First Name"
        className={`mt-4 w-full rounded border border-gray-300 p-2 focus:border-customOrange focus:outline-none ${errors.firstName ? "border-red-500" : ""}`}
        {...formRegister("firstName", {
          required: "First name is required.",
          minLength: {
            value: 2,
            message: "First name must be at least 2 characters long.",
          },
        })}
        onChange={(e) =>
          dispatch({ type: "SET_FIRST_NAME", payload: e.target.value })
        }
      />
      {errors.firstName && (
        <p className="text-sm text-red-500">{errors.firstName.message}</p>
      )}

      <input
        type="text"
        value={state.lastName}
        placeholder="Last Name"
        className={`mt-4 w-full rounded border border-gray-300 p-2 focus:border-customOrange focus:outline-none ${errors.lastName ? "border-red-500" : ""}`}
        {...formRegister("lastName", {
          required: "Last name is required.",
          minLength: {
            value: 2,
            message: "Last name must be at least 2 characters long.",
          },
        })}
        onChange={(e) =>
          dispatch({ type: "SET_LAST_NAME", payload: e.target.value })
        }
      />
      {errors.lastName && (
        <p className="text-sm text-red-500">{errors.lastName.message}</p>
      )}

      <input
        type="email"
        value={state.email}
        placeholder="Email"
        className={`mt-4 w-full rounded border border-gray-300 p-2 focus:border-customOrange focus:outline-none ${errors.email ? "border-red-500" : ""}`}
        {...formRegister("email", {
          required: "Email is required.",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Email address is invalid.",
          },
        })}
        onChange={(e) =>
          dispatch({ type: "SET_EMAIL", payload: e.target.value })
        }
      />
      {errors.email && (
        <p className="text-sm text-red-500">{errors.email.message}</p>
      )}

      <input
        type="password"
        value={state.password}
        placeholder="Password"
        className={`mt-4 w-full rounded border border-gray-300 p-2 focus:border-customOrange focus:outline-none ${errors.password ? "border-red-500" : ""}`}
        {...formRegister("password", {
          required: "Password is required.",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters long.",
          },
          pattern: {
            value: /(?=.*[a-zA-Z])(?=.*[0-9])/,
            message: "Password must include both letters and numbers.",
          },
        })}
        onChange={(e) =>
          dispatch({ type: "SET_PASSWORD", payload: e.target.value })
        }
      />
      {errors.password && (
        <p className="text-sm text-red-500">{errors.password.message}</p>
      )}

      <input
        type="password"
        value={state.rePassword}
        placeholder="Confirm Password"
        className={`mt-4 w-full rounded border border-gray-300 p-2 focus:border-customOrange focus:outline-none ${errors.rePassword ? "border-red-500" : ""}`}
        {...formRegister("rePassword", {
          required: "Confirm password is required.",
          validate: (value) =>
            value === state.password || "Passwords do not match.",
        })}
        onChange={(e) =>
          dispatch({ type: "SET_RE_PASSWORD", payload: e.target.value })
        }
      />
      {errors.rePassword && (
        <p className="text-sm text-red-500">{errors.rePassword.message}</p>
      )}

      <button
        type="submit"
        className="mt-6 w-full rounded-lg border-2 border-customOrange bg-customOrange py-2 font-medium text-white transition-colors duration-200 hover:bg-white hover:text-customOrange"
      >
        SIGN UP
      </button>
    </form>
  );
};

export default RegisterForm;
