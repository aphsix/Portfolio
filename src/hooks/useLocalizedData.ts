import { useLanguage } from '../contexts/LanguageContext'
import { LocalizedText } from '../types'
import { getLocalizedText } from '../utils/localization'

export const useLocalizedData = () => {
  const { language } = useLanguage()

  const getLocalized = (text: LocalizedText | string): string => {
    return getLocalizedText(text, language)
  }

  const getLocalizedArray = (items: (LocalizedText | string)[]): string[] => {
    return items.map(item => getLocalizedText(item, language))
  }

  return {
    getLocalized,
    getLocalizedArray,
    language
  }
}