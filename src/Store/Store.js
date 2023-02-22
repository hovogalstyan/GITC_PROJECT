import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';
import {RootReducer} from "./reducer/RootReducer";
import RootSaga from "./sagas/RootSaga";

const sagaMiddleware = createSagaMiddleware();
export const Store = createStore(RootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(RootSaga)