import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Footer from '../components/Footer.jsx';
import NavBar from '../components/NavBar.jsx';
import Contactuscard from '../components/Contactuscard.jsx';
import { Api } from '../stores/ContextApi.jsx';
import api from '../utills/api.js';

function Contactus() {
  const { contactusdata } = useContext(Api);

  const [countries, setCountries] = useState([]);

  // Fetch country codes and names
  useEffect(() => {
    const fetchPhoneData = async () => {
      try {
        const phoneRes = await axios.get('/api/phone.json'); // format: { "IN": "+91", "US": "+1" }
        const nameRes = await axios.get('/api/names.json'); // format: { "IN": "India", "US": "United States" }

        const phoneData = phoneRes.data;
        const nameData = nameRes.data;

        const combined = Object.entries(nameData).map(([code, name]) => ({
          code,
          name,
          dialCode: phoneData[code] || '',
        }));

        setCountries(combined);
      } catch (error) {
        console.error('Error fetching phone data:', error);
      }
    };

    fetchPhoneData();
  }, []);

  // Form State
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    country: 'IN',
    phonenumber: '',
    message: '',
  });

  // Input handler
  const handleInputChange = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Submit handler
  const handleSubmit = async(event) => {
    event.preventDefault();
     try {
    const res = await api.post("contact", formData);
    if (res.data.success) {
      alert("✅ Message sent successfully!");
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        country: 'IN',
        phonenumber: '',
        message: '',
      });
    }
  } catch (error) {
    console.error("❌ Error submitting form:", error);
    alert("Failed to send message. Try again later.");
  }
};

  
  return (
    <>
      <NavBar />
      <div className="min-h-screen flex-col items-center justify-center bg-gray-100 gap-8">
        {/* Header */}
        <div>
          <div className="flex justify-center items-center text-center text-lg sm:text-2xl md:text-3xl">
            <p className="mt-16 font-medium text-gray-800">Contact us</p>
          </div>
          <div className="flex font-light justify-center items-center text-center text-sm sm:text-lg">
            <p className="w-1/2">
              Looking to contact WebSb? There are a few ways to do it based on your inquiry — check out all your options below.
            </p>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          {contactusdata.map((item, index) => (
            <Contactuscard
              key={index}
              title={item.title}
              title1={item.title1}
              icon={item.icon}
            />
          ))}
        </div>

        {/* Contact Form */}
        <div className="min-h-screen flex items-center justify-center p-2.5 md:p-5 bg-gray-100">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg space-y-6"
          >
            <h2 className="text-2xl font-bold text-center text-gray-800">
              Let's Get In Touch
            </h2>

            {/* First + Last Name */}
            <div className="flex flex-wrap w-full justify-center items-center gap-2">
              <div className="flex flex-col gap-1 justify-center items-center">
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  placeholder="Enter first name"
                  className="mt-1 outline-0 block rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 border"
                />
              </div>

              <div className="flex flex-col items-center gap-1 justify-evenly">
                <label
                  htmlFor="lastname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleInputChange}
                  placeholder="Enter last name"
                  className="mt-1 outline-0 block rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 border"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="email@example.com"
                className="mt-1 outline-0 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 border"
              />
            </div>

            {/* Phone + Country */}
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <div className="flex flex-row gap-0 items-center">
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="mt-1 outline-0 block rounded-l-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 border w-1/3"
                >
                  {countries.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.name} ({c.dialCode})
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  name="phonenumber"
                  value={formData.phonenumber}
                  onChange={handleInputChange}
                  placeholder="Phone number"
                  className="mt-1 outline-0 block w-full rounded-r-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 border"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleInputChange}
                className="mt-1 block outline-0 w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 border"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Submit your message...
            </button>
          </form>
        </div>
      </div>

      <Footer
        title={'Send your message to our developer then they will solve the problem'}
        title1={'Contact with our team'}
      />
    </>
  );
}

export default Contactus;
