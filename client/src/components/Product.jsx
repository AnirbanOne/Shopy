import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";

const Product = ({ data }) => {
  
  const {addToCart} = useContext(CartContext);
  const {loading} = useContext(ProductContext);
  

  const { id, image, category, title, price } = data;
  return (
    <div >
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* Image */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              src={image}
              className="max-h-[160px] group-hover:scale-105 transition duration-300"
              alt="product image"
            />
          </div>
        </div>

        {/* Button */}
        <div
          className="absolute top-6 -right-11 group-hover:right-5 bg-red-500/40 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 
        group-hover:opacity-100 transition-all duration-300
         "
        >
          <button onClick={() => {addToCart(data, id)}}>
            <div className="flex justify-center items-center bg-red-500 text-white w-12 h-12">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center text-black drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>

      {/* Category */}
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold">$ {price}</div>
      </div>
    </div>
  );
};

export default Product;
