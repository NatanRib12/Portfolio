import Introduction from 'components/sections/introduction/introduction'
import './App.css'
import Navbar from './components/shared/navbar/navbar'  
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
      </div>
    </>
  )
}

export default App
