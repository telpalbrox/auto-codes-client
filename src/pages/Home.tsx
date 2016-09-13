import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import {carBrands, CardBrand} from '../carBrands';
import GridTile from "material-ui/GridList/GridTile";
import GridList from "material-ui/GridList/GridList";

const GridTileCustom = (GridTile as any);

interface HomePageProps {
    dispatch?: Function;
}

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        overflowY: 'auto',
        marginBottom: 24
    },
};

class Home extends React.Component<HomePageProps, any> {
    render() {
        return (
            <div style={styles.root}>
                <GridList
                    cellHeight={100}
                    style={styles.gridList}
                    cols={3}
                >
                    {carBrands.map((carBrand) => (
                        <GridTileCustom
                            key={carBrand.name}
                            onClick={() => this.goToBrand(carBrand)}
                            title={carBrand.name}
                            titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                        >
                            <img src={carBrand.image} />
                        </GridTileCustom>
                    ))}
                </GridList>
            </div>
        );
    }

    goToBrand(carBrand: CardBrand) {
        this.props.dispatch(push(`/brand/${carBrand.name}`));
    }
}

export default connect()(Home);