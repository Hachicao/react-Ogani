import React, { useEffect } from "react";
import { initializeQuantityButtons } from "../../../DAL/hooks/quantityProduct";
import { useParams } from "react-router-dom";
import { listProduct } from "../../../BLL/ProductItem";

export const ProductItemDetail = () => {
  useEffect(() => {
    initializeQuantityButtons();
  }, []);
  const { id } = useParams<{ id: string }>();
  console.log(id);
  const product = id
    ? listProduct.find((item) => item.id === parseInt(id))
    : null;
  console.log(product);
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <>
      <div className="col-lg-6 col-md-6">
        <div className="product__details__pic">
          <div className="product__details__pic__item">
            <img
              className="product__details__pic__item--large"
              src={product.imageUrl}
              alt={product.title}
            />
          </div>
          <div className="product__details__pic__slider ">
            <img
              data-imgbigurl="assest/img/product/details/product-details-2.jpg"
              src="assest/img/product/details/thumb-1.jpg"
              alt=""
            />
            <img
              data-imgbigurl="assest/img/product/details/product-details-3.jpg"
              src="assest/img/product/details/thumb-2.jpg"
              alt=""
            />
            <img
              data-imgbigurl="assest/img/product/details/product-details-5.jpg"
              src="assest/img/product/details/thumb-3.jpg"
              alt=""
            />
            <img
              data-imgbigurl="assest/img/product/details/product-details-4.jpg"
              src="assest/img/product/details/thumb-4.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6">
        <div className="product__details__text">
          <h3>{product.title}</h3>
          <div className="product__details__rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-o"></i>
            <span>(18 reviews)</span>
          </div>
          <div className="product__details__price">${product.price}</div>
          <p>{product.description}</p>
          <div className="product__details__quantity">
            <div className="quantity">
              <div className="pro-qty">
                <input type="text" value="1" />
              </div>
            </div>
          </div>
          <a href="#" className="primary-btn">
            ADD TO CARD
          </a>
          <a href="#" className="heart-icon">
            <span className="icon_heart_alt"></span>
          </a>
          <ul>
            <li>
              <b>Availability</b> <span>In Stock</span>
            </li>
            <li>
              <b>Shipping</b>{" "}
              <span>
                01 day shipping. <samp>Free pickup today</samp>
              </span>
            </li>
            <li>
              <b>Weight</b> <span>0.5 kg</span>
            </li>
            <li>
              <b>Share on</b>
              <div className="share">
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa fa-pinterest"></i>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
