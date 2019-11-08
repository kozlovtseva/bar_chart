import { Reducer } from "redux";
import {
  DataActions,
  DataActionTypes
} from "./actions";


export interface DataArray {
    [index: number]: number;
}

export interface DataState {
  readonly data: DataArray[];
}

const initialState: DataState = {
    data: []
};

export const DataReducer: Reducer<DataState, DataActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case DataActionTypes.GET_DATA: {
      return {
        ...state,
        data: action.data
      };
    }
    default:
      return state;
  }
};