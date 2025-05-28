import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice= createSlice({
    name:"wishlist",
    initialState:{
        wishlistItems:[]
    },
    reducers:{
      addToWishlist:(state,argFromComp)=>{
        state.wishlistItems.push(argFromComp.payload)
      },
      removeFromWishlist:(state,idFromComp)=>{
        state.wishlistItems=state.wishlistItems.filter((eachItem)=>eachItem.id!=idFromComp.payload)
      }
    }

})

export const {addToWishlist,removeFromWishlist}= wishlistSlice.actions

export default wishlistSlice.reducer