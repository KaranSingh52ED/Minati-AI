import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../app/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { Loader, AlertCircle, ShieldCheck } from "lucide-react";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, token, loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (!storedToken) {
      navigate("/login");
    } else {
      dispatch(getProfile());
    }
  }, [dispatch, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Loader className="animate-spin h-8 w-8 text-indigo-600" />
        <p className="ml-3 text-indigo-700 font-medium">
          Loading your dashboard...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-red-50 text-red-600">
        <AlertCircle className="w-6 h-6 mr-2" />
        <p className="font-medium">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-slate-100 to-blue-50 px-4 py-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-lg w-full transition-all duration-300 hover:shadow-blue-200">
        <h1 className="text-3xl font-extrabold text-center text-indigo-700 mb-6">
          👋 Welcome Back
        </h1>

        {user ? (
          <div className="space-y-6 text-gray-800">
            <div className="flex items-center justify-between">
              <span className="font-semibold">Email:</span>
              <span className="text-right">{user.email}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold">Verified:</span>
              <span
                className={`text-sm font-medium px-2 py-1 rounded-full ${
                  user.isVerified
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {user.isVerified ? "Verified ✅" : "Unverified ❌"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold">Created:</span>
              <span>{new Date(user.createdAt).toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold">Last Updated:</span>
              <span>{new Date(user.updatedAt).toLocaleString()}</span>
            </div>

            <div className="flex justify-center mt-6">
              <div className="flex items-center gap-2 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-semibold">
                <ShieldCheck size={16} />
                Secure Session Active
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">User data not available.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
