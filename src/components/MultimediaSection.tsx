import React, { useState, useEffect, useRef } from "react";
import { 
  PlayCircle, 
  Image as ImageIcon, 
  FileText, 
  FileBarChart, 
  Mic, 
  ChevronRight,
  ChevronLeft,
  Play,
  Calendar
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const DATA = [
  {
    id: "video",
    title: "Video nổi bật",
    icon: PlayCircle,
    color: "text-blue-600",
    large: {
      image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1200", 
      date: "19/05/2026",
      title: "Khánh Hòa - Tầm nhìn chiến lược trở thành thành phố trực thuộc Trung ương",
      desc: "Định hướng phát triển và tập trung mọi nguồn lực đưa tỉnh trở thành đô thị thông minh, bền vững, là trung tâm kinh tế biển năng động lớn nhất của khu vực miền Trung.",
      isVideo: true,
      videoUrl: "https://www.youtube.com/embed/S_vLp_CidrY"
    },
    small: [
      { image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=400", title: "Chương trình nghệ thuật đặc sắc chào mừng Festival Biển Nha Trang", date: "18/05/2026", videoUrl: "https://www.youtube.com/embed/L_S_A-W8BvM" },
      { image: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=500&q=80", title: "Phát triển kinh tế biển bền vững tại tỉnh Khánh Hòa", date: "18/05/2026", videoUrl: "https://www.youtube.com/embed/Z8mve7o1Y14" },
      { image: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=400", title: "Tiềm năng du lịch sinh thái rừng núi Khánh Hòa", date: "18/05/2026", videoUrl: "https://www.youtube.com/embed/g6Pz4_qIcl8" },
      { image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80", title: "Bảo tồn tài nguyên biển và đa dạng sinh học Nha Trang", date: "18/05/2026", videoUrl: "https://www.youtube.com/embed/S_vLp_CidrY" },
    ]
  },
  {
    id: "image",
    title: "Hình ảnh đẹp",
    icon: ImageIcon,
    color: "text-[#1e3a8a]",
    large: {
      image: "https://images.unsplash.com/photo-1698822602738-4e320bf05b63?q=80&w=1200", 
      date: "18/05/2026",
      title: "Bản sắc văn hóa các dân tộc tại Khánh Hòa qua góc nhìn nhiếp ảnh nghệ thuật",
      desc: "Tổng hợp những khoảnh khắc đời thường sống động, tái hiện nét đẹp văn hóa truyền thống phong phú và tinh thần gắn kết bền chặt của cộng đồng cư dân vùng biển đảo.",
      isVideo: false
    },
    small: [
      { image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80", title: "Vẻ đẹp Vịnh Nha Trang buổi bình minh", date: "18/05/2026" },
      { image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=500&q=80", title: "Lễ hội Tháp Bà Ponagar năm 2024", date: "18/05/2026" },
      { image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80", title: "Cuộc sống ngư dân ven biển Nam Trung Bộ", date: "18/05/2026" },
      { image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=500&q=80", title: "Nét yên bình đảo hoang Sương mù Vân Phong", date: "18/05/2026" },
    ]
  },
  {
    id: "info",
    title: "Tin đồ họa (Infographics)",
    icon: FileBarChart,
    color: "text-blue-600",
    large: {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200", 
      date: "17/05/2026",
      title: "Tổng quan các chỉ tiêu tăng trưởng kinh tế - xã hội Khánh Hòa Quý I năm 2026",
      desc: "Hệ thống hóa số liệu phát triển trực quan sinh động về tốc độ tăng GRDP, chỉ số sản xuất công nghiệp và tỉ lệ giải ngân đầu tư công của các ban quản lý dự án.",
      isVideo: false
    },
    small: [
      { image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400", title: "Lộ trình chuyển đổi số tỉnh Khánh Hòa đến năm 2030", date: "18/05/2026" },
      { image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400", title: "Quy hoạch phân khu đô thị mới Cam Lâm", date: "18/05/2026" },
      { image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=400", title: "Bản đồ đầu tư hạ tầng giao thông trọng điểm", date: "18/05/2026" },
      { image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400", title: "Biểu đồ thu hút vốn FDI vào khu kinh tế Vân Phong", date: "18/05/2026" },
      { image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=400", title: "Infographics: Kết quả chỉ số cải cách hành chính (PAR INDEX) tỉnh Khánh Hòa", date: "17/05/2026" },
      { image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400", title: "Biểu đồ cơ cấu lao động và nhu cầu tuyển dụng tại Nha Trang", date: "16/05/2026" },
      { image: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=400", title: "Infographics: Cơ cấu kinh tế Khánh Hòa chuyển dịch đúng hướng", date: "15/05/2026" },
      { image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=400", title: "Biểu đồ kết quả thu hút khách du lịch quốc tế đến Nha Trang", date: "15/05/2026" },
      { image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=400", title: "Infographics: Phát triển kinh tế số và xã hội số tỉnh Khánh Hòa", date: "14/05/2026" },
      { image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=400", title: "Biểu đồ đầu tư các cụm công nghiệp trên địa bàn tỉnh", date: "13/05/2026" },
    ]
  },
  {
    id: "longform",
    title: "Bài viết chuyên sâu (Longforms)",
    icon: FileText,
    color: "text-blue-700",
    large: {
      image: "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?q=80&w=1200", 
      date: "16/05/2026",
      title: "Ký sự hành trình: Đánh thức tiềm năng kinh tế vùng cao phía Tây Khánh Hòa",
      desc: "Ghi chép chân thực về nỗ lực vượt khó vươn lên phát triển mô hình sinh kế nông nghiệp bền vững kết hợp khai thác thế mạnh du lịch homestay.",
      isVideo: false
    },
    small: [
      { image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=500&q=80", title: "Khánh Hòa: Khát vọng vươn mình ra biển lớn", date: "18/05/2026" },
      { image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=500&q=80", title: "Nghề làm muối truyền thống Hòn Khói", date: "18/05/2026" },
      { image: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=400", title: "Chuyện về những người giữ rừng ở Khánh Lê", date: "18/05/2026" },
      { image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=400", title: "Bảo tồn rạn san hô Hòn Mun: Những lực lượng thầm lặng", date: "18/05/2026" },
      { image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=400", title: "Longform: Hành trình bảo vệ rùa biển quý hiếm tại đảo Hòn Tre", date: "17/05/2026" },
      { image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=500&q=80", title: "Ký sự Vân Phong: Những công trình hạ tầng thế kỷ đang dần hiện hữu", date: "16/05/2026" },
      { image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80", title: "Du lịch Nha Trang: Định vị thương hiệu điểm đến đẳng cấp quốc tế", date: "15/05/2026" },
      { image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=500&q=80", title: "Đô thị sinh thái sông Cái: Điểm sáng không gian xanh hiện đại", date: "14/05/2026" },
      { image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=500&q=80", title: "Khám phá vẻ đẹp kỳ vĩ của thác Yang Bay giữa ngàn khơi", date: "13/05/2026" },
      { image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=500&q=80", title: "Văn hóa Chăm và dấu ấn lịch sử Tháp Bà Ponagar Nha Trang", date: "12/05/2026" },
      { image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=500&q=80", title: "Longform: Thức giấc giữa bình minh trên vịnh Nha Phu thơ mộng", date: "11/05/2026" },
      { image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=500&q=80", title: "Hành trình giữ gìn bản sắc âm nhạc cồng chiêng Khánh Sơn", date: "10/05/2026" },
    ]
  },
  {
    id: "audio",
    title: "Podcast",
    icon: Mic,
    color: "text-blue-600",
    large: {
      image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1200", 
      date: "19/05/2026",
      title: "Bản tin phát thanh đặc biệt Chào buổi sáng Khánh Hòa hôm nay",
      desc: "Điểm tin nhanh đa chiều về tình hình chính trị - xã hội trong nước, cập nhật giao thông và cảnh báo nhiệt độ, triều cường khu vực biển Nha Trang.",
      isVideo: true,
      videoUrl: "https://www.youtube.com/embed/S_vLp_CidrY"
    },
    large2: {
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1200",
      date: "18/05/2026",
      title: "Podcast Chuyên đề: Phát triển kinh tế du lịch gắn với gìn giữ tài nguyên thiên nhiên",
      desc: "Lắng nghe chia sẻ sâu sắc từ đại diện cơ quan quản lý và các chuyên gia về hướng đi bền vững cho kinh tế đêm Nha Trang và bảo tồn rạn san hô.",
      isVideo: true,
      videoUrl: "https://www.youtube.com/embed/Z8mve7o1Y14"
    },
    small: [
      { image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=400", title: "Phỏng vấn chuyên gia: Giải pháp phát triển du lịch xanh", date: "18/05/2026", videoUrl: "https://www.youtube.com/embed/L_S_A-W8BvM" },
      { image: "https://images.unsplash.com/photo-1581368135153-a506cf13b1e1?q=80&w=400", title: "Podcast: Câu chuyện khởi nghiệp của thanh niên Khánh Hòa", date: "18/05/2026", videoUrl: "https://www.youtube.com/embed/Z8mve7o1Y14" },
      { image: "https://images.unsplash.com/photo-1579227114347-15d08fc37cae?q=80&w=400", title: "Bản tin giao thông và thời tiết hàng ngày", date: "18/05/2026", videoUrl: "https://www.youtube.com/embed/g6Pz4_qIcl8" },
      { image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=400", title: "Ký sự truyền thanh: Tiếng sóng Trường Sa kêu gọi chủ quyền", date: "18/05/2026", videoUrl: "https://www.youtube.com/embed/S_vLp_CidrY" },
      { image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=400", title: "Phát thanh chuyên đề: Phát huy giá trị văn hóa ẩm thực yến sào", date: "17/05/2026", videoUrl: "https://www.youtube.com/embed/Z8mve7o1Y14" },
      { image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=400", title: "Bản tin cuối tuần: Điểm hẹn giao lưu văn hóa nghệ thuật biển", date: "16/05/2026", videoUrl: "https://www.youtube.com/embed/g6Pz4_qIcl8" },
      { image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400", title: "Podcast Hành trình xanh: Bảo tồn nguồn nước ngầm vùng đất cát Cam Lâm", date: "15/05/2026", videoUrl: "https://www.youtube.com/embed/S_vLp_CidrY" },
      { image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=400", title: "Phát thanh văn nghệ: Giai điệu biển xanh và những người con xứ Trầm Hương", date: "14/05/2026", videoUrl: "https://www.youtube.com/embed/Z8mve7o1Y14" },
      { image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400", title: "Trò chuyện đêm khuya: Sức trẻ Khánh Hòa chung tay xây dựng đô thị thông minh", date: "13/05/2026", videoUrl: "https://www.youtube.com/embed/g6Pz4_qIcl8" },
      { image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=400", title: "Bản tin giáo dục: Định hướng nghề nghiệp cho học sinh vùng cao Khánh Sơn", date: "12/05/2026", videoUrl: "https://www.youtube.com/embed/S_vLp_CidrY" },
      { image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=400", title: "Podcast Du lịch: Phát triển mô hình kinh tế ban đêm độc đáo tại Nha Trang", date: "11/05/2026", videoUrl: "https://www.youtube.com/embed/Z8mve7o1Y14" },
      { image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=400", title: "Hành trình di sản: Tiếp lửa nghề dệt thổ cẩm truyền thống của đồng bào Raglai", date: "10/05/2026", videoUrl: "https://www.youtube.com/embed/g6Pz4_qIcl8" },
    ]
  }
];

export default function MultimediaSection() {
  const [activeTab, setActiveTab] = useState("video");
  const [direction, setDirection] = useState(1); // 1 = slide left (enter from right), -1 = slide right (enter from left)
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeVideoSlide, setActiveVideoSlide] = useState(0);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);
  const [activeVideoTitle, setActiveVideoTitle] = useState<string>("");

  const videoRef = useRef<HTMLDivElement>(null);
  const [videoHeight, setVideoHeight] = useState<number | null>(null);

  // Measure the video tab's content height dynamically using a ResizeObserver to prevent layout jumps
  useEffect(() => {
    let observer: ResizeObserver | null = null;
    
    const handleResize = () => {
      if (videoRef.current) {
        setVideoHeight(videoRef.current.offsetHeight);
      }
    };

    if (activeTab === "video" && videoRef.current) {
      handleResize();
      
      observer = new ResizeObserver(() => {
        handleResize();
      });
      observer.observe(videoRef.current);
    }
    
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [activeTab]);

  const currentSection = DATA.find((item) => item.id === activeTab) || DATA[0];
  const Icon = currentSection.icon;
  const videoSlides = [currentSection.large, ...currentSection.small] as any[];

  // Auto-play interval for beautiful image slider
  useEffect(() => {
    if (activeTab !== "image") return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % currentSection.small.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeTab, currentSection.small.length]);

  const handleTabChange = (tabId: string) => {
    const currentIndex = DATA.findIndex((t) => t.id === activeTab);
    const nextIndex = DATA.findIndex((t) => t.id === tabId);
    
    if (nextIndex > currentIndex) {
      setDirection(1); // Content moves left, entering from right (x > 0)
    } else {
      setDirection(-1); // Content moves right, entering from left (x < 0)
    }
    setActiveTab(tabId);
    if (tabId === "image") {
      setCurrentSlide(0);
    }
    setActiveVideoSlide(0);
  };

  return (
    <div className="w-full bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-8 border border-slate-200/80 flex flex-col gap-6">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4">
        {/* Title */}
        <div className="flex items-center gap-3.5 shrink-0">
          <div className="w-12 h-12 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center shadow-sm">
            <Play size={22} fill="currentColor" className="ml-0.5 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-[#1E3A8A] uppercase tracking-tight leading-none text-left">
            Thông tin đa phương tiện
          </h2>
        </div>

        {/* Tabs list aligned on the same row with highly polished, compact tab cards */}
        <div className="flex items-center bg-slate-100/80 p-1 rounded-lg overflow-x-auto scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden max-w-full lg:max-w-[70%] border border-slate-200/50 shadow-inner">
          {DATA.map((tab, index) => {
            const isActive = activeTab === tab.id;
            const tabShortTitle = tab.title.split(" (")[0]; // "Tin đồ họa" instead of "Tin đồ họa (Infographics)"
            return (
              <React.Fragment key={tab.id}>
                {index > 0 && (
                  <div className="h-4 w-[1px] bg-slate-300/70 shrink-0 self-center mx-1" />
                )}
                <button
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-4 py-1.5 rounded-md text-lg transition-all duration-300 whitespace-nowrap cursor-pointer select-none border-0 ${
                    isActive 
                      ? "bg-white text-[#1e3a8a] shadow-sm font-black" 
                      : "bg-transparent text-slate-500 hover:text-[#1e3a8a] hover:bg-white/40 font-bold"
                  }`}
                >
                  <span>{tabShortTitle}</span>
                </button>
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <div className="w-full h-[2px] bg-gradient-to-r from-blue-500 via-blue-600 to-sky-400 mb-2" />

      {/* Tab content area with stable height to prevent layout jumps */}
      <div 
        className="overflow-x-hidden md:overflow-x-clip py-1 transition-all duration-300 ease-in-out flex flex-col justify-start"
        style={{ 
          minHeight: videoHeight ? `${videoHeight + 60}px` : "880px"
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: direction * 45 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -45 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="flex flex-col gap-6"
          >
          {/* Header row within the tab */}
          <div className="flex items-center justify-between border-b border-gray-100 pb-2">
            <div className="flex items-center gap-3">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-[#1E3A8A]">
                {currentSection.title}
              </h3>
            </div>
            <button className="text-lg text-gray-500 hover:text-blue-500 font-bold flex items-center gap-1 transition-colors group bg-transparent border-0 cursor-pointer">
              Xem tất cả <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Content Grid */}
          {activeTab === "video" ? (
            /* Video Tab: Clean Video Player with text details and small videos block positioned underneath */
            <div ref={videoRef} className="flex flex-col gap-6">
              {/* Clean, Full-Bright Video Player Card with increased height on desktop and carousel controls */}
              <div 
                className="relative w-full aspect-video md:aspect-[16/10] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 group/vslider bg-slate-950"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeVideoSlide}
                    initial={{ opacity: 0, scale: 1.01 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.99 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full cursor-pointer"
                    onClick={() => {
                      const activeSlideItem = videoSlides[activeVideoSlide];
                      setActiveVideoUrl(activeSlideItem.videoUrl || "https://www.youtube.com/embed/S_vLp_CidrY");
                      setActiveVideoTitle(activeSlideItem.title);
                    }}
                  >
                    <img 
                      src={videoSlides[activeVideoSlide].image} 
                      alt={videoSlides[activeVideoSlide].title}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover/vslider:scale-[1.01]"
                    />
                    
                    {/* Subtle dim overlay */}
                    <div className="absolute inset-0 bg-black/5 group-hover/vslider:bg-black/20 transition-all duration-300 pointer-events-none" />

                    {/* Prominent Play Icon in the center */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-[#1e3a8a] hover:bg-blue-600 rounded-full flex items-center justify-center text-white shadow-xl transform group-hover/vslider:scale-110 transition-all duration-300">
                        <Play size={36} className="ml-1.5" fill="currentColor" />
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Left Arrow Button for Video Slide */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveVideoSlide((prev) => (prev - 1 + videoSlides.length) % videoSlides.length);
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 hover:bg-blue-600/95 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer shadow-2xl"
                  aria-label="Previous video"
                >
                  <ChevronLeft size={22} strokeWidth={2.5} />
                </button>

                {/* Right Arrow Button for Video Slide */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveVideoSlide((prev) => (prev + 1) % videoSlides.length);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 hover:bg-blue-600/95 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer shadow-2xl"
                  aria-label="Next video"
                >
                  <ChevronRight size={22} strokeWidth={2.5} />
                </button>

                {/* Bullet Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                  {videoSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveVideoSlide(index);
                      }}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 border-0 p-0 cursor-pointer ${
                        index === activeVideoSlide ? "bg-white w-6" : "bg-white/50 hover:bg-white/85"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Text information and small videos row positioned BELOW the video */}
              <div className="w-full text-left">
                {/* Date Tag */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-8 border-t-2 border-[#1e3a8a]"></span>
                  <span className="text-[#1e3a8a] font-black text-lg md:text-lg uppercase tracking-wider">{videoSlides[activeVideoSlide].date}</span>
                </div>

                <h4 className="text-slate-950 font-black text-2xl md:text-3xl lg:text-4xl leading-snug mb-2 hover:text-[#1e3a8a] transition-colors cursor-pointer"
                  onClick={() => {
                    const activeSlideItem = videoSlides[activeVideoSlide];
                    setActiveVideoUrl(activeSlideItem.videoUrl || "https://www.youtube.com/embed/S_vLp_CidrY");
                    setActiveVideoTitle(activeSlideItem.title);
                  }}
                >
                  {videoSlides[activeVideoSlide].title}
                </h4>
                <p className="text-slate-600 text-lg md:text-lg font-medium leading-relaxed mb-6">
                  {videoSlides[activeVideoSlide].desc || "Thông tin điện tử tổng hợp, phát sóng các chương trình truyền hình nổi bật, tiêu biểu của tỉnh Khánh Hòa."}
                </p>

                {/* 4 small videos row nested underneath, styled cleanly with no card/frames */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-5 border-t border-slate-100">
                  {currentSection.small.map((item: any, i: number) => {
                    const slideIndex = i + 1;
                    const isActive = activeVideoSlide === slideIndex;

                    return (
                      <div 
                        key={i} 
                        onClick={(e) => {
                          e.stopPropagation();
                          if (isActive) {
                            setActiveVideoUrl(item.videoUrl || "https://www.youtube.com/embed/S_vLp_CidrY");
                            setActiveVideoTitle(item.title);
                          } else {
                            setActiveVideoSlide(slideIndex);
                          }
                        }}
                        className="flex gap-4 items-center bg-transparent border-0 rounded-none p-1 transition-all duration-300 cursor-pointer text-left group/small"
                      >
                        <div className={`relative w-24 h-20 md:w-28 md:h-[88px] rounded-xl overflow-hidden shrink-0 bg-slate-950 shadow-sm border transition-all duration-300 ${
                          isActive ? "border-2 border-blue-600 scale-105 shadow-md" : "border-slate-200/60"
                        }`}>
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover/small:scale-105 transition-transform"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover/small:bg-black/30 transition-all">
                            <Play size={14} className={`${isActive ? "text-blue-400 scale-110" : "text-white"} drop-shadow-md transition-all`} fill="currentColor" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className={`font-extrabold text-lg leading-snug transition-colors line-clamp-2 ${
                            isActive ? "text-blue-600 font-black" : "text-[#1e3a8a] group-hover/small:text-blue-700"
                          }`}>
                            {item.title}
                          </h5>
                          <span className={`text-lg font-normal block mt-1 ${isActive ? "text-blue-700 font-semibold" : "text-slate-800"}`}>
                            {item.date} {isActive && "• Đang chọn"}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : activeTab === "image" ? (
            /* Immersive Slide Carousel with text section BELOW the image */
            <div className="flex flex-col gap-6">
              {/* Clean Image Container with navigation buttons */}
              <div className="relative w-full aspect-video md:aspect-[16/10] rounded-2xl md:rounded-3xl overflow-hidden bg-slate-100 group/slider select-none border border-slate-200/80 shadow-lg">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.01 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.99 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full"
                  >
                    {/* Background Full Image - fully bright, clear, no overlay */}
                    <img
                      src={currentSection.small[currentSlide].image}
                      alt={currentSection.small[currentSlide].title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transition-all duration-700 hover:scale-[1.01]"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Left navigation arrow */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentSlide((prev) => (prev - 1 + currentSection.small.length) % currentSection.small.length);
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 hover:bg-blue-600/95 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 shadow-2xl cursor-pointer"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={22} strokeWidth={2.5} />
                </button>

                {/* Right navigation arrow */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentSlide((prev) => (prev + 1) % currentSection.small.length);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 hover:bg-blue-600/95 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 shadow-2xl cursor-pointer"
                  aria-label="Next slide"
                >
                  <ChevronRight size={22} strokeWidth={2.5} />
                </button>

                {/* Bullet Indicators on image */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                  {currentSection.small.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentSlide(index);
                      }}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 border-0 p-0 cursor-pointer ${
                        index === currentSlide ? "bg-white w-6" : "bg-white/50 hover:bg-white/85"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Text content section below */}
              <div className="px-1">
                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-800 text-base md:text-base font-extrabold rounded-full tracking-wider uppercase select-none">
                    <ImageIcon size={13} />
                    Ảnh Đẹp Khánh Hòa
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-500 text-base md:text-base font-bold bg-slate-100 px-3 py-1 rounded-full">
                    <Calendar size={13} strokeWidth={2.5} />
                    <span>{currentSection.small[currentSlide].date}</span>
                  </div>
                </div>

                <h4 className="text-slate-950 font-black text-2xl md:text-3xl lg:text-4xl leading-snug mb-2 hover:text-blue-700 transition-colors">
                  {currentSection.small[currentSlide].title}
                </h4>

                <p className="text-slate-600 text-lg md:text-lg font-medium leading-relaxed mb-6">
                  {(currentSection.small[currentSlide] as any).desc || "Bản quyền lưu giữ bởi VP công tác hoặc nguồn nhiếp ảnh hoạt động nghệ thuật Khánh Hòa chuyên nghiệp."}
                </p>

                {/* Row of other images as thumbnails for easy selection */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-5 border-t border-slate-100">
                  {currentSection.small.map((item, i) => {
                    const isActive = currentSlide === i;

                    return (
                      <div
                        key={i}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentSlide(i);
                        }}
                        className="flex gap-4 items-center bg-transparent border-0 rounded-none p-1 transition-all duration-300 cursor-pointer text-left group/small"
                      >
                        <div className={`relative w-24 h-20 md:w-28 md:h-[88px] rounded-xl overflow-hidden shrink-0 bg-slate-950 shadow-sm border transition-all duration-300 ${
                          isActive ? "border-2 border-blue-600 scale-105 shadow-md" : "border-slate-200/60"
                        }`}>
                          <img
                            src={item.image}
                            alt={item.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover/small:scale-105 transition-transform"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className={`font-extrabold text-lg leading-snug transition-colors line-clamp-2 ${
                            isActive ? "text-blue-600 font-black" : "text-[#1e3a8a] group-hover/small:text-blue-700"
                          }`}>
                            {item.title}
                          </h5>
                          <span className={`text-lg font-normal block mt-1 ${isActive ? "text-blue-700 font-semibold" : "text-slate-800"}`}>
                            {item.date} {isActive && "• Đang xem"}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : activeTab === "longform" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left items-stretch h-auto">
              {currentSection.small.map((item, i) => (
                <div key={i} className="flex flex-col bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer h-full">
                  <div className="relative w-full aspect-[16/10] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-[#1e3a8a]/90 backdrop-blur-sm text-white text-lg uppercase font-black tracking-wider px-2.5 py-1 rounded-full shadow-md">
                      Chuyên Đề Longform
                    </div>
                  </div>
                  <div className="p-4 md:p-5 flex flex-col flex-1">
                    <h5 className="font-extrabold text-[#1e3a8a] text-lg leading-snug line-clamp-2 min-h-[48px] transition-colors group-hover:text-blue-700">
                      {item.title}
                    </h5>
                    <p className="text-lg text-gray-400 mt-2 font-medium line-clamp-2">
                      Bài viết ký sự chuyên sâu, tổng hợp thông tin đa chiều sắc nét về vùng đất và con người Khánh Hòa.
                    </p>
                    <div className="flex items-center gap-1.5 mt-auto pt-3 border-t border-slate-100">
                      <Calendar size={13} className="text-blue-500" strokeWidth={2.5} />
                      <span className="text-lg text-gray-500 font-bold">{item.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : activeTab === "info" ? (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left items-start">
              
              {/* Large Spotlight Card for Tin Đồ Họa (Text below image, no mask) */}
              <div 
                className="md:col-span-7 flex flex-col gap-4 group cursor-pointer"
              >
                {/* Image Container: fully bright, clear, no dark mask, taller aspect for Infographic */}
                <div className="relative w-full aspect-[2/3] md:h-[1000px] rounded-2xl md:rounded-3xl overflow-hidden bg-slate-100 shadow-md border border-slate-200/80">
                  <img 
                    src={currentSection.large.image} 
                    alt={currentSection.large.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.01]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all pointer-events-none" />
                </div>

                {/* Content Container positioned below the image */}
                <div className="text-left px-1">
                  {/* Date Tag */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-8 border-t-2 border-[#1e3a8a]"></span>
                    <span className="text-[#1e3a8a] font-black text-lg uppercase tracking-wider">{currentSection.large.date}</span>
                  </div>

                  <h4 className="text-slate-950 font-black text-2xl md:text-3xl lg:text-4xl leading-snug mb-2 group-hover:text-blue-700 transition-colors">
                    {currentSection.large.title}
                  </h4>
                  <p className="text-slate-600 text-lg md:text-lg font-medium leading-relaxed">
                    {currentSection.large.desc}
                  </p>
                </div>
              </div>

              {/* Right Sidebar List styled EXACTLY like TIN NỔI BẬT in App.tsx */}
              <div className="md:col-span-5 flex flex-col bg-transparent">
                {currentSection.small.map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="flex shrink-0 gap-4 py-4 border-b border-slate-100 last:border-b-0 transition-all duration-300 cursor-pointer text-left group/item relative overflow-hidden hover:bg-slate-50/50 -mx-2 px-2 rounded-xl"
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Sized to exactly 96x80px (w-24 h-20) as requested */}
                    <div className="w-20 h-[68px] md:w-24 md:h-20 rounded-lg overflow-hidden shrink-0 relative border border-slate-200/50 bg-slate-50 shadow-sm">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <h5 className="text-[18px] font-semibold leading-snug line-clamp-2 transition-colors duration-200 text-[#1e3a8a] group-hover/item:text-blue-600">
                          {item.title}
                        </h5>
                        <p className="text-base text-slate-800 mt-1 font-normal leading-tight truncate">
                          Thông tin điện tử từ nguồn KTV...
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 mt-2">
                        <Calendar size={12} className="text-slate-800" strokeWidth={2} />
                        <span className="text-base text-slate-800 font-normal">{item.date}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          ) : activeTab === "audio" ? (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left items-start">
              
              {/* Left Column with 2 stacked Large Spotlight Cards */}
              <div className="md:col-span-7 flex flex-col gap-10">
                
                {/* 1st Large Spotlight Card */}
                <div 
                  onClick={() => {
                    if (currentSection.large.isVideo) {
                      setActiveVideoUrl(currentSection.large.videoUrl || "https://www.youtube.com/embed/S_vLp_CidrY");
                      setActiveVideoTitle(currentSection.large.title);
                    }
                  }}
                  className="flex flex-col gap-4 group cursor-pointer"
                >
                  {/* Image Container: fully bright, clear, no dark mask */}
                  <div className="relative w-full aspect-video md:aspect-[16/10] rounded-2xl md:rounded-3xl overflow-hidden bg-slate-100 shadow-md border border-slate-200/80">
                    <img 
                      src={currentSection.large.image} 
                      alt={currentSection.large.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all pointer-events-none" />

                    {/* Play Icon Overlay inside the image container */}
                    {currentSection.large.isVideo && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-16 h-16 bg-[#1e3a8a] hover:bg-blue-600 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(30,58,138,0.5)] transform group-hover:scale-110 transition-transform">
                          <Play size={32} className="ml-1" fill="currentColor" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content Container positioned below the image */}
                  <div className="text-left px-1">
                    {/* Date Tag */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-8 border-t-2 border-[#1e3a8a]"></span>
                      <span className="text-[#1e3a8a] font-black text-lg uppercase tracking-wider">{currentSection.large.date}</span>
                    </div>

                    <h4 className="text-slate-950 font-black text-2xl md:text-3xl leading-snug mb-2 group-hover:text-blue-700 transition-colors">
                      {currentSection.large.title}
                    </h4>
                    <p className="text-slate-600 text-lg md:text-lg font-medium leading-relaxed">
                      {currentSection.large.desc}
                    </p>
                  </div>
                </div>

                {/* 2nd Large Spotlight Card (underneath) */}
                {(currentSection as any).large2 && (
                  <div 
                    onClick={() => {
                      const large2 = (currentSection as any).large2;
                      if (large2.isVideo) {
                        setActiveVideoUrl(large2.videoUrl || "https://www.youtube.com/embed/S_vLp_CidrY");
                        setActiveVideoTitle(large2.title);
                      }
                    }}
                    className="flex flex-col gap-4 group cursor-pointer pt-8 border-t border-slate-200/50"
                  >
                    {/* Image Container */}
                    <div className="relative w-full aspect-video md:aspect-[16/10] rounded-2xl md:rounded-3xl overflow-hidden bg-slate-100 shadow-md border border-slate-200/80">
                      <img 
                        src={(currentSection as any).large2.image} 
                        alt={(currentSection as any).large2.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all pointer-events-none" />

                      {/* Play Icon Overlay */}
                      {(currentSection as any).large2.isVideo && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="w-16 h-16 bg-[#1e3a8a] hover:bg-blue-600 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(30,58,138,0.5)] transform group-hover:scale-110 transition-transform">
                            <Play size={32} className="ml-1" fill="currentColor" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content Container */}
                    <div className="text-left px-1">
                      {/* Date Tag */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-8 border-t-2 border-[#1e3a8a]"></span>
                        <span className="text-[#1e3a8a] font-black text-lg uppercase tracking-wider">{(currentSection as any).large2.date}</span>
                      </div>

                      <h4 className="text-slate-950 font-black text-2xl md:text-3xl leading-snug mb-2 group-hover:text-blue-700 transition-colors">
                        {(currentSection as any).large2.title}
                      </h4>
                      <p className="text-slate-600 text-lg md:text-lg font-medium leading-relaxed">
                        {(currentSection as any).large2.desc}
                      </p>
                    </div>
                  </div>
                )}

              </div>

              {/* Right Sidebar List */}
              <div className="md:col-span-5 flex flex-col divide-y divide-slate-100/80">
                {currentSection.small.map((item, i) => (
                  <div 
                    key={i} 
                    onClick={() => {
                      if (currentSection.id === "audio" || (item as any).videoUrl) {
                        setActiveVideoUrl((item as any).videoUrl || "https://www.youtube.com/embed/S_vLp_CidrY");
                        setActiveVideoTitle(item.title);
                      }
                    }}
                    className="flex gap-4 w-full bg-transparent py-4 first:pt-0 last:pb-0 hover:bg-slate-50/50 transition-all group cursor-pointer items-center text-left"
                  >
                    <div className="w-[110px] md:w-[125px] rounded-xl overflow-hidden shrink-0 relative h-20 md:h-[84px] border border-slate-200/50 bg-slate-50">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {(currentSection.id === "video" || currentSection.id === "audio" || (item as any).videoUrl) && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/15">
                          <Play size={20} className="text-white opacity-90 drop-shadow-md" fill="currentColor" />
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col flex-1 min-w-0 justify-center">
                      <h5 className="font-bold text-[#1e3a8a] text-lg leading-snug transition-colors group-hover:text-blue-700 line-clamp-2">
                        {item.title}
                      </h5>
                      <div className="flex items-center gap-1.5 mt-2">
                        <Calendar size={11} className="text-slate-400" />
                        <span className="text-lg text-gray-400 font-bold">{item.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left items-start">
              
              {/* Large Spotlight Card for Podcast (Text below image, fully bright, no mask) */}
              <div 
                onClick={() => {
                  if (currentSection.large.isVideo) {
                    setActiveVideoUrl(currentSection.large.videoUrl || "https://www.youtube.com/embed/S_vLp_CidrY");
                    setActiveVideoTitle(currentSection.large.title);
                  }
                }}
                className="md:col-span-7 flex flex-col gap-4 group cursor-pointer"
              >
                {/* Image Container: fully bright, clear, no dark mask */}
                <div className="relative w-full aspect-video md:aspect-[16/10] rounded-2xl md:rounded-3xl overflow-hidden bg-slate-100 shadow-md border border-slate-200/80">
                  <img 
                    src={currentSection.large.image} 
                    alt={currentSection.large.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all pointer-events-none" />

                  {/* Play Icon Overlay inside the image container */}
                  {currentSection.large.isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-16 h-16 bg-[#1e3a8a] hover:bg-blue-600 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(30,58,138,0.5)] transform group-hover:scale-110 transition-transform">
                        <Play size={32} className="ml-1" fill="currentColor" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Container positioned below the image */}
                <div className="text-left px-1">
                  {/* Date Tag */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-8 border-t-2 border-[#1e3a8a]"></span>
                    <span className="text-[#1e3a8a] font-black text-lg uppercase tracking-wider">{currentSection.large.date}</span>
                  </div>

                  <h4 className="text-slate-950 font-black text-2xl md:text-3xl lg:text-4xl leading-snug mb-2 group-hover:text-blue-700 transition-colors">
                     {currentSection.large.title}
                  </h4>
                  <p className="text-slate-600 text-lg md:text-lg font-medium leading-relaxed">
                    {currentSection.large.desc}
                  </p>
                </div>
              </div>

              {/* Right Sidebar List for Video/Audio (Original structure with play button indicator if video) */}
              <div className="md:col-span-5 flex flex-col divide-y divide-slate-100/80">
                {currentSection.small.map((item, i) => (
                  <div 
                    key={i} 
                    onClick={() => {
                      if (currentSection.id === "audio" || (item as any).videoUrl) {
                        setActiveVideoUrl((item as any).videoUrl || "https://www.youtube.com/embed/S_vLp_CidrY");
                        setActiveVideoTitle(item.title);
                      }
                    }}
                    className="flex gap-4 w-full bg-transparent py-4 first:pt-0 last:pb-0 hover:bg-slate-50/50 transition-all group cursor-pointer items-center text-left"
                  >
                    <div className="w-[110px] md:w-[125px] rounded-xl overflow-hidden shrink-0 relative h-20 md:h-[84px] border border-slate-200/50 bg-slate-50">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {(currentSection.id === "video" || currentSection.id === "audio" || (item as any).videoUrl) && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/15">
                          <Play size={20} className="text-white opacity-90 drop-shadow-md" fill="currentColor" />
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col flex-1 min-w-0 justify-center">
                      <h5 className="font-bold text-[#1e3a8a] text-lg leading-snug transition-colors group-hover:text-blue-700 line-clamp-2">
                        {item.title}
                      </h5>
                      <div className="flex items-center gap-1.5 mt-2">
                        <Calendar size={11} className="text-slate-400" />
                        <span className="text-lg text-gray-400 font-bold">{item.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}
        </motion.div>
      </AnimatePresence>
      </div>

      {/* Video Playback Popup Modal */}
      <AnimatePresence>
        {activeVideoUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/85 flex items-center justify-center p-4 md:p-8 backdrop-blur-sm"
            onClick={() => setActiveVideoUrl(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-slate-900 w-full max-w-4xl aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              {/* Header/Title bar inside modal */}
              <div className="absolute top-0 inset-x-0 bg-gradient-to-b from-black/80 to-transparent p-4 md:p-6 flex items-center justify-between z-10 pointer-events-none">
                <h4 className="text-white font-extrabold text-lg md:text-lg line-clamp-1 max-w-[85%] drop-shadow-md pr-12 text-left">
                  {activeVideoTitle}
                </h4>
              </div>
              
              {/* Close Button */}
              <button
                onClick={() => setActiveVideoUrl(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-blue-600 hover:scale-105 text-white flex items-center justify-center font-bold text-lg cursor-pointer border border-white/10 transition-all shadow-md active:scale-95"
              >
                ✕
              </button>

              {/* YouTube Video iframe */}
              <div className="w-full h-full flex-1 bg-black">
                <iframe
                  title={activeVideoTitle}
                  width="100%"
                  height="100%"
                  src={`${activeVideoUrl}?autoplay=1&rel=0`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
