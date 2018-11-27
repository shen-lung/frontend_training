import React, { Component } from 'react';

import SearchComponent from './SearchComponent';

export default class ContentComponent extends Component {
    render() {
        return (
            <main>
                <section className="search">
                    <SearchComponent
                        imageUrl={"src/img/dj.jpg"}
                        eventName={"That Event DJ - Stylish DJs for Oakstop"}
                        startEventDate={"Sat, Aug 11, 11:00am"}
                        eventPlace={"Oakstop, Oakland, CA"}
                        startEventPrice={"Starts at $67.50"}
                    />
                    <SearchComponent
                        imageUrl={"src/img/trail_running.jpg"}
                        eventName={"After the Pks 5K Road and 10K Trail Run"}
                        startEventDate={"Sun, June 29, 08:00am"}
                        eventPlace={"Van Buren, Hancock County, US"}
                        startEventPrice={"$40.00"}
                    />
                    <SearchComponent
                        imageUrl={"src/img/vino.jpg"}
                        eventName={"Mendoza Wine Fair - Tercera Edición"}
                        startEventDate={"Sat, Aug 18, 07:00pm"}
                        eventPlace={"Mendoza, Mendoza, AR"}
                        startEventPrice={"Free"}
                    />
                </section>
            </main>
        );
    }
}
