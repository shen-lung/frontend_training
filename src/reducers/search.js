import {
    SET_EVENT_DATA,
    GET_ALL_EVENTS
} from '../actions/search';

const searchEvents = (state = [], {type, payload}) => {
    let newState = state;

    if (type === SET_EVENT_DATA) {
        newState = payload;
    }

    if (type === GET_ALL_EVENTS) {
        newState = payload;
    }

    return newState;
};

export default searchEvents;
