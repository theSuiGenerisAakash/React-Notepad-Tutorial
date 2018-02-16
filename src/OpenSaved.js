import React from 'react';
import './OpenSaved.css';

export default class OpenSaved extends React.Component {
  render() {
    return (
      <button
        className="OpenSaved-button"
        onClick={this.props.openSaved}
      >{this.props.value}
      </button>
    );
  }
}
