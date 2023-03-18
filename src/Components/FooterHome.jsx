import React from "react";

export default function FooterHome() {
  return (
    <div className="footer-home">
      <div className="footer-row container">
        <div className="footer-col">
          <div className="footer-item">
            <img src="https://phimmoichillb.net/dev/images/logo.png" alt="" />
            <p>Trang web phim moi pha ke mà Nguyễn Bùi Tùng code ra</p>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-item">
            <h2>Phim mới</h2>
            <ul>
              <li>
                <a href=""> Phim lẻ mới</a>
              </li>
              <li>
                <a href=""> Phim chiếu rạp</a>
              </li>
              <li>
                <a href="">Phim võ thuật</a>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-item">
            <h2>Liên hệ tôi</h2>
            <ul>
              <li>
                <i className="fa-brands fa-facebook"></i>
                <a
                  href="https://www.facebook.com/nguyenbuitung99"
                  target="_blank"
                >
                  Facebook
                </a>
              </li>
              <li>
                <i className="fa-brands fa-tiktok" target="_blank"></i>
                <a href="https://www.tiktok.com/@tungafshop">Tiktok</a>
              </li>
              <li>
                <i
                  className="fa-sharp fa-solid fa-envelope"
                  target="_blank"
                ></i>
                <a href="mailto:nguyenbuitung4@gmail.com">Email</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
