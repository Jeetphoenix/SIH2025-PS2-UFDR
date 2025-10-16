
import React from 'react'

export default function AccessLogs(){
  return (
    <div className="max-w-4xl mx-auto card">
      <h2 className="text-xl font-semibold mb-4">Access Logs (Admin)</h2>
      <table className="w-full text-sm">
        <thead className="text-gray-400"><tr><th>User</th><th>Action</th><th>When</th></tr></thead>
        <tbody>
          <tr className="border-t border-gray-700"><td>Noah Foster</td><td>Reviewed access logs</td><td>2024-01-13 11:20 AM</td></tr>
          <tr className="border-t border-gray-700"><td>Ava Morgan</td><td>Updated user permissions</td><td>2024-01-13 05:45 PM</td></tr>
        </tbody>
      </table>
    </div>
  )
}
