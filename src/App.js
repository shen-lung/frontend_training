import React from 'react';

import './App.css';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <header></header>
                <nav></nav>
                <main>
                    <section className="search">
                        <div className="search-result">
                            <div className="search-result__visual">
                                <img src="img/dj.jpg" alt="Dj" />
                            </div>
                            <div className="search-result__event-desc">
                                <h2 className="search-result__event-desc__title">That Event DJ - Stylish DJs for Oakstop</h2>
                                <div className="search-result__event-desc__info">
                                    <p>Sat, Aug 11, 11:00am</p>
                                    <p>Oakstop, Oakland, CA</p>
                                    <p>Starts at $67.50</p>
                                </div>
                            </div>
                        </div>
                        <div className="search-result">
                            <div className="search-result__visual">
                                <img src="img/trail_running.jpg" alt="Dj" />
                            </div>
                            <div className="search-result__event-desc">
                                <h2 className="search-result__event-desc__title">After the Pks 5K Road and 10K Trail Run</h2>
                                <div className="search-result__event-desc__info">
                                    <p>Sun, June 29, 08:00am</p>
                                    <p>Van Buren, Hancock County, US</p>
                                    <p>Starts at $40.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="search-result">
                            <div className="search-result__visual">
                                <img src="img/vino.jpg" alt="Dj" />
                                <div className="search-result__visual__sticker">
                                    <p>Free</p>
                                </div>
                            </div>
                            <div className="search-result__event-desc">
                                <h2 className="search-result__event-desc__title">Mendoza Wine Fair - Tercera Edición</h2>
                                <div className="search-result__event-desc__info">
                                    <p>Sat, Aug 18, 07:00pm</p>
                                    <p>Mendoza, Mendoza, AR</p>
                                    <p>Free</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <footer></footer>
            </div>
        );
    }
}
