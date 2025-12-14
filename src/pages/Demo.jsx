import React, { useState, useReducer } from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaTimes } from 'react-icons/fa';

export const Demo = () => {
  const { isDark } = useTheme();
  const [activeDemo, setActiveDemo] = useState(0);

  const demos = [
    {
      id: 0,
      title: 'Counter with Hooks',
      description: 'Interactive counter to demonstrate useState hook',
      component: CounterDemo,
    },
    {
      id: 1,
      title: 'Todo App',
      description: 'Add and remove todos to understand state management',
      component: TodoDemo,
    },
    {
      id: 2,
      title: 'Theme Switcher',
      description: 'Toggle theme to learn Context API in action',
      component: ThemeSwitcherDemo,
    },
    {
      id: 3,
      title: 'Form Validation',
      description: 'Form with validation to understand controlled components',
      component: FormValidationDemo,
    },
    {
      id: 4,
      title: 'useReducer Example',
      description: 'Complex state management with reducer pattern',
      component: ReducerDemo,
    },
    {
      id: 5,
      title: 'Conditional Rendering',
      description: 'Toggle different UI components based on state',
      component: ConditionalRenderingDemo,
    },
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className={`text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Interactive Demos
          </h1>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Try these interactive examples to learn React concepts in real-time
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {demos.map((demo, index) => (
            <motion.div
              key={demo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-xl cursor-pointer border-2 transition-all ${
                activeDemo === demo.id
                  ? 'border-blue-500 shadow-lg shadow-blue-500/20'
                  : `border-${isDark ? 'slate-700' : 'gray-200'}`
              } ${
                isDark ? 'bg-slate-800 hover:bg-slate-700' : 'bg-gray-50 hover:bg-gray-100'
              }`}
              onClick={() => setActiveDemo(demo.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className={`text-xl font-bold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {demo.title}
                  </h3>
                  <p className={`text-sm mt-2 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {demo.description}
                  </p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
              >
                <FaPlay size={14} /> Try It
              </motion.button>
            </motion.div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {demos[activeDemo] && (
            <motion.div
              key={activeDemo}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`p-8 rounded-xl border-2 border-blue-500 ${
                isDark ? 'bg-slate-800' : 'bg-gray-50'
              }`}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className={`text-2xl font-bold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {demos[activeDemo].title}
                </h2>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setActiveDemo(null)}
                  className="p-2 hover:bg-red-500 rounded-lg transition-colors"
                >
                  <FaTimes className="text-red-500 hover:text-white text-xl" />
                </motion.button>
              </div>

              <motion.div
                className={`p-6 rounded-lg ${
                  isDark ? 'bg-slate-700' : 'bg-white'
                }`}
              >
                {React.createElement(demos[activeDemo].component)}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// Counter Demo Component
function CounterDemo() {
  const [count, setCount] = useState(0);
  const { isDark } = useTheme();

  return (
    <motion.div className="text-center space-y-6">
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className={`text-6xl font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}
      >
        {count}
      </motion.div>

      <div className="flex gap-4 justify-center flex-wrap">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCount(count + 1)}
          className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-all"
        >
          + Increment
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCount(count - 1)}
          className="px-6 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-all"
        >
          - Decrement
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCount(0)}
          className="px-6 py-3 bg-gray-500 text-white font-bold rounded-lg hover:bg-gray-600 transition-all"
        >
          Reset
        </motion.button>
      </div>

      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        Current count: {count}
      </p>
    </motion.div>
  );
}

// Todo Demo Component
function TodoDemo() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React Hooks', completed: false },
    { id: 2, text: 'Build a project', completed: false },
  ]);
  const [input, setInput] = useState('');
  const { isDark } = useTheme();

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <motion.div className="space-y-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Add a new todo..."
          className={`flex-1 px-4 py-2 rounded-lg border-2 focus:outline-none focus:border-blue-500 ${
            isDark
              ? 'bg-slate-600 border-slate-500 text-white'
              : 'bg-white border-gray-300 text-gray-900'
          }`}
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={addTodo}
          className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-all"
        >
          Add
        </motion.button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <motion.li
            key={todo.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className={`flex items-center gap-3 p-3 rounded-lg ${
              isDark ? 'bg-slate-600' : 'bg-gray-100'
            }`}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="w-5 h-5 cursor-pointer"
            />
            <span
              className={`flex-1 ${
                todo.completed ? 'line-through opacity-50' : ''
              } ${isDark ? 'text-gray-200' : 'text-gray-900'}`}
            >
              {todo.text}
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => deleteTodo(todo.id)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-all text-sm"
            >
              Delete
            </motion.button>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

// Theme Switcher Demo
function ThemeSwitcherDemo() {
  const [isLocalDark, setIsLocalDark] = useState(false);

  return (
    <motion.div className="space-y-6">
      <div className={`p-6 rounded-lg transition-all ${
        isLocalDark
          ? 'bg-gradient-to-br from-slate-700 to-slate-800 text-white'
          : 'bg-gradient-to-br from-blue-100 to-blue-50 text-gray-900'
      }`}>
        <h3 className="text-2xl font-bold mb-2">Preview Area</h3>
        <p>This area demonstrates the theme in action</p>
        <p className="mt-4 text-sm opacity-75">
          Current theme: {isLocalDark ? 'Dark' : 'Light'}
        </p>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsLocalDark(!isLocalDark)}
        className={`w-full px-6 py-3 font-bold rounded-lg transition-all ${
          isLocalDark
            ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-600'
            : 'bg-slate-700 text-white hover:bg-slate-800'
        }`}
      >
        Toggle Theme
      </motion.button>

      <div className={`p-4 rounded-lg text-sm ${
        isLocalDark
          ? 'bg-slate-700 text-gray-200'
          : 'bg-gray-100 text-gray-700'
      }`}>
        <p className="font-bold mb-2">How it works:</p>
        <p>Click the button above to switch between light and dark themes. This demonstrates how state changes can update the entire UI.</p>
      </div>
    </motion.div>
  );
}

