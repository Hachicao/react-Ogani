import { Outlet } from "react-router-dom";
import { Navbar } from "../GUI/Admin/componentAdmin/navbar";
import { Footer } from "../GUI/User/component/Footer";
import { FooterAdmin } from "../GUI/Admin/componentAdmin/FooterAdmin";

export const AdminLayout = () => {
  return (
    <>
      <div id="wrapper">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};
