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
  // 화면에 보이는 팀원 수
  const [itemsVisible, setItemsVisible] = useState(2);
  // 카드(슬라이딩) 간 간격
  const [spaceBetween, setSpaceBetween] = useState(8);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;

      if (w < 768) {
        setItemsVisible(1);
        setSpaceBetween(0);
      } else if (w < 992) {
        setItemsVisible(2);
        setSpaceBetween(24);
      } else if (w < 1200) {
        setItemsVisible(3);
        setSpaceBetween(32);
      } else {
        setItemsVisible(4);
        setSpaceBetween(64);
      }
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
        spaceBetween={spaceBetween}
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
