import './App.css'
import './styles.css'
import Home from './components/Home/Home'
import SideBar from './components/Sidebar/Sidebar'
import TopBar from './components/TopBar/TopBar'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Achievements from './components/Achievements/Achievements'

function App() {
  return (
    <>
      <div>
        <TopBar />
        <SideBar />
        <div className='content-container'>
          <Home />
          <About />
          <Experience />
          <Projects />
          <Achievements />
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App
