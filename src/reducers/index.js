import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import {routerReducer} from 'react-router-redux';

import calculation from './stepper';
import searchEvents from './search';

export default combineReducers({
    calculation,
    searchEvents,
    form: formReducer,
    routing: routerReducer,
});
