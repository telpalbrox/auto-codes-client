/// <reference path="../typings/index.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App.tsx';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import { carBrandsReducer } from './reducers/carBrandsReducer';
import { autoCodesReducer } from './reducers/autoCodesReducer'
import Home from './pages/Home';
import CarBrand from './pages/CarBrand';
import AutoCodePage from './pages/AutoCode';

require('flexboxgrid');
require('react-tap-event-plugin')();

const store = createStore(combineReducers({
    carBrands: carBrandsReducer,
    autoCodes: autoCodesReducer,
    routing: routerReducer
}), compose(applyMiddleware(thunk, routerMiddleware(hashHistory)), (window as any).devToolsExtension ? (window as any).devToolsExtension() : (f) => f));

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="/brand/:carBrand" component={CarBrand} />
                <Route path="/code/:brand/:code" component={AutoCodePage} />
            </Route>
        </Router>
    </Provider>,
  document.getElementById('root')
);
