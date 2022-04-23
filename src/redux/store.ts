/*
 * @Descripttion: 
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-04-20 11:11:31
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-04-23 23:41:12
 */
import {createStore} from 'redux';
import languageReducer from './languageReducer';
const store=createStore(languageReducer);
export default store;