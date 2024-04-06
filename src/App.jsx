import MainPageTitle from './components/Pages/MainPageTitle.jsx'
import APageIntroduce from './components/Pages/APart/APageIntroduce.jsx'
import PfNavigation from './components/commons/PfNavigation.jsx'
import PSlidingButton from './components/commons/PSlidingButton.jsx'
import PTopButton from './components/commons/PTopButton.jsx'
import ProjectIntroducePage from './components/Pages/ProjectIntroducePage.jsx'

function App() {
  return (
    <>
      <PfNavigation></PfNavigation>
      <PSlidingButton />
      <PTopButton />
      <MainPageTitle />
      <APageIntroduce />
      <ProjectIntroducePage/>
    </>
  )
}

export default App
