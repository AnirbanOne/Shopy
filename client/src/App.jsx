import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Sidebar/>
      <Footer />
    </>
  );
}

export default App;
