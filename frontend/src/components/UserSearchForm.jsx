import React, { useState } from 'react';
import axios from 'axios';
import { Search, Loader2 } from 'lucide-react';

const UserSearchForm = () => {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setUsers([]);
    setLoading(true);
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/profile/search`, {
        query,
      });
      setUsers(res.data.users || []);
    } catch (err) {
      setError(err.response?.data?.error || err.response?.data?.message || 'Error searching users');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 px-2 sm:px-4 py-12">
      <div className="w-full max-w-5xl bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 p-4 sm:p-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-8 flex items-center justify-center gap-2 animate-slide-in-down">
          <Search size={30} className="text-indigo-400" /> User Search
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-8"
        >
          <input
            name="query"
            id="query"
            type="text"
            autoComplete="off"
            placeholder="Enter name, email, contact, or user ID"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full sm:w-auto flex-1 px-4 py-3 text-sm bg-white/10 text-white placeholder-white/60 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            required
          />
          <button
            type="submit"
            disabled={loading || !query.trim()}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-xl transition hover:from-indigo-600 hover:to-pink-600 disabled:opacity-50 shadow-md"
          >
            {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <Search size={18} />}
            Search
          </button>
        </form>

        {error && (
          <div className="text-red-400 bg-red-800/10 border border-red-500/40 rounded-md px-4 py-2 mb-6 text-sm font-medium text-center animate-pulse">
            {error}
          </div>
        )}

        {users.length > 0 ? (
          <div className="overflow-x-auto bg-white/5 rounded-xl border border-white/10">
            <table className="min-w-full divide-y divide-white/10 text-white text-sm text-left">
              <thead>
                <tr className="bg-indigo-500/20 text-indigo-300 text-xs sm:text-sm">
                  <th className="px-4 py-3">ID</th>
                  <th className="px-4 py-3">Full Name</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Contact</th>
                  <th className="px-4 py-3">Verified</th>
                  <th className="px-4 py-3">Created</th>
                  <th className="px-4 py-3">Updated</th>
                  <th className="px-4 py-3">Version</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {users.map((user) => (
                  <tr key={user._id} className="hover:bg-white/5 transition-all">
                    <td className="px-4 py-2 font-mono break-all">{user._id}</td>
                    <td className="px-4 py-2">{user.fullname}</td>
                    <td className="px-4 py-2">{user.email}</td>
                    <td className="px-4 py-2">{user.contact}</td>
                    <td className="px-4 py-2 text-center">{user.isVerified ? '✅' : '❌'}</td>
                    <td className="px-4 py-2">{new Date(user.createdAt).toLocaleString()}</td>
                    <td className="px-4 py-2">{new Date(user.updatedAt).toLocaleString()}</td>
                    <td className="px-4 py-2">{user.__v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          !loading &&
          !error && (
            <p className="text-center text-white/50 mt-6 text-sm">
              No users to display. Try searching above.
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default UserSearchForm;
