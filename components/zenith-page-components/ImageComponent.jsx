import styles from 'styles/ImageComponent.module.css'

export default function ImageComponent(props) {
  const { images, alt } = props;

  return (
    <section className={`-section ${styles.imgSection}`}>
      <div className={`-standardContainer ${styles.imgContainer}`}>
          <img src={images[0]} alt={alt[0]}/>
          <img src={images[1]} alt={alt[1]}/>
      </div>
    </section>
  );
}