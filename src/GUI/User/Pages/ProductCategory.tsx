import React, { useEffect } from "react";
import { Header } from "../component/Header";
import { BreadcrumbSection } from "../component/BreadcrumbSection";
import { ProductSection } from "../component/ProductSection";
import { useScript } from "../../../DAL/hooks/useScript";
import { Footer } from "../component/Footer";
import { BannerCategory } from "../component/BannerCategory";
export const ProductCategory = () => {
  //   useScript();
  return (
    <>
      <body>
        <BreadcrumbSection />
        <ProductSection />
        <Footer />
      </body>
    </>
  );
};
