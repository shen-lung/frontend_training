import React from 'react';

import HeaderComponent from './components/header/HeaderComponent';
import NavigationComponent from './components/navigation/NavigationComponent';
import ContentComponent from './components/content/ContentComponent';
import FooterComponent from './components/footer/FooterComponent';

import './App.css';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <HeaderComponent />
                <NavigationComponent />
                <ContentComponent />
                <FooterComponent />
            </div>
        );
    }
}
