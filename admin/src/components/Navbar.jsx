import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = ({ setToken }) => {
  const { theme, setThemePreference } = useContext(ThemeContext);

  return (
    <nav className={`
      flex items-center py-4 px-6 justify-between shadow-sm theme-transition
      ${theme === 'dark' 
        ? 'bg-gray-800 text-white border-b border-gray-700' 
        : 'bg-white text-gray-900 border-b border-gray-200'}
    `}>
      <div className="flex items-center gap-2">
        <img 
          className={`w-[max(10%,80px)] ${theme === 'dark' ? 'filter brightness-90' : ''}`} 
          src={assets.logo} 
          alt="Logo" 
        />
        <h1 className={`text-xl font-semibold ${theme === 'dark' ? 'text-gray-100' : 'text-gray-800'}`}>
          Admin Panel
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <select
          value={theme}
          onChange={(e) => setThemePreference(e.target.value)}
          className={`
            px-3 py-2 rounded-md border transition-colors
            ${theme === 'dark'
              ? 'bg-gray-700 text-white border-gray-600 hover:bg-gray-600'
              : 'bg-white text-gray-900 border-gray-200 hover:bg-gray-50'}
            focus:ring-2 focus:ring-blue-500
          `}
        >
          <option value="light">☀️ Light</option>
          <option value="dark">🌙 Dark</option>
        </select>

        <button 
          onClick={() => setToken('')} 
          className={`
            px-5 py-2 rounded-md text-sm font-medium transition-colors
            ${theme === 'dark'
              ? 'bg-red-500 hover:bg-red-600 text-white'
              : 'bg-red-600 hover:bg-red-700 text-white'}
          `}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
