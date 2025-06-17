import { ReactNode } from 'react';
import styles from '@/pages/layout/introducing-project/components/ProjectInfo.module.scss';
interface Props {
  children: ReactNode;
}

const ProjectInfoLayout = ({ children }: Props) => {
  return <div className={styles.projectInfoLayoutWrapper}>{children}</div>;
};

export default ProjectInfoLayout;
