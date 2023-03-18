import { createSlice } from "@reduxjs/toolkit";
import { http } from "../../util/config";
const initialState = {
  banner: [],
  productMovie: [],
  productMovieNew: [],
  productMovieVienTuong: [],
  productMovieKinhDi:[],
  productMovieHanhDong:[],
  productDetail: [],
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    bannerAction: (state, action) => {
      state.banner = action.payload;
    },
    getProductMovieAction: (state, action) => {
      state.productMovie = action.payload;
    },
    getProductMovieNewAction: (state, action) => {
      state.productMovieNew = action.payload;
    },
    getProductMovieVienTuongAction: (state, action) => {
      state.productMovieVienTuong = action.payload;
    },
    getProductMovieKinhDiAction: (state, action) => {
      state.productMovieKinhDi = action.payload;
    },
    getProductMovieHanhDongAction: (state, action) => {
      state.productMovieHanhDong = action.payload;
    },
    getProductDetailAction: (state, action) => {
      state.productDetail = action.payload;
    },
  },
});
export const {
  bannerAction,
  getProductMovieAction,
  getProductMovieNewAction,
  getProductDetailAction,
  getProductMovieVienTuongAction,
  getProductMovieKinhDiAction,
  getProductMovieHanhDongAction
} = productReducer.actions;

export default productReducer.reducer;
export const bannerApi = () => {
  return async (dispatch) => {
    const result = await http.get("/api/QuanLyPhim/LayDanhSachBanner");
    // console.log(result);
    const action = bannerAction(result.data.content);
    dispatch(action);
  };
};
export const getProductMovieApi = () => {
  return async (dispatch) => {
    const result = await http.get(
      "/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09"
    );
    const action = getProductMovieAction(result.data.content);
    dispatch(action);
  };
};
export const getProductMovieVienTuongApi = () => {
  return async (dispatch) => {
    const result = await http.get(
      "/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03"
    );
    const action = getProductMovieVienTuongAction(result.data.content);
    dispatch(action);
  };
};
export const getProductMovieKinhDiApi = () => {
  return async (dispatch) => {
    const result = await http.get(
      "/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP06"
    );
    const action = getProductMovieKinhDiAction(result.data.content);
    dispatch(action);
  };
};
export const getProductMovieHanhDongApi = () => {
  return async (dispatch) => {
    const result = await http.get(
      "/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP07"
    );
    const action = getProductMovieHanhDongAction(result.data.content);
    dispatch(action);
  };
};
export const getProductMovieNewApi = (page) => {
  return async (dispatch) => {
    const result = await http.get(
      `/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP05&soTrang=${page}&soPhanTuTrenTrang=7`
    );
    const action = getProductMovieNewAction(result.data.content.items);
    dispatch(action);
  };
};

export const getProductDetailApi = (id) => {
  return async (dispatch) => {
    const result = await http.get(
      `/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`
    );
    // console.log(result);
    const action = getProductDetailAction(result.data.content);
    dispatch(action);
  };
};
