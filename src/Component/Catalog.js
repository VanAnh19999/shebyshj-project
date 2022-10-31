import React from "react";
import "../Style/index.css";

const Catalog = () => {
  return (
    <div className="main">
      <div className="log">
        <div className="container">
          <div className="log__container row">
            <div className="log__img col-xs-6 col-md-6 gx-5">
              <img
                src="https://product.hstatic.net/1000370235/product/2_5d4d2df4e904465eaf5623f143026825_master.jpg"
                alt="logo"
              />
              <div className="log__img-txt">
                <h4>TOPS</h4>
                <p>MUA NGAY</p>
              </div>
            </div>
            <div className="log__img col-xs-6 col-md-6 gx-5">
              <img
                src="https://product.hstatic.net/1000370235/product/2_5d4d2df4e904465eaf5623f143026825_master.jpg"
                alt="logo"
              />
              <div className="log__img-txt">
                <h4>TOPS</h4>
                <p>MUA NGAY</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="collection">
        <div className="container">
          <div className="row">
            <h1>PRE FALL'22</h1>
          </div>
          <div className="collection__list">
              <div className="product">
            <div className="row">
              <div className="col-xs-6 col-md-4">
                <div className="collection__list-product">
                  <div className="collection__list-product-img">
                    <img
                      src="https://product.hstatic.net/1000370235/product/2_5d4d2df4e904465eaf5623f143026825_master.jpg"
                      alt="fall"
                    />
                  </div>
                  <div className="collection__list-txt">
                    <h3>Casi dress</h3>
                    <div className="product-price">
                      <p>550000</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-md-4">
                <div className="collection__list-product">
                  <div className="collection__list-product-img">
                    <img
                      src="https://product.hstatic.net/1000370235/product/2_5d4d2df4e904465eaf5623f143026825_master.jpg"
                      alt="fall"
                    />
                  </div>
                  <div className="collection__list-txt">
                    <h3>Casi dress</h3>
                    <div className="product-price">
                      <p>550000</p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
