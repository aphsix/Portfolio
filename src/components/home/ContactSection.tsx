import { useState } from 'react'
import { MdEmail } from 'react-icons/md'
import { Section } from '../ui'
import { useLanguage } from '../../contexts'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

const ContactSection = () => {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus('')

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setStatus('Email sent successfully!')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('Failed to send email. Please try again.')
      }
    } catch {
      setStatus('Error sending email. Please try again.')
    } finally {
      setIsLoading(false)
    }
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
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Your Name"
          required
          className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:border-teal-500"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Your Email"
          required
          className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:border-teal-500"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder={t('home.contact.placeholder')}
          required
          className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:border-teal-500 resize-none"
          rows={4}
        />
        {status && (
          <p className={`text-sm ${status.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
            {status}
          </p>
        )}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-4 py-2 bg-teal-500 hover:bg-teal-600 disabled:bg-gray-400 text-white rounded-md text-sm transition-colors"
        >
          {isLoading ? 'Sending...' : t('home.contact.button')}
        </button>
      </form>
    </Section>
  )
}

export default ContactSection