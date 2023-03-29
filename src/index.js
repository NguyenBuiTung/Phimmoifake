import React from "react";
import ReactDOM from "react-dom/client";
// import HeaderHome from "./Components/HeaderHome";
import "./index.css";
import { Provider } from "react-redux";
import {
  unstable_HistoryRouter as HistoryRouter,
  Route,
  Routes,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import { store } from "./redux/configStore";
import HomeTemPlate from "./templates/HomeTemPlate";
// import Home from "./Pages/Home";
// import Detail from "./Pages/Detail";
// import DanhSachPhim from "./Components/DanhSachPhim";
// import DanhSachPhimMoi from "./Components/DanhSachPhimMoi";
// import DanhSachPhimVienTuong from "./Components/DanhSachPhimVienTuong";
// import DanhSachPhimKinhDi from "./Components/DanhSachPhimKinhDi";
// import DanhSachPhimHanhDong from "./Components/DanhSachPhimHanhDong";
const Home = React.lazy(() => import("./Pages/Home"));
const Detail = React.lazy(() => import("./Pages/Detail"));
const DanhSachPhim = React.lazy(() => import("./Components/DanhSachPhim"));
const DanhSachPhimMoi = React.lazy(() =>
  import("./Components/DanhSachPhimMoi")
);
const DanhSachPhimVienTuong = React.lazy(() =>
  import("./Components/DanhSachPhimVienTuong")
);
const DanhSachPhimKinhDi = React.lazy(() =>
  import("./Components/DanhSachPhimKinhDi")
);
const DanhSachPhimHanhDong = React.lazy(() =>
  import("./Components/DanhSachPhimHanhDong")
);
export const history = createBrowserHistory();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <React.Suspense>
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
            <Route
              path="/phimhanhdong"
              element={<DanhSachPhimHanhDong />}
            ></Route>
            <Route path="/detail">
              <Route path=":id" element={<Detail />}></Route>
            </Route>
          </Route>
        </Routes>
      </React.Suspense>
    </HistoryRouter>
    {/* </PersistGate> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
