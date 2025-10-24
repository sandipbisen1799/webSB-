// NavBar.js
import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowBigDown, Menu, X } from "lucide-react";
import { toast } from "react-toastify";
import { Api } from "../stores/ContextApi";
import { gsap } from "gsap";

function NavBar() {
  const { isLogin, handlelogtoggle, handlesignuptoggle, logoutHandler } =
    useContext(Api);
  const navigate = useNavigate();
  const [otherFeatures, setOtherFeatures] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleOtherFeatures = () => setOtherFeatures((prev) => !prev);

  useEffect(() => {
    gsap.fromTo(
      ".animate-navbar",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" }
    );
  }, []);

  return (
    <nav className="animate-navbar w-full  border-b border-gray-300 bg-white shadow-sm  fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Left Section */}
          <div className="flex items-center gap-6">
            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-gray-700 focus:outline-none"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

            {/* Brand */}
            <div className="flex flex-col items-start">
              <Link to="/" className="text-lg font-semibold">
                WebSB
              </Link>
              <p className="text-xs text-gray-500">e-commerce by Sandip</p>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 font-medium">
            <Link className="hover:text-blue-500" to="/">
              Home
            </Link>
            <Link className="hover:text-blue-500" to="/pricing">
              Pricing
            </Link>

            {/* Dropdown */}
            <div className="relative">
              <button
                onClick={handleOtherFeatures}
                className="flex items-center gap-1 hover:text-blue-500"
              >
                Other Feature <ArrowBigDown size={16} />
              </button>
              {otherFeatures && (
                <div className="absolute left-0 mt-2 w-40 rounded-md bg-white shadow-lg flex flex-col p-2 text-sm">
                  <Link to="/guide" className="hover:text-blue-600">
                    Guide
                  </Link>
                  <Link to="/themes" className="hover:text-blue-600">
                    Themes
                  </Link>
                  <Link to="/features" className="hover:text-blue-600">
                    Features
                  </Link>
                  <Link to="/blog" className="hover:text-blue-600">
                    Blog
                  </Link>
                  <Link to="/app-center" className="hover:text-blue-600">
                    App Center
                  </Link>
                  <Link to="/seo-guide" className="hover:text-blue-600">
                    SEO Guide
                  </Link>
                  <Link to="/help" className="hover:text-blue-600">
                    Help
                  </Link>
                </div>
              )}
            </div>

            <Link className="hover:text-blue-500" to="/contact-us">
              Contact Us
            </Link>
          </div>

          {/* Right Section (Auth Buttons) */}
          <div className="hidden md:flex items-center gap-3">
            {!isLogin ? (
              <>
                <Link to="/login" onClick={handlelogtoggle}>
                  <button className="px-4 py-2 rounded-md bg-blue-400 text-white font-medium hover:bg-blue-500 transition">
                    Login
                  </button>
                </Link>
                <Link to="/signup" onClick={handlesignuptoggle}>
                  <button className="px-4 py-2 rounded-md bg-blue-400 text-white font-medium hover:bg-blue-500 transition">
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
                    navigate("/login");
                  }}
                  className="px-4 py-2 rounded-md border border-gray-400 font-medium hover:bg-gray-100 transition"
                >
                  Logout
                </button>
                <Link to="/dashboard">
                  <button className="px-4 py-2 rounded-md border border-gray-400 font-medium hover:bg-gray-100 transition">
                    Dashboard
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-300 shadow-lg p-4 flex flex-col gap-3 font-medium">
          <Link to="/" onClick={() => setMobileOpen(false)}>
            Home
          </Link>
          <Link to="/pricing" onClick={() => setMobileOpen(false)}>
            Pricing
          </Link>
          <button
            onClick={() => {
              handleOtherFeatures();
            }}
            className="flex items-center gap-1"
          >
            Other Feature <ArrowBigDown size={16} />
          </button>
          {otherFeatures && (
            <div className="flex flex-col gap-2 pl-4 text-sm">
              <Link to="/guide" onClick={() => setMobileOpen(false)}>
                Guide
              </Link>
              <Link to="/themes" onClick={() => setMobileOpen(false)}>
                Themes
              </Link>
              <Link to="/features" onClick={() => setMobileOpen(false)}>
                Features
              </Link>
              <Link to="/blog" onClick={() => setMobileOpen(false)}>
                Blog
              </Link>
              <Link to="/app-center" onClick={() => setMobileOpen(false)}>
                App Center
              </Link>
              <Link to="/seo-guide" onClick={() => setMobileOpen(false)}>
                SEO Guide
              </Link>
              <Link to="/help" onClick={() => setMobileOpen(false)}>
                Help
              </Link>
            </div>
          )}
          <Link to="/contact-us" onClick={() => setMobileOpen(false)}>
            Contact Us
          </Link>

          {/* Mobile Auth */}
          {!isLogin ? (
            <>
              <Link to="/login" onClick={() => setMobileOpen(false)}>
                <button className="px-4 py-2 w-full rounded-md bg-blue-400 text-white font-medium hover:bg-blue-500 transition">
                  Login
                </button>
              </Link>
              <Link to="/signup" onClick={() => setMobileOpen(false)}>
                <button className="px-4 py-2 w-full rounded-md bg-blue-400 text-white font-medium hover:bg-blue-500 transition">
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
                  navigate("/login");
                  setMobileOpen(false);
                }}
                className="px-4 py-2 w-full rounded-md border border-gray-400 font-medium hover:bg-gray-100 transition"
              >
                Logout
              </button>
              <Link to="/dashboard" onClick={() => setMobileOpen(false)}>
                <button className="px-4 py-2 w-full rounded-md border border-gray-400 font-medium hover:bg-gray-100 transition">
                  Dashboard
                </button>
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default NavBar;
