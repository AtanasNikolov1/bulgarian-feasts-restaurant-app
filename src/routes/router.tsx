import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import MenuItemDetails from "../pages/MenuItemDetails";
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";

const Layout = () => (
  <div>
    <Header />
    <Outlet />
    <Footer />
  </div>
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
    ],
  },
]);

export default router;
