import styles from '../../styles/ZenithImageComponent.module.css'

export default function ImageComponent() {

    return (
      <>
        <div className={styles.imgSection}>
            <img id={styles.imgOne} src="/images/Zenith/DSC_01371.webp" alt=""/>
            <img id={styles.imgTwo} src="/images/Zenith/DSC_00911.webp" alt=""/>
        </div>
        </>
    );
  }
