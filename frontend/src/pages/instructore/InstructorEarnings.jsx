import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Calendar, 
  Download, 
  ArrowUpRight, 
  BarChart3, 
  PieChart, 
  Activity,
  ChevronRight,
  Wallet,
  CreditCard
} from 'lucide-react';

const InstructorEarnings = () => {
  const earningsByCourse = [
    { name: 'Advanced React 19', sales: 450, revenue: '₹8,99,550', growth: '+12.5%' },
    { name: 'Node.js Microservices', sales: 280, revenue: '₹6,99,720', growth: '+8.2%' },
    { name: 'UI/UX Fundamentals', sales: 120, revenue: '₹1,19,880', growth: '-2.4%' },
  ];

  return (
    <div className="space-y-10 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Financial Overview</h2>
          <p className="text-slate-500 mt-1 font-medium">Deep dive into your revenue streams and sales performance.</p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-4 bg-white border border-slate-200 rounded-2xl font-bold text-sm text-slate-600 flex items-center gap-2 hover:bg-slate-50 transition-all shadow-sm">
            <Calendar size={18} />
            Last 30 Days
          </button>
          <button className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-sm shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all flex items-center gap-3 active:scale-95">
            <Download size={20} />
            Download Report
          </button>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-6">
          <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
            <DollarSign size={28} />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Net Earnings</p>
            <h4 className="text-3xl font-black text-slate-900">₹17,19,150</h4>
            <div className="flex items-center gap-1.5 text-[10px] font-black text-green-600 uppercase tracking-widest mt-2">
              <TrendingUp size={14} /> +18.4% All Time
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-6">
          <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center">
            <Activity size={28} />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">This Month Earning</p>
            <h4 className="text-3xl font-black text-slate-900">₹1,24,500</h4>
            <div className="flex items-center gap-1.5 text-[10px] font-black text-green-600 uppercase tracking-widest mt-2">
              <TrendingUp size={14} /> +5.2% vs Last Month
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-6">
          <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center">
            <Wallet size={28} />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Pending Payout</p>
            <h4 className="text-3xl font-black text-slate-900">₹12,400</h4>
            <div className="flex items-center gap-1.5 text-[10px] font-black text-blue-600 uppercase tracking-widest mt-2">
              <Calendar size={14} /> Next Release: May 08
            </div>
          </div>
        </div>
        <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-sm space-y-6 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-600 rounded-full -mr-16 -mb-16 opacity-50 blur-3xl"></div>
          <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center relative z-10">
            <CreditCard size={28} />
          </div>
          <div className="relative z-10">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Released</p>
            <h4 className="text-3xl font-black text-white">₹16,92,550</h4>
            <div className="flex items-center gap-1.5 text-[10px] font-black text-green-400 uppercase tracking-widest mt-2">
              <CheckCircle2 size={14} /> Fully Processed
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Earnings Chart Mockup */}
        <div className="lg:col-span-2 bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm space-y-10">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-black text-slate-900">Revenue Growth</h3>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <span className="text-xs font-bold text-slate-500">2026</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-slate-200 rounded-full"></div>
                <span className="text-xs font-bold text-slate-500">2025</span>
              </div>
            </div>
          </div>
          <div className="h-80 flex items-end justify-between gap-4 pt-10">
            {[45, 60, 55, 80, 95, 85, 70, 75, 90, 100, 110, 120].map((h, i) => (
              <div key={i} className="flex-1 group relative">
                <div 
                  className="w-full bg-slate-50 rounded-t-xl group-hover:bg-blue-600 transition-all duration-500 cursor-pointer" 
                  style={{ height: `${h}%` }}
                >
                   <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-black px-3 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity shadow-xl whitespace-nowrap z-20">
                     ₹{(h * 1200).toLocaleString()}
                   </div>
                </div>
                <p className="text-[10px] font-black text-slate-400 text-center mt-4 uppercase tracking-widest">
                  {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][i]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Course-wise Earnings */}
        <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-black text-slate-900">Course Revenue</h3>
            <PieChart size={18} className="text-slate-300" />
          </div>
          <div className="space-y-8">
            {earningsByCourse.map((item, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h4 className="text-sm font-black text-slate-900">{item.name}</h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.sales} Enrollments</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-black text-slate-900">{item.revenue}</p>
                    <p className={`text-[10px] font-black uppercase tracking-widest ${item.growth.startsWith('+') ? 'text-green-600' : 'text-red-500'}`}>
                      {item.growth}
                    </p>
                  </div>
                </div>
                <div className="h-1.5 bg-slate-50 rounded-full overflow-hidden">
                   <div 
                    className={`h-full rounded-full ${idx === 0 ? 'bg-blue-600' : idx === 1 ? 'bg-purple-600' : 'bg-slate-300'}`} 
                    style={{ width: idx === 0 ? '55%' : idx === 1 ? '35%' : '10%' }}
                   ></div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full py-4 border border-slate-200 rounded-2xl text-[10px] font-black text-slate-400 uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
            View Analytics Detail <ArrowUpRight size={14} />
          </button>
        </div>
      </div>

      {/* Recent Transactions Snapshot */}
      <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm space-y-8">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-black text-slate-900">Recent Transactions</h3>
          <button className="text-xs font-bold text-blue-600 hover:underline">View All Payments</button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
           {[1, 2, 3, 4].map(i => (
             <div key={i} className="p-6 bg-slate-50/50 rounded-[2rem] border border-slate-100 flex flex-col justify-between space-y-6 group hover:bg-white hover:shadow-xl hover:border-white transition-all">
                <div className="flex justify-between items-start">
                   <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600">
                      <TrendingUp size={18} />
                   </div>
                   <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">May 02, 2026</span>
                </div>
                <div>
                   <p className="text-xs font-bold text-slate-500 mb-1">Sale: Adv. React 19</p>
                   <h4 className="text-xl font-black text-slate-900">₹1,600</h4>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[9px] font-black uppercase tracking-widest">
                   <span className="text-green-600">Released</span>
                   <ChevronRight size={12} className="text-slate-300" />
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default InstructorEarnings;
