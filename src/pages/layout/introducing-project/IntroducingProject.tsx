import type { projectInfo } from '@/@types/project';

import styles from '@/pages/layout/introducing-project/IntroducingProject.module.scss';
import ProjectCarousel from './components/ProjectCarousel';

import data from '@/mock/data/ourProjectList.json';
import ProjectInfoSection from './components/ProjectInfoSection';

const ourProjectList = data as projectInfo[];

const IntroducingProject = () => {
  return (
    <section id="introducing-project-wrapper" className={styles.introducingProjectWrapper}>
      <ProjectCarousel projects={ourProjectList} type="horizontal" />
      <div>
        <ProjectCarousel projects={ourProjectList} type="vertical" />
        <ProjectInfoSection />
      </div>
    </section>
  );
};

export default IntroducingProject;
