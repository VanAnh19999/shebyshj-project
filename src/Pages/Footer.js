import React from "react";
import "antd/dist/antd.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__main">
          <div className="footer__main-left">
            <h3>Thông tin</h3>
            <div className="footer__main-left-content">
              <ul>
                <li>Tìm kiếm</li>
                <li>Giới thiệu</li>
                <li>Hệ thống cửa hàng</li>
              </ul>
            </div>
          </div>
          <div className="footer__main-center">
            <h3>Sản phẩm</h3>
            <div className="footer__main-left-content">
              <ul>
                <li>New arrival</li>
                <li>Đầm</li>
                <li>Áo</li>
                <li>Váy</li>
                <li>Quần</li>
              </ul>
            </div>
          </div>
          <div className="footer__main-right">
            <h3>Chính sách</h3>
            <div className="footer__main-left-content">
              <ul>
                <li>Chính sách và quy định chung</li>
                <li>Hướng dẫn mua hàng</li>
                <li>Hướng dẫn thanh toán</li>
                <li>Chính sách vận chuyển</li>
                <li>Chính sách đổi hàng</li>
                <li>Chính sách bảo mật</li>
                <li>Kiểm tra đơn hàng</li>
              </ul>
            </div>
          </div>
          <div className="footer__main-last">
            <h3>Khác</h3>
            <div className="footer__main-left-content">
              <ul>
                <li>Blog</li>
                <li>Liên hệ</li>
                <li>Tuyển dụng</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
      <div className="break"></div>
        <div className="container">
      <div className="footer__main-introduct">
        <div className="footer__main-logo">
            <img src="https://theme.hstatic.net/1000370235/1000472578/14/logo.png?v=870" alt="footer"/>
        <div className="footer__main-check">
            <img src="https://file.hstatic.net/1000370235/file/dathongbao-vientrang-ne_74f3585b557a4fb889313f5c08a1e602_grande.png" alt="footer"/>
        </div>    
        </div>
        <div className="footer__main-info">
            <p>CÔNG TY TNHH SHEBYSHJ</p>
            <p>Địa chỉ: 63 Tú Xương, Phường 7, <br/>Quận 3, Thành phố Hồ Chí Minh.</p>
            
            <p>Số ĐKKD 0316182959 do Sở<br/> Kế hoạch đầu tư TP.HCM cấp ngày<br/> 05/3/2020</p>
            
            <p>Copyright  © 2019 She By Shj</p>
        </div>
        <div className="footer__main-email">
        <p>Email: pvanh599@gmail.com</p>
        </div>
        <div className="footer__main-phone">
        <p>SĐT: 0129912922</p>
        </div>
        </div>
        </div>
        <div className="break"></div>
        <div className="footer__last">
        <div>
        <img src="https://theme.hstatic.net/1000370235/1000472578/14/payment-icon.png?v=874" alt="logo"/>
        </div>
        <div className="footer__last-menu">
        <ul>
            <li>
                Tìm kiếm
            </li>
            <li>
                Giới thiệu
            </li>
            <li>Hệ thống cửa hàng</li>
        </ul>
        </div>
        </div>
    </div>
  );
};

export default Footer;
