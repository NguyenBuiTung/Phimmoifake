import { Button, Rate } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getProductDetailApi } from "../redux/productReducer/productReducer";

export default function Detail() {
  const { productDetail } = useSelector(
    (state) => state.persistedReducer.productReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    const action = getProductDetailApi();
    dispatch(action);
  }, []);
  return (
    <div className="detail">
      <div className="container">
        <div className="movie_card" id="bright">
          <div className="info_section">
            <div className="movie_header">
              <iframe
                src={productDetail.trailer}
                allowfullscreen
                title={productDetail.biDanh}
              
              ></iframe>
              <h1>{productDetail.tenPhim}</h1>
              <h4>
                <Rate disabled value={productDetail.danhGia} />
              </h4>
            </div>
            <div className="movie_desc">
              <p className="text">{productDetail.moTa}</p>
            </div>
            <div className="movie_social">
              <ul>
                <li>
                  <NavLink to={productDetail.trailer}>
                    <Button className="fw-bolder">Xem Trailer</Button>
                  </NavLink>
                </li>
                <li>Ngày khởi chiếu : {productDetail.ngayKhoiChieu}</li>
              </ul>
            </div>
          </div>
          <div
            className="blur_back bright_back"
            style={{ backgroundImage: `url(${productDetail.hinhAnh})` }}
          />
        </div>
      </div>
    </div>
  );
}
