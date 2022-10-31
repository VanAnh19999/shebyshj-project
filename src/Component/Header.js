import React from "react";
import { Link } from "react-router-dom";
import "../Style/index.css";
import { Dropdown, Menu, Space } from "antd";

import "antd/dist/antd.css";

const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: <Link to="/collections/san-pham-moi">NEW ARRIVALS</Link>,
      },
      {
        key: "2",
        label: <Link to="/collections/dam">ĐẦM</Link>,
      },
      {
        key: "3",
        label: <Link to="/collections/ao">ÁO</Link>,
      },
      {
        key: "4",
        label: <Link to="/collections/quan">QUẦN</Link>,
      },
      {
        key: "5",
        label: <Link to="/collections/vay">VÁY</Link>,
      },
    ]}
  />
);

const Header = (props) => {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="container">
          <div className="header__menu">
            <div className="header__logo">
              <Link to="/">
                <img
                  src="https://theme.hstatic.net/1000370235/1000472578/14/logo.png?v=870"
                  alt="logo"
                ></img>
              </Link>
            </div>
            <ul className="header__main">
              <li>
                <Link to="/collections/pre-fall-22">PRE FALL'22</Link>
              </li>
              <li>
                <Link to="/collections/san-pham-moi">NEW ARRIVALS</Link>
              </li>
              <li>
                <Dropdown overlay={menu}>
                    <Space>
                      <Link to="/collections/all">PRODUCTS</Link>
                    </Space>
                </Dropdown>
              </li>
              <li>
                <Link to="/collections/hot-products">BEST SELLER</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
     </div>
    
  );
};

export default Header;
