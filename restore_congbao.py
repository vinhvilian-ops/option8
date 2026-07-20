import re

with open('src/components/GovPortal.tsx', 'r') as f:
    content = f.read()

# The original right block of Cong bao Quoc gia is:
congbao_original = """                        {/* Right Block: Công báo Quốc gia */}
                        <div className="xl:col-span-5 flex flex-col gap-6 h-full">
                          {/* Top Red Block */}
                          <div className="bg-[#b32b2b] rounded-[24px] p-6 text-white shadow-sm relative overflow-hidden flex flex-col min-h-0 flex-1">
                            <div className="flex justify-between items-start mb-6">
                              <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                                  <FileText size={24} className="text-red-400" />
                                </div>
                                <div>
                                  <h3 className="text-xl md:text-[22px] font-black tracking-tight leading-tight uppercase">
                                    Công báo Quốc gia
                                  </h3>
                                  <p className="text-lg text-white/80 font-bold tracking-widest uppercase mt-0.5">
                                    CỔNG THÔNG TIN PHÁP LUẬT VIỆT NAM
                                  </p>
                                </div>
                              </div>
                              <span className="bg-[#ffc600] text-[#991b1b] text-[10.5px] font-black tracking-widest px-3 py-1.5 rounded-full whitespace-nowrap shadow-sm">
                                MỚI CẬP NHẬT
                              </span>
                            </div>

                            {/* List of files */}
                            <div className="flex flex-col gap-4 overflow-y-auto pr-2 custom-scrollbar-light flex-1 mb-6">
                              {[
                                { code: "NGHỊ", doc: "NGHỊ QUYẾT 12/2026/NQ-CP", title: "Chương trình phát triển công nghệ bán dẫn quốc gia...", desc: "Chính phủ vừa ban hành chương trình hành động ưu tiên thu hút đầu tư nước ngoài, xây dựng các trung tâm CNC thiết kế chip cốt lõi và đào...", date: "03/06/2026", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=200&fit=crop" },
                                { code: "NGHỊ", doc: "NGHỊ ĐỊNH 45/2026/NĐ-CP", title: "Cơ chế mới bồi thường, tái định cư khi thu hồi đất", desc: "Bố trí đất tái định cư có hạ tầng kỹ thuật đồng bộ trước khi cơ quan nhà nước duyệt thu hồi đất, đảm bảo đời sống sinh kế ổn định là...", date: "02/06/2026", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=200&fit=crop" },
                                { code: "QUYẾT", doc: "QUYẾT ĐỊNH 124/QĐ-TTG", title: "Phê duyệt mạng lưới trung tâm logistics quốc gia", desc: "Đến năm 2030, hình thành các trung tâm logistics trọng điểm kết nối hạ tầng giao thông đa phương thức cấp vùng và liên tỉnh, góp phần...", date: "01/06/2026", img: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=200&fit=crop" },
                                { code: "THÔNG", doc: "THÔNG TƯ 05/2026/TT-BTTTT", title: "Quy chuẩn kỹ thuật quốc gia về cấu trúc định danh số", desc: "Bộ Thông tin và Truyền thông quy định chi tiết kỹ thuật định dạng cấu trúc định danh điện tử thống nhất toàn quốc phục vụ giao dịch v...", date: "29/05/2026", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=200&fit=crop" }
                              ].map((item, idx) => (
                                <div key={idx} className="flex gap-4 items-start group cursor-pointer hover:bg-white/10 p-2 rounded-xl transition-colors">
                                  <div className="relative w-24 h-20 rounded-xl overflow-hidden shrink-0 shadow-sm border border-white/20">
                                    <img src={item.img} alt={item.doc} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-start gap-2 mb-1">
                                      <span className="text-lg font-black text-white tracking-wide">{item.doc}</span>
                                      <span className="text-[9.5px] text-white/80 flex items-center gap-1 font-mono font-bold shrink-0 mt-0.5"><Calendar size={9} /> {item.date}</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-1.5 leading-snug line-clamp-2 pr-2">{item.title}</h4>
                                    <p className="text-[10.5px] text-white/70 leading-relaxed line-clamp-2 pr-1">{item.desc}</p>
                                  </div>
                                </div>
                              ))}
                            </div>

                            <button className="w-full bg-[#8c1c1c] hover:bg-[#7f1d1d] text-white/90 text-[12.5px] font-bold py-3.5 px-5 rounded-xl flex justify-between items-center transition-colors shadow-inner border border-white/10 group">
                              <span className="group-hover:text-white transition-colors">Xem toàn bộ phụ lục văn bản công báo trên cổng Chính phủ</span>
                              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                                <ChevronRight size={14} className="text-white/80 group-hover:scale-110 transition-transform" />
                              </div>
                            </button>
                          </div>

                          {/* Bottom Blue Block */}
                          <div className="bg-[#a50b12] rounded-[24px] p-5 shadow-sm text-white flex items-center justify-between cursor-pointer hover:bg-[#8c1c1c] transition-all relative overflow-hidden group border border-red-950/20">
                            {/* Decorative Database Icon Watermark */}
                            <div className="absolute -right-4 -bottom-6 opacity-5 rotate-12 group-hover:rotate-0 transition-transform duration-700">
                                <Database size={100} />
                            </div>
                            
                            <div className="flex items-center gap-4 relative z-10">
                              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/20 shadow-inner backdrop-blur-sm">
                                <Database size={24} className="text-yellow-400" />
                              </div>
                              <div>
                                <h4 className="text-[17px] font-black tracking-wide leading-tight">Cơ sở dữ liệu Quốc gia</h4>
                                <p className="text-lg font-medium text-yellow-100/90 tracking-wide mt-0.5">Hệ thống văn bản quy phạm pháp luật Trung ương toàn quốc</p>
                              </div>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 relative z-10 group-hover:bg-white/20 transition-colors shadow-inner">
                              <ChevronRight size={16} className="text-white" />
                            </div>
                          </div>
                        </div>"""

new_content = re.sub(r'\{\/\* Right Block: 9 Banners \*\/\}.*?(?=\s*<\/div>\s*<\/div>\s*\{\/\* PILLAR 2: VĂN BẢN & ĐIỀU HÀNH \*\/})', congbao_original, content, flags=re.DOTALL)

with open('src/components/GovPortal.tsx', 'w') as f:
    f.write(new_content)
