import re
with open('src/components/GovPortal.tsx', 'r') as f:
    content = f.read()

bad_block = """                                const count = subLeaders.length;
                                if (count === 1) return "grid-cols-1";
                                if (count === 2) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2";
                            </h2>
                      </div>
                    </div>
                    {/* Content Section: 1 big news, 3 small news below */}
                    <div className="py-2 grid grid-cols-12 gap-8">
                      {/* Left: Main Featured News + 3 Vertical News */}
                      <div className="col-span-8 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">              <div className="relative z-10 flex flex-col flex-1 h-full items-center justify-between w-full gap-3">"""

good_block = """                                const count = subLeaders.length;
                                if (count === 1) return "grid-cols-1";
                                if (count === 2) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2";
                                if (count === 3) return "grid-cols-1 sm:grid-cols-3 lg:grid-cols-3";
                                if (count === 4) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
                                if (count === 5) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5";
                                return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3";
                              })()
                            }`}>
                              {subLeaders.map((leader, i) => (
                                <div key={i} className="relative overflow-hidden flex flex-col items-center text-center gap-5 bg-white hover:bg-slate-50 transition-all duration-300 px-3 sm:px-4 lg:px-2 xl:px-4 py-6 rounded-2xl border border-slate-200 border-l-4 border-l-red-700 hover:shadow-xl flex-1 group/sub">
                                  <div className="absolute top-[72px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-75 z-0">
                                    <img src={trongDongBg} alt="" className="w-full h-full object-contain" />
                                  </div>
                                  
                                  <div className="relative shrink-0 z-10 group-hover/sub:scale-105 transition-transform duration-300">
                                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-md overflow-hidden bg-slate-100 flex items-center justify-center relative border-2 border-slate-50 z-10">
                                      <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
                                        <User size={36} className="text-slate-300" />
                                      </div>
                                      {leader.img && (
                                        <img 
                                          src={leader.img} 
                                          alt={leader.name}
                                          className="w-full h-full object-cover object-top relative z-10 transition-transform duration-500 group-hover/sub:scale-110"
                                          referrerPolicy="no-referrer"
                                        />
                                      )}
                                    </div>
                                  </div>
                                  
                                  <div className="relative z-10 flex flex-col flex-1 h-full items-center justify-between w-full gap-3">"""

if bad_block in content:
    content = content.replace(bad_block, good_block)
    with open('src/components/GovPortal.tsx', 'w') as f:
        f.write(content)
    print("Fixed!")
else:
    print("Bad block not found")
