import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import './App.css';
import getMuiTheme, { } from "material-ui/styles/getMuiTheme";
import { Link } from 'react-router';
import {MuiTheme} from "material-ui/styles";
import IconButton from "material-ui/IconButton";
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

interface AppProps {
    dispatch?: Function;
}

class App extends React.Component<AppProps, any> {
    private muiTheme: MuiTheme;

    constructor() {
        super();
        this.muiTheme = getMuiTheme({
            palette: {
                primary1Color: '#eadd00',
                accent1Color: '#0042ce'
            }
        });
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={this.muiTheme}>
                <div>
                    <AppBar
                        title={<Link className="link" to="/">AutoCodes Luna</Link>}
                        iconElementLeft={<IconButton onTouchTap={() => this.props.dispatch(push('/settings'))}><FontIcon className="material-icons">settings</FontIcon></IconButton>}
                    />
                    <div className="container">
                        { this.props.children }
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default connect()(App);
