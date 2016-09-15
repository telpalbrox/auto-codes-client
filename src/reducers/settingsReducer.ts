import {Reducer} from "redux";
import {SettingsAction, actions} from "../actions/settings";

export interface SettingsState {
    language?: string;
}

const initialState: SettingsState = {
    language: localStorage.getItem('language') || 'es'
};

export const settingsReducer: Reducer<SettingsState> = (state: SettingsState = initialState, action: SettingsAction) => {
    switch (action.type) {
        case actions.CHANGE_LANGUAGE:
            localStorage.setItem('language', action.language);
            return Object.assign({}, state, { language: action.language });
        default:
            return state;
    }
};
