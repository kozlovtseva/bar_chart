import { Reducer } from 'redux';
import { DataActions, DataActionTypes } from './actions';

interface Item {
    age: string;
    amount: number;
}

export interface DataArray {
    [index: string]: Item[];
}

export interface DataState {
    data: DataArray;
}

const initialState: DataState = {
    data: {},
};

export const DataReducer: Reducer<DataState, DataActions> = (
    state = initialState,
    action,
) => {
    switch (action.type) {
        case DataActionTypes.GET_DATA: {
            return {
                ...state,
                data: action.data,
            };
        }
        default:
            return state;
    }
};
