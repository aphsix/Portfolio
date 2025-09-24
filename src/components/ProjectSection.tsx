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
          <hr className="border-gray-300 dark:border-gray-700 mb-6" />
        </motion.div>
      )}

      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="mb-10"
      >
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-6">
          {title}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="w-full text-center"
            >
              <Link
                to={`/projects/${project.id}`}
                className="block cursor-pointer group"
              >
                <div className="relative overflow-hidden rounded-xl mb-4 pd-2 border-2 border-t-emerald-500">
                  <img
                    src={project.image || defaultImage}
                    alt={project.title}
                    width={600}
                    height={400}
                    style={{ aspectRatio: '600/400' }}
                    className="w-full max-w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105 "
                    loading="lazy"
                  />
                </div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2 group-hover:text-teal-500 transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {project.shortDescription || project.description}
                </p>
               
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  )
}

export default WorkSection