import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes.jsx";
import ProductContextProvider from "./contexts/ProductContext.jsx";
import SidebarContextProvider from "./contexts/SidebarContext.jsx";
import CartContextProvider from "./contexts/CartContext.jsx";
import LoginContextProvider from "./contexts/LoginContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LoginContextProvider>
    <CartContextProvider>
      <SidebarContextProvider>
        <ProductContextProvider>
          <RouterProvider router={Routes} />
        </ProductContextProvider>
      </SidebarContextProvider>
    </CartContextProvider>
  </LoginContextProvider>
);
