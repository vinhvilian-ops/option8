import React, { useState } from "react";
import { 
  ArrowLeft, 
  Calendar, 
  Eye, 
  Share2, 
  Printer, 
  FileText, 
  FileSpreadsheet,
  Download, 
  ChevronRight,
  ChevronLeft,
  ShieldCheck,
  Building,
  User,
  Activity,
  Scroll,
  Briefcase,
  PhoneCall,
  Mail,
  MapPin,
  ExternalLink,
  PlayCircle,
  Play,
  Users
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import trongDongBg from "../assets/images/trong_dong.png";
import quocHuy from "../assets/images/quochuyvn.png";
import nguyenVietHungImg from "../assets/images/nguyen_viet_hung.png";
import nguyenLongBienImg from "../assets/images/nguyen_long_bien.png";
import tranHoaNamImg from "../assets/images/tran_hoa_nam.png";
import trinhMinhHoangImg from "../assets/images/trinh_minh_hoang.png";
import leHuyenImg from "../assets/images/le_huyen.png";
import nguyenThanhHaImg from "../assets/images/nguyen_thanh_ha.png";
import CitizenReceptionSchedule from "./CitizenReceptionSchedule";
import { LEADER_PROFILES } from "./GovPortal";

interface LeaderDetailProps {
  leader: {
    name: string;
    role: string;
    img: string;
    isMain?: boolean;
    detail?: string;
  };
  onBack: () => void;
  onSelectLeader?: (leader: any) => void;
}

export default function LeaderDetailPage({ leader, onBack, onSelectLeader }: LeaderDetailProps) {
  const profileData = LEADER_PROFILES[leader.name] || {
    name: leader.name,
    role: leader.role,
    dob: "Đang cập nhật",
    hometown: "Đang cập nhật",
    ethnicity: "Đang cập nhật",
    education: "Đang cập nhật",
    politicalTheory: "Đang cập nhật",
    partyJoinDate: "Đang cập nhật",
    process: [],
    tasks: []
  };

  const [activeProfileTab, setActiveProfileTab] = useState("thong-tin");

  const [activeTab, setActiveTab] = useState(() => {
    try {
      const saved = localStorage.getItem("leaderActiveTab");
      if (saved) return saved;
    } catch (e) {
      // ignore
    }
    return "home";
  });

  const [activeVideoSlide, setActiveVideoSlide] = useState(0);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);
  const [activeVideoTitle, setActiveVideoTitle] = useState<string>("");

  React.useEffect(() => {
    try {
      localStorage.setItem("leaderActiveTab", activeTab);
    } catch (e) {
      // ignore
    }
  }, [activeTab]);

  const homeActivities = [
    {
      title: "Phó Thủ tướng Lê Tiến Châu kiểm tra tiến độ dự án Trường phổ thông nội trú liên cấp các xã biên giới trên địa bàn tỉnh Khánh Hòa",
      date: "15/07/2026",
      summary: "(CTTĐT) - Sáng ngày 15/7, Đoàn công tác của Chính phủ do đồng chí Lê Tiến Châu, Ủy viên BCH Trung ương Đảng, Phó Thủ tướng Chính phủ, Trưởng Ban Chỉ đạo xây dựng trường học cho các xã biên giới làm...",
      img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=800",
      isMain: true
    },
    {
      title: "Quyết liệt triển khai các giải pháp, phấn đấu hoàn thành mục tiêu tăng trưởng kinh tế hai con số",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400"
    },
    {
      title: "Phiên chất vấn tập trung nhiều vấn đề cử tri quan tâm tại Kỳ họp HĐND tỉnh",
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=400"
    },
    {
      title: "HĐND tỉnh Khánh Hòa bầu bổ sung 5 Ủy viên UBND tỉnh nhiệm kỳ 2026-2031",
      img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=400"
    },
    {
      title: "Phấn đấu tăng trưởng kinh tế năm 2026 từ 10% trở lên theo kế hoạch đề ra",
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400"
    }
  ];

  const videoNews = [
    {
      title: "Tỉnh Khánh Hòa tổng kết công tác tuyển quân năm 2026",
      duration: "1:45",
      date: "12/07/2026",
      desc: "Hội nghị đánh giá toàn diện kết quả công tác tuyển chọn và gọi công dân nhập ngũ năm 2026 trên địa bàn tỉnh Khánh Hòa, đề ra phương hướng cho năm tiếp theo.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800",
      isMain: true,
      videoUrl: "https://www.youtube.com/embed/S_vLp_CidrY"
    },
    {
      title: `${leader.role} ${leader.name} thăm và tặng quà các gia đình chính sách`,
      duration: "1:20",
      date: "11/07/2026",
      desc: "Đoàn lãnh đạo tỉnh tổ chức thăm hỏi, động viên các gia đình có công với cách mạng nhân dịp kỷ niệm ngày Thương binh - Liệt sỹ.",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=400",
      videoUrl: "https://www.youtube.com/embed/L_S_A-W8BvM"
    },
    {
      title: `${leader.role} ${leader.name} tiếp xã giao Đoàn đại biểu Hiệp hội doanh nghiệp Nhật Bản`,
      duration: "1:37",
      date: "10/07/2026",
      desc: "Trao đổi cơ hội hợp tác đầu tư giữa các doanh nghiệp Nhật Bản và tỉnh Khánh Hòa trong lĩnh vực du lịch và hạ tầng đô thị.",
      img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=400",
      videoUrl: "https://www.youtube.com/embed/Z8mve7o1Y14"
    }
  ];

  const activities = [
    {
      title: `Phó Thủ tướng Lê Tiến Châu kiểm tra tiến độ dự án Trường phổ thông nội trú liên cấp các xã biên giới trên địa bàn tỉnh`,
      date: "12/07/2026",
      summary: `Sáng ngày 12/7, Đoàn công tác của Chính phủ do đồng chí Lê Tiến Châu, Ủy viên Trung ương Đảng, Phó Thủ tướng Chính phủ dẫn đầu đã đi kiểm tra thực tế tình hình triển khai xây dựng hạ tầng tại khu vực biên giới...`,
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600"
    },
    {
      title: `Quyết liệt triển khai các giải pháp, phấn đấu hoàn thành mục tiêu tăng trưởng hai con số`,
      date: "12/07/2026",
      summary: `Sáng 12/7, Ủy viên Trung ương Đảng, Phó Bí thư Tỉnh ủy, Chủ tịch UBND tỉnh ${leader.name} đã chủ trì hội nghị trực tuyến với các địa phương nhằm tháo gỡ các điểm nghẽn trong giải ngân vốn đầu tư công...`,
      img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600"
    },
    {
      title: `Phiên chất vấn tập vấn tập trung nhiều vấn đề cử tri quan tâm tại Kỳ họp thứ 2, HĐND tỉnh khóa IX`,
      date: "11/07/2026",
      summary: `Tiếp tục chương trình Kỳ họp thứ 2, HĐND tỉnh khóa IX, nhiệm kỳ 2026 - 2031, các đại biểu đã tập trung chất vấn về các giải pháp phục hồi kinh tế và đảm bảo an sinh xã hội cho người dân...`,
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600"
    },
    {
      title: `Tập trung tháo gỡ khó khăn cho các dự án trọng điểm trên địa bàn tỉnh`,
      date: "10/07/2026",
      summary: `Chủ tịch UBND tỉnh yêu cầu các sở, ngành cần phối hợp chặt chẽ hơn nữa để đẩy nhanh tiến độ giải phóng mặt bằng, đảm bảo tiến độ thi công cho các công trình trọng điểm cấp quốc gia và cấp tỉnh...`,
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600"
    },
    {
      title: `Đẩy mạnh cải cách hành chính, nâng cao chỉ số hài lòng của người dân và doanh nghiệp`,
      date: "09/07/2026",
      summary: `Trong 6 tháng đầu năm, tỉnh đã đạt được những kết quả khả quan trong việc đơn giản hóa thủ tục hành chính, rút ngắn thời gian xử lý hồ sơ thông qua mô hình một cửa điện tử hiện đại...`,
      img: "https://images.unsplash.com/photo-1454165833762-0204b21c674e?q=80&w=600"
    }
  ];

  const documents = [
    {
      id: "14/07/2026",
      title: `Chỉ thị của Chủ tịch UBND tỉnh về việc tăng cường phòng ngừa, đấu tranh xử lý thanh, thiếu niên, học sinh, sinh viên vi phạm pháp luật`,
      date: "14/07/2026",
      type: "Chỉ thị"
    },
    {
      id: "10/07/2026",
      title: `Công văn về việc triển khai các biện pháp cấp bách phòng, chống hạn hán và xâm nhập mặn trong mùa khô năm 2026`,
      date: "10/07/2026",
      type: "Công văn"
    },
    {
      id: "05/07/2026",
      title: `Quyết định phê duyệt quy hoạch chi tiết xây dựng tỷ lệ 1/500 Khu đô thị mới tại khu vực phía Tây tỉnh Khánh Hòa`,
      date: "05/07/2026",
      type: "Quyết định"
    },
    {
      id: "03/07/2026",
      title: `Hội nghị đối thoại giữa Chủ tịch Ủy ban nhân dân tỉnh với thanh niên trên địa bàn tỉnh năm 2026 dự kiến diễn ra trong Quý IV/2026`,
      date: "03/07/2026",
      type: "Hội nghị"
    },
    {
      id: "28/06/2026",
      title: `Phấn đấu duy trì Chỉ số SIPAS trong nhóm 05 địa phương dẫn đầu toàn quốc`,
      date: "28/06/2026",
      type: "Thông tin"
    },
    {
      id: "25/06/2026",
      title: `Công báo danh mục thủ tục hành chính được sửa đổi, bổ sung trong lĩnh vực quy hoạch đô thị và nông thôn`,
      date: "25/06/2026",
      type: "Công báo"
    },
    {
      id: "20/06/2026",
      title: `Thông báo kết luận của Chủ tịch UBND tỉnh tại cuộc họp nghe báo cáo tình hình triển khai các dự án giao thông trọng điểm`,
      date: "20/06/2026",
      type: "Thông báo"
    },
    {
      id: "15/06/2026",
      title: `Kế hoạch hành động triển khai thực hiện Chiến lược phát triển bền vững kinh tế biển Việt Nam trên địa bàn tỉnh`,
      date: "15/06/2026",
      type: "Kế hoạch"
    }
  ];

  const duties = leader.isMain ? [
    { label: "1. Lãnh đạo, quản lý, điều hành chung và toàn diện mọi hoạt động của UBND tỉnh." },
    { 
      label: "2. Phụ trách, theo dõi các đơn vị:", 
      sub: "Công an tỉnh, Bộ Chỉ huy Quân sự tỉnh, Sở Tài chính, Sở Nội vụ, Sở Ngoại vụ, Thanh tra tỉnh, Ban Quản lý Khu kinh tế Vân Phong." 
    },
    { 
      label: "3. Trực tiếp chỉ đạo, điều hành các lĩnh vực công tác:", 
      items: [
        "Thực hiện Nghị quyết số 09-NQ/TW ngày 28/01/2022 của Bộ Chính trị về xây dựng, phát triển tỉnh Khánh Hòa đến năm 2030, tầm nhìn đến năm 2045.",
        "Phụ trách công tác xây dựng thể chế, chính sách pháp luật thuộc thẩm quyền của UBND tỉnh; kế hoạch phát triển kinh tế - xã hội; kế hoạch đầu tư công trung hạn và hàng năm.",
        "Công tác quy hoạch tỉnh; quy hoạch xây dựng (bao gồm chỉ đạo công tác quy hoạch chung, quy hoạch phân khu và điều chỉnh tổng thể).",
        "Trực tiếp chỉ đạo, xem xét phê duyệt danh mục các dự án kêu gọi và xúc tiến đầu tư, dự án làm cơ sở để chấp thuận chủ trương đầu tư.",
        "Công tác an ninh, quốc phòng, tổ chức bộ máy, công tác cán bộ, cải cách hành chính, thi đua khen thưởng, kỷ luật."
      ] 
    }
  ] : [
    { label: "1. Giúp Chủ tịch UBND tỉnh chỉ đạo, điều hành một số lĩnh vực công tác theo sự phân công." },
    { 
      label: "2. Trực tiếp chỉ đạo các lĩnh vực:", 
      items: [
        "Công nghiệp, thương mại, du lịch; quản lý thị trường.",
        "Phát triển các loại hình doanh nghiệp; kinh tế tập thể.",
        "Phối hợp chỉ đạo công tác thu ngân sách nhà nước."
      ] 
    },
    { label: "3. Theo dõi và chỉ đạo các sở, ngành: Sở Công Thương, Sở Du lịch, Ban Quản lý Khu kinh tế Vân Phong." }
  ];

  const menuItems = [
    { id: "home", label: "TRANG CHỦ" },
    { id: "profile", label: "HỒ SƠ" },
    { id: "duties", label: "PHÂN CÔNG NHIỆM VỤ" },
    { id: "activities", label: "HOẠT ĐỘNG" },
    { id: "directives", label: "CHỈ ĐẠO" },
    { id: "history", label: "LÃNH ĐẠO QUA CÁC THỜI KỲ" },
    { id: "feedback", label: "HỘP THƯ GÓP Ý" },
  ];

  const [activeDay, setActiveDay] = useState<string>("all");

  const scheduleData = [
    {
      day: "Thứ Hai",
      date: "13/07/2026",
      events: [
        { time: "07:30", content: "Họp Thường trực Tỉnh ủy" },
        { time: "09:30", content: "Triển khai nhiệm vụ tăng trưởng kinh tế 6 tháng cuối năm và cả năm 2026" },
        { time: "14:00", content: "Họp giao ban Lãnh đạo UBND tỉnh" },
        { time: "15:00", content: "Họp Ban Thường vụ Đảng ủy UBND tỉnh" }
      ]
    },
    {
      day: "Thứ Ba",
      date: "14/07/2026",
      events: [
        { time: "08:00", content: "Nghe báo cáo tiến độ thu tiền sử dụng đất cấp xã và cấp huyện/thị xã" },
        { time: "14:00", content: "Họp Ban Chỉ đạo phòng, chống tham nhũng, lãng phí, tiêu cực" }
      ]
    },
    {
      day: "Thứ Tư",
      date: "15/07/2026",
      events: [
        { time: "08:00", content: "Làm việc với Đoàn công tác Chính phủ do Phó Thủ tướng Chính phủ Lê Tiến Châu kiểm tra tiến độ Trường phổ thông nội trú liên cấp cho các xã biên giới" },
        { time: "14:00", content: "Làm việc với Đoàn công tác của Chính phủ" }
      ]
    },
    {
      day: "Thứ Năm",
      date: "16/07/2026",
      events: [
        { time: "08:00", content: "Họp giao ban Thường trực Tỉnh ủy" },
        { time: "14:00", content: "Họp Ban Thường vụ Tỉnh ủy" }
      ]
    },
    {
      day: "Thứ Sáu",
      date: "17/07/2026",
      events: [
        { time: "Buổi sáng", content: "Đi công tác" },
        { time: "14:00", content: "Tham dự Lễ Khai mạc Festival biển Khánh Hòa 2026 \"Sắc màu đại dương - vươn tầm quốc tế\"" }
      ]
    },
    {
      day: "Thứ Bảy",
      date: "18/07/2026",
      events: []
    },
    {
      day: "Chủ Nhật",
      date: "19/07/2026",
      events: []
    }
  ];

  const filteredSchedule = activeDay === "all" 
    ? scheduleData 
    : scheduleData.filter(d => d.day === activeDay);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="max-w-7xl mx-auto px-4 py-8 text-left bg-[#f8fafc]"
    >
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-slate-900 font-semibold mb-4 text-lg select-none">
        <span className="hover:text-red-600 cursor-pointer" onClick={onBack}>Trang chủ</span>
        <ChevronRight size={14} className="text-slate-900" />
        <span className="hover:text-red-600 cursor-pointer" onClick={onBack}>Chính quyền</span>
        <ChevronRight size={14} className="text-slate-900" />
        <span className="text-red-700 font-bold truncate max-w-xs">{leader.role}</span>
      </div>

      {/* Back Button */}
      <button 
        onClick={onBack}
        className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-lg transition-all mb-6 shadow-sm border border-slate-200 text-base"
      >
        <ArrowLeft size={16} /> Quay lại trang chủ
      </button>

      {/* Leader Profile Hero Section */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/40 overflow-hidden mb-6 relative">
        <div className="relative h-40 md:h-52 bg-white overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
        </div>
        
        <div className="px-6 md:px-12 pb-8 -mt-28 md:-mt-36 relative z-10">
          <div className="flex flex-col md:flex-row items-end gap-6 md:gap-10">
            {/* Avatar */}
            <div className="relative shrink-0">
              {/* Drum Background aligned to avatar center */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] opacity-[0.28] pointer-events-none z-[-1] animate-spin-slow-very"
                style={{ 
                  backgroundImage: `url(${trongDongBg})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />
              
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border-8 border-white shadow-xl overflow-hidden bg-slate-100 flex items-center justify-center relative z-10">
                {/* Fallback Icon */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-200">
                  <User size={100} />
                </div>
                <img 
                  src={leader.img} 
                  alt={leader.name} 
                  className="w-full h-full object-cover object-top relative z-10"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full shadow-lg flex items-center justify-center p-2 border-2 border-slate-50 z-20">
                <img src={quocHuy} alt="Quốc huy" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Name & Title */}
            <div className="flex-1 text-center md:text-left mb-2 md:mb-4">
              <h1 className="text-3xl md:text-5xl font-black text-[#1E3A8A] uppercase tracking-tighter mb-1">
                {leader.name}
              </h1>
              <p className="text-lg md:text-2xl font-bold text-black tracking-tight">
                {leader.role}
              </p>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-5">
                <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100 text-slate-900 text-base">
                  <Mail size={14} className="text-blue-600" /> {leader.name.toLowerCase().replace(/ /g, '')}@khanhhoa.gov.vn
                </div>
                <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100 text-slate-900 text-base">
                  <PhoneCall size={14} className="text-green-600" /> 0258.3822.XXX
                </div>
                <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100 text-slate-900 text-base">
                  <MapPin size={14} className="text-red-600" /> UBND Tỉnh Khánh Hòa
                </div>
              </div>
            </div>

            <div className="shrink-0 flex gap-2 mb-4">
              <button className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-900 transition-all shadow-sm">
                <Printer size={18} />
              </button>
              <button className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-900 transition-all shadow-sm">
                <Share2 size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Subtle accent line at bottom of entire card */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-blue-800 to-red-600 opacity-80"></div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-white border border-slate-200 rounded-2xl mb-8 overflow-hidden shadow-sm">
        <div className="flex overflow-x-auto scrollbar-hide bg-slate-50/50">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-6 py-4 font-black text-lg uppercase tracking-tight transition-all relative shrink-0 border-r border-slate-100 last:border-r-0 ${
                activeTab === item.id 
                  ? "text-red-700 bg-white" 
                  : "text-slate-900 hover:text-[#1E3A8A] hover:bg-white/80"
              }`}
            >
              <span className="flex items-center gap-1.5">
                {activeTab === item.id && <div className="w-1 h-1 rounded-full bg-red-600" />}
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Main Content Area */}
        <div className="lg:col-span-8 flex flex-col h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl border border-slate-200 shadow-xl shadow-slate-200/20 overflow-hidden flex-1 flex flex-col"
            >
              {activeTab === "home" && (
                <div className="p-0">
                  {/* Hoạt động Section */}
                  <div className="p-6 md:p-8 border-b border-slate-100">
                    <div className="flex items-center gap-2 mb-6 text-[#1E3A8A]">
                      <h3 className="text-xl font-black uppercase tracking-tight">Hoạt động</h3>
                    </div>

                    <div className="space-y-8">
                      {/* Featured activity */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 group cursor-pointer">
                        <div className="lg:col-span-7 h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg border border-slate-100">
                          <img src={homeActivities[0].img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="lg:col-span-5 flex flex-col justify-center">
                          <h4 className="text-2xl font-black text-[#1E3A8A] leading-tight mb-4 group-hover:text-blue-600 transition-colors">
                            {homeActivities[0].title}
                          </h4>
                          <p className="text-slate-900 font-bold text-lg leading-relaxed line-clamp-4">
                            {homeActivities[0].summary}
                          </p>
                        </div>
                      </div>

                      {/* Secondary activities grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {homeActivities.slice(1).map((item, idx) => (
                          <div key={idx} className="group cursor-pointer space-y-3">
                            <div className="aspect-video rounded-xl overflow-hidden shadow-sm border border-slate-100">
                              <img src={item.img} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <h5 className="text-base font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                              {item.title}
                            </h5>
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-end">
                        <button onClick={() => setActiveTab("activities")} className="text-blue-600 font-black text-base uppercase tracking-widest hover:underline">
                          Xem thêm
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Tin Video Section */}
                  <div className="p-6 md:p-8 bg-white">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-2 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center shadow-sm">
                          <Play size={18} fill="currentColor" className="ml-0.5 text-white" />
                        </div>
                        <h3 className="text-xl font-black uppercase tracking-tight text-[#1E3A8A]">Tin video</h3>
                      </div>
                      <button className="text-lg text-slate-700 hover:text-blue-500 font-bold flex items-center gap-1 transition-colors group bg-transparent border-0 cursor-pointer uppercase tracking-tighter">
                        Xem tất cả <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>

                    <div className="flex flex-col gap-6">
                      {/* Main Video Player with Navigation */}
                      <div className="relative w-full aspect-video md:aspect-[16/10] rounded-xl overflow-hidden shadow-lg border border-slate-200/80 group/vslider bg-slate-950">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeVideoSlide}
                            initial={{ opacity: 0, scale: 1.01 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.99 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="absolute inset-0 w-full h-full cursor-pointer"
                            onClick={() => {
                              const activeSlideItem = videoNews[activeVideoSlide];
                              setActiveVideoUrl(activeSlideItem.videoUrl || "https://www.youtube.com/embed/S_vLp_CidrY");
                              setActiveVideoTitle(activeSlideItem.title);
                            }}
                          >
                            <img 
                              src={videoNews[activeVideoSlide].img} 
                              alt={videoNews[activeVideoSlide].title}
                              referrerPolicy="no-referrer"
                              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover/vslider:scale-[1.01]"
                            />
                            
                            {/* Subtle dim overlay */}
                            <div className="absolute inset-0 bg-black/10 group-hover/vslider:bg-black/20 transition-all duration-300 pointer-events-none" />

                            {/* Prominent Play Icon in the center */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#1e3a8a] hover:bg-blue-600 rounded-full flex items-center justify-center text-white shadow-xl transform group-hover/vslider:scale-110 transition-all duration-300">
                                <Play size={36} className="ml-1.5" fill="currentColor" />
                              </div>
                            </div>

                            {/* Duration Badge */}
                            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded text-base font-bold border border-white/10 z-10">
                              {videoNews[activeVideoSlide].duration}
                            </div>
                          </motion.div>
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveVideoSlide((prev) => (prev - 1 + videoNews.length) % videoNews.length);
                          }}
                          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 hover:bg-blue-600/95 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer shadow-2xl"
                        >
                          <ChevronLeft size={22} strokeWidth={2.5} />
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveVideoSlide((prev) => (prev + 1) % videoNews.length);
                          }}
                          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 hover:bg-blue-600/95 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer shadow-2xl"
                        >
                          <ChevronRight size={22} strokeWidth={2.5} />
                        </button>

                        {/* Bullet Indicators */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                          {videoNews.map((_, index) => (
                            <button
                              key={index}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveVideoSlide(index);
                              }}
                              className={`w-2 h-2 rounded-full transition-all duration-300 border-0 p-0 cursor-pointer ${
                                index === activeVideoSlide ? "bg-white w-6" : "bg-white/50 hover:bg-white/85"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Text Information Below Main Video */}
                      <div className="w-full text-left">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-8 border-t-2 border-[#1e3a8a]"></span>
                          <span className="text-[#1e3a8a] font-black text-lg uppercase tracking-wider">
                            {videoNews[activeVideoSlide].date || "19/05/2026"}
                          </span>
                        </div>

                        <h4 
                          className="text-slate-950 font-black text-2xl md:text-3xl leading-snug mb-2 hover:text-[#1e3a8a] transition-colors cursor-pointer"
                          onClick={() => {
                            const activeSlideItem = videoNews[activeVideoSlide];
                            setActiveVideoUrl(activeSlideItem.videoUrl || "https://www.youtube.com/embed/S_vLp_CidrY");
                            setActiveVideoTitle(activeSlideItem.title);
                          }}
                        >
                          {videoNews[activeVideoSlide].title}
                        </h4>
                        <p className="text-slate-900 text-lg font-bold leading-relaxed mb-6">
                          {videoNews[activeVideoSlide].desc || "Bản tin truyền hình cập nhật các hoạt động chỉ đạo, điều hành nổi bật của Lãnh đạo UBND tỉnh trong công tác phát triển kinh tế - xã hội địa phương."}
                        </p>

                        {/* Small Video Items Grid Below */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-5 border-t border-slate-100">
                          {videoNews.map((item, i) => {
                            const isActive = activeVideoSlide === i;
                            return (
                              <div 
                                key={i} 
                                onClick={() => setActiveVideoSlide(i)}
                                className="flex gap-4 items-center bg-transparent border-0 rounded-none p-1 transition-all duration-300 cursor-pointer text-left group/small"
                              >
                                <div className={`relative w-28 h-20 md:w-32 md:h-24 rounded-xl overflow-hidden shrink-0 bg-slate-950 shadow-sm border transition-all duration-300 ${
                                  isActive ? "border-2 border-blue-600 scale-105 shadow-md" : "border-slate-200/60"
                                }`}>
                                  <img 
                                    src={item.img} 
                                    alt={item.title} 
                                    referrerPolicy="no-referrer"
                                    className="w-full h-full object-cover group-hover/small:scale-105 transition-transform"
                                  />
                                  <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover/small:bg-black/30 transition-all">
                                    <Play size={12} className={`${isActive ? "text-blue-400 scale-110" : "text-white"} drop-shadow-md transition-all`} fill="currentColor" />
                                  </div>
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h5 className={`font-extrabold text-base leading-snug transition-colors line-clamp-2 ${
                                    isActive ? "text-blue-600 font-black" : "text-[#1e3a8a] group-hover/small:text-blue-700"
                                  }`}>
                                    {item.title}
                                  </h5>
                                  <span className={`text-lg font-bold block mt-1 ${isActive ? "text-blue-700 font-black" : "text-slate-900"}`}>
                                    {item.duration} {isActive && "• Đang chọn"}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "profile" && (
                <div className="p-0">
                  {/* Tabs within Profile */}
                  <div className="flex border-b border-slate-200">
                    <button
                      onClick={() => setActiveProfileTab("thong-tin")}
                      className={`px-8 py-4 font-black uppercase tracking-wider text-base transition-colors ${
                        activeProfileTab === "thong-tin"
                          ? "text-red-700 border-b-2 border-red-700 bg-red-50/50"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      Thông tin chung
                    </button>
                    <button
                      onClick={() => setActiveProfileTab("cong-tac")}
                      className={`px-8 py-4 font-black uppercase tracking-wider text-base transition-colors ${
                        activeProfileTab === "cong-tac"
                          ? "text-red-700 border-b-2 border-red-700 bg-red-50/50"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      Quá trình công tác
                    </button>
                  </div>

                  <div className="p-8 md:p-12">
                    {activeProfileTab === "thong-tin" && (
                      <div className="space-y-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                          <div className="flex flex-col gap-1 border-b border-slate-100 pb-2">
                            <span className="text-slate-700 font-bold uppercase tracking-wider text-base">Họ và tên</span>
                            <span className="text-[#1E3A8A] font-black text-xl">{profileData.name}</span>
                          </div>
                          <div className="flex flex-col gap-1 border-b border-slate-100 pb-2">
                            <span className="text-slate-700 font-bold uppercase tracking-wider text-base">Chức vụ</span>
                            <span className="text-slate-900 font-bold text-lg">{profileData.role}</span>
                          </div>
                          <div className="flex flex-col gap-1 border-b border-slate-100 pb-2">
                            <span className="text-slate-700 font-bold uppercase tracking-wider text-base">Ngày sinh</span>
                            <span className="text-slate-900 font-bold text-lg">{profileData.dob}</span>
                          </div>
                          <div className="flex flex-col gap-1 border-b border-slate-100 pb-2">
                            <span className="text-slate-700 font-bold uppercase tracking-wider text-base">Quê quán</span>
                            <span className="text-slate-900 font-bold text-lg">{profileData.hometown}</span>
                          </div>
                          <div className="flex flex-col gap-1 border-b border-slate-100 pb-2">
                            <span className="text-slate-700 font-bold uppercase tracking-wider text-base">Dân tộc</span>
                            <span className="text-slate-900 font-bold text-lg">{profileData.ethnicity}</span>
                          </div>
                          <div className="flex flex-col gap-1 border-b border-slate-100 pb-2">
                            <span className="text-slate-700 font-bold uppercase tracking-wider text-base">Ngày vào Đảng</span>
                            <span className="text-slate-900 font-bold text-lg">{profileData.partyJoinDate}</span>
                          </div>
                          <div className="flex flex-col gap-1 border-b border-slate-100 pb-2">
                            <span className="text-slate-700 font-bold uppercase tracking-wider text-base">Trình độ chuyên môn</span>
                            <span className="text-slate-900 font-bold text-lg">{profileData.education}</span>
                          </div>
                          <div className="flex flex-col gap-1 border-b border-slate-100 pb-2">
                            <span className="text-slate-700 font-bold uppercase tracking-wider text-base">Lý luận chính trị</span>
                            <span className="text-slate-900 font-bold text-lg">{profileData.politicalTheory}</span>
                          </div>
                        </div>

                        {/* Nhiệm vụ section directly inside thong-tin */}
                        <div className="pt-8">
                          <h4 className="text-xl font-black text-[#1E3A8A] mb-4 border-b border-slate-100 pb-2">Nhiệm vụ</h4>
                          <div className="text-lg text-slate-900 space-y-4 leading-relaxed font-medium">
                            {profileData.tasks?.length > 0 ? (
                              profileData.tasks.map((item: string, idx: number) => (
                                <p key={idx} className="flex items-start gap-3 pl-1">
                                  <span className="text-red-700 shrink-0 font-bold mt-1.5"><span className="w-1.5 h-1.5 rounded-full bg-red-700 inline-block" /></span>
                                  <span>{item.startsWith("- ") ? item.substring(2) : item}</span>
                                </p>
                              ))
                            ) : (
                              <p className="italic text-slate-700">Đang cập nhật nhiệm vụ.</p>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {activeProfileTab === "cong-tac" && (
                      <div className="space-y-6">
                        <div className="text-lg text-slate-900 space-y-4 leading-relaxed font-medium">
                          {profileData.process?.length > 0 ? (
                            profileData.process.map((item: string, idx: number) => (
                              <p key={idx} className="flex items-start gap-3 pl-1">
                                <span className="text-red-700 shrink-0 font-bold mt-1.5"><span className="w-1.5 h-1.5 rounded-full bg-red-700 inline-block" /></span>
                                <span>{item.startsWith("- ") ? item.substring(2) : item}</span>
                              </p>
                            ))
                          ) : (
                            <p className="italic text-slate-700">Đang cập nhật quá trình công tác.</p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeTab === "duties" && (
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-6">
                    <h3 className="text-2xl font-black text-[#1E3A8A] uppercase tracking-tighter">Phân công nhiệm vụ</h3>
                  </div>
                  <div className="space-y-8">
                    <h4 className="text-xl font-black text-[#1E3A8A]">Đồng chí {leader.name} - {leader.role}</h4>
                    <p className="text-blue-600/70 font-normal text-base -mt-6">Cập nhật: 14/07/2026 10:45</p>
                    
                    {duties.map((duty: any, i) => (
                      <div key={i} className="space-y-4">
                        <p className="text-slate-900 font-bold text-lg leading-relaxed">{duty.label}</p>
                        {duty.sub && <p className="text-slate-900 ml-4 font-medium leading-relaxed">{duty.sub}</p>}
                        {duty.items && (
                          <ul className="ml-8 space-y-4">
                            {duty.items.map((item: string, j: number) => (
                              <li key={j} className="text-slate-900 font-medium leading-relaxed flex gap-3">
                                <span className="text-[#1E3A8A] mt-1.5 shrink-0"><div className="w-1.5 h-1.5 rounded-full bg-slate-400" /></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                    
                    <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-100 italic text-slate-900 text-base font-medium">
                      (Theo Quyết định số 128/QĐ-UBND ngày 15/01/2026 của Ủy ban nhân dân tỉnh Khánh Hòa về việc phân công công tác của Chủ tịch và các Phó Chủ tịch Ủy ban nhân dân tỉnh Khánh Hòa, nhiệm kỳ 2021 - 2026)
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "activities" && (
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                    <h3 className="text-2xl font-black text-[#1E3A8A] uppercase tracking-tighter">Hoạt động</h3>
                  </div>
                  <div className="space-y-6">
                    {activities.map((item, i) => (
                      <div key={i} className="group flex flex-col md:flex-row gap-6 pb-8 border-b border-slate-100 last:border-0 last:pb-0">
                        <div className="w-full md:w-72 h-48 md:h-52 rounded-2xl overflow-hidden shrink-0 shadow-md bg-slate-100 border border-slate-100">
                          <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="flex-1 flex flex-col justify-center">
                          <div className="flex items-center gap-2 text-slate-900 text-base mb-3 uppercase tracking-widest ">
                            <Calendar size={14} className="text-blue-600" /> {item.date}
                          </div>
                          <h4 className="text-xl font-black text-[#1E3A8A] leading-tight mb-3 group-hover:text-blue-600 transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-slate-900 text-base line-clamp-3 leading-relaxed mb-4">
                            {item.summary}
                          </p>
                          <button className="flex items-center gap-1.5 text-blue-600 font-black text-base uppercase tracking-widest hover:gap-2.5 transition-all w-fit">
                            Xem chi tiết <ChevronRight size={14} />
                          </button>
                        </div>
                      </div>
                    ))}
                    <div className="flex items-center justify-center pt-6 gap-2">
                      <button className="w-8 h-8 rounded bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-base font-bold">1</button>
                      <button className="w-8 h-8 rounded bg-blue-600 text-white flex items-center justify-center text-base font-bold">2</button>
                      <button className="w-8 h-8 rounded bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-base font-bold">3</button>
                      <span className="px-2 text-slate-300">...</span>
                      <button className="w-8 h-8 rounded bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-base font-bold">19</button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "directives" && (
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-6">
                    <h3 className="text-2xl font-black text-[#1E3A8A] uppercase tracking-tighter">Chỉ đạo</h3>
                  </div>
                  <div className="space-y-1">
                    {documents.map((doc, i) => (
                      <div key={i} className="py-5 border-b border-slate-50 last:border-0 hover:bg-slate-50/50 px-4 -mx-4 rounded-xl transition-all group">
                        <div className="flex flex-col gap-2">
                          <h4 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors">
                            {doc.title}
                          </h4>
                          <div className="flex items-center gap-3 text-slate-900 font-normal text-base uppercase tracking-widest">
                            <span className="flex items-center gap-1"><Calendar size={12} className="text-blue-600" /> {doc.date}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                    <button className="w-full mt-8 py-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-2xl text-slate-600 font-black uppercase tracking-widest text-base transition-all flex items-center justify-center gap-2">
                      Xem thêm chỉ đạo <ExternalLink size={14} />
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "calendar" && (
                <div className="p-6 md:p-10">
                  <div className="text-center mb-10">
                    <h3 className="text-3xl font-black text-[#1E3A8A] uppercase tracking-tight mb-2">Lịch công tác tuần</h3>
                    <p className="text-red-700 font-bold uppercase tracking-widest text-base">Lãnh đạo UBND tỉnh Khánh Hòa</p>
                  </div>

                  <div className="flex items-center gap-2 mb-6 text-red-600 font-bold border-b border-slate-100 pb-4">
                    Lịch làm việc cá nhân
                  </div>

                  <div className="mb-10 space-y-6">
                    <div className="text-[#1E3A8A] font-black text-xl">
                      Từ ngày 13/07/2026 đến ngày 19/07/2026
                    </div>
                    <div className="flex flex-wrap items-center gap-8">
                      <div className="flex items-center gap-3">
                        <span className="text-base font-black text-slate-700 whitespace-nowrap">Chọn năm:</span>
                        <select className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-base font-bold outline-none shadow-sm focus:border-blue-500 transition-all cursor-pointer">
                          <option>2026</option>
                        </select>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-base font-black text-slate-700 whitespace-nowrap">Chọn tuần:</span>
                        <select className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-base font-bold outline-none shadow-sm focus:border-blue-500 transition-all cursor-pointer md:min-w-[400px]">
                          <option>Tuần thứ 29 từ 13/07/2026 đến 19/07/2026</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Day Tabs */}
                  <div className="flex flex-wrap items-center gap-y-2 mb-8 select-none">
                    <button 
                      onClick={() => setActiveDay("all")}
                      className={`text-base px-3 py-1 rounded-lg transition-all duration-200 ${activeDay === "all" ? "font-black text-blue-600 bg-blue-50" : "font-bold text-slate-600 hover:text-blue-600 hover:bg-slate-50"}`}
                    >
                      Cả tuần
                    </button>
                    <span className="text-slate-300 mx-1">|</span>
                    {["Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy", "Chủ Nhật"].map((day, idx) => (
                      <React.Fragment key={day}>
                        <button 
                          onClick={() => setActiveDay(day)}
                          className={`text-base px-3 py-1 rounded-lg transition-all duration-200 ${activeDay === day ? "font-black text-blue-600 bg-blue-50" : "font-bold text-slate-600 hover:text-[#1E3A8A] hover:bg-slate-50"}`}
                        >
                          {day}
                        </button>
                        {idx < 6 && <span className="text-slate-300 mx-1">|</span>}
                      </React.Fragment>
                    ))}
                  </div>

                  <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                    {filteredSchedule.map((dayData, idx) => (
                      <div key={idx} className="border-b border-blue-100 last:border-0">
                        <div className="bg-blue-50/80 px-6 py-3 border-b border-blue-100 text-center font-black text-[#1E3A8A] text-base">
                          {dayData.day}, ngày {dayData.date}
                        </div>
                        {dayData.events.length > 0 ? (
                          dayData.events.map((event, eIdx) => (
                            <div key={eIdx} className="flex border-b border-slate-100 last:border-0 hover:bg-slate-50/30 transition-all">
                              <div className="w-24 md:w-32 py-4 px-4 md:px-6 border-r border-slate-100 text-center font-black text-[#1E3A8A] text-base shrink-0 flex items-center justify-center">
                                {event.time}
                              </div>
                              <div className="flex-1 py-4 px-6 text-base font-medium text-slate-700 leading-relaxed">
                                {event.content}
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="py-8 text-center text-slate-600 font-bold italic text-base">
                            Chưa có dữ liệu
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center md:justify-end gap-3 mt-8">
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-[#1E3A8A] font-black text-base uppercase shadow-sm hover:bg-slate-50 transition-all">
                      <FileText size={16} className="text-blue-600" /> Xuất file Word
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-green-700 font-black text-base uppercase shadow-sm hover:bg-slate-50 transition-all">
                      <FileSpreadsheet size={16} className="text-green-600" /> Xuất file Excel
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "reception" && (
                <div className="p-0">
                  <CitizenReceptionSchedule />
                </div>
              )}

              {activeTab === "feedback" && (
                <div className="p-8 md:p-12">
                  <div className="flex flex-col items-center text-center mb-10">
                    <h3 className="text-3xl font-black text-[#1E3A8A] uppercase tracking-tighter mb-4">Hộp thư góp ý</h3>
                    <p className="text-slate-900 font-medium max-w-2xl leading-relaxed">
                      Những ý kiến tâm huyết, xây dựng của bạn đọc sẽ được trân trọng chuyển tới Lãnh đạo tỉnh. Mời quý bạn đọc điền đầy đủ thông tin theo mẫu dưới đây để góp ý:
                    </p>
                  </div>

                  <div className="space-y-6 max-w-3xl mx-auto bg-slate-50/50 p-8 rounded-2xl border border-slate-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-base font-black text-slate-900 uppercase tracking-widest ml-1">Họ và tên *</label>
                        <input type="text" className="w-full px-5 py-3.5 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all outline-none font-medium text-slate-900" placeholder="Nhập họ và tên" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-base font-black text-slate-900 uppercase tracking-widest ml-1">Số điện thoại *</label>
                        <input type="text" className="w-full px-5 py-3.5 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all outline-none font-medium text-slate-900" placeholder="Số điện thoại" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-base font-black text-slate-900 uppercase tracking-widest ml-1">Email</label>
                        <input type="email" className="w-full px-5 py-3.5 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all outline-none font-medium text-slate-900" placeholder="Email liên hệ" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-base font-black text-slate-900 uppercase tracking-widest ml-1">Địa chỉ</label>
                        <input type="text" className="w-full px-5 py-3.5 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all outline-none font-medium text-slate-900" placeholder="Nhập địa chỉ" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-base font-black text-slate-900 uppercase tracking-widest ml-1">Tiêu đề góp ý *</label>
                      <input type="text" className="w-full px-5 py-3.5 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all outline-none font-medium text-slate-900" placeholder="Nhập tiêu đề" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-base font-black text-slate-900 uppercase tracking-widest ml-1">Nội dung *</label>
                      <textarea rows={6} className="w-full px-5 py-3.5 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all outline-none font-medium text-slate-900 resize-none" placeholder="Mô tả ý kiến góp ý của bạn..."></textarea>
                    </div>

                    <div className="flex items-center gap-6 py-4">
                      <label className="text-base font-black text-slate-900 uppercase tracking-widest">Công khai thông tin:</label>
                      <div className="flex items-center gap-4">
                        <label className="flex items-center gap-2 cursor-pointer group">
                          <input type="radio" name="public" className="w-4 h-4 text-red-600 focus:ring-red-500" defaultChecked />
                          <span className="text-base font-bold text-slate-900 group-hover:text-black transition-colors">Có</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer group">
                          <input type="radio" name="public" className="w-4 h-4 text-red-600 focus:ring-red-500" />
                          <span className="text-base font-bold text-slate-900 group-hover:text-black transition-colors">Không</span>
                        </label>
                      </div>
                    </div>

                    <div className="pt-4 flex flex-col md:flex-row gap-4">
                      <button className="flex-1 py-4 bg-[#1E3A8A] hover:bg-blue-800 text-white font-black uppercase tracking-widest text-base rounded-lg shadow-lg active:scale-95 transition-all">Gửi góp ý</button>
                      <button className="px-10 py-4 bg-white border border-slate-200 text-slate-600 font-black uppercase tracking-widest text-base rounded-lg hover:bg-slate-100 transition-all">Nhập lại</button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-6 flex flex-col h-full">
          {/* Calendar Box */}
          <div className="space-y-4">
            <button 
              onClick={() => setActiveTab("calendar")}
              className="w-full group bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-red-200 hover:shadow-lg transition-all flex items-center gap-5"
            >
              <div className="w-12 h-12 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"><Calendar size={28} /></div>
              <div className="text-left">
                <p className="text-slate-900 font-black uppercase tracking-widest text-base mb-1 group-hover:text-red-700 transition-colors">Lịch công tác</p>
                <p className="text-slate-900 text-base">Lịch làm việc của Lãnh đạo tỉnh</p>
              </div>
            </button>
            <button 
              onClick={() => setActiveTab("reception")}
              className="w-full group bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-blue-200 hover:shadow-lg transition-all flex items-center gap-5"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"><Users size={28} /></div>
              <div className="text-left">
                <p className="text-slate-900 font-black uppercase tracking-widest text-base mb-1 group-hover:text-blue-700 transition-colors">Lịch tiếp công dân</p>
                <p className="text-slate-900 text-base">Cập nhật lịch tiếp dân định kỳ</p>
              </div>
            </button>
          </div>

          {/* Related Block (Contextual Sidebar) */}
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xl shadow-slate-200/20">
            {activeTab === "duties" || activeTab === "directives" ? (
              <>
                <h3 className="text-xl font-black text-[#1E3A8A] uppercase tracking-tight pb-4 border-b border-slate-100 mb-6 flex items-center gap-2">
                  Hoạt động mới
                </h3>
                <div className="space-y-6">
                  {activities.slice(0, 4).map((item, idx) => (
                    <div key={idx} className="group cursor-pointer">
                      <div className="flex gap-4">
                        <div className="w-28 h-20 rounded-lg overflow-hidden shrink-0 bg-slate-100 shadow-sm border border-slate-100">
                          <img src={item.img} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="flex-1 min-w-0 flex flex-col justify-center">
                          <h4 className="text-base font-black text-slate-900 leading-snug line-clamp-2 group-hover:text-blue-700 transition-colors mb-1">{item.title}</h4>
                          <span className="text-base text-slate-900 font-bold uppercase block">{item.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  <button onClick={() => setActiveTab("activities")} className="text-blue-600 font-black text-base uppercase tracking-widest hover:underline pt-2">Xem thêm</button>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-xl font-black text-[#1E3A8A] uppercase tracking-tight pb-4 border-b border-slate-100 mb-6 flex items-center gap-2">
                  Chỉ đạo mới
                </h3>
                <div className="space-y-5">
                  {documents.slice(0, 5).map((doc, idx) => (
                    <div key={idx} className="group cursor-pointer">
                      <h4 className="text-base font-bold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">{doc.title}</h4>
                      <span className="text-base text-slate-900 font-normal uppercase mt-1 block">{doc.date}</span>
                    </div>
                  ))}
                  <button onClick={() => setActiveTab("directives")} className="text-blue-600 font-black text-base uppercase tracking-widest hover:underline pt-2">Xem thêm</button>
                </div>
              </>
            )}
          </div>

          {/* Leaders Carousel Sidebar */}
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xl shadow-slate-200/20">
            <h3 className="text-xl font-black text-[#1E3A8A] uppercase tracking-tight pb-4 border-b border-slate-100 mb-6 flex items-center gap-2">
              Lãnh đạo UBND Tỉnh
            </h3>
            <div className="space-y-4">
              {[
                { name: "NGUYỄN VIỆT HÙNG", role: "Chủ tịch UBND tỉnh", img: nguyenVietHungImg },
                { name: "NGUYỄN LONG BIÊN", role: "Phó Chủ tịch Thường trực", img: nguyenLongBienImg },
                { name: "TRẦN HÒA NAM", role: "Phó Chủ tịch", img: tranHoaNamImg },
                { name: "TRỊNH MINH HOÀNG", role: "Phó Chủ tịch", img: trinhMinhHoangImg },
                { name: "LÊ HUYỀN", role: "Phó Chủ tịch", img: leHuyenImg },
                { name: "NGUYỄN THANH HÀ", role: "Phó Chủ tịch", img: nguyenThanhHaImg }
              ].filter(l => l.name !== leader.name).map((item, idx) => (
                <div 
                  key={idx} 
                  className="group flex items-center gap-4 p-2 rounded-xl hover:bg-slate-50 transition-all cursor-pointer"
                  onClick={() => {
                    if (onSelectLeader) {
                      onSelectLeader(item);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                >
                  <div className="w-12 h-12 rounded-full bg-slate-100 overflow-hidden border-2 border-slate-200 shrink-0">
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-black text-slate-900 text-base leading-tight group-hover:text-blue-600 transition-colors mb-0.5">
                      {item.name}
                    </h4>
                    <p className="text-base font-bold text-slate-900 tracking-tighter">
                      {item.role}
                    </p>
                  </div>
                  <ChevronRight size={14} className="text-slate-300 group-hover:text-blue-400 transition-all" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {activeVideoUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-sm"
            onClick={() => setActiveVideoUrl(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 md:p-6 border-b border-white/10 bg-zinc-900">
                <h3 className="text-white font-black text-lg md:text-xl line-clamp-1 pr-8">
                  {activeVideoTitle}
                </h3>
                <button
                  onClick={() => setActiveVideoUrl(null)}
                  className="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all"
                >
                  <ArrowLeft className="rotate-45" size={24} />
                </button>
              </div>
              <div className="aspect-video w-full bg-black">
                <iframe
                  src={`${activeVideoUrl}?autoplay=1`}
                  title={activeVideoTitle}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
