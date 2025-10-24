import React, { useEffect } from "react";
import {
  ChevronRight,
  CircleStar,
  CalendarMinus2,
  ShoppingBag,
  Activity,
} from "lucide-react";
import Footer from "../components/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from "../components/NavBar";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  useEffect(() => {
    gsap.utils.toArray(".animate-card").forEach((el) => {
      gsap.fromTo(
        el,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    gsap.utils.toArray(".animate-div").forEach((el) => {
      gsap.fromTo(
        el,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <div className="flex flex-col items-center">
        <div className="flex w-full min-h-screen bg-[url('https://cdn2.editmysite.com/images/landing-pages/global/home-com-forward/masthead/blair/blair-l.webp')] bg-cover bg-center sm:bg-top">
          <div className="flex flex-col w-full items-center justify-center gap-6 px-4 text-center">
            <h1 className="text-gray-800 font-medium text-2xl sm:text-3xl md:text-5xl">
              Get started with our powerful free
            </h1>
            <h1 className="text-gray-800 font-medium text-3xl sm:text-4xl md:text-5xl">
              website builder.
            </h1>
            <button className="px-6 py-2 rounded-md text-white font-medium bg-blue-500 hover:bg-blue-600 transition duration-300 transform hover:scale-105">
              Create Your Website
            </button>
          </div>
        </div>

        {/* Intro Section */}
        <div className="animate-div flex flex-col gap-6 items-center max-w-4xl mt-10 px-4 text-center">
          <h1 className="text-gray-800 font-medium text-2xl sm:text-3xl">
            Build a free website that grows with your business.
          </h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Get access to customizable webpage designs and useful tools to build
            your website and grow your ideal business. Start today with our
            powerful free website builder.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
            <button className="px-6 py-2 rounded-md text-white font-medium bg-blue-500 hover:bg-blue-600 transition duration-300 transform hover:scale-105">
              Get Started
            </button>
            <p className="flex items-center text-blue-500 font-medium cursor-pointer hover:underline">
              More Designs <ChevronRight />
            </p>
          </div>
        </div>

        {/* Image Banner */}
        <div className="animate-div mt-10 w-full h-64 sm:h-96 bg-[url('https://cdn2.editmysite.com/images/landing-pages/global/home-com-forward/themes/design-xl.webp')] bg-cover bg-center sm:bg-top"></div>

        {/* Section Title */}
        <div className="animate-div flex flex-col items-center gap-2 mt-10 px-4 text-center">
          <h1 className="text-gray-800 font-medium text-2xl sm:text-3xl">
            Succeed with the right website builder
          </h1>
          <h1 className="text-gray-800 font-medium text-2xl sm:text-3xl">
            from start to growth.
          </h1>
        </div>

        {/* Feature Cards */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-7 w-full max-w-6xl">
          {[
            {
              icon: <CircleStar size={50} color="blue" />,
              title: "Get Going",
              text: "Step-by-step guidance on how to build and launch a website with expert starter guides.",
            },
            {
              icon: <CalendarMinus2 size={50} color="blue" />,
              title: "Get Online",
              text: "Get discovered with a professional website. Easily customize with our free builder.",
            },
            {
              icon: <ShoppingBag size={50} color="blue" />,
              title: "Get Selling",
              text: "All-in-one eCommerce tools to simplify order management, shipping, and payments.",
            },
            {
              icon: <Activity size={50} color="blue" />,
              title: "Get Growing",
              text: "Find new customers with integrated marketing tools, from ads to email campaigns.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="animate-card flex flex-col gap-3 items-center text-center bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
            >
              {card.icon}
              <h2 className="font-semibold text-lg">{card.title}</h2>
              <p className="text-gray-500 text-sm">{card.text}</p>
              <span className="flex items-center text-blue-500 font-medium cursor-pointer hover:underline">
                Learn More <ChevronRight />
              </span>
            </div>
          ))}
        </div>

        {/* Selling Section */}
        <div className="flex flex-col gap-6 items-center max-w-4xl mt-10 px-4 text-center">
          <h1 className="animate-div text-gray-800 font-medium text-2xl sm:text-3xl">
            Freedom to sell anytime, anywhere with webSB
          </h1>
          <p className="animate-div text-gray-500 text-sm sm:text-base leading-relaxed">
            WebSB is designed to enhance your business. Never miss a sale and
            let customers pay how they want — from pop-up shops to your online
            store. Focus on growth while WebSB handles payments.
          </p>
          <div className="animate-div flex flex-col sm:flex-row justify-center items-center gap-5">
            <button className="px-6 py-2 rounded-md text-white font-medium bg-blue-500 hover:bg-blue-600 transition duration-300 transform hover:scale-105">
              Sign Up
            </button>
            <p className="flex items-center text-blue-500 font-medium cursor-pointer hover:underline">
              Learn More <ChevronRight />
            </p>
          </div>
        </div>
      </div>

      <Footer
        title={"Grow Your Business Anytime, Anywhere"}
        title1={"Get Started"}
      />
    </>
  );
}

export default Home;
