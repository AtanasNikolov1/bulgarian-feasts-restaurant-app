import { useReducer } from "react";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, rePassword } = state;

    const { success, message } = await register({
      firstName,
      lastName,
      email,
      password,
      rePassword,
    });

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
    <form className="w-1/2 overflow-hidden p-8" onSubmit={handleSubmit}>
      <h2 className="mb-6 text-center text-3xl font-semibold text-lightBlack">
        Create Account
      </h2>
      <input
        type="text"
        value={state.firstName}
        placeholder="First Name"
        className="mb-6 w-full rounded border border-gray-300 p-2 focus:border-customOrange focus:outline-none"
        onChange={(e) =>
          dispatch({ type: "SET_FIRST_NAME", payload: e.target.value })
        }
      />
      <input
        type="text"
        value={state.lastName}
        placeholder="Last Name"
        className="mb-6 w-full rounded border border-gray-300 p-2 focus:border-customOrange focus:outline-none"
        onChange={(e) =>
          dispatch({ type: "SET_LAST_NAME", payload: e.target.value })
        }
      />
      <input
        type="email"
        value={state.email}
        placeholder="Email"
        className="mb-6 w-full rounded border border-gray-300 p-2 focus:border-customOrange focus:outline-none"
        onChange={(e) =>
          dispatch({ type: "SET_EMAIL", payload: e.target.value })
        }
      />
      <input
        type="password"
        value={state.password}
        placeholder="Password"
        className="mb-6 w-full rounded border border-gray-300 p-2 focus:border-customOrange focus:outline-none"
        onChange={(e) =>
          dispatch({ type: "SET_PASSWORD", payload: e.target.value })
        }
      />
      <input
        type="password"
        value={state.rePassword}
        placeholder="Confirm Password"
        className="mb-9 w-full rounded border border-gray-300 p-2 focus:border-customOrange focus:outline-none"
        onChange={(e) =>
          dispatch({ type: "SET_RE_PASSWORD", payload: e.target.value })
        }
      />
      <button
        type="submit"
        className="w-full rounded-lg border-2 border-customOrange bg-customOrange py-2 font-medium text-white transition-colors duration-200 hover:bg-white hover:text-customOrange"
      >
        SIGN UP
      </button>
    </form>
  );
};

export default RegisterForm;
