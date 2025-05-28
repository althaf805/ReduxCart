
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSingleProducts } from '../Redux/Slice/productSlice'
import { addToWishlist } from '../Redux/Slice/wishlistSlice'
import { addToCart } from '../Redux/Slice/cartSlice'
import { useEffect } from 'react'








const View = () => {

  const { id } = useParams()
  

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSingleProducts(id))
  }, [dispatch,id])

  const { singleProduct, viewLoading, viewError } = useSelector((state) => state.productReducer)

  const { wishlistItems } = useSelector((state) => state.wishlistReducer)

  const addWishlist = () => {

      let existingProduct= wishlistItems.find((eachItem)=>eachItem.id == singleProduct.id )
      console.log(existingProduct)

      if(existingProduct){
        alert("Product is already Exists in your wishlist")
      }else{
         dispatch(addToWishlist(singleProduct))
        alert ("Succesfully added to your Wishlist")
      }

   
   
  }


  return (
    <>
      <Header />
      {
        viewLoading ? (<div className='flex justify-center items-center'><img src="https://cdn.pixabay.com/animation/2023/10/08/03/19/03-19-26-213_512.gif" alt="" /> </div>) :
          <div className='grid grid-cols-2 m-3'>
            <div className=" p-2 shadow text-center">
              <img style={{ height: "400px" }} src={singleProduct?.thumbnail} alt="" />

              <div className='flex justify-between'>
                <button onClick={addWishlist} className='border rounded bg-blue-700 p-2 text-white'>Add to Wishlist</button>
                <button onClick={()=>dispatch(addToCart(singleProduct))} className='border rounded bg-green-700 p-2 text-white'>Add to Cart</button>
              </div>
            </div>
            <div>
              <h3 className='font-bold'>PID:{singleProduct?.id}</h3>
              <h1 className='font-bold text-4xl'>{singleProduct?.title}</h1>
              <h5 className='text-red-600 text-2Xl font-bold'>${singleProduct.price}</h5>
              <h6><span className='font-bold'>Brand</span>{singleProduct?.brand}</h6>
              <h6><span className='font-bold'>Category</span>{singleProduct.category}</h6>
              <p className='text-l'><span className='font-bold'>Description:</span>{singleProduct?.description}</p>
              <h4 className='mt-5 font-bold'>
                Client Reviews
              </h4>
              {
                singleProduct?.reviews?.map((eachReview) => (
                  <div className='border mt-2 rounded p-2 shadow '>
                    <h5><span className='font-bold'>{eachReview.reviewerName}:</span> {eachReview.comment}</h5>
                    <h6><span className='font-bold'>Rating:</span> {eachReview.rating} <i className="fa-solid fa-star text-yellow-300"></i></h6>
                  </div>
                ))
              }

            </div>

          </div>
      }


    </>

  )
}

export default View