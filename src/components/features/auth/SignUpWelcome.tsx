import { Link } from "react-router-dom";

const SignUpWelcome = () => {
  return (
    <div className="flex w-1/2 flex-col justify-center bg-orangeGradient p-8 text-white">
      <div className="pt-8 text-center">
        <h2 className="mb-14 font-headings text-4xl font-bold">
          Ready to Get Started?
        </h2>
        <p className="mb-24 text-lg">
          Sign up now to create your account and explore all the amazing
          features we offer.
        </p>
      </div>

      <Link
        to="/register"
        className="w-full rounded-lg border-2 border-lightBlack bg-lightBlack py-2 text-center font-medium text-white transition-colors duration-200 hover:bg-white hover:text-lightBlack"
      >
        SIGN UP
      </Link>
    </div>
  );
};

export default SignUpWelcome;
