import React from 'react';
import {Route, IndexRoute} from 'react-router';

import ConnectedIndexPage from './containers/ConnectedIndexPage';
import ConnectedContent from './containers/ConnectedContent';
import ConnectedReactStepper from './containers/ConnectedReactStepper';
import ConnectedStepper from './containers/ConnectedStepper'

import IndexPage from './components/IndexPage';

const BASE_URL = '/';

const getRoutes = () => {
    return (
        <Route path={BASE_URL} component={IndexPage}>
            <IndexRoute component={ConnectedIndexPage} />
            <Route path="search" component={ConnectedContent} />
            <Route path="stepper-redux" component={ConnectedStepper} />
            <Route path="stepper-react" component={ConnectedReactStepper} />
        </Route>
    );
};

export default getRoutes;
