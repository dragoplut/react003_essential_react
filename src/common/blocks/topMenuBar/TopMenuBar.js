import React from 'react';
import styles from './style.css';
import Avatar from 'material-ui/Avatar';
import AppBar from 'material-ui/AppBar';
import { browserHistory } from 'react-router';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


export default class TopMenuBar extends React.Component {
  signOut() {
    browserHistory.push('/');
  }
  toAccount() {
    browserHistory.push('/account');
  }

  render() {
    return (
      <AppBar
        title="Jake Brown"
        iconElementLeft={
            <Avatar className={styles.avatar} src="https://dl.dropboxusercontent.com/u/99892820/male-users/men27-photo-by-Jo-Christian-Oterhals.jpg" />
          }
        iconElementRight={
            <IconMenu
              iconButtonElement={
                <IconButton><MoreVertIcon /></IconButton>
              }
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
              <MenuItem primaryText="Account" onClick={this.toAccount} />
              <MenuItem primaryText="Help" />
              <MenuItem primaryText="Sign out" onClick={this.signOut} />
            </IconMenu>
          }
      />
    );
  }
};