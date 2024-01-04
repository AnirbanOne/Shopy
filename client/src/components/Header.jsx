import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { LoginContext } from "../contexts/LoginContext";
import Login from "../pages/Login";

const Header = () => {
  const { isOpen, setisOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const { token } = useContext(LoginContext);
  const [isActive, setisActive] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setisActive(true) : setisActive(false);
    });
  }, []);

  const handleCart = () => {
    if (token) {
      setisOpen(!isOpen);
    } else {
      setShowLoginPopup(true);
    }
  }

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed  w-full z-10 transition-all`}
    >
      <div className="container px-6 py-2 flex items-center justify-between h-full">
        <div className="">
          <Link to={"/"}>
            <div>
              {/* Logo */}
              <img className="w-[40px]" src={logo} alt="logo" />
            </div>
          </Link>
        </div>
        {/* Cart */}
        <div
          className="cursor-pointer relative flex"
          onClick={handleCart}
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
      {showLoginPopup && <Login/>}
    </header>
  );
};

export default Header;
