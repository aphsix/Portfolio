import { motion } from 'framer-motion'
import WorkSection from '../components/WorkSection'
import { projects } from '../data/projects'
import { useLanguage } from '../contexts/LanguageContext'

const Works = () => {
  const { t } = useLanguage()
  const workProjects = projects.filter(project => project.category === 'works')
  const collaborationProjects = projects.filter(project => project.category === 'collaborations')
  const oldProjects = projects.filter(project => project.category === 'old')

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
            {t('works.title')}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('works.subtitle')}
          </p>
        </motion.div>

        {/* Works Sections */}
        <WorkSection
          title={t('works.main')}
          projects={workProjects}
        />

        <WorkSection
          title={t('works.collaborations')}
          projects={collaborationProjects}
          showDivider={true}
        />

        <WorkSection
          title={t('works.old')}
          projects={oldProjects}
          showDivider={true}
        />
      </div>
    </div>
  )
}

export default Works