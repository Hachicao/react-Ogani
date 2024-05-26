import React from "react";
import { ProuductItemProps } from "../../../BLL/ProductItem";

export const TopRatedProductItems = ({
  id,
  imageUrl,
  title,
  price,
}: ProuductItemProps) => {
  return (
    <>
      <div className="latest-prdouct__slider__item">
        <a href="#" className="latest-product__item">
          <div className="latest-product__item__pic">
            <img src={imageUrl} alt="" />
          </div>
          <div className="latest-product__item__text">
            <h6>{title}</h6>
            <span>${price}</span>
          </div>
        </a>
      </div>
    </>
  );
};
