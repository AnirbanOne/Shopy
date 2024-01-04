import React, { useEffect } from "react";
import { createContext, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

// Create Context
export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  // Products State
  const [products, setProducts] = useState([]);
  const [loading, setIsLoading] = useState(true);

  // Fetch Products
  useEffect(() => {
    // Function to fetch the products
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        // const data = await response.json();
        setProducts(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
