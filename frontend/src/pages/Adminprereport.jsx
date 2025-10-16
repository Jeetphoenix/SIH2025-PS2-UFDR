import React, { useState } from 'react';
import { UserCircle, Search, Bell, FileText, Download, Eye, Calendar, Filter, X, CheckCircle, Clock, AlertCircle } from 'lucide-react';

export default function PreviousReportsPage() {
  const [selectedReport, setSelectedReport] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const reports = [
    {
      id: 1,
      reportId: 'RPT-2024-001',
      caseId: 'CASE-2024-001',
      title: 'Device Analysis Report - Samsung Galaxy',
      description: 'Comprehensive forensic analysis of Samsung Galaxy S21 device including call logs, messages, and location data.',
      createdBy: 'Agent Sarah',
      createdDate: '2024-10-10',
      status: 'Completed',
      fileSize: '2.4 MB',
      pages: 45,
      category: 'Device Analysis'
    },
    {
      id: 2,
      reportId: 'RPT-2024-002',
      caseId: 'CASE-2024-002',
      title: 'iPhone Data Recovery Report',
      description: 'Detailed report on recovered data from iPhone 12 Pro including deleted messages and media files.',
      createdBy: 'Agent John Davis',
      createdDate: '2024-10-09',
      status: 'Approved',
      fileSize: '3.1 MB',
      pages: 52,
      category: 'Data Recovery'
    },
    {
      id: 3,
      reportId: 'RPT-2024-003',
      caseId: 'CASE-2024-003',
      title: 'Laptop Forensic Investigation',
      description: 'Complete forensic examination of Dell XPS 15 laptop with browser history, file system analysis, and email extraction.',
      createdBy: 'Agent Sarah',
      createdDate: '2024-10-08',
      status: 'Under Review',
      fileSize: '4.8 MB',
      pages: 68,
      category: 'Computer Forensics'
    },
    {
      id: 4,
      reportId: 'RPT-2024-004',
      caseId: 'CASE-2024-004',
      title: 'Social Media Evidence Report',
      description: 'Analysis of social media activity including Facebook, Instagram, and Twitter data exports.',
      createdBy: 'Agent Michael Brown',
      createdDate: '2024-10-07',
      status: 'Completed',
      fileSize: '1.9 MB',
      pages: 34,
      category: 'Social Media'
    },
    {
      id: 5,
      reportId: 'RPT-2024-005',
      caseId: 'CASE-2024-005',
      title: 'Android Tablet Analysis Report',
      description: 'Forensic report on Samsung Galaxy Tab S8 including app data, browsing history, and user behavior patterns.',
      createdBy: 'Agent Sarah',
      createdDate: '2024-10-06',
      status: 'Draft',
      fileSize: '2.7 MB',
      pages: 41,
      category: 'Device Analysis'
    },
    {
      id: 6,
      reportId: 'RPT-2024-006',
      caseId: 'CASE-2024-006',
      title: 'Network Traffic Analysis',
      description: 'Detailed analysis of network traffic patterns, suspicious connections, and data transmission logs.',
      createdBy: 'Agent Robert Wilson',
      createdDate: '2024-10-05',
      status: 'Approved',
      fileSize: '5.2 MB',
      pages: 73,
      category: 'Network Analysis'
    }
  ];

  const getStatusIcon = (status) => {
    switch(status) {
      case 'Completed':
      case 'Approved':
        return <CheckCircle className="w-4 h-4" />;
      case 'Under Review':
        return <Clock className="w-4 h-4" />;
      case 'Draft':
        return <AlertCircle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Completed':
      case 'Approved':
        return 'bg-green-900 text-green-300';
      case 'Under Review':
        return 'bg-yellow-900 text-yellow-300';
      case 'Draft':
        return 'bg-gray-700 text-gray-300';
      default:
        return 'bg-gray-700 text-gray-300';
    }
  };

  const filteredReports = reports.filter(report => {
    const matchesStatus = filterStatus === 'all' || report.status === filterStatus;
    const matchesSearch = report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         report.caseId.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         report.reportId.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const handleDownload = (report) => {
    // Simulate PDF download
    alert(`Downloading ${report.reportId}.pdf (${report.fileSize})`);
  };

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
            <span className="text-lg">📄</span>
            <span className="text-sm font-semibold">Previous Reports</span>
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
            {/* <a href="#" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
              <span className="text-lg">📤</span>
              <span>Upload UFDR File</span>
            </a> */}
            <a href="#" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
              <span className="text-lg">🤖</span>
              <span>AI Chatbot(Query Assistant)</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
              <span className="text-lg">💬</span>
              <span>Previous Chat History</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 bg-gray-800 rounded text-sm">
              <span className="text-lg">📄</span>
              <span>Previous Reports</span>
            </a>
            {/* <a href="/adminaddmembers" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
              <span className="text-lg">🔐</span>
              <span>Authorized Access Control</span>
            </a> */}
            <a href="/adminmanageteam" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
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
                <h1 className="text-3xl font-bold mb-2">Previous Reports</h1>
                <p className="text-gray-400">View and download forensic investigation reports</p>
              </div>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Generate New Report
              </button>
            </div>

            {/* Filters and Search */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by report ID, case ID, or title..."
                    className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-gray-400" />
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-600"
                  >
                    <option value="all">All Status</option>
                    <option value="Completed">Completed</option>
                    <option value="Approved">Approved</option>
                    <option value="Under Review">Under Review</option>
                    <option value="Draft">Draft</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Reports Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredReports.map((report) => (
                <div
                  key={report.id}
                  className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{report.title}</h3>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <span>{report.reportId}</span>
                          <span>•</span>
                          <span>{report.caseId}</span>
                        </div>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(report.status)}`}>
                      {getStatusIcon(report.status)}
                      {report.status}
                    </span>
                  </div>

                  <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                    {report.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-gray-500">Category</span>
                      <p className="text-gray-300 font-medium">{report.category}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Created By</span>
                      <p className="text-gray-300 font-medium">{report.createdBy}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Date</span>
                      <p className="text-gray-300 font-medium flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {report.createdDate}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-500">Size</span>
                      <p className="text-gray-300 font-medium">{report.fileSize} • {report.pages} pages</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
                    <button
                      onClick={() => setSelectedReport(report)}
                      className="flex-1 px-4 py-2 bg-gray-800 hover:bg-gray-750 rounded-lg text-sm font-medium flex items-center justify-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      Preview
                    </button>
                    <button
                      onClick={() => handleDownload(report)}
                      className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Download PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredReports.length === 0 && (
              <div className="text-center py-12">
                <FileText className="w-16 h-16 text-gray-700 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Reports Found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Report Preview Modal */}
      {selectedReport && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">
          <div className="bg-gray-900 border border-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <div>
                <h2 className="text-2xl font-bold mb-1">{selectedReport.title}</h2>
                <p className="text-sm text-gray-400">{selectedReport.reportId} • {selectedReport.caseId}</p>
              </div>
              <button
                onClick={() => setSelectedReport(null)}
                className="p-2 hover:bg-gray-800 rounded-lg"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="bg-gray-950 rounded-lg p-8 mb-6">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <span className="text-sm text-gray-500">Report ID</span>
                    <p className="text-lg font-semibold">{selectedReport.reportId}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Case ID</span>
                    <p className="text-lg font-semibold">{selectedReport.caseId}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Created By</span>
                    <p className="text-lg font-semibold">{selectedReport.createdBy}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Date</span>
                    <p className="text-lg font-semibold">{selectedReport.createdDate}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Category</span>
                    <p className="text-lg font-semibold">{selectedReport.category}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Status</span>
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedReport.status)}`}>
                      {getStatusIcon(selectedReport.status)}
                      {selectedReport.status}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <span className="text-sm text-gray-500">Description</span>
                  <p className="text-gray-300 mt-2">{selectedReport.description}</p>
                </div>

                <div className="bg-gray-900 rounded-lg p-6 text-center">
                  <FileText className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                  <p className="text-gray-400 mb-2">PDF Document Preview</p>
                  <p className="text-sm text-gray-500">{selectedReport.pages} pages • {selectedReport.fileSize}</p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center gap-3 p-6 border-t border-gray-800">
              <button
                onClick={() => setSelectedReport(null)}
                className="px-6 py-2 bg-gray-800 hover:bg-gray-750 rounded-lg font-medium"
              >
                Close
              </button>
              <button
                onClick={() => handleDownload(selectedReport)}
                className="flex-1 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download PDF Report
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}