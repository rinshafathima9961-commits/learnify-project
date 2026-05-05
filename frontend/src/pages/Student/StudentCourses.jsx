import React from 'react';
import { 
  MoreVertical, 
  PlayCircle, 
  Award, 
  MessageCircle, 
  Star,
  Users,
  ChevronRight,
  ShieldCheck,
  Clock,
  BookOpen
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StudentCourses = () => {
  const navigate = useNavigate();

  const instructors = [
    {
      id: 1,
      name: 'Dr. Angela Yu',
      avatar: 'https://i.pravatar.cc/150?u=angela',
      expertise: 'Senior Full Stack Developer',
      rating: 4.9,
      students: '150k+',
      courses: [
        {
          id: 101,
          title: 'Complete Web Development Bootcamp 2026',
          thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
          progress: 85,
          completedLessons: 42,
          totalLessons: 50,
          nextLesson: 'Deploying with Docker & Kubernetes',
          certificate: 'Locked',
        },
        {
          id: 102,
          title: 'Python for Data Science Specialization',
          thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
          progress: 20,
          completedLessons: 5,
          totalLessons: 25,
          nextLesson: 'Pandas DataFrames Deep Dive',
          certificate: 'Locked',
        }
      ]
    },
    {
      id: 2,
      name: 'Michael Scott',
      avatar: 'https://i.pravatar.cc/150?u=michael',
      expertise: 'UI/UX Design Expert',
      rating: 4.8,
      students: '85k+',
      courses: [
        {
          id: 201,
          title: 'Advanced UI/UX Masterclass',
          thumbnail: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&w=600&q=80',
          progress: 100,
          completedLessons: 30,
          totalLessons: 30,
          nextLesson: 'All Lessons Completed',
          certificate: 'Earned',
        }
      ]
    }
  ];

  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">My Learning Journey</h2>
        <p className="text-slate-500">Manage your enrolled courses and track your progress across different instructors.</p>
      </div>

      {instructors.map((instructor) => (
        <div key={instructor.id} className="space-y-6">
          {/* Instructor Header Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="relative">
                <img src={instructor.avatar} alt={instructor.name} className="w-20 h-20 rounded-2xl object-cover border-4 border-blue-50 shadow-sm" />
                <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-1.5 rounded-lg border-2 border-white shadow-md">
                  <ShieldCheck size={16} />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-slate-900">{instructor.name}</h3>
                  <div className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-bold rounded uppercase tracking-wider">Expert Instructor</div>
                </div>
                <p className="text-slate-500 text-sm font-medium">{instructor.expertise}</p>
                <div className="flex items-center gap-4 mt-3">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                    <Star className="text-yellow-400 fill-yellow-400" size={14} /> {instructor.rating}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                    <Users className="text-slate-400" size={14} /> {instructor.students} Students
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <button 
                onClick={() => navigate('/student/messages')}
                className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
              >
                <MessageCircle size={18} />
                Message Instructor
              </button>
              <button className="p-3 bg-slate-50 text-slate-600 rounded-xl hover:bg-slate-100 transition-all border border-slate-100">
                <MoreVertical size={20} />
              </button>
            </div>
          </div>

          {/* Instructor Courses Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {instructor.courses.map((course) => (
              <div key={course.id} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm flex flex-col sm:flex-row group hover:border-blue-300 transition-all">
                <div className="w-full sm:w-48 h-48 sm:h-auto relative overflow-hidden">
                  <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  {course.certificate === 'Earned' && (
                    <div className="absolute top-3 left-3 bg-green-500 text-white p-1.5 rounded-lg shadow-lg">
                      <Award size={16} />
                    </div>
                  )}
                </div>
                
                <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-1">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-bold text-slate-900 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors cursor-pointer" onClick={() => navigate('/student/course-player')}>
                        {course.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-500 flex items-center gap-1.5 pt-1">
                      <BookOpen size={12} /> {course.completedLessons}/{course.totalLessons} Lessons Completed
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Next Up</p>
                      <p className="text-xs font-bold text-slate-700 line-clamp-1">{course.nextLesson}</p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex-1 space-y-2">
                        <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-slate-500">
                          <span>Progress</span>
                          <span className={course.progress === 100 ? 'text-green-600' : 'text-blue-600'}>{course.progress}%</span>
                        </div>
                        <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full transition-all duration-1000 ${course.progress === 100 ? 'bg-green-500' : 'bg-blue-600'}`} 
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <button 
                        onClick={() => navigate('/student/course-player')}
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                          course.progress === 100 
                          ? 'bg-green-50 text-green-600 hover:bg-green-600 hover:text-white' 
                          : 'bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white'
                        }`}
                      >
                        {course.progress === 100 ? <Award size={20} /> : <PlayCircle size={20} />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Facility Note */}
          <div className="flex items-center gap-2 px-6 py-3 bg-blue-50/50 rounded-2xl border border-dashed border-blue-200">
            <ShieldCheck size={16} className="text-blue-600" />
            <p className="text-xs text-blue-700 font-medium">You have full access to {instructor.name}'s chat, live classes, and resources for these courses.</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentCourses;
