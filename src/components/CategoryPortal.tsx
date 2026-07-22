import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {   
  Map,
  TrendingUp,
  Award,
  Users,
  Building,
  Anchor,
  Compass,
  FileText,
  Search,
  CheckCircle2,
  ChevronRight,
  Send,
  Upload,
  Heart,
  Calendar,
  Phone,
  HelpCircle,
  X,
  Plus,
  Info,
  ChevronDown,
  TreePine,
  Leaf,
  Clock,
  Building2,
  Bookmark,
  PieChart,
  Link as LinkIcon,
  Megaphone,
  Globe,
  LibraryBig,
  User,
  ArrowLeft,
  ChevronLeft,
  MessageSquare, Briefcase, BarChart3, Facebook, Youtube, Twitter
} from "lucide-react";

import SharedBottomSections from "./SharedBottomSections";
import GovPortalImported from "./GovPortal";
import MultimediaSection from "./MultimediaSection";
import LegalDocumentsPortal from "./LegalDocumentsPortal";
import PropagandaPortal from "./PropagandaPortal";
import KeyInformationCategories from "./KeyInformationCategories";
import DocumentSystemPortal from "./DocumentSystemPortal";
import CitizenReceptionSchedule from "./CitizenReceptionSchedule";
import VisitorPortal from "./VisitorPortal";
import Flipbook from "./Flipbook";

interface CategoryPortalProps {
  cat: {
    id: string;
    name: string;
    banner: string;
    title: string;
    subtitle: string;
  };
  onMapClick?: () => void;
  onLeaderClick?: (leader: any) => void;
}

