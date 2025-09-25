import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HiArrowLeft, HiExternalLink } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { useLanguage } from '../contexts/LanguageContext';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const { t } = useLanguage();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto px-6">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
          className="mb-8"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-teal-500 hover:text-teal-600 transition-all duration-200 text-sm group"
          >
            <motion.div
              whileHover={{ x: -2 }}
              transition={{ duration: 0.2 }}
            >
              <HiArrowLeft size={16} />
            </motion.div>
            {t('project.back')}
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.8,
            type: "spring",
            stiffness: 200,
            damping: 25
          }}
          className="mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            {project.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            {project.description}
          </p>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            type: "spring",
            stiffness: 180,
            damping: 25
          }}
          className="mb-10"
        >
          <motion.div
            className="aspect-video rounded-lg overflow-hidden bg-white dark:bg-gray-800 group cursor-pointer"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>
        </motion.div>

        {/* Project Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.7,
            type: "spring",
            stiffness: 200,
            damping: 25
          }}
          className="mb-10"
        >
          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                {t('project.technologies')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.4 + index * 0.05,
                      duration: 0.4,
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    className="px-3 py-1 text-sm bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-md cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          )}

          {/* Action Links */}
          <div className="flex flex-wrap gap-4">
            <motion.a
              href={project.link || "#"}
              target={project.link ? "_blank" : "_self"}
              rel={project.link ? "noopener noreferrer" : ""}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.5,
                type: "spring",
                stiffness: 200
              }}
              whileHover={project.link ? {
                scale: 1.05,
                y: -2,
                transition: { duration: 0.2, ease: "easeOut" }
              } : {}}
              whileTap={project.link ? { scale: 0.95 } : {}}
              className={`inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                project.link
                  ? "bg-teal-500 hover:bg-teal-600 text-white shadow-md hover:shadow-lg"
                  : "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
              }`}
              onClick={(e) => {
                if (!project.link) e.preventDefault();
              }}
            >
              <HiExternalLink size={16} />
              {project.link ? t('project.visit') : t('project.coming_soon')}
            </motion.a>

            <motion.a
              href={project.github || "#"}
              target={project.github ? "_blank" : "_self"}
              rel={project.github ? "noopener noreferrer" : ""}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.5,
                type: "spring",
                stiffness: 200
              }}
              whileHover={project.github ? {
                scale: 1.05,
                y: -2,
                transition: { duration: 0.2, ease: "easeOut" }
              } : {}}
              whileTap={project.github ? { scale: 0.95 } : {}}
              className={`inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 border ${
                project.github
                  ? "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 shadow-md hover:shadow-lg"
                  : "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed border-gray-400 dark:border-gray-600"
              }`}
              onClick={(e) => {
                if (!project.github) e.preventDefault();
              }}
            >
              <FiGithub size={16} />
              {project.github ? t('project.code') : t('project.private')}
            </motion.a>
          </div>

        </motion.div>

        {/* Project Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.7,
            duration: 0.8,
            type: "spring",
            stiffness: 180,
            damping: 25
          }}
          className="mb-16"
        >
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.8,
              duration: 0.5,
              type: "spring",
              stiffness: 200
            }}
            className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6"
          >
            {t('project.about')}
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.9,
              duration: 0.6,
              type: "spring",
              stiffness: 150
            }}
            className="prose prose-gray dark:prose-invert max-w-none"
          >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
              {project.descriptionLong || project.description}
            </p>
          </motion.div>
        </motion.div>

        {/* Additional Images Gallery */}
        {project.images && project.images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.0,
              duration: 0.8,
              type: "spring",
              stiffness: 160,
              damping: 25
            }}
            className="mb-16"
          >
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 1.1,
                duration: 0.5,
                type: "spring",
                stiffness: 200
              }}
              className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-8"
            >
              {t('project.gallery')}
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    delay: 1.2 + index * 0.15,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 200,
                    damping: 20
                  }}
                  whileHover={{
                    scale: 1.03,
                    y: -4,
                    transition: {
                      duration: 0.3,
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }
                  }}
                  className="aspect-video rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-shadow duration-400 cursor-pointer"
                >
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
