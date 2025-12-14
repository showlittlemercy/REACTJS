import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaArrowUp } from 'react-icons/fa';

export const Footer = () => {
  const { isDark } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: FaGithub,
      url: 'https://github.com/showlittlemercy',
      label: 'GitHub',
    },
    {
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/priyanshu-thakur-a47774360/',
      label: 'LinkedIn',
    },
    {
      icon: FaInstagram,
      url: 'https://www.instagram.com/showlittlemercy/',
      label: 'Instagram',
    },
    {
      icon: FaEnvelope,
      url: 'mailto:showlittlemercy@gmail.com',
      label: 'Email',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`${
        isDark
          ? 'bg-gradient-to-b from-slate-900 to-slate-950 border-slate-700'
          : 'bg-gradient-to-b from-gray-50 to-white border-gray-200'
      } border-t mt-20`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-blue-500 mb-4">React Docs</h3>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              A comprehensive documentation platform for learning React.js with interactive examples and live demos.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className={`font-semibold mb-4 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
              Quick Links
            </h4>
            <ul className={`text-sm space-y-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <li>
                <a href="/" className="hover:text-blue-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/docs" className="hover:text-blue-500 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="/demo" className="hover:text-blue-500 transition-colors">
                  Live Demo
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants}>
            <h4 className={`font-semibold mb-4 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
              Resources
            </h4>
            <ul className={`text-sm space-y-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <li>
                <a
                  href="https://react.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors"
                >
                  Official React Docs
                </a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/package/react"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors"
                >
                  NPM Package
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h4 className={`font-semibold mb-4 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-full transition-colors ${
                    isDark
                      ? 'bg-slate-800 hover:bg-blue-600'
                      : 'bg-gray-200 hover:bg-blue-500'
                  } text-white`}
                  title={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Creator Info */}
        <motion.div
          variants={itemVariants}
          className={`border-t ${
            isDark ? 'border-slate-700' : 'border-gray-200'
          } pt-8 pb-4`}
        >
          <div className={`text-center text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            <p className="font-semibold text-blue-500 mb-2">Created by Priyanshu</p>
            <p className="mb-2">
              Email:{' '}
              <a
                href="mailto:showlittlemercy@gmail.com"
                className="hover:text-blue-500 transition-colors"
              >
                showlittlemercy@gmail.com
              </a>
            </p>
            <p className="mb-4">
              A passionate developer creating educational content for React enthusiasts.
            </p>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          variants={itemVariants}
          className={`border-t ${
            isDark ? 'border-slate-700' : 'border-gray-200'
          } pt-6 flex flex-col sm:flex-row justify-between items-center gap-4`}
        >
          <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            © 2025 React Docs. Built with ❤️ by Priyanshu
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          >
            Back to Top
            <FaArrowUp size={14} />
          </motion.button>
        </motion.div>
      </div>
    </motion.footer>
  );
};
