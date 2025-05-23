import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Rocket,
  ChevronDown,
  Sparkles,
  User,
  LogOut,
  Settings,
  LayoutDashboard,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const location = useLocation();
  const { user, token } = useSelector((state) => state.auth);

  const navLinks = [
    {
      name: 'Products',
      path: '#products',
      submenu: [
        { name: 'AI Studio', path: '#studio' },
        { name: 'API Hub', path: '#api' },
        { name: 'Marketplace', path: '#marketplace' },
      ],
    },
    { name: 'Solutions', path: '#solutions' },
    { name: 'Research', path: '#research' },
    { name: 'Company', path: '#company' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 border-b backdrop-blur-lg shadow-md ${
        isScrolled
          ? 'bg-slate-900/95 border-white/10 py-3'
          : 'bg-slate-900/80 border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="transform transition-transform duration-300 group-hover:-rotate-12">
            <Rocket className="text-indigo-400 w-6 h-6 group-hover:scale-110 transition-transform" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
            Minati AI
          </span>
          <Sparkles className="ml-1 w-4 h-4 text-blue-400 animate-pulse" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={link.path}
                className={`flex items-center px-3 py-2 text-sm font-medium transition-colors ${
                  location.hash === link.path
                    ? 'text-indigo-400'
                    : 'text-white/80 hover:text-indigo-400'
                }`}
              >
                {link.name}
                {link.submenu && <ChevronDown className="ml-1 w-4 h-4" />}
              </Link>
              {link.submenu && activeDropdown === link.name && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800/95 backdrop-blur-lg rounded-lg shadow-xl p-2 animate-fade-in-up z-50">
                  {link.submenu.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      className="block px-4 py-2 text-sm text-white/90 hover:bg-slate-700/50 rounded-md transition-colors"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Profile Dropdown */}
          {token ? (
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 rounded-full focus:outline-none hover:ring-2 ring-indigo-400/50 transition"
              >
                <img
                  src={user?.avatar || 'https://i.pravatar.cc/40?img=11'}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full object-cover border border-indigo-400"
                />
                <span className="text-white/90 text-xs sm:text-sm font-medium hidden sm:block truncate max-w-[100px]">
                  {user?.email || user?.name || 'Profile'}
                </span>
              </button>
              {profileOpen && (
                <div className="absolute right-0 mt-2 w-56 max-w-[90vw] bg-slate-800/95 backdrop-blur-lg rounded-xl shadow-xl p-2 z-50 animate-fade-in-up text-xs sm:text-sm">
                  <div className="px-4 py-2 border-b border-white/10 mb-2">
                    <div className="text-white font-semibold truncate max-w-[140px]">
                      {user?.email || user?.name}
                    </div>
                    {user?.email && (
                      <div className="text-xs text-white/60 truncate max-w-[140px]">
                        {user.email}
                      </div>
                    )}
                  </div>
                  <Link
                    to="/dashboard"
                    className="flex items-center gap-2 px-4 py-2 text-white/90 hover:bg-slate-700/50 rounded-md"
                  >
                    <LayoutDashboard className="w-4 h-4" /> Dashboard
                  </Link>
                  <Link
                    to="/settings"
                    className="flex items-center gap-2 px-4 py-2 text-white/90 hover:bg-slate-700/50 rounded-md"
                  >
                    <Settings className="w-4 h-4" /> Settings
                  </Link>
                  <Link
                    to="/logout"
                    className="flex items-center gap-2 px-4 py-2 text-white/90 hover:bg-slate-700/50 rounded-md"
                  >
                    <LogOut className="w-4 h-4" /> Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-2 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full font-semibold transition"
            >
              <User className="w-4 h-4" /> Login
            </Link>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white focus:outline-none transition-transform hover:scale-110 active:scale-95"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-slate-900/95 px-6 pb-6 pt-2 border-t border-white/10 animate-fade-in-down">
          {navLinks.map((link) => (
            <div key={link.name} className="border-b border-white/5 last:border-0">
              <Link
                to={link.path}
                className="block py-3 text-white/90 hover:text-indigo-400 transition"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
              {link.submenu?.map((sub) => (
                <Link
                  key={sub.name}
                  to={sub.path}
                  className="block pl-4 py-2 text-sm text-white/70 hover:text-indigo-300"
                  onClick={() => setMobileOpen(false)}
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          ))}
          <Link
            to="/login"
            className="block w-full text-center mt-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-2 rounded-full hover:shadow-lg transition"
            onClick={() => setMobileOpen(false)}
          >
            Try Demo
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
