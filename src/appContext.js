import React from "react";

const AppContext = React.createContext();

// Context provider
export const AppProvider = ({ children }) => {
  const [loginUser, setLoginUser] = React.useState(null);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [shippingInfo, setShippingInfo] = React.useState({});

  return (
    <AppContext.Provider
      value={{
        loginUser,
        setLoginUser,
        isAuthenticated,
        setIsAuthenticated,
        shippingInfo,
        setShippingInfo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook
export const useApp = () => {
  return React.useContext(AppContext);
};
