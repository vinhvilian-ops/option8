import React, { useState, useRef } from "react";
import { ChevronLeft, Calendar, Paperclip, Clock, MapPin, Users, User, Sun, Sunset } from "lucide-react";
import leHuyenImg from "../assets/images/le_huyen.png";
import nguyenThanhHaImg from "../assets/images/nguyen_thanh_ha.png";
import nguyenVietHungImg from "../assets/images/nguyen_viet_hung.png";
import nguyenLongBienImg from "../assets/images/nguyen_long_bien.png";
import tranHoaNamImg from "../assets/images/tran_hoa_nam.png";
import trinhMinhHoangImg from "../assets/images/trinh_minh_hoang.png";

import { motion, AnimatePresence } from "motion/react";

interface WeeklyScheduleProps {
  onBack: () => void;
}

const LEADERS = [
  { id: "all", name: "LỊCH CHUNG UBND TỈNH", role: "Tất cả lãnh đạo", avatar: null },
  { id: "nguyen-viet-hung", name: "NGUYỄN VIỆT HÙNG", role: "Chủ tịch UBND tỉnh", avatar: nguyenVietHungImg },
  { id: "nguyen-long-bien", name: "NGUYỄN LONG BIÊN", role: "Phó Chủ tịch Thường trực", avatar: nguyenLongBienImg },
  { id: "tran-hoa-nam", name: "TRẦN HÒA NAM", role: "Phó Chủ tịch", avatar: tranHoaNamImg },
  { id: "trinh-minh-hoang", name: "TRỊNH MINH HOÀNG", role: "Phó Chủ tịch", avatar: trinhMinhHoangImg },
  { id: "le-huyen", name: "LÊ HUYỀN", role: "Phó Chủ tịch", avatar: leHuyenImg },
  { id: "nguyen-thanh-ha", name: "NGUYỄN THANH HÀ", role: "Phó Chủ tịch", avatar: nguyenThanhHaImg }
];

