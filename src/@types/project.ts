type projectCategory = '프로젝트' | '헤커톤';

export interface projectInfo {
  id: string;
  title: string;
  category: projectCategory;
}
export interface projectCardPropsType {
  project: projectInfo;
}
export interface projectCarouselPropsType {
  projects: projectInfo[];
}
