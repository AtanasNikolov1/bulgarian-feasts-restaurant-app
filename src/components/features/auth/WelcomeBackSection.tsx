import { Link } from "react-router-dom";

const WelcomeBackSection = () => {
  return (
    <div className="flex w-1/2 flex-col justify-center bg-orangeGradient p-8 text-white">
      <div className="pt-8 text-center">
        <h2 className="mb-14 font-headings text-4xl font-bold">
          Welcome Back!
        </h2>
        <p className="mb-24 text-lg">
          Already have an account? Sign in with your personal info to stay
          connected with us.
        </p>
      </div>

      <Link
        to="/login"
        className="w-full rounded-lg border-2 border-lightBlack bg-lightBlack py-2 text-center font-medium text-white transition-colors duration-200 hover:bg-white hover:text-lightBlack"
      >
        SIGN IN
      </Link>
    </div>
  );
};

export default WelcomeBackSection;
