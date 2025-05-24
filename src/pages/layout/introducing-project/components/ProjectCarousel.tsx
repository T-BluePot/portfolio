import styles from '@/pages/layout/introducing-project/components/ProjectCarousel.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ProjectCard from '@/pages/layout/introducing-project/components/ProjectCard';
import type { ProjectCarouselPropsType } from '@/@types/project';

const ProjectCarousel = ({ projects, type }: ProjectCarouselPropsType) => {
  const isVertical = type === 'vertical';
  return (
    <div className={`${styles.projectCarouselWrapper} ${isVertical ? styles.vertical : ''}`}>
      <Swiper
        modules={[Navigation]}
        direction={isVertical ? 'vertical' : 'horizontal'}
        className={`swiper ${styles.customSwiper}`}
        spaceBetween={16}
        slidesPerView="auto"
        navigation={
          isVertical
            ? {
                nextEl: `.${styles.verticalNext}`,
                prevEl: `.${styles.verticalPrev}`,
              }
            : false
        }
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
