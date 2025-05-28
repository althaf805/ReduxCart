import { configureStore, createSlice } from "@reduxjs/toolkit";
import Pslice from '..Redux/Slice/Pslice'
import wishlistSlice from '../Redux/Slice/wishlistSlice'
import cartSlice from "./Slice/cartSlice"

const cartstore =configureStore({
    reducer:{
       productReducer : Pslice,
       wishlistReducer: wishlistSlice,
       cartReducer:cartSlice
    },

})
export default cartstore 