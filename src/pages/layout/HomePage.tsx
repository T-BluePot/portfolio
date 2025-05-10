import MainHero from './main-hero/MainHero';
import TeamIntro from './team-intro/TeamIntro';
import AboutUs from './about-us/AboutUs';

export default function HomePage() {
  return (
    <>
      <MainHero />
      <TeamIntro />
      <AboutUs />
      {/* 필요한 섹션 계속 추가 가능 */}
    </>
  );
}
