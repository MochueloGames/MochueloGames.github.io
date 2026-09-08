import { Routes, Route } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Privacy from './pages/Privacy'

function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;