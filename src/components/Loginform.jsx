
// export default Loginform;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Api } from "../stores/ContextApi";
import { useContext } from "react";

function Loginform() {
  const {setIsLogin ,handleSignLogToggle}=useContext(Api);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormdata] = useState({ email: "", password: "" });

  function handlechange(event) {
    const { name, type, value, checked } = event.target;
    setFormdata((prevFormdata) => ({
      ...prevFormdata,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

 // Loginform.js (partial)
function submitHandler(event) {
  event.preventDefault();

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    toast.error("Invalid email format!");
    return;
  }

  // Simulate backend check (replace with actual API call)
  toast.success("Logged in successfully");
  setIsLogin(true);
  navigate("/");
}

  return (
    <form
      onSubmit={submitHandler}
      className="space-y-5 w-full max-w-md mx-auto"
    >
      {/* Email */}
      <label className="block">
        <p className="text-sm font-medium mb-1">
          Email Address <sup className="text-red-500">*</sup>
        </p>
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Enter your email"
          value={formData.email}
          onChange={handlechange}
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
          aria-label="First name"
        />
      </label>

      {/* Password */}
      <label className="block relative">
        <p className="text-sm font-medium mb-1">
          Password <sup className="text-red-500">*</sup>
        </p>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          required
          placeholder="Enter your password"
          value={formData.password}
          onChange={handlechange}
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-9 cursor-pointer text-sm text-gray-600"
        >
          {showPassword ? "🙈" : "👁"}
        </span>
      </label>

      {/* Forgot Password */}
      <div className="flex justify-between items-center">
         <div
          to="/sign-up "
          className="text-sm "
        >
          New User? 
          <Link to='/signup'onClick={handleSignLogToggle} className="text-sm text-blue-500 hover:underline">SignUp</Link>
        </div>
        <Link
          to="/forget-password"
          className="text-sm text-blue-500 hover:underline"
        >
          Forgot Password?
        </Link>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Sign In
      </button>
    </form>
  );
}

export default Loginform;
