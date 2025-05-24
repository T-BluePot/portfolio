import type { ProjectCardPropsType } from '@/@types/project';

import styles from '@/pages/layout/introducing-project/components/ProjectCard.module.scss';

const ProjectCard = (project: ProjectCardPropsType) => {
  return (
    <div className={styles.projectCardWrapper}>
      <h3>{project.project.title}</h3>
      <span>{project.project.category}</span>
    </div>
  );
};

export default ProjectCard;
