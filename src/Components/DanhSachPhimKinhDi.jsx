import React, { useEffect } from "react";
import { Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductDetailApi,
  getProductMovieKinhDiApi,
} from "../redux/productReducer/productReducer";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;
export default function DanhSachPhimKinhDi() {
  const { productMovieKinhDi } = useSelector(
    (state) => state.persistedReducer.productReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    const action = getProductMovieKinhDiApi();
    dispatch(action);
  }, []);
  const navigate = useNavigate();
  const goMovie = (id) => {
    // console.log("tung", id);
    const action = getProductDetailApi(id);
    dispatch(action);
    navigate(`/detail/id=${id}`);
  };
  return (
    <div className="danhsachphim" id="phimhot">
      <div className="container">
        <h3>DANH SÁCH PHIM KINH DỊ</h3>
        <div className="danhsachphim-row">
          <div className="danhsachphim-col">
            {productMovieKinhDi.map((item, index) => {
              return (
                <Card
                  key={index}
                  hoverable
                  cover={
                    <img
                      alt="example"
                      src={item.hinhAnh}
                      onClick={() => {
                        goMovie(item.maPhim);
                      }}
                    />
                  }
                >
                  <Meta title={item.tenPhim} />
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
