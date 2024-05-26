import React from "react";

export const Categories = () => {
  return (
    <>
      <section className="categories">
        <div className="container">
          <div className="row">
            <div className="categories__slider  ">
              <div className="col-lg-3">
                <div
                  className="categories__item set-bg"
                  style={{
                    backgroundImage: `url("assest/img/categories/cat-1.jpg")`,
                  }}
                >
                  <h5>
                    <a href="#">Fresh Fruit</a>
                  </h5> 
                </div>
              </div>            
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
