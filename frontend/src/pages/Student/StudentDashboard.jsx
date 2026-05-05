import React from 'react';
import { 
  CheckCircle2, 
  Clock, 
  PlayCircle, 
  FileText, 
  Award, 
  ChevronRight,
  ArrowRight,
  MessageSquare
} from 'lucide-react';

const StudentDashboard = () => {
  const summaryCards = [
    { label: 'Courses Completed', value: '12', icon: <CheckCircle2 className="text-green-600" />, bg: 'bg-green-50' },
    { label: 'Courses Pending', value: '04', icon: <Clock className="text-yellow-600" />, bg: 'bg-yellow-50' },
    { label: 'Live Classes', value: '28', icon: <PlayCircle className="text-blue-600" />, bg: 'bg-blue-50' },
    { label: 'Upcoming Reviews', value: '02', icon: <FileText className="text-purple-600" />, bg: 'bg-purple-50' },
    { label: 'Certificates Earned', value: '08', icon: <Award className="text-indigo-600" />, bg: 'bg-indigo-50' },
  ];

  const continueLearning = [
    { 
      id: 1, 
      title: 'Advanced React Patterns', 
      instructor: 'Sarah Jenkins', 
      progress: 65, 
      lessons: '12/18', 
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80' 
    },
    { 
      id: 2, 
      title: 'UI/UX Design Masterclass', 
      instructor: 'Michael Scott', 
      progress: 32, 
      lessons: '08/25', 
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&w=600&q=80' 
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Welcome back, Rinsha! 👋</h2>
        <p className="text-slate-500">You have 2 live classes today and 4 lessons remaining in your current course.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {summaryCards.map((card, idx) => (
          <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
            <div className={`w-10 h-10 ${card.bg} rounded-xl flex items-center justify-center mb-4`}>
              {card.icon}
            </div>
            <p className="text-sm font-medium text-slate-500">{card.label}</p>
            <p className="text-2xl font-bold text-slate-900 mt-1">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Continue Learning */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900">Continue Learning</h3>
            <button className="text-blue-600 text-sm font-semibold flex items-center gap-1 hover:underline">
              View all <ChevronRight size={16} />
            </button>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {continueLearning.map((course) => (
              <div key={course.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:border-blue-200 transition-all group">
                <div className="relative aspect-video">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                      <PlayCircle size={32} />
                    </div>
                  </div>
                </div>
                <div className="p-5 space-y-4">
                  <div>
                    <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">{course.title}</h4>
                    <p className="text-xs text-slate-500 mt-1">By {course.instructor}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-600">{course.progress}% Completed</span>
                      <span className="text-slate-400">{course.lessons} Lessons</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: `${course.progress}%` }}></div>
                    </div>
                  </div>
                  <button className="w-full py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-all active:scale-95">
                    Continue Lesson
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Chart Placeholder */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Learning Activity</h3>
            <div className="h-48 flex items-end justify-between gap-2">
              {[45, 60, 30, 80, 50, 90, 40].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                  <div className="w-full bg-blue-100 rounded-t-lg group-hover:bg-blue-600 transition-all relative" style={{ height: `${h}%` }}>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap">
                      {h} hrs
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400">Day {i+1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="space-y-8">
          {/* Upcoming Live Class */}
          <div className="bg-slate-900 rounded-2xl p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-full -mr-16 -mt-16 opacity-50 blur-3xl"></div>
            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Live Now</span>
              </div>
              <h4 className="text-lg font-bold leading-snug">Advanced Node.js Performance Optimization</h4>
              <p className="text-sm text-slate-400">With Prof. Alan Turing</p>
              <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition-all">
                Join Class
              </button>
            </div>
          </div>

          {/* Recent Messages */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-bold text-slate-900">Instructor Messages</h3>
              <button className="text-blue-600 text-xs font-bold hover:underline">View All</button>
            </div>
            <div className="divide-y divide-slate-50">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-4 flex gap-4 hover:bg-slate-50 transition-colors cursor-pointer group">
                  <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="avatar" className="w-10 h-10 rounded-full" />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h5 className="text-sm font-bold text-slate-900 truncate">Instructor Name {i}</h5>
                      <span className="text-[10px] text-slate-400 font-medium">2h ago</span>
                    </div>
                    <p className="text-xs text-slate-500 truncate mt-0.5">Hello Rinsha, I've reviewed your project and left some feedback...</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Review Attempts */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-bold text-slate-900">Upcoming Reviews</h3>
            <div className="space-y-3">
              {[1, 2].map((i) => (
                <div key={i} className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-blue-600 shadow-sm">
                      <FileText size={16} />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-slate-900">{i === 1 ? 'React Final Review' : 'UI Principles Exam'}</h5>
                      <p className="text-[10px] text-slate-500 mt-0.5">Attempt {i}/3 • May 15, 10:00 AM</p>
                    </div>
                  </div>
                  <ArrowRight size={14} className="text-slate-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
