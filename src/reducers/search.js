import {
    SET_EVENT_DATA,
    GET_ALL_EVENTS
} from '../actions/search';

import searchData from '../data/searchData.json';

const events = searchData.events;

const searchEvents = (state = events, {type, payload}) => {
    let newState = state;

    if (type === SET_EVENT_DATA) {
        newState = payload;
    }

    if (type === GET_ALL_EVENTS) {
        newState = events;
    }

    return newState;
};

export default searchEvents;
