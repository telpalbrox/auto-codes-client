import * as React from 'react';
import { connect } from 'react-redux';
import {AppState, AutoCode} from "../models";
import {findAutoCode} from '../actions/autoCodes';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import RefreshIndicator from 'material-ui/RefreshIndicator';

interface CarBrandPageProps {
    dispatch?: Function;
    autoCode: AutoCode;
    loading: boolean;
    notFound: boolean;
    language: string;
    params: {
        code: string;
        brand: string;
    };
}

class AutoCodePage extends React.Component<CarBrandPageProps, any> {
    static mapStateToProps(state: AppState) {
        const { autoCode, loading, notFound } = state.autoCodes;
        const { language } = state.settings;
        return { autoCode, loading, notFound, language };
    }

    componentDidMount() {
        this.props.dispatch(findAutoCode(this.props.params.code, this.props.params.brand, this.props.language));
    }

    render() {
        if (this.props.notFound) {
            return (<div>Codigo no encontrado</div>);
        }

        if (this.props.loading || !this.props.autoCode) {
            return (
                <div className="code-load">
                    <RefreshIndicator
                        size={50}
                        left={10}
                        top={0}
                        status="loading"
                    />
                </div>
            );
        }

        return (
            <div>
                <h3 style={{ textAlign: 'center' }}>Codigo {this.props.params.code.toUpperCase()} marca {this.props.params.brand}</h3>
                <div className="code-card">
                    <Card>
                        <CardTitle title="Descripcion"/>
                        <CardText>
                            {this.props.autoCode.description}
                        </CardText>
                    </Card>
                </div>
                <div className="code-card">
                    <Card>
                        <CardTitle title="Posibles causas"/>
                        <CardText>
                            {this.props.autoCode.possiblesCauses}
                        </CardText>
                    </Card>
                </div>
                <div className="code-card">
                    <Card>
                        <CardTitle title="Sintomas"/>
                        <CardText>
                            {this.props.autoCode.possibleSymptoms}
                        </CardText>
                    </Card>
                </div>
            </div>
        );
    }
}

export default connect(AutoCodePage.mapStateToProps)(AutoCodePage);