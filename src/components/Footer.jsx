import React from 'react'
import {   Facebook,
  Youtube,
  Instagram,
  Twitter,
ChevronRight } from 'lucide-react'
function Footer() {
  return (
    <>
     
        <div className="w-full bg-[#F5F6F7] flex flex-col justify-center items-center font-semibold text-sm  gap-7 ">
          <div className="w-full flex items-start justify-evenly gap-7">
            <div className="flex flex-col gap-2 ">
              <h1 className="text-gray-700 font-medium ">Product</h1>
              <h1>Website</h1>
              <h1>Online Store</h1>
              <h1>Photo Studio</h1>
              <h1>Features</h1>
              <h1>Themes</h1>
              <h1>Pricing</h1>
              <h1> App Center</h1>
              <h1>Mobile App</h1>
            </div>

            <div className="flex flex-col gap-2 ">
              <h1 className="text-gray-700 font-medium ">Resource</h1>
              <h1>Blog</h1>
              <h1>Success stories</h1>
              <h1>Developer Docs</h1>
              <h1>Affiliates</h1>
            </div>
            <div className="flex flex-col gap-2 ">
              <h1 className="text-gray-700 font-medium ">Suports</h1>
              <h1>Subort Center</h1>
              <h1>Community</h1>
            </div>
            <div className="flex flex-col gap-2 ">
              <h1 className="text-gray-700 font-medium ">Company</h1>
              <p>About</p>
              <p>Carrer</p>
              <p>Press</p>
              <p>Contact</p>
              <p>Terms</p>
              <p>Privacy policy</p>
              <p>
                Additional California
                <br />
                privacy Disclosure
              </p>
            </div>
          </div>
          <div className=" w-full flex justify-around items-center ">
            <div className="font-normal">@ 2025 inc </div>
            <div className="flex gap-5">
              <div className="w-8 h-8 bg-gray-200 flex justify-center items-center rounded-xl" > <Facebook size={20} color="#99a1af" /></div>
             
             <div className="w-8 h-8 bg-gray-200 flex justify-center items-center rounded-xl"> <Twitter size={20} color="#99a1af"/> </div>
             <div className="w-8 h-8 bg-gray-200 flex justify-center items-center rounded-xl"> <Youtube size={20} color="#99a1af" /></div>
           <div className="w-8 h-8 bg-gray-200 flex justify-center items-center rounded-xl">   <Instagram size={20} color="#99a1af"/></div>
            </div>
            <div className="flex  font-normal">
              English <ChevronRight />
            </div>
          </div>
        </div>
    </>
  )
}

export default Footer