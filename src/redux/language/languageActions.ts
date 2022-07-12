/*
 * @Descripttion: 
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-05-04 17:31:04
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-06-08 16:38:11
 */
export const CHANGE_LANGUAGE= 'CHANGE_LANGUAGE'
export const ADD_LANGUAGE='ADD_LANGUAGE'
interface ChangeLanguageAction {
    type:typeof CHANGE_LANGUAGE,
    payload:'zh' | 'en'
}
interface AddLanguageAction {
    type:typeof ADD_LANGUAGE,
    payload:{name:string,code:string}
}
export type LanguageActionTypes=ChangeLanguageAction | AddLanguageAction
export  const changeLanguageActionCreator=(language:'zh' | 'en'):ChangeLanguageAction=>({
    type:CHANGE_LANGUAGE,
    payload:language
})
export  const addLanguageActionCreator=(name:string,code:string):AddLanguageAction=>({
    type:ADD_LANGUAGE,
    payload:{name,code}
})