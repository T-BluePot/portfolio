type ProjectCategory = '프로젝트' | '헤커톤';
type CarouselType = 'horizontal' | 'vertical';
export interface CarouselInfo {
  id: string;
  title: string;
  category: ProjectCategory;
}
export interface ProjectCardPropsType {
  project: CarouselInfo;
}
export interface ProjectCarouselPropsType {
  type: CarouselType;
  projects: CarouselInfo[];
}
export interface ProjectInfoSectionPropsType {
  projects: CarouselInfo[];
}
