import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../app/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { Loader2, AlertCircle, ShieldCheck } from 'lucide-react';

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (!storedToken) {
      navigate('/login');
    } else {
      dispatch(getProfile());
    }
  }, [dispatch, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 text-white">
        <Loader2 className="animate-spin h-6 w-6 mr-3 text-indigo-400" />
        <p className="text-indigo-300 font-medium">Loading your dashboard...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 text-red-400">
        <AlertCircle className="w-6 h-6 mr-2" />
        <p className="font-medium">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 px-2 sm:px-4 py-6">
      <div className="w-full  max-w-md bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-4 sm:p-8 animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-6 tracking-tight animate-slide-in-down">
          👋 Welcome Back <span className="text-indigo-400">Minati AI</span>
        </h1>

        {user ? (
          <div className="space-y-5 text-sm sm:text-base text-white/90">
            <InfoItem label="User ID" value={user._id} />
            <InfoItem label="Full Name" value={user.fullname} />
            <InfoItem label="Email" value={user.email} />
            <InfoItem label="Contact" value={user.contact} />
            <InfoItem
              label="Verified"
              value={
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    user.isVerified
                      ? 'bg-green-600/20 text-green-400'
                      : 'bg-red-600/20 text-red-400'
                  }`}
                >
                  {user.isVerified ? 'Verified ✅' : 'Unverified ❌'}
                </span>
              }
            />

            <div className="flex justify-center pt-4">
              <div className="flex items-center gap-2 bg-indigo-500/10 text-indigo-300 px-3 py-1 rounded-full text-xs font-semibold">
                <ShieldCheck size={16} />
                Secure Session Active
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-white/50">User data not available.</p>
        )}
      </div>
    </div>
  );
};

const InfoItem = ({ label, value }) => (
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0">
    <span className="text-white font-medium">{label}:</span>
    <span className="text-right break-all">{value}</span>
  </div>
);

export default Dashboard;
