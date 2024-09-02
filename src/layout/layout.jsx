import React from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
function Layout() {
  console.log("hi");
  return (
    <>
      <Header />
      <Outlet />
      {/* comp are rendered in the place of outlet */}
      <Footer />
    </>
  );
}

export default Layout;
