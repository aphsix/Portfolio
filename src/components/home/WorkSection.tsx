import { MdOutlineWork } from 'react-icons/md'
import { HiArrowRight } from 'react-icons/hi'
import { Section, Button } from '../ui'
import { useLanguage } from '../../contexts'

const WorkSection = () => {
  const { t } = useLanguage()

  return (
    <Section
      title={t('home.work')}
      icon={<MdOutlineWork />}
      delay={0.2}
    >
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-sm">
        {t('home.work.description')}
      </p>
      <div className="text-center">
        <Button
          variant="primary"
          icon={<HiArrowRight size={14} />}
        >
          {t('home.portfolio')}
        </Button>
      </div>
    </Section>
  )
}

export default WorkSection