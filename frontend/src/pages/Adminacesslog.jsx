import React, { useState } from 'react';
import { UserCircle, Search, Bell, Shield, Clock, Check, X, Eye, Filter, Calendar, AlertCircle, UserPlus, FileText, Info } from 'lucide-react';

export default function AccessLogsPage() {
  const [activeTab, setActiveTab] = useState('requests');
  const [showGrantModal, setShowGrantModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedCase, setSelectedCase] = useState('');
  const [accessLevel, setAccessLevel] = useState('');
  const [accessDuration, setAccessDuration] = useState('');

  const accessRequests = [
    {
      id: 1,
      requestId: 'REQ-2024-001',
      userName: 'John Davis',
      userRole: 'Field Investigator',
      caseId: 'CASE-2024-003',
      caseTitle: 'Laptop Forensic Investigation',
      reason: 'Need access to review device analysis reports for correlation with field evidence collected.',
      requestedDate: '2024-10-10 14:30',
      status: 'Pending',
      priority: 'High'
    },
    {
      id: 2,
      requestId: 'REQ-2024-002',
      userName: 'Emily Clark',
      userRole: 'Digital Forensic Investigator',
      caseId: 'CASE-2024-001',
      caseTitle: 'Device Analysis - Samsung Galaxy',
      reason: 'Require access to cross-reference message patterns with ongoing investigation.',
      requestedDate: '2024-10-10 11:15',
      status: 'Pending',
      priority: 'Medium'
    },
    {
      id: 3,
      requestId: 'REQ-2024-003',
      userName: 'Michael Brown',
      userRole: 'Field Investigator',
      caseId: 'CASE-2024-002',
      caseTitle: 'iPhone Data Recovery',
      reason: 'Need to verify recovered data against physical evidence from crime scene.',
      requestedDate: '2024-10-09 16:45',
      status: 'Pending',
      priority: 'Low'
    },
    {
      id: 4,
      requestId: 'REQ-2024-004',
      userName: 'Robert Wilson',
      userRole: 'Digital Forensic Investigator',
      caseId: 'CASE-2024-004',
      caseTitle: 'Social Media Evidence Collection',
      reason: 'Requesting access to analyze social media patterns and connections.',
      requestedDate: '2024-10-09 09:20',
      status: 'Approved',
      priority: 'High',
      approvedBy: 'Admin',
      approvedDate: '2024-10-09 10:00'
    },
    {
      id: 5,
      requestId: 'REQ-2024-005',
      userName: 'Lisa Anderson',
      userRole: 'Field Investigator',
      caseId: 'CASE-2024-005',
      caseTitle: 'Android Tablet Analysis',
      reason: 'Access denied - insufficient clearance level for this case.',
      requestedDate: '2024-10-08 13:30',
      status: 'Rejected',
      priority: 'Low',
      rejectedBy: 'Admin',
      rejectedDate: '2024-10-08 14:00'
    }
  ];

  const accessLogs = [
    {
      id: 1,
      userName: 'Agent Sarah',
      userRole: 'Digital Forensic Investigator',
      caseId: 'CASE-2024-001',
      action: 'Viewed Case Details',
      timestamp: '2024-10-10 18:45',
      ipAddress: '192.168.1.101',
      duration: '45 min'
    },
    {
      id: 2,
      userName: 'John Davis',
      userRole: 'Field Investigator',
      caseId: 'CASE-2024-002',
      action: 'Downloaded Report',
      timestamp: '2024-10-10 17:30',
      ipAddress: '192.168.1.102',
      duration: '5 min'
    },
    {
      id: 3,
      userName: 'Michael Brown',
      userRole: 'Digital Forensic Investigator',
      caseId: 'CASE-2024-003',
      action: 'Modified Case Data',
      timestamp: '2024-10-10 16:15',
      ipAddress: '192.168.1.103',
      duration: '1 hr 20 min'
    },
    {
      id: 4,
      userName: 'Emily Clark',
      userRole: 'Field Investigator',
      caseId: 'CASE-2024-001',
      action: 'Accessed Chat History',
      timestamp: '2024-10-10 15:00',
      ipAddress: '192.168.1.104',
      duration: '30 min'
    },
    {
      id: 5,
      userName: 'Robert Wilson',
      userRole: 'Digital Forensic Investigator',
      caseId: 'CASE-2024-004',
      action: 'Generated Report',
      timestamp: '2024-10-10 14:20',
      ipAddress: '192.168.1.105',
      duration: '2 hr 15 min'
    }
  ];

  const grantedAccess = [
    {
      id: 1,
      userName: 'John Davis',
      userRole: 'Field Investigator',
      caseId: 'CASE-2024-003',
      caseTitle: 'Laptop Forensic Investigation',
      accessLevel: 'Read Only',
      grantedBy: 'Admin',
      grantedDate: '2024-10-09',
      expiryDate: '2024-10-16',
      status: 'Active'
    },
    {
      id: 2,
      userName: 'Emily Clark',
      userRole: 'Digital Forensic Investigator',
      caseId: 'CASE-2024-002',
      caseTitle: 'iPhone Data Recovery',
      accessLevel: 'Read & Write',
      grantedBy: 'Admin',
      grantedDate: '2024-10-08',
      expiryDate: '2024-10-22',
      status: 'Active'
    },
    {
      id: 3,
      userName: 'Michael Brown',
      userRole: 'Field Investigator',
      caseId: 'CASE-2024-001',
      caseTitle: 'Device Analysis - Samsung Galaxy',
      accessLevel: 'Read Only',
      grantedBy: 'Admin',
      grantedDate: '2024-10-05',
      expiryDate: '2024-10-11',
      status: 'Expired'
    }
  ];

  const allUsers = [
    { name: 'John Davis', role: 'Field Investigator' },
    { name: 'Emily Clark', role: 'Field Investigator' },
    { name: 'Michael Brown', role: 'Digital Forensic Investigator' },
    { name: 'Robert Wilson', role: 'Digital Forensic Investigator' },
    { name: 'Lisa Anderson', role: 'Field Investigator' },
    { name: 'David Taylor', role: 'Digital Forensic Investigator' }
  ];

  const allCases = [
    { id: 'CASE-2024-001', title: 'Device Analysis - Samsung Galaxy' },
    { id: 'CASE-2024-002', title: 'iPhone Data Recovery' },
    { id: 'CASE-2024-003', title: 'Laptop Forensic Investigation' },
    { id: 'CASE-2024-004', title: 'Social Media Evidence Collection' },
    { id: 'CASE-2024-005', title: 'Android Tablet Analysis' }
  ];

  const handleApproveRequest = (requestId) => {
    alert(`Access request ${requestId} approved successfully!`);
  };

  const handleRejectRequest = (requestId) => {
    const reason = prompt('Please provide a reason for rejection:');
    if (reason) {
      alert(`Access request ${requestId} rejected. Reason: ${reason}`);
    }
  };

  const handleGrantAccess = () => {
    if (!selectedUser || !selectedCase || !accessLevel || !accessDuration) {
      alert('Please fill all required fields');
      return;
    }
    alert(`Access granted to ${selectedUser} for ${selectedCase}`);
    setShowGrantModal(false);
    setSelectedUser('');
    setSelectedCase('');
    setAccessLevel('');
    setAccessDuration('');
  };

  const handleRevokeAccess = (accessId) => {
    if (confirm('Are you sure you want to revoke this access?')) {
      alert(`Access revoked for ID: ${accessId}`);
    }
  };

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
      case 'Pending': return 'bg-yellow-900 text-yellow-300';
      case 'Approved': return 'bg-green-900 text-green-300';
      case 'Rejected': return 'bg-red-900 text-red-300';
      case 'Active': return 'bg-green-900 text-green-300';
      case 'Expired': return 'bg-gray-700 text-gray-300';
      default: return 'bg-gray-700 text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Navigation Bar */}
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
              AD
            </div>
            <div>
              <div className="text-xs text-gray-400">Administrator</div>
              <div className="text-xs text-gray-500">Admin Panel</div>
            </div>
          </div>
          <div className="flex items-center gap-2 ml-8">
            <span className="text-lg">🔐</span>
            <span className="text-sm font-semibold">Access Logs & Control</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-800 rounded">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
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
            <a href="/admin" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
              <span className="text-lg">📊</span>
              <span>Dashboard</span>
            </a>
            <a href="/adminchatbot" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
              <span className="text-lg">🤖</span>
              <span>AI Chatbot (Query Assistant)</span>
            </a>
            <a href="/adminpreviouschat" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
              <span className="text-lg">💬</span>
              <span>Previous Chat History</span>
            </a>
            <a href="/adminprereport" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
              <span className="text-lg">📄</span>
              <span>Previous Reports</span>
            </a>
          
            <a href="/adminmanageteam" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
              <span className="text-lg">👥</span>
              <span>Manage Teams</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 bg-gray-800 rounded text-sm">
              <span className="text-lg">📋</span>
              <span>Access Logs</span>
            </a>
            {/* <a href="#" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
              <span className="text-lg">➕</span>
              <span>Add Members</span>
            </a> */}
            <a href="/adminaddmembers" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
              <span className="text-lg">🔐</span>
              <span>Authorized Access Control</span>
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold mb-2">Access Logs & Control</h1>
                <p className="text-gray-400">Manage access requests and monitor system activity</p>
              </div>
              <button 
                onClick={() => setShowGrantModal(true)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium flex items-center gap-2"
              >
                <UserPlus className="w-4 h-4" />
                Grant Access
              </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-6 bg-gray-900 p-1 rounded-lg w-fit">
              <button
                onClick={() => setActiveTab('requests')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition relative ${
                  activeTab === 'requests' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Access Requests
                  <span className="px-2 py-0.5 bg-red-600 text-white text-xs rounded-full">3</span>
                </span>
              </button>
              <button
                onClick={() => setActiveTab('granted')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition ${
                  activeTab === 'granted' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Granted Access
                </span>
              </button>
              <button
                onClick={() => setActiveTab('logs')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition ${
                  activeTab === 'logs' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Activity Logs
                </span>
              </button>
            </div>

            {/* Access Requests Tab */}
            {activeTab === 'requests' && (
              <div className="space-y-4">
                {accessRequests.filter(req => req.status === 'Pending' || req.status === 'Approved' || req.status === 'Rejected').map((request) => (
                  <div key={request.id} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                          <Shield className="w-6 h-6 text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold">{request.userName}</h3>
                            <span className="text-sm text-gray-500">•</span>
                            <span className="text-sm text-gray-400">{request.userRole}</span>
                            <span className={`px-2 py-0.5 rounded text-xs font-medium ${getPriorityColor(request.priority)}`}>
                              {request.priority} Priority
                            </span>
                          </div>
                          <div className="text-sm text-gray-400 mb-3">
                            <span className="font-medium text-white">{request.caseId}</span> - {request.caseTitle}
                          </div>
                          <p className="text-sm text-gray-300 bg-gray-950 rounded p-3 mb-3">
                            <span className="font-medium text-gray-400">Reason:</span> {request.reason}
                          </p>
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              Requested: {request.requestedDate}
                            </span>
                            {request.approvedDate && (
                              <>
                                <span>•</span>
                                <span>Approved: {request.approvedDate} by {request.approvedBy}</span>
                              </>
                            )}
                            {request.rejectedDate && (
                              <>
                                <span>•</span>
                                <span>Rejected: {request.rejectedDate} by {request.rejectedBy}</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                        {request.status}
                      </span>
                    </div>

                    {request.status === 'Pending' && (
                      <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
                        <button
                          onClick={() => handleApproveRequest(request.requestId)}
                          className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-sm font-medium flex items-center justify-center gap-2"
                        >
                          <Check className="w-4 h-4" />
                          Approve Request
                        </button>
                        <button
                          onClick={() => handleRejectRequest(request.requestId)}
                          className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm font-medium flex items-center justify-center gap-2"
                        >
                          <X className="w-4 h-4" />
                          Reject Request
                        </button>
                        <button className="px-4 py-2 bg-gray-800 hover:bg-gray-750 rounded-lg text-sm font-medium flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          View Details
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Granted Access Tab */}
            {activeTab === 'granted' && (
              <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">User</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Case</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Access Level</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Granted Date</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Expiry</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Status</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {grantedAccess.map((access) => (
                      <tr key={access.id} className="border-b border-gray-800 hover:bg-gray-800">
                        <td className="px-6 py-4">
                          <div>
                            <div className="text-sm font-medium">{access.userName}</div>
                            <div className="text-xs text-gray-500">{access.userRole}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div>
                            <div className="text-sm font-medium">{access.caseId}</div>
                            <div className="text-xs text-gray-500">{access.caseTitle}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-xs font-medium">
                            {access.accessLevel}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-400">{access.grantedDate}</td>
                        <td className="px-6 py-4 text-sm text-gray-400">{access.expiryDate}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(access.status)}`}>
                            {access.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            {access.status === 'Active' && (
                              <button 
                                onClick={() => handleRevokeAccess(access.id)}
                                className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-xs font-medium"
                              >
                                Revoke
                              </button>
                            )}
                            <button className="p-1 hover:bg-gray-700 rounded">
                              <Eye className="w-4 h-4 text-gray-400" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Activity Logs Tab */}
            {activeTab === 'logs' && (
              <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">User</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Case ID</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Action</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Timestamp</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">IP Address</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {accessLogs.map((log) => (
                      <tr key={log.id} className="border-b border-gray-800 hover:bg-gray-800">
                        <td className="px-6 py-4">
                          <div>
                            <div className="text-sm font-medium">{log.userName}</div>
                            <div className="text-xs text-gray-500">{log.userRole}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium">{log.caseId}</td>
                        <td className="px-6 py-4 text-sm">{log.action}</td>
                        <td className="px-6 py-4 text-sm text-gray-400">{log.timestamp}</td>
                        <td className="px-6 py-4 text-sm text-gray-400 font-mono">{log.ipAddress}</td>
                        <td className="px-6 py-4 text-sm text-gray-400">{log.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Grant Access Modal */}
      {showGrantModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl max-w-2xl w-full">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <h2 className="text-2xl font-bold">Grant Case Access</h2>
              <button
                onClick={() => setShowGrantModal(false)}
                className="p-2 hover:bg-gray-800 rounded-lg"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Select User */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Select User <span className="text-red-500">*</span>
                </label>
                <select
                  value={selectedUser}
                  onChange={(e) => setSelectedUser(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-600"
                >
                  <option value="">Choose a user</option>
                  {allUsers.map((user, index) => (
                    <option key={index} value={user.name}>
                      {user.name} - {user.role}
                    </option>
                  ))}
                </select>
              </div>

              {/* Select Case */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Select Case <span className="text-red-500">*</span>
                </label>
                <select
                  value={selectedCase}
                  onChange={(e) => setSelectedCase(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-600"
                >
                  <option value="">Choose a case</option>
                  {allCases.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.id} - {c.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Access Level */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Access Level <span className="text-red-500">*</span>
                </label>
                <select
                  value={accessLevel}
                  onChange={(e) => setAccessLevel(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-600"
                >
                  <option value="">Choose access level</option>
                  <option value="Read Only">Read Only - View case details only</option>
                  <option value="Read & Write">Read & Write - View and modify case data</option>
                  <option value="Full Access">Full Access - Complete case control</option>
                </select>
              </div>

              {/* Access Duration */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Access Duration <span className="text-red-500">*</span>
                </label>
                <select
                  value={accessDuration}
                  onChange={(e) => setAccessDuration(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-600"
                >
                  <option value="">Select duration</option>
                  <option value="1h">1 Hour</option>
                  <option value="4h">4 Hours</option>
                  <option value="8h">8 Hours</option>
                  <option value="24h">24 Hours</option>
                  <option value="7d">7 Days</option>
                  <option value="30d">30 Days</option>
                  <option value="custom">Custom Duration</option>
                </select>

                {accessDuration === 'custom' && (
                  <div className="mt-3">
                    <input
                      type="datetime-local"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-600"
                      min={new Date().toISOString().slice(0, 16)}
                    />
                  </div>
                )}
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  rows="3"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="Add any additional information or instructions..."
                ></textarea>
              </div>

              {/* Info Box */}
              <div className="bg-blue-900/30 border border-blue-800 text-blue-100 p-4 rounded-lg text-sm">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Access Permissions</p>
                    <p className="mt-1 text-blue-200">
                      The selected user will receive an email notification with access details. You can revoke access at any time from the "Granted Access" tab.
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex justify-end gap-3 pt-4 border-t border-gray-800">
                <button
                  onClick={() => setShowGrantModal(false)}
                  className="px-6 py-2.5 border border-gray-700 hover:bg-gray-800 rounded-lg font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleGrantAccess}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium flex items-center gap-2 transition-colors"
                >
                  <Check className="w-4 h-4" />
                  Grant Access
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const renderGrantAccessModal = () => {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">
      <div className="bg-gray-900 border border-gray-800 rounded-xl max-w-2xl w-full">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <h2 className="text-2xl font-bold">Grant Case Access</h2>
          <button
            onClick={() => setShowGrantModal(false)}
            className="p-2 hover:bg-gray-800 rounded-lg"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          {/* Select User */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Select User <span className="text-red-500">*</span>
            </label>
            <select
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-600"
            >
              <option value="">Choose a user</option>
              {allUsers.map((user, index) => (
                <option key={index} value={user.name}>
                  {user.name} - {user.role}
                </option>
              ))}
            </select>
          </div>

          {/* Select Case */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Select Case <span className="text-red-500">*</span>
            </label>
            <select
              value={selectedCase}
              onChange={(e) => setSelectedCase(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-600"
            >
              <option value="">Choose a case</option>
              {allCases.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.id} - {c.title}
                </option>
              ))}
            </select>
          </div>

          {/* Access Level */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Access Level <span className="text-red-500">*</span>
            </label>
            <select
              value={accessLevel}
              onChange={(e) => setAccessLevel(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-600"
            >
              <option value="">Choose access level</option>
              <option value="Read Only">Read Only - View case details only</option>
              <option value="Read & Write">Read & Write - View and modify case data</option>
              <option value="Full Access">Full Access - Complete case control</option>
            </select>
          </div>

          {/* Access Duration */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Access Duration <span className="text-red-500">*</span>
            </label>
            <select
              value={accessDuration}
              onChange={(e) => setAccessDuration(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-600"
            >
              <option value="">Select duration</option>
              <option value="1h">1 Hour</option>
              <option value="4h">4 Hours</option>
              <option value="8h">8 Hours</option>
              <option value="24h">24 Hours</option>
              <option value="7d">7 Days</option>
              <option value="30d">30 Days</option>
              <option value="custom">Custom Duration</option>
            </select>

            {accessDuration === 'custom' && (
              <div className="mt-3">
                <input
                  type="datetime-local"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-600"
                  min={new Date().toISOString().slice(0, 16)}
                />
              </div>
            )}
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Additional Notes (Optional)
            </label>
            <textarea
              rows="3"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-600"
              placeholder="Add any additional information or instructions..."
            ></textarea>
          </div>

          {/* Info Box */}
          <div className="bg-blue-900/30 border border-blue-800 text-blue-100 p-4 rounded-lg text-sm">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Access Permissions</p>
                <p className="mt-1 text-blue-200">
                  The selected user will receive an email notification with access details. You can revoke access at any time from the "Granted Access" tab.
                </p>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="flex justify-end gap-3 pt-4 border-t border-gray-800">
            <button
              onClick={() => setShowGrantModal(false)}
              className="px-6 py-2.5 border border-gray-700 hover:bg-gray-800 rounded-lg font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleGrantAccess}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium flex items-center gap-2 transition-colors"
            >
              <Check className="w-4 h-4" />
              Grant Access
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Navigation Bar */}
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-3 flex items-center justify-between">
        {/* ... existing nav content ... */}
      </nav>

      <div className="flex h-[calc(100vh-57px)]">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-900 border-r border-gray-800 p-4">
          {/* ... existing sidebar content ... */}
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-8">
            {/* ... existing main content ... */}
          </div>
        </main>
      </div>

      {/* Grant Access Modal */}
      {showGrantModal && renderGrantAccessModal()}
    </div>
  );
};

// export default App;