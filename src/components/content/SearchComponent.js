import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class SearchComponent extends Component {
    static  propTypes = {
        imageUrl: PropTypes.string.isRequired,
        eventName: PropTypes.string.isRequired,
        startEventDate: PropTypes.string.isRequired,
        eventPlace: PropTypes.string.isRequired,
        startEventPrice: PropTypes.string.isRequired,
    }
    render() {
        let {
            imageUrl,
            eventName,
            startEventDate,
            eventPlace,
            startEventPrice
        } = this.props;
        let imageContent;
        let price = 'Starts at ';

        if(!startEventPrice.includes('Free')) {
            if(startEventPrice.includes('Sold out')) {
                price = 'Sold out';
            } else {
                price = price + startEventPrice;
            }
            imageContent = (
                <div className="search-result__visual">
                    <img src={imageUrl} data-spec="event_image" />
                </div>
            );
        } else {
            price = 'Free';
            imageContent = (
                <div className="search-result__visual">
                    <img src={imageUrl} />
                    <div className="search-result__visual__sticker">
                        <p data-spec="free_sticker">Free</p>
                    </div>
                </div>
            );
        }

        return (
            <div>
                <div className="search-result">
                    {imageContent}
                    <div className="search-result__event-desc">
                        <h2 className="search-result__event-desc__title" data-spec="event_name">{eventName}</h2>
                        <div className="search-result__event-desc__info">
                            <p data-spec="starts_event_date">{startEventDate}</p>
                            <p data-spec="event_place">{eventPlace}</p>
                            <p data-spec="start_event_price">{price}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
