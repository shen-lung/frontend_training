import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from './reducers';

import ConnectedContent from './containers/ConnectedContent';
import ConnectedReactStepper from './containers/ConnectedReactStepper';
import ConnectedStepper from './containers/ConnectedStepper'

import './App.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this._store = createStore(
            reducer,
            composeWithDevTools(
                applyMiddleware(...[thunk], createLogger({collapsed: true})),
            ),
        );
    }

    render() {
        return (
            <div>
                <Provider store={this._store}>
                    {/* <ConnectedStepper /> */}
                    <ConnectedContent />
                </Provider>
                {/* <ConnectedReactStepper /> */}
                {/* <ReactSearchContent /> */}
            </div>
        );
    }
}
