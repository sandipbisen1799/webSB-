import React, { useContext, useEffect } from "react";
import Signupform from "./Signupform";
import Loginform from "./Loginform";
import { Api } from "../stores/ContextApi";
import loginImage from "../assets/loginimage.avif";
import signUpImage from "../assets/SignUp.avif";
import { useNavigate, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { useGoogleLogin } from "@react-oauth/google";
import api from "../utills/api";
import { toast } from "react-toastify";
import NavBar from "./NavBar";


function Template() {
  const navigate = useNavigate();
  const { isLogin,setIsLogin } = useContext(Api);

  const googleLogin = useGoogleLogin({
    onSuccess: async (autResult) => {
      try {
        if (autResult?.code) {
          const res = await api.post("/user/googleauth", {
            code: autResult.code,
          });
          console.log("✅ Backend Response:", res.data);
 localStorage.setItem('token', res.data.token);
          toast.success("Login successfully");
          setIsLogin(true);
          navigate("/");
        }
      } catch (err) {
        console.error("❌ Google login error:", err);
      }
    },
    onError: (err) => {
      console.error("❌ Google login failed:", err);
      toast.error("Google login failed");
    },
    flow: "auth-code",
  });

  useEffect(() => {
    gsap.fromTo(
      ".animate-image",
      { x: 0 },
      { x: 50, duration: 2, ease: "power2.out", repeat: -1, yoyo: true }
    );
  }, []);

  const { signUpLoginToggle, setSignUpLoginToggle } = useContext(Api);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login") {
      setSignUpLoginToggle(false);
    } else if (location.pathname === "/signup") {
      setSignUpLoginToggle(true);
    }
  }, [location.pathname, setSignUpLoginToggle]);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="w-full flex flex-col md:flex-row justify-center items-center bg-gray-100 px-6 py-10 gap-8">
        
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 max-w-md text-center">
          <h1 className=" mt-10 text-3xl font-bold text-gray-900">
            {signUpLoginToggle ? "User Sign Up" : "Welcome Back"}
          </h1>
          <p className="text-gray-600 mt-2">
            {signUpLoginToggle
              ? "Build skill for today, tomorrow and beyond"
              : "Build skill for today"}{" "}
            <span className="font-semibold text-gray-800">we are here to help you</span>
          </p>

          {/* Form */}
          <div className="w-full mt-6">
            {signUpLoginToggle ? <Signupform /> : <Loginform />}
          </div>

          {/* Divider + Google Login */}
          <div className="w-full mt-6 flex flex-col items-center">
             <div className="flex items-center my-6">
               <div className="flex-1 h-px bg-gray-300"></div>
               <span className="px-4 text-gray-500 text-sm">OR</span>
               <div className="flex-1 h-px bg-gray-300"></div>
             </div>
            <button
              className="md:w-fit px-4 py-2 flex items-center justify-center gap-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition"
              onClick={googleLogin}
            >
               <img
                 src="https://www.svgrepo.com/show/475656/google-color.svg"
                 alt="Google"
                 className=" w-5 h-5"
               />
               Sign up with Google
             </button>
           </div>
        </div>

        {/* Right Section (Image) */}
        <div className=" hidden md:flex animate-image justify-center">
          <img
            src={signUpLoginToggle ? signUpImage : loginImage}
            alt={signUpLoginToggle ? "Sign up illustration" : "Login illustration"}
            className="max-w-sm md:max-w-lg rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default Template;
