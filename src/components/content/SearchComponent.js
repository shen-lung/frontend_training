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

        if(!startEventPrice.includes('Free')) {
            imageContent = (
                <div className="search-result__visual">
                    <img src={imageUrl} />
                </div>
            );
        } else {
            imageContent = (
                <div className="search-result__visual">
                    <img src={imageUrl} />
                    <div className="search-result__visual__sticker">
                        <p>Free</p>
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
                            <p data-spec="start_event_price">Starts at {startEventPrice}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
