import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Project } from '../types'

interface WorkSectionProps {
  title: string
  projects: Project[]
  showDivider?: boolean
}

const WorkSection = ({ title, projects, showDivider = false }: WorkSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  // กำหนด default image
  const defaultImage = '/images/CSI00138.jpg'

  return (
    <>
      {showDivider && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="my-8"
        >
          {/* <hr className="border-gray-300 dark:border-gray-700 mb-6" /> */}
        </motion.div>
      )}

      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="mb-10"
      >
        <h3 className="text-lg font-bold text-gray-900 dark:text-slate-100 mb-6">
          {title}
        </h3>

        <div className="space-y-6 sm:space-y-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              className={`flex flex-col sm:flex-row ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} gap-4 sm:gap-8 group`}
            >
              <Link
                to={`/projects/${project.id}`}
                className="flex-1 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 group-hover:bg-gray-50 dark:group-hover:bg-slate-800/50 rounded-xl p-4 sm:p-6 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-full sm:w-48 h-48 sm:h-32 relative overflow-hidden rounded-lg">
                  <img
                    src={project.image || defaultImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="flex-1 text-left w-full">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-1 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-slate-300 text-sm leading-relaxed mb-2">
                    {project.shortDescription || project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300 text-xs rounded-full">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </motion.section>
    </>
  )
}

export default WorkSection