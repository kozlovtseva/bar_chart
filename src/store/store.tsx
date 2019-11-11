import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { DataReducer, DataState } from './reducer';

export interface AppState {
    dataState: DataState;
}

const rootReducer = combineReducers<AppState>({
    dataState: DataReducer,
});

export default function configureStore(): Store<AppState, any> {
    const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
    return store;
}
