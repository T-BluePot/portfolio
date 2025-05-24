import style from '@/pages/layout/introducing-project/components/ProjectInfo.module.scss';
import type { ProjectInfoSectionPropsType } from '@/@types/project';

import ProjectInfoLayout from './ProjectInfoLayout';
import ProjectInfoContent from './ProjectInfoContent';
import ProjectCarousel from './ProjectCarousel';

const ProjectInfoSection = (projectInfo: ProjectInfoSectionPropsType) => {
  return (
    <div className={style.projectInfoSectionWrapper}>
      <ProjectCarousel type="horizontal" projects={projectInfo.projects} />
      <div className={style.projectInfoCententsLayout}>
        <ProjectCarousel type="vertical" projects={projectInfo.projects} />

        <ProjectInfoLayout>
          <ProjectInfoContent />
        </ProjectInfoLayout>
      </div>
    </div>
  );
};

export default ProjectInfoSection;
