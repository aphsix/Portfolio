import { motion } from 'framer-motion'
import { usesData } from '../data/usesData'

const Uses = () => {

  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            Uses
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-2xl mx-auto">
            Here's what tech I'm currently using for coding, videos, and music.
            Most of these have been accumulated over the past few years, with
            a few recent additions.
          </p>
        </motion.div>

        {/* Uses Sections */}
        <div className="space-y-8">
          {usesData.map((section, sectionIndex) => (
            <motion.section
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIndex * 0.1, duration: 0.6 }}
              className="mb-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                  <span className="text-teal-500">#</span>
                  {section.category}
                </h2>
                {section.image && (
                  <div className="w-16 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <img
                      src={section.image}
                      alt={section.category}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: sectionIndex * 0.1 + itemIndex * 0.05,
                      duration: 0.4
                    }}
                    className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm"
                  >
                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            💡 <strong className="text-gray-900 dark:text-gray-100">Note:</strong> This page is
            inspired by Wes Bos's uses page. It's a great way to share what
            tools and software you're using with others in the community.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Uses