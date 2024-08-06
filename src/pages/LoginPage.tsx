import LoginContainer from "../components/features/auth/LoginContainer";
import Header from "../components/layout/header/Header";

const LoginPage = () => {
  return (
    <div className="flex min-h-[90vh] items-center justify-center">
      <Header color="snow" />
      <LoginContainer />
    </div>
  );
};

export default LoginPage;
