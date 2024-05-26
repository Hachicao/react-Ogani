import { Outlet } from "react-router-dom";
import { Header } from "../GUI/User/component/Header";
import { BannerHero } from "../GUI/User/component/BannerHero";
import { BannerCategory } from "../GUI/User/component/BannerCategory";

export const UserLayout = () => {
  return (
    <>
      <Header />
      {/* <BannerHero /> */}
      <BannerCategory />
      <Outlet />
    </>
  );
};
