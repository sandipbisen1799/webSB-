import React from "react";
import {
  Facebook,
  Youtube,
  Instagram,
  Twitter,
  ChevronRight,
} from "lucide-react";

function Footer({ title, title1 }) {
  return (
    <>
      {/* Call-to-action section */}
      <div className="w-full h-60 bg-[#F5F6F7] flex flex-col justify-center items-center gap-5 mt-6 px-4 text-center">
        <h1 className="text-gray-800 font-medium text-lg sm:text-xl">
          {title}
        </h1>
        <button className="w-48 sm:w-56 h-10 rounded-sm text-gray-50 font-medium bg-blue-400 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          {title1}
        </button>
      </div>

      {/* Main footer */}
      <div className="w-full bg-[#F5F6F7] flex flex-col justify-center items-center font-semibold text-sm gap-7 px-6 py-8">
        {/* Links section */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <h1 className="text-gray-700 font-medium">Product</h1>
            <p>Website</p>
            <p>Online Store</p>
            <p>Photo Studio</p>
            <p>Features</p>
            <p>Themes</p>
            <p>Pricing</p>
            <p>App Center</p>
            <p>Mobile App</p>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-gray-700 font-medium">Resource</h1>
            <p>Blog</p>
            <p>Success stories</p>
            <p>Developer Docs</p>
            <p>Affiliates</p>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-gray-700 font-medium">Supports</h1>
            <p>Support Center</p>
            <p>Community</p>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-gray-700 font-medium">Company</h1>
            <p>About</p>
            <p>Career</p>
            <p>Press</p>
            <p>Contact</p>
            <p>Terms</p>
            <p>Privacy policy</p>
            <p>
              Additional California <br />
              privacy Disclosure
            </p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-300 pt-4">
          <div className="font-normal">@ 2025 Inc</div>

          {/* Social icons */}
          <div className="flex gap-4">
            <a
              className="w-8 h-8 bg-gray-200 flex justify-center items-center rounded-xl"
              href="https://www.facebook.com/profile.php?id=100094736086850"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={20} color="#99a1af" />
            </a>
            <div className="w-8 h-8 bg-gray-200 flex cursor-pointer justify-center items-center rounded-xl">
              <Twitter size={20} color="#99a1af" />
            </div>
            <a
              className="w-8 h-8 bg-gray-200 flex justify-center items-center rounded-xl"
              href="https://www.youtube.com/@sandipbisen1799"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube size={20} color="#99a1af" />
            </a>
            <a
              className="w-8 h-8 bg-gray-200 flex justify-center items-center rounded-xl"
              href="https://www.instagram.com/sandip_bisen__/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={20} color="#99a1af" />
            </a>
          </div>

          {/* Language selector */}
          <div className="flex items-center font-normal cursor-pointer">
            English <ChevronRight />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
