import React, { useState } from 'react';
import { UserCircle, Search, Bell, MessageSquare, ChevronRight, Calendar, FileText, BarChart3, Send, ChevronDown } from 'lucide-react';

export default function ChatHistoryPage() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [selectedChart, setSelectedChart] = useState('overview');
  const [newMessage, setNewMessage] = useState('');

  const chatHistories = [
    {
      id: 1,
      caseId: 'CASE-2024-001',
      title: 'Device Analysis - Samsung Galaxy',
      date: '2024-10-10',
      time: '14:30',
      messageCount: 45,
      status: 'Active',
      ufdrFile: 'samsung_galaxy_s21.ufdr'
    },
    {
      id: 2,
      caseId: 'CASE-2024-002',
      title: 'iPhone Data Recovery',
      date: '2024-10-09',
      time: '11:20',
      messageCount: 32,
      status: 'Completed',
      ufdrFile: 'iphone_12_pro.ufdr'
    },
    {
      id: 3,
      caseId: 'CASE-2024-003',
      title: 'Laptop Forensic Investigation',
      date: '2024-10-08',
      time: '09:15',
      messageCount: 28,
      status: 'Active',
      ufdrFile: 'dell_laptop_xps15.ufdr'
    },
    {
      id: 4,
      caseId: 'CASE-2024-004',
      title: 'Social Media Evidence Collection',
      date: '2024-10-07',
      time: '16:45',
      messageCount: 56,
      status: 'Under Review',
      ufdrFile: 'social_media_export.ufdr'
    },
    {
      id: 5,
      caseId: 'CASE-2024-005',
      title: 'Android Tablet Analysis',
      date: '2024-10-06',
      time: '13:00',
      messageCount: 19,
      status: 'Completed',
      ufdrFile: 'samsung_tablet_s8.ufdr'
    }
  ];

  const chartOptions = [
    { value: 'overview', label: 'Data Overview' },
    { value: 'messages', label: 'Messages Timeline' },
    { value: 'calls', label: 'Call Records' },
    { value: 'location', label: 'Location History' },
    { value: 'apps', label: 'App Usage Statistics' },
    { value: 'contacts', label: 'Contact Network' }
  ];

  const sampleMessages = [
    { sender: 'user', text: 'Analyze the call records from the past week', time: '14:30' },
    { sender: 'ai', text: 'I found 47 call records in the past week. Here\'s the breakdown: 25 incoming calls, 22 outgoing calls. The most frequent contact was +91-9876543210 with 8 calls.', time: '14:31' },
    { sender: 'user', text: 'Show me location data for October 8th', time: '14:35' },
    { sender: 'ai', text: 'On October 8th, the device was primarily located in two areas: Downtown area (8:00 AM - 6:00 PM) and Residential area (6:30 PM - 11:00 PM). I\'ve highlighted these locations in the map visualization.', time: '14:36' },
    { sender: 'user', text: 'Extract all deleted messages', time: '14:40' },
    { sender: 'ai', text: 'Found 12 deleted messages in the database. 8 from WhatsApp and 4 from SMS. Would you like me to generate a detailed report?', time: '14:41' }
  ];

  const generateChartData = (type) => {
    switch(type) {
      case 'messages':
        return [
          { day: 'Mon', sent: 45, received: 52 },
          { day: 'Tue', sent: 38, received: 48 },
          { day: 'Wed', sent: 52, received: 55 },
          { day: 'Thu', sent: 41, received: 45 },
          { day: 'Fri', sent: 58, received: 62 },
          { day: 'Sat', sent: 35, received: 38 },
          { day: 'Sun', sent: 28, received: 32 }
        ];
      case 'calls':
        return [
          { type: 'Incoming', value: 125, color: 'bg-green-600' },
          { type: 'Outgoing', value: 98, color: 'bg-blue-600' },
          { type: 'Missed', value: 23, color: 'bg-red-600' }
        ];
      case 'apps':
        return [
          { name: 'WhatsApp', usage: 85 },
          { name: 'Instagram', usage: 72 },
          { name: 'Chrome', usage: 65 },
          { name: 'YouTube', usage: 58 },
          { name: 'Gmail', usage: 45 }
        ];
      default:
        return [];
    }
  };

  const renderChart = () => {
    const data = generateChartData(selectedChart);
    
    if (selectedChart === 'overview') {
      return (
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <h4 className="text-sm text-gray-400 mb-2">Total Messages</h4>
            <div className="text-3xl font-bold">2,847</div>
            <div className="text-sm text-green-400 mt-1">+12% from last week</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h4 className="text-sm text-gray-400 mb-2">Call Records</h4>
            <div className="text-3xl font-bold">246</div>
            <div className="text-sm text-blue-400 mt-1">23 unique contacts</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h4 className="text-sm text-gray-400 mb-2">Location Points</h4>
            <div className="text-3xl font-bold">1,523</div>
            <div className="text-sm text-purple-400 mt-1">15 days tracked</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h4 className="text-sm text-gray-400 mb-2">Installed Apps</h4>
            <div className="text-3xl font-bold">87</div>
            <div className="text-sm text-orange-400 mt-1">12 suspicious apps</div>
          </div>
        </div>
      );
    }

    if (selectedChart === 'messages') {
      const maxValue = Math.max(...data.map(d => Math.max(d.sent, d.received)));
      return (
        <div className="space-y-4">
          <div className="flex gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-600 rounded"></div>
              <span>Sent</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-600 rounded"></div>
              <span>Received</span>
            </div>
          </div>
          <div className="flex items-end justify-between h-64 gap-4">
            {data.map((item, index) => (
              <div key={index} className="flex-1 flex flex-col items-center justify-end gap-2">
                <div className="w-full flex gap-1 items-end justify-center h-full">
                  <div 
                    className="w-1/2 bg-blue-600 rounded-t"
                    style={{ height: `${(item.sent / maxValue) * 100}%` }}
                  ></div>
                  <div 
                    className="w-1/2 bg-green-600 rounded-t"
                    style={{ height: `${(item.received / maxValue) * 100}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-400">{item.day}</div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (selectedChart === 'calls') {
      const total = data.reduce((sum, item) => sum + item.value, 0);
      return (
        <div className="space-y-6">
          <div className="flex h-8 rounded-lg overflow-hidden">
            {data.map((item, index) => (
              <div
                key={index}
                className={item.color}
                style={{ width: `${(item.value / total) * 100}%` }}
              ></div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4">
            {data.map((item, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4 text-center">
                <div className={`w-3 h-3 ${item.color} rounded-full mx-auto mb-2`}></div>
                <div className="text-2xl font-bold">{item.value}</div>
                <div className="text-sm text-gray-400">{item.type}</div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (selectedChart === 'apps') {
      const maxUsage = Math.max(...data.map(d => d.usage));
      return (
        <div className="space-y-4">
          {data.map((app, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{app.name}</span>
                <span className="text-gray-400">{app.usage}%</span>
              </div>
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                  style={{ width: `${app.usage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Handle message sending logic here
      setNewMessage('');
    }
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
            <span className="text-lg">💬</span>
            <span className="text-sm font-semibold">Previous Chat History</span>
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
            
            <a href="fieldchatbot" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
              <span className="text-lg">🤖</span>
              <span>AI Chatbot (Query Assistant)</span>
              {/* <span className="ml-auto text-xs bg-yellow-900 text-yellow-300 px-2 py-0.5 rounded">Limited</span> */}

            </a>
            <a href="fieldpreviouschat" className="flex items-center gap-3 px-3 py-2 bg-gray-800 rounded text-sm">
              <span className="text-lg">💬</span>
              <span>Previous Chat History</span>
            </a>
                <a href="fieldassignedcase" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
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

        {/* Main Content Area */}
        <div className="flex-1 flex">
          {/* Chat List */}
          <div className={`${selectedChat ? 'w-80' : 'flex-1'} bg-gray-950 border-r border-gray-800 overflow-y-auto transition-all`}>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6">Chat History</h2>
              <div className="space-y-3">
                {chatHistories.map((chat) => (
                  <div
                    key={chat.id}
                    onClick={() => setSelectedChat(chat)}
                    className={`bg-gray-900 border ${selectedChat?.id === chat.id ? 'border-blue-600' : 'border-gray-800'} rounded-lg p-4 cursor-pointer hover:border-gray-700 transition`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                          <MessageSquare className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm">{chat.title}</h3>
                          <p className="text-xs text-gray-500">{chat.caseId}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-600" />
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-400 mt-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{chat.date} {chat.time}</span>
                      </div>
                      <span className={`px-2 py-0.5 rounded text-xs ${
                        chat.status === 'Active' ? 'bg-green-900 text-green-300' :
                        chat.status === 'Completed' ? 'bg-blue-900 text-blue-300' :
                        'bg-yellow-900 text-yellow-300'
                      }`}>
                        {chat.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                      <MessageSquare className="w-3 h-3" />
                      <span>{chat.messageCount} messages</span>
                      <span className="mx-1">•</span>
                      <FileText className="w-3 h-3" />
                      <span>{chat.ufdrFile}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Detail View */}
          {selectedChat && (
            <div className="flex-1 flex flex-col">
              {/* Chat Header */}
              <div className="bg-gray-900 border-b border-gray-800 p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h2 className="text-xl font-bold">{selectedChat.title}</h2>
                    <p className="text-sm text-gray-400">{selectedChat.caseId} • {selectedChat.ufdrFile}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedChat(null)}
                    className="px-4 py-2 bg-gray-800 hover:bg-gray-750 rounded text-sm"
                  >
                    Close
                  </button>
                </div>

                {/* Chart Selector */}
                <div className="relative">
                  <label className="block text-sm text-gray-400 mb-2">Data Visualization</label>
                  <div className="relative">
                    <select
                      value={selectedChart}
                      onChange={(e) => setSelectedChart(e.target.value)}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 pr-10 appearance-none cursor-pointer focus:outline-none focus:border-blue-600"
                    >
                      {chartOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Chart Display */}
              <div className="bg-gray-900 border-b border-gray-800 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="w-5 h-5 text-blue-400" />
                  <h3 className="font-semibold">
                    {chartOptions.find(opt => opt.value === selectedChart)?.label}
                  </h3>
                </div>
                <div className="bg-gray-950 rounded-lg p-6">
                  {renderChart()}
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {sampleMessages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-2xl rounded-lg p-4 ${
                        msg.sender === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-800 text-gray-100'
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <p className="text-xs opacity-70 mt-2">{msg.time}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="bg-gray-900 border-t border-gray-800 p-4">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Continue conversation..."
                    className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}