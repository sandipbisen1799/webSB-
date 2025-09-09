// 
import React from "react";
import Signupform from "./Signupform";
import Loginform from "./Loginform";
import { useContext,useEffect } from "react";
import  {Api}  from "../stores/ContextApi";

import loginImage from '../assets/loginimage.avif'
import signUpImage from '../assets/SignUp.avif'
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";




function Template() {
   useEffect(() => {
  gsap.fromTo(".animate-image",
    { x:0  },
    { x:50,  duration: 2, ease: "power2.out" ,repeat: -1,   // infinite loop
      yoyo: true, }
  );
}, []);

const {signUpLoginToggle,setSignUpLoginToggle}=useContext(Api);
 const location = useLocation();
   // 🔹 Sync state with route whenever location changes
  useEffect(() => {
    if (location.pathname === "/login") {
      setSignUpLoginToggle(false);
    } else if (location.pathname === "/signup") {
      setSignUpLoginToggle(true);
    }
  }, [location.pathname, setSignUpLoginToggle]);
  return (
    <div className=" w-full flex flex-col md:flex-row justify-center items-center min-h-screen bg-gray-100 px-6 py-10 gap-4">
      {/* Left Section */}
    <div className="w-fit flex flex-col justify-center items-center " > 
       <div className="w-full flex flex-col items-center   md:w-1/2  max-w-md">
        {/* Title */}
       <h1 className="text-3xl  font-bold text-center text-gray-900 mb-4">
  {signUpLoginToggle === true ? "User Sign Up" : "Welcome Back"}
</h1>
        <p className="text-gray-600  text-center ">
          <span>{signUpLoginToggle==true?'build skill for today tomarrow and beyond':'build skill for today'} </span>
          <span className="font-semibold text-gray-800 text-center">we are here to help you</span>
        </p></div>
        <div >
{ signUpLoginToggle=== false ? (
  <Loginform  />
) : (
  <Signupform />
)}
</div>
      <div>  {/* Divider with OR */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Google Button */}
        <button className="w-fit p-6 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 text-gray-700 hover:bg-gray-100 transition">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Sign up with Google
        </button></div>
      </div>

      {/* Right Section (Image) */}
      <div className={`${signUpLoginToggle &&('mb-56' )} animate-image flex ml-7 `}>
      <img
  src={signUpLoginToggle ? signUpImage : loginImage}
  alt={signUpLoginToggle ? "Sign up illustration" : "Login illustration"}
  width={558}
  height={504}
  loading="lazy"
  className="max-w-full rounded-lg shadow-lg" // Removed brightness-50
/>
      </div>
    </div>
  );
}

export default Template;
