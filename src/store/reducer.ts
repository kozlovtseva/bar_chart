import { Reducer } from "redux";
import {
  DataActions,
  DataActionTypes
} from "./actions";


export interface DataArray {
    "day":{
        "up to 20": number,
        "20 - 30": number,
        "30 - 40": number,
        "40 - 50": number,
        "50 - 60": number,
        "over 60": number
    },
    "month":{
        "up to 20": number,
        "20 - 30": number,
        "30 - 40": number,
        "40 - 50": number,
        "50 - 60": number,
        "over 60": number
    },
    "year":{
        "up to 20": number,
        "20 - 30": number,
        "30 - 40": number,
        "40 - 50": number,
        "50 - 60": number,
        "over 60": number
    }
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