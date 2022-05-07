import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from './sagas';
import users_reducer from './users_reducer';

let sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        users_reducer: users_reducer,
    },
    middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;

// window.store = store;