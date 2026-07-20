import React, { useState } from "react";
import { 
  TrendingUp, 
  DollarSign, 
  Activity, 
  Briefcase, 
  Compass, 
  ArrowUpDown, 
  BarChart3, 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  Percent, 
  FileText,
  Info,
  MapPin,
  Building2,
  Table,
  Eye,
  ShoppingBag,
  Award,
  Users,
  GraduationCap,
  HeartPulse,
  Globe2,
  CloudRain,
  ShieldCheck,
  CarFront,
  Flame,
  CloudLightning,
  Home,
  Wheat,
  Search,
  Scale,
  Store,
  Bed,
  Stethoscope
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, ComposedChart } from "recharts";

interface SocioEconomicDashboardProps {}

// -----------------------------------------------------------------
// TYPE DEFINITIONS & SAMPLE DATA FOR ALL 9 SLIDES (STANDARD YEARBOOK)
// -----------------------------------------------------------------

export default function SocioEconomicDashboard({}: SocioEconomicDashboardProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedPeriod, setSelectedPeriod] = useState("Tháng 05/2026");
  const tabsRef = React.useRef<HTMLDivElement>(null);

  const scrollTabs = (direction: "left" | "right") => {
    if (tabsRef.current) {
      const scrollAmount = 240;
      tabsRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  React.useEffect(() => {
    const activeEl = document.getElementById(`tab-btn-${activeSlide}`);
    if (activeEl) {
      activeEl.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [activeSlide]);

  const slides = [
    {
      id: "tong-quan-dan-so",
      title: "Tổng quan & Dân số",
      source: "Cục Thống kê tỉnh Khánh Hòa",
      period: "Kỳ báo cáo: Năm 2026",
    },
    {
      id: "ngan-sach-dau-tu",
      title: "Ngân sách & Đầu tư",
      source: "Sở Tài chính - Sở Kế hoạch & Đầu tư",
      period: "Kỳ báo cáo: Lũy kế 5 tháng 2026",
    },
    {
      id: "nong-lam-thuy-san",
      title: "Nông, Lâm & Thủy sản",
      source: "Sở Nông nghiệp & Phát triển Nông thôn",
      period: "Kỳ báo cáo: Tháng 05 Năm 2026",
    },
    {
      id: "cong-nghiep-xaydung",
      title: "Công nghiệp & Xây dựng",
      source: "Sở Công Thương - Sở Xây dựng Khánh Hòa",
      period: "Kỳ báo cáo: Tháng 05 Năm 2026",
    },
    {
      id: "thuong-mai-dulich",
      title: "Thương mại, Du lịch & Dịch vụ",
      source: "Sở Du lịch - Sở Công Thương Khánh Hòa",
      period: "Kỳ báo cáo: Lũy kế 5 tháng 2026",
    },
    {
      id: "doanh-nghiep",
      title: "Doanh nghiệp & ĐKKD",
      source: "Sở Kế hoạch và Đầu tư tỉnh Khánh Hòa",
      period: "Kỳ báo cáo: Lũy kế 5 tháng 2026",
    },
    {
      id: "giao-duc-y-te",
      title: "Giáo dục & Y tế",
      source: "Sở Giáo dục & Đào tạo - Sở Y tế Khánh Hòa",
      period: "Kỳ báo cáo: Niên khóa 2025-2026",
    },
    {
      id: "tai-nguyen-khcn",
      title: "TNMT & KHCN",
      source: "Sở TN&MT - Sở Khoa học & Công nghệ",
      period: "Kỳ báo cáo: Quý II / 2026",
    },
    {
      id: "trat-tu-atxh",
      title: "Trật tự ATXH & ATGT",
      source: "Công an tỉnh - Sở Giao thông Vận tải",
      period: "Kỳ báo cáo: Lũy kế 5 tháng 2026",
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Render active slide components
  const renderSlideContent = () => {
    switch (activeSlide) {
      case 0:
        return <OverviewSlide />;
      case 1:
        return <BudgetAndInvestmentSlide />;
      case 2:
        return <AgricultureSlide />;
      case 3:
        return <IndustryAndConstructionSlide />;
      case 4:
        return <CommerceTourismServicesSlide />;
      case 5:
        return <EnterprisesSlide />;
      case 6:
        return <EducationAndHealthcareSlide />;
      case 7:
        return <EnvironmentAndTechSlide />;
      case 8:
        return <SocialOrderAndSafetySlide />;
      default:
        return <OverviewSlide />;
    }
  };

  return (
    <div className="w-full bg-slate-50/20 text-slate-800 flex flex-col font-sans relative px-4 md:px-6 py-6">
      {/* DASHBOARD NAVBAR / HEADER */}
      <header className="bg-white/95 backdrop-blur-md relative z-10 py-6 mb-8 rounded-3xl shadow-sm border border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-8">
          <div className="flex items-center gap-5 w-full md:w-auto">
            <div className="text-left">
              <span className="text-base md:text-base font-semibold text-emerald-600 tracking-wider uppercase block mb-1">
                CỔNG THÔNG TIN SỐ LIỆU THỐNG KÊ KHÁNH HÒA
              </span>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight uppercase flex items-center gap-3">
                <TrendingUp className="text-emerald-500 shrink-0" size={30} />
                NIÊN GIÁM THỐNG KÊ KINH TẾ - XÃ HỘI
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto justify-end">
            {/* Period Selector */}
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-2xl text-base shadow-sm border border-slate-100">
              <Calendar size={18} className="text-emerald-500" />
              <select 
                value={selectedPeriod} 
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="bg-transparent text-slate-900 font-semibold focus:outline-none cursor-pointer text-base uppercase"
              >
                <option value="Tháng 05/2026" className="text-slate-800">Tháng 05 / 2026</option>
                <option value="Tháng 04/2026" className="text-slate-800">Tháng 04 / 2026</option>
                <option value="Tháng 03/2026" className="text-slate-800">Tháng 03 / 2026</option>
              </select>
            </div>
            
            {/* Legend Badge */}
            <span className="bg-emerald-50 text-emerald-800 px-4 py-2.5 rounded-2xl text-base font-medium hidden sm:inline-block">
              Nguồn dữ liệu: Ủy Ban Nhân Dân Tỉnh Khánh Hòa
            </span>
          </div>
        </div>
      </header>

      {/* TABS FOR QUICK SWITCHING */}
      <div className="relative mb-8 flex items-center bg-white/95 backdrop-blur-md rounded-3xl border border-slate-100 shadow-sm p-2 gap-2">
        <button
          onClick={() => scrollTabs("left")}
          className="p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-150 text-slate-600 hover:text-slate-900 transition-all border-none cursor-pointer flex items-center justify-center shrink-0 active:scale-95 shadow-sm"
          title="Cuộn sang trái"
        >
          <ChevronLeft size={20} />
        </button>

        <div 
          ref={tabsRef}
          className="flex-1 py-1 overflow-x-auto scrollbar-none scroll-smooth"
        >
          <div className="px-2 flex gap-3">
            {slides.map((s, idx) => {
              const isActive = activeSlide === idx;
              return (
                <button
                  key={s.id}
                  id={`tab-btn-${idx}`}
                  onClick={() => setActiveSlide(idx)}
                  className={`px-5 py-3 rounded-xl text-base md:text-base font-semibold tracking-wide uppercase whitespace-nowrap transition-all cursor-pointer shrink-0 border-none ${
                    isActive 
                      ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/10" 
                      : "bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {idx + 1}. {s.title}
                </button>
              );
            })}
          </div>
        </div>

        <button
          onClick={() => scrollTabs("right")}
          className="p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-150 text-slate-600 hover:text-slate-900 transition-all border-none cursor-pointer flex items-center justify-center shrink-0 active:scale-95 shadow-sm"
          title="Cuộn sang phải"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* MAIN SLIDE CONTENT WITH ANIMATION */}
      <main className="flex-1 max-w-7xl w-full mx-auto py-2 flex flex-col justify-between">
        
        {/* Slide Header Banner */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div className="text-left">
            <span className="text-base md:text-base font-medium text-slate-450 uppercase tracking-widest block mb-1">{slides[activeSlide].source}</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
              <span className="text-emerald-600">0{activeSlide + 1}.</span> {slides[activeSlide].title}
            </h2>
          </div>
          <div className="bg-emerald-100/60 text-emerald-800 px-5 py-2 rounded-full text-base md:text-base font-semibold uppercase tracking-wider self-start sm:self-auto">
            {slides[activeSlide].period}
          </div>
        </div>

        {/* Content Container */}
        <div className="flex-1 min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="h-full"
            >
              {renderSlideContent()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* BOTTOM PAGINATION CONTROL BAR */}
        <div className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-200">
          {/* Quick jump description */}
          <div className="text-base text-slate-500 font-normal text-left sm:w-1/3 leading-relaxed">
            Sử dụng các thanh chuyên đề phía trên hoặc nút điều hướng để duyệt báo cáo chi tiết tiếp theo trong Niên giám.
          </div>

          {/* Indicator Dots */}
          <div className="flex items-center gap-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`h-3 rounded-full transition-all duration-300 border-none cursor-pointer ${
                  activeSlide === idx 
                    ? "w-10 bg-emerald-500 shadow-md shadow-emerald-500/10" 
                    : "w-3 bg-slate-200 hover:bg-slate-300"
                }`}
                title={`Trang ${idx + 1}`}
              />
            ))}
          </div>

          {/* Prev/Next buttons */}
          <div className="flex items-center gap-4 sm:w-1/3 justify-end">
            <button
              onClick={prevSlide}
              className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all cursor-pointer text-base md:text-base font-semibold uppercase shadow-sm border border-slate-200"
            >
              <ChevronLeft size={18} /> Trước
            </button>
            <button
              onClick={nextSlide}
              className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 transition-all cursor-pointer text-base md:text-base font-bold uppercase shadow-md shadow-emerald-600/5 border-none"
            >
              Tiếp <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

// -----------------------------------------------------------------
// SLIDE 1: TỔNG QUAN & DÂN SỐ
// -----------------------------------------------------------------
function OverviewSlide() {
  const adminUnits = [
    { name: "TP Nha Trang", area: "251,0", pop: "432.120", density: "1.721", type: "Đô thị loại I - Trung tâm chính trị, KT, VH" },
    { name: "Thị xã Ninh Hòa", area: "1.197,5", pop: "248.150", density: "207", type: "Thị xã công nghiệp, dịch vụ và nông nghiệp" },
    { name: "Huyện Diên Khánh", area: "336,2", pop: "152.180", density: "453", type: "Huyện kết nối đô thị vệ tinh Nha Trang" },
    { name: "TP Cam Ranh", area: "327,0", pop: "145.310", density: "444", type: "Đô thị loại III - Vùng kinh tế trọng điểm" },
    { name: "Huyện Vạn Ninh", area: "561,0", pop: "138.200", density: "246", type: "Huyện thế mạnh kinh tế biển, vịnh Vân Phong" },
    { name: "Huyện Cam Lâm", area: "543,8", pop: "115.400", density: "212", type: "Đô thị sân bay, du lịch Bãi Dài" },
    { name: "Huyện Khánh Vĩnh", area: "1.165,0", pop: "41.250", density: "35", type: "Huyện miền núi, phát triển lâm nghiệp sinh thái" },
    { name: "Huyện Khánh Sơn", area: "338,0", pop: "28.150", density: "83", type: "Huyện miền núi, kinh tế nông nghiệp đặc sản" },
    { name: "Huyện Trường Sa", area: "496,0", pop: "6.500", density: "13", type: "Huyện đảo tiền tiêu bảo vệ chủ quyền biển đảo" }
  ];

  const popData = [
    { name: "TP Nha Trang", val: 432120 },
    { name: "TX Ninh Hòa", val: 248150 },
    { name: "H. Diên Khánh", val: 152180 },
    { name: "TP Cam Ranh", val: 145310 },
    { name: "H. Vạn Ninh", val: 138200 },
    { name: "H. Cam Lâm", val: 115400 },
    { name: "H. Khánh Vĩnh", val: 41250 },
    { name: "H. Khánh Sơn", val: 28150 },
    { name: "H. Trường Sa", val: 6500 },
  ];

  const popTrendData = [
    { year: "2021", pop: 1241 },
    { year: "2022", pop: 1254 },
    { year: "2023", pop: 1262 },
    { year: "2024", pop: 1268 },
    { year: "2025", pop: 1272 },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch text-left"
    >
      {/* Left Column: Key Metadata & Trend Chart */}
      <div className="flex flex-col gap-10">
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 relative overflow-hidden hover:shadow-md transition-shadow">
          <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
          <span className="text-base font-semibold tracking-wider text-emerald-600 uppercase block mb-2">ĐỊA LÝ & HÀNH CHÍNH</span>
          <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase">Khánh Hòa Địa Linh Nhân Kiệt</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <span className="text-base font-medium text-slate-500 flex items-center gap-3">
                <MapPin className="text-emerald-500" size={18} /> Diện tích tự nhiên
              </span>
              <span className="text-lg font-semibold text-slate-900">5.137,8 km²</span>
            </div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <span className="text-base font-medium text-slate-500 flex items-center gap-3">
                <Users className="text-emerald-500" size={18} /> Dân số trung bình
              </span>
              <span className="text-lg font-semibold text-slate-900">1.272.500 người</span>
            </div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <span className="text-base font-medium text-slate-500 flex items-center gap-3">
                <Activity className="text-emerald-500" size={18} /> Mật độ dân số
              </span>
              <span className="text-lg font-semibold text-slate-900">247,7 người/km²</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-base font-medium text-slate-500 flex items-center gap-3">
                <Building2 className="text-emerald-500" size={18} /> Đơn vị cấp huyện
              </span>
              <span className="text-lg font-semibold text-slate-900">9 Đơn vị</span>
            </div>
          </div>
        </div>

        {/* Population Trend Area Chart */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 h-80 flex flex-col hover:shadow-md transition-shadow">
          <span className="text-base font-semibold tracking-wider text-emerald-600 uppercase block mb-2">TĂNG TRƯỞNG DÂN SỐ</span>
          <h4 className="text-lg font-bold text-slate-900 mb-4 uppercase">Quy mô dân số (Ngàn người)</h4>
          <div className="flex-1 w-full min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={popTrendData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorPop" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} domain={['dataMin - 10', 'auto']} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  labelStyle={{ fontWeight: 'bold', color: '#0f172a', fontSize: '16px' }}
                  itemStyle={{ fontSize: '16px' }}
                />
                <Area type="monotone" dataKey="pop" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorPop)" name="Dân số" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Right Column: Interactive Population Bar Chart & Table */}
      <div className="flex flex-col gap-10">
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col hover:shadow-md transition-shadow">
          <span className="text-base font-semibold tracking-wider text-emerald-600 uppercase block mb-2">TRỰC QUAN HÓA SỐ LIỆU</span>
          <h3 className="text-lg font-bold text-slate-900 mb-6 uppercase tracking-wide">Phân bổ dân cư các huyện/thị</h3>
          <div className="w-full min-h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={popData} layout="vertical" margin={{ top: 0, right: 30, left: 20, bottom: 0 }}>
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#334155', fontWeight: 500 }} width={120} />
                <Tooltip 
                  cursor={{ fill: '#f1f5f9' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ fontSize: '16px' }}
                />
                <Bar dataKey="val" fill="#10b981" radius={[0, 4, 4, 0]} barSize={20} name="Dân số (người)">
                  {popData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#10b981' : '#34d399'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Administrative Units Table */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col hover:shadow-md transition-shadow">
          <h4 className="text-base font-bold tracking-wider text-emerald-600 uppercase mb-6 flex items-center gap-3">
            <Table size={18} className="text-emerald-600" /> BẢNG SỐ LIỆU HÀNH CHÍNH
          </h4>
          <div className="overflow-y-auto max-h-[250px] scrollbar-thin pr-2">
            <table className="w-full text-left text-base text-slate-700">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 uppercase font-semibold">
                  <th className="py-3 pr-2">Đơn vị</th>
                  <th className="py-3 text-right">Diện tích (km²)</th>
                  <th className="py-3 text-right">Dân số (người)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-900">
                {adminUnits.map((u, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 pr-2 flex flex-col gap-1">
                      <span className="font-semibold text-slate-900">{u.name}</span>
                      <span className="text-base text-slate-500 max-w-[200px]" title={u.type}>{u.type}</span>
                    </td>
                    <td className="py-3 text-right font-semibold text-slate-800 font-mono text-lg">{u.area}</td>
                    <td className="py-3 text-right font-semibold text-slate-800 font-mono text-lg">{u.pop}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// -----------------------------------------------------------------
// SLIDE 2: NGÂN SÁCH & ĐẦU TƯ
// -----------------------------------------------------------------
function BudgetAndInvestmentSlide() {
  const expenditureStructure = [
    { name: "Chi cân đối ngân sách", value: 16444.1, color: "#2563eb" }, // blue-600
    { name: "Chi thường xuyên", value: 10200, color: "#64748b" }, // slate-500
    { name: "Chi đầu tư phát triển", value: 6244.1, color: "#10b981" } // emerald-500
  ];

  const historicalExpenditure = [
    { year: "2020", education: 3000, admin: 2000, social: 1500, economy: 1000, health: 800 },
    { year: "2021", education: 3200, admin: 2100, social: 1600, economy: 1100, health: 850 },
    { year: "2022", education: 3500, admin: 2200, social: 1800, economy: 1200, health: 900 },
    { year: "2023", education: 3800, admin: 2400, social: 2000, economy: 1300, health: 1000 },
    { year: "2024", education: 4200, admin: 2600, social: 2200, economy: 1500, health: 1100 },
    { year: "2025", education: 4600, admin: 2800, social: 2500, economy: 1700, health: 1200 },
  ];

  const revenueStructure = [
    { name: "Thu nội địa", value: 22986.7, color: "#2563eb" }, // blue-600
    { name: "Thu hải quan", value: 943.1, color: "#0ea5e9" }, // sky-500
    { name: "Thu viện trợ", value: 0, color: "#cbd5e1" } // slate-300
  ];

  const historicalRevenue = [
    { year: "2020", fdi: 2000, land: 1500, other: 3000, environment: 500, personal: 1000 },
    { year: "2021", fdi: 2200, land: 1800, other: 3200, environment: 550, personal: 1100 },
    { year: "2022", fdi: 2500, land: 2000, other: 3500, environment: 600, personal: 1200 },
    { year: "2023", fdi: 2800, land: 2200, other: 3800, environment: 650, personal: 1350 },
    { year: "2024", fdi: 3100, land: 2500, other: 4000, environment: 700, personal: 1500 },
    { year: "2025", fdi: 3500, land: 2800, other: 4200, environment: 800, personal: 1600 },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-10 text-left"
    >
      {/* Top layer: 2 Main Metric Cards (Thu & Chi) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Metric 1: Thu */}
        <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden border border-slate-100">
          <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between mb-6">
            <span className="text-base font-semibold tracking-wider text-slate-500 uppercase">TỔNG THU NGÂN SÁCH NHÀ NƯỚC</span>
            <span className="bg-blue-50 text-blue-700 px-4 py-1.5 rounded-xl text-base font-semibold">Lũy kế tháng 5</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-3xl md:text-4xl font-bold text-slate-900">23.929,8 tỷ</span>
            <span className="text-base font-medium text-slate-500">Kế hoạch năm: 37.625,000 tỷ VNĐ</span>
          </div>
          <div className="mt-8">
            <div className="flex justify-between text-base font-semibold mb-3">
              <span className="text-blue-600">Tiến độ thu ngân sách</span>
              <span className="text-slate-800 font-bold">63,6%</span>
            </div>
            <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden p-1">
              <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" style={{ width: "63.6%" }}></div>
            </div>
          </div>
        </div>

        {/* Metric 2: Chi */}
        <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden border border-slate-100">
          <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between mb-6">
            <span className="text-base font-semibold tracking-wider text-slate-500 uppercase">TỔNG CHI NGÂN SÁCH ĐỊA PHƯƠNG</span>
            <span className="bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-xl text-base font-semibold">Lũy kế tháng 5</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-3xl md:text-4xl font-bold text-slate-900">16.444,1 tỷ</span>
            <span className="text-base font-medium text-slate-500">Dự toán năm: 36.319,847 tỷ VNĐ</span>
          </div>
          <div className="mt-8">
            <div className="flex justify-between text-base font-semibold mb-3">
              <span className="text-emerald-600">Tiến độ giải ngân</span>
              <span className="text-slate-800 font-bold">45,3%</span>
            </div>
            <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden p-1">
              <div className="h-full bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full" style={{ width: "45.3%" }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle layer 1: Expenditure Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Tỉ lệ chi thường xuyên theo lĩnh vực */}
        <div className="bg-white p-8 rounded-3xl text-left flex flex-col justify-between shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <h4 className="text-lg font-bold tracking-wider text-slate-800 uppercase mb-6">TỈ LỆ CHI THƯỜNG XUYÊN THEO LĨNH VỰC</h4>
          <div className="w-full h-[300px] flex items-center justify-center relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={expenditureStructure}
                  cx="50%" cy="50%"
                  innerRadius={70} outerRadius={110}
                  paddingAngle={2}
                  dataKey="value" stroke="none"
                >
                  {expenditureStructure.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`${value} tỷ`, 'Giá trị']}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '16px' }}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '14px', paddingTop: '20px' }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none -mt-8">
              <span className="text-2xl font-bold text-slate-800">16.444</span>
              <span className="text-base font-semibold text-slate-500 uppercase tracking-wider mt-1">Tỷ đồng</span>
            </div>
          </div>
        </div>

        {/* Chi thường xuyên từ năm 2020 */}
        <div className="bg-white p-8 rounded-3xl text-left flex flex-col justify-between shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <h4 className="text-lg font-bold tracking-wider text-slate-800 uppercase mb-6">CHI THƯỜNG XUYÊN TỪ NĂM 2020</h4>
          <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={historicalExpenditure} margin={{ top: 10, right: 0, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '14px' }}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                <Bar dataKey="education" name="Giáo dục, đào tạo" stackId="a" fill="#1e40af" radius={[0, 0, 4, 4]} />
                <Bar dataKey="admin" name="Quản lý nhà nước" stackId="a" fill="#3b82f6" />
                <Bar dataKey="social" name="Bảo đảm xã hội" stackId="a" fill="#93c5fd" />
                <Bar dataKey="economy" name="Hoạt động kinh tế" stackId="a" fill="#10b981" />
                <Bar dataKey="health" name="Y tế, dân số" stackId="a" fill="#64748b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Middle layer 2: Revenue Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Cơ cấu thu ngân sách Nhà nước */}
        <div className="bg-white p-8 rounded-3xl text-left flex flex-col justify-between shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <h4 className="text-lg font-bold tracking-wider text-slate-800 uppercase mb-6">CƠ CẤU THU NGÂN SÁCH NHÀ NƯỚC</h4>
          <div className="w-full h-[300px] flex items-center justify-center relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={revenueStructure}
                  cx="50%" cy="50%"
                  innerRadius={70} outerRadius={110}
                  paddingAngle={2}
                  dataKey="value" stroke="none"
                >
                  {revenueStructure.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`${value} tỷ`, 'Giá trị']}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '16px' }}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '14px', paddingTop: '20px' }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none -mt-8">
              <span className="text-2xl font-bold text-slate-800">23.929</span>
              <span className="text-base font-semibold text-slate-500 uppercase tracking-wider mt-1">Tỷ đồng</span>
            </div>
          </div>
        </div>

        {/* Thu nội địa từ năm 2020 */}
        <div className="bg-white p-8 rounded-3xl text-left flex flex-col justify-between shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <h4 className="text-lg font-bold tracking-wider text-slate-800 uppercase mb-6">THU NỘI ĐỊA TỪ NĂM 2020</h4>
          <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={historicalRevenue} margin={{ top: 10, right: 0, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '14px' }}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                <Bar dataKey="fdi" name="DN có vốn đầu tư NN" stackId="a" fill="#047857" radius={[0, 0, 4, 4]} />
                <Bar dataKey="land" name="Tiền sử dụng đất" stackId="a" fill="#10b981" />
                <Bar dataKey="other" name="Khu vực KT ngoài NN" stackId="a" fill="#6ee7b7" />
                <Bar dataKey="environment" name="Thuế BVMT" stackId="a" fill="#f59e0b" />
                <Bar dataKey="personal" name="Thuế TNCN" stackId="a" fill="#64748b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bottom layer: Vốn đầu tư toàn xã hội */}
      <div className="bg-white p-8 rounded-3xl text-left flex flex-col justify-between shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-base font-semibold text-emerald-600 uppercase tracking-wider block mb-2">CƠ CẤU VỐN ĐẦU TƯ</span>
            <h4 className="text-lg font-bold text-slate-900 uppercase">Vốn đầu tư phát triển toàn xã hội</h4>
          </div>
          <span className="text-base font-bold text-emerald-600 bg-emerald-50 px-4 py-2 rounded-xl shrink-0">5 Tháng: 28.500 tỷ (+11,2%)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Recharts Pie Chart */}
          <div className="md:col-span-4 relative h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={[
                    { name: "Ngoài Nhà nước", value: 16580, color: "#f59e0b" },
                    { name: "Nhà nước", value: 8420, color: "#10b981" },
                    { name: "FDI", value: 3500, color: "#06b6d4" },
                  ]}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={3}
                  dataKey="value"
                  stroke="none"
                >
                  <Cell fill="#f59e0b" />
                  <Cell fill="#10b981" />
                  <Cell fill="#06b6d4" />
                </Pie>
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ fontSize: '16px' }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-base font-bold text-slate-500 uppercase tracking-widest">Tăng</span>
              <span className="text-2xl font-black text-emerald-600">+11,2%</span>
            </div>
          </div>

          {/* List detail */}
          <div className="md:col-span-8 space-y-4">
            <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-4 h-4 rounded-full bg-amber-500 block shrink-0" />
                <span className="text-base font-semibold text-slate-700">Khu vực ngoài Nhà nước</span>
              </div>
              <div className="text-right">
                <span className="text-base font-bold text-slate-900 block">16.580 tỷ (58.2%)</span>
                <span className="text-base font-bold text-emerald-600">+9,8%</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-4 h-4 rounded-full bg-emerald-500 block shrink-0" />
                <span className="text-base font-semibold text-slate-700">Vốn Nhà nước quản lý</span>
              </div>
              <div className="text-right">
                <span className="text-base font-bold text-slate-900 block">8.420 tỷ (29.5%)</span>
                <span className="text-base font-bold text-emerald-600">+14,5%</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-cyan-50/50 border border-cyan-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-4 h-4 rounded-full bg-cyan-500 block shrink-0" />
                <span className="text-base font-semibold text-slate-700">Vốn FDI nước ngoài</span>
              </div>
              <div className="text-right">
                <span className="text-base font-bold text-slate-900 block">3.500 tỷ (12.3%)</span>
                <span className="text-base font-bold text-emerald-600">+10,2%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disbursement Area Chart instead of Image */}
        <div className="mt-8 rounded-3xl h-56 relative group border border-slate-100 flex flex-col p-6 bg-slate-50">
           <span className="text-base font-bold text-slate-600 uppercase tracking-wider block mb-4">Tiến độ giải ngân đầu tư công (Tỷ VNĐ)</span>
           <div className="flex-1 w-full min-h-0">
             <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={[
                  { month: "T1", val: 1200 },
                  { month: "T2", val: 2500 },
                  { month: "T3", val: 4100 },
                  { month: "T4", val: 5600 },
                  { month: "T5", val: 8200 },
                ]} margin={{ top: 5, right: 0, left: -25, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorGiaiNgan" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    itemStyle={{ fontSize: '16px' }}
                  />
                  <Area type="monotone" dataKey="val" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorGiaiNgan)" name="Giải ngân" />
                </AreaChart>
             </ResponsiveContainer>
           </div>
        </div>
      </div>
    </motion.div>
  );
}

// -----------------------------------------------------------------
// SLIDE 3: NÔNG, LÂM & THỦY SẢN
// -----------------------------------------------------------------
function AgricultureSlide() {
  const ruralDataByDistrict = [
    { name: "Nha Trang", rate: 100 },
    { name: "Cam Ranh", rate: 100 },
    { name: "Ninh Hòa", rate: 85 },
    { name: "Diên Khánh", rate: 100 },
    { name: "Vạn Ninh", rate: 75 },
    { name: "Cam Lâm", rate: 80 },
    { name: "Khánh Vĩnh", rate: 45 },
    { name: "Khánh Sơn", rate: 35 },
  ];

  const cropDataByGroup = [
    { year: "2020", annual: 420, perennial: 330 },
    { year: "2021", annual: 415, perennial: 335 },
    { year: "2022", annual: 410, perennial: 342 },
    { year: "2023", annual: 405, perennial: 350 },
    { year: "2024", annual: 400, perennial: 358 },
  ];

  const cropTrendData = [
    { year: "2020", rice: 180, vegetable: 150, fruit: 330, other: 90 },
    { year: "2021", rice: 175, vegetable: 155, fruit: 335, other: 85 },
    { year: "2022", rice: 170, vegetable: 160, fruit: 342, other: 80 },
    { year: "2023", rice: 165, vegetable: 165, fruit: 350, other: 75 },
    { year: "2024", rice: 160, vegetable: 170, fruit: 358, other: 70 },
  ];

  const farmByDistrict = [
    { name: "Nha Trang", count: 5 },
    { name: "Cam Ranh", count: 30 },
    { name: "Ninh Hòa", count: 120 },
    { name: "Diên Khánh", count: 60 },
    { name: "Vạn Ninh", count: 40 },
    { name: "Cam Lâm", count: 80 },
    { name: "Khánh Vĩnh", count: 45 },
    { name: "Khánh Sơn", count: 15 },
  ];

  const farmTrend = [
    { year: "2020", livestock: 105, crop: 70, aqua: 100, other: 35 },
    { year: "2021", livestock: 110, crop: 75, aqua: 110, other: 30 },
    { year: "2022", livestock: 115, crop: 80, aqua: 120, other: 35 },
    { year: "2023", livestock: 120, crop: 85, aqua: 130, other: 40 },
    { year: "2024", livestock: 125, crop: 85, aqua: 140, other: 45 },
  ];

  const aquaCultureArea = [
    { year: "2020", fresh: 15, brackish: 80, salt: 120 },
    { year: "2021", fresh: 16, brackish: 82, salt: 125 },
    { year: "2022", fresh: 17, brackish: 85, salt: 130 },
    { year: "2023", fresh: 18, brackish: 88, salt: 135 },
    { year: "2024", fresh: 20, brackish: 90, salt: 140 },
  ];

  const fishingBoatsByLength = [
    { year: "2020", u6: 1200, l6_12: 3500, l12_15: 1800, l15_24: 2800, o24: 400 },
    { year: "2021", u6: 1150, l6_12: 3400, l12_15: 1650, l15_24: 2950, o24: 400 },
    { year: "2022", u6: 1100, l6_12: 3200, l12_15: 1500, l15_24: 3050, o24: 400 },
    { year: "2023", u6: 1050, l6_12: 3050, l12_15: 1400, l15_24: 3150, o24: 400 },
    { year: "2024", u6: 1000, l6_12: 2900, l12_15: 1300, l15_24: 3250, o24: 400 },
  ];

  const fishingBoatsByArea = [
    { year: "2020", nearShore: 6500, offShore: 3200 },
    { year: "2021", nearShore: 6200, offShore: 3350 },
    { year: "2022", nearShore: 5800, offShore: 3450 },
    { year: "2023", nearShore: 5500, offShore: 3550 },
    { year: "2024", nearShore: 5200, offShore: 3650 },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-10 text-left"
    >
      {/* Row 1: Nông thôn mới & Diện tích gieo trồng */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Nông thôn mới by District */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
          <h4 className="text-lg font-bold tracking-wider text-slate-800 uppercase mb-6">Tỷ lệ xã đạt chuẩn nông thôn mới theo huyện/thị xã (%)</h4>
          <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ruralDataByDistrict} margin={{ top: 10, right: 0, left: -25, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} angle={-35} textAnchor="end" />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '14px' }}
                />
                <Bar dataKey="rate" name="Tỷ lệ (%)" fill="#10b981" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Diện tích gieo trồng phân nhóm */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
          <h4 className="text-lg font-bold tracking-wider text-slate-800 uppercase mb-6">Diện tích cây trồng phân theo nhóm (Trăm Ha)</h4>
          <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={cropDataByGroup} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '14px' }}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                <Bar dataKey="annual" name="Cây hàng năm" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={30} />
                <Bar dataKey="perennial" name="Cây lâu năm" fill="#0ea5e9" radius={[4, 4, 0, 0]} barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Row 2: Chi tiết cây trồng */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
        <h4 className="text-lg font-bold tracking-wider text-slate-800 uppercase mb-6">Diện tích các loại cây trồng chi tiết (Trăm Ha)</h4>
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={cropTrendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '14px' }}
              />
              <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
              <Area type="monotone" dataKey="rice" name="Lúa" stackId="1" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} />
              <Area type="monotone" dataKey="vegetable" name="Hoa màu" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
              <Area type="monotone" dataKey="fruit" name="Cây ăn quả" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
              <Area type="monotone" dataKey="other" name="Cây khác" stackId="1" stroke="#64748b" fill="#64748b" fillOpacity={0.6} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Row 3: Trang trại */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Số lượng trang trại theo địa phương */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
          <h4 className="text-lg font-bold tracking-wider text-slate-800 uppercase mb-6">Số trang trại phân theo huyện/thị xã (2024)</h4>
          <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={farmByDistrict} layout="vertical" margin={{ top: 10, right: 30, left: 10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
                <XAxis type="number" axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} width={80} />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '14px' }}
                />
                <Bar dataKey="count" name="Số trang trại" fill="#f59e0b" radius={[0, 4, 4, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Số lượng trang trại qua các năm phân ngành */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
          <h4 className="text-lg font-bold tracking-wider text-slate-800 uppercase mb-6">Số trang trại theo ngành hoạt động qua các năm</h4>
          <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={farmTrend} margin={{ top: 10, right: 0, left: -25, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '14px' }}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                <Bar dataKey="livestock" name="Chăn nuôi" stackId="a" fill="#f59e0b" radius={[0, 0, 4, 4]} />
                <Bar dataKey="crop" name="Trồng trọt" stackId="a" fill="#10b981" />
                <Bar dataKey="aqua" name="Thủy sản" stackId="a" fill="#0ea5e9" />
                <Bar dataKey="other" name="Khác" stackId="a" fill="#64748b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Row 4: Thủy sản - Nuôi trồng */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
        <h4 className="text-lg font-bold tracking-wider text-slate-800 uppercase mb-6">Diện tích nuôi trồng thủy sản theo loại hình mặt nước (10 Ha)</h4>
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={aquaCultureArea} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '14px' }}
              />
              <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
              <Area type="monotone" dataKey="fresh" name="Nước ngọt" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
              <Area type="monotone" dataKey="brackish" name="Nước lợ" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} />
              <Area type="monotone" dataKey="salt" name="Nước mặn" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.6} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Row 5: Thủy sản - Khai thác */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Số lượng tàu thuyền theo chiều dài */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
          <h4 className="text-lg font-bold tracking-wider text-slate-800 uppercase mb-6">Tàu thuyền khai thác biển theo chiều dài (Chiếc)</h4>
          <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={fishingBoatsByLength} margin={{ top: 10, right: 0, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '14px' }}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                <Bar dataKey="u6" name="Dưới 6m" stackId="a" fill="#94a3b8" radius={[0, 0, 4, 4]} />
                <Bar dataKey="l6_12" name="Từ 6m đến 12m" stackId="a" fill="#38bdf8" />
                <Bar dataKey="l12_15" name="Từ 12m đến 15m" stackId="a" fill="#0ea5e9" />
                <Bar dataKey="l15_24" name="Từ 15m đến 24m" stackId="a" fill="#2563eb" />
                <Bar dataKey="o24" name="Từ 24m trở lên" stackId="a" fill="#1e3a8a" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Số lượng tàu thuyền theo vùng */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
          <h4 className="text-lg font-bold tracking-wider text-slate-800 uppercase mb-6">Tàu thuyền khai thác biển theo vùng (Chiếc)</h4>
          <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={fishingBoatsByArea} margin={{ top: 10, right: 0, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '14px' }}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                <Bar dataKey="nearShore" name="Khai thác gần bờ" fill="#cbd5e1" radius={[4, 4, 0, 0]} barSize={30} />
                <Bar dataKey="offShore" name="Khai thác xa bờ" fill="#2563eb" radius={[4, 4, 0, 0]} barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

    </motion.div>
  );
}

// -----------------------------------------------------------------
// SLIDE 4: CÔNG NGHIỆP & XÂY DỰNG
// -----------------------------------------------------------------
function IndustryAndConstructionSlide() {
  const iipStats = [
    { name: "Khai khoáng", thuc: 98, cungky: 102 },
    { name: "Chế biến chế tạo", thuc: 106.5, cungky: 104 },
    { name: "Sản xuất điện, khí đốt", thuc: 108.2, cungky: 101.5 },
    { name: "Cung cấp nước & xử lý rác", thuc: 103, cungky: 100 },
  ];

  const productsTable = [
    { name: "Bàn ghế gỗ các loại", unit: "Chiếc", val: "1.251,7", growth: "+172,3%" },
    { name: "Bia đóng chai", unit: "Ngàn lít", val: "40,7", growth: "+13,6%" },
    { name: "Bia đóng lon", unit: "Triệu lít", val: "1.251,7", growth: "-20,1%" },
    { name: "Quần áo thể thao", unit: "Ngàn chiếc", val: "8.989,3", growth: "+13,9%" },
    { name: "Cá đông lạnh", unit: "Tấn", val: "2.310,0", growth: "+8,5%" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch text-left"
    >
      {/* Left Widget Panel */}
      <div className="flex flex-col gap-10">
        {/* Core index indicators */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <span className="text-base font-semibold tracking-wider text-slate-400 uppercase block mb-4">CHỈ SỐ SẢN XUẤT TOÀN NGÀNH IIP</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            <div className="bg-slate-50 p-6 rounded-2xl">
              <span className="text-base font-normal text-slate-500 uppercase block mb-1">So với tháng trước</span>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-3xl font-bold text-red-600">96,7%</span>
                <span className="text-base font-medium text-red-600">(Giảm nhẹ)</span>
              </div>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl">
              <span className="text-base font-normal text-slate-500 uppercase block mb-1">So với cùng kỳ 2025</span>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-3xl font-bold text-emerald-600">105,4%</span>
                <span className="text-base font-medium text-emerald-600">(Tăng trưởng)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Industry Table */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-6">
            <Table size={20} className="text-emerald-600" />
            <h4 className="text-base font-bold tracking-wider text-slate-800 uppercase">SẢN PHẨM CÔNG NGHIỆP CHỦ YẾU THÁNG 5</h4>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-base text-slate-700">
              <thead>
                <tr className="border-b border-slate-100 text-slate-500 uppercase font-semibold text-base">
                  <th className="py-3 pr-2">Tên sản phẩm</th>
                  <th className="py-3">Đơn vị</th>
                  <th className="py-3 text-right">Thực hiện</th>
                  <th className="py-3 text-right">Tăng trưởng</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100/50 text-slate-900">
                {productsTable.map((p, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3 font-semibold text-slate-900 pr-2">{p.name}</td>
                    <td className="py-3 text-base text-slate-500">{p.unit}</td>
                    <td className="py-3 text-right font-normal text-slate-800 font-mono text-lg">{p.val}</td>
                    <td className={`py-3 text-right font-bold font-mono text-lg ${p.growth.startsWith("+") ? "text-emerald-600" : "text-red-600"}`}>
                      {p.growth}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Right Comparison Chart Panel */}
      <div className="flex flex-col gap-10">
        <div className="bg-white p-8 rounded-3xl text-left flex flex-col justify-between shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h4 className="text-lg font-bold tracking-wider text-slate-800 uppercase">
              CHỈ SỐ IIP CHI TIẾT THEO NGÀNH CẤP II
            </h4>
            <div className="flex gap-4 text-base font-medium">
              <span className="flex items-center gap-2 text-amber-500"><span className="w-4 h-4 bg-amber-500 rounded"></span> Báo cáo 2026</span>
              <span className="flex items-center gap-2 text-red-500"><span className="w-4 h-4 bg-red-500 rounded"></span> Cùng kỳ 2025</span>
            </div>
          </div>

          {/* Recharts Multi Bar Chart */}
          <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={iipStats} margin={{ top: 10, right: 0, left: -25, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} domain={[0, 120]} />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  labelStyle={{ fontWeight: 'bold', color: '#0f172a', marginBottom: '4px', fontSize: '16px' }}
                  itemStyle={{ fontSize: '16px' }}
                />
                <Bar dataKey="cungky" name="Cùng kỳ 2025 (%)" fill="#ef4444" radius={[6, 6, 0, 0]} barSize={40} />
                <Bar dataKey="thuc" name="Báo cáo 2026 (%)" fill="#f59e0b" radius={[6, 6, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Tình hình xây dựng */}
        <div className="bg-white p-8 rounded-3xl text-left flex flex-col justify-between shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-base font-bold tracking-wider text-slate-850 uppercase">TIẾN ĐỘ THI CÔNG NGÀNH XÂY DỰNG</h4>
            <span className="text-base font-bold text-emerald-600 bg-emerald-50 px-4 py-2 rounded-xl">TĂNG TRƯỞNG: +15,6%</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <p className="text-base text-slate-650 font-medium leading-relaxed flex-1">
              Ngành xây dựng Khánh Hòa tiếp tục đạt mức tăng trưởng cao nhờ các dự án trọng điểm quốc gia qua tỉnh như cao tốc Vân Phong - Nha Trang, Khánh Hòa - Buôn Ma Thuột đang tăng tốc giải phóng mặt bằng, thi công liên tục 3 ca 4 kíp.
            </p>
            <div className="w-full sm:w-56 h-32 rounded-2xl shrink-0 p-4 border border-slate-100 bg-slate-50 relative">
               <span className="text-base font-bold text-slate-500 uppercase tracking-widest block mb-2">Tăng trưởng thi công (%)</span>
               <ResponsiveContainer width="100%" height="80%">
                 <LineChart data={[
                   { name: 'T1', val: 5 }, { name: 'T2', val: 7 }, { name: 'T3', val: 12 }, { name: 'T4', val: 14.5 }, { name: 'T5', val: 15.6 }
                 ]} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                    <Tooltip contentStyle={{ fontSize: '14px', borderRadius: '12px' }} />
                    <Line type="monotone" dataKey="val" stroke="#10b981" strokeWidth={3} dot={{ r: 4, fill: '#10b981' }} />
                 </LineChart>
               </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// -----------------------------------------------------------------
// SLIDE 5: THƯƠNG MẠI, DU LỊCH & DỊCH VỤ
// -----------------------------------------------------------------
function CommerceTourismServicesSlide() {
  const [hoveredPie, setHoveredPie] = useState<number | null>(null);

  const detailData = [
    { name: "Bán lẻ hàng hóa", val: "58.038,7", percent: 63.88, growth: "+12,4%" },
    { name: "Dịch vụ lưu trú, ăn uống", val: "19.397,0", percent: 21.15, growth: "+18,1%" },
    { name: "Lữ hành du lịch", val: "2.551,3", percent: 2.80, growth: "+25,6%" },
    { name: "Dịch vụ tiêu dùng khác", val: "11.239,1", percent: 12.17, growth: "+9,8%" },
  ];

  const colors = ["bg-blue-600", "bg-emerald-600", "bg-amber-500", "bg-purple-600"];
  const strokeColors = ["#2563EB", "#10B981", "#F59E0B", "#8B5CF6"];
  const textColors = ["text-blue-600", "text-emerald-600", "text-amber-600", "text-purple-600"];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch text-left"
    >
      {/* Left Column: Stats & Breakdown Table */}
      <div className="flex flex-col gap-10">
        {/* Sum Indicator */}
        <div className="bg-white p-8 rounded-3xl relative overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
          <span className="text-base font-semibold tracking-wider text-slate-400 uppercase block mb-2">TỔNG MỨC BÁN LẺ & DOANH THU DỊCH VỤ</span>
          <div className="flex items-baseline gap-2 mt-4">
            <span className="text-3xl md:text-4xl font-bold text-slate-900">91.226,1 Tỷ VNĐ</span>
          </div>
          <p className="text-base text-slate-700 font-medium mt-6 leading-relaxed">
            Nhu cầu tiêu dùng phục hồi vững chắc. Sự bùng nổ của ngành dịch vụ lữ hành du lịch trong kỳ lễ hội biển Nha Trang là lực đẩy quan trọng thúc đẩy tiêu dùng nội địa và giao thương dịch vụ tăng trưởng hai chữ số.
          </p>
        </div>

        {/* Breakdown details */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <h4 className="text-base font-bold tracking-wider text-slate-800 uppercase mb-6 flex items-center gap-3">
            <ShoppingBag size={20} className="text-emerald-600" /> CÁC PHÂN NGÀNH THƯƠNG MẠI CHỦ CHỐT
          </h4>
          <div className="space-y-4">
            {detailData.map((d, idx) => (
              <div key={idx} className="bg-slate-50/85 p-5 rounded-2xl flex items-center justify-between transition-all hover:bg-slate-100/50">
                <div className="flex items-center gap-4">
                  <div className={`w-4 h-4 rounded-full ${colors[idx]}`}></div>
                  <div className="text-left">
                    <span className="text-base font-semibold text-slate-900 block">{d.name}</span>
                    <span className="text-base font-normal text-slate-500">Tỷ trọng: {d.percent}%</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-slate-900 block">{d.val} tỷ</span>
                  <span className="text-base font-bold text-emerald-600">{d.growth}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column: Donut Pie chart & Tourism Trend */}
      <div className="flex flex-col gap-10">
        <div className="bg-white p-8 rounded-3xl text-left flex flex-col justify-between shadow-sm border border-slate-100 flex-1 hover:shadow-md transition-shadow">
          <div>
            <h4 className="text-base font-bold tracking-wider text-slate-800 uppercase mb-2">
              CƠ CẤU DOANH SỐ TIÊU DÙNG - DỊCH VỤ
            </h4>
            <span className="text-base text-slate-500 font-medium">Kỳ báo cáo lũy kế 5 tháng đầu năm 2026</span>
          </div>

          {/* Recharts Pie Chart */}
          <div className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-8 py-6">
            <div className="w-56 h-56 relative shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={detailData}
                    cx="50%" cy="50%"
                    innerRadius={65} outerRadius={90}
                    paddingAngle={3}
                    dataKey="percent" stroke="none"
                    onMouseEnter={(_, index) => setHoveredPie(index)}
                    onMouseLeave={() => setHoveredPie(null)}
                  >
                    {detailData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={strokeColors[index % strokeColors.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'Tỷ trọng']}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '16px' }}
                  />
                </PieChart>
              </ResponsiveContainer>

              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-2">
                <span className="text-3xl font-bold text-slate-800">
                  {hoveredPie !== null ? `${detailData[hoveredPie].percent}%` : "100%"}
                </span>
                <span className="text-base font-semibold text-slate-500 uppercase tracking-wider mt-1 text-center max-w-[100px] truncate">
                  {hoveredPie !== null ? detailData[hoveredPie].name : "Doanh số"}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 text-base text-slate-700 w-full sm:w-auto">
              {detailData.map((d, idx) => (
                <div 
                  key={idx} 
                  className={`flex items-center gap-3 px-3 py-1.5 rounded-lg transition-all ${
                    hoveredPie === idx ? "bg-slate-100 font-semibold text-slate-900" : ""
                  }`}
                  onMouseEnter={() => setHoveredPie(idx)}
                  onMouseLeave={() => setHoveredPie(null)}
                >
                  <div className={`w-3 h-3 rounded-full ${colors[idx]}`} />
                  <span className="text-slate-600 font-medium truncate max-w-[140px]">{d.name}:</span>
                  <span className={`font-bold ${textColors[idx]}`}>{d.percent}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* New Tourism Visitor Trend Card with Image */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-base font-semibold text-emerald-600 uppercase tracking-wider block mb-1">TĂNG TRƯỞNG DU LỊCH NHA TRANG</span>
              <h4 className="text-lg font-bold text-slate-900 uppercase">Khách du lịch quốc tế & nội địa</h4>
            </div>
            <span className="text-base font-bold text-white bg-emerald-500 px-4 py-2 rounded-full uppercase shrink-0 shadow-sm shadow-emerald-500/20">Lũy kế: 3,8 Triệu</span>
          </div>

          <div className="mt-6">
             {/* Recharts line chart representing tourist arrivals */}
             <div className="w-full">
               <span className="text-base font-bold text-slate-400 block mb-4 uppercase tracking-wider">LƯỢT KHÁCH TÍCH LŨY THEO THÁNG (NGÀN LƯỢT)</span>
               <div className="h-56 w-full relative">
                 <ResponsiveContainer width="100%" height="100%">
                   <ComposedChart data={[
                     { month: 'T1', val: 520, domestic: 300, international: 220 },
                     { month: 'T2', val: 1100, domestic: 650, international: 450 },
                     { month: 'T3', val: 1800, domestic: 1100, international: 700 },
                     { month: 'T4', val: 2700, domestic: 1600, international: 1100 },
                     { month: 'T5', val: 3800, domestic: 2300, international: 1500 }
                   ]} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                      <Tooltip 
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '16px' }}
                      />
                      <Bar dataKey="domestic" name="Nội địa" fill="#3b82f6" stackId="a" radius={[0, 0, 4, 4]} barSize={30} />
                      <Bar dataKey="international" name="Quốc tế" fill="#10b981" stackId="a" radius={[4, 4, 0, 0]} barSize={30} />
                      <Line type="monotone" dataKey="val" name="Tổng" stroke="#f59e0b" strokeWidth={3} dot={{ r: 4, fill: '#f59e0b' }} />
                   </ComposedChart>
                 </ResponsiveContainer>
               </div>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// -----------------------------------------------------------------
// SLIDE 6: DOANH NGHIỆP & ĐĂNG KÝ KD
// -----------------------------------------------------------------
function EnterprisesSlide() {
  const enterpriseByType = [
    { year: "2020", tnhh: 5200, cp: 2100, private: 1500, fdi: 300, soe: 120 },
    { year: "2021", tnhh: 5500, cp: 2200, private: 1450, fdi: 310, soe: 115 },
    { year: "2022", tnhh: 6100, cp: 2400, private: 1400, fdi: 330, soe: 110 },
    { year: "2023", tnhh: 6800, cp: 2600, private: 1350, fdi: 350, soe: 105 },
    { year: "2024", tnhh: 7500, cp: 2800, private: 1300, fdi: 380, soe: 100 },
  ];

  const enterpriseBySector = [
    { sector: "Bán buôn, bán lẻ", count: 4200 },
    { sector: "Lưu trú, ăn uống", count: 2800 },
    { sector: "Xây dựng", count: 1800 },
    { sector: "CN chế biến", count: 1500 },
    { sector: "Vận tải, kho bãi", count: 850 },
    { sector: "Dịch vụ khác", count: 930 },
  ];

  const coopTotal = [
    { year: "2020", count: 145, workers: 2100 },
    { year: "2021", count: 152, workers: 2150 },
    { year: "2022", count: 160, workers: 2250 },
    { year: "2023", count: 168, workers: 2320 },
    { year: "2024", count: 175, workers: 2450 },
  ];

  const coopByDistrict = [
    { name: "Nha Trang", count: 25, workers: 450 },
    { name: "Cam Ranh", count: 15, workers: 250 },
    { name: "Ninh Hòa", count: 45, workers: 600 },
    { name: "Diên Khánh", count: 35, workers: 500 },
    { name: "Vạn Ninh", count: 20, workers: 300 },
    { name: "Cam Lâm", count: 18, workers: 250 },
    { name: "Khánh Vĩnh", count: 10, workers: 150 },
    { name: "Khánh Sơn", count: 7, workers: 100 },
  ];

  const individualTotal = [
    { year: "2020", count: 68500, workers: 112000 },
    { year: "2021", count: 67200, workers: 108500 },
    { year: "2022", count: 71000, workers: 115000 },
    { year: "2023", count: 75500, workers: 122000 },
    { year: "2024", count: 81200, workers: 131500 },
  ];

  const individualByDistrict = [
    { name: "Nha Trang", count: 32000, workers: 52000 },
    { name: "Cam Ranh", count: 8500, workers: 13500 },
    { name: "Ninh Hòa", count: 14000, workers: 22000 },
    { name: "Diên Khánh", count: 9500, workers: 15500 },
    { name: "Vạn Ninh", count: 7200, workers: 11500 },
    { name: "Cam Lâm", count: 6800, workers: 11000 },
    { name: "Khánh Vĩnh", count: 1800, workers: 3200 },
    { name: "Khánh Sơn", count: 1400, workers: 2800 },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-10 text-left"
    >
      {/* Doanh nghiệp */}
      <div>
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <Building2 className="text-blue-600" /> 1. Doanh nghiệp
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
            <h4 className="text-lg font-bold tracking-wider text-slate-800 uppercase mb-6">Doanh nghiệp đang hoạt động phân theo loại hình</h4>
            <div className="w-full h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={enterpriseByType} margin={{ top: 10, right: 0, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '14px' }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                  <Bar dataKey="tnhh" name="Công ty TNHH" stackId="a" fill="#3b82f6" radius={[0, 0, 4, 4]} />
                  <Bar dataKey="cp" name="Công ty Cổ phần" stackId="a" fill="#0ea5e9" />
                  <Bar dataKey="private" name="Doanh nghiệp Tư nhân" stackId="a" fill="#10b981" />
                  <Bar dataKey="fdi" name="FDI" stackId="a" fill="#f59e0b" />
                  <Bar dataKey="soe" name="DNNN" stackId="a" fill="#64748b" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
            <h4 className="text-lg font-bold tracking-wider text-slate-800 uppercase mb-6">Doanh nghiệp đang hoạt động phân theo ngành kinh tế (2024)</h4>
            <div className="w-full h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={enterpriseBySector} layout="vertical" margin={{ top: 10, right: 30, left: 10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
                  <XAxis type="number" axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
                  <YAxis dataKey="sector" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} width={110} />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '14px' }}
                  />
                  <Bar dataKey="count" name="Số doanh nghiệp" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={25} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Hợp tác xã */}
      <div>
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <Activity className="text-emerald-600" /> 2. Hợp tác xã
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
            <h4 className="text-lg font-bold tracking-wider text-slate-800 uppercase mb-6">Số Hợp tác xã và lao động qua các năm</h4>
            <div className="w-full h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={coopTotal} margin={{ top: 10, right: 0, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
                  <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
                  <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '14px' }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                  <Bar yAxisId="left" dataKey="count" name="Số Hợp tác xã" fill="#10b981" radius={[4, 4, 0, 0]} barSize={40} />
                  <Line yAxisId="right" type="monotone" dataKey="workers" name="Số lao động (Người)" stroke="#f59e0b" strokeWidth={3} dot={{ r: 4 }} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
            <h4 className="text-lg font-bold tracking-wider text-slate-800 uppercase mb-6">Số Hợp tác xã và lao động theo địa phương (2024)</h4>
            <div className="w-full h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={coopByDistrict} margin={{ top: 10, right: 0, left: -10, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} angle={-35} textAnchor="end" />
                  <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
                  <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '14px' }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                  <Bar yAxisId="left" dataKey="count" name="Số Hợp tác xã" fill="#10b981" radius={[4, 4, 0, 0]} barSize={25} />
                  <Line yAxisId="right" type="monotone" dataKey="workers" name="Số lao động (Người)" stroke="#f59e0b" strokeWidth={3} dot={{ r: 4 }} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Cơ sở SXKD cá thể */}
      <div>
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <Store className="text-fuchsia-600" /> 3. Cơ sở SXKD cá thể
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
            <h4 className="text-lg font-bold tracking-wider text-slate-800 uppercase mb-6">Số cơ sở và lao động qua các năm</h4>
            <div className="w-full h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={individualTotal} margin={{ top: 10, right: 0, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
                  <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
                  <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '14px' }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                  <Bar yAxisId="left" dataKey="count" name="Số cơ sở" fill="#a855f7" radius={[4, 4, 0, 0]} barSize={40} />
                  <Line yAxisId="right" type="monotone" dataKey="workers" name="Số lao động (Người)" stroke="#ec4899" strokeWidth={3} dot={{ r: 4 }} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
            <h4 className="text-lg font-bold tracking-wider text-slate-800 uppercase mb-6">Số cơ sở và lao động theo địa phương (2024)</h4>
            <div className="w-full h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={individualByDistrict} margin={{ top: 10, right: 0, left: -10, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} angle={-35} textAnchor="end" />
                  <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
                  <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '14px' }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                  <Bar yAxisId="left" dataKey="count" name="Số cơ sở" fill="#a855f7" radius={[4, 4, 0, 0]} barSize={25} />
                  <Line yAxisId="right" type="monotone" dataKey="workers" name="Số lao động (Người)" stroke="#ec4899" strokeWidth={3} dot={{ r: 4 }} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// -----------------------------------------------------------------
// SLIDE 7: GIÁO DỤC & Y TẾ
// -----------------------------------------------------------------
function EducationAndHealthcareSlide() {
  const uniSchools = [
    { year: "2020", count: 10 },
    { year: "2021", count: 10 },
    { year: "2022", count: 11 },
    { year: "2023", count: 11 },
    { year: "2024", count: 11 },
  ];

  const uniStudents = [
    { year: "2020", count: 45097 },
    { year: "2021", count: 41817 },
    { year: "2022", count: 43881 },
    { year: "2023", count: 46400 },
    { year: "2024", count: 50357 },
  ];

  const collegeSchools = [
    { year: "2020", count: 8 },
    { year: "2021", count: 7 },
    { year: "2022", count: 7 },
    { year: "2023", count: 7 },
    { year: "2024", count: 5 },
  ];

  const collegeStudents = [
    { year: "2020", count: 6285 },
    { year: "2021", count: 5831 },
    { year: "2022", count: 5378 },
    { year: "2023", count: 4707 },
    { year: "2024", count: 4541 },
  ];

  const vocSchools = [
    { year: "2020", count: 4 },
    { year: "2021", count: 4 },
    { year: "2022", count: 4 },
    { year: "2023", count: 4 },
    { year: "2024", count: 3 },
  ];

  const vocStudents = [
    { year: "2020", count: 2496 },
    { year: "2021", count: 3426 },
    { year: "2022", count: 3409 },
    { year: "2023", count: 4668 },
    { year: "2024", count: 4800 },
  ];

  const healthStaff = [
    { name: "Điều dưỡng", count: 2498, fill: "#3b82f6" },
    { name: "Bác sĩ", count: 2161, fill: "#f97316" },
    { name: "Hộ sinh", count: 635, fill: "#10b981" },
    { name: "Kỹ thuật viên", count: 592, fill: "#ef4444" },
    { name: "Y sĩ", count: 331, fill: "#a855f7" },
  ];

  const insuranceStats = [
    { title: "SỐ NGƯỜI THAM GIA BẢO HIỂM", val: "1.446.926", unit: "Người" },
    { title: "SỐ LƯỢT HƯỞNG BHYT", val: "2.477.786", unit: "Lượt" },
    { title: "HƯỞNG BHXH HÀNG THÁNG", val: "33.860", unit: "Người" },
    { title: "HƯỞNG BHTN HÀNG THÁNG", val: "9.825", unit: "Người" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-10 text-left"
    >
      {/* Education */}
      <div>
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <GraduationCap className="text-blue-600" /> 1. Giáo dục & Đào tạo
        </h3>
        
        {/* Đại học & Cao đẳng */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
            <h4 className="text-lg font-bold tracking-wider text-slate-800 uppercase mb-2">Đại học</h4>
            <div className="flex gap-8 mb-6">
              <div>
                <span className="text-3xl font-bold text-blue-600">11</span>
                <span className="text-base font-medium text-slate-500 ml-2">Trường</span>
              </div>
              <div>
                <span className="text-3xl font-bold text-blue-600">50.357</span>
                <span className="text-base font-medium text-slate-500 ml-2">Sinh viên</span>
              </div>
            </div>
            <div className="w-full h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={uniSchools.map((item, index) => ({ ...item, students: uniStudents[index].count }))} margin={{ top: 10, right: 0, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
                  <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
                  <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '14px' }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                  <Bar yAxisId="left" dataKey="count" name="Số trường" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={30} />
                  <Line yAxisId="right" type="monotone" dataKey="students" name="Số sinh viên" stroke="#f59e0b" strokeWidth={3} dot={{ r: 4 }} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
            <h4 className="text-lg font-bold tracking-wider text-slate-800 uppercase mb-2">Cao đẳng</h4>
            <div className="flex gap-8 mb-6">
              <div>
                <span className="text-3xl font-bold text-indigo-500">5</span>
                <span className="text-base font-medium text-slate-500 ml-2">Trường</span>
              </div>
              <div>
                <span className="text-3xl font-bold text-indigo-500">4.541</span>
                <span className="text-base font-medium text-slate-500 ml-2">Sinh viên</span>
              </div>
            </div>
            <div className="w-full h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={collegeSchools.map((item, index) => ({ ...item, students: collegeStudents[index].count }))} margin={{ top: 10, right: 0, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
                  <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
                  <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '14px' }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                  <Bar yAxisId="left" dataKey="count" name="Số trường" fill="#6366f1" radius={[4, 4, 0, 0]} barSize={30} />
                  <Line yAxisId="right" type="monotone" dataKey="students" name="Số sinh viên" stroke="#ec4899" strokeWidth={3} dot={{ r: 4 }} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Trung cấp */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
            <h4 className="text-lg font-bold tracking-wider text-slate-800 uppercase mb-2">Trung cấp</h4>
            <div className="flex gap-8 mb-6">
              <div>
                <span className="text-3xl font-bold text-teal-500">3</span>
                <span className="text-base font-medium text-slate-500 ml-2">Trường</span>
              </div>
              <div>
                <span className="text-3xl font-bold text-teal-500">4.668</span>
                <span className="text-base font-medium text-slate-500 ml-2">Học sinh</span>
              </div>
            </div>
            <div className="w-full h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={vocSchools.map((item, index) => ({ ...item, students: vocStudents[index].count }))} margin={{ top: 10, right: 0, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
                  <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
                  <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#64748b' }} />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '14px' }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                  <Bar yAxisId="left" dataKey="count" name="Số trường" fill="#14b8a6" radius={[4, 4, 0, 0]} barSize={30} />
                  <Line yAxisId="right" type="monotone" dataKey="students" name="Số học sinh" stroke="#f59e0b" strokeWidth={3} dot={{ r: 4 }} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Healthcare Column */}
      <div>
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2 mt-6">
          <HeartPulse className="text-emerald-600" /> 2. Y tế & Bảo hiểm
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-center items-center hover:shadow-md transition-shadow relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-3xl pointer-events-none" />
             <HeartPulse className="text-emerald-500 mb-4" size={40} />
             <span className="text-base font-bold text-slate-500 uppercase tracking-wider mb-2">Cơ sở y tế</span>
             <span className="text-4xl font-bold text-slate-900">185</span>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-center items-center hover:shadow-md transition-shadow relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl pointer-events-none" />
             <Bed className="text-blue-500 mb-4" size={40} />
             <span className="text-base font-bold text-slate-500 uppercase tracking-wider mb-2">Giường bệnh</span>
             <span className="text-4xl font-bold text-slate-900">2.565</span>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-center items-center hover:shadow-md transition-shadow relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full blur-3xl pointer-events-none" />
             <Stethoscope className="text-orange-500 mb-4" size={40} />
             <span className="text-base font-bold text-slate-500 uppercase tracking-wider mb-2">Bác sĩ</span>
             <span className="text-4xl font-bold text-slate-900">2.161</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
            <h4 className="text-lg font-bold tracking-wider text-slate-800 uppercase mb-6">Cơ cấu nhân lực ngành Y</h4>
            <div className="w-full h-[300px] flex items-center justify-center relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={healthStaff}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={110}
                    paddingAngle={2}
                    dataKey="count"
                    stroke="none"
                  >
                    {healthStaff.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value: number) => [`${value.toLocaleString()} người`, 'Số lượng']}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-4">
                <span className="text-3xl font-bold text-slate-800">
                  {healthStaff.reduce((sum, item) => sum + item.count, 0).toLocaleString()}
                </span>
                <span className="text-base text-slate-500 font-medium">Nhân sự</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
            <h4 className="text-lg font-bold tracking-wider text-slate-800 uppercase mb-6">Bảo hiểm xã hội & Y tế</h4>
            <div className="grid grid-cols-2 gap-6 h-full content-center">
              {insuranceStats.map((stat, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center items-center text-center">
                  <span className="text-base font-bold text-slate-500 uppercase mb-3 leading-relaxed">{stat.title}</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-slate-900">{stat.val}</span>
                  </div>
                  <span className="text-base text-slate-500 font-medium mt-1">{stat.unit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

// -----------------------------------------------------------------
// SLIDE 8: TÀI NGUYÊN, MÔI TRƯỜNG & KHCN
// -----------------------------------------------------------------
function EnvironmentAndTechSlide() {
  const landData = [
    { name: "Đất nông nghiệp", value: 465200, fill: "#10b981" },
    { name: "Đất phi nông nghiệp", value: 85400, fill: "#f59e0b" },
    { name: "Đất chưa sử dụng", value: 25100, fill: "#cbd5e1" },
  ];

  const rainfallData = [
    { month: "T1", "2023": 120, "2024": 85 },
    { month: "T2", "2023": 80, "2024": 65 },
    { month: "T3", "2023": 95, "2024": 110 },
    { month: "T4", "2023": 150, "2024": 140 },
    { month: "T5", "2023": 210, "2024": 190 },
    { month: "T6", "2023": 280, "2024": 250 },
    { month: "T7", "2023": 310, "2024": 290 },
    { month: "T8", "2023": 350, "2024": 380 },
    { month: "T9", "2023": 450, "2024": 420 },
    { month: "T10", "2023": 680, "2024": 710 },
    { month: "T11", "2023": 520, "2024": 550 },
    { month: "T12", "2023": 240, "2024": 260 },
  ];

  const riverWaterLevel = [
    { year: "2020", river1: 1.5, river2: 2.1, river3: 1.2 },
    { year: "2021", river1: 1.6, river2: 2.3, river3: 1.4 },
    { year: "2022", river1: 1.4, river2: 2.0, river3: 1.3 },
    { year: "2023", river1: 1.8, river2: 2.5, river3: 1.6 },
    { year: "2024", river1: 1.7, river2: 2.4, river3: 1.5 },
  ];

  const scienceOrgs = [
    { year: "2019", count: 40 },
    { year: "2020", count: 33 },
    { year: "2021", count: 38 },
    { year: "2022", count: 38 },
    { year: "2023", count: 39 },
    { year: "2024", count: 38 },
  ];

  const scienceOrgByType = [
    { year: "2020", admin: 2, edu: 13, research: 18, other: 0 },
    { year: "2021", admin: 2, edu: 13, research: 23, other: 0 },
    { year: "2022", admin: 2, edu: 14, research: 22, other: 0 },
    { year: "2023", admin: 3, edu: 14, research: 22, other: 0 },
    { year: "2024", admin: 3, edu: 15, research: 20, other: 0 },
  ];

  const scienceOrgByField = [
    { year: "2020", tech: 9, social: 11, medical: 5, other: 8 },
    { year: "2021", tech: 7, social: 13, medical: 6, other: 12 },
    { year: "2022", tech: 8, social: 12, medical: 6, other: 12 },
    { year: "2023", tech: 9, social: 10, medical: 5, other: 15 },
    { year: "2024", tech: 10, social: 11, medical: 5, other: 12 },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-10 text-left"
    >
      {/* 1. Đất đai */}
      <div>
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <Globe2 className="text-emerald-600" /> 1. Đất đai
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-center items-center hover:shadow-md transition-shadow">
             <span className="text-base font-bold text-slate-500 uppercase tracking-wider mb-3 text-center">Đất nông nghiệp</span>
             <span className="text-4xl font-bold text-emerald-600 mb-1">465.200</span>
             <span className="text-base font-medium text-slate-400">Ha</span>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-center items-center hover:shadow-md transition-shadow">
             <span className="text-base font-bold text-slate-500 uppercase tracking-wider mb-3 text-center">Đất phi nông nghiệp</span>
             <span className="text-4xl font-bold text-amber-500 mb-1">85.400</span>
             <span className="text-base font-medium text-slate-400">Ha</span>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-center items-center hover:shadow-md transition-shadow">
             <span className="text-base font-bold text-slate-500 uppercase tracking-wider mb-3 text-center">Đất chưa sử dụng</span>
             <span className="text-4xl font-bold text-slate-500 mb-1">25.100</span>
             <span className="text-base font-medium text-slate-400">Ha</span>
          </div>
        </div>
      </div>

      {/* 2. Khí tượng thủy văn */}
      <div>
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <CloudRain className="text-blue-500" /> 2. Khí tượng thủy văn
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
            <h4 className="text-lg font-bold tracking-wider text-slate-800 uppercase mb-6">Lượng mưa tại trạm quan trắc (mm)</h4>
            <div className="w-full h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={rainfallData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '14px' }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                  <Bar dataKey="2023" name="Năm 2023" fill="#94a3b8" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="2024" name="Năm 2024" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
            <h4 className="text-lg font-bold tracking-wider text-slate-800 uppercase mb-6">Mực nước một số sông chính (cm)</h4>
            <div className="w-full h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={riverWaterLevel} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '14px' }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                  <Line type="monotone" dataKey="river1" name="Sông A" stroke="#0ea5e9" strokeWidth={3} dot={{ r: 4 }} />
                  <Line type="monotone" dataKey="river2" name="Sông B" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} />
                  <Line type="monotone" dataKey="river3" name="Sông C" stroke="#f59e0b" strokeWidth={3} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Khoa học công nghệ */}
      <div>
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <Briefcase className="text-indigo-600" /> 3. Khoa học & Công nghệ
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-10">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
            <h4 className="text-lg font-bold tracking-wider text-slate-800 uppercase mb-6">Số tổ chức KH&CN (Tổ chức)</h4>
            <div className="w-full h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={scienceOrgs} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '14px' }}
                  />
                  <Bar dataKey="count" name="Số tổ chức" fill="#8b5cf6" radius={[4, 4, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
            <h4 className="text-lg font-bold tracking-wider text-slate-800 uppercase mb-6">Tổ chức KHCN theo loại hình</h4>
            <div className="w-full h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={scienceOrgByType} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '14px' }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '10px', paddingTop: '10px' }} />
                  <Bar dataKey="admin" name="Hành chính" stackId="a" fill="#0ea5e9" />
                  <Bar dataKey="edu" name="Giáo dục" stackId="a" fill="#f59e0b" />
                  <Bar dataKey="research" name="Nghiên cứu" stackId="a" fill="#ef4444" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
            <h4 className="text-lg font-bold tracking-wider text-slate-800 uppercase mb-6">Tổ chức KHCN theo lĩnh vực</h4>
            <div className="w-full h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={scienceOrgByField} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '14px' }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '10px', paddingTop: '10px' }} />
                  <Bar dataKey="tech" name="Kỹ thuật" fill="#3b82f6" />
                  <Bar dataKey="social" name="Xã hội" fill="#f97316" />
                  <Bar dataKey="medical" name="Y dược" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// -----------------------------------------------------------------
// SLIDE 9: TRẬT TỰ ATXH & AN TOÀN GIAO THÔNG
// -----------------------------------------------------------------
function SocialOrderAndSafetySlide() {
  const trafficData = [
    { year: "2020", injured: 216, dead: 149, accidents: 285 },
    { year: "2021", injured: 144, dead: 139, accidents: 220 },
    { year: "2022", injured: 151, dead: 182, accidents: 259 },
    { year: "2023", injured: 171, dead: 117, accidents: 251 },
    { year: "2024", injured: 206, dead: 125, accidents: 281 },
  ];

  const fireData = [
    { year: "2020", injured: 5, dead: 0, accidents: 56 },
    { year: "2021", injured: 5, dead: 4, accidents: 66 },
    { year: "2022", injured: 0, dead: 0, accidents: 26 },
    { year: "2023", injured: 0, dead: 0, accidents: 28 },
    { year: "2024", injured: 0, dead: 0, accidents: 18 },
  ];

  const humanDamageData = [
    { year: "2020", injured: 142, deadMissing: 47 },
    { year: "2021", injured: 2, deadMissing: 5 },
    { year: "2022", injured: 17, deadMissing: 9 },
    { year: "2023", injured: 11, deadMissing: 4 },
    { year: "2024", injured: 6, deadMissing: 1 },
  ];

  const houseDamageData = [
    { year: "2020", flooded: 27693, collapsed: 46 },
    { year: "2021", flooded: 56, collapsed: 0 },
    { year: "2022", flooded: 495, collapsed: 7 },
    { year: "2023", flooded: 173, collapsed: 0 },
    { year: "2024", flooded: 1005, collapsed: 0 },
  ];

  const agriDamageData = [
    { year: "2020", crops: 956, rice: 16502 },
    { year: "2021", crops: 99, rice: 7 },
    { year: "2022", crops: 2305, rice: 20896 },
    { year: "2023", crops: 583, rice: 499 },
    { year: "2024", crops: 29, rice: 1392 },
  ];

  const totalDamageData = [
    { year: "2020", value: 2423 },
    { year: "2021", value: 94 },
    { year: "2022", value: 1486 },
    { year: "2023", value: 748 },
    { year: "2024", value: 204 },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-10 text-left"
    >
      {/* ATGT & Cháy nổ */}
      <div>
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <ShieldCheck className="text-emerald-600" /> 1. Trật tự An toàn Xã hội & Giao thông
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
            <h4 className="text-lg font-bold tracking-wider text-slate-800 uppercase mb-6 flex items-center gap-2"><CarFront className="text-blue-500" /> Tai nạn giao thông</h4>
            <div className="w-full h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={trafficData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '14px' }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                  <Bar dataKey="injured" name="Số người bị thương (Người)" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="dead" name="Số người chết (Người)" fill="#f97316" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="accidents" name="Số vụ tai nạn (Vụ)" fill="#22c55e" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
            <h4 className="text-lg font-bold tracking-wider text-slate-800 uppercase mb-6 flex items-center gap-2"><Flame className="text-red-500" /> Cháy, nổ</h4>
            <div className="w-full h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={fireData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '14px' }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                  <Bar dataKey="injured" name="Số người bị thương (Người)" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="dead" name="Số người chết (Người)" fill="#f97316" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="accidents" name="Số vụ cháy, nổ (Vụ)" fill="#22c55e" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Thiên tai */}
      <div>
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2 mt-6">
          <CloudLightning className="text-orange-500" /> 2. Thiệt hại do thiên tai
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
            <h4 className="text-lg font-bold tracking-wider text-slate-800 uppercase mb-6 flex items-center gap-2"><Users className="text-indigo-500" /> Thiệt hại về người (Người)</h4>
            <div className="w-full h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={humanDamageData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '14px' }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                  <Bar dataKey="injured" name="Số người bị thương (Người)" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="deadMissing" name="Số người chết và mất tích (Người)" fill="#f97316" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
            <h4 className="text-lg font-bold tracking-wider text-slate-800 uppercase mb-6 flex items-center gap-2"><Home className="text-teal-500" /> Thiệt hại về nhà ở (Nhà)</h4>
            <div className="w-full h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={houseDamageData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '14px' }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                  <Bar dataKey="flooded" name="Nhà bị ngập nước, sập..." fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="collapsed" name="Số nhà bị sập đổ, cuốn trôi..." fill="#f97316" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
            <h4 className="text-lg font-bold tracking-wider text-slate-800 uppercase mb-6 flex items-center gap-2"><Wheat className="text-amber-500" /> Thiệt hại về nông nghiệp (Ha)</h4>
            <div className="w-full h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={agriDamageData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '14px' }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                  <Bar dataKey="crops" name="Diện tích hoa màu bị..." fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="rice" name="Diện tích lúa bị thiệt hại..." fill="#f97316" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
            <h4 className="text-lg font-bold tracking-wider text-slate-800 uppercase mb-6 flex items-center gap-2"><DollarSign className="text-emerald-500" /> Tổng giá trị thiệt hại (Tỷ đồng)</h4>
            <div className="w-full h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={totalDamageData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '14px' }}
                  />
                  <Bar dataKey="value" name="Giá trị (Tỷ đồng)" fill="#6366f1" radius={[4, 4, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
