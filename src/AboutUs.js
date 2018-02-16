import React from 'react';
import './AboutUs.css';

export default class AboutUs extends React.Component {
  render() {
    return (
      <div className="aboutus">
        <button onClick={() => {
          if (this.props.text === 'Create New Note') {
            this.props.changeLayout(0);
           }
        }}
        >{this.props.text}
        </button>
      </div>
    );
  }
}
