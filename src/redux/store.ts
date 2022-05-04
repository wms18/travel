/*
 * @Descripttion: 
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-04-20 11:11:31
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-05-04 18:27:33
 */
import {createStore} from 'redux';
import languageReducer from './language/languageReducer';
const store=createStore(languageReducer);
export type RootState = ReturnType<typeof store.getState>;
export default store;