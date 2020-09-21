import React from "react";
import { useApp } from "./appContext";
import ShippingLabelMaker from "./features/shipping-label-maker/shipping-label-maker";
import Login from "./features/shipping-label-maker/login";

const App = () => {
  const appContext = useApp();

  return (
    <>
      {!appContext.isAuthenticated && <Login />}
      {appContext.isAuthenticated && <ShippingLabelMaker />}
    </>
  );
};

export default App;
