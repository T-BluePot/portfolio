import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useState, useEffect } from 'react';
import TeamMemberCard from './TeamMemberCard';
import { teamMembers } from '@/constants/teamMembers';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './TeamCarousel.module.scss';

export default function TeamCarousel() {
  const [itemsVisible, setItemsVisible] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 768) setItemsVisible(1);
      else if (w < 1200) setItemsVisible(2);
      else setItemsVisible(3);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.carouselWrapper}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={itemsVisible}
        spaceBetween={40}
        loop
        className={styles.customSwiper}
      >
        {teamMembers.map((member) => (
          <SwiperSlide key={member.name}>
            <div className={styles.slideWrapper}>
              <TeamMemberCard {...member} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
