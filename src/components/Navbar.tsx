import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
import { FiGithub, FiMoon, FiSun } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()
  const location = useLocation()

  const navItems = [
    { name: 'Works', path: '/works' },
    // { name: 'Posts', path: '/posts' },
    { name: 'Uses', path: '/uses' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80  ">
      <div className="max-w-2xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-xl font-bold text-gray-900 dark:text-gray-100 hover:text-teal-500 transition-colors"
          >
            <span className="bg-gradient-to-r from-teal-500 to-cyan-400 bg-clip-text text-transparent">
              aphsx
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-teal-500'
                    : 'text-gray-700 dark:text-gray-300 hover:text-teal-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-teal-500 transition-colors duration-200"
            >
              <FiGithub size={16} />
              <span className="text-sm">GitHub</span>
            </a>
            <button
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300 hover:text-teal-500 transition-colors duration-200 p-2"
            >
              {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 dark:text-gray-300 hover:text-teal-500 transition-colors"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden backdrop-blur-md bg-white/90 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-700"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-teal-500'
                      : 'text-gray-700 dark:text-gray-300 hover:text-teal-500'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-teal-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                <FiGithub size={20} />
                <span className="text-sm font-medium">GitHub</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar