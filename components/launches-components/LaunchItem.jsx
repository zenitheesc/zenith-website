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
        local,
        altitude,
        link
    } = props.textContent;

    return (
        <div onClick={() => changeUrl(link)} className={styles.launchContainer}>
            <div className={styles.launchTitle}>
                <div>{title}</div>
                <div>{altitude}</div>
            </div>
            <div className={styles.launchInfo}>
                <div>{local}</div>
                <div>{launchDate}</div>
            </div>
        </div>  
    );
}

export default LaunchItem;