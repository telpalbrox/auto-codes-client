import * as axios from 'axios';
import config from '../config';
import {Action} from "redux";

const actions = {
    CAR_BRANDS_REQUEST: 'CAR_BRANDS_REQUEST',
    CAR_BRANDS_SUCCESS: 'CAR_BRANDS_SUCCESS',
    CAR_BRANDS_ERROR: 'CAR_BRANDS_ERROR'
};

interface CarBrandsAction extends Action {
    carBrands?: string[];
}

const getCarBrands = () =>  async (dispatch: Function) => {
    dispatch({ type: actions.CAR_BRANDS_REQUEST });
    try {
        const carBrandsResponse = await axios.get<string[]>(config.apiUrl);
        dispatch({ tyep: actions.CAR_BRANDS_SUCCESS, carBrands: carBrandsResponse.data });
    } catch (e) {
        dispatch({ tyep: actions.CAR_BRANDS_ERROR });
    }
};

export { actions, getCarBrands, CarBrandsAction };
