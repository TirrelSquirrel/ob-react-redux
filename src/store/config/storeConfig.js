import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { todosReducer } from '../reducers/todosReducer';
import { filterReducer } from '../reducers/filterReducer';
import { userReducer } from '../reducers/userReducer';
import createSagaMiddleware from '@redux-saga/core';
import { watcherSaga } from '../sagas/sagas';

export const createAppStore = () => {
    let store = configureStore({
        reducer: {
            todosState: todosReducer,
            filterState: filterReducer,            
        }
    })

    return store;
}

export const createAppAsyncStore = () => {
    let sagaMidleware = createSagaMiddleware();
    let store = configureStore({
      reducer: {
        todosState: todosReducer,
        filterState: filterReducer,
        // Async example (login user)
        userState: userReducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMidleware),
    });

    // We init the watcher saga
    sagaMidleware.run(watcherSaga);
    return store;
}