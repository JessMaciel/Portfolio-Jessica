import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react'

import { translations } from '../translations/translations'


type Language = 'pt' | 'en' | 'fr'


type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: typeof translations.pt
}


const LanguageContext = createContext<
  LanguageContextType | undefined
>(undefined)


type LanguageProviderProps = {
  children: ReactNode
}


export function LanguageProvider({
  children,
}: LanguageProviderProps) {

  const [language, setLanguage] = useState<Language>('pt')

  const t = translations[language]

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}


export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error(
      'useLanguage must be used inside LanguageProvider'
    )
  }

  return context
}