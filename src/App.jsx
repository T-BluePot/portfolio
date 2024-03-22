import MainPageTitle from './components/Pages/MainPageTitle.jsx'
import APageIntroduce from './components/Pages/APart/APageIntroduce.jsx'
import PfNavigation from './components/commons/PfNavigation.jsx'
import PSlidingButton from './components/commons/PSlidingButton.jsx'

function App() {
  return (
    <>
      <PfNavigation></PfNavigation>
      <PSlidingButton />
      <MainPageTitle />
      <APageIntroduce />
    </>
  )
}

export default App
