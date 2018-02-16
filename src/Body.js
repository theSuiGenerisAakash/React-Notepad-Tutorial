import React from 'react';
import Header from './Header';
import AboutUs from './AboutUs';
import Container from './Container';
import './Body.css';

export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: 0,
      text: 'About Us',
    };
  }

  changeLayout = (changeOrNot) => {
    if (changeOrNot === 1) {
      this.setState({
        layout: 1,
        text: 'Create New Note',
      });
    } else {
      this.setState({
        layout: 0,
        text: 'About Us',
      });
    }
  }

  render() {
    return (
      <div className="body">
        <Header value="Start taking notes" />
        <Container layout={this.state.layout} changeLayout={this.changeLayout} />
        <AboutUs text={this.state.text} changeLayout={this.changeLayout} />
      </div>
    );
  }
}
