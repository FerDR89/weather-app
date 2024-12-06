import React from "react";
import { Footer, Header } from "@components";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] w-screen max-w-screen-lg px-4">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
