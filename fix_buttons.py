import re
with open('src/components/MapSection.tsx', 'r') as f:
    content = f.read()

bad_block = """        {/* Header toolbar */}
        <div className="px-5 py-3.5 border-b border-slate-200 bg-white flex items-center justify-between select-none z-10 text-left">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#da1016] animate-pulse"></div>
              <span className="text-base font-black tracking-wider uppercase text-slate-800">BẢN ĐỒ KHÁNH HÒA SỐ TƯƠNG TÁC</span>
            </div>
            {/* Smooth toggle tabs for SVG interactive map or high resolution static map */}
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => setActiveMapMode('svg')}
                className={`px-2.5 py-1 rounded-lg text-base font-black uppercase tracking-wider transition-all ${
                  activeMapMode === 'svg'
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                }`}
              >
                Sơ đồ tương tác SVG 🗺️
              </button>
              <button
                onClick={() => setActiveMapMode('image')}
                className={`px-2.5 py-1 rounded-lg text-base font-black uppercase tracking-wider transition-all ${
                  activeMapMode === 'image'
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                }`}
              >
                Bản đồ quy hoạch HD 🌐
              </button>
            </div>
          </div>
          <div className="flex gap-1.5 self-start sm:self-center">
            <button
              onClick={() => setIsLargeModalOpen(true)}
              className="p-2 rounded-xl bg-slate-50 hover:bg-red-50 text-slate-600 hover:text-[#da1016] border border-slate-200 hover:border-red-200 active:scale-95 transition-all flex items-center gap-1 text-base font-extrabold"
              title="Phóng to toàn diện"
            >
              <Maximize2 size={13} />
              <span>Toàn màn hình</span>
            </button>
          </div>
        </div>"""

good_block = """        {/* Header toolbar */}
        <div className="px-4 md:px-5 py-3.5 border-b border-slate-200 bg-white flex flex-row items-center justify-between select-none z-10 text-left gap-2">
          <div className="flex flex-col flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#da1016] animate-pulse shrink-0"></div>
              <span className="text-[13px] md:text-base font-black tracking-wider uppercase text-slate-800 truncate">BẢN ĐỒ KHÁNH HÒA SỐ TƯƠNG TÁC</span>
            </div>
            {/* Smooth toggle tabs for SVG interactive map or high resolution static map */}
            <div className="flex flex-wrap gap-1.5 mt-2">
              <button
                onClick={() => setActiveMapMode('svg')}
                className={`px-2.5 py-1 rounded-lg text-[13px] font-bold tracking-wider transition-all ${
                  activeMapMode === 'svg'
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                }`}
              >
                Sơ đồ tương tác SVG 🗺️
              </button>
              <button
                onClick={() => setActiveMapMode('image')}
                className={`px-2.5 py-1 rounded-lg text-[13px] font-bold tracking-wider transition-all ${
                  activeMapMode === 'image'
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                }`}
              >
                Bản đồ quy hoạch HD 🌐
              </button>
            </div>
          </div>
          <div className="flex gap-1.5 shrink-0 self-start sm:self-center">
            <button
              onClick={() => setIsLargeModalOpen(true)}
              className="p-1.5 md:p-2 rounded-xl bg-slate-50 hover:bg-red-50 text-slate-600 hover:text-[#da1016] border border-slate-200 hover:border-red-200 active:scale-95 transition-all flex items-center gap-1 text-[13px] font-bold shrink-0"
              title="Phóng to toàn diện"
            >
              <Maximize2 size={13} />
              <span className="hidden sm:inline">Toàn màn hình</span>
            </button>
          </div>
        </div>"""

if bad_block in content:
    content = content.replace(bad_block, good_block)
    with open('src/components/MapSection.tsx', 'w') as f:
        f.write(content)
    print("Fixed!")
else:
    print("Bad block not found")
