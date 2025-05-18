import type { projectCarouselPropsType } from '@/@types/project';

import styles from '@/pages/layout/introducing-project/components/ProjectCarousel.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import ProjectCard from '@/pages/layout/introducing-project/components/ProjectCard';

const ProjectCarousel = ({ projects }: projectCarouselPropsType) => {
  return (
    <div className={styles.projectCarouselWrapper}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        className={styles.customSwiper}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectCarousel;
