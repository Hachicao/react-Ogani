import React from "react";
import { FeaturedItem } from "./FeaturedItem";
import { listProduct } from "../../../BLL/ProductItem";
import { useSearchParams } from "react-router-dom";
export const FeaturedProduct = () => {
  const [searchParams] = useSearchParams();

  const getFilteredProducts = () => {
    const search = searchParams.get("search");
    if (!search) {
      return listProduct;
    } else {
      return listProduct.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }
  };

  const filteredProducts = getFilteredProducts();

  return (
    <section className="featured spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Featured Product</h2>
            </div>
            <div className="featured__controls">
              <ul>
                <li className="active" data-filter="*">
                  All
                </li>
                <li data-filter=".oranges">Oranges</li>
                <li data-filter=".fresh-meat">Fresh Meat</li>
                <li data-filter=".vegetables">Vegetables</li>
                <li data-filter=".fastfood">Fastfood</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row featured spad">
          {filteredProducts.map((item) => (
            <FeaturedItem
              key={item.id}
              imageUrl={item.imageUrl}
              title={item.title}
              price={item.price}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
