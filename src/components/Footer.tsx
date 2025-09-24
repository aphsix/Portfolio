import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-700 mt-16 bg-white dark:bg-gray-900">
      <div className="max-w-2xl mx-auto px-6 py-8">
        <div className="text-center space-y-2">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © 2025 aphsx. All Rights Reserved.
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-xs">
            Inspired by{" "}
            <a
              href="https://www.craftz.dog/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:underline transition-colors"
            >
              craftz.dog
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer