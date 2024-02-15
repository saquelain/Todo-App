
// const redux = require("redux");

// import * as redux from "redux";
// import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { noteReducer } from "./reducers/noteReducer";
import {todoReducer} from "./reducers/todoReducer";
import {notificationReducer} from './reducers/notificationReducer';
import {loggerMiddleware} from './middlewares/loggerMiddleware'

// const result = combineReducers({
//     todoReducer,
//     noteReducer
// })

export const store = configureStore({
    reducer:{
        todoReducer,
        noteReducer,
        notificationReducer
    },
    middleware:[...getDefaultMiddleware(),loggerMiddleware]
})

