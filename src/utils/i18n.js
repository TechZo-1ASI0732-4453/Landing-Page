// Utilitario i18n para Astro (sin React)

import en from '../../public/i18n/en.json';
import es from '../../public/i18n/es.json';
import zh from '../../public/i18n/zh.json';

const LANG_KEY = 'lang';
const DEFAULT_LANG = 'es';
const resources = { en, es,zh };

export function getCurrentLanguage() {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem(LANG_KEY) || DEFAULT_LANG;
  }
  return DEFAULT_LANG;
}

export function setLanguage(lang) {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(LANG_KEY, lang);
    window.location.reload(); // Recarga la página para aplicar el idioma
  }
}

export function getTranslations(lang) {
  return resources[lang] || resources[DEFAULT_LANG];
}

export function t(key, lang) {
  const translations = getTranslations(lang);
  // Permite acceder a claves anidadas: 'header.nav.nosotros'
  return key.split('.').reduce((obj, k) => (obj && obj[k] !== undefined ? obj[k] : key), translations);
}