import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MediaCardContent from 'eventbrite_design_system/mediaCardContent/MediaCardContent';


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
        let imageContent = '';
        let price = 'Starts at ';

        if(!startEventPrice.includes('Free')) {
            if(startEventPrice.includes('Sold out')) {
                price = 'Sold out';
            } else {
                price = price + startEventPrice;
            }
        } else {
            price = 'Free';
            imageContent = (
                <span className="eds-text-color--grey-700">{price}</span>
            );
        }

        return (
            <div>
                <div className="search-result__width">
                    <MediaCardContent
                        style="standard"
                        type="grid"
                        imageStyle="fixed"
                        containerSpacingClasses="eds-l-pad-all-1"
                        title={eventName}
                        flag={imageContent}
                        subContentOne={startEventDate}
                        subContentTwo={eventPlace}
                        subContentThree={price}
                        imageUrl={imageUrl}
                        shouldShowIcons={true}
                        primaryIconType="heart-chunky"
                        primaryIconStyle="dark"
                        primaryIconTitle="Save"
                    />
                </div>
            </div>
        );
    }
}
