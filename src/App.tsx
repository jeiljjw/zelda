import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import GlobalSearch from './components/GlobalSearch'
import Dashboard from './pages/Dashboard'
import Monsters from './pages/Monsters'
import Weapons from './pages/Weapons'
import Cooking from './pages/Cooking'
import Shrines from './pages/Shrines'
import DivineBeasts from './pages/DivineBeasts'
import Trials from './pages/Trials'
import Koroks from './pages/Koroks'
import GettingStarted from './pages/GettingStarted'
import Armor from './pages/Armor'
import MonsterDetail from './pages/MonsterDetail'
import WeaponDetail from './pages/WeaponDetail'
import ArmorDetail from './pages/ArmorDetail'
import ShrineDetail from './pages/ShrineDetail'
import DivineBeastDetail from './pages/DivineBeastDetail'
import TrialDetail from './pages/TrialDetail'
import KorokDetail from './pages/KorokDetail'
import Map from './pages/Map'

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const closeSidebar = () => setSidebarOpen(false)

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar mobileOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} onLink={closeSidebar} onSearch={() => setSearchOpen(true)} />
      <main className="flex-1 lg:ml-60 flex flex-col">
        <Header />
        <GlobalSearch open={searchOpen} onOpenChange={setSearchOpen} />
        <div className="flex-1 overflow-y-auto px-4 sm:px-6" style={{ paddingTop: '20px', paddingBottom: '120px' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/monsters" element={<Monsters />} />
            <Route path="/monsters/:id" element={<MonsterDetail />} />
            <Route path="/weapons" element={<Weapons />} />
            <Route path="/weapons/:id" element={<WeaponDetail />} />
            <Route path="/cooking" element={<Cooking />} />
            <Route path="/shrines" element={<Shrines />} />
            <Route path="/shrines/:id" element={<ShrineDetail />} />
            <Route path="/divine-beasts" element={<DivineBeasts />} />
            <Route path="/divine-beasts/:id" element={<DivineBeastDetail />} />
            <Route path="/trials" element={<Trials />} />
            <Route path="/trials/:id" element={<TrialDetail />} />
            <Route path="/koroks" element={<Koroks />} />
            <Route path="/koroks/:id" element={<KorokDetail />} />
            <Route path="/getting-started" element={<GettingStarted />} />
            <Route path="/armor" element={<Armor />} />
            <Route path="/armor/:id" element={<ArmorDetail />} />
            <Route path="/map" element={<Map />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}