// Form Validation Demo
function FormValidationDemo() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const { isDark } = useTheme();

  const validateForm = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Email is invalid';
    if (!form.password) newErrors.password = 'Password is required';
    else if (form.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      alert('Form submitted successfully!');
      setForm({ name: '', email: '', password: '' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      {['name', 'email', 'password'].map((field) => (
        <div key={field}>
          <label className={`block text-sm font-bold mb-2 ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </label>
          <input
            type={field === 'password' ? 'password' : field === 'email' ? 'email' : 'text'}
            name={field}
            value={form[field]}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border-2 focus:outline-none transition-all ${
              errors[field]
                ? 'border-red-500 focus:border-red-600'
                : 'border-blue-500 focus:border-blue-600'
            } ${isDark ? 'bg-slate-600 text-white' : 'bg-white text-gray-900'}`}
          />
          {errors[field] && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 text-sm mt-1"
            >
              {errors[field]}
            </motion.p>
          )}
        </div>
      ))}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="w-full px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-all"
      >
        Submit
      </motion.button>
    </form>
  );
}

// Reducer Demo
function ReducerDemo() {
  const initialState = { count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      case 'RESET':
        return { count: 0 };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const { isDark } = useTheme();

  return (
    <motion.div className="text-center space-y-6">
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className={`text-6xl font-bold ${isDark ? 'text-purple-400' : 'text-purple-600'}`}
      >
        {state.count}
      </motion.div>

      <div className="flex gap-4 justify-center flex-wrap">
        {[
          { label: '+', action: 'INCREMENT', color: 'green' },
          { label: '-', action: 'DECREMENT', color: 'red' },
          { label: 'Reset', action: 'RESET', color: 'gray' },
        ].map((btn) => (
          <motion.button
            key={btn.action}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => dispatch({ type: btn.action })}
            className={`px-6 py-3 bg-${btn.color}-500 text-white font-bold rounded-lg hover:bg-${btn.color}-600 transition-all`}
            style={{
              backgroundColor: btn.color === 'green' ? '#22c55e' : btn.color === 'red' ? '#ef4444' : '#6b7280',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = btn.color === 'green' ? '#16a34a' : btn.color === 'red' ? '#dc2626' : '#4b5563';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = btn.color === 'green' ? '#22c55e' : btn.color === 'red' ? '#ef4444' : '#6b7280';
            }}
          >
            {btn.label}
          </motion.button>
        ))}
      </div>

      <div className={`p-4 rounded-lg text-sm ${
        isDark ? 'bg-slate-600 text-gray-200' : 'bg-gray-100 text-gray-700'
      }`}>
        <p className="font-bold mb-2">useReducer Pattern:</p>
        <p>This demo uses the useReducer hook for state management, showing how actions dispatch to a reducer function.</p>
      </div>
    </motion.div>
  );
}

// Conditional Rendering Demo
function ConditionalRenderingDemo() {
  const [userType, setUserType] = useState('guest');
  const { isDark } = useTheme();

  const UserContent = () => {
    switch (userType) {
      case 'admin':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`p-6 rounded-lg ${
              isDark ? 'bg-red-900/20 border-red-500' : 'bg-red-50 border-red-200'
            } border-2`}
          >
            <h3 className="text-2xl font-bold text-red-500 mb-2">Admin Panel</h3>
            <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              You have full access to system settings and user management.
            </p>
          </motion.div>
        );
      case 'user':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`p-6 rounded-lg ${
              isDark ? 'bg-blue-900/20 border-blue-500' : 'bg-blue-50 border-blue-200'
            } border-2`}
          >
            <h3 className="text-2xl font-bold text-blue-500 mb-2">User Dashboard</h3>
            <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              Welcome! You can access your profile and saved data.
            </p>
          </motion.div>
        );
      default:
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`p-6 rounded-lg ${
              isDark ? 'bg-gray-900/20 border-gray-500' : 'bg-gray-50 border-gray-200'
            } border-2`}
          >
            <h3 className="text-2xl font-bold text-gray-500 mb-2">Guest View</h3>
            <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
              Please sign up or log in to access more features.
            </p>
          </motion.div>
        );
    }
  };

  return (
    <motion.div className="space-y-6">
      <div className="flex gap-2 flex-wrap">
        {['guest', 'user', 'admin'].map((type) => (
          <motion.button
            key={type}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setUserType(type)}
            className={`px-6 py-2 rounded-lg font-bold transition-all ${
              userType === type
                ? 'bg-blue-500 text-white'
                : isDark
                ? 'bg-slate-600 text-gray-300 hover:bg-slate-500'
                : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </motion.button>
        ))}
      </div>

      <UserContent />
    </motion.div>
  );
}

export default Demo;
