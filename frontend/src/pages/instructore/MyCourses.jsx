import React from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Users, 
  Star, 
  Video, 
  Edit3, 
  Trash2,
  AlertCircle,
  CheckCircle2,
  Clock,
  ChevronRight,
  Eye
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MyCourses = () => {
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: 'Advanced React 19 Patterns & Performance',
      category: 'Web Development',
      price: '₹2,499',
      offerPrice: '₹1,999',
      students: 1245,
      rating: 4.9,
      lessons: 48,
      status: 'Approved',
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 2,
      title: 'Node.js Microservices Architecture',
      category: 'Backend Development',
      price: '₹3,299',
      students: 850,
      rating: 4.8,
      lessons: 32,
      status: 'Pending',
      thumbnail: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 3,
      title: 'Legacy jQuery Migration Guide',
      category: 'Web Development',
      price: '₹1,499',
      students: 0,
      rating: 0,
      lessons: 12,
      status: 'Rejected',
      feedback: 'The introduction video has background noise. Please re-record and resubmit.',
      thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80',
    }
  ];

  return (
    <div className="space-y-10 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">My Course Catalog</h2>
          <p className="text-slate-500 mt-1 font-medium">Manage your courses, track approvals, and update your content.</p>
        </div>
        <button 
          onClick={() => navigate('/instructor/add-course')}
          className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-sm shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all flex items-center gap-3 active:scale-95"
        >
          <Plus size={20} />
          Create New Course
        </button>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="relative flex-1">
          <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400">
            <Search size={18} />
          </span>
          <input
            type="text"
            placeholder="Search your courses..."
            className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-sm focus:ring-2 focus:ring-blue-500 shadow-sm transition-all"
          />
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-4 bg-white border border-slate-200 rounded-2xl flex items-center gap-3 text-sm font-bold text-slate-600 hover:bg-slate-50 shadow-sm transition-all">
            <Filter size={18} />
            Filters
          </button>
          <select className="px-6 py-4 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-600 outline-none shadow-sm transition-all">
            <option>All Status</option>
            <option>Approved</option>
            <option>Pending</option>
            <option>Rejected</option>
          </select>
        </div>
      </div>

      {/* Course List */}
      <div className="grid gap-8">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all group">
            <div className="flex flex-col lg:flex-row">
              {/* Thumbnail Area */}
              <div className="lg:w-80 h-64 lg:h-auto relative overflow-hidden flex-shrink-0">
                <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-lg">
                  <div className={`w-2 h-2 rounded-full ${
                    course.status === 'Approved' ? 'bg-green-500' : 
                    course.status === 'Pending' ? 'bg-yellow-500' : 'bg-red-500'
                  }`}></div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">{course.status}</span>
                </div>
                {course.offerPrice && (
                  <div className="absolute bottom-4 right-4 bg-blue-600 text-white px-3 py-1.5 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl">
                    Active Offer
                  </div>
                )}
              </div>

              {/* Info Area */}
              <div className="flex-1 p-8 lg:p-10 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="space-y-2">
                      <p className="text-blue-600 font-black text-[10px] uppercase tracking-widest">{course.category}</p>
                      <h3 className="text-2xl font-black text-slate-900 leading-tight group-hover:text-blue-600 transition-colors cursor-pointer">{course.title}</h3>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-2xl font-black text-slate-900">{course.offerPrice || course.price}</p>
                        {course.offerPrice && <p className="text-sm text-slate-400 line-through font-bold">{course.price}</p>}
                      </div>
                      <button className="p-3 bg-slate-50 text-slate-400 rounded-xl hover:bg-slate-100 transition-all border border-slate-100">
                        <MoreVertical size={20} />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-8 py-6 border-y border-slate-50">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                        <Users size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Students</p>
                        <p className="text-sm font-black text-slate-900">{course.students.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 bg-yellow-50 text-yellow-600 rounded-xl flex items-center justify-center">
                        <Star size={18} fill="currentColor" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Rating</p>
                        <p className="text-sm font-black text-slate-900">{course.rating || 'N/A'}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center">
                        <Video size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Lessons</p>
                        <p className="text-sm font-black text-slate-900">{course.lessons}</p>
                      </div>
                    </div>
                  </div>

                  {course.status === 'Rejected' && (
                    <div className="p-5 bg-red-50 border border-red-100 rounded-2xl flex items-start gap-4">
                      <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
                      <div className="space-y-1">
                        <p className="text-xs font-black text-red-900 uppercase tracking-widest">Admin Feedback</p>
                        <p className="text-sm text-red-700 leading-relaxed italic">"{course.feedback}"</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-10 mt-auto">
                  <button 
                    onClick={() => navigate('/instructor/edit-course')}
                    className="w-full sm:w-auto px-6 py-3.5 bg-slate-900 text-white rounded-2xl font-bold text-sm hover:bg-blue-600 transition-all flex items-center justify-center gap-2 active:scale-95 shadow-xl shadow-slate-100"
                  >
                    <Edit3 size={18} />
                    Edit Details
                  </button>
                  <button className="w-full sm:w-auto px-6 py-3.5 bg-white border border-slate-200 text-slate-600 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm">
                    <Video size={18} />
                    Upload Videos
                  </button>
                  <button 
                    onClick={() => navigate('/instructor/students')}
                    className="w-full sm:w-auto px-6 py-3.5 bg-blue-50 text-blue-600 rounded-2xl font-bold text-sm hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-2"
                  >
                    <Users size={18} />
                    View Students
                  </button>
                  <div className="flex-1"></div>
                  <button className="text-slate-400 font-bold text-sm hover:text-red-500 flex items-center gap-2 p-3">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Summary Footer */}
      <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full -mr-32 -mb-32 opacity-30 blur-3xl"></div>
        <div className="relative z-10 grid md:grid-cols-3 gap-12">
          <div className="space-y-2">
            <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Total Active Students</p>
            <h4 className="text-4xl font-black">2,095</h4>
          </div>
          <div className="space-y-2">
            <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Avg. Course Rating</p>
            <h4 className="text-4xl font-black">4.85</h4>
          </div>
          <div className="space-y-2">
            <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Course Completion Rate</p>
            <h4 className="text-4xl font-black">64%</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
