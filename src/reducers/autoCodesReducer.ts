import {Reducer} from "redux";
import {AutoCode} from "../models";
import {AutoCodesAction, actions} from "../actions/autoCodes";

export interface AutoCodesState {
    loading?: boolean;
    error?: boolean;
    autoCode?: AutoCode;
    notFound?: boolean;
}

const initialState: AutoCodesState = {
    loading: false,
    error: false,
    autoCode: null,
    notFound: false
};

export const autoCodesReducer: Reducer<AutoCodesState> = (state = initialState, action: AutoCodesAction) => {
    switch (action.type) {
        case actions.FIND_CODE_REQUEST:
            return Object.assign({}, state, { loading: true, notFound: false });
        case actions.FIND_CODE_SUCCESS:
            return Object.assign({}, state, { loading: false, error: false, autoCode: action.autoCode, notFound: false });
        case actions.FIND_CODE_ERROR:
            return Object.assign({}, state, { loading: false, error: true, notFound: false });
        case actions.CODE_NOT_FOUND:
            return Object.assign({}, state, { loading: false, error: false, notFound: true });
        default:
            return state;
    }
};
