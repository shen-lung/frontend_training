import {
    fetchEventSearch,
    fetchAllEvents,
} from '../api/base';

export const SET_EVENT_DATA = 'SET_EVENT_DATA';
export const GET_ALL_EVENTS = 'GET_ALL_EVENTS';

export const setEventData = (data) => ({type: SET_EVENT_DATA, payload: data});
export const setAllEvents = (data) => ({type: GET_ALL_EVENTS, payload: data});

export const searchEvents = (data) => (dispatch) => {
    fetchEventSearch(data.searchText).then((result) => {
        dispatch(setEventData(result));
    });
};

export const getAllEvents = () => (dispatch) => {
    fetchAllEvents().then((result) => {
        dispatch(setAllEvents(result));
    });
};
