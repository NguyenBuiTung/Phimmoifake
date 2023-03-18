import { combineReducers, configureStore } from "@reduxjs/toolkit";

import productReducer from "./productReducer/productReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";


const persistConfig = {
  key: "data",
  storage,
//   blacklist:['userRegister']
};
export const rootReducers = combineReducers({
  productReducer

  
})
const persistedReducer = persistReducer(persistConfig,rootReducers);
export const store = configureStore({
  reducer:{persistedReducer},
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
export const persistor = persistStore(store);
