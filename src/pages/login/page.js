import React from 'react';
import { browserHistory } from 'react-router';
import styles from './style.css';


export default class LoginPage extends React.Component {
  signUp() {
    browserHistory.push('/home');
  }
  toAccount() {
    browserHistory.push('/account');
  }
  
  render() {
    return (
      <div className={styles.content}>
        <h1 className={styles.heading}>Login Page</h1>
        <p className={styles.lead}>Create an account to get started! Go on! Sergiy.</p>
        <button className={styles.signUpButton} onClick={this.signUp}>Sign up</button>
        <button className={styles.signUpButton} onClick={this.toAccount}>Go to account page</button>
      </div>
    );
  }
}
