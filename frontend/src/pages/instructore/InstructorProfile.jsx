import React from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  GraduationCap, 
  Award, 
  ShieldCheck, 
  Globe, 
  Edit3, 
  Briefcase,
  Star,
  Users,
  BookOpen,
  Camera
} from 'lucide-react';
import { FaTwitter, FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa';

const InstructorProfile = () => {
  const profile = {
    name: 'Dr. Alan Turing',
    email: 'alan.turing@learnify.com',
    phone: '+91 98765 01234',
    role: 'Senior Full Stack Developer & AI Researcher',
    bio: "Passionate educator with over 15 years of experience in building scalable distributed systems. My mission is to bridge the gap between academic theory and industry practice. I've helped thousands of students transition from beginners to professional developers at top-tier tech companies.",
    qualifications: ['Ph.D. in Computer Science (MIT)', 'M.Tech in Software Systems', 'AWS Certified Solutions Architect'],
    skills: ['React.js', 'Node.js', 'Python', 'Machine Learning', 'Docker', 'Kubernetes', 'Next.js'],
    experience: '15+ Years',
    categories: ['Web Development', 'Artificial Intelligence', 'System Design'],
    avatar: 'https://i.pravatar.cc/150?u=instructor',
    isVerified: true,
  };

  return (
    <div className="space-y-10 pb-20">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Column - Main Info */}
        <div className="flex-1 space-y-10">
          {/* Cover & Avatar Section */}
          <div className="bg-white rounded-[3rem] border border-slate-200 shadow-sm overflow-hidden relative">
            <div className="h-48 bg-gradient-to-r from-blue-600 to-blue-800 relative">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            </div>
            <div className="px-10 pb-12 flex flex-col md:flex-row items-end gap-8 -mt-16 relative z-10 text-center md:text-left">
              <div className="relative group">
                <img 
                  src={profile.avatar} 
                  alt="avatar" 
                  className="w-40 h-40 rounded-[2.5rem] border-8 border-white shadow-2xl object-cover" 
                />
                <button className="absolute bottom-2 right-2 p-3 bg-slate-900 text-white rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition-all hover:bg-blue-600">
                  <Camera size={20} />
                </button>
              </div>
              <div className="flex-1 pb-4 space-y-3">
                <div className="flex flex-col md:flex-row md:items-center gap-3 justify-center md:justify-start">
                  <h2 className="text-3xl font-black text-slate-900 tracking-tight">{profile.name}</h2>
                  {profile.isVerified && (
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-600 rounded-lg border border-blue-100">
                      <ShieldCheck size={14} />
                      <span className="text-[10px] font-black uppercase tracking-widest">Verified Expert</span>
                    </div>
                  )}
                </div>
                <p className="text-slate-500 font-bold text-lg">{profile.role}</p>
                <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 pt-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-400">
                    <Star className="text-yellow-400 fill-yellow-400" size={16} /> 4.9 Rating
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-400">
                    <Users className="text-blue-500" size={16} /> 2.8k+ Students
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-400">
                    <BookOpen className="text-purple-500" size={16} /> 12 Courses
                  </div>
                </div>
              </div>
              <button className="mb-4 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm hover:bg-blue-600 transition-all flex items-center gap-3 active:scale-95 shadow-xl shadow-slate-100">
                <Edit3 size={18} />
                Edit Profile
              </button>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-xl font-black text-slate-900 pb-4 border-b border-slate-50 uppercase tracking-widest flex items-center gap-3">
              <User size={20} className="text-blue-600" />
              About Me
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg italic">"{profile.bio}"</p>
          </div>

          {/* Qualifications & Expertise */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-xl font-black text-slate-900 pb-4 border-b border-slate-50 uppercase tracking-widest flex items-center gap-3">
                <GraduationCap size={20} className="text-purple-600" />
                Academic Background
              </h3>
              <ul className="space-y-4">
                {profile.qualifications.map((q, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-600 font-bold text-sm group">
                    <div className="w-2 h-2 rounded-full bg-purple-200 group-hover:bg-purple-600 transition-colors"></div>
                    {q}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-xl font-black text-slate-900 pb-4 border-b border-slate-50 uppercase tracking-widest flex items-center gap-3">
                <Award size={20} className="text-green-600" />
                Key Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-green-50 text-green-700 text-[10px] font-black rounded-xl border border-green-100 uppercase tracking-widest">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Stats & Links */}
        <div className="lg:w-96 space-y-10">
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-10">
            <h3 className="font-black text-slate-900 uppercase tracking-widest text-sm flex items-center gap-3">
              <Briefcase size={18} className="text-blue-600" />
              Professional Info
            </h3>
            
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Address</p>
                  <p className="font-bold text-slate-900">{profile.email}</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Phone Number</p>
                  <p className="font-bold text-slate-900">{profile.phone}</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400">
                  <Clock size={22} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Experience</p>
                  <p className="font-bold text-slate-900">{profile.experience}</p>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-slate-50 space-y-6">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Connect with me</p>
              <div className="flex gap-4">
                {[
                  { icon: <FaGlobe size={20} />, color: 'hover:text-blue-600' },
                  { icon: <FaLinkedin size={20} />, color: 'hover:text-blue-700' },
                  { icon: <FaTwitter size={20} />, color: 'hover:text-sky-500' },
                  { icon: <FaGithub size={20} />, color: 'hover:text-slate-900' },
                ].map((s, i) => (
                  <button key={i} className={`w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 transition-all ${s.color} border border-transparent hover:border-slate-200 hover:bg-white hover:shadow-lg shadow-slate-100`}>
                    {s.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Verification Badge Placeholder */}
          <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600 rounded-full -ml-32 -mt-32 opacity-30 blur-3xl"></div>
            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 bg-blue-600 rounded-[2rem] flex items-center justify-center shadow-2xl shadow-blue-900/50">
                <ShieldCheck size={40} className="text-white" />
              </div>
              <div>
                <h4 className="text-xl font-black">Trusted Educator</h4>
                <p className="text-slate-400 text-xs mt-2 leading-relaxed">Verification badge is awarded to instructors who maintain a 4.5+ rating and complete 100+ teaching hours.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorProfile;
