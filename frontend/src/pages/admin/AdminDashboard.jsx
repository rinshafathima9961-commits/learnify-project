import React from 'react';
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  Clock, 
  Video, 
  DollarSign, 
  UserX, 
  AlertCircle,
  MoreVertical,
  ArrowRight
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import StatCard from '../../components/admin/StatCard';
import StatusBadge from '../../components/admin/StatusBadge';

const data = [
  { name: 'Jan', revenue: 4000 },
  { name: 'Feb', revenue: 3000 },
  { name: 'Mar', revenue: 2000 },
  { name: 'Apr', revenue: 2780 },
  { name: 'May', revenue: 1890 },
  { name: 'Jun', revenue: 2390 },
  { name: 'Jul', revenue: 3490 },
];

const AdminDashboard = () => {
  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Dashboard Overview</h2>
          <p className="text-slate-500">Welcome back! Here's what's happening on Learnify today.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
            Download Report
          </button>
          <button className="px-4 py-2 bg-blue-600 rounded-xl text-sm font-semibold text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20">
            Platform Settings
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Students" value="12,450" icon={Users} trend={12} color="blue" />
        <StatCard title="Total Instructors" value="842" icon={GraduationCap} trend={5} color="purple" />
        <StatCard title="Total Courses" value="1,205" icon={BookOpen} trend={8} color="green" />
        <StatCard title="Pending Approvals" value="48" icon={Clock} color="amber" />
        <StatCard title="Active Live Classes" value="12" icon={Video} color="cyan" />
        <StatCard title="Total Revenue" value="$84,200" icon={DollarSign} trend={15} color="green" />
        <StatCard title="Pending Payouts" value="$12,500" icon={AlertCircle} color="amber" />
        <StatCard title="Blocked Users" value="154" icon={UserX} color="red" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold text-slate-900">Revenue Overview</h3>
            <select className="bg-slate-50 border-none text-sm font-medium text-slate-600 rounded-lg focus:ring-0">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 12 Months</option>
            </select>
          </div>
          <div className="h-[350px] w-full min-h-[350px]">
            <ResponsiveContainer width="100%" height="100%" >
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#64748b', fontSize: 12}}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#64748b', fontSize: 12}}
                  tickFormatter={(value) => `$${value}`}
                />
                <Tooltip 
                  contentStyle={{backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#2563eb" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorRevenue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Latest Activity Feed */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-900">Activity Feed</h3>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold">View All</button>
          </div>
          <div className="space-y-6">
            {[
              { user: 'Sarah Jenkins', action: 'applied as instructor', time: '2 mins ago', type: 'instructor' },
              { user: 'Web Development Bootcamp', action: 'submitted for approval', time: '15 mins ago', type: 'course' },
              { user: 'Mark Thompson', action: 'purchased Advanced React', time: '1 hour ago', type: 'payment' },
              { user: 'Live Class: UX Design', action: 'started now', time: 'Just now', type: 'live' },
              { user: 'System Update', action: 'completed successfully', time: '4 hours ago', type: 'system' },
            ].map((activity, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'instructor' ? 'bg-purple-500' :
                    activity.type === 'course' ? 'bg-amber-500' :
                    activity.type === 'payment' ? 'bg-green-500' : 'bg-blue-500'
                  }`}></div>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">
                    <span className="font-bold">{activity.user}</span> {activity.action}
                  </p>
                  <p className="text-xs text-slate-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Instructor Requests */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900">Instructor Requests</h3>
            <button className="p-2 hover:bg-slate-50 rounded-lg"><MoreVertical className="w-5 h-5 text-slate-400" /></button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Instructor</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Qualification</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { name: 'Dr. Emily Watson', email: 'emily@example.com', qualification: 'PhD Computer Science', status: 'Pending' },
                  { name: 'John Doe', email: 'john@example.com', qualification: 'Senior Dev at Google', status: 'Pending' },
                  { name: 'Alice Smith', email: 'alice@example.com', qualification: 'UX Designer (8+ yrs)', status: 'Pending' },
                ].map((req, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-bold text-slate-900">{req.name}</p>
                        <p className="text-xs text-slate-500">{req.email}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">{req.qualification}</td>
                    <td className="px-6 py-4"><StatusBadge status={req.status} /></td>
                    <td className="px-6 py-4">
                      <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">Review</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-slate-50 border-t border-slate-100 text-center">
            <button className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">
              View All Applications <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Latest Payments */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900">Latest Payments</h3>
            <button className="p-2 hover:bg-slate-50 rounded-lg"><MoreVertical className="w-5 h-5 text-slate-400" /></button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Transaction</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { id: 'TRX-9482', course: 'React Masterclass', amount: '$49.99', status: 'Success', date: '2 mins ago' },
                  { id: 'TRX-9481', course: 'UI Design Fundamentals', amount: '$29.99', status: 'Success', date: '15 mins ago' },
                  { id: 'TRX-9480', course: 'Python for Data Science', amount: '$79.99', status: 'Pending', date: '1 hour ago' },
                ].map((pay, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-bold text-slate-900">{pay.course}</p>
                        <p className="text-xs text-slate-500">ID: {pay.id}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-slate-900">{pay.amount}</td>
                    <td className="px-6 py-4"><StatusBadge status={pay.status} /></td>
                    <td className="px-6 py-4 text-xs text-slate-500">{pay.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-slate-50 border-t border-slate-100 text-center">
            <button className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">
              View All Transactions <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
