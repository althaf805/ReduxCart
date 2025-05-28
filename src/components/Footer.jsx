import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
<div className="w-full bg-blue-600 mt-10 px-5 py-10 overflow-x-hidden">
      <div className="flex flex-wrap gap-8 justify-start px-8">
        
       
        <div className="w-full sm:w-auto lg:w-1/5">
          <Link to="/" className="text-cyan-300 text-2xl no-underline">
              <i className="fa-brands fa-opencart"></i> Daily Cart
          </Link>
          <p className="text-white mt-3">
            Designed and built with all the love in the world by the Luminar team with the help of our Contributors
          </p>
          <p className="text-white mt-3">Code licensed Luminar, docs CC BY 3.0</p>
          <p className="text-white mt-3">Currently V5.3.2.0</p>
        </div>

        <div className="w-full sm:w-auto lg:w-1/6">
          <h4 className="text-white text-xl mb-2">Links</h4>
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-white no-underline hover:no-underline">Home</Link>
            <Link to="/wishlist" className="text-white no-underline hover:no-underline">Wishlist</Link>
            <Link to="/cart" className="text-white no-underline hover:no-underline">Cart</Link>
          </div>
        </div>

      
        <div className="w-full sm:w-auto lg:w-1/6">
          <h4 className="text-white text-xl mb-2">Guides</h4>
          <p className="text-white">React</p>
          <p className="text-white">React Router</p>
          <p className="text-white">React Bootstrap</p>
        </div>

       
        <div className="w-full sm:w-auto lg:w-1/3">
          <h4 className="text-cyan-300 text-xl mb-3">Contact</h4>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-4 py-2 text-white bg-transparent border border-cyan-400 outline-none w-full placeholder-white"
            />
            <button className="px-4 py-2 border border-cyan-400 text-white hover:bg-cyan-400">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>

          <div className="flex gap-5 mt-4 text-white text-lg">
            <i className="fa-brands fa-x-twitter gap-3"></i>
            <i className="fa-brands fa-instagram gap-3"></i>
            <i className="fa-brands fa-facebook gap-3"></i>
            <i className="fa-brands fa-linkedin gap-3"></i>
            <i className="fa-brands fa-github gap-3"></i>
            <i className="fa-solid fa-phone gap-3"></i>
          </div>
        </div>

      </div>
 </div>
</>
  )
}

export default Footer