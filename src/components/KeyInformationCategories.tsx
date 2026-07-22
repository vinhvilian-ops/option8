import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronRight, 
  Sparkles, 
  MessageSquare, 
  GraduationCap, 
  HeartPulse,
  CheckCircle,
  Calendar,
  ChevronDown,
  BookOpen
} from "lucide-react";

export default function KeyInformationCategories() {
  const [activeCategoryTab, setActiveCategoryTab] = useState<string>("");
  const [activeCategoryModal, setActiveCategoryModal] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const categoryDetails = {
    "policy": {
      id: "policy",
      title: "Khoa học & Công nghệ",
      subtitle: "Hỗ trợ đề án sáng tạo, bảo tồn môi trường sinh thái & chuyển giao công nghệ cao",
      bgImg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
      icon: Sparkles,
      color: "blue",
      badge: "Tin Mới",
      content: [
        {
          id: "p-1",
          tag: "Dữ liệu sinh thái",
          title: "Ứng dụng hệ thống cảm biến thông minh giám sát chất lượng rạn san hô Nha Trang.",
          date: "Cập nhật - 28/05/2026",
          desc: "Dự án liên kết khoa học phục vụ quản lý môi trường, kịp thời cảnh báo hiện tượng tẩy trắng san hô do biến đổi khí hậu toàn cầu.",
          img: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=300&auto=format&fit=crop"
        },
        {
          id: "p-2",
          tag: "Ươm mầm sáng tạo",
          title: "Quỹ phát triển Khoa học Công nghệ hỗ trợ 100% kinh phí bảo hộ sở hữu trí tuệ cho start-up.",
          date: "Cập nhật - 25/05/2026",
          desc: "Chương trình tài trợ thúc đẩy nghiên cứu ứng dụng công nghệ xanh của doanh nghiệp khởi nghiệp đổi mới sáng tạo địa phương.",
          img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=300&auto=format&fit=crop"
        },
        {
          id: "p-3",
          tag: "Chuyển giao CN",
          title: "Chuyển giao công nghệ chiết xuất hoạt chất sinh học biển phục vụ bào chế dược liệu.",
          date: "Cập nhật - 18/05/2026",
          desc: "Đại học Nha Trang công bố thành quả chiết tách rong biển chất lượng cao đạt chuẩn y tế xuất khẩu.",
          img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=300&auto=format&fit=crop"
        }
      ]
    },
    "consult": {
      id: "consult",
      title: "Ý kiến Y tế & Giáo dục",
      subtitle: "Tiếp thu ý kiến xây dựng chính sách học bổng, nâng tầm trạm y tế phường xã",
      bgImg: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
      icon: MessageSquare,
      color: "teal",
      badge: "Ý Kiến",
      content: [
        {
          id: "c-1",
          tag: "Học đường số",
          title: "Tham vấn dự thảo kế hoạch phổ cập phòng học tương tác thông minh cho học sinh vùng cao.",
          date: "Kết thúc nhận góp ý - 15/06/2026",
          desc: "Nhận phản hồi từ thầy cô giáo và phụ huynh về phương án trang bị máy chiếu, máy tính bảng phục vụ bài giảng trực quan số.",
          img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=300&auto=format&fit=crop"
        },
        {
          id: "c-2",
          tag: "Y tế cơ sở",
          title: "Lấy ý kiến nâng cấp danh mục thuốc bảo hiểm y tế chi trả tại các trạm y tế tuyến xã.",
          date: "Kết thúc nhận góp ý - 25/06/2026",
          desc: "Nhằm giúp bệnh nhân nghèo, người già neo đơn dễ dàng tiếp cận nguồn dược phẩm thiết yếu đầy đủ ngay tại cơ sở.",
          img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=300&auto=format&fit=crop"
        },
        {
          id: "c-3",
          tag: "Y tế học đường",
          title: "Dự thảo chương trình tư vấn sức khỏe tâm lý học đường toàn tỉnh giai đoạn 2026 - 2030.",
          date: "Nhận đóng góp - 10/06/2026",
          desc: "Nâng cao nhận thức phòng tránh trầm cảm học đường và bạo lực mạng, bảo vệ tinh thần lành mạnh cho thế hệ trẻ.",
          img: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=300&auto=format&fit=crop"
        }
      ]
    },
    "foreign": {
      id: "foreign",
      title: "Giáo dục & Đào tạo",
      subtitle: "Nâng cao chất lượng dạy học, học bổng phát triển nhân tài trẻ",
      bgImg: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
      icon: GraduationCap,
      color: "sky",
      badge: "Giáo Dục",
      content: [
        {
          id: "f-1",
          tag: "Nhân tài trẻ",
          title: "Khai mạc kỳ thi học sinh giỏi cấp tỉnh và trao học bổng nâng bước thủ khoa nghèo vượt khó.",
          date: "Sự kiện - 24/05/2026",
          desc: "Tỉnh Khánh Hòa vinh danh 120 gương học sinh nghèo nỗ lực đạt kết quả học tập xuất sắc toàn diện trong năm học.",
          img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=300&auto=format&fit=crop"
        },
        {
          id: "f-2",
          tag: "Liên kết đào tạo",
          title: "Sở Giáo dục và Đào tạo ký kết chương trình trao đổi đào tạo ngoại ngữ số với các viện quốc tế.",
          date: "Sự kiện - 20/05/2026",
          desc: "Học sinh các trường THPT chuyên được hỗ trợ kiểm tra năng lực ngoại ngữ chuẩn quốc tế miễn phí định kỳ.",
          img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=300&auto=format&fit=crop"
        },
        {
          id: "f-3",
          tag: "Môi trường số",
          title: "Ra mắt thư viện điện tử thông minh tích hợp AI hỗ trợ tự học cho giáo viên tiểu học toàn tỉnh.",
          date: "Cập nhật - 15/05/2026",
          desc: "Hệ tri thức số trực tuyến hỗ trợ giáo án tương tác, bài kiểm tra nhanh trực quan rút ngắn thời gian chuẩn bị lên lớp.",
          img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=300&auto=format&fit=crop"
        }
      ]
    },
    "iuu": {
      id: "iuu",
      title: "Y tế & Sức khỏe",
      subtitle: "Chăm sóc sức khỏe nhân dân, y tế dự phòng và bảo hiểm y tế toàn dân",
      bgImg: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop",
      icon: HeartPulse,
      color: "indigo",
      badge: "Y Tế",
      content: [
        {
          id: "i-1",
          tag: "Tiêm chủng mở rộng",
          title: "Sở Y tế ra quân chiến dịch tiêm phòng vắc-xin miễn phí bảo vệ sức khỏe trẻ thơ Khánh Hòa.",
          date: "Tiêu điểm - Hàng tháng",
          desc: "Bố trí 100% trạm y tế chuẩn bị đầy đủ các loại vắc-xin trong chương trình tiêm chủng mở rộng quốc gia an toàn, đúng lịch.",
          img: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=300&auto=format&fit=crop"
        },
        {
          id: "i-2",
          tag: "Y tế dự phòng",
          title: "Hướng dẫn phòng dịch mùa hè, bảo vệ an toàn vệ sinh thực phẩm trong môi trường học đường.",
          date: "Cẩm nang - 2026",
          desc: "Bản tin y tế hướng dẫn cách chăm sóc trẻ tránh sốc nhiệt, bảo đảm nguồn thức ăn sạch lành mạnh tại các bếp ăn trường bán trú.",
          img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=300&auto=format&fit=crop"
        },
        {
          id: "i-3",
          tag: "Bảo hiểm xã hội",
          title: "Tăng cường hỗ trợ 50% chi phí mua bảo hiểm y tế tự nguyện cho lao động tự do Khánh Hòa.",
          date: "Chính sách - 2026",
          desc: "Chính sách thiết thực chăm lo sức khỏe toàn diện cho ngư dân biển đảo và các gia đình lao động khó khăn trên địa bàn.",
          img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=300&auto=format&fit=crop"
        }
      ]
    }
  };

  return (
    <div className="w-full text-slate-800 relative select-none bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-200">
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -20, x: "-50%" }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#1E3A8A] border border-blue-500 text-white font-bold text-lg py-3 px-6 rounded-2xl shadow-2xl flex items-center gap-2.5 backdrop-blur"
          >
            <CheckCircle size={16} />
            <span>{toast}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4 CHUYÊN MỤC TRỌNG ĐIỂM (TAB HEADERS) */}
      <div className="mb-10 text-left">
        <div className="mb-6 flex items-center gap-3.5">
          <div className="w-12 h-12 bg-[#1E3A8A] text-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
            <BookOpen size={22} className="stroke-[1.8]" />
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-[#1E3A8A] uppercase tracking-tight leading-none text-left">
            Chuyên mục thông tin khoa giáo & y tế
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.values(categoryDetails).map((cat) => {
            const isSelected = activeCategoryTab === cat.id;

            return (
              <motion.div 
                key={cat.id}
                whileHover={{ scale: 1.02 }}
                onClick={() => {
                  if (activeCategoryTab === cat.id) {
                    setActiveCategoryTab("");
                    showToast(`Đã đóng chuyên mục: ${cat.title}`);
                  } else {
                    setActiveCategoryTab(cat.id);
                    showToast(`Đang hiển thị chuyên mục: ${cat.title}`);
                  }
                }}
                className={`relative h-56 rounded-3xl overflow-hidden group cursor-pointer shadow-md text-left transition-all ${
                  isSelected ? "ring-4 ring-[#1E3A8A] ring-offset-2" : "border border-slate-100"
                }`}
              >
                {/* Background Image */}
                <img
                  src={cat.bgImg}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                  alt={cat.title}
                />
                
                {/* Gradient Mask with text details */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A] via-[#1E3A8A]/40 to-transparent group-hover:from-[#1E3A8A]/90 transition-all flex flex-col justify-end p-5 text-left">
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-lg font-black uppercase text-white bg-[#1E3A8A]/85 backdrop-blur border border-white/20 px-3 py-1 rounded-full shadow-sm">
                      {cat.badge}
                    </span>
                  </div>

                  <div className="space-y-1.5 text-left">
                    <div className="flex items-center justify-between w-full">
                      <h4 className="text-white font-black tracking-tight text-base leading-tight drop-shadow group-hover:text-yellow-400 transition-colors uppercase text-left">
                        {cat.title}
                      </h4>
                      <motion.div
                        animate={{
                          y: [0, 4, 0],
                          rotate: isSelected ? 180 : 0
                        }}
                        transition={{
                          y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
                          rotate: { duration: 0.3 }
                        }}
                        className="relative flex items-center justify-center text-white/70 group-hover:text-yellow-400 transition-colors duration-300 shrink-0 ml-2"
                      >
                        <ChevronDown size={20} />
                        {cat.badge === "Tin Mới" && (
                          <>
                            <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full animate-ping" />
                            <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full" />
                          </>
                        )}
                      </motion.div>
                    </div>
                    <p className="text-lg text-white/85 font-medium leading-relaxed line-clamp-2 drop-shadow group-hover:text-white transition-colors">
                      {cat.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* DETAILED INLINE NEWS GRID - SIMILAR TO "TIN TỨC TRỌNG TÂM" */}
        <AnimatePresence mode="wait">
          {activeCategoryTab && (
            <motion.div
              key={activeCategoryTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="mt-10 pt-8 border-t border-slate-200 overflow-hidden text-left"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-4">
                <div className="text-left">
                  <h4 className="text-lg md:text-xl font-black text-[#1E3A8A] uppercase tracking-tight">
                    {categoryDetails[activeCategoryTab as keyof typeof categoryDetails].title} - Cập nhật mới nhất
                  </h4>
                  <p className="text-lg text-slate-500 font-semibold mt-1">
                    {categoryDetails[activeCategoryTab as keyof typeof categoryDetails].subtitle}
                  </p>
                </div>
                <button 
                  onClick={() => setActiveCategoryModal(activeCategoryTab)}
                  className="shrink-0 self-start sm:self-center flex items-center gap-1.5 text-lg font-black text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 transition-all px-4 py-2.5 rounded-xl uppercase tracking-wider cursor-pointer border-none"
                >
                  Tham gia thảo luận <ChevronRight size={14} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryDetails[activeCategoryTab as keyof typeof categoryDetails].content.map((item) => (
                  <div 
                    key={item.id}
                    onClick={() => showToast(`Bản tin: ${item.title}`)}
                    className="flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all cursor-pointer group text-left h-full"
                  >
                    <div className="h-40 overflow-hidden relative bg-slate-50">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute top-3 left-3 bg-blue-600/90 text-white text-lg font-black uppercase tracking-wider px-2.5 py-1 rounded-lg backdrop-blur-sm shadow-sm">
                        {item.tag}
                      </span>
                    </div>
                    <div className="p-4 flex flex-col justify-between flex-grow">
                      <div className="space-y-2 text-left">
                        <span className="text-lg font-bold text-slate-400 flex items-center gap-1.5 font-mono">
                          <Calendar size={12} /> {item.date}
                        </span>
                        <h5 className="text-[18px] font-black text-[#1E3A8A] leading-snug group-hover:text-blue-700 transition-colors line-clamp-2 uppercase">
                          {item.title}
                        </h5>
                        <p className="text-[18px] text-slate-500 font-semibold leading-relaxed line-clamp-3">
                          {item.desc}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-lg font-black text-blue-600 uppercase tracking-wider">
                        <span>Chi tiết sự kiện</span>
                        <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modal Popup for Categories */}
      <AnimatePresence>
        {activeCategoryModal && (() => {
          const cat = categoryDetails[activeCategoryModal as keyof typeof categoryDetails];
          if (!cat) return null;
          return (
            <div 
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setActiveCategoryModal(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full border border-slate-100 overflow-hidden relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header background with gentle gradient */}
                <div className="bg-gradient-to-r from-blue-900 via-[#1E3A8A] to-blue-800 text-white p-6 relative">
                  <button
                    onClick={() => setActiveCategoryModal(null)}
                    className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 transition-colors w-8 h-8 rounded-full flex items-center justify-center text-white font-black hover:scale-105 cursor-pointer border-none"
                    title="Đóng"
                  >
                    ✕
                  </button>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🏛️</span>
                    <div className="text-left">
                      <h4 className="text-lg font-black uppercase tracking-tight">{cat.title}</h4>
                      <p className="text-lg text-blue-300 font-bold mt-1 tracking-wide">{cat.subtitle}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8 space-y-5 max-h-[60vh] overflow-y-auto scrollbar-thin text-left">
                  {cat.content.map((item) => (
                    <div key={item.id} className="border-b border-slate-100 pb-5 last:border-0 last:pb-0 text-left">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-slate-100 text-[#1E3A8A] text-lg font-black uppercase tracking-wider px-2 py-0.5 rounded-md">
                          {item.tag}
                        </span>
                        <span className="text-slate-400 text-lg font-semibold">
                          {item.date}
                        </span>
                      </div>
                      <h5 className="text-[18px] font-black text-[#1E3A8A] leading-snug mb-1 text-left">
                        {item.title}
                      </h5>
                      <p className="text-[18px] text-slate-500 font-semibold leading-relaxed text-left">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Footer style */}
                <div className="bg-slate-50 border-t border-slate-100 p-4.5 flex justify-end gap-3">
                  <button
                    onClick={() => {
                      showToast(`Đã ghi nhận tương tác với chuyên mục: ${cat.title}`);
                      setActiveCategoryModal(null);
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-lg px-5 py-2.5 rounded-xl transition-all shadow-md uppercase tracking-wider cursor-pointer border-none"
                  >
                    Đồng ý & Đóng
                  </button>
                </div>
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>
    </div>
  );
}
