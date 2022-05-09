import { Middleware } from "redux";
export const actionLog: Middleware = (store) => (next) => (action) => {
    console.log('state 上一次的状态', store.getState());
    console.log("fire action", action);
    next(action);
    console.log('state 本次的状态', store.getState());
}