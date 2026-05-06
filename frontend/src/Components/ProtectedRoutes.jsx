import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function ProtectedRoute({ children }) {
  const [isAuth, setIsAuth] = useState(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("login");

    if (token && token !== "undefined" && token !== "null") {
      setIsAuth(true);
    } else {
      setIsAuth(false);
      setShowToast(true); // trigger toast once
    }
  }, []);

  //  Toast trigger (safe way)
  useEffect(() => {
    if (showToast) {
      toast.error("Please login to continue 🔒");
    }
  }, [showToast]);

  //  Loading UI
  if (isAuth === null) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
          <p className="text-gray-600 text-sm">Checking authentication...</p>
        </div>
      </div>
    );
  }

  //  Not Authenticated
  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  //  Authorized
  return children;
}