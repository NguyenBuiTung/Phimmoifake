import React from "react";
import ReactDOM from "react-dom/client";
// import HeaderHome from "./Components/HeaderHome";
import "./index.css";
import { Provider } from "react-redux";
import {
  unstable_HistoryRouter as HistoryRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import { store } from "./redux/configStore";
import HomeTemPlate from "./templates/HomeTemPlate";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import DanhSachPhim from "./Components/DanhSachPhim";
import DanhSachPhimMoi from "./Components/DanhSachPhimMoi";
import DanhSachPhimVienTuong from "./Components/DanhSachPhimVienTuong";
import DanhSachPhimKinhDi from "./Components/DanhSachPhimKinhDi";
import DanhSachPhimHanhDong from "./Components/DanhSachPhimHanhDong";
export const history = createBrowserHistory();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/" element={<HomeTemPlate />}>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/phimhot" element={<DanhSachPhim />}></Route>
          <Route path="/phimmoi" element={<DanhSachPhimMoi />}></Route>
          <Route
            path="/phimvientuong"
            element={<DanhSachPhimVienTuong />}
          ></Route>
          <Route path="/phimkinhdi" element={<DanhSachPhimKinhDi />}></Route>
          <Route path="/phimhanhdong" element={<DanhSachPhimHanhDong />}></Route>
          <Route path="/detail">
            <Route path=":id" element={<Detail />}></Route>
          </Route>
          {/* <Route path="/" element={<PrivateRoute />}>
            <Route path="/shop" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Oder />} />
          </Route> */}
          {/* <Route path="/shop" element={<Profile />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/order" element={<Oder />}></Route>
          <Route path="*" element={<Navigate to={"home"} />}></Route> */}
        </Route>
        {/* <Route path="/" element={<TemplateBeautiful />}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Route> */}
      </Routes>
    </HistoryRouter>
    {/* </PersistGate> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
