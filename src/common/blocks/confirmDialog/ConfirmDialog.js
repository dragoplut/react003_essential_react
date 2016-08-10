import React from 'react';
import styles from './style.css';
import { browserHistory } from 'react-router';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class ConfirmDialog extends React.Component {
  state = {
    actionResult: false
  };

  handleClose = (e) => {
    if (e) e.preventDefault();
    this.props.onHandleClose({open: false, action: this.state.actionResult});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.handleClose}
      />
    ];

    return (
      <div>
        <Dialog
          title={this.props.message}
          actions={actions}
          modal={false}
          open={this.props.isOpen}
          onRequestClose={this.handleClose}
        >
          Are you sure about this?
        </Dialog>
      </div>
    );
  }
};