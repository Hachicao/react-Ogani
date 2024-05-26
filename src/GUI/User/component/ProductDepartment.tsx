import React from "react";

export const ProductDepartment = () => {
  return (
    <>
      <div className="col-lg-3 col-md-5">
        <div className="sidebar">
          <div className="sidebar__item">
            <h4>Department</h4>
            <ul>
              <li>
                <a href="#">Fresh Meat</a>
              </li>
              <li>
                <a href="#">Vegetables</a>
              </li>
              <li>
                <a href="#">Fruit & Nut Gifts</a>
              </li>
              <li>
                <a href="#">Fresh Berries</a>
              </li>
              <li>
                <a href="#">Ocean Foods</a>
              </li>
              <li>
                <a href="#">Butter & Eggs</a>
              </li>
              <li>
                <a href="#">Fastfood</a>
              </li>
              <li>
                <a href="#">Fresh Onion</a>
              </li>
              <li>
                <a href="#">Papayaya & Crisps</a>
              </li>
              <li>
                <a href="#">Oatmeal</a>
              </li>
            </ul>
          </div>

          <div className="sidebar__item">
            <h4>Popular Size</h4>
            <div className="sidebar__item__size">
              <label htmlFor="large">
                Large
                <input type="radio" id="large" />
              </label>
            </div>
            <div className="sidebar__item__size">
              <label htmlFor="medium">
                Medium
                <input type="radio" id="medium" />
              </label>
            </div>
            <div className="sidebar__item__size">
              <label htmlFor="small">
                Small
                <input type="radio" id="small" />
              </label>
            </div>
            <div className="sidebar__item__size">
              <label htmlFor="tiny">
                Tiny
                <input type="radio" id="tiny" />
              </label>
            </div>
          </div>
          <div className="sidebar__item">
            <div className="latest-product__text">
              <h4>Latest Products</h4>
              <div className="latest-product__slider owl-carousel">
                <div className="latest-prdouct__slider__item">
                  <a href="#" className="latest-product__item">
                    <div className="latest-product__item__pic">
                      <img src="img/latest-product/lp-1.jpg" alt="" />
                    </div>
                    <div className="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </a>
                  <a href="#" className="latest-product__item">
                    <div className="latest-product__item__pic">
                      <img src="img/latest-product/lp-2.jpg" alt="" />
                    </div>
                    <div className="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </a>
                  <a href="#" className="latest-product__item">
                    <div className="latest-product__item__pic">
                      <img src="img/latest-product/lp-3.jpg" alt="" />
                    </div>
                    <div className="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </a>
                </div>
                <div className="latest-prdouct__slider__item">
                  <a href="#" className="latest-product__item">
                    <div className="latest-product__item__pic">
                      <img src="img/latest-product/lp-1.jpg" alt="" />
                    </div>
                    <div className="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </a>
                  <a href="#" className="latest-product__item">
                    <div className="latest-product__item__pic">
                      <img src="img/latest-product/lp-2.jpg" alt="" />
                    </div>
                    <div className="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </a>
                  <a href="#" className="latest-product__item">
                    <div className="latest-product__item__pic">
                      <img src="img/latest-product/lp-3.jpg" alt="" />
                    </div>
                    <div className="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
