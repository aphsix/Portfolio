import { motion } from "framer-motion";
import { usesData } from "../data/usesData";
import { useLanguage } from '../contexts/LanguageContext';



const Uses = () => {
  const { t } = useLanguage()
  const defaultImage = '/images/CSI00139.jpg'
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
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t('uses.title')}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Here's what tech I'm currently using for development, design, and daily productivity.
            This collection represents tools and hardware that power my creative workflow.
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
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-teal-500 to-cyan-500 rounded-full" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {section.category}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: sectionIndex * 0.1 + itemIndex * 0.05,
                      duration: 0.4,
                    }}
                    className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex items-center p-4 gap-4">
                      {/* Image Section */}
                      <div className="flex-shrink-0 w-16 h-16 relative overflow-hidden rounded-lg">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            onError={(e) => {
                              e.currentTarget.src = defaultImage;
                            }}
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-teal-500/20 to-cyan-500/20 dark:from-teal-600/30 dark:to-cyan-600/30 flex items-center justify-center rounded-lg">
                            <span className="text-xl font-bold text-teal-600 dark:text-teal-400">
                              {item.name.charAt(0)}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Text Section */}
                      <div className="flex-1">
                        <h3 className="text-gray-900 dark:text-gray-100 font-semibold text-lg group-hover:text-teal-500 transition-colors">
                          {item.name}
                        </h3>
                      </div>

                      {/* Hover Arrow */}
                      <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>

                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-teal-400/20 rounded-xl transition-all duration-300" />
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
          className="mt-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 dark:from-teal-600/20 dark:to-cyan-600/20 rounded-2xl" />
          <div className="relative p-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Always Evolving</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  This toolkit constantly evolves as I discover new technologies and workflows.
                  I regularly evaluate new tools to maintain optimal productivity and stay current
                  with industry best practices.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Uses;
