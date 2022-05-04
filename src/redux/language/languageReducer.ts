/*
 * @Descripttion:
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-04-20 11:16:38
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-05-04 18:02:04
 */
import i18n from "../../i18n/configs";
import { CHANGE_LANGUAGE, ADD_LANGUAGE,LanguageActionTypes } from "./languageActions";
export interface LanguageState {
      language: "en" | "zh";
      languageList: { name: string; code: string }[];
}
const defaultState: LanguageState = {
      language: "zh",
      languageList: [
            { name: "English", code: "en" },
            { name: "中文", code: "zh" },
      ],
};
export default (state = defaultState, action:LanguageActionTypes) => {
      switch (action.type) {
            case CHANGE_LANGUAGE:
                  i18n.changeLanguage(action.payload);
                  return {
                        ...state,
                        language: action.payload,
                  };
            case ADD_LANGUAGE:
                  return {
                        ...state,
                        languageList: [...state.languageList, action.payload],
                  };
            default:
                  return state;
      }
};
