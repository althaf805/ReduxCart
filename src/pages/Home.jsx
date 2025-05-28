import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { fetchAllProducts } from '../Redux/Slice/productSlice'
import { useDispatch, useSelector } from 'react-redux'


const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllProducts())
  }
    ,[dispatch])
  const { allProducts, error, loading } = useSelector((state) => state.productReducer)



  return (


    <>
      <Header insideHome={true} />
      {
        loading ? <div className='flex justify-center items-center'><img src="https://cdn.pixabay.com/animation/2023/10/08/03/19/03-19-26-213_512.gif" alt="" /> </div> :

          <div>
            {
              allProducts?.length>0? <div className='grid grid-cols-4 gap-3 mt-5' >

              {

                allProducts?.map((eachProduct) => (

                  <div className="border rounded p-2 shadow text-center">
                    <img width={"100%"} height={'200px'} src={eachProduct.thumbnail} alt="" />
                    <h3 className='font-bold text-xl mb-3'>{eachProduct.title}</h3>
                    <Link to={`/${eachProduct.id}/view`} className='bg-yellow-500 p-1 rounded border'>View More....</Link>
                  </div>

                ))

              }

            </div> : <div>No Products Found</div>
            }
           
          </div>
      }

    </>

  )
}

export default Home