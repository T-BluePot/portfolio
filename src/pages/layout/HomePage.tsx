import MainHero from './main-hero/MainHero';
import WaveTransition from './transition/WaveTransition';
import TeamIntro from './team-intro/TeamIntro';
import AboutUs from './about-us/AboutUs';
import IntroducingProject from './introducing-project/IntroducingProject';

export default function HomePage() {
  return (
    <>
      <MainHero />
      <WaveTransition />
      <TeamIntro />
      <AboutUs />
      <IntroducingProject/>
      {/* 필요한 섹션 계속 추가 가능 */}
    </>
  );
}
