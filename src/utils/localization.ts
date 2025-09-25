import { LocalizedText } from '../types'

export const getLocalizedText = (
  text: LocalizedText | string,
  language: 'en' | 'th'
): string => {
  if (typeof text === 'string') {
    return text
  }

  return language === 'th' && text.th ? text.th : text.en
}

export const createLocalizedText = (en: string, th?: string): LocalizedText => ({
  en,
  ...(th && { th })
})

export const isLocalizedText = (value: unknown): value is LocalizedText => {
  return value && typeof value === 'object' && value !== null && 'en' in value && typeof (value as LocalizedText).en === 'string'
}