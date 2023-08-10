import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slice/navSlice.js"

export const store = configureStore({
    reducer:{
        nav: navReducer
    }
})