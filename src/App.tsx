import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Monsters from './pages/Monsters'
import Weapons from './pages/Weapons'
import Cooking from './pages/Cooking'
import Shrines from './pages/Shrines'
import DivineBeasts from './pages/DivineBeasts'
import Trials from './pages/Trials'
import Koroks from './pages/Koroks'
import GettingStarted from './pages/GettingStarted'

export default function App() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 ml-60 flex flex-col">
        <Header />
        <div className="flex-1 overflow-y-auto p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/monsters" element={<Monsters />} />
            <Route path="/weapons" element={<Weapons />} />
            <Route path="/cooking" element={<Cooking />} />
            <Route path="/shrines" element={<Shrines />} />
            <Route path="/divine-beasts" element={<DivineBeasts />} />
            <Route path="/trials" element={<Trials />} />
            <Route path="/koroks" element={<Koroks />} />
            <Route path="/getting-started" element={<GettingStarted />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}
