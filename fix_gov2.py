import re
with open('src/components/GovPortal.tsx', 'r') as f:
    content = f.read()

bad_block = """                        </h2>
                      </div>
                      
                      {/* Integrated Map Fit Mode Controller & Title as requested */}
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm w-full md:w-auto">
                        <span className="text-base md:text-base font-black text-black px-2 uppercase tracking-tight shrink-0 flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-700 animate-pulse"></span>
                          Bản đồ hành chính tỉnh
                        </span>
                        <div className="flex bg-slate-100 p-1 rounded-xl text-base md:text-base font-bold border border-slate-200 select-none shrink-0 w-full sm:w-auto">
                          <button 
                            type="button"
                            onClick={() => setMapFitMode('contain')}
                            className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-lg transition-all duration-200 cursor-pointer text-center ${
                              mapFitMode === "contain" 
                                ? "bg-white text-red-700 shadow-sm" 
                                : "text-black hover:text-black"
                            }`}>
                            Bao quát (Tránh cắt lề)
                          </button>
                          <button 
                            type="button"
                            onClick={() => setMapFitMode('cover')}
                            className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-lg transition-all duration-200 cursor-pointer text-center ${
                              mapFitMode === "cover" 
                                ? "bg-white text-red-700 shadow-sm" 
                                : "text-black hover:text-black"
                            }`}>
                            Cận cảnh
                          </button>
                        </div>
                      </div>
                    </div>"""

good_block = """                        </h2>
                      </div>
                    </div>"""

if bad_block in content:
    content = content.replace(bad_block, good_block)
    with open('src/components/GovPortal.tsx', 'w') as f:
        f.write(content)
    print("Fixed!")
else:
    print("Bad block not found")
