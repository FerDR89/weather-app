import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] w-screen max-w-screen-xl">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
