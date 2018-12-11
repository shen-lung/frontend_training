import SELECT_ALL_EVENTS from '../actions/search';

import * as searchData from '../data/searchData.json';

const searchEvents = (state = searchData, {type}) => {
    let newState = state;
    if(type === SELECT_ALL_EVENTS) {
        newState = searchData;
    }
    return newState;
};

export default searchEvents;
