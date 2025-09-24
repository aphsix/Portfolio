import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Works from './pages/Works'
import Posts from './pages/Posts'
import Uses from './pages/Uses'
import ProjectDetail from './pages/ProjectDetail'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/works" element={<Works />} />
              <Route path="/works/:projectId" element={<ProjectDetail />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/uses" element={<Uses />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App