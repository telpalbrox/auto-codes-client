import {AutoCodesState} from "./reducers/autoCodesReducer";
import {RouterState} from "react-router";
import {SettingsState} from "./reducers/settingsReducer";

export interface AutoCode {
    possiblesCauses?: string;
    whenCodeDetected?: string;
    possibleSymptoms?: string;
    description?: string;
}

export interface AppState {
    autoCodes: AutoCodesState;
    routing: RouterState,
    settings: SettingsState
}
