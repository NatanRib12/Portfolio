import Introduction from 'components/sections/introduction/introduction'
import './App.css'
import Navbar from './components/shared/navbar/navbar'  
import Aboutme from './components/aboutme/aboutme'
import Footer from 'components/footer/footer'
function App() {

  return (
    <>
      <div className="app-container">
        <div className="navbar-container">
          <Navbar />
        </div>
        <div className="hero-section">
          <Introduction/>
        </div>
        <div className='AboutMe-container'>
          <Aboutme></Aboutme>
        </div>
        <div className='Footer'>
          <Footer></Footer>
        </div>
      </div>
    </>
  )
}

export default App
