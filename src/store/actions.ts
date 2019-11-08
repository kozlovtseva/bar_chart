import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from "axios";

import { DataArray, DataState } from "./reducer";


export enum DataActionTypes {
    GET_DATA = "GET_DATA"
}

export interface GetDataAction {
  type: DataActionTypes.GET_DATA;
  data: DataArray[];
}

export type DataActions = GetDataAction;

export const GetDataAction: ActionCreator<
  ThunkAction<Promise<any>, DataState, null, GetDataAction>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get("#");
      dispatch({
        data: response.data.results,
        type: DataActionTypes.GET_DATA
      });
    } catch (err) {
      console.error(err);
    }
  };
};
