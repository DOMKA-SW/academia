import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { BookOpen, User, LogOut, Settings, Crown, Menu, X, Rocket } from 'lucide-react';
import { useState } from "react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ✅ CORREGIDO - agregué el tipo string
  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/courses", label: "Cursos", icon: BookOpen },
    { path: "/about", label: "Instructor", icon: User },
  ];

  const userLinks = user ? [
    { path: "/dashboard", label: "Mi Progreso", icon: Settings },
    ...(user.role === "admin" ? [{ path: "/admin", label: "Admin", icon: Crown }] : [])
  ] : [];

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-white/90 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-2 group"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-900 to-pink-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-pink-500 transition-all">
                Marketing Academy
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-200"
                      : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                  }`}
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop User Menu */}
            <div className="hidden md:flex items-center gap-2">
              {user ? (
                <>
                  {userLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                        isActive(link.path)
                          ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-200"
                          : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                      }`}
                    >
                      <link.icon className="w-4 h-4" />
                      {link.label}
                    </Link>
                  ))}
                  
                  {/* User Profile Dropdown */}
                  <div className="relative group">
                    <button className="flex items-center gap-2 px-3 py-2 rounded-xl font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                        {user.name?.charAt(0)?.toUpperCase() || "U"}
                      </div>
                      <span className="max-w-32 truncate">{user.name || "Usuario"}</span>
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-xl border border-purple-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                      <div className="p-2">
                        <div className="px-3 py-2 text-sm text-gray-600 border-b border-gray-100">
                          {user.email}
                        </div>
                        <button
                          onClick={handleLogout}
                          className="flex items-center gap-2 w-full px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors text-sm font-medium"
                        >
                          <LogOut className="w-4 h-4" />
                          Cerrar Sesión
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex items-center gap-2">
                  <Link
                    to="/login"
                    className="px-4 py-2 rounded-xl font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200"
                  >
                    Iniciar Sesión
                  </Link>
                  <Link
                    to="/register"
                    className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-200"
                  >
                    Registrarse
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-purple-100">
            <div className="px-4 py-4 space-y-2">
              {/* Navigation Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                      : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                  }`}
                >
                  <link.icon className="w-5 h-5" />
                  {link.label}
                </Link>
              ))}

              {/* User Links */}
              {user && userLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                      : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                  }`}
                >
                  <link.icon className="w-5 h-5" />
                  {link.label}
                </Link>
              ))}

              {/* Auth Links */}
              {user ? (
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3 px-4 py-3 text-gray-700">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      {user.name?.charAt(0)?.toUpperCase() || "U"}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">{user.name || "Usuario"}</div>
                      <div className="text-sm text-gray-500 truncate">{user.email}</div>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors font-medium"
                  >
                    <LogOut className="w-5 h-5" />
                    Cerrar Sesión
                  </button>
                </div>
              ) : (
                <div className="pt-4 border-t border-gray-100 space-y-2">
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200"
                  >
                    <User className="w-5 h-5" />
                    Iniciar Sesión
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-semibold justify-center hover:from-purple-700 hover:to-pink-600 transition-all duration-300"
                  >
                    <User className="w-5 h-5" />
                    Registrarse
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}
