import React from 'react';
import styles from './loader.module.css'; // Import CSS styles

export default function Loader() {
  return (
    <div className={styles.scene}>
      <div className={styles.shadow}></div>
      <div className={styles.jumper}>
        <div className={styles.spinner}>
          <div className={styles.scaler}>
            <div className={styles.loader}>
              <div className={styles.cuboid}>
                <div className={styles['cuboid__side']}></div>
                <div className={styles['cuboid__side']}></div>
                <div className={styles['cuboid__side']}></div>
                <div className={styles['cuboid__side']}></div>
                <div className={styles['cuboid__side']}></div>
                <div className={styles['cuboid__side']}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
