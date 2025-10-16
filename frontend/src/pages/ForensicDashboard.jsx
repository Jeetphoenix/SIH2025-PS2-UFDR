import React, { useState } from 'react';
import { UserCircle, Search, Bell, Upload } from 'lucide-react';

export default function ForensicDashboard() {
  const [chatMessage, setChatMessage] = useState('');

  const chartData = [
    { day: 'Mon', value: 30 },
    { day: 'Tue', value: 60 },
    { day: 'Wed', value: 45 },
    { day: 'Thu', value: 50 },
    { day: 'Fri', value: 85 },
    { day: 'Sat', value: 40 },
    { day: 'Sun', value: 70 }
  ];

  const reports = [
    { name: 'Report 1: Initial Findings', date: '2024-01-15', status: 'Completed' },
    { name: 'Report 2: Detailed Analysis', date: '2024-01-20', status: 'In Review' },
    { name: 'Report 3: Final Submission', date: '2024-01-25', status: 'Submitted' }
  ];

  const maxValue = Math.max(...chartData.map(d => d.value));

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Navigation Bar */}
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-sm font-bold">
              AS
            </div>
            <div>
              <div className="text-xs text-gray-400">Agent Sarah</div>
              <div className="text-xs text-gray-500">ID: 78902</div>
            </div>
          </div>
          <div className="flex items-center gap-2 ml-8">
            <span className="text-lg">🏠</span>
            <span className="text-sm font-semibold">UFDR Analysis</span>
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
            <a href="#" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
              <span className="text-lg">📤</span>
              <span>Upload UFDR File</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
              <span className="text-lg">🤖</span>
              <span>AI Chatbot</span>
            </a>
            <a href="/forensicpreviouschat" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
              <span className="text-lg">💬</span>
              <span>Previous Chat History</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
              <span className="text-lg">📄</span>
              <span>Previous Reports</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
              <span className="text-lg">📨</span>
              <span>Submit Report to Admin</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
              <span className="text-lg">🔑</span>
              <span>Request Access</span>
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-8">Digital Forensic Investigator Dashboard</h1>

          {/* Upload UFDR File */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Upload UFDR File</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
              <div className="border-2 border-dashed border-gray-700 rounded-lg p-12 text-center">
                <Upload className="w-12 h-12 mx-auto mb-4 text-gray-500" />
                <p className="text-gray-400 mb-2">Drag and drop a UFDR file here</p>
                <p className="text-gray-500 text-sm mb-4">Or click to browse your files</p>
                <button className="px-6 py-2 bg-gray-800 border border-gray-700 rounded hover:bg-gray-750">
                  Browse Files
                </button>
              </div>
            </div>
          </section>

          {/* AI Chatbot */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-4">AI Chatbot</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
              <div className="bg-gray-800 rounded-lg p-4 mb-3 min-h-32">
                {/* Chat messages would appear here */}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-gray-800 border border-gray-700 rounded px-4 py-2 text-sm focus:outline-none focus:border-gray-600"
                />
                <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm font-medium">
                  Send
                </button>
              </div>
            </div>
          </section>

          {/* Previous Chat History */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Previous Chat History</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <div className="mb-4">
                <div className="text-sm text-gray-400 mb-1">Session 1: Data Overview</div>
                <div className="text-4xl font-bold mb-1">1200</div>
                <div className="text-sm text-green-500">Last 7 days +5%</div>
              </div>
              
              {/* Chart */}
              <div className="flex items-end justify-between h-40 gap-2">
                {chartData.map((data, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center justify-end">
                    <div 
                      className="w-full bg-gray-700 rounded-t"
                      style={{ height: `${(data.value / maxValue) * 100}%` }}
                    ></div>
                    <div className="text-xs text-gray-500 mt-2">{data.day}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Reports */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Reports</h2>
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
                  {reports.map((report, index) => (
                    <tr key={index} className="border-b border-gray-800 hover:bg-gray-800">
                      <td className="px-6 py-4 text-sm">{report.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-400">{report.date}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`px-3 py-1 rounded text-xs ${
                          report.status === 'Completed' ? 'bg-green-900 text-green-300' :
                          report.status === 'In Review' ? 'bg-yellow-900 text-yellow-300' :
                          'bg-blue-900 text-blue-300'
                        }`}>
                          {report.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <button className="px-4 py-1.5 bg-gray-800 border border-gray-700 rounded hover:bg-gray-750 text-sm">
                          Download
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