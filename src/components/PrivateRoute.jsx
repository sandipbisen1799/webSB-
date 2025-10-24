import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Api } from "../stores/ContextApi";

function PrivateRoute({ children }) {
  const { isLogin } = useContext(Api);
  return isLogin ? children : <Navigate to="/login" replace />;
}

export default PrivateRoute;