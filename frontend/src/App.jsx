
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'
import ForensicDashboard from './pages/ForensicDashboard'
import FieldDashboard from './pages/FieldDashboard'
import Reports from './pages/Reports'
import ChatHistory from './pages/ChatHistory'
import AccessLogs from './pages/AccessLogs'
import Adminpreviouschat from './pages/Adminpreviouschat'
import Forensicpreviouschat from './pages/Forensicpreviouschat'
import Fieldpreviouschat from './pages/Fieldpreviouschat'
import Adminprereport from './pages/Adminprereport'
import Adminaddmembers from './pages/Adminaddmembers'
import Adminchatbot from './pages/Adminchatbot'
import Adminmanageteam from './pages/Adminmanageteam'
import Adminacesslog from './pages/Adminacesslog'
import Fieldchatbot from './pages/Fieldchatbot'
import Fieldprereport from './pages/Fieldprereport'
import Fieldassignedcase from './pages/Fieldassignedcase'
import Fieldrequestaccess from './pages/Fieldrequestaccess'

export default function App(){
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="bg-black/60 p-4 flex justify-between items-center">
        <div className="ml-4 text-xl font-semibold">UFDR</div>
        <nav className="space-x-4 mr-4 hidden md:block">
          <Link to="/" className="hover:underline">Overview</Link>
          <Link to="/admin" className="hover:underline">Admin</Link>
          <Link to="/forensic" className="hover:underline">Forensic</Link>
          <Link to="/field" className="hover:underline">Field</Link>
        </nav>
      </header>
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/login/:role" element={<Login/>} />
          <Route path="/admin" element={<AdminDashboard/>} />
          <Route path="/forensic" element={<ForensicDashboard/>} />
          <Route path="/field" element={<FieldDashboard/>} />
          <Route path="/reports" element={<Reports/>} />
          <Route path="/chathistory" element={<ChatHistory/>} />
          <Route path="/accesslogs" element={<AccessLogs/>} />
          <Route path="/adminpreviouschat" element={<Adminpreviouschat/>} />
          <Route path="/forensicpreviouschat" element={<Forensicpreviouschat/>} />
          <Route path="/fieldpreviouschat" element={<Fieldpreviouschat/>} />
          <Route path="/adminprereport" element={<Adminprereport/>} />
          <Route path="/adminaddmembers" element={<Adminaddmembers/>} />
          <Route path="/adminchatbot" element={<Adminchatbot/>} />
          <Route path="/adminmanageteam" element={<Adminmanageteam/>} />
          <Route path="/adminacesslog" element={<Adminacesslog/>} />
          <Route path="/fieldchatbot" element={<Fieldchatbot/>} />
           <Route path="/fieldprereport" element={<Fieldprereport/>} />
           <Route path="/fieldassignedcase" element={<Fieldassignedcase/>} />
           <Route path="/fieldrequestaccess" element={<Fieldrequestaccess/>} />
        </Routes>
      </main>
    </div>
  )
}
