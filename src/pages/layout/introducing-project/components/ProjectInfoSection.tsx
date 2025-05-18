import style from '@/pages/layout/introducing-project/components/ProjectInfo.module.scss';

import ProjectInfoLayout from './ProjectInfoLayout';
import ProjectInfoContent from './ProjectInfoContent';

const ProjectInfoSection = () => {
  return (
    <div>
      <ProjectInfoLayout>
        <ProjectInfoContent />
      </ProjectInfoLayout>
    </div>
  );
};

export default ProjectInfoSection;
