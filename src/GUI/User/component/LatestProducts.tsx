import React from "react";
import { LatestProductItem } from "./LatestProductItem";
export const LatestProducts = () => {
  const latestProducts = [
    {
      id: 1,
      imageUrl: "assest/img/latest-product/lp-1.jpg",
      title: "Crab Pool Security",
      price: 30,
    },
    {
      id: 2,
      imageUrl: "assest/img/latest-product/lp-2.jpg",
      title: "Crab Pool Security",
      price: 30,
    },
    {
      id: 3,
      imageUrl: "assest/img/latest-product/lp-3.jpg",
      title: "Crab Pool Security",
      price: 30,
    },
  ];
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div className="latest-products__text">
          <h4>Latest Products</h4>
          <div className="latest-products__slider ">
            {latestProducts.map((product, index) => (
              <LatestProductItem
                key={product.id}
                imageUrl={product.imageUrl}
                title={product.title}
                price={product.price}
                id={0}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
