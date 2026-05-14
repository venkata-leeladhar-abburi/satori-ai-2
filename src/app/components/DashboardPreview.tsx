import { TrendingUp, ChevronDown, CheckCircle2 } from 'lucide-react';

const DashboardPreview = () => {
  return (
    <div className="px-3 sm:px-4 mt-auto">
      <div className="bg-[#FAF7F4]/90 backdrop-blur-xl border border-[#EDE7E2] rounded-3xl p-4 sm:p-6 w-full max-w-[960px] mx-auto shadow-2xl translate-y-12 sm:translate-y-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          
          {/* Card 1 — Procurement Overview */}
          <div className="reveal stagger-1 bg-white rounded-2xl p-5 flex flex-col shadow-sm border border-[#EDE7E2] interactive-card">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-[#1A120B] text-[15px] font-semibold tracking-tight">Procurement Overview</p>
                <p className="text-[#7A6E66] text-[12px] mt-0.5">Total Spend Managed</p>
              </div>
            </div>
            
            <div className="flex items-end gap-3 mb-2">
              <h3 className="text-[32px] font-bold text-[#1A120B] leading-none tracking-tight">₹2.5Cr</h3>
              <div className="bg-[#F97316]/10 text-[#F97316] rounded-full px-2 py-0.5 flex items-center gap-1 text-[11px] font-semibold mb-1">
                <TrendingUp size={12} strokeWidth={3} />
                38%
              </div>
            </div>
            <p className="text-[#7A6E66] text-[12px] mb-6">vs last quarter</p>
            
            <div className="mt-auto pt-4 border-t border-[#EDE7E2]">
              <div className="flex items-end gap-1.5 h-16 w-full">
                {/* Elegant abstract bar chart */}
                {[40, 60, 45, 80, 55, 90, 75].map((h, i) => (
                  <div key={i} className="flex-1 bg-[#FAF7F4] rounded-t-sm hover:bg-[#F97316]/20 transition-colors relative group">
                    <div 
                      className={`absolute bottom-0 w-full rounded-t-sm ${i === 5 ? 'bg-[#F97316]' : 'bg-[#EDE7E2]'}`} 
                      style={{ height: `${h}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2 — Filters & Metrics */}
          <div className="reveal stagger-2 bg-white rounded-2xl p-5 flex flex-col gap-4 shadow-sm border border-[#EDE7E2] interactive-card">
            <div className="flex gap-2">
              <button className="flex-1 flex items-center justify-between border border-[#EDE7E2] bg-[#FAF7F4] rounded-lg px-3 py-2 text-[12px] text-[#1A120B] font-medium hover:border-[#F97316]/30 transition-colors active:scale-[0.97]">
                This Month
                <ChevronDown size={14} className="text-[#7A6E66]" />
              </button>
              <button className="flex-1 flex items-center justify-between border border-[#EDE7E2] bg-[#FAF7F4] rounded-lg px-3 py-2 text-[12px] text-[#1A120B] font-medium hover:border-[#F97316]/30 transition-colors active:scale-[0.97]">
                Category
                <ChevronDown size={14} className="text-[#7A6E66]" />
              </button>
            </div>

            <button className="w-full flex items-center justify-between border border-[#EDE7E2] bg-[#FAF7F4] rounded-lg px-3 py-2 text-[12px] text-[#1A120B] font-medium hover:border-[#F97316]/30 transition-colors active:scale-[0.97]">
              All Supplier Segments
              <ChevronDown size={14} className="text-[#7A6E66]" />
            </button>

            <div className="grid grid-cols-1 gap-3 mt-auto">
              <div className="flex items-center justify-between">
                <span className="text-[13px] text-[#7A6E66] font-medium">Supplier Efficiency</span>
                <span className="text-[13px] text-[#1A120B] font-semibold">94.2%</span>
              </div>
              <div className="w-full bg-[#FAF7F4] h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#1A120B] w-[94.2%] h-full rounded-full" />
              </div>

              <div className="flex items-center justify-between mt-1">
                <span className="text-[13px] text-[#7A6E66] font-medium">Cycle Time</span>
                <span className="text-[13px] text-[#1A120B] font-semibold">4.2 Days</span>
              </div>
              <div className="w-full bg-[#FAF7F4] h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#F97316] w-[70%] h-full rounded-full" />
              </div>
            </div>
          </div>

          {/* Card 3 — AI Metrics */}
          <div className="reveal stagger-3 bg-white rounded-2xl p-5 flex flex-col shadow-sm border border-[#EDE7E2] interactive-card">
            <div className="mb-5">
              <p className="text-[#1A120B] text-[15px] font-semibold tracking-tight">AI Orchestration</p>
              <p className="text-[#7A6E66] text-[12px] mt-0.5">Automated Workflows</p>
            </div>
            
            <div className="flex flex-col gap-4 mt-auto">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-[#F97316] border-t-transparent border-r-transparent rotate-45 flex items-center justify-center">
                  <div className="-rotate-45 text-[11px] font-bold text-[#F97316]">85%</div>
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#1A120B]">Supplier Matches</p>
                  <p className="text-[11px] text-[#7A6E66]">AI-driven discovery</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-[#1A120B] border-t-transparent flex items-center justify-center">
                  <div className="text-[11px] font-bold text-[#1A120B]">92%</div>
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#1A120B]">Contracts Processed</p>
                  <p className="text-[11px] text-[#7A6E66]">Zero-touch approval</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-[#EDE7E2] flex items-center justify-center bg-[#FAF7F4]">
                  <CheckCircle2 size={16} className="text-[#F97316]" />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#1A120B]">POs Executed</p>
                  <p className="text-[11px] text-[#7A6E66]">1,240 this week</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;
