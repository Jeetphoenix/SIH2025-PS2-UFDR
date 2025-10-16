
import React from 'react'

export default function ChatHistory(){
  return (
    <div className="max-w-4xl mx-auto card">
      <h2 className="text-xl font-semibold mb-4">AI Chat History</h2>
      <div className="space-y-3">
        <div className="bg-gray-800 p-3 rounded">[2024-01-15] Analyst: Summarize recent calls for suspect A</div>
        <div className="bg-gray-800 p-3 rounded">[2024-01-14] Investigator: Extract deleted media files</div>
      </div>
    </div>
  )
}
