import { useState } from 'react'
import { Language } from '../interfaces/content.interface'

const useLanguage = (navigatorLanguage: string) => {
    if(navigatorLanguage.includes('es')) {
        navigatorLanguage = 'es'
    } else {
        navigatorLanguage = 'en'
    }

    const initialLanguage = localStorage.getItem('currentLanguage') || navigatorLanguage
    const [language, setStateLanguage] = useState<Language>(initialLanguage as Language)

    const setLanguage = (selectedLanguage: Language) => {
        localStorage.setItem('currentLanguage', selectedLanguage)
        setStateLanguage(selectedLanguage)
    }

    return {language, setLanguage}
}

export default useLanguage