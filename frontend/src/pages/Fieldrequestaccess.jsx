import React, { useState } from 'react';
import { UserCircle, Search, Bell, Lock, Send, FileText, AlertCircle, Clock, CheckCircle, XCircle, Eye } from 'lucide-react';

export default function FieldRequestAccess() {
  const [formData, setFormData] = useState({
    caseId: '',
    accessType: '',
    reason: '',
    urgency: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const availableCases = [
    { id: 'CASE-2024-001', title: 'Device Analysis - Samsung Galaxy', assignedTo: 'Alpha Team' },
    { id: 'CASE-2024-002', title: 'iPhone Data Recovery', assignedTo: 'Beta Team' },
    { id: 'CASE-2024-003', title: 'Laptop Forensic Investigation', assignedTo: 'Gamma Team' },
    { id: 'CASE-2024-004', title: 'Social Media Evidence Collection', assignedTo: 'Alpha Team' },
    { id: 'CASE-2024-005', title: 'Android Tablet Analysis', assignedTo: 'Unassigned' }
  ];

  const myRequests = [
    {
      id: 1,
      requestId: 'REQ-2024-015',
      caseId: 'CASE-2024-003',
      caseTitle: 'Laptop Forensic Investigation',
      accessType: 'View Case Details',
      reason: 'Need to review device analysis reports for correlation with field evidence I collected at the scene.',
      urgency: 'High',
      requestDate: '2024-10-10 14:30',
      status: 'Pending',
      reviewedBy: null,
      reviewDate: null,
      adminComments: null
    },
    {
      id: 2,
      requestId: 'REQ-2024-012',
      caseId: 'CASE-2024-001',
      caseTitle: 'Device Analysis - Samsung Galaxy',
      accessType: 'Download Reports',
      reason: 'Require access to forensic reports to prepare comprehensive field documentation for court proceedings.',
      urgency: 'Medium',
      requestDate: '2024-10-09 11:20',
      status: 'Approved',
      reviewedBy: 'Admin',
      reviewDate: '2024-10-09 15:30',
      adminComments: 'Access granted for 7 days. Limited to report download only.'
    },
    {
      id: 3,
      requestId: 'REQ-2024-008',
      caseId: 'CASE-2024-004',
      caseTitle: 'Social Media Evidence Collection',
      accessType: 'View Chat History',
      reason: 'Need access to view chat history to cross-reference with physical evidence collected.',
      urgency: 'Low',
      requestDate: '2024-10-07 09:15',
      status: 'Rejected',
      reviewedBy: 'Admin',
      reviewDate: '2024-10-07 16:45',
      adminComments: 'Insufficient clearance level. Please contact your supervisor for escalation.'
    },
    {
      id: 4,
      requestId: 'REQ-2024-006',
      caseId: 'CASE-2024-002',
      caseTitle: 'iPhone Data Recovery',
      accessType: 'View Case Details',
      reason: 'Required to verify evidence chain of custody and update field notes accordingly.',
      urgency: 'Medium',
      requestDate: '2024-10-05 13:45',
      status: 'Approved',
      reviewedBy: 'Admin',
      reviewDate: '2024-10-05 17:00',
      adminComments: 'Approved. Access valid until case closure.'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (!formData.caseId || !formData.accessType || !formData.reason || !formData.urgency) {
      alert('Please fill all required fields');
      return;
    }

    setShowSuccess(true);
    
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        caseId: '',
        accessType: '',
        reason: '',
        urgency: ''
      });
    }, 3000);
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Pending': return 'bg-yellow-900 text-yellow-300';
      case 'Approved': return 'bg-green-900 text-green-300';
      case 'Rejected': return 'bg-red-900 text-red-300';
      default: return 'bg-gray-700 text-gray-300';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'Pending': return <Clock className="w-4 h-4" />;
      case 'Approved': return <CheckCircle className="w-4 h-4" />;
      case 'Rejected': return <XCircle className="w-4 h-4" />;
      default: return null;
    }
  };

  const getUrgencyColor = (urgency) => {
    switch(urgency) {
      case 'High': return 'bg-red-900 text-red-300';
      case 'Medium': return 'bg-yellow-900 text-yellow-300';
      case 'Low': return 'bg-blue-900 text-blue-300';
      default: return 'bg-gray-700 text-gray-300';
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
            <span className="text-lg">🔑</span>
            <span className="text-sm font-semibold">Request Access</span>
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
            <a href="/fieldassignedcase" className="flex items-center gap-3 px-3 py-2 bg-gray-800 rounded text-sm">
              <span className="text-lg">📋</span>
              <span>Assigned Cases</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
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
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Request Case Access</h1>
                <p className="text-gray-400">Submit access requests for cases requiring additional permissions</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Request Form */}
                <div>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                        <Lock className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold">New Access Request</h2>
                        <p className="text-sm text-gray-400">Fill out the form to request access</p>
                      </div>
                    </div>

                    {/* Success Message */}
                    {showSuccess && (
                      <div className="bg-green-900 border border-green-700 rounded-lg p-4 mb-6 flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <div>
                          <p className="font-semibold text-green-400">Request Submitted Successfully!</p>
                          <p className="text-sm text-green-300">Your request has been sent to the admin for review.</p>
                        </div>
                      </div>
                    )}

                    <div className="space-y-5">
                      {/* Select Case */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Select Case <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="caseId"
                          value={formData.caseId}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-600"
                        >
                          <option value="">Choose a case</option>
                          {availableCases.map((c) => (
                            <option key={c.id} value={c.id}>
                              {c.id} - {c.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Access Type */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Access Type <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="accessType"
                          value={formData.accessType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-600"
                        >
                          <option value="">Select access type</option>
                          <option value="View Case Details">View Case Details</option>
                          <option value="View Chat History">View Chat History</option>
                          <option value="Download Reports">Download Reports</option>
                          <option value="Access Forensic Data">Access Forensic Data</option>
                          <option value="Modify Case Data">Modify Case Data</option>
                        </select>
                      </div>

                      {/* Urgency */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Urgency Level <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="urgency"
                          value={formData.urgency}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-600"
                        >
                          <option value="">Select urgency</option>
                          <option value="High">High - Urgent case requirement</option>
                          <option value="Medium">Medium - Standard request</option>
                          <option value="Low">Low - Non-urgent access</option>
                        </select>
                      </div>

                      {/* Reason */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Reason for Access <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="reason"
                          value={formData.reason}
                          onChange={handleInputChange}
                          rows="5"
                          placeholder="Provide a detailed explanation for why you need this access..."
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-600 resize-none"
                        ></textarea>
                        <p className="text-xs text-gray-500 mt-2">Be specific about how this access will help your investigation</p>
                      </div>

                      {/* Info Box */}
                      <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4 flex gap-3">
                        <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <div className="text-sm">
                          <p className="font-medium text-blue-400 mb-1">Request Review Process</p>
                          <p className="text-blue-300">
                            Your request will be reviewed by the admin team. You'll receive an email notification once your request is approved or rejected. Average review time: 2-4 hours.
                          </p>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <button
                        onClick={handleSubmit}
                        className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium flex items-center justify-center gap-2"
                      >
                        <Send className="w-5 h-5" />
                        Submit Request
                      </button>
                    </div>
                  </div>
                </div>

                {/* My Requests History */}
                <div>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                    <h2 className="text-xl font-bold mb-6">My Request History</h2>
                    
                    <div className="space-y-4">
                      {myRequests.map((request) => (
                        <div
                          key={request.id}
                          className="bg-gray-950 border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="font-semibold text-sm">{request.caseTitle}</h3>
                                <span className={`px-2 py-0.5 rounded text-xs font-medium flex items-center gap-1 ${getStatusColor(request.status)}`}>
                                  {getStatusIcon(request.status)}
                                  {request.status}
                                </span>
                              </div>
                              <p className="text-xs text-gray-500 mb-2">{request.requestId} • {request.caseId}</p>
                              <div className="flex items-center gap-2 mb-3">
                                <span className="text-xs text-gray-400">{request.accessType}</span>
                                <span className="text-xs text-gray-600">•</span>
                                <span className={`px-2 py-0.5 rounded text-xs ${getUrgencyColor(request.urgency)}`}>
                                  {request.urgency}
                                </span>
                              </div>
                              <p className="text-xs text-gray-400 mb-3 line-clamp-2">{request.reason}</p>
                              <div className="text-xs text-gray-500">
                                Requested: {request.requestDate}
                              </div>
                              {request.reviewDate && (
                                <div className="text-xs text-gray-500">
                                  Reviewed: {request.reviewDate} by {request.reviewedBy}
                                </div>
                              )}
                              {request.adminComments && (
                                <div className="mt-2 p-2 bg-gray-900 rounded text-xs">
                                  <span className="text-gray-500">Admin Comments:</span>
                                  <p className="text-gray-300 mt-1">{request.adminComments}</p>
                                </div>
                              )}
                            </div>
                          </div>
                          <button 
                            onClick={() => setSelectedRequest(request)}
                            className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1"
                          >
                            <Eye className="w-3 h-3" />
                            View Full Details
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Request Detail Modal */}
      {selectedRequest && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <div>
                <h2 className="text-2xl font-bold mb-1">Request Details</h2>
                <p className="text-sm text-gray-400">{selectedRequest.requestId}</p>
              </div>
              <button
                onClick={() => setSelectedRequest(null)}
                className="p-2 hover:bg-gray-800 rounded-lg"
              >
                <span className="text-2xl">×</span>
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-gray-500">Request ID</span>
                    <p className="font-medium">{selectedRequest.requestId}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Status</span>
                    <p><span className={`px-3 py-1 rounded text-xs font-medium flex items-center gap-1 w-fit ${getStatusColor(selectedRequest.status)}`}>
                      {getStatusIcon(selectedRequest.status)}
                      {selectedRequest.status}
                    </span></p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Case ID</span>
                    <p className="font-medium">{selectedRequest.caseId}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Urgency</span>
                    <p><span className={`px-2 py-1 rounded text-xs ${getUrgencyColor(selectedRequest.urgency)}`}>
                      {selectedRequest.urgency}
                    </span></p>
                  </div>
                </div>

                <div>
                  <span className="text-sm text-gray-500">Case Title</span>
                  <p className="font-medium">{selectedRequest.caseTitle}</p>
                </div>

                <div>
                  <span className="text-sm text-gray-500">Access Type</span>
                  <p className="font-medium">{selectedRequest.accessType}</p>
                </div>

                <div>
                  <span className="text-sm text-gray-500">Request Date</span>
                  <p className="font-medium">{selectedRequest.requestDate}</p>
                </div>

                {selectedRequest.reviewDate && (
                  <>
                    <div>
                      <span className="text-sm text-gray-500">Reviewed By</span>
                      <p className="font-medium">{selectedRequest.reviewedBy}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Review Date</span>
                      <p className="font-medium">{selectedRequest.reviewDate}</p>
                    </div>
                  </>
                )}

                <div>
                  <span className="text-sm text-gray-500">Reason for Request</span>
                  <p className="text-gray-300 bg-gray-950 rounded p-3 mt-2">{selectedRequest.reason}</p>
                </div>

                {selectedRequest.adminComments && (
                  <div>
                    <span className="text-sm text-gray-500">Admin Comments</span>
                    <p className="text-gray-300 bg-gray-950 rounded p-3 mt-2">{selectedRequest.adminComments}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center gap-3 p-6 border-t border-gray-800">
              <button
                onClick={() => setSelectedRequest(null)}
                className="flex-1 px-6 py-2 bg-gray-800 hover:bg-gray-750 rounded-lg font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}