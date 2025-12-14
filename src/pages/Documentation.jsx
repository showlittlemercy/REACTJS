import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaCode } from 'react-icons/fa';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const DocumentationContent = () => {
  const [expanded, setExpanded] = useState(0);
  const { isDark } = useTheme();

  const topics = [
    {
      id: 1,
      title: 'What is React?',
      description: 'Learn the fundamentals of React',
      content: `React is a JavaScript library for building user interfaces with reusable components. 
      It uses a virtual DOM to efficiently update the UI and provides a declarative way to describe 
      how the UI should look. React makes it easier to build interactive and dynamic web applications.`,
      code: `import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>This is a simple React component</p>
    </div>
  );
}

export default App;`,
    },
    {
      id: 2,
      title: 'JSX Syntax',
      description: 'Understanding JSX and how it works',
      content: `JSX is a syntax extension to JavaScript. It looks similar to HTML and makes it easier 
      to write React components. JSX gets compiled to regular JavaScript function calls that return 
      JavaScript objects. You can use JavaScript expressions inside JSX by wrapping them in curly braces.`,
      code: `// JSX Example
function Greeting() {
  const name = 'Priyanshu';
  const element = <h1>Hello, {name}!</h1>;
  
  return element;
}

// JSX with attributes
const image = <img src="avatar.png" alt="Avatar" className="profile-pic" />;

// JSX with children
const card = (
  <div className="card">
    <h2>Card Title</h2>
    <p>Card content goes here</p>
  </div>
);`,
    },
    {
      id: 3,
      title: 'Components',
      description: 'Building reusable components',
      content: `Components are the building blocks of React applications. There are two types: 
      Functional Components (JavaScript functions) and Class Components (ES6 classes). 
      Functional components are the modern way and are easier to work with. Components receive props 
      to customize their behavior and can return JSX to render on the screen.`,
      code: `// Functional Component
function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

// Component with multiple props
function Card({ title, description, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

// Using the components
<Button label="Click me" onClick={() => alert('Clicked!')} />
<Card 
  title="React" 
  description="Learn React easily"
  image="react.png"
/>`,
    },
    {
      id: 4,
      title: 'Props',
      description: 'Passing data to components',
      content: `Props (properties) are how you pass data from parent components to child components. 
      Props are read-only and flow in one direction (unidirectional data flow). Each component can 
      receive multiple props and use them to customize the output. Props help make components reusable.`,
      code: `// Parent component
function App() {
  return (
    <>
      <UserCard name="Alice" age={25} city="New York" />
      <UserCard name="Bob" age={30} city="London" />
    </>
  );
}

// Child component
function UserCard({ name, age, city }) {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
}

// Default props
UserCard.defaultProps = {
  age: 18,
  city: 'Unknown'
};`,
    },
    {
      id: 5,
      title: 'State & Hooks',
      description: 'Managing component state with hooks',
      content: `Hooks are functions that let you use state and other React features in functional components. 
      useState is the most common hook for managing component state. When state changes, the component 
      re-renders. Hooks must be called at the top level of a component, not inside loops or conditions.`,
      code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <p>Hello, {name}!</p>
    </div>
  );
}`,
    },
    {
      id: 6,
      title: 'useEffect Hook',
      description: 'Side effects and lifecycle in functional components',
      content: `useEffect allows you to perform side effects in functional components. It runs after 
      render and can run on every render, once after mount, or when dependencies change. You can 
      also return a cleanup function to clean up resources. useEffect replaces class component 
      lifecycle methods like componentDidMount and componentDidUpdate.`,
      code: `import { useState, useEffect } from 'react';

function UserProfile() {
  const [user, setUser] = useState(null);

  // Fetch user data when component mounts
  useEffect(() => {
    fetch('/api/user')
      .then(res => res.json())
      .then(data => setUser(data));
  }, []); // Empty dependency array = runs once

  // Cleanup effect
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Tick');
    }, 1000);

    return () => clearInterval(timer); // Cleanup
  }, []);

  if (!user) return <p>Loading...</p>;
  return <div><h1>{user.name}</h1></div>;
}`,
    },
    {
      id: 7,
      title: 'Event Handling',
      description: 'Handling user interactions',
      content: `React events are similar to DOM events but with some differences. Event handlers are 
      written in camelCase (onClick, onChange, onSubmit). Event handlers receive a synthetic event 
      object which is a cross-browser wrapper around the browser's native event.`,
      code: `function Form() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email"
        value={email}
        onChange={handleChange}
        placeholder="Enter email"
      />
      <button type="submit">Submit</button>
      <button type="button" onClick={handleClick}>
        Click me
      </button>
    </form>
  );
}`,
    },
    {
      id: 8,
      title: 'Conditional Rendering',
      description: 'Rendering content conditionally',
      content: `Conditional rendering allows you to render different content based on conditions. 
      You can use if statements, ternary operators, or logical AND operators. This helps create 
      dynamic UIs that respond to different states.`,
      code: `function Dashboard({ isLoggedIn, userRole }) {
  // Using if statement
  if (!isLoggedIn) {
    return <LoginPage />;
  }

  // Using ternary operator
  return (
    <div>
      {userRole === 'admin' ? (
        <AdminPanel />
      ) : (
        <UserPanel />
      )}

      {/* Using logical AND */}
      {userRole === 'admin' && <AdminSettings />}

      {/* Using if-else pattern */}
      {(() => {
        if (userRole === 'admin') return <AdminPanel />;
        if (userRole === 'user') return <UserPanel />;
        return <GuestPanel />;
      })()}
    </div>
  );
}`,
    },
    {
      id: 9,
      title: 'Lists & Keys',
      description: 'Rendering lists efficiently',
      content: `When rendering lists in React, you should use the map() function. Each item in a list 
      should have a unique key prop. Keys help React identify which items have changed, been added, 
      or removed. Use stable identifiers as keys, not array indices for dynamic lists.`,
      code: `function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build projects' },
    { id: 3, text: 'Master hooks' }
  ]);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

// Wrong way - don't use index as key
{items.map((item, index) => (
  <li key={index}>{item}</li> // ❌ Bad for dynamic lists
))}

// Correct way - use unique ID
{items.map((item) => (
  <li key={item.id}>{item.text}</li> // ✓ Good
))}`,
    },
    {
      id: 10,
      title: 'Forms in React',
      description: 'Building controlled and uncontrolled forms',
      content: `Forms in React can be controlled or uncontrolled. Controlled components use state to 
      manage form values, while uncontrolled components use refs. Controlled components are generally 
      preferred as they give you more control and make it easier to validate input.`,
      code: `import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subscribe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    setFormData({ name: '', email: '', message: '', subscribe: false });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your email"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your message"
      />
      <label>
        <input
          type="checkbox"
          name="subscribe"
          checked={formData.subscribe}
          onChange={handleChange}
        />
        Subscribe to newsletter
      </label>
      <button type="submit">Send</button>
    </form>
  );
}`,
    },
    {
      id: 11,
      title: 'Context API',
      description: 'Global state management without prop drilling',
      content: `Context API allows you to pass data through the component tree without passing props 
      at every level. It's useful for global data like themes, user authentication, and language preferences. 
      Use createContext to create a context, and useContext hook to access it.`,
      code: `import { createContext, useContext, useState } from 'react';

// Create context
const ThemeContext = createContext();

// Provider component
export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook to use context
export function useTheme() {
  return useContext(ThemeContext);
}

// Using context in a component
function ThemeToggle() {
  const { isDark, setIsDark } = useTheme();

  return (
    <button onClick={() => setIsDark(!isDark)}>
      Current theme: {isDark ? 'Dark' : 'Light'}
    </button>
  );
}`,
    },
    {
      id: 12,
      title: 'useReducer Hook',
      description: 'Managing complex state with reducers',
      content: `useReducer is a hook for managing complex state logic. It's similar to Redux and takes 
      a reducer function and initial state. The reducer function determines how the state changes 
      based on actions. Use it when you have multiple related state updates.`,
      code: `import { useReducer } from 'react';

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

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}`,
    },
    {
      id: 13,
      title: 'Custom Hooks',
      description: 'Creating reusable hook logic',
      content: `Custom hooks are JavaScript functions that use React hooks internally. They allow you 
      to extract component logic into reusable functions. Custom hook names must start with 'use'. 
      They help avoid code duplication and make components cleaner.`,
      code: `// Custom hook for form handling
function useForm(initialValues, onSubmit) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  const reset = () => setValues(initialValues);

  return { values, handleChange, handleSubmit, reset };
}

// Using the custom hook
function LoginForm() {
  const { values, handleChange, handleSubmit } = useForm(
    { email: '', password: '' },
    (data) => console.log('Login:', data)
  );

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" value={values.email} onChange={handleChange} />
      <input name="password" value={values.password} onChange={handleChange} />
      <button type="submit">Login</button>
    </form>
  );
}`,
    },
    {
      id: 14,
      title: 'Performance Optimization',
      description: 'Optimizing React application performance',
      content: `React provides several ways to optimize performance: React.memo prevents unnecessary 
      re-renders, useMemo caches expensive calculations, useCallback memoizes functions, and code 
      splitting with dynamic imports. Always profile your app to find actual bottlenecks.`,
      code: `import { memo, useMemo, useCallback } from 'react';

// React.memo - prevent re-renders
const UserCard = memo(({ user }) => {
  return <div>{user.name}</div>;
});

// useMemo - cache calculations
function ExpensiveComponent({ items }) {
  const sortedItems = useMemo(() => {
    console.log('Sorting...');
    return items.sort((a, b) => a - b);
  }, [items]);

  return <div>{sortedItems.join(', ')}</div>;
}

// useCallback - memoize functions
function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);

  return <Child onClick={handleClick} />;
}`,
    },
    {
      id: 15,
      title: 'Component Composition',
      description: 'Composing components for better architecture',
      content: `Component composition is about combining smaller components to build larger ones. 
      There are different patterns: render props, higher-order components (HOC), and component composition. 
      Composition is more flexible than inheritance and follows React's design philosophy.`,
      code: `// Basic composition
function Card({ children }) {
  return <div className="card">{children}</div>;
}

function Profile() {
  return (
    <Card>
      <img src="avatar.png" alt="Avatar" />
      <h2>John Doe</h2>
      <p>Developer</p>
    </Card>
  );
}

// Higher-Order Component (HOC)
function withLoading(Component) {
  return function({ isLoading, ...props }) {
    if (isLoading) return <div>Loading...</div>;
    return <Component {...props} />;
  };
}

const UserList = withLoading(({ users }) => (
  <ul>
    {users.map(user => <li key={user.id}>{user.name}</li>)}
  </ul>
));`,
    },
    {
      id: 16,
      title: 'React Router',
      description: 'Client-side routing with React Router',
      content: `React Router allows you to build single-page applications with navigation without the 
      page reloading. It provides components like BrowserRouter, Routes, Route, Link, and useNavigate. 
      Route parameters can be accessed using useParams hook.`,
      code: `import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/user/1">User</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

// Accessing URL parameters
import { useParams } from 'react-router-dom';

function User() {
  const { id } = useParams();
  return <div>User ID: {id}</div>;
}`,
    },
    {
      id: 17,
      title: 'API Integration',
      description: 'Fetching data from APIs in React',
      content: `To fetch data from APIs in React, use useEffect with useState. Always include error 
      handling and loading states. You can use the fetch API or libraries like axios. Clean up 
      requests in the useEffect cleanup function to avoid memory leaks.`,
      code: `import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.example.com/users');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`,
    },
    {
      id: 18,
      title: 'Error Boundaries',
      description: 'Handling errors gracefully in React',
      content: `Error boundaries are React components that catch JavaScript errors anywhere in the 
      child component tree. They log those errors and display a fallback UI instead of crashing 
      the entire app. Use them to handle errors in specific parts of your app.`,
      code: `import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong</h2>
          <p>{this.state.error?.message}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

// Usage
<ErrorBoundary>
  <YourComponent />
</ErrorBoundary>`,
    },
    {
      id: 19,
      title: 'Testing React Components',
      description: 'Unit and integration testing with React Testing Library',
      content: `React Testing Library is the recommended way to test React components. It focuses on 
      testing components the way users interact with them. Use jest as the test runner and write 
      tests that verify behavior, not implementation details.`,
      code: `import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  test('renders button with correct text', () => {
    render(<Button label="Click me" />);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} label="Click" />);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('button is disabled when disabled prop is true', () => {
    render(<Button disabled label="Disabled" />);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});`,
    },
    {
      id: 20,
      title: 'Building for Production',
      description: 'Deploying React applications to production',
      content: `Before deploying, build your React app using npm run build. This creates an optimized 
      production build with minified JavaScript and CSS. Test the build locally, then deploy to 
      platforms like Vercel, Netlify, or GitHub Pages. Always follow best practices for security 
      and performance.`,
      code: `// Building the application
npm run build

// Serve the build locally to test
npm install -g serve
serve -s build

// Deploy to different platforms:

// Vercel (recommended for Next.js)
npm i -g vercel
vercel

// Netlify
npm install -g netlify-cli
netlify deploy --prod --dir=build

// GitHub Pages
npm install gh-pages --save-dev

// Add to package.json:
"homepage": "https://myusername.github.io/my-app",
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

npm run deploy`,
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
            Complete React Documentation
          </h1>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Master all the concepts and features of React.js
          </p>
        </motion.div>

        <div className="space-y-4">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div
                className={`border-l-4 border-blue-500 p-6 rounded-lg cursor-pointer transition-all hover:shadow-lg ${
                  isDark
                    ? 'bg-slate-800 hover:bg-slate-700'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
                onClick={() => setExpanded(expanded === topic.id ? 0 : topic.id)}
              >
                <div className="flex justify-between items-center">
                  <div className="flex-1">
                    <h2 className={`text-2xl font-bold mb-2 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {topic.title}
                    </h2>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {topic.description}
                    </p>
                  </div>
                  <motion.div
                    animate={{ rotate: expanded === topic.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-4"
                  >
                    <FaChevronDown className="text-blue-500 text-xl" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {expanded === topic.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 pt-6 border-t border-blue-500 border-opacity-30"
                    >
                      <p className={`mb-6 text-base leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {topic.content}
                      </p>

                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-3">
                          <FaCode className="text-blue-500" />
                          <span className={`font-semibold ${
                            isDark ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            Code Example
                          </span>
                        </div>
                        <div className="overflow-auto rounded-lg">
                          <SyntaxHighlighter
                            language="javascript"
                            style={isDark ? vscDarkPlus : {
                              'pre[class*="language-"]': {
                                background: '#f3f4f6',
                                color: '#374151',
                              },
                            }}
                            customStyle={{
                              margin: 0,
                              padding: '1rem',
                              borderRadius: '0.5rem',
                            }}
                          >
                            {topic.code}
                          </SyntaxHighlighter>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentationContent;
