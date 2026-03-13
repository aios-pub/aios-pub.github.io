import ui from './ui/zh.json';
import uiEn from './ui/en.json';

const languages = {
  zh: ui,
  en: uiEn,
};

export type Language = keyof typeof languages;

export function getLanguageFromURL(pathname: string): Language {
  const langCodeMatch = pathname.match(/^\/en\/|^\/en$/);
  return langCodeMatch ? 'en' : 'zh';
}

export function useTranslations(lang: Language) {
  return function t(key: string): string {
    const keys = key.split('.');
    let value: unknown = languages[lang];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }

    return typeof value === 'string' ? value : key;
  };
}

export function getLocalizedPath(path: string, lang: Language): string {
  const cleanPath = path.replace(/^\//, '').replace(/\/$/, '');

  if (lang === 'zh') {
    return cleanPath ? `/${cleanPath}` : '/';
  }

  return cleanPath ? `/en/${cleanPath}` : '/en';
}

export function getAlternateLocalePath(currentPath: string, targetLang: Language): string {
  const isEnglish = currentPath.startsWith('/en');
  const pathWithoutLang = isEnglish ? currentPath.replace(/^\/en/, '') || '/' : currentPath;

  if (targetLang === 'en') {
    return pathWithoutLang === '/' ? '/en' : `/en${pathWithoutLang}`;
  }

  return pathWithoutLang || '/';
}
