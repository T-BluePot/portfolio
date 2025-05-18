import style from '@/pages/layout/introducing-project/components/ProjectInfo.module.scss';

const ProjectInfoLayout = (props: Props) => {
  return (
    <div>
      <slot />
    </div>
  );
};

export default ProjectInfoLayout;
