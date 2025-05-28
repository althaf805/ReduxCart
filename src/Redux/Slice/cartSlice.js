import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: []
    },
    reducers: {
        addToCart: (state, argFromcomp) => {
            const existingProduct = state.cartItems.find((eachItem) => eachItem.id == argFromcomp.payload.id)

            if(existingProduct){
                //logic for existing item

                existingProduct.quantity++
                existingProduct.totalPrice= existingProduct.quantity*existingProduct.price
                const remainingProducts =state.cartItems.filter((eachItem)=>eachItem.id!=existingProduct.id)

                state.cartItems =[...remainingProducts,existingProduct]

            }else{
                state.cartItems.push({...argFromcomp.payload,quantity:1,totalPrice:argFromcomp.payload.price})
            }
        },
         decrementToCart: (state, idFromcomp) => {
            const existingProduct = state.cartItems.find((eachItem) => eachItem.id == idFromcomp.payload)

            if(existingProduct){
                //logic for existing item

                existingProduct.quantity--
                existingProduct.totalPrice= existingProduct.quantity*existingProduct.price
                const remainingProducts =state.cartItems.filter((eachItem)=>eachItem.id!=existingProduct.id)

                state.cartItems =[...remainingProducts,existingProduct]
            }
        },

        removeFromCart:(state, idFromcomp)=>{
         state.cartItems = state.cartItems.filter((eachItem)=>eachItem.id!= idFromComp.payload.id )
        },
        emptyCart:(state,idFromComp)=>{
            state.cartItems=[]
        }
    },
})

export const {addToCart,decrementToCart,removeFromCart,emptyCart}=cartSlice.actions

export default cartSlice.reducer