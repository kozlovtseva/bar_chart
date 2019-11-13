import { DataArray } from './reducer';
import DATA from './data.json';

export enum DataActionTypes {
    GET_DATA = 'GET_DATA',
}

export interface GetDataAction {
    type: DataActionTypes.GET_DATA;
    data: DataArray;
}

export type DataActions = GetDataAction;

export function GetDataAction() {
    return {
        type: DataActionTypes.GET_DATA,
        data: DATA,
    };
}
