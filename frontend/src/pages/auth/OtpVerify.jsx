import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { verifyOtp, resendOtp } from '../../app/auth/authSlice';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Key, RefreshCw, Loader2 } from 'lucide-react';

const OtpVerify = () => {
  const location = useLocation(); // ✅ Declare this first!
  const [email, setEmail] = useState(location.state?.email || '');
  const [otp, setOtp] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, message } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting OTP for:', email);
    dispatch(verifyOtp({ email, otp }))
      .unwrap()
      .then(() => navigate('/'))
      .catch((err) => console.error('OTP verification error:', err));
  };

  const handleResend = () => {
    dispatch(resendOtp({ email }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 px-2 sm:px-4">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 p-4 sm:p-8 animate-fade-in-up">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-6 sm:mb-8 tracking-tight animate-slide-in-down">
          Verify Your <span className="text-indigo-400">Minati AI Email</span>
        </h2>
        <p className="text-white/70 text-sm mb-4 text-center">
          An OTP has been sent to <span className="text-indigo-300">{email}</span>
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="relative">
            <label className="text-white text-sm font-medium block mb-2">OTP</label>
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
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white font-semibold py-2 rounded-xl transition duration-300 shadow-lg hover:shadow-indigo-600/50 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin w-4 h-4" /> Verifying...
              </>
            ) : (
              'Verify OTP'
            )}
          </button>
          {message && <p className="text-green-400 text-sm text-center mt-2">{message}</p>}
          {error && <p className="text-red-400 text-sm text-center mt-2">{error}</p>}
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={handleResend}
            className="text-indigo-400 hover:underline flex justify-center items-center gap-1 text-sm"
          >
            <RefreshCw size={16} /> Resend OTP
          </button>
        </div>
        <div className="mt-6 text-center text-sm text-white/60">
          Go back to{' '}
          <Link to="/login" className="text-indigo-400 hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OtpVerify;
