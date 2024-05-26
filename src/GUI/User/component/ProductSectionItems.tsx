import React from "react";
import { ProductSectionItemProps } from "../../../BLL/ProductSectionItem";

export const ProductSectionItems = ({
  imageUrl,
  percent,
  type,
  name,
  priceAfterDiscount,
  priceBeforeDiscount,
}: ProductSectionItemProps) => {
  console.log(imageUrl);
  return (
    <>
      <div className="product__discount__item">
        <div
          className="product__discount__item__pic set-bg"
          //   style={{
          //     backgroundImage: `url(/assest/img/product/discount/pd-1.jpg)`,
          //   }}
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="product__discount__percent">{percent}%</div>
          <ul className="product__item__pic__hover">
            <li>
              <a href="#">
                <i className="fa fa-heart"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-retweet"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-shopping-cart"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="product__discount__item__text">
          <span>{type}</span>
          <h5>
            <a href="#">{name}</a>
          </h5>
          <div className="product__item__price">
            ${priceAfterDiscount} <span>${priceBeforeDiscount}</span>
          </div>
        </div>
      </div>
    </>
  );
};
