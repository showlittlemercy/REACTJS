import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaCode } from 'react-icons/fa';

export const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${
        isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-200'
      } border-b sticky top-0 z-50 shadow-lg`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <FaCode className="text-2xl text-blue-500 group-hover:text-blue-600" />
            </motion.div>
            <span className={`text-xl font-bold ${
              isDark ? 'text-blue-400' : 'text-blue-600'
            } hidden sm:inline`}>
              React Docs
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`hover:text-blue-500 font-medium transition-colors ${
                isDark ? 'text-gray-200' : 'text-gray-800'
              }`}
            >
              Home
            </Link>
            <Link
              to="/docs"
              className={`hover:text-blue-500 font-medium transition-colors ${
                isDark ? 'text-gray-200' : 'text-gray-800'
              }`}
            >
              Documentation
            </Link>
            <Link
              to="/demo"
              className={`hover:text-blue-500 font-medium transition-colors ${
                isDark ? 'text-gray-200' : 'text-gray-800'
              }`}
            >
              Live Demo
            </Link>
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all ${
                isDark
                  ? 'bg-slate-700 hover:bg-slate-600'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
              title="Toggle theme"
            >
              {isDark ? (
                <FaSun className="text-yellow-400 text-lg" />
              ) : (
                <FaMoon className="text-gray-700 text-lg" />
              )}
            </motion.button>

            {/* Mobile menu button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className={`w-6 h-6 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`md:hidden pb-4 border-t ${
              isDark ? 'border-slate-700' : 'border-gray-200'
            }`}
          >
            <Link
              to="/"
              className={`block py-2 px-4 hover:text-blue-500 ${
                isDark ? 'text-gray-200' : 'text-gray-800'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/docs"
              className={`block py-2 px-4 hover:text-blue-500 ${
                isDark ? 'text-gray-200' : 'text-gray-800'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Documentation
            </Link>
            <Link
              to="/demo"
              className={`block py-2 px-4 hover:text-blue-500 ${
                isDark ? 'text-gray-200' : 'text-gray-800'
              }`}
              onClick={() => setIsOpen(false)}
            >
              Live Demo
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
