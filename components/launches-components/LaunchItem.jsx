import React from 'react';
import styles from 'styles/LaunchItem.module.css';

function changeUrl(url) {
    document.getElementById("sondeHub").src = url;
}

function LaunchItem (props) {
    const { 
        title, 
        date,
        launchDate,
        altitude,
        link
    } = props.textContent;

    return (
        <div className={styles.launchContainer}>
            <div className={styles.launchTitle}>
                {title} {launchDate}
            </div>
            <div className={styles.launchInfo}>
                {altitude}
                <button className={styles.launchButton} type="button" onClick={() => changeUrl(link)}>VIEW</button>
            </div>
        </div>  
    );
}

export default LaunchItem;