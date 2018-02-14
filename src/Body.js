import React from 'react';
import Header from './Header';
import AboutUs from './AboutUs';
import './Body.css';

export default class Body extends React.Component {
  render() {
    return (
      <div className="body">
        <Header value="Start taking notes" />
        <AboutUs />
      </div>
    );
  }
}
