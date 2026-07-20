import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ShieldCheck, 
  Smartphone, 
  Globe, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink,
  Sparkles,
  MapPin,
  HeartHandshake
} from "lucide-react";

import trongDongBg from "../assets/images/trong_dong.png";
const quocHuy = "/quoc_huy.png";
const nhaTrangDrone = "https://images.unsplash.com/photo-1549488497-2367098f98a2?q=80&w=1200&auto=format&fit=crop";
const poNagarSunset = "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop";
const coralDiving = "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop";

interface BannerItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  ctaText: string;
  colorTheme: {
    from: string;
    to: string;
    text: string;
    accent: string;
  };
  icon: React.ComponentType<any>;
  features: string[];
  bgImage: string;
}

const BANNERS_DATA: BannerItem[] = [
  {
    id: "dich-vu-cong",
    badge: "DỊCH VỤ CÔNG TRỰC TUYẾN",
    title: "Cổng Dịch Vụ Công Trực Tuyến Tỉnh",
    subtitle: "Kết nối chính quyền - Phục vụ người dân và doanh nghiệp",
    description: "Giải quyết thủ tục hành chính trực tuyến mức độ toàn trình. Đơn giản hóa quy trình, xử lý nhanh chóng, công khai và minh bạch 24/7.",
    ctaText: "Nộp hồ sơ trực tuyến",
    colorTheme: {
      from: "from-blue-700 via-blue-800 to-sky-900",
      to: "border-blue-500/20",
      text: "text-blue-100",
      accent: "bg-amber-500 hover:bg-amber-600 text-white shadow-amber-500/25"
    },
    icon: ShieldCheck,
    features: [
      "Thanh toán trực tuyến",
      "Theo dõi tiến độ thời gian thực",
      "Nhận kết quả tại nhà qua bưu điện",
      "Hỗ trợ giải đáp trực tuyến 24/7"
    ],
    bgImage: coralDiving
  },
  {
    id: "chuyen-doi-so",
    badge: "CHUYỂN ĐỔI SỐ QUỐC GIA",
    title: "Chương Trình Chuyển Đổi Số Quốc Gia",
    subtitle: "Xây dựng Chính quyền số - Kinh tế số - Xã hội số",
    description: "Ứng dụng công nghệ số toàn diện, thúc đẩy đổi mới sáng tạo, phát triển hạ tầng số hiện đại, nâng cao năng suất lao động và chất lượng sống người dân.",
    ctaText: "Tìm hiểu lộ trình số",
    colorTheme: {
      from: "from-indigo-700 via-indigo-800 to-purple-900",
      to: "border-indigo-500/20",
      text: "text-indigo-100",
      accent: "bg-teal-500 hover:bg-teal-600 text-white shadow-teal-500/25"
    },
    icon: Smartphone,
    features: [
      "Số hóa dữ liệu công",
      "Ứng dụng công dân số",
      "An toàn thông tin mạng",
      "Hạ tầng kết nối băng rộng"
    ],
    bgImage: poNagarSunset
  },
  {
    id: "du-lich-kh",
    badge: "DU LỊCH NHA TRANG - KHÁNH HÒA",
    title: "Khánh Hòa - Điểm Đến Thân Thiện & Hấp Dẫn",
    subtitle: "Khám phá vịnh biển tuyệt mỹ và di sản văn hóa đặc sắc",
    description: "Nơi hội tụ vẻ đẹp thiên nhiên kỳ vĩ, con người mến khách và hạ tầng nghỉ dưỡng đẳng cấp quốc tế. Chào đón quý du khách đến trải nghiệm trọn vẹn từng khoảnh khắc.",
    ctaText: "Khám phá ngay",
    colorTheme: {
      from: "from-emerald-700 via-emerald-800 to-teal-950",
      to: "border-emerald-500/20",
      text: "text-emerald-100",
      accent: "bg-yellow-500 hover:bg-yellow-600 text-slate-900 shadow-yellow-500/25"
    },
    icon: MapPin,
    features: [
      "Vịnh biển đẹp thế giới",
      "Ẩm thực xứ trầm hương",
      "Lễ hội văn hóa truyền thống",
      "Hệ sinh thái du lịch an toàn"
    ],
    bgImage: nhaTrangDrone
  }
];

