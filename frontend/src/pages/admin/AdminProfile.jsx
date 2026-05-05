import React from 'react';
import { 
  User, 
  Mail, 
  Shield, 
  Settings, 
  Lock, 
  Bell, 
  Smartphone,
  CheckCircle2,
  Edit2,
  Camera
} from 'lucide-react';

const AdminProfile = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Admin Profile</h2>
        <p className="text-slate-500">Manage your account settings and preferences.</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Cover & Avatar */}
        <div className="h-32 bg-gradient-to-r from-blue-600 to-indigo-700 relative">
           <div className="absolute -bottom-12 left-8 p-1 bg-white rounded-3xl shadow-xl">
              <div className="relative group">
                <img 
                  src="https://ui-avatars.com/api/?name=Admin+User&background=2563eb&color=fff&size=120" 
                  alt="Admin" 
                  className="w-24 h-24 rounded-2xl object-cover"
                />
                <button className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center text-white">
                  <Camera className="w-6 h-6" />
                </button>
              </div>
           </div>
        </div>

        <div className="pt-16 pb-8 px-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              Admin User <CheckCircle2 className="w-5 h-5 text-blue-500" />
            </h3>
            <p className="text-slate-500 font-medium">Super Administrator</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 rounded-xl text-sm font-bold text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/20">
            <Edit2 className="w-4 h-4" /> Edit Profile
          </button>
        </div>

        <div className="px-8 pb-8 grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-50">
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Personal Information</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-slate-400 border border-slate-100">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400">Full Name</p>
                  <p className="text-sm font-bold text-slate-700">Admin User</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-slate-400 border border-slate-100">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400">Email Address</p>
                  <p className="text-sm font-bold text-slate-700">admin@learnify.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-slate-400 border border-slate-100">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400">Phone Number</p>
                  <p className="text-sm font-bold text-slate-700">+1 (555) 000-1234</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Account Security</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-slate-400 border border-slate-100">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-700">Change Password</p>
                    <p className="text-xs text-slate-500">Last changed 3 months ago</p>
                  </div>
                </div>
                <button className="text-blue-600 font-bold text-xs hover:underline">Update</button>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-slate-400 border border-slate-100">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-700">Two-Factor Auth</p>
                    <p className="text-xs text-slate-500">Currently enabled</p>
                  </div>
                </div>
                <button className="text-red-600 font-bold text-xs hover:underline">Disable</button>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-slate-400 border border-slate-100">
                    <Settings className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-700">Sessions</p>
                    <p className="text-xs text-slate-500">3 active devices</p>
                  </div>
                </div>
                <button className="text-blue-600 font-bold text-xs hover:underline">Manage</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
