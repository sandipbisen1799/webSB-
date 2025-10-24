import NavBar from "../components/NavBar.jsx";
import Home from "../pages/home.jsx";
import Login from "../pages/login.jsx";
import Dashboard from '../pages/Dashboard.jsx'
import PrivateRoute from "../components/PrivateRoute.jsx";
import { ToastContainer } from "react-toastify";
import { Route,Routes } from "react-router-dom";
import Signup from "../pages/Signup.jsx";
import Pricing from "../pages/Pricing.jsx";
import Nopage from "../pages/Nopage.jsx";
import Contactus from '../pages/Contactus.jsx'
import {GoogleOAuthProvider} from '@react-oauth/google'
function AppContent() {

  return (
    <>
 
      <ToastContainer
        className="custom-toast"
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
        <GoogleOAuthProvider clientId='658676857394-0lbm3c50hf184hu31a75urgtil8hifrt.apps.googleusercontent.com' >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/pricing" element={<Pricing/>}/>
         <Route path= '/contact-us' element ={<Contactus/>}/>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<Nopage/>}/>
      </Routes>
      </GoogleOAuthProvider>
      
    </>
  );
}
export default AppContent;