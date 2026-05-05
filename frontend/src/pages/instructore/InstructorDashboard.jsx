import React from 'react';
import { 
  BookOpen, 
  Users, 
  Video, 
  FileText, 
  DollarSign, 
  Clock, 
  ChevronRight,
  TrendingUp,
  MessageSquare,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';

const InstructorDashboard = () => {
  const stats = [
    { label: 'Total Courses', value: '12', icon: <BookOpen className="text-blue-600" />, bg: 'bg-blue-50', sub: '2 new this month' },
    { label: 'Total Students', value: '2,845', icon: <Users className="text-purple-600" />, bg: 'bg-purple-50', sub: '+15% from last week' },
    { label: 'Total Earnings', value: '₹1,24,500', icon: <DollarSign className="text-green-600" />, bg: 'bg-green-50', sub: '₹12,000 pending payout' },
    { label: 'Live Classes', value: '08', icon: <Video className="text-red-600" />, bg: 'bg-red-50', sub: '3 scheduled for today' },
  ];

  const upcomingClasses = [
    { id: 1, title: 'Advanced React 19 Patterns', time: 'Today, 04:00 PM', students: 145, status: 'Starting soon' },
    { id: 2, title: 'Node.js Performance Tuning', time: 'Tomorrow, 10:00 AM', students: 82, status: 'Scheduled' },
  ];

  const recentApprovals = [
    { id: 1, course: 'Next.js 15 Deep Dive', status: 'Approved', date: '2h ago' },
    { id: 2, course: 'Python for AI', status: 'Pending', date: '1d ago' },
    { id: 3, course: 'Legacy PHP Systems', status: 'Rejected', date: '2d ago', reason: 'Video quality too low' },
  ];

  return (
    <div className="space-y-10 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Instructor Dashboard</h2>
          <p className="text-slate-500 mt-1 font-medium">Welcome back, Alan! Here's what's happening with your courses today.</p>
        </div>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-2xl font-bold text-sm shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all flex items-center gap-2 active:scale-95">
          <TrendingUp size={18} />
          View Earnings Report
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
            <div className="flex justify-between items-start mb-6">
              <div className={`w-14 h-14 ${stat.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                {stat.icon}
              </div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Live Stats</span>
            </div>
            <div className="space-y-1">
              <h3 className="text-3xl font-black text-slate-900 tracking-tight">{stat.value}</h3>
              <p className="text-sm font-bold text-slate-500">{stat.label}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-50 text-[10px] font-bold text-blue-600 uppercase tracking-wider">
              {stat.sub}
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-10">
          {/* Upcoming Live Classes */}
          <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-slate-50 flex items-center justify-between">
              <h3 className="text-xl font-black text-slate-900">Upcoming Live Classes</h3>
              <button className="text-blue-600 text-xs font-bold hover:underline">View Schedule</button>
            </div>
            <div className="divide-y divide-slate-50">
              {upcomingClasses.map((item) => (
                <div key={item.id} className="p-8 flex items-center justify-between hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                      <Video size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-500 font-medium mt-1">{item.time} • {item.students} Students Enrolled</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${
                      item.status === 'Starting soon' ? 'bg-red-50 text-red-600 animate-pulse' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {item.status}
                    </span>
                    <button className="p-3 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all">
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Student Progress Snapshot */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
            <h3 className="text-xl font-black text-slate-900 mb-8">Student Progress Overview</h3>
            <div className="space-y-8">
              {[
                { name: 'Advanced React', progress: 85, students: 1200 },
                { name: 'Node.js Backend', progress: 45, students: 850 },
                { name: 'UI/UX Design', progress: 62, students: 500 },
              ].map((course, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm font-bold text-slate-900">{course.name}</span>
                      <span className="text-xs text-slate-400 ml-2">Avg. Completion</span>
                    </div>
                    <span className="text-xs font-bold text-blue-600">{course.progress}%</span>
                  </div>
                  <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: `${course.progress}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Area */}
        <div className="space-y-10">
          {/* Course Approval Status */}
          <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-slate-50">
              <h3 className="font-black text-slate-900">Course Approvals</h3>
            </div>
            <div className="divide-y divide-slate-50">
              {recentApprovals.map((item) => (
                <div key={item.id} className="p-6 space-y-3">
                  <div className="flex justify-between items-start">
                    <h4 className="text-sm font-bold text-slate-900 truncate max-w-[150px]">{item.course}</h4>
                    <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest ${
                      item.status === 'Approved' ? 'bg-green-50 text-green-600' : 
                      item.status === 'Pending' ? 'bg-yellow-50 text-yellow-600' : 'bg-red-50 text-red-600'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <span>{item.date}</span>
                    {item.status === 'Rejected' && <span className="text-red-500 lowercase italic">Reason: {item.reason}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Messages */}
          <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-full -mr-16 -mt-16 opacity-50 blur-3xl"></div>
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                  <MessageSquare size={20} />
                </div>
                <h3 className="font-bold">Student Queries</h3>
              </div>
              <p className="text-sm text-slate-400">You have 12 unread messages from your students across 4 courses.</p>
              <button className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold text-sm hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/40">
                Open Messenger
              </button>
            </div>
          </div>

          {/* Earnings Summary */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="font-black text-slate-900">Payout Status</h3>
              <AlertCircle size={18} className="text-slate-300" />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-slate-500">Pending Amount</span>
                <span className="text-lg font-black text-slate-900">₹12,400</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-slate-500">Released Date</span>
                <span className="text-xs font-bold text-blue-600">May 15, 2026</span>
              </div>
              <div className="pt-4 border-t border-slate-50">
                <div className="flex items-center gap-3 text-[10px] font-bold text-green-600 uppercase tracking-widest">
                  <CheckCircle2 size={14} /> Automatic release enabled
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboard;
