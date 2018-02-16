import React from 'react';
import './SavedTitle.css';

export default class SavedTitle extends React.Component {
  render() {
    return (
      <span className="savedtitle">
        {this.props.title}
      </span>
    );
  }
}
