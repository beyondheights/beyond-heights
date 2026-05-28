import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Home } from './pages/Home'
import Donate from './pages/Donate/Donate'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-[#05112D]/30 overflow-x-hidden">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
