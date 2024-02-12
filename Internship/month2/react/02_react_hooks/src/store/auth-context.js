import React, { useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logOutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };
  const logInHandler = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn","1");
};
  
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: logInHandler,
        onLogout: logOutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
