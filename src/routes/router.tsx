import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../pages/HomePage";
import Menu from "../pages/MenuPage";
import MenuItemDetails from "../pages/MenuItemDetails";
import Footer from "../components/layout/footer/Footer";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import { AuthProvider } from "../context/AuthContext";
import CartPage from "../pages/CartPage";
import AddReviewPage from "../pages/AddReviewPage";
import EditReviewPage from "../pages/EditReviewPage";
import ScrollToTop from "../components/layout/ScrollToTop";
import PageNotFound from "../pages/PageNotFound";
import RequireAuth from "../guards/RequireAuth";
import RedirectIfAuthenticated from "../guards/RedirectIfAuthenticated";

const Layout = () => (
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
        path: "/menu/:id/reviews/add",
        element: (
          <RequireAuth>
            <AddReviewPage />
          </RequireAuth>
        ),
      },
      {
        path: "/menu/:id/reviews/edit/:reviewId",
        element: (
          <RequireAuth>
            <EditReviewPage />
          </RequireAuth>
        ),
      },

      {
        path: "/register",
        element: (
          <RedirectIfAuthenticated>
            <RegisterPage />
          </RedirectIfAuthenticated>
        ),
      },
      {
        path: "/login",
        element: (
          <RedirectIfAuthenticated>
            <LoginPage />
          </RedirectIfAuthenticated>
        ),
      },
      {
        path: "/cart",
        element: (
          <RequireAuth>
            <CartPage />
          </RequireAuth>
        ),
      },
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;
