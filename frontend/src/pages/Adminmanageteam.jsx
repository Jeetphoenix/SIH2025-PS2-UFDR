import React, { useState } from 'react';
import { UserCircle, Search, Bell, Users, UserPlus, Shield, AlertCircle, X, Check, ChevronDown, Edit, Trash2, Eye } from 'lucide-react';

export default function ManageTeamsPage() {
  const [activeTab, setActiveTab] = useState('teams');
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [assignmentType, setAssignmentType] = useState('team'); // 'team' or 'individual'
  const [selectedCase, setSelectedCase] = useState('');
  const [selectedTeam, setSelectedTeam] = useState('');
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [selectedSupervisor, setSelectedSupervisor] = useState('');

  const teams = [
    {
      id: 1,
      name: 'Alpha Team',
      supervisor: 'Agent Sarah',
      members: 5,
      activeCases: 3,
      status: 'Active',
      createdDate: '2024-01-15',
      membersList: ['Agent Sarah', 'John Davis', 'Michael Brown', 'Emily Clark', 'Robert Wilson']
    },
    {
      id: 2,
      name: 'Beta Team',
      supervisor: 'Agent Michael',
      members: 4,
      activeCases: 2,
      status: 'Active',
      createdDate: '2024-02-10',
      membersList: ['Agent Michael', 'Lisa Anderson', 'David Taylor', 'Jessica Martinez']
    },
    {
      id: 3,
      name: 'Gamma Team',
      supervisor: 'Agent Robert',
      members: 6,
      activeCases: 4,
      status: 'Active',
      createdDate: '2024-03-05',
      membersList: ['Agent Robert', 'Thomas Moore', 'Patricia Garcia', 'James Lee', 'Linda White', 'Christopher Harris']
    }
  ];

  const cases = [
    { id: 'CASE-2024-001', title: 'Device Analysis - Samsung Galaxy', status: 'Open', assignedTo: 'Alpha Team' },
    { id: 'CASE-2024-002', title: 'iPhone Data Recovery', status: 'Open', assignedTo: 'Beta Team' },
    { id: 'CASE-2024-003', title: 'Laptop Forensic Investigation', status: 'Open', assignedTo: 'Unassigned' },
    { id: 'CASE-2024-004', title: 'Social Media Evidence Collection', status: 'Open', assignedTo: 'Gamma Team' },
    { id: 'CASE-2024-005', title: 'Android Tablet Analysis', status: 'Open', assignedTo: 'Unassigned' }
  ];

  const allMembers = [
    { id: 1, name: 'Agent Sarah', role: 'Digital Forensic Investigator', team: 'Alpha Team' },
    { id: 2, name: 'John Davis', role: 'Field Investigator', team: 'Alpha Team' },
    { id: 3, name: 'Michael Brown', role: 'Digital Forensic Investigator', team: 'Alpha Team' },
    { id: 4, name: 'Emily Clark', role: 'Field Investigator', team: 'Alpha Team' },
    { id: 5, name: 'Robert Wilson', role: 'Digital Forensic Investigator', team: 'Alpha Team' },
    { id: 6, name: 'Agent Michael', role: 'Digital Forensic Investigator', team: 'Beta Team' },
    { id: 7, name: 'Lisa Anderson', role: 'Field Investigator', team: 'Beta Team' },
    { id: 8, name: 'David Taylor', role: 'Digital Forensic Investigator', team: 'Beta Team' },
    { id: 9, name: 'Jessica Martinez', role: 'Field Investigator', team: 'Beta Team' },
    { id: 10, name: 'Agent Robert', role: 'Digital Forensic Investigator', team: 'Gamma Team' }
  ];

  const supervisors = allMembers.filter(m => m.role === 'Digital Forensic Investigator');

  const handleMemberToggle = (memberId) => {
    setSelectedMembers(prev => 
      prev.includes(memberId) 
        ? prev.filter(id => id !== memberId)
        : [...prev, memberId]
    );
  };

  const handleAssignSubmit = () => {
    if (assignmentType === 'team' && (!selectedCase || !selectedTeam || !selectedSupervisor)) {
      alert('Please fill all required fields for team assignment');
      return;
    }
    if (assignmentType === 'individual' && (!selectedCase || selectedMembers.length === 0 || !selectedSupervisor)) {
      alert('Please fill all required fields for individual assignment');
      return;
    }

    alert(`Case ${selectedCase} assigned successfully!`);
    setShowAssignModal(false);
    resetAssignmentForm();
  };

  const resetAssignmentForm = () => {
    setSelectedCase('');
    setSelectedTeam('');
    setSelectedMembers([]);
    setSelectedSupervisor('');
    setAssignmentType('team');
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
            <span className="text-lg">👥</span>
            <span className="text-sm font-semibold">Manage Teams</span>
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
            {/* <a href="adminaddmembers" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
              <span className="text-lg">🔐</span>
              <span>Authorized Access Control</span>
            </a> */}
            <a href="/adminmanageteam" className="flex items-center gap-3 px-3 py-2 bg-gray-800 rounded text-sm">
              <span className="text-lg">👥</span>
              <span>Manage Teams</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
              <span className="text-lg">📋</span>
              <span>Access Logs</span>
            </a>
            {/* <a href="/adminaddmembers" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
              <span className="text-lg">➕</span>
              <span>Add Members</span>
            </a> */}
             <a href="adminaddmembers" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
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
                <h1 className="text-3xl font-bold mb-2">Manage Teams</h1>
                <p className="text-gray-400">Organize teams and assign cases to investigators</p>
              </div>
              <button 
                onClick={() => setShowAssignModal(true)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium flex items-center gap-2"
              >
                <UserPlus className="w-4 h-4" />
                Assign Case
              </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-6 bg-gray-900 p-1 rounded-lg w-fit">
              <button
                onClick={() => setActiveTab('teams')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition ${
                  activeTab === 'teams' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Teams
                </span>
              </button>
              <button
                onClick={() => setActiveTab('assignments')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition ${
                  activeTab === 'assignments' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Case Assignments
                </span>
              </button>
            </div>

            {/* Teams Tab */}
            {activeTab === 'teams' && (
              <div className="space-y-6">
                {teams.map((team) => (
                  <div key={team.id} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                          <Users className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-1">{team.name}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <span className="flex items-center gap-1">
                              <Shield className="w-4 h-4" />
                              Supervisor: {team.supervisor}
                            </span>
                            <span>•</span>
                            <span>{team.members} Members</span>
                            <span>•</span>
                            <span>{team.activeCases} Active Cases</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-green-900 text-green-300 rounded-full text-xs font-medium">
                          {team.status}
                        </span>
                        <button className="p-2 hover:bg-gray-800 rounded">
                          <Edit className="w-4 h-4 text-gray-400" />
                        </button>
                      </div>
                    </div>

                    <div className="bg-gray-950 rounded-lg p-4 mb-4">
                      <h4 className="text-sm font-semibold mb-3 text-gray-300">Team Members</h4>
                      <div className="flex flex-wrap gap-2">
                        {team.membersList.map((member, index) => (
                          <div key={index} className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-sm">
                            {member}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>Created: {team.createdDate}</span>
                      <button className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Assignments Tab */}
            {activeTab === 'assignments' && (
              <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Case ID</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Case Title</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Status</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Assigned To</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-300">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cases.map((caseItem, index) => (
                      <tr key={index} className="border-b border-gray-800 hover:bg-gray-800">
                        <td className="px-6 py-4 text-sm font-medium">{caseItem.id}</td>
                        <td className="px-6 py-4 text-sm">{caseItem.title}</td>
                        <td className="px-6 py-4 text-sm">
                          <span className="px-3 py-1 bg-green-900 text-green-300 rounded-full text-xs">
                            {caseItem.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <span className={caseItem.assignedTo === 'Unassigned' ? 'text-gray-500' : 'text-gray-300'}>
                            {caseItem.assignedTo}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <div className="flex items-center gap-2">
                            <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs">
                              Reassign
                            </button>
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
          </div>
        </main>
      </div>

      {/* Assignment Modal */}
      {showAssignModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <h2 className="text-2xl font-bold">Assign Case</h2>
              <button
                onClick={() => {
                  setShowAssignModal(false);
                  resetAssignmentForm();
                }}
                className="p-2 hover:bg-gray-800 rounded-lg"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-6">
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
                    {cases.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.id} - {c.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Assignment Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Assignment Type <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setAssignmentType('team')}
                      className={`flex-1 p-4 border rounded-lg transition ${
                        assignmentType === 'team'
                          ? 'bg-blue-600 border-blue-500'
                          : 'bg-gray-800 border-gray-700 hover:border-gray-600'
                      }`}
                    >
                      <Users className="w-6 h-6 mx-auto mb-2" />
                      <div className="font-medium">Assign to Team</div>
                      <div className="text-xs text-gray-400 mt-1">Entire team works on case</div>
                    </button>
                    <button
                      onClick={() => setAssignmentType('individual')}
                      className={`flex-1 p-4 border rounded-lg transition ${
                        assignmentType === 'individual'
                          ? 'bg-blue-600 border-blue-500'
                          : 'bg-gray-800 border-gray-700 hover:border-gray-600'
                      }`}
                    >
                      <UserPlus className="w-6 h-6 mx-auto mb-2" />
                      <div className="font-medium">Assign Individual</div>
                      <div className="text-xs text-gray-400 mt-1">Select specific members</div>
                    </button>
                  </div>
                </div>

                {/* Team Selection */}
                {assignmentType === 'team' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Select Team <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={selectedTeam}
                      onChange={(e) => setSelectedTeam(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-600"
                    >
                      <option value="">Choose a team</option>
                      {teams.map((team) => (
                        <option key={team.id} value={team.name}>
                          {team.name} ({team.members} members)
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Individual Selection */}
                {assignmentType === 'individual' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Select Members <span className="text-red-500">*</span>
                    </label>
                    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 max-h-48 overflow-y-auto">
                      {allMembers.map((member) => (
                        <label
                          key={member.id}
                          className="flex items-center gap-3 p-2 hover:bg-gray-750 rounded cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={selectedMembers.includes(member.id)}
                            onChange={() => handleMemberToggle(member.id)}
                            className="w-4 h-4"
                          />
                          <div className="flex-1">
                            <div className="text-sm font-medium">{member.name}</div>
                            <div className="text-xs text-gray-500">{member.role} • {member.team}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      {selectedMembers.length} member(s) selected
                    </p>
                  </div>
                )}

                {/* Supervisor Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Assign Supervisor <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={selectedSupervisor}
                    onChange={(e) => setSelectedSupervisor(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-600"
                  >
                    <option value="">Choose a supervisor</option>
                    {supervisors.map((supervisor) => (
                      <option key={supervisor.id} value={supervisor.name}>
                        {supervisor.name} ({supervisor.team})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Info Box */}
                <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4 flex gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-blue-400 mb-1">Assignment Notice</p>
                    <p className="text-blue-300">
                      All assigned members will be notified via email. The supervisor will have full access to case details and progress tracking.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center gap-3 p-6 border-t border-gray-800">
              <button
                onClick={() => {
                  setShowAssignModal(false);
                  resetAssignmentForm();
                }}
                className="px-6 py-2 bg-gray-800 hover:bg-gray-750 rounded-lg font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleAssignSubmit}
                className="flex-1 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium flex items-center justify-center gap-2"
              >
                <Check className="w-4 h-4" />
                Assign Case
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}