const SCHEDULE_DATA = [
  {
    id: "t2",
    shortName: "T2",
    fullName: "Thứ 2",
    date: "04/05",
    events: [
      {
        time: "08:00",
        isMorning: true,
        title: "Lãnh đạo UBND tỉnh làm việc tại cơ quan",
        location: "Cơ quan UBND tỉnh",
        attendees: "",
        leaders: ["nguyen-viet-hung", "nguyen-long-bien", "trinh-minh-hoang"]
      },
      {
        time: "09:00",
        isMorning: true,
        title: "Chủ trì họp Thường trực Tỉnh ủy",
        location: "Tỉnh ủy",
        attendees: "",
        leaders: ["nguyen-viet-hung"]
      },
      {
        time: "09:00",
        isMorning: true,
        title: "Họp nghe báo cáo đề xuất xây dựng chính sách hỗ trợ công tác quản lý bảo vệ rừng trên địa bàn tỉnh",
        location: "Phòng họp T3, UBND tỉnh",
        attendees: "LĐVP: PCVP Trần Văn Hoài; CV: NNMT (Toản)",
        leaders: ["nguyen-thanh-ha"]
      },
      {
        time: "14:30",
        isMorning: false,
        title: "Họp BCĐ phát triển Khoa học công nghệ, ĐMST, CĐS và BCĐ về dữ liệu tỉnh",
        location: "Phòng họp T3, UBND tỉnh",
        attendees: "LĐVP: PCVP Lê Hữu Phước; CV: KgVx (Phương, Long)",
        leaders: ["nguyen-long-bien", "trinh-minh-hoang"]
      },
      {
        time: "16:30",
        isMorning: false,
        title: "Nghe Báo cáo về đề án nâng cấp Trường chính trị Lê Duẩn",
        location: "Hội trường UBND tỉnh",
        attendees: "LĐVP: PCVP Phạm Thị Hồng Lê; CV: KgVx (Duy), TH (Quang)",
        leaders: ["le-huyen"]
      }
    ]
  },
  {
    id: "t3",
    shortName: "T3",
    fullName: "Thứ 3",
    date: "05/05",
    events: [
      {
        time: "08:00",
        isMorning: true,
        title: "Chủ trì họp Hội đồng thi đua khen thưởng tỉnh",
        location: "Phòng họp T3, UBND tỉnh",
        attendees: "LĐVP: PCVP Nguyễn Hoài Nam; CV: NC (Đông)",
        leaders: ["nguyen-viet-hung"]
      },
      {
        time: "08:00",
        isMorning: true,
        title: "Kiểm tra các dự án phát triển quỹ đất",
        location: "Thực địa",
        attendees: "LĐVP: PCVP Trần Văn Hoài; CV: TH (Hằng)",
        leaders: ["tran-hoa-nam", "trinh-minh-hoang"]
      },
      {
        time: "08:00",
        isMorning: true,
        title: "Làm việc với UBND xã Lệ Thủy về tình hình sản xuất nông nghiệp và xây dựng NTM",
        location: "Xã Lệ Thủy",
        attendees: "LĐVP: Đại diện lãnh đạo VP; CV: NNMT (Toản, Tuấn Anh)",
        leaders: ["nguyen-thanh-ha"]
      },
      {
        time: "14:00",
        isMorning: false,
        title: "Tiếp xã giao Tổng Giám đốc Công ty Eni Việt Nam - Tập đoàn năng lượng đa quốc gia Italia",
        location: "Phòng khánh tiết UBND tỉnh",
        attendees: "LĐVP: PCVP Nguyễn Thanh Xuân; CV: TH (Quang)",
        leaders: ["nguyen-viet-hung", "nguyen-long-bien", "trinh-minh-hoang"]
      },
      {
        time: "14:00",
        isMorning: false,
        title: "Tiếp xúc cử tri của Đoàn ĐBQH tỉnh sau kỳ họp thứ nhất, Quốc hội khoá XVI",
        location: "Hội trường Đoàn ĐBQH, 88 Phạm Văn Đồng",
        attendees: "LĐVP: PCVP Nguyễn Cảnh Hưng; CV: KgVx (Ngọc Hà)",
        leaders: ["le-huyen", "tran-hoa-nam"]
      },
      {
        time: "17:30",
        isMorning: false,
        title: "Gặp mặt giữa Đoàn ĐBQH tỉnh với Lãnh đạo tỉnh",
        location: "Sun Spa Resort",
        attendees: "LĐVP: CVP Nguyễn Hoài Nam",
        leaders: ["nguyen-viet-hung", "nguyen-long-bien", "tran-hoa-nam", "le-huyen", "nguyen-thanh-ha"]
      }
    ]
  },
  {
    id: "t4",
    shortName: "T4",
    fullName: "Thứ 4",
    date: "06/05",
    events: [
      {
        time: "08:00",
        isMorning: true,
        title: "Họp thường kỳ UBND tỉnh tháng 4/2026",
        location: "Hội trường UBND tỉnh",
        attendees: "LĐVP: CVP, các PCVP; CV: TH (P.Linh), phòng TH và các CV",
        leaders: ["nguyen-viet-hung", "nguyen-long-bien", "tran-hoa-nam", "le-huyen", "nguyen-thanh-ha"]
      },
      {
        time: "08:30",
        isMorning: true,
        title: "Làm việc với Đoàn công tác của WB về dự án Đường bộ cao tốc Cam Lộ - Lao Bảo",
        location: "Phòng họp T1, UBND tỉnh",
        attendees: "LĐVP: PCVP Nguyễn Cảnh Hưng; CV: TH (Quang), CTXD (Hưng)",
        leaders: ["tran-hoa-nam", "trinh-minh-hoang"]
      },
      {
        time: "09:00",
        isMorning: true,
        title: "Dự Hội nghị công bố điều chỉnh quy hoạch tổng thể quốc gia và các quy hoạch vùng thời kỳ 2021-2030, tầm nhìn đến năm 2050",
        location: "Phòng họp T3, UBND tỉnh",
        attendees: "LĐVP: PCVP Nguyễn Cảnh Hưng; CV: TH (Quang), CTXD (Hưng)",
        leaders: ["nguyen-long-bien", "trinh-minh-hoang"]
      },
      {
        time: "14:00",
        isMorning: false,
        title: "Dự Hội nghị Ban Thường vụ Tỉnh uỷ lần thứ 11",
        location: "Tỉnh ủy",
        attendees: "",
        leaders: ["nguyen-viet-hung"]
      },
      {
        time: "14:00",
        isMorning: false,
        title: "Họp Ban Chỉ đạo 389",
        location: "Hội trường UBND tỉnh",
        attendees: "LĐVP: PCVP Nguyễn Cảnh Hưng; CV: CTXD (Thái)",
        leaders: ["nguyen-long-bien", "trinh-minh-hoang"]
      },
      {
        time: "14:00",
        isMorning: false,
        title: "Họp Ban tổ chức Lễ hội vì Hoà Bình",
        location: "Phòng họp T3, UBND tỉnh",
        attendees: "LĐVP: PCVP Phạm Thị Hồng Lê; CV: KgVx (Giang)",
        leaders: ["le-huyen"]
      }
    ]
  },
  {
    id: "t5",
    shortName: "T5",
    fullName: "Thứ 5",
    date: "07/05",
    events: [
      {
        time: "08:00",
        isMorning: true,
        title: "(i) Hội ý lãnh đạo UBND tỉnh; (ii) họp Đảng uỷ UBND tỉnh",
        location: "Phòng họp T3, UBND tỉnh",
        attendees: "LĐVP: CVP Nguyễn Hoài Nam, các PCVP; CV: TH (P.Linh, Khánh, Kiên)",
        leaders: ["nguyen-viet-hung", "nguyen-long-bien", "tran-hoa-nam", "le-huyen", "nguyen-thanh-ha"]
      },
      {
        time: "14:00",
        isMorning: false,
        title: "Kiểm tra tình hình thực hiện dự án trang trại chăn nuôi Gai Hân",
        location: "Thực địa",
        attendees: "LĐVP: PCVP Trần Văn Hoài; CV: NNMT (Toản, Tuấn Anh)",
        leaders: ["nguyen-thanh-ha"]
      },
      {
        time: "14:00",
        isMorning: false,
        title: "Làm việc với Đoàn công tác của WB về dự án Reptip",
        location: "Phòng họp T3, UBND tỉnh",
        attendees: "LĐVP: PCVP Nguyễn Cảnh Hưng; CV: TH (Quang), CTXD (Hưng)",
        leaders: ["tran-hoa-nam", "trinh-minh-hoang"]
      },
      {
        time: "14:00",
        isMorning: false,
        title: "Họp về Quy hoạch du lịch Phong Nha",
        location: "Hội trường UBND tỉnh",
        attendees: "LĐVP: PCVP Nguyễn Thanh Xuân; CV: CTXD (Sáu), KgVx (Thu Hà)",
        leaders: ["le-huyen"]
      }
    ]
  },
  {
    id: "t6",
    shortName: "T6",
    fullName: "Thứ 6",
    date: "08/05",
    events: [
      {
        time: "08:00",
        isMorning: true,
        title: "Làm việc với các sở, ngành, các chủ đầu tư đôn đốc giải ngân vốn đầu tư công",
        location: "Hội trường UBND tỉnh",
        attendees: "LĐVP: CVP Nguyễn Hoài Nam, PCVP: TH (Khánh) và các CV có liên quan",
        leaders: ["tran-hoa-nam", "trinh-minh-hoang"]
      },
      {
        time: "08:00",
        isMorning: true,
        title: "Làm việc với các sở, ngành bàn các giải pháp cải thiện chỉ số năng lực cạnh tranh cấp tỉnh (PCI)",
        location: "Phòng họp T3, UBND tỉnh",
        attendees: "LĐVP: PCVP Trần Văn Thanh; CV: TH (Mạnh Linh)",
        leaders: ["nguyen-long-bien", "trinh-minh-hoang"]
      },
      {
        time: "08:00",
        isMorning: true,
        title: "Làm việc với UBND xã Quảng Trạch về tình hình sản xuất nông nghiệp và xây dựng NTM",
        location: "Xã Quảng Trạch",
        attendees: "LĐVP: PCVP Trần Văn Hoài; CV: NNMT (Toản, Tuấn Anh)",
        leaders: ["nguyen-thanh-ha"]
      },
      {
        time: "08:00",
        isMorning: true,
        title: "Hội nghị trực tuyến đánh giá kết quả thực hiện chính sách BHXH, BHYT năm 2025, triển khai nhiệm vụ năm 2026 của Ban Chỉ đạo tỉnh",
        location: "Hội trường UBND tỉnh",
        attendees: "LĐVP: PCVP Lê Hữu Phước; CV: KgVx (Thu Hà)",
        leaders: ["le-huyen"]
      },
      {
        time: "08:00",
        isMorning: true,
        title: "Làm việc với Công ty MTIP và Liên doanh các NĐT dự án LNG Hải Lăng",
        location: "Phòng họp T1, UBND tỉnh",
        attendees: "LĐVP: PCVP Nguyễn Cảnh Hưng; CV: CTXD (Tài, Phương)",
        leaders: ["nguyen-viet-hung"]
      },
      {
        time: "14:00",
        isMorning: false,
        title: "Đi kiểm tra cơ sở",
        location: "Thực địa",
        attendees: "",
        leaders: ["tran-hoa-nam", "trinh-minh-hoang"]
      },
      {
        time: "14:00",
        isMorning: false,
        title: "Kiểm tra các công trình xây dựng hạ tầng trên địa bàn tỉnh",
        location: "Phía Nam tỉnh Quảng Trị",
        attendees: "LĐVP: PCVP Nguyễn Cảnh Hưng; CV: CTXD (Linh)",
        leaders: ["tran-hoa-nam", "trinh-minh-hoang"]
      },
      {
        time: "14:00",
        isMorning: false,
        title: "Họp nghe báo cáo Đề án nam du lịch quốc gia 2027",
        location: "Phòng họp T3, UBND tỉnh",
        attendees: "LĐVP: PCVP Phạm Thị Hồng Lê; CV: KgVx (Thu Hà, Giang)",
        leaders: ["le-huyen"]
      }
    ]
  },
  {
    id: "t7",
    shortName: "T7",
    fullName: "Thứ 7",
    date: "09/05",
    events: [
      {
        time: "Cả ngày",
        isMorning: true,
        title: "Trực lãnh đạo UBND tỉnh",
        location: "Trụ sở UBND tỉnh",
        attendees: "LĐVP: PCVP Trần Văn Thanh; CV: TH (Quang), HCTC (Mơ)",
        leaders: ["nguyen-long-bien", "tran-hoa-nam"]
      }
    ]
  },
  {
    id: "cn",
    shortName: "CN",
    fullName: "Chủ Nhật",
    date: "10/05",
    events: [
      {
        time: "Cả ngày",
        isMorning: true,
        title: "Trực lãnh đạo UBND tỉnh",
        location: "Trụ sở UBND tỉnh",
        attendees: "LĐVP: PCVP Phạm Thị Hồng Lê; CV: NC (Đông), HCTC (Mơ)",
        leaders: ["nguyen-viet-hung", "le-huyen", "nguyen-thanh-ha"]
      }
    ]
  }
];

