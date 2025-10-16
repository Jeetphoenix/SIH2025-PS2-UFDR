import React, { useState } from 'react';
import { UserCircle, Search, Bell, Send, Bot, FileText, TrendingUp, TrendingDown, AlertTriangle, CheckCircle, MessageSquare, BarChart3, Calendar, Phone, MessageCircle, MapPin, Smartphone } from 'lucide-react';

export default function ChatbotAnalysisPage() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [showInitialAnalysis, setShowInitialAnalysis] = useState(true);

  // Initial analysis data
  const analysisData = {
    fileName: 'samsung_galaxy_s21.ufdr',
    caseId: 'CASE-2024-001',
    deviceInfo: {
      model: 'Samsung Galaxy S21',
      os: 'Android 13',
      imei: '356938035643809',
      lastActivity: '2024-10-10 18:45:32'
    },
    summary: {
      totalMessages: 2847,
      totalCalls: 246,
      totalContacts: 156,
      locationPoints: 1523,
      installedApps: 87,
      suspiciousApps: 12,
      deletedMessages: 45,
      recoveredFiles: 234
    },
    insights: [
      {
        type: 'critical',
        icon: <AlertTriangle className="w-5 h-5" />,
        title: 'Suspicious Activity Detected',
        description: '12 applications flagged for potential security concerns. Includes 3 apps with data exfiltration capabilities.',
        color: 'red'
      },
      {
        type: 'warning',
        icon: <TrendingUp className="w-5 h-5" />,
        title: 'High Communication Volume',
        description: 'Significant increase in message activity (45%) during September 15-20, 2024. 23 contacts communicated exclusively during this period.',
        color: 'yellow'
      },
      {
        type: 'info',
        icon: <CheckCircle className="w-5 h-5" />,
        title: 'Data Recovery Successful',
        description: '234 deleted files recovered including 45 messages, 89 images, and 100 documents. Recovery rate: 87%.',
        color: 'green'
      },
      {
        type: 'info',
        icon: <MapPin className="w-5 h-5" />,
        title: 'Location Pattern Analysis',
        description: 'Device frequently visited 3 primary locations: Downtown area (45%), Industrial zone (32%), Residential area (23%).',
        color: 'blue'
      }
    ],
    topContacts: [
      { name: 'Unknown (+91-9876543210)', frequency: 156, lastContact: '2024-10-10' },
      { name: 'John Doe', frequency: 142, lastContact: '2024-10-09' },
      { name: 'Unknown (+91-9123456789)', frequency: 98, lastContact: '2024-10-08' },
      { name: 'Sarah Wilson', frequency: 87, lastContact: '2024-10-07' },
      { name: 'Unknown (+91-8765432109)', frequency: 76, lastContact: '2024-10-06' }
    ],
    timeline: [
      { date: '2024-10-10', messages: 234, calls: 23 },
      { date: '2024-10-09', messages: 198, calls: 19 },
      { date: '2024-10-08', messages: 267, calls: 31 },
      { date: '2024-10-07', messages: 189, calls: 15 },
      { date: '2024-10-06', messages: 245, calls: 28 },
      { date: '2024-10-05', messages: 156, calls: 12 },
      { date: '2024-10-04', messages: 178, calls: 18 }
    ]
  };

  const getInsightColor = (color) => {
    switch(color) {
      case 'red':
        return 'bg-red-900/20 border-red-800';
      case 'yellow':
        return 'bg-yellow-900/20 border-yellow-800';
      case 'green':
        return 'bg-green-900/20 border-green-800';
      case 'blue':
        return 'bg-blue-900/20 border-blue-800';
      default:
        return 'bg-gray-800 border-gray-700';
    }
  };

  const getInsightTextColor = (color) => {
    switch(color) {
      case 'red':
        return 'text-red-400';
      case 'yellow':
        return 'text-yellow-400';
      case 'green':
        return 'text-green-400';
      case 'blue':
        return 'text-blue-400';
      default:
        return 'text-gray-400';
    }
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      // Hide initial analysis when user starts chatting
      if (showInitialAnalysis) {
        setShowInitialAnalysis(false);
      }

      // Add user message
      const userMsg = {
        sender: 'user',
        text: inputMessage,
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, userMsg]);

      // Simulate AI response
      setTimeout(() => {
        const aiResponse = generateAIResponse(inputMessage);
        const aiMsg = {
          sender: 'ai',
          text: aiResponse,
          time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, aiMsg]);
      }, 1000);

      setInputMessage('');
    }
  };

  const generateAIResponse = (question) => {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes('message') || lowerQuestion.includes('sms')) {
      return 'I found a total of 2,847 messages in the device. This includes 2,145 WhatsApp messages, 456 SMS messages, and 246 Telegram messages. There are 45 deleted messages that were successfully recovered. Would you like me to analyze specific conversations or time periods?';
    } else if (lowerQuestion.includes('call') || lowerQuestion.includes('phone')) {
      return 'The device has 246 call records. Breakdown: 125 incoming calls, 98 outgoing calls, and 23 missed calls. The most frequent contact is +91-9876543210 with 34 calls. Peak calling hours are between 6 PM - 9 PM. Would you like detailed call logs for specific contacts?';
    } else if (lowerQuestion.includes('location') || lowerQuestion.includes('gps')) {
      return 'I\'ve analyzed 1,523 location points. The device primarily moved between three locations: Downtown area (45% of time), Industrial zone (32%), and a Residential area (23%). Notable pattern: Regular visits to Industrial zone between 2 AM - 4 AM on weekends. Would you like a detailed location timeline?';
    } else if (lowerQuestion.includes('app') || lowerQuestion.includes('application')) {
      return '87 applications are installed on the device. 12 apps are flagged as suspicious including: 3 apps with data exfiltration capabilities, 4 apps requesting excessive permissions, and 5 apps from untrusted sources. Would you like detailed analysis of specific applications?';
    } else if (lowerQuestion.includes('contact')) {
      return 'The device has 156 total contacts. Top 5 most contacted: Unknown number (+91-9876543210) - 156 interactions, John Doe - 142 interactions, Unknown (+91-9123456789) - 98 interactions. 23 contacts were added during the suspicious activity period (Sept 15-20). Need more details on any specific contact?';
    } else if (lowerQuestion.includes('delete') || lowerQuestion.includes('recover')) {
      return '234 deleted items were recovered: 45 messages (87% recovery rate), 89 images (92% recovery rate), and 100 documents (83% recovery rate). Most deletions occurred on September 18-19, 2024. Would you like to see the recovered content?';
    } else {
      return 'I can help you analyze various aspects of this case including messages, calls, location data, installed applications, contacts, and recovered files. What specific information would you like to explore?';
    }
  };

  const maxTimelineValue = Math.max(...analysisData.timeline.map(t => Math.max(t.messages, t.calls)));

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
            <span className="text-lg">🤖</span>
            <span className="text-sm font-semibold">AI Chatbot - Case Analysis</span>
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
            <a href="#" className="flex items-center gap-3 px-3 py-2 bg-gray-800 rounded text-sm">
              <span className="text-lg">🤖</span>
              <span>AI Chatbot(Querry Assistant)</span>
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
            <a href="adminaddmembers" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
              <span className="text-lg">🔐</span>
              <span>Authorized Access Control</span>
            </a>

          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col">
          {/* Case Header */}
          <div className="bg-gray-900 border-b border-gray-800 p-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-400" />
                  {analysisData.caseId}
                </h2>
                <p className="text-sm text-gray-400">{analysisData.fileName}</p>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-400">{analysisData.deviceInfo.model}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-400">Last Activity: {analysisData.deviceInfo.lastActivity}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto">
            {showInitialAnalysis ? (
              <div className="p-6 space-y-6">
                {/* Initial Analysis Message */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div className="flex-1 bg-gray-900 rounded-lg p-6 border border-gray-800">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-blue-400" />
                      Initial Forensic Analysis Complete
                    </h3>
                    <p className="text-gray-300 mb-6">
                      I've completed the initial analysis of the UFDR file. Here's a comprehensive overview of the forensic data extracted from {analysisData.deviceInfo.model}.
                    </p>

                    {/* Summary Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="bg-gray-950 rounded-lg p-4 border border-gray-800">
                        <MessageCircle className="w-6 h-6 text-blue-400 mb-2" />
                        <div className="text-2xl font-bold">{analysisData.summary.totalMessages.toLocaleString()}</div>
                        <div className="text-xs text-gray-400">Total Messages</div>
                      </div>
                      <div className="bg-gray-950 rounded-lg p-4 border border-gray-800">
                        <Phone className="w-6 h-6 text-green-400 mb-2" />
                        <div className="text-2xl font-bold">{analysisData.summary.totalCalls}</div>
                        <div className="text-xs text-gray-400">Call Records</div>
                      </div>
                      <div className="bg-gray-950 rounded-lg p-4 border border-gray-800">
                        <MapPin className="w-6 h-6 text-purple-400 mb-2" />
                        <div className="text-2xl font-bold">{analysisData.summary.locationPoints.toLocaleString()}</div>
                        <div className="text-xs text-gray-400">Location Points</div>
                      </div>
                      <div className="bg-gray-950 rounded-lg p-4 border border-gray-800">
                        <Smartphone className="w-6 h-6 text-orange-400 mb-2" />
                        <div className="text-2xl font-bold">{analysisData.summary.installedApps}</div>
                        <div className="text-xs text-gray-400">Installed Apps</div>
                      </div>
                    </div>

                    {/* Key Insights */}
                    <h4 className="font-semibold mb-3">Key Insights</h4>
                    <div className="space-y-3 mb-6">
                      {analysisData.insights.map((insight, index) => (
                        <div
                          key={index}
                          className={`border rounded-lg p-4 ${getInsightColor(insight.color)}`}
                        >
                          <div className="flex items-start gap-3">
                            <div className={getInsightTextColor(insight.color)}>
                              {insight.icon}
                            </div>
                            <div className="flex-1">
                              <h5 className={`font-semibold mb-1 ${getInsightTextColor(insight.color)}`}>
                                {insight.title}
                              </h5>
                              <p className="text-sm text-gray-300">{insight.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Top Contacts */}
                    <h4 className="font-semibold mb-3">Most Frequent Contacts</h4>
                    <div className="bg-gray-950 rounded-lg p-4 border border-gray-800 mb-6">
                      <div className="space-y-2">
                        {analysisData.topContacts.map((contact, index) => (
                          <div key={index} className="flex items-center justify-between py-2 border-b border-gray-800 last:border-0">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center text-xs font-bold">
                                {index + 1}
                              </div>
                              <div>
                                <div className="text-sm font-medium">{contact.name}</div>
                                <div className="text-xs text-gray-500">Last contact: {contact.lastContact}</div>
                              </div>
                            </div>
                            <div className="text-sm text-gray-400">{contact.frequency} interactions</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Activity Timeline */}
                    <h4 className="font-semibold mb-3">Recent Activity Timeline (Last 7 Days)</h4>
                    <div className="bg-gray-950 rounded-lg p-4 border border-gray-800">
                      <div className="flex items-end justify-between h-48 gap-2">
                        {analysisData.timeline.map((day, index) => (
                          <div key={index} className="flex-1 flex flex-col items-center justify-end h-full">
                            <div className="w-full flex gap-1 items-end justify-center h-full">
                              <div 
                                className="w-1/2 bg-blue-600 rounded-t"
                                style={{ height: `${(day.messages / maxTimelineValue) * 100}%` }}
                                title={`${day.messages} messages`}
                              ></div>
                              <div 
                                className="w-1/2 bg-green-600 rounded-t"
                                style={{ height: `${(day.calls / maxTimelineValue) * 100}%` }}
                                title={`${day.calls} calls`}
                              ></div>
                            </div>
                            <div className="text-xs text-gray-500 mt-2">{day.date.split('-')[2]}</div>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-center gap-6 mt-4 text-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-blue-600 rounded"></div>
                          <span>Messages</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-600 rounded"></div>
                          <span>Calls</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-400 mt-6">
                      💡 You can now ask me specific questions about this case. For example: "Show me deleted messages", "Analyze call patterns", or "What are the suspicious apps?"
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-6 space-y-4">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex gap-4 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.sender === 'ai' && (
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-6 h-6" />
                      </div>
                    )}
                    <div
                      className={`max-w-2xl rounded-lg p-4 ${
                        msg.sender === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-900 border border-gray-800'
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <p className="text-xs opacity-70 mt-2">{msg.time}</p>
                    </div>
                    {msg.sender === 'user' && (
                      <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <UserCircle className="w-6 h-6" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="bg-gray-900 border-t border-gray-800 p-4">
            <div className="flex gap-3">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask me anything about this case..."
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
        </main>
      </div>
    </div>
  );
}