import React from "react";
import { RelatedProductItem } from "./RelatedProductItem";

export const RelatedProduct = () => {
  const relatedProducts = [
    {
      id: 1,
      imageUrl: "/assest/img/product/product-1.jpg",
      title: "Product 1",
      price: 10.99,
    },
    {
      id: 2,
      imageUrl: "/assest/img/product/product-2.jpg",
      title: "Product 2",
      price: 20.99,
    },
    {
      id: 3,
      imageUrl: "/assest/img/product/product-3.jpg",
      title: "Product 3",
      price: 30.99,
    },
    {
      id: 4,
      imageUrl: "/assest/img/product/product-4.jpg",
      title: "Product 4",
      price: 40.99,
    },
  ];
  return (
    <>
      <section className="related-product">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title related__product__title">
                <h2>Related Product</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {relatedProducts.map((product, index) => (
              <RelatedProductItem
                key={product.id}
                imageUrl={product.imageUrl}
                title={product.title}
                price={product.price}
                id={0}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
