import React, { useEffect, useState } from "react";
import { Card, Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductDetailApi,
  getProductMovieNewApi,
} from "../redux/productReducer/productReducer";
import { NavLink, useNavigate } from "react-router-dom";
const { Meta } = Card;
export default function DanhSachPhimMoi() {
  const { productMovieNew } = useSelector(
    (state) => state.persistedReducer.productReducer
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const action = getProductMovieNewApi(current);
    dispatch(action);
  }, []);
  const [current, setCurrent] = useState(1);
  const onChange = async (page) => {
    console.log(page);
    setCurrent(page);
    const action = getProductMovieNewApi(page);
    await dispatch(action);
  };
  const gotoMovie = (id) => {
    const action = getProductDetailApi(id);
    dispatch(action);
    navigate(`/detail/id=${id}`);
  };
  return (
    <div className="danhsachphim" id="phimmoi">
      <div className="container">
        <h3>DANH SÁCH PHIM MỚI</h3>
        <div className="danhsachphim-row">
          <div className="danhsachphim-col">
            {productMovieNew.map((item, index) => {
              return (
                <Card
                  key={index}
                  hoverable
                  cover={
                    <img
                      alt="example"
                      src={item.hinhAnh}
                      onClick={() => {
                        gotoMovie(item.maPhim);
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
        <Pagination current={current} total={20} onChange={onChange} />;
      </div>
    </div>
  );
}
