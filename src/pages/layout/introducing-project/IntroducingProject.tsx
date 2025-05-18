import type { projectInfo } from '@/@types/project';

import styles from '@/pages/layout/introducing-project/IntroducingProject.module.scss';
import ProjectoCarousel from './components/ProjectCarousel';

import data from '@/mock/data/ourProjectList.json';

const ourProjectList = data as projectInfo[];

const IntroducingProject = () => {
  return (
    <section id="introducing-project-wrapper" className={styles.introducingProjectWrapper}>
      <ProjectoCarousel projects={ourProjectList} />
    </section>
  );
};

export default IntroducingProject;
