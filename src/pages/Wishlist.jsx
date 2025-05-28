import React from 'react'
import Header from '../components/Header'
import { useSelector ,useDispatch} from 'react-redux'
import { removeFromWishlist } from '../Redux/Slice/wishlistSlice'
import { addToCart } from '../Redux/Slice/cartSlice'



const Wishlist = () => {
  const { wishlistItems } = useSelector((state) => state.wishlistReducer)

  const dispatch=useDispatch()

  const addItemToCart =(product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWishlist(product.id))
  }
  return (
    <>
      <Header />
{    
 wishlistItems?.length>0?(
  
      <div className='mt-4 mx-5'>
        <h1 className='font-bold text-red-700'>Wishlist</h1>
        <div className='grid grid-cols-4 gap-3 mt-3'>
          {
            wishlistItems?.map((eachItem)=>(
                <div className='border rounded p-2 shadow text-center'>
            <img width={"100%"} height={'200px'} src={eachItem?.thumbnail} alt="" />
            <h3 className='font-bold text-xl mb-3'>{eachItem?.title}</h3>
            <div className='flex justify-around'>
              <button onClick={()=>dispatch(removeFromWishlist(eachItem?.id))} className='btn'>
                <i className='fa-solid fa-heart-circle-xmark text-red-600 text-xl'></i>
              </button>
              <button  onClick={()=>addItemToCart(eachItem)}>
                <i class="fa-solid fa-cart-plus text-green-500 text-xl"></i>
              </button>


            </div>
          </div>

            ))
          }
        
        </div>
      </div>):(
        <div className='flex justify-center items-center'>
          <h2 className='text-3xl text-red-900 font-extrabold'>No Items Found</h2>
          <img src="https://assets-v2.lottiefiles.com/a/0953d504-117d-11ee-aa49-1f149204cb5f/9uZcoEJaoF.gif" alt="" />
          </div>
      )
 }
       


     </>
   
    
    
  )
}

export default Wishlist