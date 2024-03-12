import { configureStore } from "@reduxjs/toolkit";
import todoReducers from '../features/todo/todoSlice'

export const todoStore = configureStore(
    {
    reducer:todoReducers
})
