import * as axios from 'axios';
import config from '../config';
import {Action} from "redux";
import {AutoCode} from "../models";

const actions = {
    FIND_CODE_REQUEST: 'FIND_CODE_REQUEST',
    FIND_CODE_SUCCESS: 'FIND_CODE_SUCCESS',
    FIND_CODE_ERROR: 'FIND_CODE_ERROR',
    CODE_NOT_FOUND: 'CODE_NOT_FOUND'
};

interface AutoCodesAction extends Action {
    autoCode: AutoCode;
}

const findAutoCode = (code, brand, language = 'es') =>  async (dispatch: Function) => {
    dispatch({ type: actions.FIND_CODE_REQUEST });
    try {
        const codeResponse = await axios.get<string[]>(`${config.apiUrl}/${brand}/${code}?language=${language}`);
        dispatch({ type: actions.FIND_CODE_SUCCESS, autoCode: codeResponse.data });
    } catch (error) {
        if (error.response.status === 404) {
            return dispatch({ type: actions.CODE_NOT_FOUND });
        }
        dispatch({ type: actions.FIND_CODE_ERROR });
    }
};

export { actions, findAutoCode, AutoCodesAction };