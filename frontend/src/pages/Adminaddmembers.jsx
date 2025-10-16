import React, { useState } from 'react';
import { UserCircle, Search, Bell, Upload, UserPlus, X, Check, AlertCircle } from 'lucide-react';

export default function AddMembersPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    gender: '',
    contact: '',
    govIdType: '',
    govIdNumber: '',
    role: ''
  });

  const [uploadedIdProof, setUploadedIdProof] = useState(null);
  const [uploadedPhoto, setUploadedPhoto] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (type, event) => {
    const file = event.target.files[0];
    if (file) {
      if (type === 'id') {
        setUploadedIdProof(file);
      } else {
        setUploadedPhoto(file);
      }
    }
  };

  const handleSubmit = () => {
    // Validate form
    if (!formData.fullName || !formData.email || !formData.gender || 
        !formData.contact || !formData.govIdType || !formData.govIdNumber || 
        !formData.role || !uploadedIdProof || !uploadedPhoto) {
      alert('Please fill all required fields');
      return;
    }

    // Show success message
    setShowSuccess(true);
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        fullName: '',
        email: '',
        gender: '',
        contact: '',
        govIdType: '',
        govIdNumber: '',
        role: ''
      });
      setUploadedIdProof(null);
      setUploadedPhoto(null);
    }, 2000);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      gender: '',
      contact: '',
      govIdType: '',
      govIdNumber: '',
      role: ''
    });
    setUploadedIdProof(null);
    setUploadedPhoto(null);
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
            <span className="text-sm font-semibold">Add Members</span>
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
              <span>Dashboard Overview</span>
            </a>
            <a href="/adminchatbot" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
              <span className="text-lg">🤖</span>
              <span>AI Chatbot(Query Assistant)</span>
            </a>
            <a href="/adminpreviouschat" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
              <span className="text-lg">💬</span>
              <span>Previous Chat History</span>
            </a>
            <a href="/adminprereport" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-800 rounded text-sm text-gray-300">
              <span className="text-lg">📄</span>
              <span>Previous Reperts</span>
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
            {/* <a href="/adminaddmembers" className="flex items-center gap-3 px-3 py-2 bg-gray-800 rounded text-sm">
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
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-3xl font-bold mb-2">Add New Member</h1>
                  <p className="text-gray-400">Register new team members to the UFDR system</p>
                </div>
                <div className="w-16 h-16 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <UserPlus className="w-8 h-8 text-blue-400" />
                </div>
              </div>

              {/* Success Message */}
              {showSuccess && (
                <div className="bg-green-900 border border-green-700 rounded-lg p-4 mb-6 flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <div>
                    <p className="font-semibold text-green-400">Member Added Successfully!</p>
                    <p className="text-sm text-green-300">The member has been registered and will receive login credentials via email.</p>
                  </div>
                </div>
              )}

              {/* Form */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
                <div className="space-y-6">
                  {/* Personal Information Section */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Full Name */}
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Enter full name"
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email ID <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="email@example.com"
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                        />
                      </div>

                      {/* Contact */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Contact Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="contact"
                          value={formData.contact}
                          onChange={handleInputChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                        />
                      </div>

                      {/* Gender */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Gender <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 appearance-none cursor-pointer"
                        >
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      {/* Role */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Role <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="role"
                          value={formData.role}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 appearance-none cursor-pointer"
                        >
                          <option value="">Select Role</option>
                          <option value="Admin">Administrator</option>
                          <option value="Forensic Investigator">Digital Forensic Investigator</option>
                          <option value="Field Investigator">Field Investigator</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Government ID Section */}
                  <div className="pt-6 border-t border-gray-800">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Government ID Verification
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* ID Type */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          ID Proof Type <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="govIdType"
                          value={formData.govIdType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 appearance-none cursor-pointer"
                        >
                          <option value="">Select ID Type</option>
                          <option value="Aadhar Card">Aadhar Card</option>
                          <option value="PAN Card">PAN Card</option>
                          <option value="Driving License">Driving License</option>
                          <option value="Passport">Passport</option>
                          <option value="Voter ID">Voter ID</option>
                        </select>
                      </div>

                      {/* ID Number */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          ID Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="govIdNumber"
                          value={formData.govIdNumber}
                          onChange={handleInputChange}
                          placeholder="Enter ID number"
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* File Uploads Section */}
                  <div className="pt-6 border-t border-gray-800">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Document Uploads
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Upload ID Proof */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Upload ID Proof <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="file"
                            id="idProof"
                            accept="image/*,.pdf"
                            onChange={(e) => handleFileUpload('id', e)}
                            className="hidden"
                          />
                          <label
                            htmlFor="idProof"
                            className="w-full flex flex-col items-center justify-center px-4 py-8 bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg cursor-pointer hover:border-blue-600 transition"
                          >
                            {uploadedIdProof ? (
                              <>
                                <Check className="w-8 h-8 text-green-400 mb-2" />
                                <p className="text-sm text-green-400 font-medium">{uploadedIdProof.name}</p>
                                <p className="text-xs text-gray-500 mt-1">Click to change</p>
                              </>
                            ) : (
                              <>
                                <Upload className="w-8 h-8 text-gray-500 mb-2" />
                                <p className="text-sm text-gray-400">Click to upload ID proof</p>
                                <p className="text-xs text-gray-500 mt-1">PNG, JPG or PDF (MAX. 5MB)</p>
                              </>
                            )}
                          </label>
                        </div>
                      </div>

                      {/* Upload Photo */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Upload Photo <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="file"
                            id="photo"
                            accept="image/*"
                            onChange={(e) => handleFileUpload('photo', e)}
                            className="hidden"
                          />
                          <label
                            htmlFor="photo"
                            className="w-full flex flex-col items-center justify-center px-4 py-8 bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg cursor-pointer hover:border-blue-600 transition"
                          >
                            {uploadedPhoto ? (
                              <>
                                <Check className="w-8 h-8 text-green-400 mb-2" />
                                <p className="text-sm text-green-400 font-medium">{uploadedPhoto.name}</p>
                                <p className="text-xs text-gray-500 mt-1">Click to change</p>
                              </>
                            ) : (
                              <>
                                <Upload className="w-8 h-8 text-gray-500 mb-2" />
                                <p className="text-sm text-gray-400">Click to upload photo</p>
                                <p className="text-xs text-gray-500 mt-1">PNG or JPG (MAX. 2MB)</p>
                              </>
                            )}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Important Notice */}
                  <div className="pt-6 border-t border-gray-800">
                    <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4 flex gap-3">
                      <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium text-blue-400 mb-1">Important Notice</p>
                        <p className="text-blue-300">
                          All information will be verified by the system administrator. Login credentials will be sent to the registered email address upon approval. Please ensure all details are accurate.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-800">
                    <button
                      onClick={handleReset}
                      className="px-6 py-3 bg-gray-800 hover:bg-gray-750 rounded-lg font-medium transition flex items-center gap-2"
                    >
                      <X className="w-4 h-4" />
                      Reset Form
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition flex items-center justify-center gap-2"
                    >
                      <UserPlus className="w-5 h-5" />
                      Add Member
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}