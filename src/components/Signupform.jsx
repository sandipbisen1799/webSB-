

// export default Signupform;
import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext } from "react";
import { Api } from "../stores/ContextApi";

function Signupform() {
const {setIsLogin}=useContext(Api);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "student",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);

  function changeHandler(event) {
    const { name, type, checked, value } = event.target;
    setFormData((prevFormdata) => ({
      ...prevFormdata,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

// Signupform.js (partial)
function submitHandler(event) {
  event.preventDefault();

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    toast.error("Invalid email format!");
    return;
  }

  // Password strength (e.g., min 8 characters, 1 number, 1 special char)
  const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
  if (!passwordRegex.test(formData.password)) {
    toast.error("Password must be at least 8 characters long with 1 number and 1 special character!");
    return;
  }

  if (formData.password !== formData.confirmPassword) {
    toast.error("Passwords do not match!");
    return;
  }

  toast.success("User registered successfully!");
  navigate("/");
  setIsLogin(true);
}
  return (
    <div className=" w-fit flex  justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6">
          Create Your Account
        </h2>

        {/* Account type toggle */}
        <div className="flex mb-6 border rounded-lg overflow-hidden">
          <button
            type="button"
            onClick={() =>
              setFormData((prev) => ({ ...prev, accountType: "student" }))
            }
            className={`flex-1 py-2 text-center font-medium ${
              formData.accountType === "student"
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            Student
          </button>

          <button
            type="button"
            onClick={() =>
              setFormData((prev) => ({ ...prev, accountType: "instructor" }))
            }
            className={`flex-1 py-2 text-center font-medium ${
              formData.accountType === "instructor"
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            Instructor
          </button>
        </div>

        {/* Signup form */}
        <form onSubmit={submitHandler} className="space-y-4">
          <div className="flex gap-4">
            <label className="flex-1">
              <p className="text-sm font-medium mb-1">First Name</p>
              <input
                type="text"
                name="firstname"
                placeholder="First name"
                value={formData.firstname}
                required
                onChange={changeHandler}
                className="w-full border rounded-lg px-3 py-2 outline-none"
              />
            </label>

            <label className="flex-1">
              <p className="text-sm font-medium mb-1">Last Name</p>
              <input
                type="text"
                name="lastname"
                placeholder="Last name"
                value={formData.lastname}
                required
                onChange={changeHandler}
                className="w-full border rounded-lg px-3 py-2 outline-none"
              />
            </label>
          </div>

          <label className="block">
            <p className="text-sm font-medium mb-1">Email Address</p>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              required
              onChange={changeHandler}
              className="w-full border rounded-lg px-3 py-2 outline-none"
            />
          </label>

          <label className="block relative">
            <p className="text-sm font-medium mb-1">Create Password</p>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              required
              onChange={changeHandler}
              className="w-full border rounded-lg px-3 py-2 outline-none"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-9 cursor-pointer text-sm text-gray-600"
            >
              {showPassword ? "🙈" : "👁"}
            </span>
          </label>

          <label className="block relative">
            <p className="text-sm font-medium mb-1">Confirm Password</p>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              required
              onChange={changeHandler}
              className="w-full border rounded-lg px-3 py-2 outline-none"
            />
            <span
              onClick={() => setConfirmShowPassword((prev) => !prev)}
              className="absolute right-3 top-9 cursor-pointer text-sm text-gray-600"
            >
              {showConfirmPassword ? "🙈" : "👁"}
            </span>
          </label>

         

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signupform;
