import re

wrapper = """
            <div className="mt-10 mb-12">
              <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
                <div className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-200/60 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-yellow-500 to-blue-600"></div>
                  
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-200 pb-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0 border border-red-100">
                          <CheckCircle2 size={20} className="text-red-600" />
                        </div>
                        <h2 className="text-2xl md:text-[26px] font-black tracking-tight text-slate-800 uppercase flex items-center gap-3">
                          Hoạt động & Sự kiện nổi bật
                          <span className="hidden md:flex w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                        </h2>
                      </div>
                      <span className="text-lg font-black text-red-600 bg-red-50 border border-red-100 px-3 py-1 rounded-md self-start md:self-auto shrink-0">
                        Số 21/2026
                      </span>
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                      {/* Left: Big News + 3 Small News */}
                      <div className="xl:col-span-7 flex flex-col gap-6">

                        {/* 3 Small News Items */}
                        <div className="flex flex-col gap-4">

                        </div>
                      </div>

                      {/* Right: 9 Banners */}
                      <div className="xl:col-span-5 flex flex-col gap-4">

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
"""
open_divs = len(re.findall(r'<div\b[^>]*>', wrapper))
close_divs = len(re.findall(r'</div>', wrapper))
print(f"Wrapper: open={open_divs}, close={close_divs}")
