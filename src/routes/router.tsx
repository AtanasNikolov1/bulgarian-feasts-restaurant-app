import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import MenuItemDetails from "../pages/MenuItemDetails";


const router = createBrowserRouter([
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
]);

export default router;