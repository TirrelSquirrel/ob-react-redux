import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from '../reducers/todosReducer';
import { filterReducer } from '../reducers/filterReducer';

export const createAppStore = () => {
    let store = configureStore({
        reducer: {
            todosState: todosReducer,
            filterState: filterReducer
        }
    })

    return store;
}