// ContextApi.js
import { createContext, useState } from "react";

export const Api = createContext({
  isLogin: false,
  setIsLogin: () => {},
  signUpLoginToggle: false, // Consistent naming
  handleSignLogToggle: () => {},
  logoutHandler: () => {},
  handlelogtoggle:()=>{},
  handlesignuptoggle:()=>{},
});

export function ApiProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const [signUpLoginToggle, setSignUpLoginToggle] = useState(''); // Consistent naming

  console.log(signUpLoginToggle); // Debug log

  const handlelogtoggle = () => {
    setSignUpLoginToggle(false);
  };
  const handlesignuptoggle=()=>{
    setSignUpLoginToggle(true)
  }

  const logoutHandler = () => {
    setIsLogin(false);
  };

  return (
    <Api.Provider
      value={{
        isLogin,
        setIsLogin,
        signUpLoginToggle, // Add to value
        setSignUpLoginToggle,
        handlelogtoggle,
        handlesignuptoggle,
        logoutHandler,
      }}
    >
      {children}
    </Api.Provider>
  );
}