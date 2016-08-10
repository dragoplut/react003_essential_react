import React from "react";
import styles from "./style.css";
import LeftSidebar from '../../common/blocks/leftSidebar/LeftSidebar';
import TopMenuBar from '../../common/blocks/topMenuBar/TopMenuBar';


export default class HomePage extends React.Component {
  render() {
    return (
      <div className={styles.content}>
        <TopMenuBar />
        <LeftSidebar />
        <div className={styles.pageContent}>
          <h1>Home Page</h1>
          <p className={styles.welcomeText}>Thanks for joining!</p>
        </div>
      </div>
    );
  }
}
