import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, decrementToCart, emptyCart, removeFromCart } from '../Redux/Slice/cartSlice'
import { Link, Navigate, useNavigate } from 'react-router-dom'
emptyCart






const Cart = () => {

const [totalAmount,setTotalAmount]= useState(0)
  const {cartItems} = useSelector((state)=>state.cartReducer)
  const dispatch=useDispatch()


  useEffect(()=>{
    if(cartItems.length>0){
                       // to find total price 
      setTotalAmount(cartItems.map((eachItem)=>eachItem.totalPrice)?.reduce((a,b)=>a+b))
    }
  },[cartItems])

  const Decrement=(product)=>{
    if(product.quantity>1){
      dispatch(decrementCartItem(product.id))
    }else {
      console.log("reached")
      dispatch(decrementCartItem(product.id))
    }
  }
  
  const EmptyCart=(product)=>{
    dispatch(EmptyFromCart(product))
  }

  const handleCheckout=()=>{
    alert("Thank you for shopping with us...")
    dispatch(emptyCart())
    Navigate('/')
  }
  return (
    <>
      <Header />

      <div className='m-4 '>
        <h1 className='text-blue-700 text-4xl font-bold'>Cart Summary</h1>
        {
             cartItems?.length>0?   <div className='grid grid-cols-3 gap-3 mt-3'>
          <div className='col-span-2 border border-rounded shadow p-3'>
            <table className='table-fixed w-full'>
              <thead>
                <tr>
                  <th>#</th>
                   <th>Name</th>
                    <th>Image</th>
                     <th>Quantity</th>
                      <th>price</th>
                       <th>...</th>
                </tr>
              </thead>
              <tbody>
                {
                  cartItems?.map((eachItem,index)=>(
                           <tr>
                  <td>{index+1}</td>
                  <td>{eachItem.title}</td>
                  <td><img style={{height:"70px"}} src={eachItem.thumbnail} alt="" /></td>
                  <td > <div className='flex'>
                       <button onClick={()=>dispatch(decrementToCart(eachItem.id))} className='font-bold'>-</button>
                       <input value={eachItem.quantity}  style={{width:'30px'}} className='border rounded' type="text"/>
                       <button onClick={()=>dispatch(addToCart(eachItem))} className='font-bold '>+</button>
                    </div>
                    </td>
                    <td>{eachItem.totalPrice}</td>
                    <td><button onClick={dispatch(removeFromCart(eachItem.id))}><i className="fa-solid fa-trash text-red-900"></i></button></td>
                </tr>
                  ))
                }
             
              </tbody>

            </table>
            <div className="float-right">
              <button onClick={()=>dispatch(EmptyFromCart(product))}  className='bg-red-600 me-3 border rounded text-white p-1 font-bold'> Empty Cart</button>
             <Link to={'/'} className='bg-blue-600 me-3 border rounded text-white p-1 font-bold'>Shop More</Link>
            </div>
          </div>
          <div className='col-span-1 border rounded shadow p-3'>
            <h1 className='font-bold text-2Xl mb-3'>Total Amount:<span className='text-red-700'>{setTotalAmount}</span></h1>
            <hr/>
            <button  className='bg-green-700 border p-2 mt-3 rounded  text-white font-bold'>  Checkout</button>
          </div>
        </div>:  <div className='flex justify-center items-center'>
          <h2 className='text-3xl text-red-900 font-extrabold'>No Items Found</h2>
          <img src="https://assets-v2.lottiefiles.com/a/0953d504-117d-11ee-aa49-1f149204cb5f/9uZcoEJaoF.gif" alt="" />
          </div>
        }
     
      </div>
    </>
  )
}

export default Cart