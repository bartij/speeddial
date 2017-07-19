import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import {createLogger} from 'redux-logger';
import { loadInitialState, saveState } from './loadInitialState';
import throttle from 'lodash/throttle';

const initialState = loadInitialState();

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(
        createLogger()
    )
);

store.subscribe(throttle(() => {
    saveState(store.getState())
}, 1000));

export default store;