export default function WeeklySchedule({ onBack }: WeeklyScheduleProps) {
  const [activeLeader, setActiveLeader] = useState("all");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const { left, width } = container.getBoundingClientRect();
    const x = e.clientX - left; 
    
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    const targetScrollLeft = (x / width) * maxScrollLeft;
    
    container.scrollLeft = targetScrollLeft;
  };

  const scrollToDay = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Filter schedule based on active leader
  const filteredSchedule = SCHEDULE_DATA.map(day => {
    const matchedEvents = day.events.filter(ev => 
      activeLeader === "all" || ev.leaders.includes(activeLeader)
    );
    return {
      ...day,
      events: matchedEvents,
      eventsCount: matchedEvents.length
    };
  }).filter(day => day.eventsCount > 0);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.3 }}
      className="bg-slate-50 font-sans pb-10"
    >
      {/* HEADER DIV */}
      <div className="bg-[#0b5d8f] text-white pt-6 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="1" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-6 text-lg font-semibold tracking-wide transition-colors"
          >
            <ChevronLeft size={16} /> QUAY LẠI CỔNG THÔNG TIN
          </button>

          <div className="flex items-start gap-4">
            <div className="bg-white/10 p-3 md:p-4 rounded-xl shrink-0 backdrop-blur-sm border border-white/20">
              <Calendar size={28} className="text-blue-100" />
            </div>
            <div className="flex flex-col mt-1.5">
              <span className="text-lg font-semibold tracking-[0.15em] text-blue-200 uppercase">Lịch công tác</span>
              <h1 className="text-xl md:text-2xl lg:text-[28px] font-black uppercase mt-1 leading-tight tracking-wide text-white drop-shadow-sm">
                Lịch công tác tuần của lãnh đạo UBND Thành phố
              </h1>
              <div className="mt-3 flex items-center font-medium opacity-90">
                <span className="text-lg border border-blue-500/50 bg-[#0b5d8f]/50 px-3 py-1.5 rounded-md text-[#facc15] shadow-sm">
                  Từ ngày <span className="font-bold">04/5/2026</span> đến ngày <span className="font-bold">10/5/2026</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT DIV */}
      <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT SIDEBAR (Span 3) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-xl shadow-[0_5px_15px_-3px_rgba(0,0,0,0.1)] border border-slate-200 overflow-hidden">
               <div className="bg-[#0b5d8f] text-white py-3.5 px-5 font-bold uppercase tracking-wider text-lg border-b border-[#0b5d8f]">
                 Tuần làm việc
               </div>
               <div className="divide-y divide-slate-100 p-2">
                 {filteredSchedule.map(day => (
                   <div 
                     key={`nav-${day.id}`}
                     onClick={() => scrollToDay(day.id)}
                     className="py-2.5 px-3 flex justify-between items-center cursor-pointer hover:bg-slate-50 hover:text-[#0b5d8f] transition-colors rounded-lg group"
                   >
                      <span className="text-lg text-slate-800 font-bold group-hover:text-[#0b5d8f] transition-colors">
                        {day.fullName} <span className="text-slate-500 font-semibold text-lg">({day.date})</span>
                      </span>
                      <span className="bg-blue-50 text-[#0b5d8f] font-bold px-2 py-0.5 rounded-full text-lg min-w-[24px] text-center">{day.eventsCount}</span>
                   </div>
                 ))}
                 {filteredSchedule.length === 0 && (
                   <div className="py-4 text-center text-lg text-slate-500 font-medium italic">
                     Không có lịch
                   </div>
                 )}
               </div>
            </div>

            <div className="bg-white rounded-xl shadow-[0_5px_15px_-3px_rgba(0,0,0,0.1)] border border-slate-200 p-5">
               <h3 className="font-bold text-[#0b5d8f] uppercase text-lg tracking-wider mb-4 border-b border-slate-100 pb-2">Chú thích</h3>
               <div className="space-y-4">
                 <div className="flex items-center gap-3">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#3b82f6] shadow-sm border border-blue-300"></div>
                    <span className="text-lg font-semibold text-slate-700">Buổi sáng</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#6366f1] shadow-sm border border-indigo-300"></div>
                    <span className="text-lg font-semibold text-slate-700">Buổi chiều</span>
                 </div>
               </div>
            </div>
            
            <button className="w-full bg-slate-50 hover:bg-slate-100 text-[#0b5d8f] font-bold py-3.5 px-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-center gap-2 transition-colors">
               <Paperclip size={18} /> Lịch chi tiết đính kèm
            </button>
          </div>

          {/* RIGHT CONTENT (Span 9) */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* LEADER FILTER */}
            <div 
              ref={scrollContainerRef}
              onMouseMove={handleMouseMove}
              className="bg-white rounded-xl shadow-[0_5px_15px_-3px_rgba(0,0,0,0.1)] border border-slate-200 p-2 overflow-x-auto flex gap-2 w-full hide-scrollbar"
              style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
            >
              {LEADERS.map(leader => (
                <button
                  key={leader.id}
                  onClick={() => setActiveLeader(leader.id)}
                  className={`flex flex-col items-center justify-center shrink-0 py-3 px-4 rounded-lg transition-all duration-200 border border-transparent ${
                    activeLeader === leader.id 
                      ? "bg-slate-100 border-slate-300 shadow-inner" 
                      : "hover:bg-slate-50 hover:border-slate-200"
                  }`}
                >
                  <div className={`w-[52px] h-[52px] rounded-full overflow-hidden flex items-center justify-center mb-2 ${
                    activeLeader === leader.id ? "bg-[#1E3A8A] text-white shadow-md border-2 border-blue-800" : "bg-slate-100 text-slate-500 border border-slate-200"
                  }`}>
                    {leader.avatar ? (
                      <img src={leader.avatar} alt={leader.name} className="w-full h-full object-cover object-top" referrerPolicy="no-referrer" />
                    ) : (
                      <User size={18} />
                    )}
                  </div>
                  <span className={`text-lg text-center w-full leading-tight whitespace-nowrap uppercase ${
                    activeLeader === leader.id ? "font-black text-[#1E3A8A]" : "font-bold text-[#1E3A8A]"
                  }`}>
                    {leader.name}
                  </span>
                  <span className="text-lg mt-1 whitespace-nowrap text-slate-900 font-medium">{leader.role}</span>
                </button>
              ))}
            </div>

            {filteredSchedule.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-16 text-center">
                <Calendar size={48} className="mx-auto text-slate-300 mb-4" />
                <h3 className="text-lg font-bold text-slate-700">Chưa có lịch công tác</h3>
                <p className="text-slate-500 mt-2">Không tìm thấy hoạt động nào phù hợp trong tuần này.</p>
              </div>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLeader}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-8 max-h-[800px] overflow-y-auto custom-scrollbar-light pr-2"
                >
                  {filteredSchedule.map(day => (
                     <div id={day.id} key={day.id} className="bg-white rounded-xl shadow-[0_5px_15px_-3px_rgba(0,0,0,0.1)] border border-slate-200 overflow-hidden flex flex-col scroll-mt-24">
                        <div className="bg-slate-50/80 px-6 py-4 border-b border-slate-200 flex items-center gap-4 relative overflow-hidden">
                           <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-100 to-transparent"></div>
                           <div className="bg-[#0b5d8f] text-white rounded-lg flex flex-col items-center justify-center p-2 min-w-[56px] shadow-sm z-10">
                              <span className="font-black text-lg">{day.shortName}</span>
                              <span className="text-lg font-bold opacity-90 mt-0.5">{day.date}</span>
                           </div>
                           <div className="z-10">
                              <h2 className="text-lg font-black text-[#0b5d8f] uppercase tracking-wide">{day.fullName}</h2>
                              <p className="text-lg text-slate-500 font-semibold mt-0.5">Ngày {day.date}/2026 — {day.eventsCount} hoạt động</p>
                           </div>
                        </div>
                        <div className="divide-y divide-slate-100">
                          {day.events.map((event, idx) => (
                            <div key={idx} className="p-5 sm:p-6 focus-within:bg-slate-50 transition-colors flex flex-col sm:flex-row gap-4 sm:gap-6 hover:bg-slate-50/50 group">
                              <div className="w-[110px] shrink-0 flex flex-col items-start gap-1">
                                <div className={`px-2.5 py-1.5 rounded border-l-2 font-bold text-lg flex items-center gap-1.5 shadow-sm ${
                                  event.time === "Cả ngày" 
                                    ? "bg-slate-100 text-slate-700 border-slate-400" 
                                    : event.isMorning 
                                      ? 'bg-blue-50 text-blue-700 border-blue-500' 
                                      : 'bg-indigo-50 text-indigo-700 border-indigo-500'
                                }`}>
                                   {event.time !== "Cả ngày" && (
                                     event.isMorning ? <Sun size={16} className="opacity-80" /> : <Sunset size={16} className="opacity-80" />
                                   )}
                                   {event.time}
                                </div>
                                {event.time === "Cả ngày" && (
                                  <span className="text-lg uppercase font-black tracking-widest ml-1 text-slate-600/80">
                                    CẢ NGÀY
                                  </span>
                                )}
                              </div>

                              <div className="flex-1 min-w-0 border-l border-transparent sm:border-slate-100 sm:pl-6">
                                 <h3 className="text-lg font-bold text-slate-800 leading-snug mb-3 pr-4 group-hover:text-[#0b5d8f] transition-colors">
                                    {event.title}
                                 </h3>
                                 <div className="flex flex-col gap-2.5">
                                    {event.location && (
                                      <div className="flex items-start gap-2 text-lg font-medium text-slate-600">
                                        <MapPin size={16} className="text-[#ef4444] shrink-0 mt-0.5" />
                                        <span className="leading-tight">{event.location}</span>
                                      </div>
                                    )}
                                    {event.attendees && (
                                      <div className="flex items-start gap-2 text-lg font-medium text-slate-600">
                                         <Users size={16} className="text-[#0b5d8f] shrink-0 mt-0.5" />
                                         <span className="leading-tight">{event.attendees}</span>
                                      </div>
                                    )}
                                 </div>
                              </div>
                            </div>
                          ))}
                        </div>
                     </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            )}
            
            <div className="text-center text-lg text-slate-400 font-medium py-6 px-4">
              <span className="italic">* Lịch công tác có thể được điều chỉnh tuỳ tình hình thực tế.</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

