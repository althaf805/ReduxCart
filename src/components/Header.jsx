import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../Redux/Slice/productSlice'




const Header = ({insideHome}) => {
  const dispatch=useDispatch()

const{wishlistItems} =useSelector((state)=>state.wishlistReducer)

const {cartItems} = useSelector((state)=>state.cartReducer)

  return (
    <nav className='bg-blue-900 flex sticky top-0 w-full p-5'>
      <Link className='text-white text-2xl font-bold' to={'/'}><i className="fa-solid fa-basket-shopping"></i> Daily Cart
      </Link>
      <ul className='text-right flex-1'>
        {insideHome? <li className='inline-block mx-5'>
          
          <input onChange={(e)=>dispatch(searchProduct(e.target.value))} type='text' className='border rounded-2xl bg-white p-1' placeholder='  Search Products Here!!' />
        </li>:""}
       
        <li className='inline-block  mx-5'>
          <Link to={'/wishlist'} className='text-white inline-block'><i className="fa-solid fa-clipboard-list text-red-700"></i> Wishlist <span className='bg-black p-1 rounded-full'>
            
            {wishlistItems?wishlistItems?.length:0}</span></Link>
        </li>
        <li className='inline-block  mx-5'>
          <Link className='text-white inline-block' to={"/Cart"}><i className="fa-solid fa-cart-shopping text-green-700"></i> Cart <span className='bg-black p-1 rounded-full'>{cartItems?cartItems.length :0}</span></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header