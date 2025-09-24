import { motion } from 'framer-motion'

const Posts = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Posts
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">
            Coming soon... This section will feature blog posts and articles
            about web development, design, and technology.
          </p>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-md">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-500"></div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Posts