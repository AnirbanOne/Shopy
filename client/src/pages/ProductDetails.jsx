import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
import { Toaster, toast } from "sonner";
import loader from '../assets/loader.svg'
import Icon from "../assets/Icon";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    toast.warning("Please add a product");
    return (
      <section
        className="h-screen flex justify-center
    items-center"
      >
      {/* <div className="w-[30px] h-[30px] text-black">
        <Icon/>
      </div> */}
      <img src={loader} className="w-[80px] h-[80px] " />
      </section>
    );
  }

  const { title, price, description, image } = product;

  console.log(product);

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen">
      <div className="container mx-auto">
      <Toaster richColors position="top-center" />
        {/* Image and Text Wrapper */}
        <div className="flex flex-col lg:flex-row items-center
        mb-8 lg:mb-0 ">
          {/* Image */}
          <div className="flex flex-1 justify-center items-center">
            <img className="max-w-[200px] lg:h-[500px] lg:max-w-sm hover:scale-105 transition duration-300" src={image} alt="Product"/>
          </div>
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">{title}</h1>
            <div className="text-xl text-red-500 font-medium mb-6">
              $ {price}
            </div>
            <p className="mb-8">{description}</p>
            <button
            className="bg-black py-4 px-8 text-white"
            onClick={() => addToCart(product, product.id)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
