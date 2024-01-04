import React, { createContext, useEffect, useState } from "react";
import { toast } from "sonner";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (data, id) => {
    const newItem = { ...data, amount: 1 };

    // Checking if item is already in the cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    // If cart item is already in the cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
      toast.info("Product already in cart");
    } else {
      setCart([...cart, newItem]);
      
      // Toast Promise
      const promise = () =>
        new Promise((resolve) => setTimeout(() => resolve(newItem), 500));

      toast.promise(promise, {
        loading: "Loading...",
        success: (data) => {
          return `${data.title} Item has been added to cart`;
        },
        error: "Error",
      });
    }
  };

  //   Remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });

    setCart(newCart);
    toast.success(`Item has been removed from cart successfully`);
  };

  // Clear Cart
  const clearCart = () => {
    setCart([]);
    toast.info("Cart has been cleared");
  };

  // Increase Amount
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
    console.log(cartItem);
  };

  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });

      setCart(newCart);
    }

    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };

  // update item amount
  // update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.length;
      setItemAmount(amount);
    }
  }, [cart]);

  // Total price
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total);
  }, [cart]);

  console.log(cart);
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
