
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/Home'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router} from 'react-router-dom'

function App() {
  
  return (
    <>
    <Router>
      <Navbar/>
      <HomePage/>
      <Footer/>
    </Router>
    </>
  )
}

export default App
