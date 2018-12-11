import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchComponent from './SearchComponent';

export default class ContentComponent extends Component {
    static  propTypes = {
        searchList: PropTypes.object.isRequired,
    }

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
        let {searchList} = this.props;
        let data = [];
        searchList.events.map((item) => {
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
