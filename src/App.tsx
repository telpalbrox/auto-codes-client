import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import './App.css';
import getMuiTheme, { } from "material-ui/styles/getMuiTheme";
import { Link } from 'react-router';
import {MuiTheme} from "material-ui/styles";


class App extends React.Component<any, any> {
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
                    />
                    <div className="container">
                        { this.props.children }
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
