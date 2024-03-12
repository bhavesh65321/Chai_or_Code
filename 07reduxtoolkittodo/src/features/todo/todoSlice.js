import { createSlice, nanoid} from "@reduxjs/toolkit";


const initialState = {
    todos:[{
        id:1,
        text:"Hello Bhavesh"

    }]
}

//above code is the initial stage of of the store

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:
    {
        addTodo:(state,action)=>{
            const todo = {
                id : nanoid,
                text : action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action) =>
        {
            state.todos = state.todos.filter((todo)=>todo.id!==action.payload)
        },

        updateTodo:(state,action) => {
            state.todos = state.todos.map((todo)=>todo.id===action.payload ? action.payload : todo.text)
        }

    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer



//through create slice we are adding name, initial stage and reducers (props and method).
//reducers contains state and action as arguments which is always contain current state of todos and actions of todos