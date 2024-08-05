import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../pages/HomePage";
import Menu from "../pages/MenuPage";
import MenuItemDetails from "../pages/MenuItemDetails";
import Footer from "../components/layout/footer/Footer";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import { AuthProvider } from "../context/AuthContext";
import ScrollToTop from "../components/layout/ScrollToTop";

const Layout = () => (
  <div>
    <Header />
    <Outlet />
    <Footer />
  </div>
  <AuthProvider>
    <div>
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  </AuthProvider>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/menu/:id",
        element: <MenuItemDetails />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

export default router;
