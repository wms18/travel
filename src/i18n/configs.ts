/*
 * @Descripttion: 
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-05-04 00:35:00
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-05-04 00:46:42
 */
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import translation_zh from "./zh.json";
import translation_en from "./en.json";
const resources = {
  en: {
    translation: translation_en
  },
  zh: {
    translation:translation_zh
  }
};
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "zh", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });
  export default i18n;