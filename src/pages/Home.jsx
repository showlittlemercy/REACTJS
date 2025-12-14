import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { FaReact, FaCode, FaRocket, FaBook, FaLightbulb, FaGraduationCap } from 'react-icons/fa';

export const Home = () => {
  const { isDark } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const features = [
    {
      icon: FaBook,
      title: 'Comprehensive Docs',
      description: 'Complete React.js documentation covering everything from basics to advanced concepts',
    },
    {
      icon: FaCode,
      title: 'Code Examples',
      description: 'Real-world code examples for every concept with syntax highlighting',
    },
    {
      icon: FaRocket,
      title: 'Live Demos',
      description: 'Interactive demos to test and understand React concepts in real-time',
    },
    {
      icon: FaLightbulb,
      title: 'Best Practices',
      description: 'Learn industry best practices and modern React patterns',
    },
    {
      icon: FaGraduationCap,
      title: 'Learning Path',
      description: 'Structured learning path from beginner to advanced React developer',
    },
    {
      icon: FaReact,
      title: 'Modern React',
      description: 'Covers latest React features including hooks, context, and suspense',
    },
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`relative overflow-hidden py-20 ${
          isDark
            ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
            : 'bg-gradient-to-br from-blue-50 via-white to-blue-50'
        }`}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-8 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="inline-block"
              >
                <FaReact className="text-6xl text-blue-500 mx-auto" />
              </motion.div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
            >
              Master React.js
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Complete documentation and interactive learning platform for React JavaScript library
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/docs">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-all shadow-lg"
                >
                  Start Learning →
                </motion.button>
              </Link>
              <Link to="/demo">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-4 font-bold rounded-lg border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all ${
                    isDark ? 'bg-slate-800' : 'bg-transparent'
                  }`}
                >
                  Try Demo
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className={`py-20 ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Everything You Need
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Comprehensive resources to master React development
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: isDark ? '0 20px 40px rgba(59, 130, 246, 0.2)' : '0 20px 40px rgba(59, 130, 246, 0.1)' }}
                className={`p-8 rounded-xl card-shadow ${
                  isDark
                    ? 'bg-slate-800 border border-slate-700'
                    : 'bg-gray-50 border border-gray-200'
                }`}
              >
                <feature.icon className="text-4xl text-blue-500 mb-4" />
                <h3 className={`text-xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {feature.title}
                </h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`py-20 ${isDark ? 'bg-slate-800' : 'bg-blue-50'}`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Ready to Master React?
          </h2>
          <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Dive into our comprehensive documentation and start your React journey today!
          </p>
          <Link to="/docs">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-blue-500 text-white font-bold text-lg rounded-lg hover:bg-blue-600 transition-all inline-block"
            >
              Explore Full Documentation
            </motion.button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
};
