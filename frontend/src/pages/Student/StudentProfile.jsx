import React from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  GraduationCap, 
  Edit3, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  Clock, 
  Camera,
  MapPin,
  Calendar,
  Settings,
  ChevronRight,
  Shield
} from 'lucide-react';

const StudentProfile = () => {
  const studentInfo = {
    name: 'Rinsha Fathima',
    email: 'rinshafathima9961@gmail.com',
    phone: '+91 98765 43210',
    education: 'Bachelor of Computer Applications (Final Year)',
    location: 'Kerala, India',
    joined: 'Jan 2026',
    avatar: 'https://i.pravatar.cc/150?u=rinsha'
  };

  const stats = [
    { label: 'Courses Enrolled', value: '16', icon: <BookOpen className="text-blue-600" />, bg: 'bg-blue-50' },
    { label: 'Completed', value: '12', icon: <CheckCircle2 className="text-green-600" />, bg: 'bg-green-50' },
    { label: 'Certificates', value: '08', icon: <Award className="text-purple-600" />, bg: 'bg-purple-50' },
    { label: 'Live Attendance', value: '94%', icon: <Clock className="text-yellow-600" />, bg: 'bg-yellow-50' },
  ];

  return (
    <div className="space-y-10 pb-20">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Column: Profile Card */}
        <div className="lg:w-96 space-y-8">
          <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden relative">
            <div className="h-32 bg-blue-600"></div>
            <div className="px-8 pb-8 flex flex-col items-center -mt-16 text-center">
              <div className="relative group">
                <img 
                  src={studentInfo.avatar} 
                  alt="avatar" 
                  className="w-32 h-32 rounded-[2rem] border-4 border-white shadow-xl object-cover" 
                />
                <button className="absolute bottom-2 right-2 p-2 bg-slate-900 text-white rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-all">
                  <Camera size={16} />
                </button>
              </div>
              <div className="mt-6 space-y-2">
                <h2 className="text-2xl font-bold text-slate-900">{studentInfo.name}</h2>
                <div className="flex items-center justify-center gap-1.5 text-slate-500 font-medium">
                  <MapPin size={14} />
                  <span className="text-xs">{studentInfo.location}</span>
                </div>
              </div>
              <div className="w-full mt-8 pt-8 border-t border-slate-100 grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Joined</p>
                  <p className="text-sm font-bold text-slate-900">{studentInfo.joined}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Status</p>
                  <p className="text-sm font-bold text-green-600 flex items-center justify-center gap-1">
                    <Shield size={12} /> Active
                  </p>
                </div>
              </div>
              <button className="w-full mt-6 py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm hover:bg-blue-600 transition-all flex items-center justify-center gap-2 active:scale-95 shadow-lg shadow-slate-100">
                <Edit3 size={18} />
                Edit My Profile
              </button>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-6">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <Settings size={18} className="text-blue-600" />
              Quick Settings
            </h3>
            <div className="space-y-4">
              {['Account Security', 'Notification Settings', 'Payment Methods', 'Privacy Policy'].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition-all group">
                  <span className="text-sm font-bold text-slate-600 group-hover:text-blue-700">{item}</span>
                  <ChevronRight size={16} className="text-slate-400 group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Stats & Information */}
        <div className="flex-1 space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col items-center md:items-start">
                <div className={`w-12 h-12 ${stat.bg} rounded-2xl flex items-center justify-center mb-4`}>
                  {stat.icon}
                </div>
                <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-10">
            <h3 className="text-xl font-bold text-slate-900 pb-4 border-b border-slate-100">Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-500">
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email Address</p>
                    <p className="text-base font-bold text-slate-900">{studentInfo.email}</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-500">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Phone Number</p>
                    <p className="text-base font-bold text-slate-900">{studentInfo.phone}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-500">
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Education Level</p>
                    <p className="text-base font-bold text-slate-900">{studentInfo.education}</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-500">
                    <Calendar size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Recent Activity</p>
                    <p className="text-base font-bold text-slate-900">Attended "React Performance" Session</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Summary Section */}
          <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600 rounded-full -ml-32 -mb-32 opacity-30 blur-3xl"></div>
            <div className="relative z-10 space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-[2rem] flex items-center justify-center">
                  <Award size={36} className="text-blue-400" />
                </div>
                <h4 className="text-2xl font-bold">Skills Mastered</h4>
              </div>
              <div className="flex flex-wrap gap-4">
                {['React.js', 'Tailwind CSS', 'Node.js', 'UI/UX Design', 'MongoDB', 'Blockchain Basics'].map((skill, i) => (
                  <span key={i} className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-sm font-bold">
                    {skill}
                  </span>
                ))}
              </div>
              <p className="text-slate-400 text-sm italic">"Your learning streak is 14 days. Keep it up to unlock your next milestone certificate!"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
