import React, { useState } from 'react';
import { Shield, Lock, User } from 'lucide-react';

export default function UFDRLogin() {
  // Get role from URL path
  const pathRole = window.location.pathname.split('/').pop();
  const role = ['admin', 'forensic', 'field'].includes(pathRole) ? pathRole : 'admin';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simple static routing for demo
    if(role === 'admin') window.location.href = '/admin';
    else if(role === 'forensic') window.location.href = '/forensic';
    else window.location.href = '/field';
  };

  const roleInfo = {
    admin: {
      title: 'Administrator',
      color: 'blue',
      icon: '👤',
      description: 'Full system access and management'
    },
    forensic: {
      title: 'Digital Forensic Investigator',
      color: 'orange',
      icon: '🔬',
      description: 'Case analysis and reporting'
    },
    field: {
      title: 'Field Investigator',
      color: 'green',
      icon: '🔍',
      description: 'Evidence collection and submission'
    }
  };

  const currentRole = roleInfo[role] || roleInfo.admin;

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      <div className="relative w-full max-w-5xl grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <div className="text-center md:text-left space-y-6">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
              <Shield className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">UFDR</h1>
              <p className="text-sm text-gray-400">Universal Forensic Data Repository</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <h2 className="text-3xl font-bold">Secure Access Portal</h2>
            <p className="text-gray-400 text-lg">
              Digital forensics investigation platform for law enforcement and authorized personnel.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 space-y-4">
            <h3 className="font-semibold text-lg">System Features</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                End-to-end encrypted data transmission
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                Role-based access control
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                AI-powered case analysis
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                Complete audit trail logging
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 shadow-2xl">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{currentRole.icon}</span>
              <div>
                <h2 className="text-2xl font-bold">{currentRole.title}</h2>
                <p className="text-sm text-gray-400">{currentRole.description}</p>
              </div>
            </div>
          </div>



          <div className="space-y-5">
            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                  placeholder="Enter your username"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                  className="w-full pl-11 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded bg-gray-800 border-gray-700" />
                <span className="text-gray-400">Remember me</span>
              </label>
              <button type="button" className="text-blue-500 hover:text-blue-400">Forgot password?</button>
            </div>

            {/* Login Button */}
            <button
              type="button"
              onClick={handleLogin}
              className={`w-full py-3 rounded-lg font-semibold text-white transition ${
                role === 'admin' ? 'bg-blue-600 hover:bg-blue-700' :
                role === 'forensic' ? 'bg-orange-600 hover:bg-orange-700' :
                'bg-green-600 hover:bg-green-700'
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <Shield className="w-5 h-5" />
                Login Securely
              </span>
            </button>
          </div>

          {/* Footer */}
          <div className="mt-6 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
            <p>This system is for authorized use only. All activity is monitored and logged.</p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="absolute bottom-6 left-0 right-0 text-center text-xs text-gray-600">
        <p>© 2024 UFDR System • Secure Forensic Investigation Platform</p>
      </div>
    </div>
  );
}