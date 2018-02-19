import React from 'react';
import PT from 'prop-types';
import './SyncBtn.css';

export default class SyncBtn extends React.Component {
  sendNotes = () => {
    fetch('/store', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.props.notes),
    }).then(response => response.json()).then((responseResolved) => {
      console.log(responseResolved);
    });
  }

  render() {
    return (
      <button className="SyncBtn-button" onClick={() => this.sendNotes()}>
        {this.props.value}
      </button>
    );
  }
}

SyncBtn.propTypes = {
  value: PT.string.isRequired,
  notes: PT.arrayOf(PT.shape({
    title: PT.string,
    note: PT.string,
    id: PT.number,
  })),
};

SyncBtn.defaultProps = {
  notes: [],
};
