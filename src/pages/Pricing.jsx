import React, { useContext } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Api } from "../stores/ContextApi";
import { motion } from "framer-motion";


function Pricing() {
  const { data } = useContext(Api);

  return (
    <>
      <NavBar />

      <div className="w-full flex flex-col justify-center items-center px-6 sm:px-10 lg:px-20 py-10">
        
        {/* Header Section */}
        <div className="text-center mt-6">
          <p className="font-medium text-sm text-gray-600">
            How Much Does It Cost
          </p>

          <h1
            id="pricing-header"
            className="mt-3 font-semibold text-3xl sm:text-4xl"
          >
            So What Does It Cost
          </h1>

          <h2 className="mt-4 font-medium text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            Sure, we are solving you the hassle of tens or hundreds of thousands
            of dollars and doing it all fast. But don’t worry, we are not
            overcharging you.
          </h2>
        </div>

        {/* Pricing Section */}
        <div className="flex flex-col lg:flex-row w-full justify-between items-start gap-10 mt-14">

          {/* Left Info */}
          <div className="flex flex-col justify-center items-center gap-3 text-center max-w-xs mx-auto">
            <h1 className="font-semibold text-xl sm:text-2xl">
              Not sure what bundle is best for you?
            </h1>

            <p className="text-sm text-gray-600">
              Quit the guesswork — click below to download our guide
            </p>

            {/* Button */}
            <button
              onClick={() => window.open("/assets/WebSB_Guide.pdf", "_blank")}
              className="bg-[#010101] text-gray-100 py-2 px-4 rounded-xl w-full hover:bg-gray-800 transition"
            >
              WebSB Guide
            </button>

            <h1 className="mt-3 font-medium text-sm">Monthly Order Limit</h1>
            <p className="font-light text-sm">Unlimited affiliated</p>
          </div>

          {/* Cards Section */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6">
            {Array.isArray(data) && data.length > 0 ? (
              data.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card
                    title={item.title}
                    num={item.num}
                    price={item.num1}
                    num2={item.num2}
                    num3={item.num3}
                  />
                </motion.div>
              ))
            ) : (
              <p className="text-gray-500 text-sm text-center">
                No pricing data available.
              </p>
            )}
          </div>
        </div>

        <Footer title="We Build Anything, You Want" title1="Buy Now" />
      </div>
    </>
  );
}

export default Pricing;
