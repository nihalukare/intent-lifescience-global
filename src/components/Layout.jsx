import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SocialFab from "./SocialFab";

function Layout() {
  return (
    <>
      <SocialFab />
      <Header />
      <main className="App">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
