import {combineReducers} from 'redux';

import calculation from './stepper';
import searchEvents from './search';

export default combineReducers({
    calculation,
    searchEvents,
});
