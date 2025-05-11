import styles from './WaveTransition.module.scss';
import WaveOne from './components/WaveOne';

export default function WaveTransition() {
  return (
    <section className={styles.wave}>
      <WaveOne />
    </section>
  );
}
