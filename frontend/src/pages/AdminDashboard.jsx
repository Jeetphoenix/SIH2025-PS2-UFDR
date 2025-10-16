import React from 'react';
import { UserCircle, Search, Bell, Upload, ArrowLeft } from 'lucide-react';

export default function AdminDashboard() {
  const recentActivity = [
    { user: 'Ethan Carter', action: 'Uploaded new case data', timestamp: '2024-01-15 10:00 AM' },
    { user: 'Olivia Bennett', action: 'Generated report for case #123', timestamp: '2024-01-14 03:30 PM' },
    { user: 'Liam Harper', action: 'Accessed case #456', timestamp: '2024-01-14 09:15 AM' },
    { user: 'Ava Morgan', action: 'Updated user permissions', timestamp: '2024-01-13 02:45 PM' },
    { user: 'Noah Foster', action: 'Reviewed access logs', timestamp: '2024-01-13 11:20 AM' }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Navigation Bar */}
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="w-8 h-8 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded border border-gray-700">
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded"></div>
            <div>
              <div className="text-sm font-semibold">UFDR</div>
              <div className="text-xs text-gray-400">Admin</div>
            </div>
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
              <span>Dashboard Overview</span>
            </a>
            <a href="/adminchatbot" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
              <span className="text-lg">🤖</span>
              <span>AI Chatbot(Query Assistant)</span>
            </a>
            <a href="/adminpreviouschat" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
              <span className="text-lg">💬</span>
              <span>Previous Chat History</span>
            </a>
            <a href="/adminprereport" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
              <span className="text-lg">📄</span>
              <span>Previous Results</span>
            </a>
            {/* <a href="/adminaddmembers" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
              <span className="text-lg">🔐</span>
              <span>Authorized Access Control</span>
            </a> */}
            <a href="/adminmanageteam" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
              <span className="text-lg">👥</span>
              <span>Manage Teams</span>
            </a>
            <a href="/adminacesslog" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
              <span className="text-lg">📋</span>
              <span>Access Logs</span>
            </a>
            {/* <a href="/adminaddmembers" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
              <span className="text-lg">➕</span>
              <span>Add Members</span> */}
               <a href="/adminaddmembers" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
              <span className="text-lg">🔐</span>
              <span>Authorized Access Control</span>
            </a>
            
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Dashboard Overview</h1>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>UFDR</span>
            </div>
          </div>

          {/* Case Stats */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Case Stats</h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <div className="text-sm text-gray-400 mb-2">Total Cases</div>
                <div className="text-4xl font-bold">125</div>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <div className="text-sm text-gray-400 mb-2">Active Cases</div>
                <div className="text-4xl font-bold">75</div>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <div className="text-sm text-gray-400 mb-2">Closed Cases</div>
                <div className="text-4xl font-bold">50</div>
              </div>
            </div>
          </section>

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

          {/* User Overview */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">User Overview</h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <div className="text-sm text-gray-400 mb-2">Total Users</div>
                <div className="text-4xl font-bold">250</div>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <div className="text-sm text-gray-400 mb-2">Active Users</div>
                <div className="text-4xl font-bold">150</div>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <div className="text-sm text-gray-400 mb-2">Inactive Users</div>
                <div className="text-4xl font-bold">100</div>
              </div>
            </div>
          </section>

          {/* Recent Activity */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">User</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Action</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Timestamp</th>
                  </tr>
                </thead>
                <tbody>
                  {recentActivity.map((activity, index) => (
                    <tr key={index} className="border-b border-gray-800 hover:bg-gray-800">
                      <td className="px-6 py-4 text-sm">{activity.user}</td>
                      <td className="px-6 py-4 text-sm text-gray-400">{activity.action}</td>
                      <td className="px-6 py-4 text-sm text-gray-400">{activity.timestamp}</td>
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