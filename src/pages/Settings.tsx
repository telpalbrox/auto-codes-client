import * as React from 'react';
import Toggle from 'material-ui/Toggle';
import { connect } from 'react-redux';
import {AppState} from "../models";
import {SettingsState} from "../reducers/settingsReducer";
import {changeLanguage} from "../actions/settings";

interface SettingsPageProps extends SettingsState {
    dispatch?: Function;
    language: string;
}

class SettingsPage extends React.Component<SettingsPageProps, any> {
    private english: any;

    static mapStateToProps(state: AppState) {
        const { settings } = state;

        return {
            language: settings.language
        };
    }

    render() {
        return (
            <div className="page-container">
                <div className="row center-xs">
                    <h3>Ajustes</h3>
                </div>
                <div className="row">
                    <Toggle ref={(node) => this.english = node} value={this.english} label="Descripción de códigos en inglés" toggled={this.props.language === 'en'} onToggle={() => this.onToogle()}/>
                </div>
            </div>
        );
    }

    onToogle() {
        if (this.props.language === 'en') {
            this.props.dispatch(changeLanguage('es'));
        } else {
            this.props.dispatch(changeLanguage('en'));
        }
    }
}

export default connect(SettingsPage.mapStateToProps)(SettingsPage);