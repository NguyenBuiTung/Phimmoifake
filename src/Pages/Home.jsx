import React from "react";
import { Carousel } from "antd";
import { bannerApi } from "../redux/productReducer/productReducer";
import { useDispatch, useSelector } from "react-redux";
import DanhSachPhim from "../Components/DanhSachPhim";
import DanhSachPhimMoi from "../Components/DanhSachPhimMoi";
// import { TOKEN_CYBERSOFT } from "../util/config";
const contentStyle = {
  margin: 0,
//   height: "500px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
//   background: "#364d79",
};
export default function Home() {
  const { banner } = useSelector(
    (state) => state.persistedReducer.productReducer
  );
  const dispatch = useDispatch();
  const action = bannerApi();
  dispatch(action);
  const onChange = (currentSlide) => {};
  return (
    <div className="banner">
      <Carousel afterChange={onChange}>
       {banner.map((item,index)=>{
        return(
            <div key={index}>
            <h3 style={contentStyle}><img src={item.hinhAnh} alt="" /></h3>
          </div>
        )
       })}
      </Carousel>
      <DanhSachPhim/>
      <DanhSachPhimMoi/>
    </div>
  );
}
