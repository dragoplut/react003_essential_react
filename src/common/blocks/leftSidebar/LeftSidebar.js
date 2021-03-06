import React from 'react';
import styles from './style.css';
import Avatar from 'material-ui/Avatar';
import { browserHistory } from 'react-router';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import ConfirmDialog from '../confirmDialog/ConfirmDialog';


export default class LeftSidebar extends React.Component {
  state = {
    openDialog: false
  };

  handleDialogOpen = () => {
    this.setState({openDialog: true, message: 'Confirm Reset Something'});
  };

  handleDialogClose = (resp) => {
    if (resp) this.setState({openDialog: resp.open});
  };

  toAccount() {
    browserHistory.push('/account')
  }

  toHome() {
    browserHistory.push('/home')
  }

  render() {
    return (
      <div className={styles.sidebar}>
        <List>
          <Subheader>Account Menu</Subheader>
          <Divider />
          <ListItem
            primaryText="Account Page"
            onClick={this.toAccount}
          />
          <ListItem
            primaryText="Home Page"
            onClick={this.toHome}
          />
          <ListItem
            primaryText="Change password"
          />
          <ListItem
            primaryText="Update User details"
          />
          <ListItem
            primaryText="My User Summary"
          />
          <ListItem
            primaryText="Reset Something"
            onClick={this.handleDialogOpen}
          />
        </List>
        <ConfirmDialog isOpen={this.state.openDialog} onHandleClose={this.handleDialogClose} message={this.state.message} />
      </div>
    );
  }
};