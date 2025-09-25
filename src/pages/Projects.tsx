import { motion } from 'framer-motion'
import ProjectSection from '../components/ProjectSection'
import { projects } from '../data/projects'
import { useLanguage } from '../contexts/LanguageContext'

const Projects = () => {
  const { t } = useLanguage()
  const workProjects = projects.filter(project => project.category === 'works')
  const collaborationProjects = projects.filter(project => project.category === 'collaborations')
  const oldProjects = projects.filter(project => project.category === 'old')

  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-slate-100 mb-3">
            {t('projects.title')}
          </h1>
          <p className="text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        {/* Works Sections */}
        <ProjectSection
          title={t('projects.main')}
          projects={workProjects}
        />

        <ProjectSection
          title={t('projects.collaborations')}
          projects={collaborationProjects}
          showDivider={true}
        />

        <ProjectSection
          title={t('projects.old')}
          projects={oldProjects}
          showDivider={true}
        />
      </div>
    </div>
  )
}

export default Projects