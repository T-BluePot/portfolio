import styles from '@/pages/layout/introducing-project/IntroducingProject.module.scss';
import ProjectoCarousel from './components/ProjectoCarousel';

type Props = {};

const IntroducingProject = (props: Props) => {
  return (
    <section id="introducing-project-wrapper" className={styles.introducingProjectWrapper}>
      <ProjectoCarousel />
    </section>
  );
};

export default IntroducingProject;
