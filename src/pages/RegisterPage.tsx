import RegisterContainer from "../components/features/auth/RegisterContainer";
import Header from "../components/layout/header/Header";

const RegisterPage = () => {
  return (
    <div className="flex min-h-[90vh] items-center justify-center">
      <Header color="snow" />
      <RegisterContainer />
    </div>
  );
};

export default RegisterPage;
