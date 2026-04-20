import React from 'react';
const GetStart = () => {
  return (
    <div className="min-h-screen bg-[#0d1117] flex items-center justify-center p-6 font-sans" id="GetStarted">
      
      <div className="w-full max-w-5xl bg-[#161b22] rounded-[2rem] p-8 md:p-16 flex flex-col md:row gap-16 border border-gray-800/50 shadow-2xl overflow-hidden md:flex-row">
        <div className="flex-1 space-y-10">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Initialize <br /> 
              <span className="text-gray-100">Partnership.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
              Ready to transform your warehouse operations? Let's connect.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-[#1c2128] rounded-xl group-hover:bg-[#2d333b] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <span className="text-gray-300 font-medium text-lg">ops@smartvision.ai</span>
            </div>
            
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-[#1c2128] rounded-xl group-hover:bg-[#2d333b] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <span className="text-gray-300 font-medium text-lg">Silicon Valley Hub, CA</span>
            </div>
          </div>
          <div className="flex gap-4 pt-6">
            <button className="p-4 bg-[#1c2128] rounded-2xl hover:bg-[#2d333b] transition-all border border-gray-800 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
            </button>
            <button className="p-4 bg-[#1c2128] rounded-2xl hover:bg-[#2d333b] transition-all border border-gray-800 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </button>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-8">
          <div className="space-y-3">
            <label className="text-[11px] uppercase tracking-[0.3em] text-gray-500 font-black ml-1">Project Identity</label>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full bg-[#0d1117] border border-gray-800/80 rounded-xl p-5 text-gray-200 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 focus:border-cyan-500/50 transition-all placeholder:text-gray-700"
            />
          </div>

          <div className="space-y-3">
            <label className="text-[11px] uppercase tracking-[0.3em] text-gray-500 font-black ml-1">Communication Channel</label>
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-[#0d1117] border border-gray-800/80 rounded-xl p-5 text-gray-200 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 focus:border-cyan-500/50 transition-all placeholder:text-gray-700"
            />
          </div>

          <div className="space-y-3">
            <label className="text-[11px] uppercase tracking-[0.3em] text-gray-500 font-black ml-1">Project Directive</label>
            <textarea 
              rows="5"
              placeholder="How can we assist your logistics?" 
              className="w-full bg-[#0d1117] border border-gray-800/80 rounded-xl p-5 text-gray-200 focus:outline-none focus:ring-1 focus:ring-cyan-500/30 focus:border-cyan-500/50 transition-all placeholder:text-gray-700 resize-none"
            ></textarea>
          </div>

          <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-700  py-5 rounded-2xl font-extrabold text-[#1a202c]  hover:brightness-105 active:scale-[0.98] transition-all shadow-xl duration-300 transform hover:scale-105  shadow-cyan-900/10 text-lg mt-2">
            Send Transmission
          </button>
        </div>

      </div>
    </div>
  );
};
export default GetStart;