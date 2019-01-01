import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'eventbrite_design_system/button/Button';

import SearchComponent from './SearchComponent';
import ConnectedSearchFrom from '../../containers/ConnectedSearchFrom';

export default class ContentComponent extends Component {
    static  propTypes = {
        searchList: PropTypes.array.isRequired,
        goToHome: PropTypes.func.isRequired,
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
        let {
            searchList,
        } = this.props;
        let data = [];

        searchList.map((item) => {
            data.push({
                imageUrl: item.image ? item.image.original.url : '',
                eventName: item.name,
                startEventDate: item.start_date,
                eventPlace: this._getEventPlace(
                    item.primary_venue.address.localized_address_display,
                    item.primary_venue.address.country,
                ),
                startEventPrice: this._getStartEventPrice(item.ticket_availability),
                eventId: item.id
            });
        });

        return data;
    }

    render() {
        let {goToHome} = this.props;
        const searchData = this._getFilterSearchData();
        const data = searchData.map((item) => (
            <SearchComponent
                key={item.eventId}
                imageUrl={item.imageUrl}
                eventName={item.eventName}
                startEventDate={item.startEventDate}
                eventPlace={item.eventPlace}
                startEventPrice={item.startEventPrice}
            />
        ));

        return (
            <main>
                <section className="search eds-l-mar-left-4">
                    <ConnectedSearchFrom />
                    <Button onClick={goToHome}>GO HOME</Button>
                    {data}
                </section>
            </main>
        );
    }
}
