import React from "react";
import { Outlet } from "react-router";
import { Navbar, Footer } from "../Components/Home/";

const SharedLayout = () => {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default SharedLayout;
