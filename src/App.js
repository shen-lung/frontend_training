import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import {routerMiddleware, syncHistoryWithStore} from 'react-router-redux';
import {browserHistory, Router} from 'react-router';


import reducer from './reducers';
import getRoutes from './routes';

import './App.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this._store = createStore(
            reducer,
            composeWithDevTools(
                applyMiddleware(...[thunk, routerMiddleware(browserHistory)],  createLogger({collapsed: true})),
            ),
        );

        this._history = syncHistoryWithStore(browserHistory, this._store);
    }

    render() {
        let routes = getRoutes();

        return (
            <div>
                <Provider store={this._store}>
                    <Router history={this._history} routes={routes} />
                </Provider>
            </div>
        );
    }
}
