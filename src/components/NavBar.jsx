// NavBar.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Add useNavigate
import { ArrowBigDown } from "lucide-react";
import { toast } from "react-toastify";
import { useContext } from "react";
import { Api } from "../stores/ContextApi";
import  { useEffect,  } from 'react';
import { gsap } from 'gsap';



function NavBar() {
  
  useEffect(() => {
  gsap.fromTo(".animate-navbar",
    { y: -100, opacity: 0 },
    { y: 0, opacity: 1, duration: 2, ease: "power2.out" }
  );
}, []);

  
  
  const { isLogin, handlelogtoggle,handlesignuptoggle ,logoutHandler } = useContext(Api);
  const navigate = useNavigate(); // Add navigate
  const [otherFeatures, setOtherFeatures] = useState(false); // Use boolean for toggle

  const handleotherFeatures = () => {
    setOtherFeatures((prev) => !prev);
  };

  return (
    <div className="animate-navbar w-full h-20 flex justify-evenly items-center text-sm relative border-b border-b-gray-500">
      <div className="flex justify-evenly items-center gap-3.5 cursor-pointer font-medium">
        <Link className="hover:border-b border-b-gray-300 border-dotted">Websites</Link>
        <Link className="hover:border-b border-b-gray-300 border-dotted">Stores</Link>
        <Link className="hover:border-b border-b-gray-300 border-dotted">Price</Link>
        <div className="cursor-pointer flex flex-col justify-center items-center">
          <p
            onClick={handleotherFeatures}
            className="flex justify-center items-center hover:border-b border-b-gray-300 border-dotted"
          >
            Other Feature
            <ArrowBigDown size={18} color="#6a7282" className="mt-1" />
          </p>
          <div
            className={`absolute w-34 gap-2 rounded-2xl top-14 bg-white flex flex-col justify-between items-center ${
              otherFeatures ? "block text-gray-700 font-medium" : "hidden"
            }`}
          >
            <Link to="/guide">Guide</Link>
            <Link to="/themes">Themes</Link>
            <Link to="/features">Features</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/app-center">App Center</Link>
            <Link to="/seo-guide">SEO Guide</Link>
            <Link to="/help">Help</Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Link className="text-xl font-medium hover:border-b border-b-gray-300 border-dotted">WebSB</Link>
        <p className="text-sm font-light">e-commerce by Sandip</p>
      </div>
      <div className="flex justify-center items-center gap-4">
        {!isLogin ? (
          <>
            <Link to="/login" onClick={() => handlelogtoggle()}>
              <button className=" cursor-pointer text-shadow-md bg-blue-300  w-23 h-10 rotate-3 rounded-sm font-medium hover:scale-105 hover:bg-blue-400 duration-100">
                Login
              </button>
            </Link>
            <Link to="/signup" onClick={() => handlesignuptoggle()}>
              <button className="cursor-pointer   text-shadow-md bg-blue-300  w-23 h-10 rotate-3 rounded-sm font-medium hover:scale-105 hover:bg-blue-400 duration-100">
                Signup
              </button>
            </Link>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                logoutHandler();
                toast.success("Logout successful");
                navigate("/login"); // Redirect to login
              }}
              className="border w-24 h-9 rotate-3 rounded-sm font-medium hover:bg-blue-300 shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
            >
              Logout
            </button>
            <Link to="/dashboard">
              <button className="border w-24 h-9 rotate-3 rounded-sm font-medium hover:bg-blue-300 shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
                Dashboard
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default NavBar;