import RegisterForm from "./RegisterForm";
import WelcomeBackSection from "./WelcomeBackSection";

const RegisterContainer = () => {
  return (
    <div className="flex items-center justify-center rounded-2xl bg-white">
      <div className="flex w-full max-w-4xl overflow-hidden rounded-2xl border border-customOrange shadow-lg">
        <WelcomeBackSection />
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterContainer;
