import { motion } from 'framer-motion'
import { HiExternalLink } from 'react-icons/hi'
import { FiGithub } from 'react-icons/fi'
import { Project } from '../types'
import { useLocalizedData } from '../hooks'

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { getLocalized, getLocalizedArray } = useLocalizedData()
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="project-card group"
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={getLocalized(project.title)}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-dark-accent rounded-full text-white hover:bg-dark-accent/80 transition-colors"
            >
              <HiExternalLink size={20} />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-dark-accent rounded-full text-white hover:bg-dark-accent/80 transition-colors"
            >
              <FiGithub size={20} />
            </a>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-dark-text mb-2 group-hover:text-dark-accent transition-colors">
          {getLocalized(project.title)}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
          {getLocalized(project.description)}
        </p>
        <div className="flex flex-wrap gap-2">
          {getLocalizedArray(project.tags).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs bg-dark-accent/20 text-dark-accent rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard