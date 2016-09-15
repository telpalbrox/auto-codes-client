import {Action} from "redux";

const actions = {
    CHANGE_LANGUAGE: 'CHANGE_LANGUAGE'
};

export { actions };

export interface SettingsAction extends Action {
    language: string;
}

export const changeLanguage = (language) => {
    return {
        type: actions.CHANGE_LANGUAGE,
        language
    };
};
