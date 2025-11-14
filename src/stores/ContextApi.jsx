// ContextApi.js

import { createContext, useEffect, useState } from "react";
import api from "../utills/api";

export const Api = createContext({
  isLogin: false,
  setIsLogin: () => {},
  signUpLoginToggle: false, // Consistent naming
  handleSignLogToggle: () => {},
  logoutHandler: () => {},
  handlelogtoggle:()=>{},
  handlesignuptoggle:()=>{},
  data:[],
  contactusdata:[],
});

export function ApiProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const [signUpLoginToggle, setSignUpLoginToggle] = useState(''); // Consistent naming
    const [authuser, setAuthUser] = useState(null);

  const VITE_API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000/api/v1";

  // 🔹 Check login status
const checkAuth = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsLogin(false);
        setAuthUser(null);
        return;
      }
      const res = await api.get(`user/auth`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("✅ Auth check success:", res.data);
      setAuthUser(res.data.user);
      setIsLogin(true); // Set isLogin to true on successful auth
    } catch (err) {
      console.error("❌ Auth check failed:", err);
      setAuthUser(null);
      setIsLogin(false); // Ensure isLogin is false on failure
    }
  };
  const logoutHandler = async () => {
  try {
    await api.post("user/logout");
  } catch (err) {
    console.error("Logout failed:", err);
  }
  setIsLogin(false);
  setAuthUser(null);
  localStorage.removeItem("token");
};
 
useEffect(() => {
    checkAuth();
}, []);


  const handlelogtoggle = () => {
    setSignUpLoginToggle(false);
  };
  const handlesignuptoggle=()=>{
    setSignUpLoginToggle(true)
  }

  
  const data= [

{
  title:"1",
  title1: "Websb reccomends",
  num:"10",
  num1:"100",
  num2:"500",
num3:'4'
},

{
  title:"2",
  title1:"",
  num:"20" ,
  num1:"250",
  num2:"1000",
   num3:"2"
},

{
  title:"3",
  title1:"",
  num:"50",
  num1:"500",
  num2:"5000",
  num3:'1'
},

]
const contactusdata=[
  {icon:"acd",
    title:'Get Support',
  
    title1: 'if you are having trouble with websbcheck out the article to help out with assistanceif you are having trouble with websbcheck out the article to help out with assistanceif you are having trouble with websbcheck out the article to help out with assistance',
  },
   
   {icon:"acd",
    title:'Get Support',
  
    title1: 'if you are having trouble with websbcheck out the article to help out with assistanceif you are having trouble with websbcheck out the article to help out with assistanceif you are having trouble with websbcheck out the article to help out with assistance',
  },
    {icon:"acd",
    title:'Get Support',
  
    title1: 'if you are having trouble with websbcheck out the article to help out with assistanceif you are having trouble with websbcheck out the article to help out with assistanceif you are having trouble with websbcheck out the article to help out with assistance',
  },
    {icon:"acd",
    title:'Get Support',
  
    title1: 'if you are having trouble with websbcheck out the article to help out with assistanceif you are having trouble with websbcheck out the article to help out with assistanceif you are having trouble with websbcheck out the article to help out with assistance',
  },
   
]

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
        data,
        contactusdata,
      }}
    >
      {children}
    </Api.Provider>
  );
}