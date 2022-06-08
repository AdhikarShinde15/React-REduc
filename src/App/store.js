// import { configureStore } from "@reduxjs/toolkit";

import authenReducer from "../reducers/auth"
import countReducer from "../reducers/counter"
import { combineReducers, createStore } from "redux"


const store = createStore(combineReducers({
    authen: authenReducer,
    counter: countReducer
}))

export default store

