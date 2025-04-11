import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../app/auth/authSlice";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Key, Lock, Loader2 } from "lucide-react";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, message, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    dispatch(resetPassword({ email, otp, newPassword }))
      .unwrap()
      .then(() => navigate("/login"));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 px-4">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 p-8 animate-fade-in-up">
        <h2 className="text-3xl font-extrabold text-center text-white mb-8 tracking-tight animate-slide-in-down">
          Reset <span className="text-indigo-400">Password</span>
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="text-white text-sm font-medium block mb-2">
              Email
            </label>
            <div className="flex items-center bg-white/10 rounded-lg border border-white/20">
              <span className="px-3 text-white">
                <Mail size={18} />
              </span>
              <input
                type="email"
                className="w-full px-3 py-2 text-sm bg-transparent text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded-r-lg"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label className="text-white text-sm font-medium block mb-2">
              OTP
            </label>
            <div className="flex items-center bg-white/10 rounded-lg border border-white/20">
              <span className="px-3 text-white">
                <Key size={18} />
              </span>
              <input
                type="text"
                className="w-full px-3 py-2 text-sm bg-transparent text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded-r-lg"
                placeholder="123456"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label className="text-white text-sm font-medium block mb-2">
              New Password
            </label>
            <div className="flex items-center bg-white/10 rounded-lg border border-white/20">
              <span className="px-3 text-white">
                <Lock size={18} />
              </span>
              <input
                type="password"
                className="w-full px-3 py-2 text-sm bg-transparent text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded-r-lg"
                placeholder="••••••••"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label className="text-white text-sm font-medium block mb-2">
              Confirm Password
            </label>
            <div className="flex items-center bg-white/10 rounded-lg border border-white/20">
              <span className="px-3 text-white">
                <Lock size={18} />
              </span>
              <input
                type="password"
                className="w-full px-3 py-2 text-sm bg-transparent text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded-r-lg"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white font-semibold py-2 rounded-xl transition duration-300 shadow-lg hover:shadow-indigo-600/50 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin w-4 h-4" /> Resetting...
              </>
            ) : (
              "Reset Password"
            )}
          </button>
          {message && (
            <p className="text-green-400 text-sm text-center mt-2">{message}</p>
          )}
          {error && (
            <p className="text-red-400 text-sm text-center mt-2">{error}</p>
          )}
        </form>
        <div className="mt-6 text-center text-sm text-white/60">
          Go to{" "}
          <Link to="/login" className="text-indigo-400 hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
