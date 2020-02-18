import React from 'react';
import styles from './Scrollbar.module.css';

function Scrollbar() {
  return (
    <div className={styles.scrollbarContainer}>
      <div className={styles.scrollbar} id="scrollbar" />
    </div>
  )
}

export default Scrollbar;
