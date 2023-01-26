import React from "react";

import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <hr />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
