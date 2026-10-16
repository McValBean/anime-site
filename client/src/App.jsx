import './App.css'
import Homepage from './pages/homepage'
import AboutPage from './pages/aboutpage'
import ContactPage from './pages/contactpage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
      </Routes>
    </Router>
  )
}

export default App
