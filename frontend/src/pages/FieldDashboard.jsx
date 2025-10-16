import React, { useState } from 'react';
import { UserCircle, Search, Bell, Upload, Lock } from 'lucide-react';

export default function FieldInvestigatorDashboard() {
  const [chatMessage, setChatMessage] = useState('');

  const assignedCases = [
    { id: '#102', title: 'Case #102 - Device Analysis', uploadedBy: 'Field', status: 'Pending', date: '2024-01-15' },
    { id: '#099', title: 'Case #099 - Data Recovery', uploadedBy: 'Field', status: 'Under Review', date: '2024-01-12' },
    { id: '#087', title: 'Case #087 - Evidence Collection', uploadedBy: 'Field', status: 'In Progress', date: '2024-01-08' }
  ];

  const previousReports = [
    { name: 'Case #102 - Initial Report', date: '2024-01-15', status: 'Submitted' },
    { name: 'Case #099 - Field Notes', date: '2024-01-12', status: 'Approved' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Navigation Bar */}
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-sm font-bold">
              JD
            </div>
            <div>
              <div className="text-xs text-gray-400">Field Investigator</div>
              <div className="text-xs text-gray-500">John Davis - ID: 45621</div>
            </div>
          </div>
          <div className="flex items-center gap-2 ml-8">
            <span className="text-lg">🔍</span>
            <span className="text-sm font-semibold">Field Investigation</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-800 rounded">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded">
            <Bell className="w-5 h-5" />
          </button>
          <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
            <UserCircle className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-900 min-h-screen border-r border-gray-800 p-4">
          <nav className="space-y-1">
            <a href="#" className="flex items-center gap-3 px-3 py-2 bg-gray-800 rounded text-sm">
              <span className="text-lg">📊</span>
              <span>Dashboard</span>
            </a>
          
            <a href="/fieldchatbot" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
              <span className="text-lg">🤖</span>
             <span>AI Chatbot (Query Assistant)</span>
              {/* <span className="ml-auto text-xs bg-yellow-900 text-yellow-300 px-2 py-0.5 rounded">Limited</span> */}
            </a>
            <a href="/fieldpreviouschat" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
              <span className="text-lg">💬</span>
              <span>Previous Chat History</span>
            </a>
            <a href="/fieldassignedcase" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
              <span className="text-lg">📋</span>
              <span>Assigned Cases</span>
            </a>
            <a href="/fieldrequestaccess" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
              <span className="text-lg">🔑</span>
              <span>Request Access</span>
            </a>
            <a href="/fieldprereport" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
              <span className="text-lg">📄</span>
              <span>Previous Reports</span>
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-8">Field Investigator Dashboard</h1>

          {/* Upload UFDR File */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Upload UFDR File</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
              <div className="border-2 border-dashed border-gray-700 rounded-lg p-12 text-center">
                <Upload className="w-12 h-12 mx-auto mb-4 text-gray-500" />
                <p className="text-gray-400 mb-2">Upload device UFDR for case submission</p>
                <p className="text-gray-500 text-sm mb-4">Drag and drop or click to browse</p>
                <button className="px-6 py-2 bg-gray-800 border border-gray-700 rounded hover:bg-gray-750">
                  Upload
                </button>
              </div>
            </div>
          </section>

          {/* AI Chatbot (Limited Access) */}
          {/* <section className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xl font-semibold">AI Chatbot</h2>
              <span className="text-xs bg-yellow-900 text-yellow-300 px-2 py-1 rounded">Limited Access</span>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
              <div className="bg-gray-800 rounded-lg p-4 mb-3 min-h-32 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Lock className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm">Basic query support only. Advanced features require admin approval.</p>
                </div>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Ask basic questions about your cases..."
                  className="flex-1 bg-gray-800 border border-gray-700 rounded px-4 py-2 text-sm focus:outline-none focus:border-gray-600"
                />
                <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm font-medium">
                  Send
                </button>
              </div>
            </div>
          </section> */}

          {/* Assigned Cases */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Assigned Cases</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Case ID</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Title</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Status</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {assignedCases.map((caseItem, index) => (
                    <tr key={index} className="border-b border-gray-800 hover:bg-gray-800">
                      <td className="px-6 py-4 text-sm font-medium">{caseItem.id}</td>
                      <td className="px-6 py-4 text-sm text-gray-400">{caseItem.title}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`px-3 py-1 rounded text-xs ${
                          caseItem.status === 'Pending' ? 'bg-yellow-900 text-yellow-300' :
                          caseItem.status === 'Under Review' ? 'bg-blue-900 text-blue-300' :
                          'bg-purple-900 text-purple-300'
                        }`}>
                          {caseItem.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-400">{caseItem.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Request Access */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Request Access</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-400 mb-4">Need access to additional features or case files?</p>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Describe what access you need..."
                  className="flex-1 bg-gray-800 border border-gray-700 rounded px-4 py-2 text-sm focus:outline-none focus:border-gray-600"
                />
                <button className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded text-sm font-medium whitespace-nowrap">
                  Submit Request
                </button>
              </div>
            </div>
          </section>

          {/* Previous Reports */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Previous Reports</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Report Name</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Date</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Status</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {previousReports.map((report, index) => (
                    <tr key={index} className="border-b border-gray-800 hover:bg-gray-800">
                      <td className="px-6 py-4 text-sm">{report.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-400">{report.date}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`px-3 py-1 rounded text-xs ${
                          report.status === 'Submitted' ? 'bg-blue-900 text-blue-300' :
                          'bg-green-900 text-green-300'
                        }`}>
                          {report.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <button className="px-4 py-1.5 bg-gray-800 border border-gray-700 rounded hover:bg-gray-750 text-sm">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}