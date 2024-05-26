import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../GUI/User/Pages/Home";
import { ProductCategory } from "../GUI/User/Pages/ProductCategory";
import { ProductDetail } from "../GUI/User/Pages/ProductDetail";
import { ShoppingCart } from "../GUI/User/Pages/ShoppingCart";
import Dashboard from "../GUI/Admin/Pages/Dashboard";
import UserManagement from "../GUI/Admin/Pages/UserManagement";
import ProductManagement from "../GUI/Admin/Pages/ProductManagement";
import { UserLayout } from "./UserLayout";
import { AdminLayout } from "./AdminLayout";
import ErrorPage from "../GUI/Admin/componentAdmin/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "ProductCategory",
        element: <ProductCategory />,
      },
      {
        path: "ProductDetail/:id",
        element: <ProductDetail />,
      },
      {
        path: "ShoppingCart",
        element: <ShoppingCart />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "ProductManagement",
        element: <ProductManagement />,
      },
      {
        path: "UserManagement",
        element: <UserManagement />,
      },
    ],
  },
]);
export function Routes() {
  return <RouterProvider router={router} />;
}
