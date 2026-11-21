import React, { createContext, useContext, useState, useEffect } from 'react';

export type LanguageMode = 'bilingual' | 'hi' | 'en';

interface LanguageContextType {
  language: LanguageMode;
  setLanguage: (lang: LanguageMode) => void;
  toggleLanguage: () => void;
  isHindi: boolean;
  isEnglish: boolean;
  isBilingual: boolean;
  pick: (hi: string, en: string, bi?: string) => string;
  pickSlash: (hi: string, en: string) => string;
  pickList: (hiList: string[], enList?: string[]) => string[];
}

const defaultPick = (hi: string, en: string, bi?: string) =>
  bi ?? (hi === en ? hi : `${hi} (${en})`);

const defaultPickSlash = (hi: string, en: string) =>
  hi === en ? hi : `${hi} / ${en}`;

const defaultPickList = (hiList: string[], enList?: string[]) =>
  hiList.map((hi, idx) => {
    const en = enList?.[idx];
    if (!en || en === hi) return hi;
    return `${hi} (${en})`;
  });

const LanguageContext = createContext<LanguageContextType>({
  language: 'bilingual',
  setLanguage: () => {},
  toggleLanguage: () => {},
  isHindi: false,
  isEnglish: false,
  isBilingual: true,
  pick: defaultPick,
  pickSlash: defaultPickSlash,
  pickList: defaultPickList,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageMode>(() => {
    try {
      const saved = localStorage.getItem('sarkaritalk_lang');
      if (saved === 'hi' || saved === 'en' || saved === 'bilingual') return saved;
    } catch (e) {}
    return 'bilingual';
  });

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language === 'en' ? 'en' : 'hi';
    }
  }, [language]);

  const setLanguage = (lang: LanguageMode) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('sarkaritalk_lang', lang);
    } catch (e) {}
  };

  const toggleLanguage = () => {
    if (language === 'bilingual') setLanguage('hi');
    else if (language === 'hi') setLanguage('en');
    else setLanguage('bilingual');
  };

  const pick = (hi: string, en: string, bi?: string): string => {
    if (language === 'hi') return hi;
    if (language === 'en') return en;
    if (bi !== undefined) return bi;
    if (!hi) return en;
    if (!en || hi === en) return hi;
    return `${hi} (${en})`;
  };

  const pickSlash = (hi: string, en: string): string => {
    if (language === 'hi') return hi;
    if (language === 'en') return en;
    if (!hi) return en;
    if (!en || hi === en) return hi;
    return `${hi} / ${en}`;
  };

  const pickList = (hiList: string[], enList?: string[]): string[] => {
    if (language === 'hi') return hiList;
    if (language === 'en') return enList && enList.length > 0 ? enList : hiList;
    return hiList.map((hi, idx) => {
      const en = enList?.[idx];
      if (!en || en === hi) return hi;
      return `${hi} (${en})`;
    });
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        isHindi: language === 'hi',
        isEnglish: language === 'en',
        isBilingual: language === 'bilingual',
        pick,
        pickSlash,
        pickList,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
