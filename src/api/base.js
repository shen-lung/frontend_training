const eventbrite = require('eventbrite');

const ebSdk = eventbrite.default({
    token: '',
    baseUrl: 'https://www.evbqaapi.com/v3'
});

const checkServerStatus = (response) => {
    if (response.status >= 300) {
       console.log('Server ERROR.');
       return Promise.reject(response);
    }

    return Promise.resolve(response);
};

const parseData = (response) => {
    if ('events' in response) {
        return response.events.results;
    }

    return Promise.resolve({});
};

export const fetchEventSearch = (eventNameSearch) => {
    const searchUrl = '/destination/search/';

    const dataSearch = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            event_search: {
                q: eventNameSearch,
            },
            page_size: 50,
            'expand.destination_event': [
                'primary_venue',
                'image',
                'ticket_availability',
            ]
        }),
    };

    return ebSdk.request(searchUrl, dataSearch).then(checkServerStatus).then(parseData);
}
;
export const fetchAllEvents = () => {
    const searchUrl = '/destination/search/';

    const dataSearch = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            event_search: {
                dates: 'this_week',
            },
            page_size: 50,
            'expand.destination_event': [
                'primary_venue',
                'image',
                'ticket_availability',
            ]
        }),
    };

    return ebSdk.request(searchUrl, dataSearch).then(checkServerStatus).then(parseData);
};
