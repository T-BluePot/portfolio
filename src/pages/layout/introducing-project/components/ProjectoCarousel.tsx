import styles from '@/pages/layout/introducing-project/components/ProjectCarousel.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import ProjectCard from '@/pages/layout/introducing-project/components/ProjectCard';

type Props = {};

const ProjectoCarousel = () => {
  return (
    <div className={styles.projectCarouselWrapper}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        className={styles.customSwiper}
      >
        <SwiperSlide>
          <div>
            <ProjectCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <ProjectCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <ProjectCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <ProjectCard />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProjectoCarousel;
