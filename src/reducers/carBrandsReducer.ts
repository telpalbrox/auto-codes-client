import {Reducer} from "redux";
import {CarBrandsAction, actions} from "../actions/carBrands";

export interface CarBrandsState {
    loading?: boolean;
    error?: boolean;
    carBrands?: string[];
}

const initialState: CarBrandsState = {
    loading: false,
    error: false,
    carBrands: []
};

export const carBrandsReducer: Reducer<CarBrandsState> = (state = initialState, action: CarBrandsAction) => {
    switch (action.type) {
        case actions.CAR_BRANDS_REQUEST:
            return Object.assign({}, state, { loading: true });
        case actions.CAR_BRANDS_SUCCESS:
            return Object.assign({}, state, { loading: false, error: false, carBrands: action.carBrands });
        case actions.CAR_BRANDS_ERROR:
            return Object.assign({}, state, { loading: false, error: true });
        default:
            return state;
    }
};
