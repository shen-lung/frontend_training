import React from 'react';
import {mount} from 'enzyme';

import SearchComponent from './SearchComponent';

const baseProps = {
    imageUrl: 'src/img/dj.jpg',
    eventName: 'That Event DJ - Stylish DJs for Oakstop',
    startEventDate: 'Sat, Aug 11, 11:00am',
    eventPlace: 'Oakstop, Oakland, CA',
    startEventPrice: '$67.50',
}

describe('Search Component', () => {
    it('should render', () => {
        const component = mount(<SearchComponent {...baseProps} />);

        expect(component).toMatchSnapshot();
    });

    it('should render event name', () => {
        const component = mount(<SearchComponent {...baseProps} />);

        expect(component.find('[data-spec="event_name"]')).toHaveText('That Event DJ - Stylish DJs for Oakstop');
    });

    it('should render starts event date', () => {
        const component = mount(<SearchComponent {...baseProps} />);

        expect(component.find('[data-spec="starts_event_date"]')).toHaveText('Sat, Aug 11, 11:00am');
    });

    it('should render event place', () => {
        const component = mount(<SearchComponent {...baseProps} />);

        expect(component.find('[data-spec="event_place"]')).toHaveText('Oakstop, Oakland, CA');
    });

    it('should render start event price', () => {
        const component = mount(<SearchComponent {...baseProps} />);

        expect(component.find('[data-spec="start_event_price"]')).toHaveText('Starts at $67.50');
    });
});
