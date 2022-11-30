import React from 'react';
import styles from 'styles/LaunchMenu.module.css';
import useTranslation from 'next-translate/useTranslation';
import LaunchItem from './LaunchItem';

function LaunchMenu (props) {
    const { t } = useTranslation();
    const launches = t("lancamentos:launches", { count: -1 }, { returnObjects: true });
    const sabado_4 = launches["sabado_4"];
    const sabado_3 = launches["sabado_3"];
    const sabado_2 = launches["sabado_2"];
    const sabado_1 = launches["sabado_1"];

    return (  
        <div className={styles.launchContainer}>
            <LaunchItem className={styles.launchItem} textContent={sabado_4}></LaunchItem>
            <LaunchItem className={styles.launchItem} textContent={sabado_3}></LaunchItem>
            <LaunchItem className={styles.launchItem} textContent={sabado_2}></LaunchItem>
            <LaunchItem className={styles.launchItem} textContent={sabado_1}></LaunchItem>
        </div>      
    );
}

export default LaunchMenu;