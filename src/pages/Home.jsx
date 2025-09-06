import React from "react";


import {
  ChevronRight,
  CircleStar,
  CalendarMinus2,
  ShoppingBag,
  Activity,


} from "lucide-react";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
    
      <div className="flex flex-col items-center">
        <div className="flex w-full h-[100vh] bg-[url(https://cdn2.editmysite.com/images/landing-pages/global/home-com-forward/masthead/blair/blair-l.webp)] bg-cover bg-center  ">
          <div className="flex flex-col w-full  items-center gap-3.5 ">
            {" "}
            <div className="h-32 w-full  flex flex-col justify-between items-center mt-11 ">
              <h1 className=" text-gray-800 font-medium text-5xl ">
                Get started with our powerful free{" "}
              </h1>
              <h1 className=" text-gray-800 font-medium text-5xl">
                website builder.
              </h1>
            </div>
            <button className="w-45 h-10 rounded-sm text-gray-50 font-medium  border-blue-100 bg-blue-400 hover: shadow-2xl hover: transition duration-300 ease-in-out transform hover:scale-105">
              Create Your Website
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-evenly gap-6 items-center w-2xl mt-6.5 ">
          {" "}
          <div className="flex flex-col w-full  items-center  ">
            {" "}
            <h1 className=" text-gray-800 font-medium text-2xl">
              Build a free website that{" "}
            </h1>
            <h1 className=" text-gray-800 font-medium text-2xl">
              {" "}
              grows with your business.
            </h1>
          </div>
          <h1 className="text-gray-500 font-normal text-2sm text-center ">
            Get access to customizable webpage designs and useful tools to build
            your website and grow your ideal business. Easily build a free
            website to help you get discovered and grow your customer base in
            style. Start today with our powerful free website builder.
          </h1>
          <div className="flex justify-evenly items-center gap-5 ">
            {" "}
            <button className="w-35 h-9 rounded-sm text-gray-50 font-medium  border-blue-100 bg-blue-400 hover: shadow-2xl hover: transition duration-300 ease-in-out transform hover:scale-105">
              Get Started
            </button>
            <p className="flex text-blue-500 font-normal hover: shadow-2xl hover: transition duration-300 ease transform hover:scale-105">
              More Designs <ChevronRight />{" "}
            </p>
          </div>
        </div>
        <div className=" mt-6 w-full h-100 bg-[url(https://cdn2.editmysite.com/images/landing-pages/global/home-com-forward/themes/design-xl.webp)] bg-cover bg-center"></div>
        <div>
          <div className="flex flex-col justify-evenly items-center w-2xl mt-6.5">
            <h1 className=" text-gray-800 font-medium text-2xl">
              Succeed with the right website
            </h1>
            <h1 className=" text-gray-800 font-medium text-2xl">
              builder, from start to growth.
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-center  p-7  ">
          <div className="flex flex-col  gap-2 justify-center items-center">
            <div>
              <CircleStar size={57} color="blue" />
            </div>
            <h1>Get Going</h1>
            <h1 className="text-gray-500 font-normal text-2sm text-center ">
              Get step-by-step guidance on how to build and launch a website
              with expert starter guides and planning tools.
            </h1>
            <h1 className="flex text-blue-500 font-normal hover: shadow-2xl hover: transition duration-300 ease-in-out transform hover:scale-105">
              Get Started <ChevronRight />
            </h1>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <div>
              <CalendarMinus2 size={57} color="blue" />
            </div>
            <h1>Get Online</h1>
            <h1 className="text-gray-500 font-normal text-2sm text-center ">
              Get discovered with a professional website. Easily customize with
              our free website builder.
            </h1>
            <h1 className="flex text-blue-500 font-normal hover: shadow-2xl hover: transition duration-300 ease-in-out transform hover:scale-105">
              Learn More <ChevronRight />
            </h1>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <div>
              <ShoppingBag size={57} color="blue" />
            </div>
            <h1>Get Selling</h1>
            <h1 className="text-gray-500 font-normal text-2sm text-center ">
              All-in-one powerful eCommerce tools to simplify order management,
              shipping, and payments.
            </h1>
            <h1 className="flex text-blue-500 font-normal hover: shadow-2xl hover: transition duration-300 ease-in-out transform hover:scale-105">
              Learn More <ChevronRight />
            </h1>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <div>
              <Activity size={57} color="blue" />
            </div>
            <h1>Get Growing</h1>
            <h1 className="text-gray-500 font-normal text-2sm text-center ">
              Find new customers with integrated marketing tools, from Facebook
              ads to automated email campaigns.
            </h1>
            <h1 className="flex text-blue-500 font-normal hover: shadow-2xl hover: transition duration-300 ease-in-out transform hover:scale-105">
              Learn More
              <ChevronRight />
            </h1>
          </div>
        </div>
        <div className="flex flex-col justify-evenly gap-6 items-center w-2xl mt-6.5 ">
          {" "}
          <div className="flex flex-col w-full  items-center  ">
            {" "}
            <h1 className=" text-gray-800 font-medium text-2xl">
              Freedom to sell anytime,
            </h1>
            <h1 className=" text-gray-800 font-medium text-2xl">
              {" "}
              anywhere with webSB
            </h1>
          </div>
          <h1 className="text-gray-500 font-normal text-2sm text-center ">
            Weebly is now a part of the Square product suite. This means never
            missing a sale and letting your customers pay how they want to.
            Whether it's at a pop-up shop or your own online store, Square takes
            care of your payments for you, so you can focus on your business.
          </h1>
          <div className="flex justify-evenly items-center gap-5 ">
            {" "}
            <button className="w-35 h-9 rounded-sm text-gray-50 font-medium  border-blue-100 bg-blue-400 hover: transition duration-300 ease-in-out transform hover:scale-105 " >
              Sign Up
            </button>
            <p className="flex text-blue-500 font-normal hover: shadow-2xl hover: transition duration-300 ease-in-out transform hover:scale-105 ">
              Learn More <ChevronRight />{" "}
            </p>
          </div>
        </div>
       
      </div>
      <Footer/>
    </>
  );
}

export default Home;
