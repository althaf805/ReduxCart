import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";




export const  fetchAllProducts = createAsyncThunk('products/fetchAllProducts',async()=>{

    const result =   await axios.get('https://dummyjson.com/products')
    console.log(result.data.products)

    return result.data.products

})

// 

export const  fetchSingleProducts = createAsyncThunk('products/fetchSingleProducts',async()=>{

    const result =   await axios.get(`https://dummyjson.com/products/${id}`)
    // console.log(result.data)

    return result.data

})
// 

const productSlice = createSlice({
    name:"products",
    initialState:{
        allProducts:[],
        dummyProducts:[],
        loading:false,
        error:"",
        singleProduct:[],
        viewLoading:false,
        viewError:''
    },
    reducers:{
        //actions

        searchProduct:(state,searchKeyFromComp)=>{
            state.allProducts=state.dummyProducts.filter((eachProduct)=>eachProduct.title.toLowerCase().includes(searchKeyFromComp.payload.toLowerCase()))
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchAllProducts.fulfilled,(state,apiResult)=>{
            state.allProducts=apiResult.payload
            state.dummyProducts=apiResult.payload
            state.loading=false
            state.error=''
        })
        builder.addCase(fetchAllProducts.pending,(state, apiResult)=>{
            state.allProducts= []
            state.dummyProducts=[]
            state.loading=true
            state.error=''
        })
        builder.addCase(fetchAllProducts.rejected,(state, apiResult)=>{
            state.allProducts=[]
            state.dummyProducts=[]
            state.loading=false
            state.error='API REsULT FAILED'
            
        })

         builder.addCase(fetchSingleProducts.fulfilled,(state,apiResult)=>{
            state.singleProduct=apiResult.payload
            state.dummyProducts=apiResult.payload
            state.viewLoading=false
            state.viewError=''
        })
        builder.addCase(fetchSingleProducts.pending,(state,apiResult)=>{
            state.singleProduct= []
            state.dummyProducts=[]
            state.viewLoading=true
            state.viewError=''
        })
        builder.addCase(fetchSingleProducts.rejected,(state,apiResult)=>{
            state.singleProduct=[]
            state.dummyProducts=[]
            state.viewLoading=false
            state.viewError='API RESULT FAILED'
            
        })
    }
})


export const {searchProduct} =productSlice.actions
export default productSlice.reducer

