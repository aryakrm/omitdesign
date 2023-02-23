import React from "react";
import Routers from "../../routes/Routers";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Layout() {
  return (
    <>
      <Header />
      <body>
        <Routers />
      </body>
      <Footer />
    </>
  );
}

export default Layout;
