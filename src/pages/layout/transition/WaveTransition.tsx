import styles from './WaveTransition.module.scss';
import WaveOne from './components/WaveOne';
import WaveTwo from './components/WaveTwo';

export default function WaveTransition() {
  return (
    <section className={styles.wave}>
      <WaveOne />
      <WaveTwo />
    </section>
  );
}
