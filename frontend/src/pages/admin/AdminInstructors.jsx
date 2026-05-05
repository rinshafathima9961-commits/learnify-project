import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  MoreHorizontal, 
  Eye, 
  UserMinus, 
  UserCheck,
  Download,
  Mail,
  GraduationCap,
  Award,
  BookOpen,
  DollarSign
} from 'lucide-react';
import StatusBadge from '../../components/admin/StatusBadge';

const instructorsData = [
  { 
    id: 1, 
    name: 'Dr. Sarah Jenkins', 
    email: 'sarah@example.com', 
    qualification: 'PhD in Data Science', 
    expertise: 'Machine Learning, AI',
    courses: 12, 
    students: 1250,
    earnings: '$15,400',
    status: 'Active' 
  },
  { 
    id: 2, 
    name: 'Mark Thompson', 
    email: 'mark@example.com', 
    qualification: 'M.Tech Software Engineering', 
    expertise: 'React, Node.js, AWS',
    courses: 8, 
    students: 840,
    earnings: '$9,200',
    status: 'Pending' 
  },
  { 
    id: 3, 
    name: 'Elena Rodriguez', 
    email: 'elena@example.com', 
    qualification: 'Senior UI/UX Designer', 
    expertise: 'Figma, Adobe XD, UX Research',
    courses: 5, 
    students: 2100,
    earnings: '$12,800',
    status: 'Active' 
  },
  { 
    id: 4, 
    name: 'Prof. Michael Chen', 
    email: 'michael@example.com', 
    qualification: 'Professor at MIT', 
    expertise: 'Quantum Computing',
    courses: 2, 
    students: 450,
    earnings: '$4,500',
    status: 'Blocked' 
  },
];

const AdminInstructors = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Instructor Management</h2>
          <p className="text-slate-500">Approve, monitor, and manage the platform's teaching professionals.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
            <Download className="w-4 h-4" /> Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-xl text-sm font-semibold text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20">
            Add New Instructor
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center gap-4">
        <div className="flex-1 min-w-[240px] relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search by name, email or expertise..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 rounded-xl text-sm transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-400" />
          <select className="bg-slate-50 border-none text-sm font-medium text-slate-600 rounded-xl focus:ring-0 px-4 py-2">
            <option>All Expertise</option>
            <option>Development</option>
            <option>Design</option>
            <option>Business</option>
          </select>
        </div>
        <select className="bg-slate-50 border-none text-sm font-medium text-slate-600 rounded-xl focus:ring-0 px-4 py-2">
          <option>Status: All</option>
          <option>Status: Active</option>
          <option>Status: Pending</option>
          <option>Status: Blocked</option>
        </select>
      </div>

      {/* Instructors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
        {instructorsData.map((instructor) => (
          <div key={instructor.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                    {instructor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{instructor.name}</h3>
                    <p className="text-sm text-slate-500 flex items-center gap-1">
                      <Mail className="w-3 h-3" /> {instructor.email}
                    </p>
                  </div>
                </div>
                <StatusBadge status={instructor.status} />
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-slate-400 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">Qualification</p>
                    <p className="text-sm text-slate-700 font-medium">{instructor.qualification}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-slate-400 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">Expertise</p>
                    <p className="text-sm text-slate-700 font-medium">{instructor.expertise}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-100 pt-6">
                <div className="text-center">
                  <div className="flex justify-center mb-1"><BookOpen className="w-4 h-4 text-blue-500" /></div>
                  <p className="text-lg font-bold text-slate-900">{instructor.courses}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Courses</p>
                </div>
                <div className="text-center border-x border-slate-100">
                  <div className="flex justify-center mb-1"><GraduationCap className="w-4 h-4 text-purple-500" /></div>
                  <p className="text-lg font-bold text-slate-900">{instructor.students}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Students</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-1"><DollarSign className="w-4 h-4 text-green-500" /></div>
                  <p className="text-lg font-bold text-slate-900">{instructor.earnings}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Earnings</p>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 px-6 py-4 flex items-center justify-between gap-3 border-t border-slate-100">
              <button className="flex-1 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                <Eye className="w-4 h-4 text-slate-400" /> View Profile
              </button>
              {instructor.status === 'Blocked' ? (
                <button className="px-4 py-2 bg-green-50 text-green-600 rounded-lg text-sm font-bold hover:bg-green-100 transition-colors">
                  Unblock
                </button>
              ) : (
                <button className="px-4 py-2 bg-red-50 text-red-600 rounded-lg text-sm font-bold hover:bg-red-100 transition-colors">
                  Block
                </button>
              )}
              <button className="p-2 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-slate-200">
                <MoreHorizontal className="w-5 h-5 text-slate-400" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminInstructors;
