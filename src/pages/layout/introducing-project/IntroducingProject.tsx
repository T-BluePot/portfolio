import styles from '@/pages/layout/introducing-project/IntroducingProject.module.scss';
import type { CarouselInfo } from '@/@types/project';

import ProjectInfoSection from './components/ProjectInfoSection';
import data from '@/mock/data/ourProjectList.json';

const ourProjectList = data as CarouselInfo[];
const IntroducingProject = () => {
  return (
    <section id="introducing-project-wrapper" className={styles.introducingProjectWrapper}>
      <ProjectInfoSection projects={ourProjectList} />
    </section>
  );
};

export default IntroducingProject;
