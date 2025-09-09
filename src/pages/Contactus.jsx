import React from 'react'
import { useState,useEffect } from 'react';
import Footer from '../components/Footer.jsx'
import NavBar from '../components/NavBar.jsx'
import axios from 'axios';

 
 

function Contactus() {

useEffect(()=>{
 
  const fatchphonenumber= async()=>{
      try{

   const res= await axios.get('https://country.io/phone.json')
   console.log(res);
    }

catch (error) {
    console.log(error)
    }

    
  } 

fatchphonenumber();
   
},
[])

    const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    country: "india",
    streetaddress: "",
    city: "",
    state: "",
    postalcode: "",
    pushnotifications: "",
    comments: false,
    candidate: false,
    offers: false,
  });
   function handleInputChange(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormdata) => ({
      ...prevFormdata,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  const submithandler = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  useEffect(() => {
    console.log("Updated formData:", formData);
  }, [formData]);
  return (
  <>  <NavBar/> 
    <div className="min-h-screen flex-col items-center justify-center bg-gray-100 ">
      <div>
        <div>
          <p>Looking to Contact WebSb,There a few way to do it based on your inquiry- checkout all your option below.</p>
        </div>

        <div>

        </div>
      </div>

        <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <form
        onSubmit={submithandler}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
        Let's Get In Touch
        </h2>

        {/* Firstname */}
        <div className='flex flex-wrap w-full justify-center items-center gap-2'>
         <div className='flex flex-col gap-1 justify-center items-center '>
           <label htmlFor="firstname" className="block   text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            value={formData.firstname}
            name="firstname"
            id="firstname"
            onChange={handleInputChange}
            placeholder="Enter first name"
            className="mt-1 outline-0 block  rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 border"
          />

        </div>

        {/* Lastname */}
        
           <div className='flex flex-col items-center gap-1 justify-evenly '>
              
            <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
            placeholder="Enter last name"
            className="mt-1 outline-0 block  rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 border"
          />
   </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="email@example.com"
            className="mt-1 outline-0 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 border"
          />
        </div>

        {/* Country */}
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
         <div className='flex flex-row gap-0 items-center  '>
           <select
            value={formData.country}
            name="country"
            required
            onChange={handleInputChange}
            className="mt-1 outline-0 block  rounded-lg border-gray-300 border-l-0 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 border"
          >
         <div className='flex flex-row justify-center items-center rounded-2xl '>
             <option value="india">+91</option>
            <option value="us">=1</option>
            <option value="canada">+3</option>
         </div>
          </select>
          <input value={formData.phonenumber} type='text' name="phonenumber" id="phonenumber" onChange={handleInputChange}
            className="mt-1 outline-0 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 border "
            />
         </div>
        </div>

        {/* Street Address */}
        <div>
          <label htmlFor="streetaddress" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            type='text'
            name="Message"
            id="Message"
            placeholder=" write your message here..."
            value={formData.streetaddress}
            onChange={handleInputChange}
            className="mt-1 block outline-0 w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 border"
          />
        </div>



       
      

       

      

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium"
        >
          Submit your message...
        </button>
      </form>
    </div>
    </div>
    <Footer title={'Send your message to our developer then they will solve the problem'} title1={'contact with our team'} />
    </>
  )
}

export default Contactus