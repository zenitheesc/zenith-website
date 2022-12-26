import React from 'react';
import styles from 'styles/LaunchMenu.module.css';
import useTranslation from 'next-translate/useTranslation';
import LaunchItem from './LaunchItem';

function LaunchMenu (props) {
    const { t } = useTranslation();
    const launches = t("lancamentos:launches", { count: -1 }, { returnObjects: true });
    const rows = [];
    for (let i = 0; i < 10; i++) {
        rows.push(<LaunchItem className={styles.launchItem} textContent={launches[""+i]}></LaunchItem>);
    }

    return (  
        <div className={styles.launchContainer}>
            {rows}
        </div>      
    );
}

export default LaunchMenu;