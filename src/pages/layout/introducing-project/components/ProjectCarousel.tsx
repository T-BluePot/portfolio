import styles from '@/pages/layout/introducing-project/components/ProjectCarousel.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ProjectCard from '@/pages/layout/introducing-project/components/ProjectCard';
import type { projectCarouselPropsType } from '@/@types/project';

const ProjectCarousel = ({ projects, type }: projectCarouselPropsType) => {
  const isVertical = type === 'vertical';
  return (
    <div className={`${styles.projectCarouselWrapper} ${isVertical ? styles.vertical : ''}`}>
      <Swiper
        modules={[Navigation]}
        navigation
        direction={isVertical ? 'vertical' : 'horizontal'}
        className={`swiper ${styles.customSwiper}`}
        spaceBetween={20}
        slidesPerView="auto"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} className={styles.slideItem}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectCarousel;
