// import { createStore } from 'redux';

import { configureStore, createSlice } from "@reduxjs/toolkit";

// const reducerFunc = (state = { counter: 0 }, action) => {

//     if (action.type === "INC") {
//         return { counter: state.counter + 1 }
//     }
//     if (state.counter > 0 && action.type === "DEC") {
//         return { counter: state.counter - 1 }
//     }
//     if (action.type === "ADD10") {
//         return { counter: state.counter + action.payload }
//     }
//     if (state.counter > 0 && action.type === "MINUS10") {
//         return { counter: state.counter - action.payload }
//     }
//     return state;
// }
// const store = createStore(reducerFunc)

// export default store;

const counterSlice = createSlice({
    name: 'counter',
    initialState: { counter: 0},
    reducers: {
        increament(state, action){
            state.counter++;
        },
        decreament(state,action){
            if(state.counter > 0){
                state.counter--;
            }
        },
        add10(state,action){
            state.counter += action.payload;
        },
        minus10(state,action){
            if(state.counter >= 10){
                state.counter -= action.payload
            }
        }
    }
})

export const actions = counterSlice.actions

const store = configureStore({
    reducer: counterSlice.reducer
})

export default store;