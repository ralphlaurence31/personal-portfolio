import NavBar from './components/NavBar'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className='App'>

      <div className='navigation-bar'>
        <NavBar />
      </div>

      <div className='main-contents mt-[110px] mx-auto max-w-screen-lg'>
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>

      <div className='footer'>
        <Footer/>
      </div>

    </div>

    
  )
}

export default App