export default function PromoBanners() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BANNERS_DATA.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handlePrev = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + BANNERS_DATA.length) % BANNERS_DATA.length);
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % BANNERS_DATA.length);
  };

  const activeBanner = BANNERS_DATA[currentIndex];
  const IconComponent = activeBanner.icon;

  return (
    <section className="w-full mt-10 relative overflow-hidden select-none" id="promo-banner-section">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="relative group">
          {/* Main Container */}
          <div className={`w-full bg-gradient-to-r ${activeBanner.colorTheme.from} rounded-2xl py-5 px-6 md:py-7 md:px-8 shadow-xl border ${activeBanner.colorTheme.to} relative overflow-hidden transition-all duration-700 flex flex-col lg:flex-row lg:items-center justify-between gap-4 min-h-[120px]`}>
            
            {/* Background Scenic Image with Crossfade */}
            <div className="absolute inset-0 pointer-events-none z-0 select-none overflow-hidden rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={activeBanner.bgImage}
                  alt="Scenic Background"
                  className="w-full h-full object-cover opacity-[0.15] mix-blend-overlay"
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 0.15, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.6 }}
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/25" />
            </div>

            {/* Background Watermarks */}
            {/* Trống đồng chìm */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 w-48 h-48 opacity-[0.08] pointer-events-none select-none mix-blend-overlay">
              <img src={trongDongBg} alt="Trống đồng" className="w-full h-full object-contain animate-spin-slow-very" referrerPolicy="no-referrer" />
            </div>

            {/* Quốc huy chìm xoay nhẹ */}
            <div className="absolute right-12 top-1/2 -translate-y-1/2 w-48 h-48 opacity-[0.05] pointer-events-none select-none">
              <img src={quocHuy} alt="Quốc huy chìm" className="w-full h-full object-contain animate-[spin_180s_linear_infinite]" referrerPolicy="no-referrer" />
            </div>

            {/* Glowing orbs */}
            <div className="absolute top-0 right-20 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 left-10 w-48 h-48 bg-black/10 rounded-full blur-2xl pointer-events-none" />

            {/* Banner Content Slider */}
            <div className="flex-1 relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 text-left"
                >
                  {/* Left Side: Badge + Title + Subtitle */}
                  <div className="space-y-2 max-w-3xl">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-white/10 backdrop-blur-md text-yellow-400 text-base font-black tracking-widest uppercase border border-white/10 shadow-sm">
                        <Sparkles size={11} className="text-yellow-400 animate-pulse animate-[pulse_2s_infinite]" />
                        {activeBanner.badge}
                      </span>
                    </div>

                    <h3 className="text-lg md:text-xl font-black text-white leading-tight tracking-tight drop-shadow-sm">
                      {activeBanner.title}
                    </h3>

                    <p className="text-base md:text-base font-semibold text-yellow-100/90 leading-tight">
                      {activeBanner.subtitle}
                    </p>
                  </div>

                  {/* Right Side: Navigation & Compact CTA Button */}
                  <div className="flex flex-wrap items-center gap-4 shrink-0 lg:ml-6">
                    {/* Small dot indicators */}
                    <div className="flex gap-1.5 bg-black/20 p-1.5 rounded-lg border border-white/5 items-center h-9">
                      {BANNERS_DATA.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          onClick={() => {
                            setIsAutoPlay(false);
                            setCurrentIndex(dotIdx);
                          }}
                          className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                            dotIdx === currentIndex ? "w-4 bg-yellow-400" : "w-1.5 bg-white/30 hover:bg-white/50"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Small navigation arrows */}
                    <div className="flex gap-1">
                      <button
                        onClick={handlePrev}
                        className="w-9 h-9 rounded-lg border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-all cursor-pointer"
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <button
                        onClick={handleNext}
                        className="w-9 h-9 rounded-lg border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-all cursor-pointer"
                      >
                        <ChevronRight size={18} />
                      </button>
                    </div>

                    {/* Compact CTA Button */}
                    <button 
                      className={`h-9 py-1.5 px-4 rounded-lg font-bold text-base transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 shadow-md ${activeBanner.colorTheme.accent}`}
                    >
                      <IconComponent size={16} className="shrink-0" />
                      <span>{activeBanner.ctaText}</span>
                      <ExternalLink size={14} className="shrink-0" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
