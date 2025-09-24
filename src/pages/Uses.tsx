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
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            {t('uses.title')}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-2xl mx-auto">
            {t('uses.description')}
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
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex itesms-center gap-2 mb-4">
                <span className="text-teal-500">#</span>
                {section.category}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: sectionIndex * 0.1 + itemIndex * 0.05,
                      duration: 0.4,
                    }}
                    className="bg-white dark:bg-gray-800 rounded-lg p-4 hover:shadow-lg dark:hover:bg-gray-750 transition-all duration-200 border border-gray-200 dark:border-gray-700 group"
                  >
                    {item.image && (
                      <div className="aspect-video rounded-md overflow-hidden mb-3 bg-gray-100 dark:bg-gray-700 flex items-center justify-center p-2">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-200"
                          onError={(e) => {
                            e.currentTarget.src = defaultImage;
                          }}
                        />
                      </div>
                    )}
                    <h3 className="text-gray-900 dark:text-gray-100 font-medium text-center text-sm">
                      {item.name}
                    </h3>
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
            💡{" "}
<strong className="text-gray-900 dark:text-gray-100">{t('uses.note.title')}:</strong>{" "}
            {t('uses.note.description')}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Uses;
