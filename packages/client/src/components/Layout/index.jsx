import React from "react";
import { ToastContainer } from "react-toastify";
import { Header } from "..";
import "./Layout.scss";
import "react-toastify/dist/ReactToastify.min.css";

function Layout({ children }) {
  return (
    <>
      <Header />
      <ToastContainer />
      <main className="main">{children}</main>
    </>
  );
}

export default Layout;
