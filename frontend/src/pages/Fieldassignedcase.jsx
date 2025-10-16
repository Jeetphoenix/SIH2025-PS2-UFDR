import React, { useState } from 'react';
import { UserCircle, Search, Bell, FileText, Lock, Eye, AlertCircle, Calendar, Clock, MapPin, Upload } from 'lucide-react';

export default function FieldAssignedCases() {
  const [selectedCase, setSelectedCase] = useState(null);

  const assignedCases = [
    {
      id: 1,
      caseId: 'CASE-2024-102',
      title: 'Device Analysis - Evidence Collection',
      description: 'Field investigation required for mobile device seized from suspect location.',
      assignedDate: '2024-10-08',
      dueDate: '2024-10-15',
      priority: 'High',
      status: 'In Progress',
      location: 'Downtown Area, Sector 12',
      assignedBy: 'Agent Sarah',
      supervisor: 'Agent Michael',
      myRole: 'Evidence Collector',
      accessLevel: 'Limited',
      tasks: [
        { id: 1, task: 'Collect device from evidence locker', status: 'Completed' },
        { id: 2, task: 'Upload UFDR file to system', status: 'In Progress' },
        { id: 3, task: 'Document chain of custody', status: 'Pending' }
      ]
    },
    {
      id: 2,
      caseId: 'CASE-2024-099',
      title: 'Field Survey - Location Analysis',
      description: 'Conduct field survey and gather location-based evidence for ongoing investigation.',
      assignedDate: '2024-10-05',
      dueDate: '2024-10-12',
      priority: 'Medium',
      status: 'Under Review',
      location: 'Industrial Zone, Block B',
      assignedBy: 'Agent Robert',
      supervisor: 'Agent Sarah',
      myRole: 'Field Surveyor',
      accessLevel: 'Limited',
      tasks: [
        { id: 1, task: 'Visit crime scene location', status: 'Completed' },
        { id: 2, task: 'Photograph evidence markers', status: 'Completed' },
        { id: 3, task: 'Submit field report', status: 'Completed' }
      ]
    },
    {
      id: 3,
      caseId: 'CASE-2024-087',
      title: 'Evidence Documentation',
      description: 'Document and catalog physical evidence collected during raid operation.',
      assignedDate: '2024-10-01',
      dueDate: '2024-10-10',
      priority: 'Low',
      status: 'Pending Assignment',
      location: 'Headquarters Evidence Room',
      assignedBy: 'Admin',
      supervisor: 'Agent Michael',
      myRole: 'Documentation Officer',
      accessLevel: 'Limited',
      tasks: [
        { id: 1, task: 'Review evidence inventory', status: 'Pending' },
        { id: 2, task: 'Create documentation log', status: 'Pending' },
        { id: 3, task: 'Upload photographs', status: 'Pending' }
      ]
    }
  ];

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'High': return 'bg-red-900 text-red-300';
      case 'Medium': return 'bg-yellow-900 text-yellow-300';
      case 'Low': return 'bg-blue-900 text-blue-300';
      default: return 'bg-gray-700 text-gray-300';
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'In Progress': return 'bg-blue-900 text-blue-300';
      case 'Under Review': return 'bg-yellow-900 text-yellow-300';
      case 'Pending Assignment': return 'bg-gray-700 text-gray-300';
      case 'Completed': return 'bg-green-900 text-green-300';
      default: return 'bg-gray-700 text-gray-300';
    }
  };

  const getTaskStatusColor = (status) => {
    switch(status) {
      case 'Completed': return 'text-green-400';
      case 'In Progress': return 'text-blue-400';
      case 'Pending': return 'text-gray-500';
      default: return 'text-gray-500';
    }
  };

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
            <span className="text-lg">📋</span>
            <span className="text-sm font-semibold">Assigned Cases</span>
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

      <div className="flex h-[calc(100vh-57px)]">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-900 border-r border-gray-800 p-4">
          <nav className="space-y-1">
            <a href="/field" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
              <span className="text-lg">📊</span>
              <span>Dashboard</span>
            </a>
            <a href="/filedchatbot" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
              <span className="text-lg">🤖</span>
              <span>AI Chatbot (Query Assistant)</span>
            </a>
            <a href="/fieldpreviouschat" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
              <span className="text-lg">💬</span>
              <span>Previous Chat History</span>
            </a>
            <a href="/filedassignedcase" className="flex items-center gap-3 px-3 py-2 bg-gray-800 rounded text-sm">
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
        <main className="flex-1 overflow-y-auto">
          <div className="p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">My Assigned Cases</h1>
              <p className="text-gray-400">View and manage your assigned field investigation cases</p>
            </div>

            {/* Cases Grid */}
            <div className="grid grid-cols-1 gap-6 mb-8">
              {assignedCases.map((caseItem) => (
                <div
                  key={caseItem.id}
                  className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="w-6 h-6 text-green-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold">{caseItem.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(caseItem.priority)}`}>
                            {caseItem.priority} Priority
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(caseItem.status)}`}>
                            {caseItem.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mb-3">{caseItem.caseId}</p>
                        <p className="text-sm text-gray-300 mb-4">{caseItem.description}</p>

                        {/* Case Details Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div>
                            <span className="text-xs text-gray-500">My Role</span>
                            <p className="text-sm font-medium text-gray-300">{caseItem.myRole}</p>
                          </div>
                          <div>
                            <span className="text-xs text-gray-500">Supervisor</span>
                            <p className="text-sm font-medium text-gray-300">{caseItem.supervisor}</p>
                          </div>
                          <div>
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              Assigned Date
                            </span>
                            <p className="text-sm font-medium text-gray-300">{caseItem.assignedDate}</p>
                          </div>
                          <div>
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              Due Date
                            </span>
                            <p className="text-sm font-medium text-gray-300">{caseItem.dueDate}</p>
                          </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                          <MapPin className="w-4 h-4" />
                          <span>{caseItem.location}</span>
                        </div>

                        {/* Tasks Progress */}
                        <div className="bg-gray-950 rounded-lg p-4 mb-4">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-sm font-semibold text-gray-300">My Tasks</h4>
                            <span className="text-xs text-gray-500">
                              {caseItem.tasks.filter(t => t.status === 'Completed').length} / {caseItem.tasks.length} Completed
                            </span>
                          </div>
                          <div className="space-y-2">
                            {caseItem.tasks.map((task) => (
                              <div key={task.id} className="flex items-center gap-2 text-sm">
                                <div className={`w-2 h-2 rounded-full ${
                                  task.status === 'Completed' ? 'bg-green-500' :
                                  task.status === 'In Progress' ? 'bg-blue-500' :
                                  'bg-gray-600'
                                }`}></div>
                                <span className={getTaskStatusColor(task.status)}>{task.task}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Access Level Notice */}
                        <div className="bg-yellow-900/20 border border-yellow-800 rounded-lg p-3 flex items-start gap-2 mb-4">
                          <Lock className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                          <div className="text-xs text-yellow-300">
                            <span className="font-medium">Limited Access:</span> You have field investigator permissions. Full case analysis requires supervisor approval.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
                    <button 
                      onClick={() => setSelectedCase(caseItem)}
                      className="px-4 py-2 bg-gray-800 hover:bg-gray-750 rounded-lg text-sm font-medium flex items-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                    <button className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-sm font-medium flex items-center gap-2">
                      <Upload className="w-4 h-4" />
                      Upload Evidence
                    </button>
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Submit Report
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {assignedCases.length === 0 && (
              <div className="text-center py-12">
                <FileText className="w-16 h-16 text-gray-700 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Cases Assigned</h3>
                <p className="text-gray-400">You don't have any assigned cases at the moment.</p>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Case Detail Modal */}
      {selectedCase && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <div>
                <h2 className="text-2xl font-bold mb-1">{selectedCase.title}</h2>
                <p className="text-sm text-gray-400">{selectedCase.caseId}</p>
              </div>
              <button
                onClick={() => setSelectedCase(null)}
                className="p-2 hover:bg-gray-800 rounded-lg"
              >
                <span className="text-2xl">×</span>
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-6">
                {/* Case Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Case Information</h3>
                  <div className="bg-gray-950 rounded-lg p-4 space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm text-gray-500">Case ID</span>
                        <p className="font-medium">{selectedCase.caseId}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Status</span>
                        <p><span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(selectedCase.status)}`}>
                          {selectedCase.status}
                        </span></p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Priority</span>
                        <p><span className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(selectedCase.priority)}`}>
                          {selectedCase.priority}
                        </span></p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">My Role</span>
                        <p className="font-medium">{selectedCase.myRole}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Assigned By</span>
                        <p className="font-medium">{selectedCase.assignedBy}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Supervisor</span>
                        <p className="font-medium">{selectedCase.supervisor}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Assigned Date</span>
                        <p className="font-medium">{selectedCase.assignedDate}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Due Date</span>
                        <p className="font-medium">{selectedCase.dueDate}</p>
                      </div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Location</span>
                      <p className="font-medium flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {selectedCase.location}
                      </p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Description</span>
                      <p className="text-gray-300">{selectedCase.description}</p>
                    </div>
                  </div>
                </div>

                {/* Task List */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">My Tasks</h3>
                  <div className="bg-gray-950 rounded-lg p-4 space-y-3">
                    {selectedCase.tasks.map((task) => (
                      <div key={task.id} className="flex items-center justify-between p-3 bg-gray-900 rounded">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${
                            task.status === 'Completed' ? 'bg-green-500' :
                            task.status === 'In Progress' ? 'bg-blue-500' :
                            'bg-gray-600'
                          }`}></div>
                          <span className="text-sm">{task.task}</span>
                        </div>
                        <span className={`text-xs font-medium ${getTaskStatusColor(task.status)}`}>
                          {task.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Access Restrictions */}
                <div className="bg-yellow-900/20 border border-yellow-800 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-yellow-400 mb-2">Access Restrictions</p>
                      <ul className="text-sm text-yellow-300 space-y-1">
                        <li>• Cannot access full forensic analysis data</li>
                        <li>• Cannot modify case status or priority</li>
                        <li>• Cannot assign or reassign cases</li>
                        <li>• Can only upload evidence and submit field reports</li>
                        <li>• Requires supervisor approval for sensitive actions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center gap-3 p-6 border-t border-gray-800">
              <button
                onClick={() => setSelectedCase(null)}
                className="px-6 py-2 bg-gray-800 hover:bg-gray-750 rounded-lg font-medium"
              >
                Close
              </button>
              <button className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-medium flex items-center gap-2">
                <Upload className="w-4 h-4" />
                Upload Evidence
              </button>
              <button className="flex-1 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium flex items-center justify-center gap-2">
                <FileText className="w-4 h-4" />
                Submit Field Report
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}