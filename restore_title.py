import re

with open('src/components/GovPortal.tsx', 'r') as f:
    content = f.read()

target = '{/* Left Block: 3 Service Cards */}'
title_code = """
                        {/* Title for Tiện ích dịch vụ */}
                        <div className="flex items-center gap-3 mt-8 mb-2">
                          <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shrink-0 shadow-md">
                            <Building2 size={24} className="text-white" />
                          </div>
                          <div>
                            <h2 className="text-2xl md:text-[26px] font-black tracking-tight text-[#b31b1b] uppercase flex items-center gap-2">
                              TIỆN ÍCH DỊCH VỤ & THÔNG TIN CÔNG KHAI
                            </h2>
                            <p className="text-lg text-slate-700 font-medium">Cơ sở dữ liệu hỗ trợ công dân, doanh nghiệp tra cứu và tương tác trực tuyến</p>
                          </div>
                        </div>

"""

new_content = content.replace(target, title_code + target)

with open('src/components/GovPortal.tsx', 'w') as f:
    f.write(new_content)
