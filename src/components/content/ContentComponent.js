import React, { Component } from 'react';

import SearchComponent from './SearchComponent';

import * as searchData from '../../data/searchData.json'

export default class ContentComponent extends Component {
    _getEventPlace(address, country) {
        return `${address}, ${country}`;
    }

    _getStartEventPrice(ticketAvailability) {
        if(!ticketAvailability.is_sold_out) {
            if(!ticketAvailability.is_free) {
                return ticketAvailability.minimum_ticket_price.display;
            } else {
                return 'Free';
            }
        }

        return 'Sold out';
    }

    _getFilterSearchData() {
        let data = [];
        searchData.events.map((item) => {
            data.push({
                imageUrl: item.image.url,
                eventName: item.name,
                startEventDate: item.start_date,
                eventPlace: this._getEventPlace(
                    item.primary_venue_with_places.address.localized_address_display,
                    item.primary_venue_with_places.address.country,
                ),
                startEventPrice: this._getStartEventPrice(item.ticket_availability)
            });
        });

        return data;
    }

    render() {
        const searchData = this._getFilterSearchData();
        console.log(searchData);
        const data = searchData.map((item) => (
            <SearchComponent
                imageUrl={item.imageUrl}
                eventName={item.eventName}
                startEventDate={item.startEventDate}
                eventPlace={item.eventPlace}
                startEventPrice={item.startEventPrice}
            />
        ));

        return (
            <main>
                <section className="search">
                    {data}
                </section>
            </main>
        );
    }
}
