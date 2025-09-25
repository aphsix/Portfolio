import { useState } from 'react'
import { MdEmail } from 'react-icons/md'
import { Section } from '../ui'
import { personalInfo } from '../../data'
import { useLanguage } from '../../contexts'

const ContactSection = () => {
  const { t } = useLanguage()
  const [emailContent, setEmailContent] = useState('')

  const handleEmailContact = () => {
    const recipient = personalInfo.email
    const subject = 'Work Opportunity - Portfolio Contact'
    const body =
      emailContent ||
      'Hello, I am interested in discussing work opportunities with you.'

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
    window.open(mailtoUrl, '_blank')
  }

  return (
    <Section
      title={t('home.contact.email')}
      icon={<MdEmail />}
      delay={0.8}
    >
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
        {t('home.contact.description')}
      </p>
      <div className="space-y-3">
        <textarea
          value={emailContent}
          onChange={(e) => setEmailContent(e.target.value)}
          placeholder={t('home.contact.placeholder')}
          className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:border-teal-500 resize-none"
          rows={4}
        />
        <button
          onClick={handleEmailContact}
          className="w-full px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-md text-sm transition-colors"
        >
          {t('home.contact.button')}
        </button>
      </div>
    </Section>
  )
}

export default ContactSection