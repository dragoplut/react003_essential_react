import React from 'react';
import styles from './style.css';
import LeftSidebar from '../../common/blocks/leftSidebar/LeftSidebar';
import TopMenuBar from '../../common/blocks/topMenuBar/TopMenuBar';
import RaisedButton from 'material-ui/RaisedButton';


export default class AccountPage extends React.Component {
  render() {
    return (
      <div className={styles.account} >
        <TopMenuBar />
        <LeftSidebar />
      </div>
    );
  }
};