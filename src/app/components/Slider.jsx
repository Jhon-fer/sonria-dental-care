import styles from '../styles/slider.module.scss';

export default function Slider() {
  return(
    <section className={styles.slider}>
      <div className={styles.sliderContainer}>
        <h2>odontología reconstructiva</h2>
        <p>avanzada</p>
        <div className={styles.sliderContainerButtons}>
          <a href='tel:+12356702587'>(123) 567-02587</a>
          <a href='mailto:email@example.com'>pedir cita</a>
        </div>
      </div>
    </section>
  )
}