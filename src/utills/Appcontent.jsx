import NavBar from "../components/NavBar.jsx";
import Home from "../pages/home.jsx";
import Login from "../pages/login.jsx";
import Dashboard from '../pages/Dashboard.jsx'
import PrivateRoute from "../components/PrivateRoute.jsx";
import { ToastContainer } from "react-toastify";
import { Route,Routes } from "react-router-dom";
import Signup from "../pages/Signup.jsx";
function AppContent() {
  
  return (
    <>
      <NavBar />
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}
export default AppContent;