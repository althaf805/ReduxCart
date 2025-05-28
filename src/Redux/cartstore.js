import { configureStore, createSlice } from "@reduxjs/toolkit";
import productSlice from '../Redux/slice/productSlice'
import wishlistSlice from '../Redux/Slice/wishlistSlice'
import cartSlice from "./Slice/cartSlice"

const cartstore =configureStore({
    reducer:{
       productReducer : productSlice,
       wishlistReducer: wishlistSlice,
       cartReducer:cartSlice
    },

})
export default cartstore 