import re
with open('src/components/GovPortal.tsx', 'r') as f:
    content = f.read()

bad_block = """                    {/* Header without red banner, styled perfectly like homepage */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-3 mb-10">
                      <div>
                        <h2 className="text-[26px] md:text-[30px] font-black uppercase tracking-tight flex items-center gap-3 text-red-800 leading-tight">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-700 flex items-center justify-center shrink-0 shadow-md">
                            <Users size={24} className="text-white" />
                          </div>
                          <span>
                            CHỈ ĐẠO, ĐIỀU HÀNH CỦA CHÍNH PHỦ,
                            <br className="hidden md:inline" /> <span className="inline-block">THỦ TƯỚNG CHÍNH PHỦ</span>
                          </span>
                        </h2>
                      </div>
                    </div>
                    {/* Content Section: 1 big news, 3 small news below */}
                    <div className="py-2 grid grid-cols-12 gap-8">
                      {/* Left: Main Featured News + 3 Vertical News */}
                      <div className="col-span-8 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                        {/* Main Featured News Item */}
                        <div className="h-[500px] sm:h-[580px] relative group w-full cursor-pointer shrink-0">"""

# Let's try matching with regex
pattern = re.compile(r'\{\/\* Header without red banner, styled perfectly like homepage \*\/}.*?\{\/\* Main Featured News Item \*\/}\s*<div className="h-\[500px\] sm:h-\[580px\] relative group w-full cursor-pointer shrink-0">', re.DOTALL)

good_block = """{/* Content Section: 1 big news, 3 small news below */}
                    <div className="py-2 grid grid-cols-12 gap-8">
                      {/* Left: Main Featured News + 3 Vertical News */}
                      <div className="col-span-8 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                        
                        {/* Header inside the block, styled perfectly like homepage */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-5 md:p-6 border-b border-slate-100 bg-white z-10 relative">
                          <div>
                            <h2 className="text-[24px] md:text-[28px] font-black uppercase tracking-tight flex items-center gap-3 text-red-800 leading-tight">
                              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-700 flex items-center justify-center shrink-0 shadow-md">
                                <Users size={24} className="text-white" />
                              </div>
                              <span>
                                CHỈ ĐẠO, ĐIỀU HÀNH CỦA CHÍNH PHỦ,
                                <br className="hidden md:inline" /> <span className="inline-block">THỦ TƯỚNG CHÍNH PHỦ</span>
                              </span>
                            </h2>
                          </div>
                        </div>

                        {/* Main Featured News Item */}
                        <div className="h-[500px] sm:h-[580px] relative group w-full cursor-pointer shrink-0">"""

if pattern.search(content):
    content = pattern.sub(good_block, content)
    with open('src/components/GovPortal.tsx', 'w') as f:
        f.write(content)
    print("Fixed with regex!")
else:
    print("Pattern not found")
