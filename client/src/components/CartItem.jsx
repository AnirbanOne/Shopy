import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ items }) => {
  const { id, title, image, price, amount } = items;
  const {removeFromCart, increaseAmount, decreaseAmount} = useContext(CartContext)
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      {/* Image */}
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]  " src={image} alt="product" />
        </Link>

        <div className="w-full flex flex-col ">
          {/* Title and remove icon */}
          <div className="flex justify-between mb-2">
            <Link
              className="text-sm uppercase font-medium max-w-[240px] text-black hover:underline"
              to={`/product/${id}`}
            >
              {title}
            </Link>

            {/* Add remove icon */}
            <div onClick={() => {removeFromCart(id)}}>
              <IoMdClose className="text-2xl cursor-pointer text-gray-500 hover:text-red-500 transition duration-100" />
            </div>
          </div>

          <div className=" flex gap-x-2 h-[36px] text-sm">
            {/* Quantity */}
            <div  className="flex flex-1 max-w-[100px]  items-center h-full border text-black font-medium ">
              <div onClick={() => {decreaseAmount(id)}} className="flex-1 h-full flex justify-center border-r border-r-gray-200 items-center cursor-pointer">
                <IoMdRemove className="cursor-pointer"/>
              </div>
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              <div onClick={() => {increaseAmount(id)}} className="flex-1 border-l border-l-gray-200 h-full flex justify-center items-center cursor-pointer">
                <IoMdAdd className="cursor-pointer"/>
              </div>
            </div>

            {/* Item price */}
            <div className="flex-1 flex items-center justify-around">
              $ {price}
            </div>

            {/* Final Price */}
            <div className="flex-1 flex justify-end items-center text-black font-medium">{`$ ${parseFloat(
              price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
