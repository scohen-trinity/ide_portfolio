import './App.css'
import './styles.css'
import Home from './components/Home/Home'
import SideBar from './components/Sidebar/Sidebar'
import TopBar from './TopBar/TopBar'

function App() {
  return (
    <>
      <div>
        <TopBar />
        <SideBar />
        <Home />
      </div>
    </>
  )
}

export default App
