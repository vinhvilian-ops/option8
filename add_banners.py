import re

with open('src/components/GovPortal.tsx', 'r') as f:
    content = f.read()

# Find Banner 9
idx = content.find('{/* Banner 9: Cơ sở dữ liệu quốc gia */}')
end_banner = content.find('</motion.div>', idx) + len('</motion.div>')

more_banners = """

                  {/* Banner 10: Xúc tiến Đầu tư & Thương mại */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -3 }}
                    onClick={() => showNotification("Đang mở Cổng thông tin Xúc tiến Đầu tư...")}
                    className="relative h-[145px] rounded-[24px] overflow-hidden group cursor-pointer border border-slate-200/80 hover:border-blue-600/30 hover:shadow-xl transition-all duration-300 w-full"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80"
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                      alt="Xúc tiến Đầu tư"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/95 group-hover:from-blue-800/90 group-hover:to-indigo-800/95 transition-all duration-500"></div>
                    <div className="relative h-full px-7 flex items-center justify-between gap-4 text-white text-left">
                      <div className="flex-1">
                        <h5 className="text-[21px] md:text-[23px] font-black mb-1.5 tracking-tight leading-snug text-white">
                          Xúc tiến Đầu tư & Thương mại
                        </h5>
                        <p className="text-lg md:text-lg font-bold text-white/90 group-hover:text-yellow-300 transition-colors line-clamp-2 leading-relaxed">
                          Cơ hội đầu tư, chính sách ưu đãi và hỗ trợ doanh nghiệp tại tỉnh Khánh Hòa.
                        </p>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md group-hover:bg-white group-hover:text-blue-900 transition-all shrink-0">
                        <ChevronRight size={18} />
                      </div>
                    </div>
                  </motion.div>

                  {/* Banner 11: Chuyển đổi số Quốc gia */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -3 }}
                    onClick={() => showNotification("Đang mở Cổng Chuyển đổi số Quốc gia...")}
                    className="relative h-[145px] rounded-[24px] overflow-hidden group cursor-pointer border border-slate-200/80 hover:border-emerald-600/30 hover:shadow-xl transition-all duration-300 w-full"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80"
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                      alt="Chuyển đổi số"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-800/90 to-green-900/95 group-hover:from-emerald-700/90 group-hover:to-green-800/95 transition-all duration-500"></div>
                    <div className="relative h-full px-7 flex items-center justify-between gap-4 text-white text-left">
                      <div className="flex-1">
                        <h5 className="text-[21px] md:text-[23px] font-black mb-1.5 tracking-tight leading-snug text-white">
                          Chuyển đổi số Quốc gia
                        </h5>
                        <p className="text-lg md:text-lg font-bold text-white/90 group-hover:text-yellow-300 transition-colors line-clamp-2 leading-relaxed">
                          Chương trình chuyển đổi số, xây dựng chính quyền số và kinh tế số.
                        </p>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md group-hover:bg-white group-hover:text-emerald-900 transition-all shrink-0">
                        <ChevronRight size={18} />
                      </div>
                    </div>
                  </motion.div>

                  {/* Banner 12: Đào tạo & Tuyển dụng */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -3 }}
                    onClick={() => showNotification("Đang mở Cổng Đào tạo & Tuyển dụng...")}
                    className="relative h-[145px] rounded-[24px] overflow-hidden group cursor-pointer border border-slate-200/80 hover:border-orange-600/30 hover:shadow-xl transition-all duration-300 w-full"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80"
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                      alt="Đào tạo và Tuyển dụng"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-800/90 to-red-800/95 group-hover:from-orange-700/90 group-hover:to-red-700/95 transition-all duration-500"></div>
                    <div className="relative h-full px-7 flex items-center justify-between gap-4 text-white text-left">
                      <div className="flex-1">
                        <h5 className="text-[21px] md:text-[23px] font-black mb-1.5 tracking-tight leading-snug text-white">
                          Đào tạo & Nguồn nhân lực
                        </h5>
                        <p className="text-lg md:text-lg font-bold text-white/90 group-hover:text-yellow-300 transition-colors line-clamp-2 leading-relaxed">
                          Thông tin tuyển dụng lao động, chính sách hỗ trợ việc làm và đào tạo nghề.
                        </p>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md group-hover:bg-white group-hover:text-orange-900 transition-all shrink-0">
                        <ChevronRight size={18} />
                      </div>
                    </div>
                  </motion.div>
"""

new_content = content[:end_banner] + more_banners + content[end_banner:]
with open('src/components/GovPortal.tsx', 'w') as f:
    f.write(new_content)
