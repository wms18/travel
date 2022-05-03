/*
 * @Descripttion: 
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-04-20 11:16:38
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-05-04 00:34:15
 */
export interface LanguageState {
      language: 'en' | 'zh';
      languageList: { name: string, code: string }[];
}
const defaultState: LanguageState = {
      language: 'zh',
      languageList: [
            { name: 'English', code: 'en' },
            { name: '中文', code: 'zh' }
      ]
}
export default (state = defaultState, action) => {
      switch (action.type) {
            case 'CHANGE_LANGUAGE':
                  return {
                        ...state,
                        language: action.payload
                  }
            case 'ADD_LANGUAGE':
                  return {
                        ...state,
                        languageList: [...state.languageList, action.payload]
                  }
            default:
                  return state
      }
}