import React from 'react';
import './NoOfChars.css';

export default class NoOfChars extends React.Component {
  charOrChars() {
    if (this.props.value === 1) { return `${this.props.value} character remaining`; }
    return `${this.props.value} characters remaining`;
  }
  render() {
    return (
      <div className="noofchars">
        {this.charOrChars()}
      </div>
    );
  }
}
