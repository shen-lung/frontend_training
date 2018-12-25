import searchData from '../data/searchData.json';

const events = searchData.events;

export const SET_EVENT_DATA = 'SET_EVENT_DATA';
export const GET_ALL_EVENTS = 'GET_ALL_EVENTS';

export const setEventData = (data) => ({type: SET_EVENT_DATA, payload: data});
export const setAllEvents = () => ({type: GET_ALL_EVENTS});

export const searchEvents = (data) => (dispatch) => {
    let result = events.filter((event) => {
        let lowerEventName = event.name.toLowerCase()

        return lowerEventName.includes(data.searchText.toLowerCase())
    });

    dispatch(setEventData(result));
};

export const getAllEvents = () => (dispatch) => {
    dispatch(setAllEvents());
};
