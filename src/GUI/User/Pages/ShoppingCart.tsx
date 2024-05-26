import React, { useEffect } from "react";
import { Header } from "../component/Header";
import { BannerCategory } from "../component/BannerCategory";
import { BreadcrumbSection } from "../component/BreadcrumbSection";
import { ShoppingCartItems } from "../component/ShoppingCartItems";
import { Footer } from "../component/Footer";
import { useScript } from "../../../DAL/hooks/useScript";
import { initializeQuantityButtons } from "../../../DAL/hooks/quantityProduct";

export const ShoppingCart = () => {
  useEffect(() => {
    initializeQuantityButtons();
  }, []);
  return (
    <>
      <body>
        {/* <Header /> */}
        {/* <BannerCategory /> */}
        <BreadcrumbSection />
        <ShoppingCartItems />
        <Footer />
      </body>
    </>
  );
};
