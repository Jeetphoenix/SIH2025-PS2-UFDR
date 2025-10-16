import React from 'react';
import { Shield, ChevronRight, Users, Database, Lock } from 'lucide-react';

export default function UFDRLanding() {
  const handleNavigation = (role) => {
    window.location.href = `/login/${role}`;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold">UFDR</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#home" className="text-sm hover:text-blue-400 transition">Home</a>
            <a href="#about" className="text-sm hover:text-blue-400 transition">About</a>
            <a href="#contact" className="text-sm hover:text-blue-400 transition">Contact</a>
            <button 
              onClick={() => handleNavigation('admin')}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm font-medium transition"
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            UFDR AI-Based Forensic Analysis
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Empowering government investigations with advanced AI and NLP for efficient forensic data generation
          </p>
          <button 
            onClick={() => handleNavigation('admin')}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition inline-flex items-center gap-2"
          >
            Get Started
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Select Your Role Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Select Your Role</h2>
            <p className="text-gray-400 text-lg">Choose your access level to proceed</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Admin Card */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-600 transition group">
              <div className="h-48 bg-gradient-to-br from-blue-600/20 to-blue-900/20 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80" 
                  alt="Admin"
                  className="w-full h-full object-cover opacity-50"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold">Admin</h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Manage users, permissions, and system settings. Ensure data security and compliance.
                </p>
                <button 
                  onClick={() => handleNavigation('admin')}
                  className="w-full py-3 bg-gray-800 hover:bg-blue-600 rounded-lg font-medium transition group-hover:bg-blue-600"
                >
                  Login
                </button>
              </div>
            </div>

            {/* Digital Forensic Investigator Card */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-orange-600 transition group">
              <div className="h-48 bg-gradient-to-br from-orange-600/20 to-orange-900/20 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" 
                  alt="Forensic"
                  className="w-full h-full object-cover opacity-50"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center">
                    <Database className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold">Digital Forensic Investigator</h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Upload, analyze, and generate reports from forensic data using AI and NLP tools.
                </p>
                <button 
                  onClick={() => handleNavigation('forensic')}
                  className="w-full py-3 bg-gray-800 hover:bg-orange-600 rounded-lg font-medium transition group-hover:bg-orange-600"
                >
                  Login
                </button>
              </div>
            </div>

            {/* Field Investigator Card */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-green-600 transition group">
              <div className="h-48 bg-gradient-to-br from-green-600/20 to-green-900/20 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80" 
                  alt="Field"
                  className="w-full h-full object-cover opacity-50"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center">
                    <Lock className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold">Field Investigator</h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Access and review reports, collaborate with digital forensic investigators, and manage case details.
                </p>
                <button 
                  onClick={() => handleNavigation('field')}
                  className="w-full py-3 bg-gray-800 hover:bg-green-600 rounded-lg font-medium transition group-hover:bg-green-600"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose UFDR?</h2>
            <p className="text-gray-400 text-lg">Advanced features for modern forensic investigations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2">Secure & Encrypted</h3>
              <p className="text-sm text-gray-400">End-to-end encryption for all data transmissions</p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-purple-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="font-semibold mb-2">AI-Powered Analysis</h3>
              <p className="text-sm text-gray-400">Advanced NLP for intelligent case insights</p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="font-semibold mb-2">Role-Based Access</h3>
              <p className="text-sm text-gray-400">Granular permissions for team members</p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-orange-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="font-semibold mb-2">Audit Trails</h3>
              <p className="text-sm text-gray-400">Complete logging of all system activities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500 text-sm">
          <p className="mb-2">Ministry of Home Affairs | National Investigation Agency</p>
          <p>© 2024 UFDR System. All rights reserved. This system is for authorized use only.</p>
        </div>
      </footer>
    </div>
  );
}