export default function CategoryPortal({ cat, onMapClick, onLeaderClick }: CategoryPortalProps) {
  if (cat.id === "gioi-thieu") {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={cat.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          className="w-full text-slate-800"
        >
          <IntroPortal />
          <SharedBottomSections onMapClick={onMapClick} hideMap={true} />
        </motion.div>
      </AnimatePresence>
    );
  }

  if (cat.id === "chinh-quyen") {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={cat.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          className="w-full text-slate-800"
        >
          <GovPortalImported onLeaderClick={onLeaderClick} />
          <SharedBottomSections onMapClick={onMapClick} hideMap={true} />
        </motion.div>
      </AnimatePresence>
    );
  }

  if (cat.id === "cong-dan") {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={cat.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          className="w-full text-slate-800"
        >
          <CitizenPortal onMapClick={onMapClick} />
        </motion.div>
      </AnimatePresence>
    );
  }

  if (cat.id === "doanh-nghiep") {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={cat.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          className="w-full text-slate-800 business-portal-root"
        >
          <BusinessPortal onMapClick={onMapClick} />
        </motion.div>
      </AnimatePresence>
    );
  }

  if (cat.id === "du-khach") {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={cat.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          className="w-full text-slate-800"
        >
          <VisitorPortal />
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <SharedBottomSections onMapClick={onMapClick} hideMap={false} />
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 mt-8 text-slate-800">
      {/* Category Hero Banner */}
      {cat.id !== "cong-dan" && cat.id !== "du-khach" && (
        <div className="relative rounded-3xl overflow-hidden h-[180px] md:h-[280px] shadow-xl mb-12">
          <img
            src={cat.banner}
            alt={cat.name}
            className="w-full h-full object-cover object-center brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent flex flex-col justify-end p-6 md:p-12 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-red-600 text-white text-lg font-black uppercase px-3.5 py-1.5 rounded-lg tracking-wider mb-2 md:mb-3.5 inline-block shadow-md">
                Chuyên mục • {cat.name}
              </span>
              <h2 className="text-xl md:text-3.5xl font-black text-white leading-tight drop-shadow-md tracking-tight">
                {cat.title}
              </h2>
              <p className="text-slate-300 text-lg md:text-lg font-medium mt-1 md:mt-2 max-w-2xl drop-shadow-md">
                {cat.subtitle}
              </p>
            </motion.div>
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={cat.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
        >
          {cat.id === "gioi-thieu" && <IntroPortal />}
          {cat.id === "chinh-quyen" && <GovPortalImported />}
          {cat.id === "cong-dan" && <CitizenPortal />}
          {cat.id === "doanh-nghiep" && <BusinessPortal onMapClick={onMapClick} />}
        </motion.div>
      </AnimatePresence>
      <SharedBottomSections onMapClick={onMapClick} hideMap={true} />
    </div>
  );
}

/* =========================================================================
   1. INTRO COMPONENT (GIỚI THIỆU)
   ========================================================================= */
const DIVISIONS = [
  {
    id: "nha-trang",
    name: "TP. Nha Trang",
    type: "Thành phố",
    area: "251 km²",
    pop: "420,000",
    desc: "Thành phố trung tâm hành chính, văn hóa, du lịch lớn nhất tỉnh với bờ biển nổi tiếng, bãi tắm đẹp và các quần thể đảo, vịnh biển ngọc kỳ vĩ bậc nhất thế giới.",
  },
  {
    id: "cam-ranh",
    name: "TP. Cam Ranh",
    type: "Thành phố",
    area: "327 km²",
    pop: "151,000",
    desc: "Thành phố cảng nước sâu chiến lược quân sự, sở hữu Sân bay Quốc tế Cam Ranh và các vùng sinh thái bán đảo, đầm thủy triều giàu tiềm năng nuôi trồng thủy sản.",
  },
  {
    id: "cam-lam",
    name: "Huyện Cam Lâm",
    type: "Huyện",
    area: "547 km²",
    pop: "115,000",
    desc: "Vùng phát triển đô thị sân bay sinh thái thông minh, nối giữa hai thành phố phát triển. Nổi tiếng toàn quốc với xoài Úc chất lượng quả cao.",
  },
  {
    id: "ninh-hoa",
    name: "Thị xã Ninh Hòa",
    type: "Thị xã",
    area: "1,197 km²",
    pop: "245,000",
    desc: "Thị xã cửa ngõ phía Bắc, có diện tích tự nhiên rộng nhất tỉnh. Nổi danh với phong cảnh vịnh Nha Phu và văn hóa ẩm thực Nem nướng Ninh Hòa huyền thoại.",
  },
  {
    id: "dien-khanh",
    name: "Huyện Diên Khánh",
    type: "Huyện",
    area: "338 km²",
    pop: "148,000",
    desc: "Đô thị cổ giàu truyền thống văn hóa lịch sử, lưu giữ nguyên vẹn Thành cổ Diên Khánh, chùa Suối Đổ và đóng vai trò làm vệ tinh dịch vụ công nghiệp.",
  },
  {
    id: "van-ninh",
    name: "Huyện Vạn Ninh",
    type: "Huyện",
    area: "561 km²",
    pop: "140,000",
    desc: "Địa bàn của Khu kinh tế Bắc Vân Phong, bệ phóng công nghiệp hàng hải, cảng trung chuyển quốc tế, dịch vụ logistics hàng đầu cả nước.",
  },
  {
    id: "khanh-son",
    name: "Huyện Khánh Sơn",
    type: "Huyện",
    area: "338 km²",
    pop: "31,000",
    desc: "Được mệnh danh mảnh đất 'Đà Lạt thứ hai' tại Khánh Hòa với độ cao mát mẻ quanh năm, vương quốc trái ngon sầu riêng RI6 và cái nôi di sản nhạc cụ Đàn đá.",
  },
  {
    id: "khanh-vinh",
    name: "Huyện Khánh Vĩnh",
    type: "Huyện",
    area: "1,162 km²",
    pop: "45,000",
    desc: "Huyện có tỉ lệ rừng già núi đồi phủ lớn nhất tỉnh, sinh sống của đồng bào Raglai, ÊĐê mang màu sắc văn hóa dân gian bản địa và ẩm thực gà đồi, thịt nướng thơm ngon.",
  },
  {
    id: "truong-sa",
    name: "Huyện Trường Sa",
    type: "Huyện đảo",
    area: "496 km² (thềm lục địa)",
    pop: "6,000",
    desc: "Huyện đảo tiền tiêu vô cùng thiêng liêng ở Biển Đông của Tổ quốc, biểu tượng sừng sững của chủ quyền, lòng quả cảm và lòng ái quốc dân tộc Việt Nam.",
  },
];

const INTRO_TABS = [
  {
    id: "tong-quan",
    title: "Tổng quan về Khánh Hòa",
    icon: <Globe size={18} />,
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?q=80&w=2000&auto=format&fit=crop",
    desc: "Khánh Hòa là một tỉnh ven biển Nam Trung Bộ Việt Nam, có phần lãnh thổ trên đất liền nhô ra xa nhất về phía Biển Đông, có vị trí chiến lược đặc biệt quan trọng về kinh tế - xã hội, quốc phòng, an ninh. Diện tích Tự nhiên 5.137,79 km² và dân số hơn 1,2 triệu người.",
    date: "19/05/2026",
  },
  {
    id: "dieu-kien",
    title: "Điều kiện tự nhiên",
    icon: <TreePine size={18} />,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    desc: "Khánh Hòa có địa hình tương đối cao, bao gồm cả đồi núi, đồng bằng, hải đảo. Tỉnh được che chắn bởi dãy Trường Sơn, khí hậu ven biển Nam Trung Bộ rất ôn hòa, ít sương mù. Dòng hải lưu nóng tạo lợi thế vô cùng lớn cho du lịch sinh thái.",
    date: "19/05/2026",
  },
  {
    id: "tai-nguyen",
    title: "Tài nguyên thiên nhiên",
    icon: <Leaf size={18} />,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
    desc: "Tài nguyên biển là thế mạnh số 1 của Khánh Hòa với bờ biển dài 385 km và đặc quyền 200 hòn đảo lớn nhỏ. Sở hữu những vùng vịnh ngọc như Vịnh Nha Trang, Vịnh Cam Ranh, Vân Phong cùng mỏ khoáng sản quy mô lớn.",
    date: "18/05/2026",
  },
  {
    id: "lich-su",
    title: "Lịch sử hình thành",
    icon: <Clock size={18} />,
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2000&auto=format&fit=crop",
    desc: "Khánh Hòa có bề dày lịch sử - văn hóa hơn 370 năm xây dựng và phát triển, lưu giữ truyền thống với Tháp Bà Ponagar - Di sản Champa rực rỡ, Thành cổ Diên Khánh linh thiêng và truyền thống đấu tranh Cách mạng oai hùng.",
    date: "10/05/2026",
  },
  {
    id: "co-so",
    title: "Cơ sở hạ tầng",
    icon: <Building2 size={18} />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
    desc: "Tỉnh đang đầu tư diện mạo hạ tầng hiện đại: mạng lưới đường cao tốc thông suốt (Bắc - Nam, Vân Phong - Nha Trang), Cảng Hàng không Quốc tế Cam Ranh, Cảng trung chuyển quốc tế Vân Phong, đáp ứng trung tâm Dịch vụ hiện đại.",
    date: "15/05/2026",
  },
  {
    id: "chinh-sach",
    title: "Chính sách đặc thù hiện hưởng",
    icon: <Bookmark size={18} />,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2000&auto=format&fit=crop",
    desc: "Thực hiện Nghị quyết số 55/2022/QH15 của Quốc hội về thí điểm cơ chế, chính sách đặc thù phát triển. Tập trung Khu Kinh tế biển Vân Phong, thu hút công nghệ số, du lịch cao cấp, cực tăng trưởng cốt lõi cho Nam Trung Bộ.",
    date: "17/05/2026",
  },
];

const SPECIAL_POLICIES = [
  { 
    title: "Tự chủ thặng dư tài khóa", 
    category: "Kinh tế - Đầu tư",
    txt: "Phân vùng ưu tiên để lại nguồn thu ngân sách thặng dư khổng lồ giúp tái đầu tư hạ tầng huyện đảo Trường Sa và vịnh Vân Phong.",
    img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=300&auto=format&fit=crop",
    details: "Khánh Hòa được giữ lại 100% số thu tăng thêm từ các khoản thu nội địa và các khoản thu thuế xuất nhập khẩu so với dự toán trung ương giao để tái đầu tư hạ tầng cơ sở trọng điểm quốc gia tại huyện đảo Trường Sa và vịnh Vân Phong."
  },
  { 
    title: "Nam châm hút dòng vốn Vân Phong", 
    category: "Kinh tế - Đầu tư",
    txt: "Hành lang thuế doanh nghiệp tột cùng ưu bạt, cắt giảm tối đa thuế tiền thuê đất dài hạn cho nhà đầu tư trọng thể.",
    img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=300&auto=format&fit=crop",
    details: "Doanh nghiệp đầu tư vào Khu kinh tế Vân Phong được hưởng mức thuế suất ưu đãi thu nhập doanh nghiệp 10% trong 15 năm, miễn thuế nhập khẩu trang thiết bị và miễn tiền thuê đất lên đến 15 năm đầu tiên."
  },
  { 
    title: "Tối giản hóa thủ tục chuyển đất", 
    category: "Quy hoạch - Đô thị",
    txt: "Ủy quyền trực tiếp cho HĐND tỉnh chủ động phê chuẩn chuyển đổi mục đích sử dụng đất rừng, đất lúa diện rộng không chờ thông qua TW.",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=300&auto=format&fit=crop",
    details: "HĐND tỉnh Khánh Hòa được quyền chủ động quyết định chuyển đổi mục đích sử dụng đất trồng lúa nước từ 2 vụ trở lên với quy mô dưới 500 ha; đất rừng đặc dụng, đất rừng phòng hộ dưới 50 ha mà không phải trình Thủ tướng phê duyệt."
  },
  { 
    title: "Hành trình Đô thị trực thuộc TW năm 2030", 
    category: "Quy hoạch - Đô thị",
    txt: "Chỉ đạo đưa toàn thể 9 phân bộ đô thị hóa hoàn toàn, kiến tạo vương ngọc đại diện kinh tế biển xanh di sản hàng đầu.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=300&auto=format&fit=crop",
    details: "Định hướng quy hoạch phát triển toàn bộ tỉnh Khánh Hòa trở thành thành phố trực thuộc Trung ương vào năm 2030, lấy kinh tế biển xanh, dịch vụ du lịch chất lượng cao và chuyển đổi số làm đòn bẩy."
  },
  { 
    title: "Thu hút nhà đầu tư chiến lược", 
    category: "Kinh tế - Đầu tư",
    txt: "Cơ chế ưu đãi đặc biệt cho tập đoàn cam kết rót vốn từ 25.000 tỷ đồng vào các dự án trọng điểm công nghệ, lọc dầu, cảng biển.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=300&auto=format&fit=crop",
    details: "Áp dụng cơ chế một cửa ưu tiên, miễn thuế tối đa và bảo hộ đầu tư cho các tổ chức cam kết rót từ 25.000 tỷ đồng trở lên vào hạ tầng cảng biển nước sâu, trung tâm lọc hóa dầu, và sản xuất năng lượng tái tạo."
  },
  { 
    title: "Thí điểm quản lý nuôi biển công nghệ cao", 
    category: "Khoa học - Thủy sản",
    txt: "Giao khu vực biển ổn định lên đến 30 năm cho tổ chức nước nhà phát triển nuôi trồng hải sản bền vững xa bờ.",
    img: "https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?q=80&w=300&auto=format&fit=crop",
    details: "Thí điểm giao khu vực biển cho tổ chức, cá nhân Việt Nam để nuôi trồng thủy sản xa bờ với thời hạn lên tới 30 năm, áp dụng công nghệ lồng bè hiện đại HDPE có khả năng chống chịu sóng gió lớn."
  },
  { 
    title: "Khu kinh tế xanh thông minh", 
    category: "Quy hoạch - Đô thị",
    txt: "Áp dụng thí điểm số hóa toàn diện, tăng cường logistics sạch bảo vệ môi trường sinh thái đại dương.",
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=300&auto=format&fit=crop",
    details: "Thí điểm xây dựng các phân khu thuộc Khu kinh tế Vân Phong theo mô hình đô thị thông minh, áp dụng tiêu chuẩn sinh thái tuần hoàn xanh và số hóa 100% hồ sơ pháp lý."
  },
  { 
    title: "Đặc quyền nghiên cứu đại dương & R&D", 
    category: "Khoa học - Thủy sản",
    txt: "Xây dựng phòng nghiên cứu cấp quốc gia về sinh học biển, miễn thuế nhập khẩu trang thiết bị hiện đại phục vụ khoa học.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=300&auto=format&fit=crop",
    details: "Phát triển Trung tâm Nghiên cứu quốc gia về Công nghệ sinh học biển và đại dương, miễn toàn bộ thuế nhập khẩu cho máy móc khoa học chuyên sâu và tài trợ kinh phí nghiên cứu từ ngân sách."
  },
  { 
    title: "Quỹ hỗ trợ phát triển nghề cá bền vững", 
    category: "Khoa học - Thủy sản",
    txt: "Thành lập quỹ bảo trợ phi lợi nhuận hỗ trợ ngư dân vươn khơi bám biển, nâng cấp hệ thống liên lạc vệ tinh viễn thám.",
    img: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=300&auto=format&fit=crop",
    details: "Thành lập Quỹ hỗ trợ phát triển nghề cá Khánh Hòa để tiếp nhận các nguồn tài trợ hợp pháp nhằm hỗ trợ ngư dân đóng tàu lớn đánh bắt xa bờ bền vững, cứu hộ cứu nạn biển và hiện đại hóa thông tin liên lạc."
  },
  { 
    title: "Quy hoạch không gian đô thị sân bay", 
    category: "Quy hoạch - Đô thị",
    txt: "Xây dựng Cam Ranh thành trung tâm đô thị cảng hàng không đẳng cấp quốc tế, bổ trợ đắc lực chuỗi hành lang kinh tế ven biển.",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=300&auto=format&fit=crop",
    details: "Quy hoạch tổng thể khu vực vịnh Cam Ranh kết hợp cảng hàng không quốc tế Cam Ranh thành tổ hợp đô thị logistics sân bay thông minh kết hợp nghỉ dưỡng cao cấp quốc tế."
  }
];

function IntroPortal() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [showAllPoliciesPage, setShowAllPoliciesPage] = useState(false);
  const [policySearch, setPolicySearch] = useState("");
  const [selectedPolicyCat, setSelectedPolicyCat] = useState("Tất cả");
  const activeTabContent = INTRO_TABS[activeTabIdx];
  const policiesSectionRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full mb-16 text-left">
      {/* SPOTLIGHT TOP BANNER */}
      <section className="w-full bg-[#0f172a] border-b border-slate-800 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-left">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight uppercase flex items-center gap-2.5">
              <Globe size={24} className="text-red-500 animate-pulse" /> GIỚI THIỆU VỀ KHÁNH HÒA
            </h3>
            <span className="text-lg font-semibold text-white/60 flex items-center gap-1.5 select-none hidden md:flex">
              Cổng thông tin điện tử hành chính
            </span>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 md:gap-12 items-stretch xl:h-[460px]">
            <div className="xl:col-span-7 pr-0 xl:pr-8 h-[400px] xl:h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTabIdx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 group cursor-pointer"
                >
                  <img
                    src={activeTabContent.image}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    alt={activeTabContent.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                  
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-20 text-left">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-red-600 to-yellow-500 text-white text-base font-black rounded-md tracking-wider uppercase shadow-md pointer-events-none self-start mb-4">
                      TIÊU ĐIỂM
                    </span>
                    <h4 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight drop-shadow-xl text-left line-clamp-3 mb-6 group-hover:text-yellow-400 transition-colors">
                      {activeTabContent.title}
                    </h4>
                    
                    <div className="flex items-center gap-4 text-base text-white/90 font-medium tracking-wider">
                      <span className="flex items-center gap-1.5 bg-black/30 px-3.5 py-1.5 rounded-full backdrop-blur-md border border-white/10 shadow-sm">
                        <Calendar size={14} className="text-yellow-400" /> {activeTabContent.date}
                      </span>
                      <span className="flex items-center gap-1.5 bg-black/30 px-3.5 py-1.5 rounded-full backdrop-blur-md border border-white/10 shadow-sm">
                        <User size={14} className="text-red-400" /> Ban biên tập
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="xl:col-span-5 flex flex-col gap-3 max-h-[460px] overflow-y-auto pr-1 bg-[#0f172a]/50 backdrop-blur-xl border border-white/10 p-4 rounded-3xl backdrop-saturate-150 custom-scrollbar">
              {INTRO_TABS.map((item, idx) => {
                const isActive = activeTabIdx === idx;
                return (
                  <motion.div
                    key={idx}
                    onClick={() => setActiveTabIdx(idx)}
                    className={`flex gap-4 p-3 rounded-2xl border transition-all duration-300 cursor-pointer text-left ${
                      isActive
                        ? "bg-white/10 border-white/20 shadow-md backdrop-blur-md"
                        : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10"
                    }`}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="w-28 h-20 md:w-32 md:h-24 shrink-0 rounded-xl overflow-hidden relative shadow-sm bg-slate-900 border border-white/10 group-hover:border-red-500/50 transition-colors">
                      <img
                        src={item.image}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                        alt={item.title}
                      />
                      {isActive && (
                        <div className="absolute inset-0 bg-red-600/20 flex items-center justify-center animate-pulse">
                          <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-center space-y-1">
                      <h5 className={`text-lg md:text-base font-bold truncate ${isActive ? "text-yellow-400" : "text-white"}`}>
                        {item.title}
                      </h5>
                      <p className="text-lg uppercase font-bold text-slate-400 tracking-wider flex items-center gap-1">
                        <Info size={12} className="text-red-400" /> {isActive ? "Đang xem" : "Cập nhật " + item.date.split('/')[2]}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Flipbook Section */}
      <section className="w-full py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
            <Flipbook />
        </div>
      </section>

      {/* SECTION HỢP NHẤT: NIÊN GIÁM ĐỊA CHÍ & PHÁT TRIỂN TOÀN DIỆN KHÁNH HÒA */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/*           {/* CHUNG MỘT KHỐI: MASTER CARD HOUSING CONTAINER */}
          <div className="bg-white border border-slate-100 shadow-sm rounded-3xl overflow-hidden p-6 md:p-10 space-y-12">
            
            {/* PHẦN 1: TỔNG QUAN ĐỊA DƯ VÀ ĐƠN VỊ HÀNH CHÍNH */}
            <div className="space-y-8">
              <div className="flex items-center gap-3.5 border-b border-slate-100 pb-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-150 text-red-800 flex items-center justify-center shrink-0">
                  <Globe size={18} />
                </div>
                <div className="text-left py-1">
                  <h4 className="text-2xl md:text-3.5xl font-black tracking-tight text-red-800 uppercase leading-tight">
                    I. Tổng quan & Bản đồ hành chính
                  </h4>
                  <p className="text-lg sm:text-lg font-bold text-slate-400 uppercase tracking-wider mt-1.5">
                    Diện tích tự nhiên & 9 đơn vị cấp huyện trực thuộc
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Block: Narrative text and 9 divisions */}
                <div className="lg:col-span-8 space-y-8">
                  
                  {/* Narrative intro section */}
                  <div className="border-l-4 border-red-600 pl-5 py-2 space-y-4">
                    <p className="text-lg md:text-base text-slate-700 leading-relaxed font-semibold text-justify">
                      <strong>Khánh Hòa</strong> là địa bàn trọng yếu nằm ở vùng duyên hải cực Đông của Tổ quốc Việt Nam Nam Trung Bộ. Tỉnh đóng vai trò là cửa ngõ quốc gia ra Biển Đông và là hành lang kinh tế chiến lược kết nối vững chắc vùng Tây Nguyên với thị trường quốc tế rộng mở.
                    </p>
                    <p className="text-lg md:text-base text-slate-700 leading-relaxed font-semibold text-justify">
                      Nhờ thềm lục địa vạm vỡ kiến tạo hoàn hảo, địa bàn tỉnh sở hữu 3 vịnh lớn nổi tiếng gồm <strong>Vịnh Nha Trang</strong> (vịnh biển ngọc xinh đẹp hàng đầu thế giới), <strong>Vịnh Cam Ranh</strong> (trọng điểm quân cảng nước sâu mang giá trị phòng hải thiêng liêng) và <strong>Vịnh Vân Phong</strong> (đầu mối công nghiệp - dịch vụ hàng hải tương lai). Khí hậu ôn hòa hải dương, ít thiên tai bão lụt từ lâu đã mang lại thế mạnh kinh tế sinh thái vĩnh cửu cho vùng đất này.
                    </p>
                  </div>

                  {/* Subdivisions segment */}
                  <div className="space-y-4 pt-4 text-left">
                    <h4 className="text-lg font-black text-[#1E3A8A] uppercase tracking-wider flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-red-600 rounded-full inline-block" />
                      9 Đơn vị Hành chính cấp Huyện trực thuộc:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {DIVISIONS.map((div) => (
                        <div key={div.id} className="p-4 bg-slate-50/60 hover:bg-red-50/20 border border-slate-200/80 hover:border-red-500 rounded-2xl transition-all duration-300 group text-left">
                          <h5 className="text-lg font-black text-red-800 group-hover:text-red-600 transition-colors mb-1.5 font-sans">
                            {div.name}
                          </h5>
                          <span className="text-lg bg-white border border-slate-200 py-0.5 px-2 rounded-md font-extrabold text-red-800 uppercase inline-block">
                            {div.type} • {div.area}
                          </span>
                          <p className="text-lg text-slate-500 font-bold mt-2.5 line-clamp-3 leading-relaxed">
                            {div.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Block: Official indicators block & Image */}
                <div className="lg:col-span-4 space-y-6">
                  
                  {/* Reports Indicators Box */}
                  <div className="bg-gradient-to-br from-red-900 to-red-950 text-white rounded-[24px] p-6 relative overflow-hidden shadow-lg border border-white/5">
                    <div className="absolute top-0 right-0 w-36 h-36 bg-white/5 rounded-full -mr-12 -mt-12 pointer-events-none" />
                    <h4 className="text-yellow-400 font-black text-lg mb-5 tracking-tight uppercase border-b border-white/10 pb-3 flex items-center gap-2">
                      <Info size={16} /> Chỉ số địa dư chính yếu
                    </h4>

                    <div className="space-y-4 text-left">
                      {[
                        { label: "Tổng diện tích tự nhiên", val: "5.137,79 km²", desc: "Địa hình sơn địa chiếm 70% diện tích" },
                        { label: "Quy mô dân số", val: "1.252.000+ người", desc: "Lực lượng lao động dồi dào, trí thức cao" },
                        { label: "Đơn vị hành chính", val: "9 Đơn vị cấp huyện", desc: "Bao gồm 2 thành phố, 1 thị xã và 6 huyện" },
                        { label: "Đường bờ biển", val: "385 km", desc: "Bao quanh bởi hơn 200 hòn đảo lớn nhỏ" },
                        { label: "Tiền tiêu chủ quyền", val: "Quần đảo Trường Sa", desc: "Trọng trấn khẳng định chủ quyền trên Biển Đông" },
                        { label: "Trung tâm hành chính", val: "TP. Nha Trang", desc: "Đô thị du lịch biển xanh danh giá" }
                      ].map((stat, i) => (
                        <div key={i} className="flex flex-col gap-1.5 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                          <div className="flex items-start justify-between gap-3">
                            <p className="text-base text-white/90 font-bold leading-snug">{stat.label}</p>
                            <span className="text-base font-black text-yellow-300 bg-yellow-900/40 px-2.5 py-1 rounded-md border border-yellow-700/50 shrink-0 text-right shadow-sm">
                              {stat.val}
                            </span>
                          </div>
                          <p className="text-base text-slate-300 font-medium leading-relaxed">{stat.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Local Beautiful Image to provide spatial context */}
                  <div className="relative aspect-video rounded-3xl overflow-hidden shadow-md border border-slate-100">
                    <img 
                      src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=1200&auto=format&fit=crop" 
                      referrerPolicy="no-referrer"
                      alt="Hòn ngọc hải vực Nha Trang" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-3 text-white text-left">
                      <p className="text-lg font-black text-yellow-300 uppercase tracking-widest leading-none mb-1">
                        Tiêu điểm cảnh sắc
                      </p>
                      <h5 className="text-lg font-black drop-shadow-md leading-tight">
                        Hòn ngọc Nha Trang, Khánh Hòa
                      </h5>
                    </div>
                  </div>

                </div>
              </div>
            </div>




            {/* PHẦN 2: ĐIỀU KIỆN TỰ NHIÊN, TÀI NGUYÊN, LỊCH SỬ & HẠ TẦNG KẾT HỢP (4 CỘT 2x2 ĐẸP MẮT) */}
            <div className="space-y-8">
              <div className="flex items-center gap-3.5 border-b border-slate-100 pb-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-150 text-red-700 flex items-center justify-center shrink-0">
                  <LibraryBig size={18} />
                </div>
                <div className="text-left py-1">
                  <h4 className="text-2xl md:text-3.5xl font-black tracking-tight text-red-700 uppercase leading-tight">
                    II. Địa chí Tự nhiên, Sử ký, Hải sản, cơ sở Hạ tầng
                  </h4>
                  <p className="text-lg sm:text-lg font-bold text-slate-400 uppercase tracking-wider mt-1.5">
                    Sơn văn thạch học, Yến sào, di sản sử sách ngàn năm, đặc chủng khánh hải & quy hoạch đồng bộ
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                
                {/* Cột 1: Điều kiện Tự nhiên */}
                <div className="rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:bg-red-800/5 transition-colors duration-300 text-left group bg-slate-50/40">
                  <div className="space-y-6">
                    
                    {/* Image chính xác về nội dung tự nhiên biển đảo địa hình */}
                    <div className="relative aspect-video rounded-xl overflow-hidden shadow-sm border border-slate-100 bg-slate-100">
                      <img 
                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop" 
                        referrerPolicy="no-referrer"
                        alt="Điều kiện tự nhiên Khánh Hòa" 
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-750"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                      <span className="absolute bottom-2.5 left-2.5 bg-red-800 text-white text-lg uppercase font-black px-2 py-0.5 rounded shadow-md">
                        Hải dương & Đồi núi
                      </span>
                    </div>

                    <h4 className="text-base font-black text-red-800 uppercase tracking-tight border-l-4 border-red-800 pl-3">
                      Điều kiện tự nhiên
                    </h4>

                    <p className="text-lg md:text-lg text-slate-600 leading-relaxed font-semibold text-justify">
                      Sở hữu hệ địa thế sườn núi lượn sóng chuyển tiếp mềm dốc ra đại dương: thềm lục địa vây quanh bởi dải Trường Sơn che chắn vững chãi án ngự phía Tây, phía Đông mở toang các miền duyên hải bằng phẳng ngập nắng gió.
                    </p>

                    <ul className="space-y-2 text-lg text-slate-500 font-bold border-t border-slate-100 pt-4">
                      <li className="flex items-start gap-2.5 p-2 -mx-2 rounded-xl hover:bg-white hover:shadow-[0_2px_8px_-2px_rgba(0,0,0,0.06)] border border-transparent hover:border-slate-100/80 transition-all duration-300 cursor-pointer group/item hover:text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0 transition-all duration-300 group-hover/item:scale-125 group-hover/item:bg-red-800" />
                        <span><strong>Khí hậu ôn hòa diệu mát:</strong> Chênh lệch nhiệt độ năm cực thấp dưới ảnh hưởng đại dương điều hòa không khí.</span>
                      </li>
                      <li className="flex items-start gap-2.5 p-2 -mx-2 rounded-xl hover:bg-white hover:shadow-[0_2px_8px_-2px_rgba(0,0,0,0.06)] border border-transparent hover:border-slate-100/80 transition-all duration-300 cursor-pointer group/item hover:text-slate-700 text-justify">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0 transition-all duration-300 group-hover/item:scale-125 group-hover/item:bg-red-800" />
                        <span><strong>Ánh mặt trời dồi dào:</strong> Sở hữu hơn 2.600 giờ nắng rực rỡ hàng năm, rất có thế mạnh cho quang năng nhiệt điện và sinh dưỡng sinh thái.</span>
                      </li>
                      <li className="flex items-start gap-2.5 p-2 -mx-2 rounded-xl hover:bg-white hover:shadow-[0_2px_8px_-2px_rgba(0,0,0,0.06)] border border-transparent hover:border-slate-100/80 transition-all duration-300 cursor-pointer group/item hover:text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0 transition-all duration-300 group-hover/item:scale-125 group-hover/item:bg-red-800" />
                        <span><strong>Thạch lưu nguồn phong phú:</strong> Sông Cái Nha Trang cấp nguồn thạch thủy dồi dào, bồi tích đất phù sa màu mỡ.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Cột 2: Tài nguyên Thiên nhiên */}
                <div className="rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:bg-red-500/5 transition-colors duration-300 text-left group bg-slate-50/40">
                  <div className="space-y-6">
                    
                    {/* Image đại chủng sinh thái thủy sản biển thềm san hô */}
                    <div className="relative aspect-video rounded-xl overflow-hidden shadow-sm border border-slate-100 bg-slate-100">
                      <img 
                        src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop" 
                        referrerPolicy="no-referrer"
                        alt="Tài nguyên san hô sinh thái biển" 
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-750"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                      <span className="absolute bottom-2.5 left-2.5 bg-red-600/90 text-white text-lg uppercase font-black px-2 py-0.5 rounded shadow-md">
                        Khánh hải & Lâm học
                      </span>
                    </div>

                    <h4 className="text-base font-black text-red-700 uppercase tracking-tight border-l-4 border-red-600 pl-3">
                      Tài nguyên thiên nhiên
                    </h4>

                    <p className="text-lg md:text-lg text-slate-600 leading-relaxed font-semibold text-justify">
                      Thừa hưởng vùng tài chủng đa sinh học dạt dào hải vị bậc nhất Đông Nam Á. Môi trường hải lưu thích ứng bảo tồn những rạn san hô nguyên sinh quý báu cùng quần thể hải chủng quý hiểm có giá trị cao.
                    </p>

                    <ul className="space-y-2 text-lg text-slate-500 font-bold border-t border-slate-100 pt-4">
                      <li className="flex items-start gap-2.5 p-2 -mx-2 rounded-xl hover:bg-white hover:shadow-[0_2px_8px_-2px_rgba(0,0,0,0.06)] border border-transparent hover:border-slate-100/80 transition-all duration-300 cursor-pointer group/item hover:text-slate-700 text-justify">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0 transition-all duration-300 group-hover/item:scale-125 group-hover/item:bg-red-600" />
                        <span><strong>Đại vương quốc Yến sào:</strong> Sở hữu kỷ lục quốc gia về sản lượng dồi dào yến tổ hoang đảo thiên nhiên, bồi dưỡng sức sống đỉnh cao.</span>
                      </li>
                      <li className="flex items-start gap-2.5 p-2 -mx-2 rounded-xl hover:bg-white hover:shadow-[0_2px_8px_-2px_rgba(0,0,0,0.06)] border border-transparent hover:border-slate-100/80 transition-all duration-300 cursor-pointer group/item hover:text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0 transition-all duration-300 group-hover/item:scale-125 group-hover/item:bg-red-600" />
                        <span><strong>Cát trắng mịn silica:</strong> Mỏ cát trắng thạch anh vô ngần tinh tinh thiết dùng chế phẩm xuất khẩu pha lê cao cấp.</span>
                      </li>
                      <li className="flex items-start gap-2.5 p-2 -mx-2 rounded-xl hover:bg-white hover:shadow-[0_2px_8px_-2px_rgba(0,0,0,0.06)] border border-transparent hover:border-slate-100/80 transition-all duration-300 cursor-pointer group/item hover:text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0 transition-all duration-300 group-hover/item:scale-125 group-hover/item:bg-red-600" />
                        <span><strong>Suối khoáng Đảnh Thạnh:</strong> Dòng thạch lưu axit silic dồi dào giàu kẽm, sắt, mang giá trị y học phục hồi vượt trội.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Cột 3: Lịch sử Hình thành */}
                <div className="rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:bg-red-500/5 transition-colors duration-300 text-left group bg-slate-50/40">
                  <div className="space-y-6">
                    
                    {/* Image cổ kính, di sản văn hóa truyền thống */}
                    <div className="relative aspect-video rounded-xl overflow-hidden shadow-sm border border-slate-100 bg-slate-100">
                      <img 
                        src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1200&auto=format&fit=crop" 
                        referrerPolicy="no-referrer"
                        alt="Lịch sử tháp bà cổ kính" 
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-750"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                      <span className="absolute bottom-2.5 left-2.5 bg-red-600/90 text-white text-lg uppercase font-black px-2 py-0.5 rounded shadow-md">
                        Di sản Sử sách 370 năm
                      </span>
                    </div>

                    <h4 className="text-base font-black text-red-700 uppercase tracking-tight border-l-4 border-red-600 pl-3">
                      Lịch sử hình thành
                    </h4>

                    <p className="text-lg md:text-lg text-slate-600 leading-relaxed font-semibold text-justify">
                      Di sản khai hoang oai hùng bắt đầu từ buổi phân định Dinh Bình Khang từ năm 1653 khởi tiến hành mở cõi dưới triều Chúa Nguyễn Phúc Tần, tạo thế đứng vững bền phồn cực ngàn thu.
                    </p>

                    <ul className="space-y-2 text-lg text-slate-500 font-bold border-t border-slate-100 pt-4">
                      <li className="flex items-start gap-2.5 p-2 -mx-2 rounded-xl hover:bg-white hover:shadow-[0_2px_8px_-2px_rgba(0,0,0,0.06)] border border-transparent hover:border-slate-100/80 transition-all duration-300 cursor-pointer group/item hover:text-slate-700 text-justify">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0 transition-all duration-300 group-hover/item:scale-125 group-hover/item:bg-red-600" />
                        <span><strong>Tháp Bà Ponagar uy nghi:</strong> Quần thể gạch nung ngàn năm độc đáo tôn vinh Mẫu Thiên Y A Na tối cao trong tâm linh Việt - Chăm.</span>
                      </li>
                      <li className="flex items-start gap-2.5 p-2 -mx-2 rounded-xl hover:bg-white hover:shadow-[0_2px_8px_-2px_rgba(0,0,0,0.06)] border border-transparent hover:border-slate-100/80 transition-all duration-300 cursor-pointer group/item hover:text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0 transition-all duration-300 group-hover/item:scale-125 group-hover/item:bg-red-600" />
                        <span><strong>Thành cổ Diên Khánh:</strong> Thành lũy lũy quân sự kiên cố thời Tây Sơn - Nguyễn sơ lưu luyến nguyên mẫu lũy đất pháo đài Vauban kiểu Pháp.</span>
                      </li>
                      <li className="flex items-start gap-2.5 p-2 -mx-2 rounded-xl hover:bg-white hover:shadow-[0_2px_8px_-2px_rgba(0,0,0,0.06)] border border-transparent hover:border-slate-100/80 transition-all duration-300 cursor-pointer group/item hover:text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0 transition-all duration-300 group-hover/item:scale-125 group-hover/item:bg-red-600" />
                        <span><strong>Trường Sa trung chinh kiên trinh:</strong> Quá trình bảo vệ pháo đài lấn biển hải phòng dũng oai oanh liệt của quân sĩ biên cương.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Cột 4: Cơ sở hạ tầng */}
                <div className="rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:bg-yellow-500/5 transition-colors duration-300 text-left group bg-slate-50/40">
                  <div className="space-y-6">
                    
                    {/* Image chính xác về nội dung hạ tầng */}
                    <div className="relative aspect-video rounded-xl overflow-hidden shadow-sm border border-slate-100 bg-slate-100">
                      <img 
                        src="https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=1200&auto=format&fit=crop" 
                        referrerPolicy="no-referrer"
                        alt="Cơ sở hạ tầng hiện đại" 
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-750"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                      <span className="absolute bottom-2.5 left-2.5 bg-yellow-600/90 text-white text-lg uppercase font-black px-2 py-0.5 rounded shadow-md">
                        Quy hoạch đồng bộ
                      </span>
                    </div>

                    <h4 className="text-base font-black text-yellow-700 uppercase tracking-tight border-l-4 border-yellow-600 pl-3">
                      Cơ sở hạ tầng
                    </h4>

                    <p className="text-lg md:text-lg text-slate-600 leading-relaxed font-semibold text-justify">
                      Khánh Hòa tập trung nguồn ngân sách dồi dào kiến tạo bức tranh giao vận siêu hạng, kết nối liên kết hành thông đa phương thức giữa miền núi vàng và hải phận giao thương quốc tế.
                    </p>

                    <ul className="space-y-2 text-lg text-slate-500 font-bold border-t border-slate-100 pt-4">
                      <li className="flex items-start gap-2.5 p-2 -mx-2 rounded-xl hover:bg-white hover:shadow-[0_2px_8px_-2px_rgba(0,0,0,0.06)] border border-transparent hover:border-slate-100/80 transition-all duration-300 cursor-pointer group/item hover:text-slate-700 text-justify">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 shrink-0 transition-all duration-300 group-hover/item:scale-125 group-hover/item:bg-yellow-600" />
                        <span><strong>Song lộ cao tốc miền Trung:</strong> Hành thông liên hoàn tuyến Vân Phong - Nha Trang và Nha Trang - Cam Lâm, xúc tiến nhánh lên Lâm Đồng.</span>
                      </li>
                      <li className="flex items-start gap-2.5 p-2 -mx-2 rounded-xl hover:bg-white hover:shadow-[0_2px_8px_-2px_rgba(0,0,0,0.06)] border border-transparent hover:border-slate-100/80 transition-all duration-300 cursor-pointer group/item hover:text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 shrink-0 transition-all duration-300 group-hover/item:scale-125 group-hover/item:bg-yellow-600" />
                        <span><strong>Cánh chim Cam Ranh 4 sao:</strong> Sân bay quốc tế hiện đại đón hành khách thương mại từ hàng chục đô thị lớn Á - Âu.</span>
                      </li>
                      <li className="flex items-start gap-2.5 p-2 -mx-2 rounded-xl hover:bg-white hover:shadow-[0_2px_8px_-2px_rgba(0,0,0,0.06)] border border-transparent hover:border-slate-100/80 transition-all duration-300 cursor-pointer group/item hover:text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 shrink-0 transition-all duration-300 group-hover/item:scale-125 group-hover/item:bg-yellow-600" />
                        <span><strong>Cảng trung chuyển Vân Phong:</strong> Phát huy tiềm năng vịnh nước sâu đón các siêu hạm container trọng tải khổng lồ toàn cầu.</span>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>




            {/* PHẦN 3: CHÍNH SÁCH ĐẶC THÙ ĐANG ĐƯỢC ÁP DỤNG */}
            <div ref={policiesSectionRef} className="space-y-8 scroll-mt-24">
              <AnimatePresence mode="wait">
                {!showAllPoliciesPage ? (
                  <motion.div
                    key="short-list"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    <div className="flex items-center gap-3.5 border-b border-slate-100 pb-4 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-150 text-red-800 flex items-center justify-center shrink-0">
                        <Award size={18} />
                      </div>
                      <div className="text-left py-1">
                        <h4 className="text-2xl md:text-3.5xl font-black tracking-tight text-red-800 uppercase leading-tight">
                          III. Chính sách đặc thù đang được áp dụng
                        </h4>
                        <p className="text-lg sm:text-lg font-bold text-slate-900 uppercase tracking-wider mt-1.5">
                          Nghị quyết số 55/2022/QH15 của Quốc hội về thí điểm một số cơ chế, chính sách đặc thù phát triển tỉnh Khánh Hòa
                        </p>
                      </div>
                    </div>

                    <div className="w-full">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        {SPECIAL_POLICIES.slice(0, 6).map((item, id) => (
                          <div key={id} id={`policy-item-${id}`} className="py-4 flex gap-4 items-center group border border-transparent border-b-slate-100/70 last:border-b-transparent hover:border-red-100 hover:bg-red-50/20 hover:shadow-[0_4px_16px_-2px_rgba(220,38,38,0.06)] px-3.5 rounded-2xl transition-all duration-300 cursor-pointer">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 bg-slate-50 border border-slate-100 shadow-sm relative transition-all duration-300 group-hover:border-red-200 group-hover:shadow-md">
                              <img 
                                src={item.img} 
                                referrerPolicy="no-referrer"
                                alt={item.title} 
                                className="w-full h-full object-cover select-none group-hover:scale-110 transition-transform duration-500"
                              />
                            </div>
                            <div className="flex-1 min-w-0 flex flex-col justify-center space-y-1 text-left">
                              <h6 className="text-lg sm:text-lg font-black text-red-800 flex items-center gap-1.5 font-sans leading-snug uppercase tracking-tight transition-all duration-300 group-hover:text-red-900 group-hover:translate-x-1">
                                <span className="w-1.5 h-3 bg-red-600 rounded-full inline-block shrink-0 transition-all duration-300 group-hover:scale-y-150 group-hover:bg-red-700" />
                                {item.title}
                              </h6>
                              <p className="text-base sm:text-lg text-slate-900 font-semibold leading-relaxed text-justify transition-colors duration-300 group-hover:text-slate-950">
                                {item.txt}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* NÚT CHUYỂN TRANG */}
                      <div className="flex justify-center mt-10 pt-6 border-t border-slate-100/50">
                        <button
                          onClick={() => {
                            setShowAllPoliciesPage(true);
                            setTimeout(() => {
                              policiesSectionRef.current?.scrollIntoView({ behavior: "smooth" });
                            }, 100);
                          }}
                          className="inline-flex items-center gap-2.5 px-7 py-3 bg-gradient-to-r from-red-800 to-red-900 hover:from-red-900 hover:to-black text-white font-black text-lg uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer select-none active:scale-95"
                        >
                          <span>Xem trang liệt kê toàn bộ chính sách khác</span>
                          <ChevronRight size={14} className="animate-pulse" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="full-page"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-8 bg-slate-50/50 p-6 md:p-8 rounded-3xl border border-slate-100"
                  >
                    {/* BACK BUTTON AND TITLE BAR */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/60 pb-6">
                      <button
                        onClick={() => {
                          setShowAllPoliciesPage(false);
                          setPolicySearch("");
                          setSelectedPolicyCat("Tất cả");
                          setTimeout(() => {
                            policiesSectionRef.current?.scrollIntoView({ behavior: "smooth" });
                          }, 100);
                        }}
                        className="inline-flex items-center gap-2 text-lg font-black text-slate-600 hover:text-red-600 transition-colors uppercase tracking-wider cursor-pointer select-none self-start bg-white px-4 py-2 rounded-xl border border-slate-200/60 shadow-sm hover:shadow active:scale-95"
                      >
                        <ArrowLeft size={14} />
                        <span>Quay lại trang giới thiệu</span>
                      </button>

                      <div className="text-left sm:text-right">
                        <span className="inline-block bg-red-100 text-red-800 text-lg font-black uppercase px-2.5 py-1 rounded-md tracking-wider">
                          Nghị quyết 55/2022/QH15
                        </span>
                      </div>
                    </div>

                    <div className="text-left space-y-2">
                      <h3 className="text-2xl md:text-3xl font-black text-red-800 uppercase tracking-tight">
                        Cổng tra cứu Cơ chế & Chính sách Đặc thù Khánh Hòa
                      </h3>
                      <p className="text-lg md:text-lg text-slate-900 font-semibold leading-relaxed">
                        Toàn bộ danh mục các cơ chế đặc thù, ưu đãi đặc quyền tối thượng nhằm thúc đẩy vương ngọc kinh tế vịnh Vân Phong và toàn tỉnh phát triển cất cánh vượt bậc.
                      </p>
                    </div>

                    {/* SEARCH AND FILTER BAR */}
                    <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between bg-white p-4 rounded-2xl border border-slate-200/60 shadow-sm">
                      {/* FILTER TABS */}
                      <div className="flex flex-wrap gap-2">
                        {["Tất cả", "Kinh tế - Đầu tư", "Quy hoạch - Đô thị", "Khoa học - Thủy sản"].map((cat) => (
                          <button
                            key={cat}
                            onClick={() => setSelectedPolicyCat(cat)}
                            className={`px-3.5 py-1.5 rounded-lg text-lg font-black transition-all cursor-pointer select-none ${
                              selectedPolicyCat === cat
                                ? "bg-red-700 text-white shadow-sm"
                                : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-red-700"
                            }`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>

                      {/* SEARCH BOX */}
                      <div className="relative flex-1 max-w-md">
                        <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          value={policySearch}
                          onChange={(e) => setPolicySearch(e.target.value)}
                          placeholder="Tìm kiếm chính sách, cơ chế ưu đãi..."
                          className="w-full bg-slate-50 text-slate-900 text-lg font-bold pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all placeholder:text-slate-400"
                        />
                        {policySearch && (
                          <button
                            onClick={() => setPolicySearch("")}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-lg font-bold"
                          >
                            Xóa
                          </button>
                        )}
                      </div>
                    </div>

                    {/* POLICY LIST GRID */}
                    <div className="grid grid-cols-1 gap-6">
                      {SPECIAL_POLICIES.filter((item) => {
                        const matchesCat = selectedPolicyCat === "Tất cả" || item.category === selectedPolicyCat;
                        const matchesSearch = item.title.toLowerCase().includes(policySearch.toLowerCase()) || 
                                              item.txt.toLowerCase().includes(policySearch.toLowerCase()) ||
                                              item.details.toLowerCase().includes(policySearch.toLowerCase());
                        return matchesCat && matchesSearch;
                      }).length > 0 ? (
                        SPECIAL_POLICIES.filter((item) => {
                          const matchesCat = selectedPolicyCat === "Tất cả" || item.category === selectedPolicyCat;
                          const matchesSearch = item.title.toLowerCase().includes(policySearch.toLowerCase()) || 
                                                item.txt.toLowerCase().includes(policySearch.toLowerCase()) ||
                                                item.details.toLowerCase().includes(policySearch.toLowerCase());
                          return matchesCat && matchesSearch;
                        }).map((item, id) => (
                          <motion.div
                            key={id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: id * 0.05 }}
                            className="bg-white rounded-2xl border border-slate-100 p-5 md:p-6 flex flex-col lg:flex-row gap-6 hover:shadow-[0_12px_32px_-4px_rgba(220,38,38,0.08)] hover:border-red-200 transition-all duration-300 text-left group cursor-pointer"
                          >
                            <div className="w-full lg:w-48 h-32 lg:h-auto rounded-xl overflow-hidden shrink-0 bg-slate-50 border border-slate-100 shadow-sm relative transition-all duration-300 group-hover:border-red-200 group-hover:shadow-md">
                              <img 
                                src={item.img} 
                                referrerPolicy="no-referrer"
                                alt={item.title} 
                                className="w-full h-full object-cover select-none group-hover:scale-110 transition-transform duration-700"
                              />
                            </div>
                            <div className="flex-1 space-y-3">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="text-lg font-black uppercase tracking-wider bg-red-50 text-red-700 px-2.5 py-1 rounded transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
                                  {item.category}
                                </span>
                                <span className="text-lg font-bold text-slate-500">
                                  Cơ chế số {id + 1}
                                </span>
                              </div>
                              <h4 className="text-base sm:text-lg font-black text-slate-900 transition-all duration-300 group-hover:text-red-700 group-hover:translate-x-1">
                                {item.title}
                              </h4>
                              <p className="text-lg sm:text-lg text-slate-900 leading-relaxed font-semibold transition-colors duration-300 group-hover:text-slate-950">
                                {item.txt}
                              </p>
                              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100/80 transition-all duration-300 group-hover:bg-red-50/10 group-hover:border-red-100/40">
                                <p className="text-lg sm:text-lg text-slate-900 leading-relaxed font-semibold italic text-justify transition-colors duration-300 group-hover:text-slate-950">
                                  <strong>Chi tiết thực hiện:</strong> {item.details}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        ))
                      ) : (
                        <div className="text-center py-12 bg-white rounded-2xl border border-slate-100 space-y-2">
                          <p className="text-slate-400 text-lg font-bold">Không tìm thấy chính sách đặc thù phù hợp</p>
                          <p className="text-slate-300 text-lg">Vui lòng thử từ khóa khác hoặc thay đổi bộ lọc</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

      </div>
    </div>
  </section>
</div>
  );
}

/* =========================================================================
   2. GOV COMPONENT (CHÍNH QUYỀN)
   ========================================================================= */
const DEF_DOCS = [
  {
    num: "105/2026/QĐ-UBND",
    type: "Quyết định",
    title: "Về việc ban hành Đề án số hóa chính quyền điện tử tỉnh Khánh Hòa nhằm thúc đẩy CCHC",
    signer: "Nguyễn Đình Hải - Chủ tịch UBND tỉnh",
    date: "12/05/2026",
    content: "Văn bản thi hành quy định bắt buộc toàn bộ Sở ban ngành liên thông hồ sơ một cửa trực tuyến, tinh giảm quy trình hồ sơ của người dân không quá 48 tiếng làm việc kể từ lúc tiếp nhận."
  },
  {
    num: "43/2026/NQ-HĐND",
    type: "Nghị quyết",
    title: "Thông qua nguồn ngân sách hỗ trợ vay vốn khởi nghiệp của thanh niên năm 2026",
    signer: "Nghiêm Xuân Thành - Bí thư Tỉnh ủy",
    date: "08/05/2026",
    content: "Nghị quyết cung cấp gói hỗ trợ 100 tỷ VNĐ từ ngân sách phát triển của tỉnh, ủy thác qua Ngân hàng Chính sách xã hội để thanh niên Khánh Hòa khởi nghiệp ưu đãi lãi suất tài khóa 0.8%."
  },
  {
    num: "1250/CV-Sở GTVT",
    type: "Công văn",
    title: "Hướng dẫn thực hiện thí điểm phân làn giao thông thông minh trực tiếp tuyến Trần Phú Nha Trang",
    signer: "Phạm Văn Lương - Giám đốc Sở GTVT",
    date: "04/05/2026",
    content: "Công bốc quy chế dẹp lấn chiếm lòng lề đường, lập bãi đỗ đỗ thông minh phục vụ chuỗi Festival du lịch hè 2026, áp dụng bắt đầu từ 01/06/2026 trên trục Trần Phú và Phạm Văn Đồng."
  },
  {
    num: "99/2026/QĐ-UBND",
    type: "Quyết định",
    title: "Quy định biện pháp bảo vệ và phát triển rừng đặc dụng quốc gia khu dự trữ Hòn Bà và Khánh Lê",
    signer: "Lê Quốc Huy - Phó Chủ tịch UBND tỉnh",
    date: "28/04/2026",
    content: "Thiết lập hành lang bảo vệ lâm nghiệp cốt thép, cấm săn bắn khai thác thực vật rừng tự nhiên; chi ngân sách đầu tư trạm vệ vệ tinh báo cháy rừng tự động AI."
  }
];

function GovPortal() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDoc, setSelectedDoc] = useState<typeof DEF_DOCS[0] | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const filteredDocs = DEF_DOCS.filter(doc => 
    doc.num.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 mb-16 text-left">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-8 right-8 z-[10000] bg-gradient-to-r from-red-600 to-red-700 text-white font-extrabold text-lg py-4 px-6 rounded-2xl shadow-2xl flex items-center gap-3 border border-red-500/20 max-w-sm"
          >
            <CheckCircle2 size={18} className="text-yellow-300 shrink-0" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Leadership Profile Row */}
      <div className="bg-white p-8 border border-slate-100 rounded-3xl shadow-sm">
        <h3 className="text-xl font-black text-red-800 mb-6 flex items-center gap-3">
          <Users className="text-red-600" /> Hệ thống cơ cấu Thường trực lãnh đạo tỉnh
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              role: "Bí thư Tỉnh ủy",
              name: "Đ/c Nghiêm Xuân Thành",
              desc: "Ủy viên BCH Trung ương Đảng, Bí thư Đảng bộ tỉnh Khánh Hòa.",
            },
            {
              role: "Chủ tịch UBND Tỉnh",
              name: "Đ/c Trần Phong",
              desc: "Ủy viên BCH Trung ương Đảng, Phó Bí thư Tỉnh ủy, Chủ tịch UBND tỉnh Khánh Hòa.",
            },
            {
              role: "Phó Chủ tịch (Kinh tế)",
              name: "Đ/c Lê Quốc Huy",
              desc: "Phối hợp giám sát đầu tư tài chính, xúc tiến công thương nghiệp sản xuất.",
            },
            {
              role: "Phó Chủ tịch (Văn xã)",
              name: "Đ/c Trần Minh Thảo",
              desc: "Phụ trách lĩnh vực văn hóa xã hội, giáo dục, y tế và bảo tồn tài nguyên.",
            },
          ].map((lead, idx) => (
            <div
              key={idx}
              className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <span className="text-lg font-black text-red-600 uppercase tracking-widest block mb-2 bg-red-50 py-1 px-2.5 rounded-md w-max">
                  {lead.role}
                </span>
                <h4 className="text-base font-extrabold text-red-800 mb-2">
                  {lead.name}
                </h4>
                <p className="text-lg text-slate-900 leading-relaxed font-semibold">
                  {lead.desc}
                </p>
              </div>
              <span className="text-lg text-red-700 hover:underline cursor-pointer font-bold mt-4 block">
                Xem quá trình công tác →
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Docs search engine */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        <div className="lg:col-span-1 bg-red-800 text-white p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden shadow-lg">
          <div className="absolute -bottom-10 -right-10 opacity-5">
            <Building size={200} />
          </div>
          <div>
            <h4 className="text-yellow-400 font-extrabold text-lg mb-4">
              Cổng tra cứu văn bản Pháp quy
            </h4>
            <p className="text-lg text-red-50 leading-relaxed font-semibold mb-6">
              Hệ thống tìm kiếm phục vụ công vụ của người dân và công chức toàn
              tỉnh. Phân cấp dữ liệu đầy đủ từ Tỉnh ủy, HĐND đến UBND tỉnh các
              thời kỳ.
            </p>
            <div className="space-y-3.5">
              <div className="bg-white/10 p-3.5 rounded-xl border border-white/10 flex items-center justify-between text-lg font-bold">
                <span>Tổng văn bản lưu trữ</span>
                <span className="text-yellow-400">12,450 văn bản</span>
              </div>
              <div className="bg-white/10 p-3.5 rounded-xl border border-white/10 flex items-center justify-between text-lg font-bold">
                <span>Số hóa mới trong ngày</span>
                <span className="text-yellow-400">+5 văn bản mới</span>
              </div>
            </div>
          </div>
          <p className="text-lg text-red-200 font-bold mt-8 border-t border-white/10 pt-4">
            Cơ quan chủ quản: Văn phòng Ủy ban Nhân dân Tỉnh Khánh Hòa
          </p>
        </div>

        <div className="lg:col-span-2 bg-white p-8 border border-slate-100 rounded-3xl shadow-sm flex flex-col">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
            <h4 className="text-lg font-black text-red-800">
              Danh sách văn bản mới ban hành
            </h4>
            {/* Search inputs */}
            <div className="relative">
              <input
                type="text"
                placeholder="Số ký hiệu, từ khóa..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-64 bg-slate-50 border border-slate-200 py-2.5 pl-9 pr-4 rounded-xl text-lg font-bold text-slate-700 placeholder-slate-400 focus:outline-none focus:border-red-500 transition-colors"
              />
              <Search
                size={14}
                className="absolute left-3 top-3.5 text-slate-400"
              />
            </div>
          </div>

          <div className="space-y-3 flex-1 overflow-y-auto max-h-[300px] pr-2">
            {filteredDocs.length > 0 ? (
              filteredDocs.map((doc, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedDoc(doc)}
                  className="p-4 bg-slate-50 rounded-2xl border border-slate-200/50 hover:border-red-500 hover:bg-red-50/10 cursor-pointer transition-all flex flex-col md:flex-row items-start justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-black text-white bg-red-800 px-2 py-0.5 rounded">
                        {doc.type}
                      </span>
                      <span className="text-lg font-extrabold text-red-600">
                        {doc.num}
                      </span>
                    </div>
                    <p className="text-lg font-bold text-black line-clamp-1">
                      {doc.title}
                    </p>
                    <p className="text-lg text-black font-medium">
                      Người ký: {doc.signer}
                    </p>
                  </div>
                  <span className="text-lg text-black font-bold whitespace-nowrap grow-0">
                    {doc.date}
                  </span>
                </div>
              ))
            ) : (
              <div className="py-12 text-center text-slate-400 text-lg font-bold">
                Không tìm thấy văn bản phù hợp.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* PDF Modal Reader simulation */}
      {selectedDoc && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-2xl text-left flex flex-col"
          >
            <div className="bg-red-800 text-white py-4 px-6 flex items-center justify-between">
              <span className="text-lg font-black flex items-center gap-2">
                <FileText size={18} className="text-yellow-400" /> Bản xem văn
                bản PDF hành chính
              </span>
              <button
                onClick={() => setSelectedDoc(null)}
                className="p-1 hover:bg-white/10 rounded-full transition-colors text-white"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-8 md:p-12 space-y-6 overflow-y-auto max-h-[500px]">
              {/* National Emblem design */}
              <div className="text-center font-bold text-lg uppercase tracking-tight text-slate-500">
                CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
                <br />
                Độc lập - Tự do - Hạnh phúc
                <div className="w-24 h-[1px] bg-slate-300 mx-auto mt-2" />
              </div>
              <div className="flex justify-between text-lg font-extrabold text-slate-400 uppercase">
                <span>UBND TỈNH KHÁNH HÒA</span>
                <span>Số: {selectedDoc.num}</span>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-black text-[#961C1C] text-center leading-snug">
                  {selectedDoc.type.toUpperCase()}
                </h4>
                <p className="text-lg font-black text-slate-800 text-center uppercase leading-snug max-w-md mx-auto">
                  {selectedDoc.title}
                </p>
                <div className="border-t border-dashed border-slate-200 pt-4" />
                <h5 className="text-lg font-black uppercase text-slate-400 tracking-wider">
                  Nội dung điều hành:
                </h5>
                <p className="text-slate-700 text-lg leading-relaxed text-justify font-medium indent-8">
                  {selectedDoc.content}
                </p>
              </div>
              <div className="border-t border-slate-100 pt-6 flex justify-between items-end">
                <div className="text-lg text-black font-bold">
                  Nơi nhận: Văn phòng tỉnh, Sở ngành can thiệp.
                </div>
                <div className="text-center">
                  <span className="text-lg font-extrabold text-red-800 block">
                    TM. ỦY BAN NHÂN DÂN
                  </span>
                  <span className="text-lg font-black text-red-900 block mt-8">
                    {selectedDoc.signer.split(" - ")[0]}
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 py-4 px-6 border-t border-slate-100 flex justify-end gap-3 rounded-b-3xl">
              <button
                onClick={() => setSelectedDoc(null)}
                className="bg-slate-200 text-black px-5 py-2 rounded-xl text-lg font-bold hover:bg-slate-300"
              >
                Đóng
              </button>
              <button
                onClick={() => {
                  showToast("Hành động: Tải về tệp PDF của Khánh Hòa đã được xử lý và mô phỏng thành công!");
                  setSelectedDoc(null);
                }}
                className="bg-red-800 text-white px-5 py-2 rounded-xl text-lg font-bold hover:bg-red-700 shadow-lg"
              >
                Tải xuống tệp gốc PDF
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

/* =========================================================================
   3. CITIZEN COMPONENT (CÔNG DÂN)
   ========================================================================= */
interface CitationType {
  id: number;
  name: string;
  field: string;
  desc: string;
  date: string;
  status: "Đã tiếp nhận" | "Đang xác minh" | "Đang xử lý" | "Hoàn thành";
}

function CitizenPortal({ onMapClick }: { onMapClick?: () => void }) {
  const [feedbacks, setFeedbacks] = useState<CitationType[]>([
    {
      id: 1,
      name: "Trần Anh Tú",
      field: "Giao thông",
      desc: "Đèn đường giao lộ Võ Nguyên Giáp bị hỏng gây mất an toàn giao thông cho người dân đi lại ban đêm.",
      date: "19/05/2026",
      status: "Đang xử lý",
    },
    {
      id: 2,
      name: "Nguyễn Thị Hoa",
      field: "Môi trường",
      desc: "Rác thải sinh hoạt ùn ứ tại bãi trung chuyển tạm thời phường Vĩnh Hòa chưa được dọn sạch dứt điểm.",
      date: "17/05/2026",
      status: "Hoàn thành",
    },
  ]);

  const [formName, setFormName] = useState("");
  const [formField, setFormField] = useState("Giao thông");
  const [formDesc, setFormDesc] = useState("");
  const [fileDetails, setFileDetails] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);

  const [newsIndex, setNewsIndex] = useState(0);

  const LEADERS_NEWS = [
    {
      title: "Chủ tịch UBND tỉnh chủ trì phiên họp rà soát quy hoạch phân khu biển",
      summary: "UBND tỉnh Khánh Hòa họp chỉ đạo rà soát quy hoạch chi tiết các phân khu đô thị biển tại Nha Trang và Cam Lâm, hướng tới phát triển đô thị thông minh và bảo tồn thiên nhiên biển.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1400&auto=format&fit=crop",
      date: "19/05/2026"
    },
    {
      title: "Phó Chủ tịch thường trực bàn giải pháp tháo gỡ khó khăn về cát san lấp",
      summary: "Chỉ đạo các đơn vị khẩn trương tháo gỡ khó khăn về nguồn vật liệu xây dựng, đẩy nhanh tiến độ thi công hạ tầng giao thông trọng điểm.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1400&auto=format&fit=crop",
      date: "18/05/2026"
    },
    {
      title: "Đoàn công tác Tỉnh ủy kiểm tra nâng cao hiệu quả cải cách hành chính",
      summary: "Đánh giá tích cực mô hình một cửa liên thông hiện đại, tăng cường nâng cấp hạ tầng số phục vụ thủ tục công trực tuyến cho công dân.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1400&auto=format&fit=crop",
      date: "18/05/2026"
    },
    {
      title: "Khánh Hòa sẵn sàng chuẩn bị cho sự kiện Festival Biển Nha Trang",
      summary: "Hoàn thiện các phương án chi tiết về phân luồng giao thông, chỉnh trang đô thị, đảm bảo mĩ quan phục vụ chuỗi hoạt động nghệ thuật văn hóa đặc sắc.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop",
      date: "17/05/2026"
    },
    {
      title: "Hội nghị Ban Chấp hành Đảng bộ tỉnh Khánh Hòa lần thứ 18 khóa XVIII",
      summary: "Tập trung thảo luận, cho ý kiến về báo cáo tình hình thực hiện nhiệm vụ phát triển kinh tế - xã hội, đầu tư công và công tác nhân sự, xây dựng Đảng.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1400&auto=format&fit=crop",
      date: "16/05/2026"
    },
    {
      title: "Triển khai chương trình chuyển đổi số toàn diện cấp cơ sở",
      summary: "Đẩy mạnh tập huấn kỹ năng số cho cán bộ, hỗ trợ người dân cài đặt và sử dụng các dịch vụ công trực tuyến, thúc đẩy chuyển đổi số tại các xã, phường, thị trấn.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1400&auto=format&fit=crop",
      date: "15/05/2026"
    },
    {
      title: "Khánh Hòa tăng cường bảo vệ môi trường vịnh Nha Trang",
      summary: "Triển khai chiến dịch dọn dẹp rác thải nhựa đại dương, phối hợp với các tổ chức bảo tồn khôi phục rạn san hô tại khu bảo tồn biển Hòn Mun.",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1400&auto=format&fit=crop",
      date: "14/05/2026"
    },
    {
      title: "Phát triển du lịch cộng đồng gắn liền với bảo tồn văn hóa bản địa",
      summary: "Hỗ trợ người dân xây dựng mô hình homestay, giới thiệu ẩm thực truyền thống và các nghề thủ công mỹ nghệ đặc trưng của đồng bào dân tộc thiểu số.",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1400&auto=format&fit=crop",
      date: "12/05/2026"
    }
  ];

  const showToast = (msg: string, type: "success" | "error") => {
    setToast({ msg, type });
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  // Load from local storage
  useEffect(() => {
    const saved = localStorage.getItem("kh_feedbacks");
    if (saved) {
      try {
        setFeedbacks(JSON.parse(saved));
      } catch (e) {}
    }
  }, []);

  const saveToStorage = (updatedList: CitationType[]) => {
    setFeedbacks(updatedList);
    localStorage.setItem("kh_feedbacks", JSON.stringify(updatedList));
  };

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formDesc.trim()) {
      showToast("Vui lòng nhập đầy đủ Họ tên và Nội dung ý kiến của bạn.", "error");
      return;
    }

    const newTicket: CitationType = {
      id: Date.now(),
      name: formName,
      field: formField,
      desc: formDesc,
      date: new Date().toLocaleDateString("vi-VN"),
      status: "Đã tiếp nhận",
    };

    const finalTickets = [newTicket, ...feedbacks];
    saveToStorage(finalTickets);
    setFormName("");
    setFormDesc("");
    setFileDetails(null);
    showToast("Gửi phản ánh kiến nghị thành công! Cơ quan chức năng sẽ kiểm tra và liên hệ xử lý trong thời gian sớm nhất.", "success");
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFileDetails(e.dataTransfer.files[0].name);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileDetails(e.target.files[0].name);
    }
  };

  return (
    <div className="w-full flex flex-col citizen-portal-root">
      {/* Toast Notification Container */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className={`fixed bottom-8 right-8 z-[10000] text-white font-extrabold text-lg py-4 px-6 rounded-2xl shadow-2xl flex items-center gap-3 border max-w-sm ${
              toast.type === "success" 
                ? "bg-gradient-to-r from-red-600 to-red-700 border-red-500/20" 
                : "bg-gradient-to-r from-black to-slate-900 border-white/10"
            }`}
          >
            {toast.type === "success" ? (
              <CheckCircle2 size={18} className="text-yellow-300 shrink-0" />
            ) : (
              <X size={18} className="text-red-300 shrink-0" />
            )}
            <span>{toast.msg}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. HOẠT ĐỘNG LÃNH ĐẠO TỈNH - KHUNG TRÀN MÀN HÌNH CHUYÊN NGHIỆP */}
      <section className="w-full relative overflow-hidden bg-slate-900 shadow-xl">
        {/* Active spotlight background image */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={newsIndex}
              src={LEADERS_NEWS[newsIndex].image}
              referrerPolicy="no-referrer"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="w-full h-full object-cover object-center"
              alt="Spotlight Background"
            />
          </AnimatePresence>
          {/* Glass overlays */}
          <div className="absolute inset-0 bg-black/10 backdrop-blur-md" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16 relative z-10 text-left">
          {/* Header / Title */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div className="flex items-center gap-3.5 text-left">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-blue-500/20">
                <Megaphone size={22} className="stroke-[1.8]" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight uppercase leading-none text-left">
                Tin nổi bật dành cho công dân
              </h3>
            </div>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); showToast("Tính năng liên kết xem tất cả hoạt động lãnh đạo đang được cập nhật.", "success"); }}
              className="text-lg font-semibold text-white/60 hover:text-yellow-400 flex items-center gap-1 transition-colors"
            >
              Xem tất cả <ChevronRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
            {/* Left Column: Big Spotlight News Info */}
            <div className="lg:col-span-7 xl:col-span-7 pr-0 lg:pr-8 text-left flex flex-col h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={newsIndex}
                  initial={{ opacity: 0, scale: 0.98, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full flex flex-col"
                >
                  <div className="w-full h-full flex flex-col overflow-hidden rounded-3xl shadow-2xl group/spotlight select-none cursor-pointer transition-all duration-500 bg-[#1E3A8A]">
                    {/* High Quality Foreground Image with 4:3 aspect ratio */}
                    <div className="w-full aspect-[4/3] overflow-hidden relative shrink-0">
                      <img
                        src={LEADERS_NEWS[newsIndex].image}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center group-hover/spotlight:scale-105 transition-transform duration-700"
                        alt={LEADERS_NEWS[newsIndex].title}
                      />
                    </div>

                    {/* Content Section below, sitting on a blue background */}
                    <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow text-left bg-[#1E3A8A]">
                      <div className="flex justify-between items-center mb-3">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-500 text-white text-base md:text-lg font-black rounded-md tracking-wider uppercase shadow-md pointer-events-none self-start">
                          Tiêu điểm
                        </span>
                        <span className="flex items-center gap-1.5 text-white text-base md:text-lg font-bold bg-black/25 px-3 py-1 rounded-full border border-white/10">
                          {LEADERS_NEWS[newsIndex].date}
                        </span>
                      </div>

                      <h4 className="text-xl md:text-2xl font-black text-white leading-snug tracking-tight group-hover/spotlight:text-yellow-300 transition-colors">
                        {LEADERS_NEWS[newsIndex].title}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: Premium Sidebar List overlay matching exact left column height */}
            <div className="lg:col-span-5 xl:col-span-5 relative min-h-[380px] lg:min-h-0">
              <div className="lg:absolute lg:inset-0 w-full h-full flex flex-col bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl border border-white/40 p-2 sm:p-3 overflow-hidden">
                <div className="w-full flex-1 overflow-y-auto pr-2 flex flex-col [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-white/10 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/50 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/80 transition-colors">
                  {LEADERS_NEWS.map((item, idx) => {
                    const isActive = newsIndex === idx;
                    return (
                      <motion.div
                        key={idx}
                        onClick={() => setNewsIndex(idx)}
                        className={`flex shrink-0 gap-4 py-4 px-3 border-b border-white/30 transition-all duration-300 cursor-pointer text-left group/item relative overflow-hidden last:border-b-0 ${
                          isActive
                            ? "bg-transparent"
                            : "bg-transparent hover:bg-white/10"
                        }`}
                        whileHover={{ scale: 1.01, y: -1 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        <div className="w-24 h-16 md:w-28 md:h-20 shrink-0 rounded-xl overflow-hidden relative shadow-sm bg-white/20">
                          <img
                            src={item.image}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500"
                            alt={item.title}
                          />
                          {isActive && (
                            <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center">
                              <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                          <h5
                            className={`text-base md:text-lg font-bold leading-snug line-clamp-2 transition-colors duration-200 ${
                              isActive ? "text-blue-900 drop-shadow-sm" : "text-black group-hover/item:text-blue-800"
                            }`}
                          >
                            {item.title}
                          </h5>
                          <div className="flex items-center justify-between text-sm text-black/80 font-medium mt-1">
                            <span className="flex items-center gap-1.5">
                              <Calendar size={14} /> {item.date}
                            </span>
                            {isActive && (
                              <span className="text-blue-700 font-black tracking-wide drop-shadow-sm">
                                Đang xem •
                              </span>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REST OF CITIZEN PORTAL IN A BOUNDED CONSTRAINED WIDTH */}
      <div className="mx-auto max-w-7xl px-4 w-full mt-2 md:mt-3 flex flex-col gap-10">
        {/* 2. THÔNG TIN ĐA PHƯƠNG TIỆN */}
        <MultimediaSection />

        {/* CHUYÊN MỤC THÔNG TIN TRỌNG ĐIỂM */}
        <KeyInformationCategories />

        {/* LỊCH TIẾP CÔNG DÂN */}
        <CitizenReceptionSchedule />

        {/* HỆ THỐNG VĂN BẢN */}
        <DocumentSystemPortal />
      </div>

      {/* FULL WIDTH BLOCK FOR PROPAGANDA & UTILITIES PORTAL */}
      <div className="w-full py-14 my-10">
        <div className="mx-auto max-w-7xl px-4 w-full">
          <PropagandaPortal showUtilitiesSidebar={false} />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 w-full mt-10 flex flex-col gap-10">
        {/* HỆ THỐNG VĂN BẢN QPPL */}
        <LegalDocumentsPortal />

        <SharedBottomSections onMapClick={onMapClick} hideMap={true} />
      </div>
</div>
  );
}

/* =========================================================================
   4. BUSINESS COMPONENT (DOANH NGHIỆP)
   ========================================================================= */
function BusinessPortal({ onMapClick }: { onMapClick?: () => void }) {
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);

  const [newsIndex, setNewsIndex] = useState(0);

  const LEADERS_NEWS = [
    {
      title: "Chủ tịch UBND tỉnh chủ trì phiên họp rà soát quy hoạch phân khu biển",
      summary: "UBND tỉnh Khánh Hòa họp chỉ đạo rà soát quy hoạch chi tiết các phân khu đô thị biển tại Nha Trang và Cam Lâm, hướng tới phát triển đô thị thông minh và bảo tồn thiên nhiên biển.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1400&auto=format&fit=crop",
      date: "19/05/2026"
    },
    {
      title: "Phó Chủ tịch thường trực bàn giải pháp tháo gỡ khó khăn về cát san lấp",
      summary: "Chỉ đạo các đơn vị khẩn trương tháo gỡ khó khăn về nguồn vật liệu xây dựng, đẩy nhanh tiến độ thi công hạ tầng giao thông trọng điểm.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1400&auto=format&fit=crop",
      date: "18/05/2026"
    },
    {
      title: "Đoàn công tác Tỉnh ủy kiểm tra nâng cao hiệu quả cải cách hành chính",
      summary: "Đánh giá tích cực mô hình một cửa liên thông hiện đại, tăng cường nâng cấp hạ tầng số phục vụ thủ tục công trực tuyến cho công dân.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1400&auto=format&fit=crop",
      date: "18/05/2026"
    },
    {
      title: "Khánh Hòa sẵn sàng chuẩn bị cho sự kiện Festival Biển Nha Trang",
      summary: "Hoàn thiện các phương án chi tiết về phân luồng giao thông, chỉnh trang đô thị, đảm bảo mĩ quan phục vụ chuỗi hoạt động nghệ thuật văn hóa đặc sắc.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop",
      date: "17/05/2026"
    },
    {
      title: "Hội nghị Ban Chấp hành Đảng bộ tỉnh Khánh Hòa lần thứ 18 khóa XVIII",
      summary: "Tập trung thảo luận, cho ý kiến về báo cáo tình hình thực hiện nhiệm vụ phát triển kinh tế - xã hội, đầu tư công và công tác nhân sự, xây dựng Đảng.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1400&auto=format&fit=crop",
      date: "16/05/2026"
    }
  ];

  const showToast = (msg: string, type: "success" | "error") => {
    setToast({ msg, type });
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  return (
    <div className="w-full flex flex-col">
      {/* Toast Notification Container */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className={`fixed bottom-8 right-8 z-[10000] text-white font-extrabold text-lg py-4 px-6 rounded-2xl shadow-2xl flex items-center gap-3 border max-w-sm ${
              toast.type === "success" 
                ? "bg-gradient-to-r from-red-600 to-red-700 border-red-500/20" 
                : "bg-gradient-to-r from-black to-slate-900 border-white/10"
            }`}
          >
            {toast.type === "success" ? (
              <CheckCircle2 size={18} className="text-yellow-300 shrink-0" />
            ) : (
              <X size={18} className="text-red-300 shrink-0" />
            )}
            <span>{toast.msg}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. HOẠT ĐỘNG CHÍNH QUYỀN ĐỒNG HÀNH CÙNG DOANH NGHIỆP - KHUNG TRÀN MÀN HÌNH CHUYÊN NGHIỆP */}
      <section className="w-full relative overflow-hidden bg-slate-900 shadow-xl mb-10">
        {/* Active spotlight background image */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={newsIndex}
              src={LEADERS_NEWS[newsIndex].image}
              referrerPolicy="no-referrer"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="w-full h-full object-cover object-center"
              alt="Spotlight Background"
            />
          </AnimatePresence>
          {/* Glass overlays */}
          <div className="absolute inset-0 bg-black/10 backdrop-blur-md" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16 relative z-10 text-left">
          {/* Header / Title */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <h3 className="text-xl md:text-2xl font-black text-white tracking-tight uppercase flex items-center gap-2.5">
              <Briefcase size={22} className="text-yellow-400 animate-pulse" /> Tin nổi bật đồng hành cùng doanh nghiệp
            </h3>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); showToast("Tính năng liên kết xem tất cả hoạt động đồng hành doanh nghiệp đang được cập nhật.", "success"); }}
              className="text-lg font-semibold text-white/60 hover:text-yellow-400 flex items-center gap-1 transition-colors"
            >
              Xem tất cả <ChevronRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch lg:h-[640px] pt-2">
            {/* Left Column: Big Spotlight News Info */}
            <div className="lg:col-span-7 xl:col-span-7 pr-0 lg:pr-8 text-left h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={newsIndex}
                  initial={{ opacity: 0, scale: 0.98, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="h-full"
                >
                  <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-3xl shadow-2xl group/spotlight select-none cursor-pointer transition-all duration-500">
                    <img
                      src={LEADERS_NEWS[newsIndex].image}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover/spotlight:scale-105 transition-transform duration-700"
                      alt={LEADERS_NEWS[newsIndex].title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent z-10" />
                    <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end z-20 text-left">
                      <div className="flex justify-between items-center mb-3">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-500 text-white text-lg font-black rounded-md tracking-wider uppercase shadow-md pointer-events-none self-start">
                          Tiêu điểm
                        </span>
                        <span className="flex items-center gap-1.5 text-white text-lg font-bold drop-shadow bg-black/35 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
                          {LEADERS_NEWS[newsIndex].date}
                        </span>
                      </div>
                      <h4 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white leading-tight tracking-tight drop-shadow-xl line-clamp-3 group-hover/spotlight:text-sky-400 transition-colors">
                        {LEADERS_NEWS[newsIndex].title}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: Premium Sidebar List overlay */}
            <div className="lg:col-span-5 xl:col-span-5 relative min-h-[380px] lg:min-h-0">
              <div className="lg:absolute lg:inset-0 w-full h-full flex flex-col bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl border border-white/40 p-2 sm:p-3 overflow-hidden">
                <div className="w-full flex-1 overflow-y-auto pr-2 flex flex-col [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-white/10 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/50 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/80 transition-colors">
                  {LEADERS_NEWS.map((item, idx) => {
                    const isActive = newsIndex === idx;
                    return (
                      <motion.div
                        key={idx}
                        onClick={() => setNewsIndex(idx)}
                        className={`flex shrink-0 gap-4 py-4 px-3 border-b border-white/30 transition-all duration-300 cursor-pointer text-left group/item relative overflow-hidden last:border-b-0 ${
                          isActive
                            ? "bg-transparent"
                            : "bg-transparent hover:bg-white/10"
                        }`}
                        whileHover={{ scale: 1.01, y: -1 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        <div className="w-24 h-16 md:w-28 md:h-20 shrink-0 rounded-xl overflow-hidden relative shadow-sm bg-white/20">
                          <img
                            src={item.image}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500"
                            alt={item.title}
                          />
                          {isActive && (
                            <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center">
                              <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                          <h5
                            className={`text-base md:text-lg font-bold leading-snug line-clamp-2 transition-colors duration-200 ${
                              isActive ? "text-blue-900 drop-shadow-sm" : "text-black group-hover/item:text-blue-800"
                            }`}
                          >
                            {item.title}
                          </h5>
                          <div className="flex items-center justify-between text-sm text-black/80 font-medium mt-1">
                            <span className="flex items-center gap-1.5">
                              <Calendar size={14} /> {item.date}
                            </span>
                            {isActive && (
                              <span className="text-blue-700 font-black tracking-wide drop-shadow-sm">
                                Đang xem •
                              </span>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REST OF PORTAL IN A BOUNDED CONSTRAINED WIDTH */}
      <div className="mx-auto max-w-7xl px-4 w-full mt-2 md:mt-3 flex flex-col gap-12 text-left">
        {/* 2. THÔNG TIN ĐA PHƯƠNG TIỆN */}
        <MultimediaSection />

        {/* CHUYÊN MỤC THÔNG TIN TRỌNG ĐIỂM */}
        <KeyInformationCategories />

        {/* HỆ THỐNG VĂN BẢN */}
        <DocumentSystemPortal />
      </div>

      {/* FULL WIDTH BLOCK FOR PROPAGANDA & UTILITIES PORTAL */}
      <div className="w-full py-14 my-12">
        <div className="mx-auto max-w-7xl px-4 w-full">
          <PropagandaPortal showUtilitiesSidebar={false} />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 w-full mt-12 flex flex-col gap-12 text-left">
        {/* 3. CƠ SỞ DỮ LIỆU VĂN BẢN PHÁP LUẬT */}
        <LegalDocumentsPortal />

        {/* 4. CHIA SẺ KÊNH HỖ TRỢ/QUẢNG CÁO CHUNG */}
        <SharedBottomSections onMapClick={onMapClick} hideMap={true} />
      </div>
    </div>
  );
}
