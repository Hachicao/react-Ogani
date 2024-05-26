import React from "react";
import { ProuductItemProps } from "../../../BLL/ProductItem";
import { Link } from "react-router-dom";

export const ProductCategoryItems = ({
  id,
  imageUrl,
  title,
  price,
}: ProuductItemProps) => {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="product__item" >
          <Link to={`/ProductDetail/${id}`}>
            <div
              className="product__item__pic set-bg"
              style={{
                backgroundImage: `url(${imageUrl})`,
              }}
            >
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
            <div className="product__item__text">
              <h6>
                <a href="#">{title}</a>
              </h6>
              <h5>${price}</h5>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
