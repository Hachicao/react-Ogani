import React from "react";
import { ProductItemDetail } from "./ProductItemDetail";
import { ProductDescription } from "./ProductDescription";

export const ProductDetailItems = () => {
  return (
    <>
      <section className="product-details spad">
        <div className="container">
          <div className="row">
            <ProductItemDetail />
            <ProductDescription />
          </div>
        </div>
      </section>
    </>
  );
};
