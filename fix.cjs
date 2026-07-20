const fs = require('fs');

const content = fs.readFileSync('src/components/UtilitiesPortal.tsx', 'utf8');

const start_marker = '{/* Left 3 Lists Section (Total spans 9 or 12 columns) - Beautiful Shared Card with Dividers */}';
const end_marker = '{/* Right Sidebar Interactive Column: CHÍNH QUYỀN - HỎI ĐÁP (Total spans 3 columns) */}';

const start_idx = content.indexOf(start_marker);
const end_idx = content.indexOf(end_marker);

const replacement = `{/* Left 3 Lists Section (Total spans 9 or 12 columns) - Beautiful Shared Card with Dividers */}
        <div className={\`\${showSidebar ? "lg:col-span-9" : "lg:col-span-12"} bg-white rounded-[32px] border border-slate-200/80 p-6 md:p-8 shadow-sm flex flex-col justify-between\`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 divide-y md:divide-y-0">
            
            {/* Column 1: THÔNG TIN CÔNG KHAI */}
            <div className="flex flex-col justify-between text-left">
              <div>
                {/* Header Badge */}
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
                  <Database size={20} className="text-red-600 shrink-0" />
                  <span className={\`\${primaryText} font-black text-lg uppercase tracking-tight\`}>
                    Thông tin công khai
                  </span>
                </div>

                {/* Utility List Items with elegant scrollbar */}
                <div className="h-[600px] overflow-y-auto pr-2 custom-scrollbar-light text-left space-y-3">
                  {filterItem(utilitiesList, 1).length === 0 ? (
                    <p className="text-lg italic text-slate-400 text-center py-4 font-bold">Không tìm thấy tiện ích phù hợp</p>
                  ) : (
                    filterItem(utilitiesList, 1).map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <div
                          id={\`utility-\${item.id}\`}
                          key={item.id}
                          onClick={() => setSelectedItem(item)}
                          className={\`group/item flex items-center gap-4 py-2.5 px-4 bg-[#f8fafc] \${isRed ? "hover:bg-[#fff5f5] hover:border-red-200/80" : "hover:bg-[#f0f4f8] hover:border-blue-200/80"} border border-slate-200/60 rounded-xl transition-all duration-300 cursor-pointer text-left relative overflow-hidden\`}
                        >
                          {/* Circular Badge with animating rising wave */}
                          <div className={\`relative w-[44px] h-[44px] rounded-full shadow-sm bg-white overflow-hidden flex items-center justify-center shrink-0 ring-[1.5px] ring-inset \${isRed ? "ring-[#a50b12]" : "ring-[#0b3c7b]"} transition-all duration-300\`}>
                            {/* Icon - stays as red or blue */}
                            <span className={\`z-10 relative \${isRed ? "text-red-600 group-hover/item:text-red-700" : "text-[#b32b2b] group-hover/item:text-red-700"} translate-y-[-1px] transition-all\`}>
                              <IconComponent size={20} />
                            </span>
                            
                            {/* Animated wave graphic fill from the bottom */}
                            <div className={\`absolute bottom-[-20%] left-[-10%] right-[-10%] h-[60%] pointer-events-none \${isRed ? "text-[#a50b12]" : "text-[#0b3c7b]"}\`}>
                              <svg viewBox="0 0 100 50" overflow="visible" preserveAspectRatio="none" className="w-full h-full transition-transform duration-500 ease-out group-hover/item:-translate-y-1.5" fill="none">
                                  <path d="M 0 15 Q 25 0 50 15 T 100 15 L 100 150 L 0 150 Z" fill="currentColor" />
                                  <path d="M 0 21 Q 25 6 50 21 T 100 21 L 100 150 L 0 150 Z" fill="#ffffff" />
                                  <path d="M 0 26 Q 25 11 50 26 T 100 26 L 100 150 L 0 150 Z" fill="currentColor" />
                              </svg>
                            </div>
                          </div>
                          
                          <span className={\`text-[18px] font-bold text-slate-700 \${isRed ? "group-hover/item:text-red-700" : "group-hover/item:text-blue-700"} transition-colors line-clamp-1 leading-normal text-left flex-1\`}>
                            {item.title}
                          </span>
                          <ExternalLink
                            size={16}
                            className={\`ml-auto opacity-0 group-hover/item:opacity-100 \${isRed ? "text-red-600" : "text-blue-600"} shrink-0 z-10 transition-all duration-300 transform translate-x-1 group-hover/item:translate-x-0\`}
                          />
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>

            {/* Column 2: THÔNG TIN TUYÊN TRUYỀN */}
            <div className="md:pl-8 flex flex-col justify-between text-left">
              <div>
                {/* Header Badge */}
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
                  <Megaphone size={20} className="text-red-600 shrink-0" />
                  <span className={\`\${primaryText} font-black text-lg uppercase tracking-tight\`}>
                    Thông tin tuyên truyền
                  </span>
                </div>

                {/* Utility List Items with elegant scrollbar */}
                <div className="h-[600px] overflow-y-auto pr-2 custom-scrollbar-light text-left space-y-3">
                  {filterItem(utilitiesList, 2).length === 0 ? (
                    <p className="text-lg italic text-slate-400 text-center py-4 font-bold">Không tìm thấy tiện ích phù hợp</p>
                  ) : (
                    filterItem(utilitiesList, 2).map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <div
                          id={\`utility-\${item.id}\`}
                          key={item.id}
                          onClick={() => setSelectedItem(item)}
                          className={\`group/item flex items-center gap-4 py-2.5 px-4 bg-[#f8fafc] \${isRed ? "hover:bg-[#fff5f5] hover:border-red-200/80" : "hover:bg-[#f0f4f8] hover:border-blue-200/80"} border border-slate-200/60 rounded-xl transition-all duration-300 cursor-pointer text-left relative overflow-hidden\`}
                        >
                          {/* Circular Badge with animating rising wave */}
                          <div className={\`relative w-[44px] h-[44px] rounded-full shadow-sm bg-white overflow-hidden flex items-center justify-center shrink-0 ring-[1.5px] ring-inset \${isRed ? "ring-[#a50b12]" : "ring-[#0b3c7b]"} transition-all duration-300\`}>
                            {/* Icon - stays as red or blue */}
                            <span className={\`z-10 relative \${isRed ? "text-red-600 group-hover/item:text-red-700" : "text-[#1E3A8A] group-hover/item:text-blue-700"} translate-y-[-1px] transition-all\`}>
                              <IconComponent size={20} />
                            </span>
                            
                            {/* Animated wave graphic fill from the bottom */}
                            <div className={\`absolute bottom-[-20%] left-[-10%] right-[-10%] h-[60%] pointer-events-none \${isRed ? "text-[#a50b12]" : "text-[#0b3c7b]"}\`}>
                              <svg viewBox="0 0 100 50" overflow="visible" preserveAspectRatio="none" className="w-full h-full transition-transform duration-500 ease-out group-hover/item:-translate-y-1.5" fill="none">
                                  <path d="M 0 15 Q 25 0 50 15 T 100 15 L 100 150 L 0 150 Z" fill="currentColor" />
                                  <path d="M 0 21 Q 25 6 50 21 T 100 21 L 100 150 L 0 150 Z" fill="#ffffff" />
                                  <path d="M 0 26 Q 25 11 50 26 T 100 26 L 100 150 L 0 150 Z" fill="currentColor" />
                              </svg>
                            </div>
                          </div>
                          
                          <span className={\`text-[18px] font-bold text-slate-700 \${isRed ? "group-hover/item:text-red-700" : "group-hover/item:text-blue-700"} transition-colors line-clamp-1 leading-normal text-left flex-1\`}>
                            {item.title}
                          </span>
                          <ExternalLink
                            size={16}
                            className={\`ml-auto opacity-0 group-hover/item:opacity-100 \${isRed ? "text-red-600" : "text-blue-600"} shrink-0 z-10 transition-all duration-300 transform translate-x-1 group-hover/item:translate-x-0\`}
                          />
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>

            {/* Column 3: THÔNG TIN TRA CỨU */}
            <div className="md:pl-8 flex flex-col justify-between text-left">
              <div>
                {/* Header Badge */}
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
                  <Search size={20} className="text-red-600 shrink-0" />
                  <span className={\`\${primaryText} font-black text-lg uppercase tracking-tight\`}>
                    Thông tin tra cứu
                  </span>
                </div>

                {/* Utility List Items with elegant scrollbar */}
                <div className="h-[600px] overflow-y-auto pr-2 custom-scrollbar-light text-left space-y-3">
                  {filterItem(utilitiesList, 3).length === 0 ? (
                    <p className="text-lg italic text-slate-400 text-center py-4 font-bold">Không tìm thấy tiện ích phù hợp</p>
                  ) : (
                    filterItem(utilitiesList, 3).map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <div
                          id={\`utility-\${item.id}\`}
                          key={item.id}
                          onClick={() => setSelectedItem(item)}
                          className={\`group/item flex items-center gap-4 py-2.5 px-4 bg-[#f8fafc] \${isRed ? "hover:bg-[#fff5f5] hover:border-red-200/80" : "hover:bg-[#f0f4f8] hover:border-blue-200/80"} border border-slate-200/60 rounded-xl transition-all duration-300 cursor-pointer text-left relative overflow-hidden\`}
                        >
                          {/* Circular Badge with animating rising wave */}
                          <div className={\`relative w-[44px] h-[44px] rounded-full shadow-sm bg-white overflow-hidden flex items-center justify-center shrink-0 ring-[1.5px] ring-inset \${isRed ? "ring-[#a50b12]" : "ring-[#0b3c7b]"} transition-all duration-300\`}>
                            {/* Icon - stays as red or blue */}
                            <span className={\`z-10 relative text-red-600 group-hover/item:text-red-700 translate-y-[-1px] transition-all\`}>
                              <IconComponent size={20} />
                            </span>
                            
                            {/* Animated wave graphic fill from the bottom */}
                            <div className={\`absolute bottom-[-20%] left-[-10%] right-[-10%] h-[60%] pointer-events-none \${isRed ? "text-[#a50b12]" : "text-[#0b3c7b]"}\`}>
                              <svg viewBox="0 0 100 50" overflow="visible" preserveAspectRatio="none" className="w-full h-full transition-transform duration-500 ease-out group-hover/item:-translate-y-1.5" fill="none">
                                  <path d="M 0 15 Q 25 0 50 15 T 100 15 L 100 150 L 0 150 Z" fill="currentColor" />
                                  <path d="M 0 21 Q 25 6 50 21 T 100 21 L 100 150 L 0 150 Z" fill="#ffffff" />
                                  <path d="M 0 26 Q 25 11 50 26 T 100 26 L 100 150 L 0 150 Z" fill="currentColor" />
                              </svg>
                            </div>
                          </div>
                          
                          <span className={\`text-[18px] font-bold text-slate-700 \${isRed ? "group-hover/item:text-red-700" : "group-hover/item:text-blue-700"} transition-colors line-clamp-1 leading-normal text-left flex-1\`}>
                            {item.title}
                          </span>
                          <ExternalLink
                            size={16}
                            className={\`ml-auto opacity-0 group-hover/item:opacity-100 \${isRed ? "text-red-600" : "text-blue-600"} shrink-0 z-10 transition-all duration-300 transform translate-x-1 group-hover/item:translate-x-0\`}
                          />
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        `;

const new_content = content.substring(0, start_idx) + replacement + content.substring(end_idx);

fs.writeFileSync('src/components/UtilitiesPortal.tsx', new_content);
