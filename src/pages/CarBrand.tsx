import * as React from 'react';
import { connect } from 'react-redux';
import {CardBrand, findCarBrand} from "../carBrands";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import {AppState, AutoCode} from "../models";
import {push} from 'react-router-redux';

interface CarBrandPageProps {
    dispatch?: Function;
    autoCode: AutoCode;
    loading: boolean;
    params: {
        carBrand: string;
    };
}

class CarBrandPage extends React.Component<CarBrandPageProps, any> {
    private carBrand: CardBrand;
    private searchInput: TextField;

    static mapStateToProps(state: AppState) {
        const { autoCode, loading } = state.autoCodes;
        return { autoCode, loading };
    }

    componentDidMount() {
        this.carBrand = findCarBrand(this.props.params.carBrand);
        this.setState({});
    }

    render() {
        if (!this.carBrand) {
            return (<div>Marca no encontrada</div>);
        }

        return (
            <div>
                <div className="row center-xs">
                    <img className="brand-image" src={ this.carBrand.image }/>
                </div>
                <div className="row center-xs">
                    <TextField
                        hintText="Introduce el codigo"
                        floatingLabelText={`Codigo ${this.carBrand.name}`}
                        ref={(node) => this.searchInput = node}
                    />
                </div>
                <div className="row center-xs">
                    <RaisedButton label="Buscar" secondary={true} onTouchTap={(event) => this.onSearch()} />
                </div>
            </div>
        );
    }

    onSearch() {
        const value = this.searchInput.getValue();
        if (!value) {
            return;
        }

        this.props.dispatch(push(`/code/${this.carBrand.name}/${value}`));
    }
}

export default connect(CarBrandPage.mapStateToProps)(CarBrandPage);