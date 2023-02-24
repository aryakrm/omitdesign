import React from "react";
import Routers from "../../routes/Routers";
import Header from "../Header/Header";

function Layout() {
  return (
    <>
      <Header />
      <body>
        <Routers />
      </body>
    </>
  );
}

export default Layout;
