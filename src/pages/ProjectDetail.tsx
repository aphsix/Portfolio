import { useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowLeft, HiExternalLink } from 'react-icons/hi'
import { FiGithub } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

const ProjectDetail = () => {
  const { projectId } = useParams()
  const project = projects.find(p => p.id === projectId)

  if (!project) {
    return <Navigate to="/works" replace />
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-2xl mx-auto px-6">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <Link
            to="/works"
            className="inline-flex items-center gap-2 text-dark-accent hover:text-dark-accent/80 transition-colors text-sm"
          >
            <HiArrowLeft size={16} />
            Back to Works
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">
            {project.title}
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            {project.description}
          </p>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8"
        >
          <div className="aspect-video rounded-lg overflow-hidden bg-dark-card">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Project Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-8"
        >
          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-dark-text mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-dark-accent/20 text-dark-accent rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Links */}
          <div className="flex gap-4">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-dark-accent hover:bg-dark-accent/90 text-white px-4 py-2 rounded-md text-sm transition-colors"
              >
                <HiExternalLink size={16} />
                Visit Project
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-dark-card hover:bg-dark-card/80 text-dark-text border border-gray-700 px-4 py-2 rounded-md text-sm transition-colors"
              >
                <FiGithub size={16} />
                View Code
              </a>
            )}
          </div>
        </motion.div>

        {/* Project Details (Placeholder) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-lg font-semibold text-dark-text mb-4">About this project</h3>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed">
              {project.description}
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              This project demonstrates modern web development practices and showcases
              the implementation of various technologies to create a robust and scalable solution.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              The development process involved careful planning, iterative design, and
              comprehensive testing to ensure optimal user experience and performance.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectDetail