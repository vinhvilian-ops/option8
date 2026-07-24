import React from "react";
import SharedBottomSections from "./components/SharedBottomSections";
import WeeklySchedule from "./components/WeeklySchedule";
import NewsDetailPage from "./components/NewsDetailPage";
import LeaderDetailPage from "./components/LeaderDetailPage";
import trongDongBg from "./assets/images/trong_dong.png";
import tranHoaNamImg from "./assets/images/tran_hoa_nam.png";
import leHuyenImg from "./assets/images/le_huyen.png";
import nguyenThanhHaImg from "./assets/images/nguyen_thanh_ha.png";
import nguyenVietHungImg from "./assets/images/nguyen_viet_hung.png";
import nguyenLongBienImg from "./assets/images/nguyen_long_bien.png";
import trinhMinhHoangImg from "./assets/images/trinh_minh_hoang.png";
import namPctImg from "./assets/images/nam pct.png";
import nuPctImg from "./assets/images/nu PCT.png";
import quocHuy from "./assets/images/quochuyvn.png";
import patternBg from "./assets/images/pattern.png";
import logoKH from "./assets/images/logoKH.webp";
import ubndtinh from "./assets/images/ubndtinh.jpg";
const headerBanner = ubndtinh;
const khanhHoaMap = "/ban-do-hanh-chinh-tinh-khanh-hoa-kho-lon.jpg";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import CategoryPortal from "./components/CategoryPortal";
import MultimediaSection from "./components/MultimediaSection";
import PromoBanners from "./components/PromoBanners";
import SocioEconomicDashboard from "./components/SocioEconomicDashboard";
import LegalDocumentsPortal from "./components/LegalDocumentsPortal";
import DocumentSystemPortal from "./components/DocumentSystemPortal";
import {
  Search,
  ChevronRight,
  ChevronLeft,
  Download,
  QrCode,
  Scale,
  Calendar,
  Facebook,
  Twitter,
  Youtube,
  Globe,
  Bell,
  Play,
  Mail,
  FileText,
  MessageSquare,
  ShieldCheck,
  Users,
  Map,
  Bot,
  X,
  Send,
  User,
  Info,
  Briefcase,
  ImageIcon,
  FileBarChart,
  Newspaper,
  Mic,
  Headphones,
  Database,
  Gavel,
  LayoutGrid,
  Megaphone,
  UserCheck,
  Settings,
  HelpCircle,
  CheckCircle2, Clock,
  Activity,
  CloudRain,
  TrendingUp,
  BarChart3,
  ExternalLink,
  ChevronDown,
  Phone,
  DollarSign,
  Coins,
  Landmark,
  Award,
  Cpu,
  Percent,
  Trophy,
  ShieldAlert,
  Building2,
  UserPlus,
  MapPin,
  ZapOff,
  HeartHandshake,
  Tag,
  CloudSun,
  PhoneCall,
  Plus,
  Minus,
  BookOpen,
  Printer,
  Share2,
  ArrowUp,
  ArrowRight,
  Scroll,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Definitions for dynamic categories
const GIOI_THIEU_CAT = {
  id: "gioi-thieu",
  name: "Giới thiệu",
  banner:
    "https://images.unsplash.com/photo-1549488497-2367098f98a2?q=80&w=2000&auto=format&fit=crop",
  title: "Khám phá Vẻ đẹp & Tiềm năng Khánh Hòa",
  subtitle:
    "Vùng đất của những danh lam thắng cảnh và cơ hội đầu tư bền vững",
};

const CATEGORIES = [
  {
    id: "trang-chu",
    name: "Trang chủ",
    banner:
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?q=80&w=2000&auto=format&fit=crop",
    title: "Cổng Thông Tin Điện Tử Tỉnh Khánh Hòa",
    subtitle: "Minh bạch - Hiện đại - Phục vụ người dân và doanh nghiệp",
  },
  {
    id: "chinh-quyen",
    name: "Chính quyền",
    banner:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
    title: "Hệ thống Chính quyền Điện tử",
    subtitle: "Chỉ đạo điều hành tập trung, minh bạch và hiệu quả",
  },
  {
    id: "cong-dan",
    name: "Công dân",
    banner:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2000&auto=format&fit=crop",
    title: "Tiện ích dành cho Công dân",
    subtitle: "Dịch vụ hành chính công nhanh chóng, thuận tiện mọi lúc mọi nơi",
  },
  {
    id: "doanh-nghiep",
    name: "Doanh nghiệp",
    banner:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
    title: "Đồng hành cùng Doanh nghiệp",
    subtitle: "Môi trường đầu tư thông thoáng, phát triển kinh tế số",
  },
  {
    id: "du-khach",
    name: "Du khách",
    banner:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2000&auto=format&fit=crop",
    title: "Trải nghiệm Du lịch Nha Trang - Khánh Hòa",
    subtitle: "Hòn ngọc Biển Đông - Điểm đến của những kỳ nghỉ tuyệt vời",
  },
];

const MAP_MIRRORS = [
  khanhHoaMap,
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Vietnam_Khanh_Hoa_map.png/800px-Vietnam_Khanh_Hoa_map.png"
];

const DOC_DATA: Record<string, { id: string; date: string; title: string; desc: string }[]> = {
  "Văn bản mới cập nhật": [
    {
      id: "185/CĐ-UBND",
      date: "24/05/2026",
      title: "Quyết định thúc đẩy đầu tư công và hạ tầng chiến lược",
      desc: "Chỉ đạo đẩy nhanh tiến độ đấu thầu, giải ngân nguồn vốn ngân sách nhà nước cho các dự án trọng điểm toàn tỉnh."
    },
    {
      id: "42/CT-UBND",
      date: "23/05/2026",
      title: "Chỉ thị triển khai chiến dịch giải phóng mặt bằng cao tốc",
      desc: "Cao điểm đền bù, tái định cư tuyến đường cao tốc đi qua phân khu Bắc Vân Phong và Ninh Hòa."
    },
    {
      id: "1251/QĐ-UBND",
      date: "21/05/2026",
      title: "Phê duyệt điều chỉnh quy hoạch tổng thể kinh tế biển đảo",
      desc: "Xác định các trung tâm công nghiệp năng lượng sạch, hậu cần cảng biển và nuôi trồng hải sản công nghệ cao."
    },
    {
      id: "98/KH-UBND",
      date: "19/05/2026",
      title: "Kế hoạch phục hồi và kiểm soát ô nhiễm hành lang biển",
      desc: "Tổng kiểm tra việc xử lý chất thải của các cơ sở dịch vụ, nhà hàng dọc bãi tắm Trần Phú Nha Trang."
    },
    {
      id: "101/QĐ-UBND",
      date: "18/05/2026",
      title: "Quyết định áp dụng chuyển đổi số trong quản lý hộ tịch",
      desc: "Đơn giản hóa thủ tục hành chính, số hóa 100% hồ sơ đất đai và sổ hộ tịch tại các huyện, thị xã."
    },
    {
      id: "82/KH-UBND",
      date: "16/05/2026",
      title: "Đề án nâng cao chất lượng dịch vụ du lịch lễ hội",
      desc: "Xây dựng các tiêu chuẩn chất lượng cao cho cơ sở lưu trú và đào tạo nguồn nhân lực du lịch địa phương."
    },
    {
      id: "65/QĐ-STNMT",
      date: "14/05/2026",
      title: "Khảo sát và quan trắc môi trường nước các hồ chứa lớn",
      desc: "Ủy thác trung tâm quan trắc kiểm tra định kỳ chất lượng nguồn nước tại hồ Đá Bàn và hồ Kênh Hạ."
    },
    {
      id: "13/CT-HĐND",
      date: "12/05/2026",
      title: "Nâng cao năng lực giám sát hoạt động tư pháp cơ sở",
      desc: "Chỉ thị tăng cường đối thoại công khai, minh bạch các kết luận thanh tra hành chính chính thức."
    },
    {
      id: "320/KH-UBND",
      date: "10/05/2026",
      title: "Chương trình phát triển nông nghiệp công nghệ Diên Khánh",
      desc: "Hỗ trợ lắp đặt hệ thống tưới tự động và cung cấp giống cây dược liệu năng suất cao cho nhà vườn."
    },
    {
      id: "1041/QĐ-UBND",
      date: "08/05/2026",
      title: "Thành lập ban chỉ đạo tổ chức Festival Biển Nha Trang",
      desc: "Phân công cụ thể nhiệm vụ an ninh, y tế và truyền thông cho các tiểu ban trực thuộc sự chỉ đạo."
    },
    {
      id: "29/QĐ-SXD",
      date: "06/05/2026",
      title: "Phê duyệt thiết kế chi tiết trục cảnh quan Võ Nguyên Giáp",
      desc: "Đồng bộ hóa hệ thống chiếu sáng nghệ thuật và cây xanh đô thị dọc tuyến đường kết nối Nha Trang - Diên Khánh."
    },
    {
      id: "35/CT-UBND",
      date: "04/05/2026",
      title: "Tăng cường quản lý nhà nước về giá dịch vụ lưu trú hè",
      desc: "Kiên quyết xử lý hành vi găm phòng, tự động tăng giá vượt mức niêm yết trong mùa cao điểm du lịch hè."
    },
    {
      id: "785/QĐ-UBND",
      date: "02/05/2026",
      title: "Hỗ trợ kinh phí đóng mới tàu cá vỏ thép cho ngư dân",
      desc: "Giải ngân đợt 3 nguồn vốn hỗ trợ đóng tàu vỏ thép đánh bắt xa bờ theo Nghị định của Chính phủ."
    },
    {
      id: "112/KH-SNN",
      date: "29/04/2026",
      title: "Kế hoạch phòng trừ sâu bệnh hại lúa mùa Ninh Hòa",
      desc: "Hướng dẫn bà con xã viên chủ động xử lý rầy nâu, ốc bươu vàng tại các cánh đồng trọng điểm thị xã."
    },
    {
      id: "15/QĐ-STTC",
      date: "27/04/2026",
      title: "Điều chỉnh bảng giá vé danh thắng Tháp Bà Ponagar",
      desc: "Quy định cụ thể giá vé ưu đãi cho học sinh, sinh viên và người cao tuổi khi tham quan di tích lịch sử."
    },
    {
      id: "56/KH-UBND",
      date: "25/04/2026",
      title: "Hội nghị xúc tiến đầu tư phát triển công nghiệp phụ trợ",
      desc: "Kết nối doanh nghiệp địa phương với các tập đoàn đa quốc gia đầu tư tại KCN Suối Dầu."
    },
    {
      id: "612/QĐ-UBND",
      date: "22/04/2026",
      title: "Phê duyệt bồi thường dự án mở rộng Quốc lộ 1A Vạn Ninh",
      desc: "Giải quyết dứt điểm các kiến nghị về đất nông nghiệp xen kẽ mặt tiền quốc lộ qua địa phận Vạn Ninh."
    },
    {
      id: "44/QĐ-SGDĐT",
      date: "20/04/2026",
      title: "Quy chế tuyển sinh lớp 10 học phổ thông công lập",
      desc: "Hợp nhất phương thức xét tuyển và thi tuyển nhằm giảm áp lực cho thí sinh vùng ngoại thành."
    },
    {
      id: "18/CT-UBND",
      date: "18/04/2026",
      title: "Phòng chống thiên tai và cứu hộ cứu nạn trên biển",
      desc: "Yêu cầu các tàu thuyền trang bị đầy đủ định vị tầm xa và phao cứu sinh trước khi xuất bến."
    },
    {
      id: "512/QĐ-UBND",
      date: "15/04/2026",
      title: "Chấp thuận chủ trương đầu tư điện mặt trời mái nhà",
      desc: "Ưu tiên lắp đặt tại các nhà xưởng, cơ sở sản xuất thuộc khu công nghiệp sạch Ninh Thủy."
    }
  ],
  "Công báo Khánh Hòa": [
    {
      id: "Số 12/2026/CB",
      date: "01/06/2026",
      title: "Quy chế làm việc mẫu của Ủy ban Nhân dân tỉnh",
      desc: "Nghị định quy định quy trình tiếp nhận, phê duyệt và giám sát văn bản liên thông trực tuyến một cửa."
    },
    {
      id: "Số 11/2026/CB",
      date: "28/05/2026",
      title: "Quyết định ban hành đơn giá bồi thường đất vùng đầm",
      desc: "Áp dụng khung giá đất đền bù tái định cư cho các hộ dân chịu ảnh hưởng tại phân khu sinh thái Nha Phu."
    },
    {
      id: "Số 10/2026/CB",
      date: "25/05/2026",
      title: "Chỉ đạo biện pháp cấp bách phòng ngừa bão lũ ven sông",
      desc: "Kế hoạch di dời dân cư vùng có nguy cơ sạt lở cao dọc hạ lưu sông Cái Nha Trang và sông Dinh Ninh Hòa."
    },
    {
      id: "Số 09/2026/CB",
      date: "20/05/2026",
      title: "Quy định phân cấp quản lý tài sản công khu kinh tế trọng điểm",
      desc: "Ủy quyền trực tiếp cho Ban quản lý Vịnh Vân Phong chịu trách nhiệm cấp phép sử dụng mặt bằng công."
    },
    {
      id: "Số 08/2026/CB",
      date: "15/05/2026",
      title: "Đơn giá thu gom, vận chuyển và xử lý rác sinh hoạt",
      desc: "Ban hành biểu phí thu phí vệ sinh môi trường áp dụng cho hộ gia đình và hộ kinh doanh dịch vụ ẩm thực."
    },
    {
      id: "Số 07/2026/CB",
      date: "10/05/2026",
      title: "Quy định diện tích tối thiểu tách thửa đất nông nghiệp",
      desc: "Biện pháp ngăn chặn tình trạng tách nhỏ đất trồng cây lâu năm để phân lô bán nền trái phép."
    },
    {
      id: "Số 06/2026/CB",
      date: "05/05/2026",
      title: "Nâng mức hỗ trợ đóng bảo hiểm y tế hộ cận nghèo",
      desc: "Tăng tỷ lệ ngân sách tỉnh hỗ trợ từ 15% lên 30% đối với đối tượng bảo trợ xã hội và hộ cận nghèo."
    },
    {
      id: "Số 05/2026/CB",
      date: "01/05/2026",
      title: "Phối hợp giải quyết tranh chấp đất đai ranh giới",
      desc: "Kiến tạo cơ chế giải quyết tranh chấp ranh giới đất rừng giáp ranh giữa Diên Khánh và Cam Lâm."
    },
    {
      id: "Số 04/2026/CB",
      date: "25/04/2026",
      title: "Danh mục thủ tục hành chính liên thông dịch vụ công",
      desc: "Cắt giảm 25% thời gian cấp phép đầu tư xây dựng dự án ngoài ngân sách cho công nhân."
    },
    {
      id: "Số 03/2026/CB",
      date: "20/04/2026",
      title: "Định mức phân bổ dự toán ngân sách mầm non vùng khó",
      desc: "Phân tách rõ nguồn kinh pháp bảo đảm cơ sở vật chất cho giáo dục mầm non vùng dân tộc thiểu số."
    },
    {
      id: "Số 02/2026/CB",
      date: "15/04/2026",
      title: "Quy chế quản lý hoạt động khai thác cát sỏi bãi sông",
      desc: "Đình chỉ hoàn toàn và xử phạt kịch khung các bãi tập kết vật liệu xây dựng tự phát dọc sông Dinh."
    },
    {
      id: "Số 01/2026/CB",
      date: "10/04/2026",
      title: "Tiêu chí xã đạt chuẩn nông thôn mới kiểu mẫu",
      desc: "Bổ sung tiêu chí sử dụng nước sạch tập trung và tỷ lệ phân loại rác thải tại nguồn đạt từ 80%."
    },
    {
      id: "Số 48/2025/CB",
      date: "25/12/2025",
      title: "Kế hoạch sử dụng đất 5 năm tỉnh Khánh Hòa 2026-2030",
      desc: "Cơ cấu diện tích đất trồng lúa kém hiệu quả sang nuôi trồng thủy sản công nghiệp và dịch vụ."
    },
    {
      id: "Số 47/2025/CB",
      date: "20/12/2025",
      title: "Chương trình phát triển hạ tầng số nuôi thủy hải sản",
      desc: "Mục tiêu phổ cập sóng băng rộng chất lượng cao tại tất cả vùng nuôi biển lồng bè trọng điểm."
    },
    {
      id: "Số 46/2025/CB",
      date: "15/12/2025",
      title: "Chính sách khuyến khích liên kết chuỗi giá trị nông nghiệp",
      desc: "Ưu đãi về thuế và mặt bằng cho doanh nghiệp cam kết bao tiêu sản phẩm nông sản hữu cơ Diên Khánh."
    },
    {
      id: "Số 45/2025/CB",
      date: "10/12/2025",
      title: "Quy chế bảo vệ danh thắng Hòn Chồng Nha Trang",
      desc: "Đối soát ranh giới vùng lõi bảo vệ nghiêm ngặt chống xâm lấn các khối đá cảnh quan tự nhiên."
    },
    {
      id: "Số 44/2025/CB",
      date: "05/12/2025",
      title: "Phê duyệt dự án tôn tạo đền thờ Trần Hưng Đạo",
      desc: "Sử dụng nguồn vốn xã hội hóa kết hợp một phần ngân sách tỉnh tôn tạo khu chính điện đón khách."
    },
    {
      id: "Số 43/2025/CB",
      date: "01/12/2025",
      title: "Phương án bảo vệ rừng dương phòng hộ cát bay",
      desc: "Tập trung chăm sóc rừng dương liễu ven biển Vạn Ninh nhằm chắn gió cát, hạn chế sạt lở tự nhiên."
    },
    {
      id: "Số 42/2025/CB",
      date: "25/11/2025",
      title: "Quy chế bảo mật cơ sở dữ liệu quy hoạch xây dựng",
      desc: "Ngăn ngừa thất thoát, sao chép trái phép thông tin dự thảo quy hoạch đô thị chưa được công bố."
    },
    {
      id: "Số 41/2025/CB",
      date: "20/11/2025",
      title: "Hỗ trợ thiết bị máy tính bảng vùng cao Khánh Vĩnh",
      desc: "Tài trợ máy tính bảng cho các trường THCS vùng giáp ranh biên giới Đăk Lăk của huyện Khánh Vĩnh."
    }
  ],
  "Thông báo chính thức": [
    {
      id: "142/TB-UBND",
      date: "30/05/2026",
      title: "Kết luận của Chủ tịch tỉnh về Quy hoạch đô thị Diên Khánh",
      desc: "Hướng tới xây dựng Diên Khánh trở thành đô thị sinh thái kết hợp phục dựng các di tích lịch sử cổ."
    },
    {
      id: "138/TB-UBND",
      date: "27/05/2026",
      title: "Tạm ngưng giao dịch đất bãi tắm biển Trần Phú Nha Trang",
      desc: "Nghiêm cấm lấn chiếm mặt biển, bảo đảm không gian công cộng mở cho người dân địa phương và du khách du lịch."
    },
    {
      id: "129/TB-UBND",
      date: "24/05/2026",
      title: "Lịch tiếp công dân trực tiếp của Đại biểu Hội đồng Nhân dân",
      desc: "Lịch đối thoại trực tiếp tháo gỡ vướng mắc giải phóng mặt bằng, chế độ bảo trợ ngư dân mất mùa biển."
    },
    {
      id: "115/TB-UBND",
      date: "18/05/2026",
      title: "Thông báo phân luồng giao thông Tuần lễ Festival Biển",
      desc: "Cấm các phương tiện tải trọng lớn đi vào trục Trần Phú và Lê Thánh Tôn trong khung giờ khai mạc lễ hội."
    },
    {
      id: "110/TB-UBND",
      date: "15/05/2026",
      title: "Triệu tập kỳ họp thứ 15 Hội đồng Nhân dân tỉnh khóa VII",
      desc: "Kỳ họp bất thường biểu quyết thông qua các giải pháp tháo gỡ quy hoạch khu đô thị phía Tây Nha Trang."
    },
    {
      id: "105/TB-SXD",
      date: "12/05/2026",
      title: "Khánh thành bàn giao căn hộ nhà ở xã hội Phước Long",
      desc: "Bàn giao chìa khóa cho 250 hộ gia đình thuộc đối tượng chính sách, người có thu nhập thấp đô thị."
    },
    {
      id: "98/TB-UBND",
      date: "10/05/2026",
      title: "Kết luận thanh tra lán bè tự phát trái phép đảo Bình Ba",
      desc: "Cưỡng chế tháo dỡ các resort mini xây dựng rào chắn tầm nhìn và lối đi tự do của người dân."
    },
    {
      id: "88/TB-SCT",
      date: "06/05/2026",
      title: "Hội chợ xúc tiến thương mại nông sản Quảng trường 2/4",
      desc: "Thời gian diễn ra từ 20/05 đến 27/05 tại Quảng trường 2 Tháng 4, trưng bày nông sản đặc sản."
    },
    {
      id: "82/TB-SYT",
      date: "04/05/2026",
      title: "Triển khai phòng bệnh sốt xuất huyết vùng ven biển đảo",
      desc: "Phun thuốc khử khuẩn các khu neo đậu tàu thuyền và phân phát cẩm nang phòng chống sốt xuất huyết."
    },
    {
      id: "75/TB-UBND",
      date: "02/05/2026",
      title: "Thông báo lịch nghỉ lễ Chiến thắng và Quốc tế Lao động",
      desc: "Toàn bộ cơ quan hành chính nhà nước nghỉ 5 ngày liên tục, bố trí kíp trực giải quyết khẩn cấp thủ tục."
    },
    {
      id: "68/TB-SNN",
      date: "28/04/2026",
      title: "Cảnh báo xâm nhập mặn sông Cái hạ lưu Nha Trang",
      desc: "Khuyến cáo các nhà máy nước sạch chủ động kế hoạch điều tiết nguồn cấp nước sinh hoạt cho khu trung tâm."
    },
    {
      id: "59/TB-UBND",
      date: "24/04/2026",
      title: "Kết luận hội nghị đối thoại tháo gỡ khó khăn cho FDI",
      desc: "Cam kết bàn giao đủ quỹ đất sạch và hạ tầng kỹ thuật đúng hạn tại khu công nghiệp Cam Ranh."
    },
    {
      id: "51/TB-SGDĐT",
      date: "20/04/2026",
      title: "Thời gian thu nhận hồ sơ xét thăng hạng giáo viên THPT",
      desc: "Cơ hội nâng lương trước thời hạn cho các nhà giáo ưu tú có thành tích xuất sắc tại vùng sâu."
    },
    {
      id: "45/TB-UBND",
      date: "15/04/2026",
      title: "Dừng hoạt động bến phà thuyền tự phát đảo Trí Nguyên",
      desc: "Chuyển toàn bộ hành khách sang hệ thống tàu cao tốc composite đạt quy chuẩn an toàn đường thủy mới."
    },
    {
      id: "38/TB-STNMT",
      date: "10/04/2026",
      title: "Chương trình đấu giá đất khu tái định cư Đất Lành",
      desc: "Đấu giá công khai 50 lô đất biệt thự và nhà liền kề phục vụ ngân sách thành phố Nha Trang."
    },
    {
      id: "32/TB-UBND",
      date: "05/04/2026",
      title: "Công nhận danh sách xã đạt nông thôn mới kiểu mẫu",
      desc: "Tuyên dương và trao tặng bằng khen của Chủ tịch tỉnh cùng phần thưởng tiền mặt hỗ trợ hạ tầng."
    },
    {
      id: "25/TB-SCT",
      date: "01/04/2026",
      title: "Phê duyệt đợt khuyến mãi kích cầu trung tâm thương mại",
      desc: "Voucher giảm giá 10% cho khách mua sắm tại hệ thống siêu thị Co.opmart, Go Nha Trang."
    },
    {
      id: "18/TB-VHL",
      date: "25/03/2026",
      title: "Lịch đón khách hành trình đêm Viện Hải dương học",
      desc: "Kéo dài thời gian đón khách đến 20:30 tối thứ sáu đến chủ nhật hàng tuần, triển khai phòng kính ảo."
    },
    {
      id: "12/TB-UBND",
      date: "20/03/2026",
      title: "Di dời ga khách Nha Trang về xã Vĩnh Trung kết nối",
      desc: "Đồng thuân đề xuất chuyển ga khách về xã Vĩnh Trung, nhường mặt bằng ga cũ phát triển công viên mở."
    },
    {
      id: "05/TB-SXD",
      date: "15/03/2026",
      title: "Chấn chỉnh cấp phép cải tạo mặt tiền phố cổ Diên Khánh",
      desc: "Hướng dẫn bảo tồn mặt bằng kiến trúc cổ mái ngói đặc trưng tại phố cổ Diên Khánh dọc sông Cái."
    }
  ],
  "Lấy ý kiến dự thảo VB QPPL": [
    {
      id: "DT-05/HĐND",
      date: "30/07/2026",
      title: "Dự thảo Quy định cụ thể mức thu học phí giáo dục công lập",
      desc: "Đề xuất miễn giảm học phí cho học sinh vùng bãi ngang ven biển đặc biệt khó khăn kể từ khóa học mới."
    },
    {
      id: "DT-04/UBND",
      date: "25/07/2026",
      title: "Dự thảo Thiết kế đô thị kiến trúc cảnh quan biển Nha Trang",
      desc: "Trưng bày trực quan mô hình bến tàu du lịch quốc tế, phố đi bộ kết hợp mua sắm đêm ven biển."
    },
    {
      id: "DT-03/SXD",
      date: "15/07/2026",
      title: "Dự thảo Quy hoạch chi tiết phân khu giải trí đảo Hòn Tre",
      desc: "Mở rộng hệ thống cáp treo, xây dựng khu bảo tồn rạn san hô nhân tạo sinh thái kết hợp nghỉ dưỡng sinh thái cao cấp."
    },
    {
      id: "DT-07/SGDĐT",
      date: "08/05/2026",
      title: "Dự thảo Đề án phát triển trường THPT Chuyên Lê Quý Đôn",
      desc: "Mở rộng cơ sở vật chất phòng thí nghiệm tế bào gốc và tuyển chọn giảng viên cốt cán nước ngoài."
    },
    {
      id: "DT-08/SCT",
      date: "04/05/2026",
      title: "Dự thảo phát triển tuyến phố đi bộ kết hợp ẩm thực đêm",
      desc: "Quy định giờ giới nghiêm, phương án dọn dẹp vệ sinh môi trường trước 5h sáng tại các trục du lịch."
    },
    {
      id: "DT-02/STNMT",
      date: "12/07/2026",
      title: "Dự thảo Quy định mới về hạn mức đất giao cho hộ gia đình",
      desc: "Quy chuẩn diện tích đất ở nông thôn tối đa khi tách thửa nhằm hạn chế tình trạng thu gom đất đầu cơ bất hợp pháp."
    },
    {
      id: "DT-06/STTC",
      date: "05/07/2026",
      title: "Dự thảo quản lý dư nợ đầu tư cơ sở hạ tầng đô thị",
      desc: "Định mức tỷ lệ nợ công trên GRDP của tỉnh dưới ngưỡng 30% để đảm bảo an toàn tuyệt đối tài chính."
    },
    {
      id: "DT-09/SNN",
      date: "01/05/2026",
      title: "Dự thảo Đề án hiện đại hóa cảng cá Hòn Rớ Nha Trang",
      desc: "Lắp đặt cầu cảng thông minh tích hợp phần mềm thông báo nguồn gốc thủy sản đánh bắt xa bờ."
    },
    {
      id: "DT-10/STNMT",
      date: "28/04/2026",
      title: "Dự thảo Tiêu chuẩn phân vùng bảo vệ chất lượng không khí",
      desc: "Hạn chế lưu thông tạm thời xe tải trên 5 tấn quanh khu vực trung tâm vào khu du lịch."
    },
    {
      id: "DT-11/SXD",
      date: "24/04/2026",
      title: "Dự thảo Quản lý xây dựng phân khu sân bay Cam Ranh",
      desc: "Ưu tiên kiến trúc nhiệt đới xanh, giới hạn chiều cao tối đa 15 tầng đối với các khách sạn mặt tiền vịnh."
    },
    {
      id: "DT-12/SVHTT",
      date: "20/04/2026",
      title: "Dự thảo Đề án phục dựng bài chòi truyền thống học đường",
      desc: "Thành lập 10 câu lạc bộ bài chòi học đường và tổ chức biểu diễn miễn phí hàng tuần cho du khách."
    },
    {
      id: "DT-13/SKHĐT",
      date: "15/04/2026",
      title: "Dự thảo Danh mục dự án ưu đãi thuế khu kinh tế Vân Phong",
      desc: "Chiết khấu thuế thu nhập doanh nghiệp còn 10% trong 15 năm đầu tiên cho nhà đầu tư bán dẫn."
    },
    {
      id: "DT-14/SLĐTBXH",
      date: "10/04/2026",
      title: "Dự thảo Đào tạo chuyển đổi lao động hải sản Nha Phu",
      desc: "Hỗ trợ 100% học phí học chuyển đổi nghề sang lĩnh vực lái cano du lịch, phục vụ buồng phòng nhà hàng."
    },
    {
      id: "DT-15/STTTT",
      date: "05/04/2026",
      title: "Dự thảo Quy chuẩn bảo mật dịch vụ dữ liệu camera IOC",
      desc: "Quy định quy trình phân quyền, xử lý sự cố rò rỉ dữ liệu camera giao thông công cộng đô thị."
    },
    {
      id: "DT-16/STV",
      date: "01/04/2026",
      title: "Dự thảo Trợ giá xe buýt liên huyện Nha Trang - Vạn Ninh",
      desc: "Nâng mức hỗ trợ giá vé tháng lên 50% cho học sinh cấp ba, công nhân lao động bốc xếp tại bến xe."
    },
    {
      id: "DT-17/SNNPTNT",
      date: "28/03/2026",
      title: "Dự thảo Quy hoạch luồng lách nuôi tôm hùm lồng bè",
      desc: "Phân chia tọa độ mặt biển, cấm cọc lấn chiếm luồng lạch tàu du lịch tại vịnh Vân Phong."
    },
    {
      id: "DT-18/UBND",
      date: "24/03/2026",
      title: "Dự thảo Tiêu chuẩn bình chọn công dân danh dự tiêu biểu",
      desc: "Thang điểm khoa học đánh giá cống hiến y đức, đóng góp từ thiện và thành tích thể thao cao."
    },
    {
      id: "DT-19/SXD",
      date: "20/03/2026",
      title: "Dự thảo Thiết kế bãi đỗ xe tích hợp ngầm Trần Phú",
      desc: "Xây dựng bãi đỗ xe ngầm kết hợp trung tâm thương mại xanh bên dưới công viên Trần Phú."
    },
    {
      id: "DT-20/STNMT",
      date: "15/03/2026",
      title: "Dự thảo Đền bù cây xanh cảnh quan đô thị bị xâm lấn",
      desc: "Quy chuẩn bù đắp diện tích cây xanh khi xây dựng trung tâm mua sắm bằng vườn treo sinh thái mặt tiền."
    },
    {
      id: "DT-21/STTC",
      date: "10/03/2026",
      title: "Dự thảo Luật quản lý ngân sách tài sản công huyện Vạn Ninh",
      desc: "Phân bổ phân cấp rõ quyền giám sát ngân sách cho thường trực Hội đồng Nhân dân huyện Vạn Ninh."
    }
  ]
};

const FOCUS_NEWS_CATEGORIES = [
  {
    label: "Dành cho Công dân",
    img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop",
    hasNewUpdates: true,
    articles: Array.from({length: 10}).map((_, i) => ({
      title: `Công dân cần biết: Tin tức quan trọng cập nhật số ${i+1}`,
      img: `https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=150&h=100&auto=format&fit=crop`
    }))
  },
  {
    label: "Dành cho Doanh nghiệp",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    hasNewUpdates: true,
    articles: Array.from({length: 10}).map((_, i) => ({
      title: `Hỗ trợ doanh nghiệp: Chính sách mới ban hành số ${i+1}`,
      img: `https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=150&h=100&auto=format&fit=crop`
    }))
  },
  {
    label: "Dành cho Du khách",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=600&auto=format&fit=crop",
    hasNewUpdates: false,
    articles: Array.from({length: 10}).map((_, i) => ({
      title: `Cẩm nang du lịch: Điểm đến hấp dẫn tại Khánh Hòa số ${i+1}`,
      img: `https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=150&h=100&auto=format&fit=crop`
    }))
  }
];

function DraftFeedbackPage({ draft, onBack, showAppToast, onSubmitFeedback }: { draft: any, onBack: () => void, showAppToast: (msg: string) => void, onSubmitFeedback?: (comment: {name: string; content: string; date: string}) => void }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', content: '' });
  const [isCaptchaChecked, setIsCaptchaChecked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.content) {
      showAppToast("Vui lòng điền đầy đủ thông tin!");
      return;
    }
    if (!isCaptchaChecked) {
      showAppToast("Vui lòng xác nhận Captcha!");
      return;
    }
    
    if (onSubmitFeedback) {
      const today = new Date();
      const dateStr = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;
      onSubmitFeedback({
        name: formData.name,
        content: formData.content,
        date: dateStr
      });
    }

    showAppToast("Cảm ơn bạn đã góp ý. Ý kiến của bạn đã được ghi nhận!");
    onBack();
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 py-10 px-4 font-sans flex items-center justify-center">
      <div className="w-full max-w-3xl mx-auto bg-white rounded-[32px] shadow-xl border border-slate-200 overflow-hidden">
         {/* Header */}
         <div className="bg-[#1E3A8A] text-white p-6 md:p-8 flex items-center justify-between relative overflow-hidden">
           <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
             <Gavel size={200} className="-mt-10 -mr-10" />
           </div>
           <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight relative z-10 flex items-center gap-3">
             <MessageSquare size={28} />
             Đóng góp ý kiến dự thảo
           </h2>
           <button onClick={onBack} className="bg-white/10 hover:bg-white/20 p-2.5 rounded-2xl transition-colors relative z-10">
             <X size={24} />
           </button>
         </div>

         {/* Draft Info */}
         <div className="p-6 md:p-8 border-b border-slate-100 bg-slate-50/50">
           <div className="flex gap-2 items-center mb-3">
             <span className="bg-red-100 text-red-700 font-bold px-3 py-1.5 rounded-lg text-lg tracking-wider">{draft.id}</span>
             <span className="text-black text-lg font-normal flex items-center gap-1.5">
               <Calendar size={14} className="text-black" /> 
               Hạn góp ý: {draft.date}
             </span>
           </div>
           <h3 className="text-lg md:text-xl font-black text-slate-800 leading-snug">{draft.title}</h3>
           <p className="text-lg font-semibold text-slate-500 mt-2.5 leading-relaxed">{draft.desc}</p>
         </div>

         {/* Form */}
         <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-2">
               <label className="text-lg font-black text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                 <User size={14} className="text-[#1E3A8A]" /> Họ và tên <span className="text-red-500">*</span>
               </label>
               <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-lg font-bold focus:outline-none focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A] transition-all" placeholder="Nhập họ và tên..." required />
             </div>
             <div className="space-y-2">
               <label className="text-lg font-black text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                 <Mail size={14} className="text-[#1E3A8A]" /> Email <span className="text-red-500">*</span>
               </label>
               <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-lg font-bold focus:outline-none focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A] transition-all" placeholder="Nhập địa chỉ email..." required />
             </div>
             <div className="space-y-2 md:col-span-2">
               <label className="text-lg font-black text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                 <Phone size={14} className="text-[#1E3A8A]" /> Số điện thoại <span className="text-red-500">*</span>
               </label>
               <input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-lg font-bold focus:outline-none focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A] transition-all" placeholder="Nhập số điện thoại..." required />
             </div>
           </div>

           <div className="space-y-2">
             <label className="text-lg font-black text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
               <FileText size={14} className="text-[#1E3A8A]" /> Nội dung góp ý <span className="text-red-500">*</span>
             </label>
             <textarea rows={5} value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-lg font-bold focus:outline-none focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A] transition-all resize-none" placeholder="Nhập nội dung ý kiến đóng góp của bạn..." required />
           </div>

           {/* Mock Captcha */}
           <div className="bg-slate-50/80 border border-slate-200 rounded-2xl p-4 flex items-center gap-4 max-w-sm">
             <input type="checkbox" id="captcha" checked={isCaptchaChecked} onChange={(e) => setIsCaptchaChecked(e.target.checked)} className="w-6 h-6 rounded-md border-slate-300 text-[#1E3A8A] focus:ring-[#1E3A8A] transition-all cursor-pointer" />
             <label htmlFor="captcha" className="font-bold text-lg text-slate-700 cursor-pointer select-none">Tôi không phải là người máy</label>
             <div className="ml-auto flex flex-col items-center gap-1 opacity-60">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RecaptchaLogo.svg/200px-RecaptchaLogo.svg.png" className="h-6" alt="reCAPTCHA" />
             </div>
           </div>

           <div className="pt-6 flex justify-end gap-3 border-t border-slate-100">
             <button type="button" onClick={onBack} className="px-6 py-3.5 rounded-2xl font-black text-slate-500 hover:bg-slate-100 transition-colors">
               Hủy bỏ
             </button>
             <button type="submit" className="px-8 py-3.5 bg-[#1E3A8A] text-white rounded-2xl font-black hover:bg-[#152C69] transition-all shadow-lg shadow-blue-900/20 flex items-center gap-2 hover:-translate-y-0.5">
               Gửi ý kiến <Send size={18} />
             </button>
           </div>
         </form>
      </div>
    </div>
  );
}

export default function App() {
  const [activeCat, setActiveCat] = useState(() => {
    try {
      const savedId = localStorage.getItem("activeCatId");
      if (savedId) {
        if (savedId === "gioi-thieu") return GIOI_THIEU_CAT;
        const found = CATEGORIES.find(c => c.id === savedId);
        if (found) return found;
      }
    } catch (e) {
      // ignore
    }
    return GIOI_THIEU_CAT;
  });

  useEffect(() => {
    if (activeCat && activeCat.id) {
      localStorage.setItem("activeCatId", activeCat.id);
    }
  }, [activeCat]);

  const [isBotOpen, setIsBotOpen] = useState(false);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [isWeeklyScheduleOpen, setIsWeeklyScheduleOpen] = useState(false);
  const [isSocioEconomicOpen, setIsSocioEconomicOpen] = useState(false);
  const [activeFocusNewsIndex, setActiveFocusNewsIndex] = useState<number | null>(null);
  const [zoomScale, setZoomScale] = useState(1);
  const [mapImgSrc, setMapImgSrc] = useState(MAP_MIRRORS[0]);
  const [selectedDocCategory, setSelectedDocCategory] = useState<string>("Văn bản mới cập nhật");
  const [homeDocPage, setHomeDocPage] = useState<number>(1);
  const [homeSelectedQrDoc, setHomeSelectedQrDoc] = useState<any>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [appToast, setAppToast] = useState<string | null>(null);

  // National portals state
  const [draftSearchQuery, setDraftSearchQuery] = useState("");
  const [activeDraftFeedback, setActiveDraftFeedback] = useState<any>(null);
  const [feedbackName, setFeedbackName] = useState("");
  const [feedbackEmail, setFeedbackEmail] = useState("");
  const [feedbackContent, setFeedbackContent] = useState("");
  const [allFeedbacks, setAllFeedbacks] = useState<Record<string, {name: string; content: string; date: string}[]>>({
    "DT-05/HĐND": [
      { name: "Nguyễn Văn Hùng", content: "Đề xuất này rất thiết thực, giúp đỡ nhiều gia đình khó khăn ở khu vực bãi ngang ven biển. Tôi hoàn toàn nhất trí.", date: "15/05/2026" },
      { name: "Trần Thị Mai", content: "Cần làm rõ tiêu chí xác định hộ nghèo, khó khăn để việc miễn giảm học phí đúng đối tượng, tránh trục lợi chính sách.", date: "18/05/2026" }
    ],
    "DT-04/UBND": [
      { name: "Lê Minh Trí", content: "Cần hạn chế tối đa việc xây dựng các công trình cao tầng sát bãi biển để bảo vệ tầm nhìn và không gian sinh hoạt chung của cộng đồng.", date: "20/05/2026" }
    ],
    "DT-03/SXD": [
      { name: "Phạm Minh Hoàng", content: "Việc mở rộng cáp treo và du lịch sinh thái là rất tốt, nhưng cần cam kết bảo tồn nghiêm ngặt rạn san hô tự nhiên xung quanh đảo.", date: "10/05/2026" }
    ],
    "DT-02/STNMT": [
      { name: "Võ Văn Nam", content: "Hạn mức đất ở nông thôn tối đa nên được điều chỉnh linh hoạt tùy thuộc vào quy mô nhân khẩu của hộ gia đình.", date: "08/05/2026" }
    ],
    "DT-06/STTC": [
      { name: "Hoàng Kim Liên", content: "Đồng tình việc duy trì tỷ lệ nợ công thấp hơn 30% để giảm áp lực trả nợ cho thế hệ sau và phân bổ hợp lý.", date: "22/05/2026" }
    ],
    "DT-07/SGDĐT": [
      { name: "Đặng Thị Ngọc", content: "Việc thu hút giáo viên quốc tế cho chuyên Lê Quý Đôn là một đột phá rất cần thiết trong quá trình hội nhập giáo dục toàn cầu.", date: "11/05/2026" }
    ],
    "DT-08/SCT": [
      { name: "Bùi Quốc Toản", content: "Ủng hộ việc quy định giờ giới nghiêm và dọn dẹp vệ sinh trước 5h sáng để đảm bảo phố biển sáng mai luôn sạch đẹp.", date: "06/05/2026" }
    ],
    "DT-09/SNN": [
      { name: "Trần Văn Sáng", content: "Ngư dân chúng tôi mong muốn phần mềm báo nguồn gốc thủy sản này giao diện đơn giản, dễ dùng trực tiếp trên điện thoại di động.", date: "03/05/2026" }
    ],
    "DT-10/STNMT": [
      { name: "Lý Thanh Bình", content: "Việc hạn chế xe tải trên 5 tấn đi qua trung tâm sẽ giúp giảm đáng kể bụi mịn và tiếng ồn tại khu nghỉ dưỡng ven biển.", date: "29/04/2026" }
    ]
  });
  const [expandedDraftComments, setExpandedDraftComments] = useState<Record<string, boolean>>({});
  const [draftFilter, setDraftFilter] = useState<"all" | "active" | "expired">("all");

  const GAZETTE_ANNOUNCEMENTS = [
    {
      id: "Nghị quyết 12/2026/NQ-CP",
      title: "Chương trình phát triển công nghệ bán dẫn quốc gia đến 2030",
      desc: "Chính phủ vừa ban hành chương trình hành động ưu tiên thu hút đầu tư nước ngoài, xây dựng các trung tâm CNC thiết kế chip cốt lõi và đào tạo hàng chục ngàn nhân lực chất lượng cao.",
      date: "03/06/2026",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: "Nghị định 45/2026/NĐ-CP",
      title: "Cơ chế mới bồi thường, tái định cư khi thu hồi đất",
      desc: "Bố trí đất tái định cư có hạ tầng kỹ thuật đồng bộ trước khi cơ quan nhà nước quyết định thu hồi đất, đảm bảo đời sống sinh kế ổn định lâu dài cho người dân sau di dời.",
      date: "02/06/2026",
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: "Quyết định 124/QĐ-TTg",
      title: "Phê duyệt mạng lưới trung tâm logistics quốc gia",
      desc: "Đến năm 2030, hình thành các trung tâm logistics trọng điểm kết nối hạ tầng giao thông đa phương thức cấp vùng và liên tỉnh, góp phần giảm tỷ lệ chi phí logistics quốc gia.",
      date: "01/06/2026",
      img: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: "Thông tư 05/2026/TT-BTTTT",
      title: "Quy chuẩn kỹ thuật quốc gia về cấu trúc định danh số",
      desc: "Bộ Thông tin và Truyền thông quy định chi tiết kỹ thuật định dạng cấu trúc định danh điện tử thống nhất toàn quốc phục vụ giao dịch dịch vụ hành chính công liên thông trực tuyến.",
      date: "29/05/2026",
      img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: "Nghị định 38/2026/NĐ-CP",
      title: "Xử phạt nghiêm khắc các vi phạm tài nguyên nước",
      desc: "Nâng mức chế tài răn đe đối với hành vi xả thải chất chưa qua xử lý vào nguồn tài nguyên nước ngọt, đồng thời áp dụng hình phạt bổ sung cưỡng chế xử lý khắc phục nguồn ô nhiễm.",
      date: "26/05/2026",
      img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=80"
    }
  ];

  const showAppToast = (msg: string) => {
    setAppToast(msg);
    setTimeout(() => {
      setAppToast(null);
    }, 3500);
  };

  const handleMapImgError = () => {
    const currentIndex = MAP_MIRRORS.indexOf(mapImgSrc);
    if (currentIndex !== -1 && currentIndex < MAP_MIRRORS.length - 1) {
      setMapImgSrc(MAP_MIRRORS[currentIndex + 1]);
    }
  };
  const [isHeaderSearchOpen, setIsHeaderSearchOpen] = useState(false);
  const [headerSearchQuery, setHeaderSearchQuery] = useState("");
  const headerSearchInputRef = useRef<HTMLInputElement>(null);
  const headerSearchContainerRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<
    { role: "user" | "bot"; text: string }[]
  >([
    {
      role: "bot",
      text: "Xin chào cư dân và quý khách! Tôi là Trợ lý ảo chính thức của Tỉnh Khánh Hòa. Tôi có thể hỗ trợ bạn tra cứu các thủ tục hành chính, thông tin du lịch và các chính sách của tỉnh.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isBotLoading, setIsBotLoading] = useState(false);
  const [newsIndex, setNewsIndex] = useState(0);
  const [selectedNews, setSelectedNews] = useState<any>(null);
  const [selectedNewsDetail, setSelectedNewsDetail] = useState<any>(null);
  const [selectedLeader, setSelectedLeader] = useState<any>(() => {
    try {
      const saved = localStorage.getItem("selectedLeader");
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // ignore
    }
    return null;
  });

  useEffect(() => {
    try {
      if (selectedLeader) {
        localStorage.setItem("selectedLeader", JSON.stringify(selectedLeader));
      } else {
        localStorage.removeItem("selectedLeader");
      }
    } catch (e) {
      // ignore
    }
  }, [selectedLeader]);

  const [isCopied, setIsCopied] = useState(false);

  const [dateTimeStr, setDateTimeStr] = useState("Thứ Ba, 19/05/2026 10:28");

  const handleCategoryChange = (cat: any) => {
    setActiveCat(cat);
    setSelectedNewsDetail(null);
    setSelectedLeader(null);
    setIsSocioEconomicOpen(false);
    setIsWeeklyScheduleOpen(false);
    setIsHeaderSearchOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleOpenSchedule = () => {
      setIsWeeklyScheduleOpen(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener('openWeeklySchedule', handleOpenSchedule);
    return () => window.removeEventListener('openWeeklySchedule', handleOpenSchedule);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const days = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
      const now = new Date();
      
      const dayName = days[now.getDay()];
      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const year = now.getFullYear();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");

      setDateTimeStr(`${dayName}, ${day}/${month}/${year} ${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isHeaderSearchOpen && headerSearchInputRef.current) {
      headerSearchInputRef.current.focus();
    }
  }, [isHeaderSearchOpen]);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        headerSearchContainerRef.current &&
        !headerSearchContainerRef.current.contains(e.target as Node)
      ) {
        if (!headerSearchQuery.trim()) {
          setIsHeaderSearchOpen(false);
        }
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [headerSearchQuery]);

  const handleHeaderSearchSubmit = async () => {
    if (!headerSearchQuery.trim()) return;
    const query = headerSearchQuery.trim().toLowerCase();
    
    // Check if query matches any category
    const foundCat = CATEGORIES.find(
      (cat) =>
        cat.name.toLowerCase().includes(query) ||
        cat.title.toLowerCase().includes(query) ||
        cat.id.toLowerCase().includes(query)
    );
    
    if (foundCat) {
      setActiveCat(foundCat);
      setIsHeaderSearchOpen(false);
      setHeaderSearchQuery("");
      return;
    }
    
    // Otherwise, trigger the AI Chat Bot assistant to search for it
    setIsBotOpen(true);
    setInput(`Tìm kiếm thông tin về: "${headerSearchQuery}"`);
    setIsHeaderSearchOpen(false);
    setHeaderSearchQuery("");
    
    const searchMsg = `Tôi muốn tìm kiếm thông tin về: ${headerSearchQuery}`;
    setMessages((prev) => [...prev, { role: "user", text: searchMsg }]);
    setIsBotLoading(true);
    
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: searchMsg, history: messages }),
      });
      const data = await response.json();
      setMessages((prev) => [...prev, { role: "bot", text: data.text }]);
    } catch (error) {
      console.error("Chat error during search:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: `Đã xảy ra lỗi khi tìm kiếm "${headerSearchQuery}". Vui lòng thử lại.`,
        },
      ]);
    } finally {
      setIsBotLoading(false);
    }
  };

  const LEADERS_NEWS = [
    {
      title:
        "Chủ tịch UBND tỉnh chủ trì phiên họp rà soát quy hoạch phân khu biển",
      summary:
        "UBND tỉnh Khánh Hòa họp chỉ đạo rà soát quy hoạch chi tiết các phân khu đô thị biển tại Nha Trang và Cam Lâm, hướng tới phát triển đô thị thông minh và bảo tồn thiên nhiên biển.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
      date: "19/05/2026",
    },
    {
      title:
        "Phó Chủ tịch thường trực bàn giải pháp tháo gỡ khó khăn về cát san lấp",
      summary:
        "Chỉ đạo các đơn vị khẩn trương tháo gỡ khó khăn về nguồn vật liệu xây dựng, đẩy nhanh tiến độ thi công hạ tầng giao thông trọng điểm.",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80",
      date: "18/05/2026",
    },
    {
      title:
        "Đoàn công tác Tỉnh ủy kiểm tra nâng cao hiệu quả cải cách hành chính",
      summary:
        "Đánh giá tích cực mô hình một cửa liên thông hiện đại, tăng cường nâng cấp hạ tầng số phục vụ thủ tục công trực tuyến cho công dân.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
      date: "18/05/2026",
    },
    {
      title: "Khánh Hòa sẵn sàng chuẩn bị cho sự kiện Festival Biển Nha Trang",
      summary:
        "Hoàn thiện các phương án chi tiết về phân luồng giao thông, chỉnh trang đô thị, đảm bảo mĩ quan phục vụ chuỗi hoạt động nghệ thuật văn hóa đặc sắc.",
      image:
        "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1400&q=80",
      date: "17/05/2026",
    },
    {
      title: "Hội nghị Ban Chấp hành Đảng bộ tỉnh Khánh Hòa lần thứ 18 khóa XVIII",
      summary:
        "Tập trung thảo luận, cho ý kiến về báo cáo tình hình thực hiện nhiệm vụ phát triển kinh tế - xã hội, đầu tư công và công tác nhân sự, xây dựng Đảng.",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=80",
      date: "16/05/2026",
    },
    {
      title: "Triển khai chương trình hỗ trợ doanh nghiệp phục hồi sản xuất",
      summary:
        "Thông qua các gói ưu đãi tín dụng, giảm thuế nhằm hỗ trợ doanh nghiệp vượt qua thách thức, ổn định sản xuất và mở rộng thị trường.",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80",
      date: "15/05/2026",
    },
    {
      title: "Đẩy mạnh chuyển đổi số trong lĩnh vực y tế và chăm sóc sức khỏe",
      summary:
        "Tăng cường triển khai bệnh án điện tử, thanh toán không dùng tiền mặt và khám chữa bệnh từ xa giúp nâng cao chất lượng phục vụ nhân dân.",
      image:
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1400&q=80",
      date: "14/05/2026",
    },
  ];

  const handleSendMessage = async () => {
    if (!input.trim() || isBotLoading) return;

    const userMsg = input;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setIsBotLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg, history: messages }),
      });
      if (!response.ok) throw new Error("API route not found or failed");
      const data = await response.json();
      setMessages((prev) => [...prev, { role: "bot", text: data.text }]);
    } catch (error) {
      console.warn("Using localized smart engine fallback for chatbot:", error);
      
      // Smart local response generator
      let botResponse = "";
      const query = userMsg.toLowerCase();

      if (query.includes("thủ tục") || query.includes("hành chính") || query.includes("giấy tờ") || query.includes("căn cước") || query.includes("ccc") || query.includes("một cửa") || query.includes("dịch vụ")) {
        botResponse = `Cổng Dịch vụ hành chính công trực tuyến của tỉnh Khánh Hòa hỗ trợ người dân thực hiện nộp hồ sơ, tra cứu trạng thái giải quyết thủ tục trực tiếp thông qua chuyên mục **"Công dân"**:\n\n` +
          `1. **Cấp căn cước mẫu mới trực tuyến**: Người dân có thể đăng ký lịch đặt chỗ trực tuyến trước khi đến văn phòng một cửa.\n` +
          `2. **Nộp hồ sơ tuyển sinh lớp 10**: Nhập học số hóa thông qua học bạ điện tử liên thông.\n` +
          `3. **Gia hạn Bảo hiểm Y tế**: Thanh toán trực tuyến tích hợp cơ sở dữ liệu quốc gia về dân cư.\n` +
          `4. **Hotline Khiếu nại & Hỗ trợ khẩn cấp**: Bạn có thể gọi trực tiếp đầu số **0258 1900 111** để được hỗ trợ 24/7.`;
      } else if (query.includes("văn bản") || query.includes("quyết định") || query.includes("nghị quyết") || query.includes("tra cứu") || query.includes("pháp luật")) {
        botResponse = `Trợ lý ảo hỗ trợ tra cứu văn bản quy phạm pháp luật tỉnh Khánh Hòa nhanh chóng:\n\n` +
          `• Hiện tại, Cổng lưu trữ **12,450 văn bản Pháp quy** phục vụ doanh nghiệp & công dân.\n` +
          `• Bạn có thể truy cập Chuyên mục **"Chính quyền" > "Cổng tra cứu văn bản"**, nhập số ký hiệu (Ví dụ: \`105/2026/QĐ-UBND\`, \`43/2026/NQ-HĐND\`) để xem văn bản trực tiếp hoặc tải xuống tệp PDF gốc.\n\n` +
          `*Mẹo: Hãy nhấp vào một văn bản trong danh sách để xem nội dung điều hành mô phỏng chi tiết.*`;
      } else if (query.includes("du lịch") || query.includes("nha trang") || query.includes("biển") || query.includes("ăn gì") || query.includes("chơi gì") || query.includes("đặc sản")) {
        botResponse = `Chào mừng quý khách đến với **Nha Trang - Khánh Hòa - Hòn ngọc Biển Đông**! 🌊✨\n\n` +
          `Những gợi ý tuyệt vời dành cho bạn trong chuyên mục **"Du khách"**:\n` +
          `🏞️ **Điểm check-in nổi tiếng**: Tháp Bà Ponagar cổ kính, Đầm Nha Phu thanh bình, Hòn Chồng, Đảo Hòn Tre (VinWonders) hay lặn ngắm san hô tại khu bảo tồn biển Hòn Mun.\n` +
          `🍲 **Văn hóa ẩm thực**: Hãy thưởng thức món "Nem nướng Ninh Hòa", "Bún chả cá Nha Trang" trứ danh và hải sản tươi sống phong phú dọc bãi Dài.\n` +
          `🎁 **Đặc sản làm quà**: "Yến sào Khánh Hòa" tự nhiên quý hiếm cùng sầu riêng ri6 Khánh Sơn đặc sắc thơm ngọt.`;
      } else if (query.includes("doanh nghiệp") || query.includes("đầu tư") || query.includes("vân phong") || query.includes("kinh tế") || query.includes("fdi")) {
        botResponse = `Khánh Hòa cam kết đồng hành cùng các doanh nghiệp, cải cách thủ tục và xúc tiến đầu tư bền vững:\n\n` +
          `💼 **Đồng hành cùng Doanh nghiệp**: Cập nhật các bản tin hoạt động đồng hành cùng doanh nghiệp, tháo gỡ khó khăn trực tiếp từ ban lãnh đạo tỉnh.\n` +
          `⚓ **Đặc khu kinh tế Bắc Vân Phong**: Bệ phóng cảng biển nước sâu quốc tế, logistics hàng hải vượt trội với chính sách ưu đãi thuế thu nhập tài chính bậc nhất cả nước.\n` +
          `🏭 **Các KCN trọng điểm**: Khu công nghiệp Suối Dầu (FDI dệt may/cơ khí), Đô thị công nghiệp Diên Phú (thủy sản công nghệ cao).`;
      } else if (query.includes("trường sa") || query.includes("huyện đảo") || query.includes("quần đảo") || query.includes("chủ quyền")) {
        botResponse = `🇻🇳 **Huyện đảo Trường Sa** là một đơn vị hành chính thiêng liêng và cực kỳ quan trọng trực thuộc tỉnh Khánh Hòa!\n\n` +
          `• **Chủ quyền bất khả xâm phạm**: Là biểu trưng sừng sững của lòng yêu nước, ý chí kiên cường bảo vệ biển cảnh quốc gia của toàn thể dân tộc Việt Nam.\n` +
          `• **Đời sống phát triển**: Đảng bộ, Chính quyền Khánh Hòa luôn đồng hành, đầu tư hạ tầng dân sinh, trường học, trạm y tế, năng lượng sạch tự chủ và phủ xanh biển đảo.\n` +
          `• **Liên hệ hỗ trợ**: Tại Cổng điện tử, có các phong trào quyên góp, liên lạc thông tin Trường Sa thân yêu thường xuyên được cập nhật đầy đủ và trang trọng.`;
      } else if (query.includes("bản đồ") || query.includes("địa giới") || query.includes("huyện") || query.includes("cam ranh") || query.includes("vạn ninh") || query.includes("ninh hòa")) {
        botResponse = `Bản đồ Hành chính tỉnh Khánh Hòa bao gồm **9 đơn vị cấp huyện** (2 Thành phố, 1 Thị xã, 6 Huyện):\n\n` +
          `📍 **Phía Bắc**: Huyện Vạn Ninh, Thị xã Ninh Hòa\n` +
          `📍 **Trung tâm**: TP. Nha Trang, Huyện Diên Khánh, Huyện Cam Lâm\n` +
          `📍 **Phía Nam & Tây**: TP. Cam Ranh, Huyện miền núi Khánh Vĩnh & Khánh Sơn\n` +
          `📍 **Vùng khơi xa**: Huyện đảo Trường Sa\n\n` +
          `*Mẹo nhỏ: Bạn có thể chọn chế độ **"Bao quát"** trên thanh điều khiển Bản đồ để xem toàn bộ ranh giới, tránh bị cắt xén lề, bao gồm trọn vẹn thềm lục địa và đại dương.*`;
      } else {
        botResponse = `Cổng thông tin điện tử tỉnh Khánh Hòa xin kính chào! Tôi có thể hỗ trợ bạn trực tuyến 24/7 về các nội dung:\n\n` +
          `• 📝 **Thủ tục một cửa**: Đăng ký CCCD trực tuyến, xin học học bạ số...\n` +
          `• 📂 **Văn bản pháp luật**: Tra cứu các quyết định số hóa của UBND và HĐND Tỉnh.\n` +
          `• ⛵ **Cơ hội đầu tư**: Khu kinh tế Vân Phong, chính sách thuế, thành lập dự án.\n` +
          `• 🌊 **Cẩm nang du lịch**: Khám phá ẩm thực, bãi biển, phong cảnh Nha Trang và tình hình biển Đông, đặc biệt là huyện đảo Trường Sa.\n\n` +
          `Hãy nhập câu hỏi của bạn hoặc chọn các tab chuyên đề phía trên nhé!`;
      }

      // Add a slight typing delay simulation for realism
      await new Promise((resolve) => setTimeout(resolve, 600));
      setMessages((prev) => [...prev, { role: "bot", text: botResponse }]);
    } finally {
      setIsBotLoading(false);
    }
  };

  const MULTIMEDIA_CATEGORIES = [
    {
      id: "videos",
      label: "Video nổi bật",
      icon: <Play size={24} />,
      color: "text-red-600",
      featured: {
        title:
          "Khánh Hòa - Tầm nhìn chiến lược trở thành thành phố trực thuộc Trung ương",
        summary:
          "Định hướng phát triển và tập trung mọi nguồn lực đưa tỉnh trở thành đô thị thông minh, bền vững, là trung tâm kinh tế biển năng động lớn nhất của khu vực miền Trung.",
        image:
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=800&auto=format&fit=crop",
        date: "19/05/2026",
      },
      items: [
        {
          title:
            "Chương trình nghệ thuật đặc sắc chào mừng Festival Biển Nha Trang",
          image:
            "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=400&auto=format&fit=crop",
        },
        {
          title: "Phát triển kinh tế biển bền vững tại tỉnh Khánh Hòa",
          image:
            "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=500&q=80",
        },
        {
          title: "Tiềm năng du lịch sinh thái rừng núi Khánh Hòa",
          image:
            "https://images.unsplash.com/photo-1520262454473-a1a82276a574?q=80&w=400",
        },
      ],
    },
    {
      id: "photos",
      label: "Hình ảnh đẹp",
      icon: <ImageIcon size={24} />,
      color: "text-blue-600",
      featured: {
        title:
          "Bản sắc văn hóa các dân tộc tại Khánh Hòa qua góc nhìn nhiếp ảnh nghệ thuật",
        summary:
          "Tổng hợp những khoảnh khắc đời thường sống động, tái hiện nét đẹp văn hóa truyền thống phong phú và tinh thần gắn kết bền chặt của cộng đồng cư dân vùng biển đảo.",
        image:
          "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop",
        date: "18/05/2026",
      },
      items: [
        {
          title: "Vẻ đẹp Vịnh Nha Trang buổi bình minh",
          image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=400",
        },
        {
          title: "Lễ hội Tháp Bà Ponagar năm 2024",
          image:
            "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=400",
        },
        {
          title: "Cuộc sống ngư dân ven biển Nam Trung Bộ",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80",
        },
      ],
    },
    {
      id: "infographics",
      label: "Tin đồ họa (Infographics)",
      icon: <FileBarChart size={24} />,
      color: "text-blue-600",
      featured: {
        title:
          "Tổng quan các chỉ tiêu tăng trưởng kinh tế - xã hội Khánh Hòa Quý I năm 2026",
        summary:
          "Hệ thống hóa số liệu phát triển trực quan sinh động về tốc độ tăng GRDP, chỉ số sản xuất công nghiệp và tỉ lệ giải ngân đầu tư công của các ban quản lí dự án.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
        date: "17/05/2026",
      },
      items: [
        {
          title: "Lộ trình chuyển đổi số tỉnh Khánh Hòa đến năm 2030",
          image:
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400",
        },
        {
          title: "Quy hoạch phân khu đô thị mới Cam Lâm",
          image:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400",
        },
        {
          title: "Bản đồ đầu tư hạ tầng giao thông trọng điểm",
          image:
            "https://images.unsplash.com/photo-1545239351-ef35f43d514b?q=80&w=400",
        },
      ],
    },
    {
      id: "longforms",
      label: "Bài viết chuyên sâu (Longforms)",
      icon: <Newspaper size={24} />,
      color: "text-red-600",
      featured: {
        title:
          "Ký sự hành trình: Đánh thức tiềm năng kinh tế vùng cao phía Tây Khánh Hòa",
        summary:
          "Ghi chép chân thực về nỗ lực vượt khó vươn lên phát triển mô hình sinh kế nông nghiệp bền vững kết hợp khai thác thế mạnh du lịch homestay.",
        image:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
        date: "16/05/2026",
      },
      items: [
        {
          title: "Khánh Hòa: Khát vọng vươn mình ra biển lớn",
          image:
            "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=500&q=80",
        },
        {
          title: "Nghề làm muối truyền thống Hòn Khói",
          image:
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=500&q=80",
        },
        {
          title: "Chuyện về những người giữ rừng ở Khánh Lê",
          image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=400",
        },
      ],
    },
    {
      id: "audio",
      label: "Podcast",
      icon: <Mic size={24} />,
      color: "text-red-600",
      featured: {
        title: "Bản tin phát thanh đặc biệt Chào buổi sáng Khánh Hòa hôm nay",
        summary:
          "Điểm tin nhanh đa chiều về tình hình chính trị - xã hội trong nước, cập nhật giao thông và cảnh báo nhiệt độ, triều cường khu vực biển Nha Trang.",
        image:
          "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=800&auto=format&fit=crop",
        date: "19/05/2026",
      },
      items: [
        {
          title: "Phỏng vấn chuyên gia: Giải pháp phát triển du lịch xanh",
          image:
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400",
        },
        {
          title: "Podcast: Câu chuyện khởi nghiệp của thanh niên Khánh Hòa",
          image:
            "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=400",
        },
        {
          title: "Bản tin giao thông và thời tiết hàng ngày",
          image:
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=400",
        },
      ],
    },
  ];

  if (activeDraftFeedback) {
    return (
      <DraftFeedbackPage
        draft={activeDraftFeedback}
        onBack={() => setActiveDraftFeedback(null)}
        showAppToast={showAppToast}
        onSubmitFeedback={(comment) => {
          setAllFeedbacks(prev => ({
            ...prev,
            [activeDraftFeedback.id]: [comment, ...(prev[activeDraftFeedback.id] || [])]
          }));
        }}
      />
    );
  }

  return (
    <div className="min-h-screen font-sans text-slate-800 selection:bg-blue-100 selection:text-blue-900 relative">
      {/* Subtle Pattern Background Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${patternBg})`,
          backgroundRepeat: "repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "800px",
          opacity: 0.35, // Clearer and more visible pattern background
          zIndex: 0
        }}
      />

      <div className="relative z-10">
        {/* 1. TOP HEADER */}
      <div className="bg-white border-b border-slate-100 py-2 px-4 hidden md:block select-none text-right">
        <div className="mx-auto max-w-7xl flex justify-end items-center text-lg font-medium text-slate-500 tracking-normal gap-4">
          <div className="flex items-center gap-1.5 hover:text-blue-600 cursor-pointer transition-colors">
            <Map size={13} className="opacity-70" />
            <span>Sơ đồ website</span>
          </div>
          <span className="text-slate-300">|</span>
          <span className="cursor-pointer hover:text-blue-600 transition-colors">Русский</span>
          <span className="text-blue-700 font-bold hover:text-blue-800 cursor-pointer transition-colors">English</span>
          <span className="text-slate-300">|</span>
          <div className="flex items-center gap-1.5 hover:text-blue-600 cursor-pointer transition-colors">
            <Mail size={13} className="opacity-70" />
            <span>Hộp thư</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN BRANDING HEADER */}
      <header className="relative py-6 md:py-12 overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-4 flex flex-col lg:flex-row items-center justify-between gap-6 relative">
          <div className="flex items-center gap-4 md:gap-6 w-full lg:w-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 md:gap-6"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Emblem_of_Vietnam.svg"
                alt="Quốc huy Việt Nam"
                referrerPolicy="no-referrer"
                className="w-20 h-20 md:w-28 md:h-28 object-contain shrink-0 drop-shadow-xl"
              />
              <div className="flex flex-col text-left">
                <p className="text-[#A81E1E] text-base md:text-[20px] lg:text-[22px] font-bold tracking-[0.06em] uppercase leading-none">
                  Cổng thông tin điện tử
                </p>
                <h1 className="text-[25px] md:text-[40px] lg:text-[44px] font-black text-[#961C1C] leading-none mt-2.5 tracking-tight uppercase">
                  Tỉnh Khánh Hòa
                </h1>
                <div className="text-lg md:text-lg text-slate-500 font-semibold tracking-wide mt-3 flex items-center gap-1.5 select-none">
                  <span>{dateTimeStr}</span>
                  <span className="text-slate-300">|</span>
                  <span className="hover:text-blue-600 cursor-pointer">English</span>
                  <span className="text-slate-300">|</span>
                  <span className="hover:text-blue-600 cursor-pointer">Français</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="hidden md:block absolute right-4 top-0 bottom-0 w-[50%] lg:w-[56%] xl:w-[60%] max-w-[950px] pointer-events-none overflow-hidden">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full h-full flex items-center justify-end relative"
            >
              <img
                src={headerBanner}
                alt="Khánh Hòa Panoramic Banner"
                className="h-[175%] lg:h-[195%] xl:h-[210%] w-auto max-w-none object-contain object-right select-none transform -translate-y-3 lg:-translate-y-5"
                referrerPolicy="no-referrer"
                style={{
                  maskImage: 'linear-gradient(to right, transparent 0%, black 20%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%)'
                }}
              />
              {/* White gradient overlay to ensure a smooth transition with the background */}
              <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </header>

      {/* 4. MAIN NAVIGATION */}
      <nav className="bg-white sticky top-0 z-50 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1),_0_2px_4px_-2px_rgba(0,0,0,0.05)] border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-between">
          <ul className="flex items-center">
            <li className="p-5 md:px-7 cursor-pointer hover:bg-slate-50 transition-colors border-r border-slate-100 flex items-center text-[#1E3A8A]">
              <Globe size={22} />
            </li>
            {CATEGORIES.map((cat) => (
              <li
                key={cat.id}
                onClick={() => handleCategoryChange(cat)}
                className={`py-5 px-5 md:px-7 text-lg md:text-lg font-bold tracking-tight cursor-pointer transition-all duration-300 relative group border-r border-slate-50 uppercase ${activeCat.id === cat.id ? "text-[#1E3A8A] bg-blue-50/50" : "text-[#1E3A8A] hover:text-blue-600 hover:bg-slate-50"}`}
              >
                {cat.name}
                {activeCat.id === cat.id && (
                  <motion.div
                    layoutId="nav-line"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-[#1E3A8A]"
                  />
                )}
              </li>
            ))}
          </ul>
          <div className="hidden md:flex items-center gap-4">
          <button className="bg-[#1E3A8A] text-white px-6 py-2.5 rounded-full text-lg font-bold hover:bg-blue-700 transition-all shadow-lg flex items-center gap-2">
            <User size={16} /> Đăng nhập
          </button>
          </div>
        </div>
      </nav>

      {/* SEARCH BAR & BUTTONS ROW */}
      <div className="bg-slate-50 py-3 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 flex items-center gap-4">
          <div className="flex-1 relative flex items-center h-12 bg-white border border-slate-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
            <input
              type="text"
              placeholder="Từ khóa..."
              className="flex-1 h-full px-4 text-lg font-heading outline-none bg-transparent"
            />
            <button className="p-3 text-slate-500 hover:text-blue-600">
              <Search size={20} />
            </button>
          </div>
          <button 
            onClick={() => handleCategoryChange(GIOI_THIEU_CAT)}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1E3A8A] to-[#1e40af] text-white hover:text-[#facc15] border border-blue-500/30 hover:border-yellow-400/50 rounded-lg text-lg font-heading font-bold shadow-md hover:shadow-lg hover:shadow-yellow-500/10 hover:scale-[1.04] active:scale-95 transition-all duration-300 cursor-pointer group/intro"
          >
            <FileText size={20} className="group-hover/intro:scale-110 group-hover/intro:text-[#facc15] transition-all duration-300" /> <span>Giới thiệu về Khánh Hòa</span>
          </button>
          <button 
            onClick={() => {
              setIsSocioEconomicOpen(true);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:text-emerald-50 border border-emerald-500/30 hover:border-emerald-400/50 rounded-lg text-lg font-heading font-bold shadow-md hover:shadow-lg hover:shadow-emerald-500/20 hover:scale-[1.04] active:scale-95 transition-all duration-300 cursor-pointer group/socio"
          >
            <BarChart3 size={20} className="group-hover/socio:scale-110 transition-all duration-300" /> <span>Số liệu Kinh tế - Xã hội</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-3 bg-blue-50 text-blue-700 border border-blue-200 rounded-lg text-lg font-heading font-semibold hover:bg-blue-100 transition-all cursor-pointer hover:shadow-sm active:scale-95">
            <CloudSun size={18} /> Tỉnh Khánh Hòa ☀️ 26°C - 33°C
          </button>
        </div>
      </div>

      {/* 3. MARQUEE / THÔNG BÁO */}
      <div className="bg-[#B91C1C] text-white overflow-hidden py-4 relative z-20 shadow-xl border-y border-red-800">
        <div className="mx-auto max-w-7xl px-4 flex items-center gap-6">
          <div className="flex-1 overflow-hidden">
            <motion.div
              animate={{ x: [1000, -2000] }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="whitespace-nowrap text-lg md:text-lg font-bold font-sans tracking-wide"
            >
              <span className="text-[#FBFF00]">★</span> Chào mừng đến với Cổng thông tin điện tử tỉnh Khánh Hòa <span className="text-[#FBFF00]">★</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-[#FBFF00]">★</span> Chào mừng đến với Cổng thông tin điện tử tỉnh Khánh Hòa <span className="text-[#FBFF00]">★</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-[#FBFF00]">★</span> Chào mừng đến với Cổng thông tin điện tử tỉnh Khánh Hòa <span className="text-[#FBFF00]">★</span>
            </motion.div>
          </div>
        </div>
      </div>

      <main className="pb-20 main-content-root">
        {selectedNewsDetail ? (
          <NewsDetailPage 
            news={selectedNewsDetail} 
            onBack={() => {
              setSelectedNewsDetail(null);
              window.scrollTo({ top: 1200, behavior: "smooth" });
            }} 
          />
        ) : selectedLeader ? (
          <LeaderDetailPage 
            leader={selectedLeader} 
            onSelectLeader={(leader) => {
              setSelectedLeader(leader);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            onBack={() => {
              setSelectedLeader(null);
              // Scroll back to the leadership section
              window.scrollTo({ top: 1700, behavior: "smooth" });
            }} 
          />
        ) : isSocioEconomicOpen ? (
          <div className="max-w-7xl mx-auto px-4">
            <SocioEconomicDashboard />
          </div>
        ) : isWeeklyScheduleOpen ? (
          <WeeklySchedule onBack={() => {
            setIsWeeklyScheduleOpen(false);
            window.scrollTo({ top: 380, behavior: "smooth" });
          }} />
        ) : activeCat.id === "trang-chu" ? (
          <>
            {/* HOẠT ĐỘNG LÃNH ĐẠO TỈNH - KHUNG TRÀN MÀN HÌNH CHUYÊN NGHIỆP */}
            <section className="w-full relative overflow-hidden bg-white mt-1 border-t border-slate-200">
              {/* Bronze Drum Faded Background */}
              <div className="absolute inset-0 z-0 pointer-events-none select-none flex items-center justify-center overflow-hidden">
                <img
                  src={trongDongBg}
                  alt="Trống đồng Việt Nam"
                  className="w-[1800px] h-[1800px] max-w-none object-contain opacity-[0.25] pointer-events-none animate-spin-slow-very"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-10 relative z-10 text-left">
                {/* Unified main block connecting both columns */}
                <div className="bg-white border border-slate-200/80 rounded-[32px] p-4 md:p-6 shadow-xl shadow-slate-200/10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
                    {/* Left Column: Big Spotlight News Info */}
                    <div className="lg:col-span-7 xl:col-span-7 text-left h-full">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={newsIndex}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -15 }}
                          transition={{ duration: 0.4 }}
                          className="h-full"
                        >
                          {/* Featured news photo - now full height and highly interactive */}
                          <div 
                            onClick={() => {
                              setSelectedNewsDetail({
                                title: LEADERS_NEWS[newsIndex].title,
                                image: LEADERS_NEWS[newsIndex].image,
                                date: LEADERS_NEWS[newsIndex].date,
                                category: "Tin nổi bật Lãnh đạo",
                                content: LEADERS_NEWS[newsIndex].summary || LEADERS_NEWS[newsIndex].title
                              });
                              window.scrollTo({ top: 380, behavior: "smooth" });
                            }}
                            className="flex flex-col h-full overflow-hidden rounded-2xl border border-slate-200/60 shadow-md cursor-pointer hover:shadow-xl group/spotlight transition-all duration-500 bg-[#1E3A8A]"
                          >
                            <div className="relative w-full aspect-[4/3] overflow-hidden shrink-0">
                              <img
                                src={LEADERS_NEWS[newsIndex].image}
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover object-center group-hover/spotlight:scale-110 transition-transform duration-700"
                                alt={LEADERS_NEWS[newsIndex].title}
                              />
                              <div className="absolute top-4 left-4 z-10">
                                <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-sky-500 text-white text-base md:text-base font-black rounded-lg tracking-wider uppercase shadow-lg pointer-events-none">
                                  Tiêu điểm
                                </span>
                              </div>
                            </div>

                            <div className="flex-1 p-6 md:p-8 flex flex-col justify-center relative overflow-hidden">
                              <div className="flex items-center gap-2 mb-4">
                                <span className="flex items-center gap-1.5 text-blue-200 text-base md:text-base font-bold bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
                                  {LEADERS_NEWS[newsIndex].date}
                                </span>
                              </div>
                              <h4 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white leading-tight tracking-tight text-left group-hover/spotlight:text-sky-400 transition-colors">
                                {LEADERS_NEWS[newsIndex].title}
                              </h4>
                            </div>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Right Column: Premium Sidebar List overlay */}
                    <div className="lg:col-span-5 xl:col-span-5 flex flex-col h-full overflow-hidden">
                      {/* Header / Title */}
                      <div className="flex items-center justify-between pb-4 border-b border-slate-100 shrink-0 z-10">
                        <h3 className="text-lg md:text-xl font-black text-[#1E3A8A] tracking-tight uppercase flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-full bg-[#1E3A8A] flex items-center justify-center shrink-0 shadow-md">
                            <Users size={18} className="text-white animate-pulse" />
                          </div>
                          TIN NỔI BẬT
                        </h3>
                        <a
                          href="#"
                          className="text-base font-semibold text-slate-500 hover:text-blue-600 flex items-center gap-0.5 transition-colors whitespace-nowrap"
                        >
                          Xem tất cả <ChevronRight size={12} />
                        </a>
                      </div>
                      
                      <div className="flex-1 overflow-y-auto overflow-x-hidden py-2 flex flex-col bg-transparent [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-400 transition-colors">
                        {LEADERS_NEWS.map((item, idx) => {
                        const isActive = newsIndex === idx;
                        return (
                          <motion.div
                            key={idx}
                            onClick={() => {
                              if (isActive) {
                                setSelectedNewsDetail({
                                  title: item.title,
                                  image: item.image,
                                  date: item.date,
                                  category: "Tin nổi bật Lãnh đạo",
                                  content: item.summary || item.title
                                });
                                window.scrollTo({ top: 380, behavior: "smooth" });
                              } else {
                                setNewsIndex(idx);
                              }
                            }}
                            className={`flex shrink-0 gap-4 py-4 border-b border-slate-100 last:border-b-0 transition-all duration-300 cursor-pointer text-left group/item relative overflow-hidden ${
                              isActive ? "bg-blue-50/50 -mx-2 px-2 rounded-xl" : "hover:bg-slate-50/50 -mx-2 px-2 rounded-xl"
                            }`}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="w-20 h-16 md:w-24 md:h-20 shrink-0 rounded-lg overflow-hidden relative shadow-sm bg-slate-900">
                              <img
                                src={item.image}
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500"
                                alt={item.title}
                              />
                              {isActive && (
                                <div className="absolute inset-0 bg-blue-600/10 flex items-center justify-center">
                                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-ping" />
                                </div>
                              )}
                            </div>
                            <div className="flex-1 min-w-0 flex flex-col justify-between">
                              <h5
                                className={`text-[18px] font-semibold leading-snug line-clamp-2 transition-colors duration-200 ${
                                  isActive ? "text-[#1E3A8A]" : "text-slate-900 group-hover/item:text-blue-600"
                                }`}
                              >
                                {item.title}
                              </h5>
                              <div className="flex items-center justify-between text-base text-slate-500 font-semibold mt-1">
                                <span className="flex items-center gap-1">
                                  <Calendar size={12} /> {item.date}
                                </span>
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

            {/* DANH SÁCH LÃNH ĐẠO UBND TỈNH */}
            <section className="w-full mt-10">
              <div className="mx-auto max-w-[1440px] px-4 md:px-8 text-left">
                <div className="bg-white border border-slate-200/80 rounded-2xl p-6 md:p-10 shadow-xl shadow-slate-200/10 overflow-hidden relative group">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -mr-32 -mt-32 pointer-events-none group-hover:bg-sky-100 transition-colors duration-1000"></div>
                  
                  {/* Header */}
                  <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6 relative z-10">
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-[#1E3A8A] flex items-center justify-center shrink-0 shadow-lg shadow-blue-900/20 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                        <Users size={32} className="text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-black text-[#1E3A8A] uppercase tracking-tighter leading-none mb-2">
                          Lãnh đạo UBND Tỉnh
                        </h2>
                        <div className="flex items-center gap-2">
                          <div className="h-1 w-12 bg-sky-500 rounded-full"></div>
                          <span className="text-slate-500 font-bold text-base uppercase tracking-widest">Nhiệm kỳ 2021 - 2026</span>
                        </div>
                      </div>
                    </div>
                    
                    <button className="px-6 py-3 bg-slate-50 hover:bg-white border border-slate-200 text-[#1E3A8A] font-bold rounded-xl flex items-center gap-2 transition-all hover:shadow-md hover:border-[#1E3A8A]/30 active:scale-95">
                      <span>Xem sơ đồ tổ chức</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>

                  {/* Leadership Layout */}
                  <div className="flex flex-col gap-10 relative z-10">
                    {/* Chairman Row */}
                    <div className="flex justify-center">
                      {[
                        { role: "Chủ tịch UBND tỉnh", name: "NGUYỄN VIỆT HÙNG", img: nguyenVietHungImg, isMain: true }
                      ].map((leader) => (
                        <motion.div
                          key="chairman"
                          whileHover={{ y: -8 }}
                          className="group/card relative flex flex-col md:flex-row items-center gap-6 md:gap-12 p-6 md:p-10 rounded-2xl border transition-all duration-300 shadow-xl bg-white border-slate-200 text-[#1E3A8A] shadow-slate-200/50 max-w-3xl w-full overflow-hidden"
                        >
                          {/* Avatar Container */}
                          <div className="relative shrink-0 z-10">
                            <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-[#1E3A8A]/10 shadow-inner bg-slate-50 flex items-center justify-center z-10">
                              {/* Fallback Icon */}
                              <div className="absolute inset-0 flex items-center justify-center text-slate-200">
                                <User size={80} />
                              </div>
                              <img 
                                src={leader.img} 
                                alt={leader.name}
                                className="w-full h-full object-cover object-top group-hover/card:scale-110 transition-all duration-500 relative z-10"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <div className="absolute -inset-3 rounded-full border border-dashed border-[#1E3A8A]/20 animate-spin-slow"></div>
                            <div className="absolute -bottom-1 -right-1 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-slate-50 p-1.5 md:p-2 z-30">
                              <img src={quocHuy} alt="Quốc huy" className="w-full h-full object-contain" />
                            </div>
                          </div>

                          <div className="text-center md:text-left flex-1 z-10">
                            <h4 className="text-2xl md:text-4xl font-black leading-tight mb-2 md:mb-3 uppercase tracking-tighter text-[#1E3A8A]">
                              {leader.name}
                            </h4>
                            <p className="text-base md:text-xl font-bold tracking-tight text-black opacity-90 mb-6 md:mb-8">
                              {leader.role}
                            </p>
                            
                            <div className="pt-5 border-t border-slate-100 w-full flex justify-center md:justify-start">
                              <button 
                                onClick={() => {
                                  setSelectedLeader(leader);
                                  window.scrollTo({ top: 0, behavior: "smooth" });
                                }}
                                className="text-base md:text-base font-bold tracking-tight flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                              >
                                Trang tin chi tiết <ChevronRight size={18} />
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Vice-Chairmen Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                      {[
                        { role: "Phó Chủ tịch Thường trực", name: "NGUYỄN LONG BIÊN", img: nguyenLongBienImg },
                        { role: "Phó Chủ tịch", name: "TRẦN HÒA NAM", img: tranHoaNamImg },
                        { role: "Phó Chủ tịch", name: "TRỊNH MINH HOÀNG", img: trinhMinhHoangImg },
                        { role: "Phó Chủ tịch", name: "LÊ HUYỀN", img: leHuyenImg },
                        { role: "Phó Chủ tịch", name: "NGUYỄN THANH HÀ", img: nguyenThanhHaImg },
                      ].map((leader, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ y: -8 }}
                          className="group/card relative flex flex-col items-center p-5 rounded-2xl border border-slate-100 bg-white hover:border-blue-200 hover:shadow-lg text-slate-900 transition-all duration-300 shadow-sm"
                        >
                          <div className="relative mb-4">
                            <div className="relative w-24 h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-4 border-slate-50 shadow-inner bg-slate-100 flex items-center justify-center">
                              {/* Fallback Icon */}
                              <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                                <User size={48} />
                              </div>
                              <img 
                                src={leader.img} 
                                alt={leader.name}
                                className="w-full h-full object-cover object-top grayscale-[0.2] group-hover/card:grayscale-0 group-hover/card:scale-110 transition-all duration-500 relative z-10"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-20"></div>
                            </div>
                            <div className="absolute -inset-2 rounded-full border border-dashed border-slate-200 opacity-0 group-hover/card:opacity-100 group-hover/card:rotate-90 transition-all duration-700"></div>
                            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center border-2 border-slate-50 p-1 z-30">
                              <img src={quocHuy} alt="Quốc huy" className="w-full h-full object-contain" />
                            </div>
                          </div>

                          <div className="text-center w-full px-1">
                            <h4 className="text-base lg:text-lg font-black leading-none mb-1 uppercase tracking-tighter text-[#1E3A8A]">
                              {leader.name}
                            </h4>
                            <p className="text-base lg:text-base font-bold tracking-tighter leading-tight text-slate-900">
                              {leader.role}
                            </p>
                          </div>
                          
                          <div className="mt-4 pt-4 border-t border-slate-100 w-full flex justify-center transition-all">
                            <button 
                              onClick={() => {
                                setSelectedLeader(leader);
                                window.scrollTo({ top: 0, behavior: "smooth" });
                              }}
                              className="text-base font-bold tracking-tight flex items-center gap-1.5 text-blue-600 hover:text-blue-800 transition-colors"
                            >
                              Trang tin chi tiết <ChevronRight size={12} />
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 6.5. THÔNG TIN ĐA PHƯƠNG TIỆN */}
            <section className="w-full mt-10">
              <div className="mx-auto max-w-[1440px] px-4 md:px-8 text-left">
              <MultimediaSection />
              </div>
            </section>

        <section className="w-full mt-10 relative overflow-hidden">
          <div className="mx-auto max-w-[1440px] px-4 md:px-8 text-left relative z-10">
            <div className="bg-white border border-slate-200/80 rounded-[32px] p-6 md:p-8 shadow-sm shadow-slate-100/10 mb-10">
              {/* Header inside the box */}
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-200/60">
                <h3 className="text-2xl md:text-3xl font-black text-[#1E3A8A] uppercase tracking-tight flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1E3A8A] flex items-center justify-center shrink-0 shadow-md shadow-blue-900/10">
                    <Landmark size={24} className="text-white" />
                  </div>
                  <span>Thông tin chỉ đạo & điều hành</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-left">
            {[
              {
                label: "Chính phủ, Thủ tướng",
                icon: <Globe size={20} />,
                color: "bg-blue-50 text-blue-600",
                news: [
                  {
                    title:
                      "Thủ tướng chủ trì Hội nghị trực tuyến toàn quốc tham vấn các nhà khoa học",
                    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=300&auto=format&fit=crop",
                  },
                  {
                    title:
                      "Phê duyệt Đề án cơ cấu lại hệ thống các tổ chức tín dụng gắn với xử lý nợ xấu",
                    img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=300&auto=format&fit=crop",
                  },
                  {
                    title:
                      "Tăng cường công tác quản lý nhà nước về khoa học, công nghệ",
                    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=300&auto=format&fit=crop",
                  },
                  {
                    title:
                      "Chương trình đổi mới công nghệ quốc gia đến năm 2030 được phê duyệt",
                    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=300&auto=format&fit=crop",
                  },
                  {
                    title:
                      "Ban hành Kế hoạch hành động quốc gia về phát triển kinh tế số và xã hội số",
                    img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=300&auto=format&fit=crop",
                  },
                  {
                    title:
                      "Thủ tướng ký quyết định thành lập Hội đồng Y khoa Quốc gia nhiệm kỳ mới",
                    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=300&auto=format&fit=crop",
                  },
                  {
                    title:
                      "Đẩy mạnh chuyển đổi số quốc gia và xây dựng chính phủ điện tử thông minh",
                    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=300&auto=format&fit=crop",
                  },
                  {
                    title:
                      "Phê duyệt kế hoạch hành động quốc gia ứng phó với biến đổi khí hậu",
                    img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=300&auto=format&fit=crop",
                  },
                  {
                    title:
                      "Chỉ đạo tháo gỡ khó khăn thúc đẩy thị trường bất động sản phát triển an toàn",
                    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=300&auto=format&fit=crop",
                  },
                ],
              },
              {
                label: "Thông tin chỉ đạo điều hành",
                icon: <CheckCircle2 size={20} />,
                color: "bg-red-50 text-red-600",
                news: [
                  {
                    title:
                      "Quyết định ban hành Quy chế làm việc mẫu của UBND cấp tỉnh",
                    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=300&auto=format&fit=crop",
                  },
                  {
                    title:
                      "Công điện về việc tập trung ứng phó, khắc phục hậu quả thiên tai",
                    img: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?q=80&w=300&auto=format&fit=crop",
                  },
                  {
                    title:
                      "Văn bản chỉ đạo về việc tăng cường kiểm soát tải trọng phương tiện",
                    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=300&auto=format&fit=crop",
                  },
                  {
                    title:
                      "Kế hoạch triển khai Tháng hành động vì an toàn thực phẩm",
                    img: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=300&auto=format&fit=crop",
                  },
                ],
              },
              {
                label: "Hoạt động sở ngành, địa phương",
                icon: <LayoutGrid size={20} />,
                color: "bg-blue-50 text-blue-600",
                news: [
                  {
                    title:
                      "Sở GTVT thông báo về việc phân luồng giao thông phục vụ thi công",
                    img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=300&auto=format&fit=crop",
                  },
                  {
                    title:
                      "UBND tỉnh đánh giá tình hình thực hiện kế hoạch đầu tư công",
                    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=300&auto=format&fit=crop",
                  },
                  {
                    title:
                      "Sở Y tế triển khai chiến dịch tiêm chủng mẫu mở rộng",
                    img: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=300&auto=format&fit=crop",
                  },
                  {
                    title:
                      "Đoàn thanh tra kiểm tra công tác bảo vệ môi trường tại KCN",
                    img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=300&auto=format&fit=crop",
                  },
                ],
              },
              {
                label: "Chính sách mới cập nhật",
                icon: <Activity size={20} />,
                color: "bg-red-50 text-red-600",
                news: [
                  {
                    title:
                      "Cập nhật các quy định mới về quản lý, sử dụng tài sản công",
                    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=300&auto=format&fit=crop",
                  },
                  {
                    title:
                      "Thông tư hướng dẫn về vị trí việc làm và định mức biên chế",
                    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=300&auto=format&fit=crop",
                  },
                  {
                    title:
                      "Nghị định sửa đổi về kinh doanh và điều kiện kinh doanh",
                    img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=300&auto=format&fit=crop",
                  },
                  {
                    title:
                      "Quy định về việc đăng ký xe cơ giới theo mã định danh",
                    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=300&auto=format&fit=crop",
                  },
                ],
              },
            ].map((item, idx) => {
              const isPriority0 = idx === 0;
              const isPriority1 = idx === 1;
              const isPriority2 = idx === 2; // blue
              const isPriority3 = idx === 3; // green

              // Define dynamic styles based on index
              const cardStyles = "bg-transparent border-transparent hover:bg-slate-50/50 shadow-none";

              const badgeText = isPriority0
                ? "Ưu tiên cao"
                : isPriority1
                  ? "Cấp cao"
                  : isPriority2
                    ? "Địa phương"
                    : "Chính sách";

              const badgeBg = isPriority0
                ? "bg-red-600"
                : isPriority1
                  ? "bg-red-500"
                  : isPriority2
                    ? "bg-[#1E3A8A]"
                    : "bg-blue-600";

              const iconBg = isPriority0
                ? "bg-red-600 text-white shadow-lg shadow-red-600/20"
                : isPriority1
                  ? "bg-red-500 text-white shadow-lg shadow-red-500/20"
                  : isPriority2
                    ? "bg-[#1E3A8A] text-white shadow-lg shadow-blue-600/20"
                    : "bg-blue-600 text-white shadow-lg shadow-blue-600/20";

              const titleColor = "text-[#1E3A8A]";

              const subLabelText = isPriority0
                ? "Thông tấn quốc gia trọng điểm"
                : isPriority1
                  ? "Chỉ đạo điều hành địa phương"
                  : isPriority2
                    ? "Hoạt động sở ban ngành & địa phương"
                    : "Tin tức chính sách mới ban hành";

              const subLabelColor = isPriority0
                ? "text-red-600"
                : isPriority1
                  ? "text-red-600"
                  : isPriority2
                    ? "text-blue-600"
                    : "text-blue-600";

              const imgBorderStyles = "border-slate-100";

              const hoverTextStyles = isPriority0
                ? "text-slate-700 group-hover/news:text-red-700"
                : isPriority1
                  ? "text-slate-700 group-hover/news:text-red-800"
                  : isPriority2
                    ? "text-[#1E3A8A] group-hover/news:text-blue-700"
                    : "text-slate-700 group-hover/news:text-blue-800";

              const footerLinkColor = isPriority0
                ? "text-blue-600 hover:text-blue-800"
                : isPriority1
                  ? "text-blue-600 hover:text-blue-800"
                  : isPriority2
                    ? "text-blue-600 hover:text-blue-700"
                    : "text-blue-600 hover:text-[#1E3A8A]";

              const footerBtnStyles = "border-slate-200 text-slate-500 hover:bg-slate-50";

              return (
                <React.Fragment key={idx}>
                  <div
                    className={`flex flex-col gap-4 p-4 md:p-5 rounded-2xl border transition-all duration-300 relative overflow-visible ${cardStyles} lg:col-span-1`}
                  >
                      <div className="text-left">
                        <span
                          className={`text-2xl md:text-[25px] font-black tracking-tight leading-tight text-left block uppercase ${titleColor}`}
                        >
                          {item.label}
                        </span>
                      </div>

                    <div className="text-left space-y-2 flex-1">
                      {item.news.slice(0, 4).map((newsItem, nIdx) => (
                        <div
                          key={nIdx}
                          onClick={() => {
                            setSelectedNewsDetail({
                              title: newsItem.title,
                              image: newsItem.img || "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=800",
                              date: "19/05/2026",
                              category: item.label,
                              content: `Bản tin chính thức về "${newsItem.title}" ban hành ngày 19/05/2026 bởi cơ quan có thẩm quyền tỉnh Khánh Hòa. 

Để đáp ứng kịp thời các mục tiêu phát triển kinh tế - xã hội, các ban ngành có liên quan đã khẩn trương phối hợp xây dựng kế hoạch chi tiết, huy động tối đa các nguồn lực tài chính, kỹ thuật, con người để đưa chương trình đi vào chiều sâu, mang lại lợi ích thiết thực cho doanh nghiệp và nhân dân trên địa bàn tỉnh Khánh Hòa. Mọi kế hoạch giám sát được thực thi nghiêm túc.`
                            });
                            window.scrollTo({ top: 380, behavior: "smooth" });
                          }}
                          className="flex gap-3 group/news text-left items-start cursor-pointer hover:bg-slate-50/70 p-1.5 -mx-1.5 rounded-xl transition-all border border-transparent hover:border-slate-100"
                        >
                          <div
                            className={`w-[80px] h-[56px] sm:w-[90px] sm:h-[62px] md:w-[100px] md:h-[68px] rounded-xl overflow-hidden shrink-0 shadow-sm border ${imgBorderStyles}`}
                          >
                            <img
                              src={newsItem.img}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover group-hover/news:scale-110 transition-transform duration-500"
                              alt={newsItem.title}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p
                              className="text-[18px] font-bold line-clamp-3 leading-snug text-left text-black transition-colors duration-200 group-hover/news:text-blue-600"
                            >
                              {newsItem.title}
                            </p>
                            <span className="text-base text-black font-normal block mt-1 flex items-center gap-1">
                              <Calendar size={11} className="text-black" /> 19/05/2026
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div 
                      onClick={() => {
                        const firstNews = item.news[0];
                        setSelectedNewsDetail({
                          title: firstNews.title,
                          image: firstNews.img || "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=800",
                          date: "19/05/2026",
                          category: item.label
                        });
                        window.scrollTo({ top: 380, behavior: "smooth" });
                      }}
                      className="mt-auto pt-4 flex items-center justify-between text-lg md:text-lg font-black text-slate-500 hover:text-[#1E3A8A] transition-colors cursor-pointer border-t border-slate-100"
                    >
                      <span className={`font-bold ${footerLinkColor}`}>
                        Xem toàn bộ danh mục →
                      </span>
                      <div
                        className={`w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm border ${footerBtnStyles}`}
                      >
                        <ChevronRight size={20} />
                      </div>
                    </div>
                  </div>
                  {idx === 1 && (
                    <div className="col-span-full border-t border-slate-200/80 my-6"></div>
                  )}
                </React.Fragment>
              );
            })}
              </div>
            </div>

          {/* ROW 2: TIN TỨC TRỌNG TÂM */}
          <div className="bg-white border border-slate-200/80 rounded-[32px] p-6 md:p-8 shadow-sm shadow-slate-100/10 mt-0 text-left">
            {/* Header inside the box */}
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-200/60">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1E3A8A] flex items-center justify-center shrink-0 shadow-md shadow-blue-900/10">
                  <Newspaper size={24} className="text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-[#1E3A8A] uppercase tracking-tight leading-none text-left">
                  Tin tức trọng tâm
                </h3>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-left">
              {FOCUS_NEWS_CATEGORIES.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setActiveFocusNewsIndex(activeFocusNewsIndex === idx ? null : idx)}
                  className={`relative h-56 rounded-2xl overflow-hidden group cursor-pointer shadow-lg text-left transition-all ${activeFocusNewsIndex === idx ? "ring-4 ring-blue-600 ring-offset-2" : ""}`}
                >
                  <img
                    src={item.img}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                    alt={item.label}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A] via-transparent to-transparent group-hover:from-[#1E3A8A]/90 transition-all flex flex-col justify-end p-6 pb-2 md:p-8 md:pb-3 text-left">
                    <div className="flex items-center justify-between w-full">
                      <h4 className="text-white font-black tracking-tight text-xl leading-none drop-shadow group-hover:text-yellow-300 transition-colors uppercase text-left">
                        {item.label}
                      </h4>
                      <motion.div
                        animate={{
                          y: [0, 4, 0],
                          rotate: activeFocusNewsIndex === idx ? 180 : 0
                        }}
                        transition={{
                          y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
                          rotate: { duration: 0.3 }
                        }}
                        className="relative flex items-center justify-center text-white/60 group-hover:text-yellow-300 transition-colors duration-300"
                      >
                        {item.hasNewUpdates && (
                          <div className="absolute -top-1.5 flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                          </div>
                        )}
                        <ChevronDown size={24} />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <AnimatePresence>
              {activeFocusNewsIndex !== null && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
                >
                  <div className="flex items-center justify-between mb-6 border-b border-slate-200 pb-4">
                    <h4 className="text-xl font-bold text-[#1E3A8A] uppercase">
                      {FOCUS_NEWS_CATEGORIES[activeFocusNewsIndex].label} - Cập nhật mới nhất
                    </h4>
                    <button className="flex items-center gap-1 text-lg font-medium text-slate-500 hover:text-yellow-600 transition-colors group">
                      Xem tất cả <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
                    {FOCUS_NEWS_CATEGORIES[activeFocusNewsIndex].articles.map((article, i) => (
                      <li 
                        key={i} 
                        onClick={() => {
                          setSelectedNews({
                            title: article.title,
                            image: article.img,
                            date: "06/07/2026",
                            summary: `Bản tin công bố chính thức về nội dung "${article.title}" nhằm cập nhật kịp thời các thông tin thiết thực nhất đối với từng nhóm đối tượng cụ thể (Công dân, Doanh nghiệp, Du khách) trên địa bàn tỉnh Khánh Hòa.`,
                            content: `Bản tin công bố chính thức về nội dung "${article.title}" nhằm cập nhật kịp thời các thông tin thiết thực nhất đối với từng nhóm đối tượng cụ thể (Công dân, Doanh nghiệp, Du khách) trên địa bàn tỉnh Khánh Hòa. 

Để đáp ứng tối đa quyền tiếp cận thông tin công khai, minh bạch của người dân và tổ chức, tỉnh liên tục số hóa cơ sở dữ liệu quốc gia về hành chính công và tích hợp các kênh truyền thông chính thống một cách đồng bộ.`
                          });
                        }}
                        className="flex items-start gap-4 text-slate-700 hover:text-[#1E3A8A] cursor-pointer transition-all py-3.5 border-b border-slate-200/60"
                      >
                        <img src={article.img} alt={article.title} className="w-28 h-20 md:w-32 md:h-24 object-cover rounded-xl shadow-sm border border-slate-100 shrink-0" />
                        <div className="flex flex-col text-left justify-center min-w-0">
                          <span className="font-bold text-lg md:text-xl text-[#1e3a8a] leading-tight line-clamp-2 group-hover:text-yellow-600 transition-colors">{article.title}</span>
                          <span className="text-sm md:text-base text-slate-500 mt-2 flex items-center gap-1 font-bold uppercase opacity-70"><Calendar size={12} /> 06/07/2026</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* MID-PAGE ADVERTISING/PROMOTIONAL BANNER */}
      <PromoBanners />

      {/* ROW 3: HỆ THỐNG VĂN BẢN (Đồng bộ hoàn toàn với Trang Công dân) */}
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 w-full mt-10 flex flex-col gap-10 text-left">
        {/* Hệ thống văn bản chỉ đạo điều hành & Dự thảo ý kiến */}
        <DocumentSystemPortal />
        
        {/* Hệ thống văn bản quy phạm pháp luật (QPPL) tra cứu */}
        <LegalDocumentsPortal />
      </div>

      {/* OLD SECTION HIDDEN */}
      {false && (
        <section className="w-full mt-14 pt-6 pb-10">
          <div className="mx-auto max-w-7xl px-4 text-left">
            <div className="space-y-8 text-left">
            <div className="flex items-center justify-between pb-3 mb-10">
              <h3 className="text-2xl md:text-3xl font-black text-[#1E3A8A] uppercase tracking-tight flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-full bg-[#1E3A8A] flex items-center justify-center shrink-0 shadow-md shadow-blue-900/10">
                  <FileText size={24} className="text-white" />
                </div>
                <span>Hệ thống văn bản QPPL</span>
              </h3>
            </div>
            <div className="flex flex-col gap-8 items-stretch">
              <div className="bg-white border border-slate-200/80 p-6 rounded-[32px] text-slate-800 hover:shadow-xl hover:border-blue-600/30 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group flex flex-col">
                {/* Background deco */}
                <div className="absolute right-0 bottom-0 text-slate-100 opacity-30 -mb-20 -mr-20 pointer-events-none select-none">
                  <FileText size={400} />
                </div>
 
                <div className="flex flex-col gap-6 relative z-10">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6">
                    <div className="flex items-center gap-4 text-left">
                      <div className="text-left">
                        <h4 className="text-2xl font-black leading-tight text-left text-[#1E3A8A] whitespace-nowrap">
                          Văn bản chỉ đạo điều hành của tỉnh
                        </h4>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-2">
                      {[
                        { label: "Văn bản mới cập nhật" },
                        { label: "Công báo Khánh Hòa" },
                        { label: "Thông báo chính thức" },
                      ].map((item, idx) => {
                        const isSelected = selectedDocCategory === item.label;
                        return (
                          <button
                            key={idx}
                            onClick={() => {
                              setSelectedDocCategory(item.label);
                              setHomeDocPage(1);
                            }}
                            className={`px-4 py-2 rounded-xl text-lg font-bold transition-all duration-300 ${isSelected ? 'bg-[#1E3A8A] text-white shadow-md' : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100'}`}
                          >
                            {item.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div className="flex flex-col text-left transition-all duration-300">
                    <div className="w-full overflow-x-auto border border-slate-200/80 rounded-2xl shadow-sm bg-white max-h-[850px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 pr-1">
                      <table className="w-full text-left border-collapse min-w-[700px]">
                        <thead className="sticky top-0 z-10 bg-[#1E3A8A]">
                          <tr className="text-white font-bold text-lg">
                            <th className="py-4 px-4 font-black w-[20%] text-left text-[20px]">Số ký hiệu</th>
                            <th className="py-4 px-4 font-black w-[15%] text-left text-[20px]">Ngày ban hành</th>
                            <th className="py-4 px-4 font-black w-[50%] text-left text-[20px]">Trích yếu</th>
                            <th className="py-4 px-4 font-black w-[15%] text-left text-[20px] text-center">Tài liệu / Xác thực</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {(() => {
                            const currentDocs = DOC_DATA[selectedDocCategory] || [];
                            if (currentDocs.length === 0) return null;
                            const totalDocs = 40;
                            const generatedDocs = Array.from({ length: totalDocs }).map((_, dIdx) => {
                              const doc = currentDocs[dIdx % currentDocs.length];
                              const numPart = parseInt(doc.id);
                              const suffixPart = doc.id.split('/')[1] || 'QĐ-UBND';
                              const displayId = dIdx < currentDocs.length ? doc.id : (
                                numPart 
                                  ? `${numPart + dIdx}/${suffixPart}`
                                  : `${doc.id.split('/')[0]}-${dIdx}/${suffixPart}`
                              );
                              return {
                                ...doc,
                                id: displayId,
                                agency: dIdx % 3 === 0 ? "UBND Tỉnh" : (dIdx % 3 === 1 ? "Sở Xây dựng" : "Sở Tài nguyên và Môi trường")
                              };
                            });
                            
                            const itemsPerPage = 10;
                            const totalPages = Math.ceil(generatedDocs.length / itemsPerPage) || 1;
                            const paginatedDocs = generatedDocs.slice(
                              (homeDocPage - 1) * itemsPerPage,
                              homeDocPage * itemsPerPage
                            );

                            return paginatedDocs.map((doc, dIdx) => {
                              return (
                                <tr 
                                  key={dIdx} 
                                  className="hover:bg-slate-50/85 transition-colors duration-150 group/row"
                                >
                                  <td className="py-4 px-4 align-top">
                                    <span className="text-[20px] font-bold text-blue-600 hover:text-blue-800 hover:underline">
                                      {doc.id}
                                    </span>
                                    <div className="text-slate-400 font-bold text-base uppercase tracking-wider mt-1.5 flex items-center gap-1">
                                      <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md text-base font-extrabold uppercase">
                                        {doc.agency}
                                      </span>
                                    </div>
                                  </td>
                                  <td className="py-4 px-4 text-[18px] text-slate-500 font-medium align-top">
                                    {doc.date}
                                  </td>
                                  <td className="py-4 px-4 text-[18px] text-slate-800 font-medium leading-relaxed align-top">
                                    <div>{doc.title}</div>
                                    <div className="text-emerald-600 font-bold text-base mt-1.5 flex items-center gap-1">
                                      <span>● Có hiệu lực từ: {doc.date}</span>
                                    </div>
                                  </td>
                                  <td className="py-4 px-4 align-top">
                                    <div className="flex flex-col gap-2 items-center justify-center">
                                      <div className="flex items-center gap-1.5 w-full justify-center">
                                        <button 
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            showAppToast(`Đang tải xuống tệp tin bản vẽ dấu điện tử PDF: ${doc.id}`);
                                          }}
                                          className="flex items-center gap-1 justify-center bg-red-50 hover:bg-red-100 border border-red-200 text-red-600 font-bold text-base px-2.5 py-1 rounded shadow-sm transition-all"
                                          title="Tải về định dạng PDF"
                                        >
                                          <span className="text-base">PDF</span>
                                          <Download size={12} />
                                        </button>

                                        <button 
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            showAppToast(`Đang tải xuống bản nháp mềm DOCX: ${doc.id}`);
                                          }}
                                          className="flex items-center gap-1 justify-center bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-600 font-bold text-base px-2.5 py-1 rounded shadow-sm transition-all"
                                          title="Tải về định dạng DOCX"
                                        >
                                          <span className="text-base">DOC</span>
                                          <Download size={12} />
                                        </button>
                                      </div>

                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setHomeSelectedQrDoc(doc);
                                        }}
                                        className="flex items-center gap-1.5 justify-center bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-200 text-slate-600 hover:text-emerald-700 font-bold text-base px-3 py-1.5 rounded-full transition-all w-full cursor-pointer"
                                      >
                                        <QrCode size={13} className="text-slate-400 group-hover/row:text-emerald-500" />
                                        <span>Mã QR</span>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              );
                            });
                          })()}
                        </tbody>
                      </table>
                    </div>

                    {/* Pagination controls for homepage */}
                    {(() => {
                      const currentDocs = DOC_DATA[selectedDocCategory] || [];
                      if (currentDocs.length === 0) return null;
                      const totalDocs = 40;
                      const itemsPerPage = 10;
                      const totalPages = Math.ceil(totalDocs / itemsPerPage) || 1;
                      return (
                        <div className="pt-6 pb-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 mt-4">
                          <span className="text-slate-500 font-bold text-[16px]">
                            Hiển thị <span className="text-[#1E3A8A]">{Math.min((homeDocPage - 1) * itemsPerPage + 1, totalDocs)}</span> - <span className="text-[#1E3A8A]">{Math.min(homeDocPage * itemsPerPage, totalDocs)}</span> trong tổng số <span className="text-[#1E3A8A] font-extrabold">{totalDocs}</span> văn bản
                          </span>

                          <div className="flex items-center gap-1.5">
                            {/* Previous button */}
                            <button
                              onClick={() => setHomeDocPage(prev => Math.max(prev - 1, 1))}
                              disabled={homeDocPage === 1}
                              className="px-3 py-2 border border-slate-200 rounded-xl font-bold text-base text-slate-600 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white transition-all flex items-center gap-1 cursor-pointer"
                            >
                              <ChevronLeft size={16} />
                              <span>Trước</span>
                            </button>

                            {/* Page Numbers */}
                            {Array.from({ length: totalPages }).map((_, idx) => {
                              const pageNum = idx + 1;
                              const isActive = homeDocPage === pageNum;
                              return (
                                <button
                                  key={pageNum}
                                  onClick={() => setHomeDocPage(pageNum)}
                                  className={`w-10 h-10 rounded-xl font-bold text-base transition-all cursor-pointer flex items-center justify-center border ${
                                    isActive
                                      ? "bg-[#1E3A8A] border-[#1E3A8A] text-white shadow-md shadow-blue-900/10"
                                      : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                                  }`}
                                >
                                  {pageNum}
                                </button>
                              );
                            })}

                            {/* Next button */}
                            <button
                              onClick={() => setHomeDocPage(prev => Math.min(prev + 1, totalPages))}
                              disabled={homeDocPage === totalPages}
                              className="px-3 py-2 border border-slate-200 rounded-xl font-bold text-base text-slate-600 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white transition-all flex items-center gap-1 cursor-pointer"
                            >
                              <span>Sau</span>
                              <ChevronRight size={16} />
                            </button>
                          </div>
                        </div>
                      );
                    })()}
                    
                    <button 
                      onClick={() => {
                        const sysCat = CATEGORIES.find(c => c.id === "van-ban-phap-luat");
                        if (sysCat) {
                          handleCategoryChange(sysCat);
                        } else {
                          showAppToast("Liên kết đến Cổng văn bản QPPL toàn hệ thống...");
                        }
                      }}
                      className="mt-6 w-full md:w-auto self-center md:px-12 py-3.5 bg-[#1E3A8A] hover:bg-[#152C69] text-white rounded-2xl font-black text-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20"
                    >
                      Truy cập Cổng văn bản chính thức ➜
                    </button>
                  </div>
                </div>
              </div>

              {/* Layout hai cột: cột lớn Lấy ý kiến & cột nhỏ Banner/CSDL Quốc gia */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:items-stretch items-start w-full mt-6">
                {/* Cột lớn: Lấy ý kiến dự thảo VB QPPL */}
                <div className="lg:col-span-2 flex flex-col h-full">
                  <div className="bg-white border border-slate-200/80 rounded-[32px] p-6 md:p-8 pb-4 md:pb-5 hover:shadow-xl hover:border-[#1E3A8A]/30 hover:-translate-y-1 flex flex-col justify-between transition-all duration-300 flex-1 h-full">
                    <div className="flex flex-col h-full flex-1 justify-between">
                      <div className="flex flex-col h-full flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                          <h4 className="text-2xl font-black leading-tight text-left text-[#1E3A8A]">
                            Lấy ý kiến dự thảo văn bản quy phạm pháp luật
                          </h4>
                        </div>
                        
                        <p className="text-slate-600 text-lg md:text-lg font-medium mb-4">
                          Hệ thống tham vấn, tiếp thu và giải trình ý kiến đóng góp của người dân, tổ chức đối với các dự thảo văn bản quy phạm pháp luật tỉnh Khánh Hòa soạn thảo.
                        </p>

                        {/* Thanh lọc trạng thái dự thảo */}
                        <div className="flex flex-wrap gap-2 mb-4 justify-start">
                          <button
                            onClick={() => setDraftFilter("all")}
                            className={`px-4 py-2 rounded-xl text-lg font-black transition-all ${
                              draftFilter === "all"
                                ? "bg-[#1E3A8A] text-white shadow-md shadow-blue-900/10"
                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                            }`}
                          >
                            📁 Tất cả dự thảo ({(DOC_DATA["Lấy ý kiến dự thảo VB QPPL"] || []).length})
                          </button>
                          <button
                            onClick={() => setDraftFilter("active")}
                            className={`px-4 py-2 rounded-xl text-lg font-black transition-all flex items-center gap-1.5 ${
                              draftFilter === "active"
                                ? "bg-emerald-600 text-white shadow-md shadow-emerald-950/10"
                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                            }`}
                          >
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            <CheckCircle2 size={16} /> Đang lấy ý kiến ({
                              (DOC_DATA["Lấy ý kiến dự thảo VB QPPL"] || []).filter(d => {
                                const [day, month, year] = d.date.split("/").map(Number);
                                const expiryDate = new Date(year, month - 1, day);
                                const currentDate = new Date(2026, 5, 28); // June 28, 2026
                                return expiryDate >= currentDate;
                              }).length
                            })
                          </button>
                          <button
                            onClick={() => setDraftFilter("expired")}
                            className={`px-4 py-2 rounded-xl text-lg font-black transition-all flex items-center gap-1.5 ${
                              draftFilter === "expired"
                                ? "bg-amber-600 text-white shadow-md shadow-amber-950/10"
                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                            }`}
                          >
                            ⏳ Dự thảo hết hạn góp ý ({
                              (DOC_DATA["Lấy ý kiến dự thảo VB QPPL"] || []).filter(d => {
                                const [day, month, year] = d.date.split("/").map(Number);
                                const expiryDate = new Date(year, month - 1, day);
                                const currentDate = new Date(2026, 5, 28); // June 28, 2026
                                return expiryDate < currentDate;
                              }).length
                            })
                          </button>
                        </div>
                        
                        {/* Thanh tìm kiếm dự thảo */}
                        <div className="relative mb-4 w-full">
                          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                          <input
                            type="text"
                            placeholder="Tìm kiếm nhanh tên dự thảo..."
                            value={draftSearchQuery}
                            onChange={(e) => setDraftSearchQuery(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl pl-10 pr-10 py-2.5 text-lg md:text-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/80 font-bold placeholder-slate-400 transition-all shadow-inner"
                          />
                          {draftSearchQuery && (
                            <button 
                              onClick={() => setDraftSearchQuery("")}
                              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 font-extrabold"
                            >
                              <X size={16} />
                            </button>
                          )}
                        </div>
                        
                        {/* Danh sách dự thảo có cuộn */}
                        <div className="space-y-4 overflow-y-auto max-h-[1050px] lg:max-h-[1190px] flex-grow flex-1 pr-2 scrollbar-thin scrollbar-thumb-slate-200 hover:scrollbar-thumb-slate-300 transition-colors">
                          {(() => {
                            const allDrafts = DOC_DATA["Lấy ý kiến dự thảo VB QPPL"] || [];
                            
                            const isDraftExpired = (dateStr: string) => {
                              const [day, month, year] = dateStr.split("/").map(Number);
                              const expiryDate = new Date(year, month - 1, day);
                              const currentDate = new Date(2026, 5, 28); // June 28, 2026
                              return expiryDate < currentDate;
                            };

                            const searched = allDrafts.filter(d => 
                              d.title.toLowerCase().includes(draftSearchQuery.toLowerCase()) || 
                              d.id.toLowerCase().includes(draftSearchQuery.toLowerCase()) || 
                              d.desc.toLowerCase().includes(draftSearchQuery.toLowerCase())
                            );
                            
                            const filtered = searched.filter(d => {
                              const expired = isDraftExpired(d.date);
                              if (draftFilter === "active") return !expired;
                              if (draftFilter === "expired") return expired;
                              return true;
                            });

                            const handleDownloadDraft = (draft: any) => {
                              showAppToast(`Đang kết nối để tải xuống tài liệu dự thảo...`);
                              const textContent = `DỰ THẢO VĂN BẢN QUY PHẠM PHÁP LUẬT TỈNH KHÁNH HÒA\n\nKý hiệu tham khảo: ${draft.id}\nHạn đóng góp ý kiến: ${draft.date}\n\nTiêu đề:\n${draft.title}\n\nNội dung chi tiết dự thảo sơ thảo:\n${draft.desc}\n\n---\nCổng thông tin tiếp nhận ý kiến đóng góp trực tuyến tỉnh Khánh Hòa.\nCảm ơn bạn đã đồng hành đóng góp ý kiến xây dựng pháp luật địa phương!`;
                              const blob = new Blob([textContent], { type: "text/plain;charset=utf-8" });
                              const url = URL.createObjectURL(blob);
                              const element = document.createElement("a");
                              element.href = url;
                              element.download = `Du_thao_Luat_${draft.id.replace(/\//g, "_")}.txt`;
                              document.body.appendChild(element);
                              element.click();
                              document.body.removeChild(element);
                              URL.revokeObjectURL(url);
                              showAppToast(`Đã tải xuống file dự thảo ${draft.id} thành công!`);
                            };
                            
                            if (filtered.length > 0) {
                              return filtered.map((draft) => {
                                const comments = allFeedbacks[draft.id] || [];
                                const commentsExpanded = !!expandedDraftComments[draft.id];
                                const expired = isDraftExpired(draft.date);

                                return (
                                  <div 
                                    key={draft.id} 
                                    className="bg-white border border-slate-100 rounded-2xl p-3.5 md:p-4 shadow-sm hover:shadow-md hover:border-[#1E3A8A]/30 transition-all duration-300"
                                  >
                                    <div className="flex items-center justify-between gap-2 mb-2">
                                      {/* Trạng thái hết hạn hay hoạt động */}
                                      {expired ? (
                                        <span className="text-lg md:text-lg bg-amber-50 text-amber-700 font-extrabold px-2.5 py-1 rounded-lg border border-amber-100 flex items-center gap-1 animate-pulse">
                                          <Clock size={16} /> Hết hạn góp ý
                                        </span>
                                      ) : (
                                        <span className="text-lg md:text-lg bg-emerald-50 text-emerald-700 font-extrabold px-2.5 py-1 rounded-lg border border-emerald-100 flex items-center gap-1">
                                          <CheckCircle2 size={16} /> Đang lấy ý kiến
                                        </span>
                                      )}
                                      
                                      <span className="text-lg text-black font-normal flex items-center gap-1">
                                        <Calendar size={12} className="text-black shrink-0" />
                                        Hạn góp ý: {draft.date}
                                      </span>
                                    </div>
                                    
                                    <h4 className="text-lg md:text-lg font-black text-slate-800 hover:text-[#1E3A8A] transition-colors leading-snug mb-1.5 text-left">
                                      {draft.title}
                                    </h4>
                                    
                                    <p className="text-lg text-slate-500 font-medium mb-3 text-left leading-relaxed">
                                      {draft.desc}
                                    </p>

                                    {/* Các nút hành động */}
                                    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-50 pt-3">
                                      <div className="flex flex-wrap gap-2">
                                        {/* Nút tải file */}
                                        <button
                                          onClick={() => handleDownloadDraft(draft)}
                                          className="text-lg font-bold px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-[#1E3A8A] border border-slate-200 transition-all flex items-center gap-1 shadow-sm"
                                        >
                                          📥 Tải file
                                        </button>
                                        
                                        {/* Nút xem các góp ý */}
                                        <button
                                          onClick={() => {
                                            setExpandedDraftComments(prev => ({
                                              ...prev,
                                              [draft.id]: !prev[draft.id]
                                            }));
                                          }}
                                          className={`text-lg font-bold px-3 py-1.5 rounded-xl border transition-all flex items-center gap-1 shadow-sm ${
                                            commentsExpanded
                                              ? "bg-red-50 text-red-700 border-red-200"
                                              : "bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200"
                                          }`}
                                        >
                                          💬 Xem góp ý ({comments.length})
                                        </button>

                                        {/* Nút dự thảo hết hạn góp ý */}
                                        {expired && (
                                          <button
                                            disabled
                                            className="text-lg font-bold px-3 py-1.5 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 cursor-not-allowed flex items-center gap-1 shadow-sm"
                                          >
                                            ⏳ Dự thảo hết hạn góp ý
                                          </button>
                                        )}
                                      </div>

                                      {/* Giữ nguyên nút góp ý dự thảo */}
                                      <button
                                        onClick={() => setActiveDraftFeedback(draft)}
                                        className="text-lg font-black px-4 py-1.5 rounded-xl transition-all shadow-sm bg-[#1E3A8A] text-white hover:bg-red-400 hover:text-[#1E3A8A]"
                                      >
                                        📝 Góp ý dự thảo
                                      </button>
                                    </div>

                                    {/* Panel danh sách góp ý mở rộng */}
                                    {commentsExpanded && (
                                      <div className="mt-4 pt-4 border-t border-slate-100 text-left">
                                        <h5 className="text-lg font-extrabold text-[#1E3A8A] uppercase tracking-wider mb-2.5 flex items-center gap-1">
                                          💬 Ý kiến đóng góp đã tiếp nhận ({comments.length})
                                        </h5>
                                        {comments.length > 0 ? (
                                          <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                                            {comments.map((comment, cIdx) => (
                                              <div key={cIdx} className="p-3 bg-slate-50/80 rounded-xl border border-slate-100">
                                                <div className="flex items-center justify-between gap-2 mb-1">
                                                  <span className="text-lg font-black text-slate-700">{comment.name}</span>
                                                  <span className="text-lg text-slate-400 font-medium">{comment.date}</span>
                                                </div>
                                                <p className="text-lg text-slate-600 italic">
                                                  "{comment.content}"
                                                </p>
                                              </div>
                                            ))}
                                          </div>
                                        ) : (
                                          <div className="p-4 bg-slate-50 text-center rounded-xl border border-dashed border-slate-200 text-lg text-slate-400 font-bold">
                                            Chưa có ý kiến góp ý nào cho dự thảo này. Hãy là người đầu tiên gửi ý kiến của bạn!
                                          </div>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                );
                              });
                            } else {
                              return (
                                <div className="bg-white rounded-2xl p-10 border border-slate-100 text-center text-slate-400 text-lg md:text-lg font-bold flex flex-col items-center justify-center gap-2">
                                  <span>🔍</span> Không tìm thấy kết quả phù hợp cho "{draftSearchQuery}"
                                </div>
                              );
                            }
                          })()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cột nhỏ: Banners quảng cáo & Cơ sở dữ liệu quốc gia */}
                <div className="flex flex-col gap-4 lg:gap-5 w-full h-full justify-between">
                  {/* Banner Quảng cáo 1: Phổ biến Giáo dục Pháp luật */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -3 }}
                    onClick={() => showAppToast("Đang mở Cổng thông tin tuyên truyền Phổ biến Giáo dục Pháp luật...")}
                    className="relative flex-1 min-h-[110px] xl:min-h-[120px] rounded-[24px] overflow-hidden group cursor-pointer border border-slate-200/80 hover:border-amber-600/30 hover:shadow-xl transition-all duration-300 w-full"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80"
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                      alt="Phổ biến Pháp luật"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-600/90 to-transparent group-hover:from-amber-500/90 group-hover:to-transparent transition-all duration-500"></div>
                    <div className="relative h-full px-7 flex items-center justify-between gap-4 text-white text-left">
                      <div className="flex-1">
                        <h5 className="text-xl md:text-2xl uppercase font-black tracking-tight leading-snug text-white group-hover:text-yellow-300 transition-colors">
                          Phổ biến Giáo dục <span className="whitespace-nowrap">Pháp luật</span>
                        </h5>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0 backdrop-blur-md group-hover:bg-white group-hover:text-amber-950 transition-all self-center">
                        <ChevronRight size={20} />
                      </div>
                    </div>
                  </motion.div>

                  {/* Banner Quảng cáo 2: AI Pháp luật */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -3 }}
                    onClick={() => showAppToast("Đang mở Trợ lý AI pháp luật - Cổng Pháp luật Quốc gia...")}
                    className="relative flex-1 min-h-[110px] xl:min-h-[120px] rounded-[24px] overflow-hidden group cursor-pointer border border-slate-200/80 hover:border-indigo-600/30 hover:shadow-xl transition-all duration-300 w-full"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80"
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                      alt="AI pháp luật"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/95 to-transparent group-hover:from-indigo-900/90 group-hover:to-transparent transition-all duration-500"></div>
                    <div className="relative h-full px-7 flex items-center justify-between gap-4 text-white text-left">
                      <div className="flex-1">
                        <h5 className="text-xl md:text-2xl uppercase font-black tracking-tight leading-snug text-white group-hover:text-yellow-300 transition-colors">
                          AI Pháp luật - <span className="whitespace-nowrap">Cổng quốc gia</span>
                        </h5>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0 backdrop-blur-md group-hover:bg-white group-hover:text-indigo-950 transition-all self-center">
                        <ChevronRight size={20} />
                      </div>
                    </div>
                  </motion.div>

                  {/* Banner Quảng cáo 3: Điện hạt nhân Ninh Thuận */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -3 }}
                    onClick={() => showAppToast("Đang kết nối Cổng thông tin dự án Điện hạt nhân Ninh Thuận...")}
                    className="relative flex-1 min-h-[110px] xl:min-h-[120px] rounded-[24px] overflow-hidden group cursor-pointer border border-slate-200/80 hover:border-emerald-600/30 hover:shadow-xl transition-all duration-300 w-full"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80"
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                      alt="Điện hạt nhân Ninh Thuận"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 to-transparent group-hover:from-emerald-900/90 group-hover:to-transparent transition-all duration-500"></div>
                    <div className="relative h-full px-7 flex items-center justify-between gap-4 text-white text-left">
                      <div className="flex-1">
                        <h5 className="text-xl md:text-2xl uppercase font-black tracking-tight leading-snug text-white group-hover:text-yellow-300 transition-colors">
                          Điện hạt nhân <span className="whitespace-nowrap">Ninh Thuận</span>
                        </h5>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0 backdrop-blur-md group-hover:bg-white group-hover:text-emerald-950 transition-all self-center">
                        <ChevronRight size={20} />
                      </div>
                    </div>
                  </motion.div>

                  {/* Banner Quảng cáo 4: Bản đồ số 65 xã phường */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -3 }}
                    onClick={() => showAppToast("Đang kết nối hệ thống Bản đồ số 65 xã, phường, đặc khu...")}
                    className="relative flex-1 min-h-[110px] xl:min-h-[120px] rounded-[24px] overflow-hidden group cursor-pointer border border-slate-200/80 hover:border-sky-600/30 hover:shadow-xl transition-all duration-300 w-full"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                      alt="Bản đồ số 65 xã"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-950/95 to-transparent group-hover:from-sky-900/90 group-hover:to-transparent transition-all duration-500"></div>
                    <div className="relative h-full px-7 flex items-center justify-between gap-4 text-white text-left">
                      <div className="flex-1">
                        <h5 className="text-xl md:text-2xl uppercase font-black tracking-tight leading-snug text-white group-hover:text-yellow-300 transition-colors">
                          Bản đồ số 65 Xã, Phường, <span className="whitespace-nowrap">Đặc khu</span>
                        </h5>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0 backdrop-blur-md group-hover:bg-white group-hover:text-sky-950 transition-all self-center">
                        <ChevronRight size={20} />
                      </div>
                    </div>
                  </motion.div>

                  {/* Banner 5: Tra cứu giá đất */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -3 }}
                    onClick={() => showAppToast("Đang kết nối hệ thống Tra cứu giá đất trực tuyến...")}
                    className="relative flex-1 min-h-[110px] xl:min-h-[120px] rounded-[24px] overflow-hidden group cursor-pointer border border-slate-200/80 hover:border-cyan-600/30 hover:shadow-xl transition-all duration-300 w-full"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80"
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                      alt="Tra cứu giá đất"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent group-hover:from-blue-850/90 group-hover:to-transparent transition-all duration-500"></div>
                    <div className="relative h-full px-7 flex items-center justify-between gap-4 text-white text-left">
                      <div className="flex-1">
                        <h5 className="text-xl md:text-2xl uppercase font-black tracking-tight leading-snug text-white group-hover:text-yellow-300 transition-colors">
                          Tra cứu giá đất <span className="whitespace-nowrap">trực tuyến</span>
                        </h5>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0 backdrop-blur-md group-hover:bg-white group-hover:text-blue-950 transition-all self-center">
                        <ChevronRight size={20} />
                      </div>
                    </div>
                  </motion.div>

                  {/* Banner 6: Công khai ngân sách */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -3 }}
                    onClick={() => showAppToast("Đang kết nối Cổng công khai ngân sách nhà nước...")}
                    className="relative flex-1 min-h-[110px] xl:min-h-[120px] rounded-[24px] overflow-hidden group cursor-pointer border border-slate-200/80 hover:border-red-600/30 hover:shadow-xl transition-all duration-300 w-full"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                      alt="Công khai ngân sách"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-red-950/90 to-transparent group-hover:from-red-900/90 group-hover:to-transparent transition-all duration-500"></div>
                    <div className="relative h-full px-7 flex items-center justify-between gap-4 text-white text-left">
                      <div className="flex-1">
                        <h5 className="text-xl md:text-2xl uppercase font-black tracking-tight leading-snug text-white group-hover:text-yellow-300 transition-colors">
                          Công khai Ngân sách <span className="whitespace-nowrap">Nhà nước</span>
                        </h5>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0 backdrop-blur-md group-hover:bg-white group-hover:text-red-950 transition-all self-center">
                        <ChevronRight size={20} />
                      </div>
                    </div>
                  </motion.div>

                  {/* Banner 7: Cổng Dịch vụ công trực tuyến */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -3 }}
                    onClick={() => showAppToast("Đang kết nối Cổng Dịch vụ công trực tuyến...")}
                    className="relative flex-1 min-h-[110px] xl:min-h-[120px] rounded-[24px] overflow-hidden group cursor-pointer border border-slate-200/80 hover:border-teal-600/30 hover:shadow-xl transition-all duration-300 w-full"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80"
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                      alt="Dịch vụ công"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-950/90 to-transparent group-hover:from-teal-900/90 group-hover:to-transparent transition-all duration-500"></div>
                    <div className="relative h-full px-7 flex items-center justify-between gap-4 text-white text-left">
                      <div className="flex-1">
                        <h5 className="text-xl md:text-2xl uppercase font-black tracking-tight leading-snug text-white group-hover:text-yellow-300 transition-colors">
                          Cổng Dịch vụ công <span className="whitespace-nowrap">trực tuyến</span>
                        </h5>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0 backdrop-blur-md group-hover:bg-white group-hover:text-teal-950 transition-all self-center">
                        <ChevronRight size={20} />
                      </div>
                    </div>
                  </motion.div>

                  {/* Banner 8: Du lịch Nha Trang - Khánh Hòa */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -3 }}
                    onClick={() => showAppToast("Đang kết nối Cổng thông tin xúc tiến Du lịch Nha Trang - Khánh Hòa...")}
                    className="relative flex-1 min-h-[110px] xl:min-h-[120px] rounded-[24px] overflow-hidden group cursor-pointer border border-slate-200/80 hover:border-cyan-600/30 hover:shadow-xl transition-all duration-300 w-full"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                      alt="Du lịch Nha Trang"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/90 to-transparent group-hover:from-cyan-900/90 group-hover:to-transparent transition-all duration-500"></div>
                    <div className="relative h-full px-7 flex items-center justify-between gap-4 text-white text-left">
                      <div className="flex-1">
                        <h5 className="text-xl md:text-2xl uppercase font-black tracking-tight leading-snug text-white group-hover:text-yellow-300 transition-colors">
                          Du lịch Nha Trang - <span className="whitespace-nowrap">Khánh Hòa</span>
                        </h5>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0 backdrop-blur-md group-hover:bg-white group-hover:text-cyan-950 transition-all self-center">
                        <ChevronRight size={20} />
                      </div>
                    </div>
                  </motion.div>

                  {/* Banner 9: Cơ sở dữ liệu quốc gia */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -3 }}
                    onClick={() => {
                      showAppToast("Đang kết nối đến cổng Cơ sở dữ liệu văn bản quy phạm pháp luật Quốc gia...");
                    }}
                    className="relative flex-1 min-h-[110px] xl:min-h-[120px] rounded-[24px] overflow-hidden group cursor-pointer border border-slate-200/80 hover:border-blue-600/30 hover:shadow-xl transition-all duration-300 w-full"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80"
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                      alt="Cơ sở dữ liệu Quốc gia"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-transparent group-hover:from-blue-900/90 group-hover:to-transparent transition-all duration-500"></div>
                    <div className="relative h-full px-7 flex items-center justify-between gap-4 text-white text-left">
                      <div className="flex-1">
                        <h5 className="text-xl md:text-2xl uppercase font-black tracking-tight leading-snug text-white group-hover:text-yellow-300 transition-colors">
                          Cơ sở dữ liệu <span className="whitespace-nowrap">Quốc gia</span>
                        </h5>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0 backdrop-blur-md group-hover:bg-white group-hover:text-blue-950 transition-all self-center">
                        <ChevronRight size={20} />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
    )}

        {/* 8. TERTIARY ACCESS BLOCK (3 Khối) */}
        <section className="w-full mt-10">
          <div className="mx-auto max-w-[1440px] px-4 md:px-8 text-left mb-10">
          <div className="bg-white p-8 rounded-[32px] border border-slate-200/80 shadow-sm shadow-slate-100/40 grid grid-cols-1 lg:grid-cols-3 gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-50/30 rounded-full blur-3xl -mr-32 -mt-32"></div>

            {/* CỘT 1: THÔNG TIN CÔNG KHAI */}
            <div className="text-left flex flex-col">
              <h4 className="text-xl font-black uppercase text-[#1E3A8A] mb-4 pb-2 border-b border-slate-100 flex items-center gap-2 text-left">
                <Database size={20} className="text-red-600" /> Thông tin công khai
              </h4>
              <div className="h-[460px] overflow-y-auto pr-2 custom-scrollbar-light text-left space-y-2.5">
                {[
                  { label: "Công khai ngân sách", icon: <DollarSign size={16} /> },
                  { label: "Đấu thầu mua sắm công", icon: <Coins size={16} /> },
                  { label: "Thông tin dự án đầu tư", icon: <TrendingUp size={16} /> },
                  { label: "Báo cáo kinh tế xã hội", icon: <FileBarChart size={16} /> },
                  { label: "Chương trình - Đề tài", icon: <Award size={16} /> },
                  { label: "Quy hoạch - Kế hoạch", icon: <Map size={16} /> },
                  { label: "Kho bạc nhà nước", icon: <Landmark size={16} /> },
                ].map((item) => (
                  <div
                    key={item.label}
                    onClick={() => showAppToast(`Đang truy xuất thông tin về: ${item.label}`)}
                    className="flex items-center gap-3 py-3 px-4 bg-[#f8fafc] hover:bg-[#fff5f5] border border-slate-200/60 hover:border-red-200/80 rounded-xl transition-all cursor-pointer group text-left relative overflow-hidden"
                  >
                    <div className="w-[34px] h-[34px] relative rounded-full shadow-sm bg-white overflow-hidden flex items-center justify-center shrink-0 ring-[1.5px] ring-inset ring-[#0b3c7b]">
                      <span className="z-10 relative text-[#b32b2b] translate-y-[-1px] group-hover:scale-105 group-hover:text-red-700 transition-all">{item.icon}</span>
                      <div className="absolute bottom-[-20%] left-[-10%] right-[-10%] h-[60%] pointer-events-none text-[#0b3c7b]">
                        <svg viewBox="0 0 100 50" overflow="visible" preserveAspectRatio="none" className="w-full h-full transition-transform duration-500 group-hover:-translate-y-1.5" fill="none">
                            <path d="M 0 15 Q 25 0 50 15 T 100 15 L 100 150 L 0 150 Z" fill="currentColor" />
                            <path d="M 0 21 Q 25 6 50 21 T 100 21 L 100 150 L 0 150 Z" fill="#ffffff" />
                            <path d="M 0 26 Q 25 11 50 26 T 100 26 L 100 150 L 0 150 Z" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-lg font-bold text-slate-700 group-hover:text-red-700 text-left leading-normal flex-1">
                      {item.label}
                    </span>
                    <ExternalLink
                      size={12}
                      className="ml-auto opacity-0 group-hover:opacity-100 text-red-600 shrink-0 z-10 transition-all duration-300 transform translate-x-1 group-hover:translate-x-0"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* CỘT 2: THÔNG TIN TUYÊN TRUYỀN */}
            <div className="text-left flex flex-col">
              <h4 className="text-xl font-black uppercase text-[#1E3A8A] mb-4 pb-2 border-b border-slate-100 flex items-center gap-2 text-left">
                <Megaphone size={20} className="text-red-600" /> Thông tin tuyên truyền
              </h4>
              <div className="h-[460px] overflow-y-auto pr-2 custom-scrollbar-light text-left space-y-2.5">
                {[
                  { label: "Phổ biến pháp luật", icon: <Gavel size={16} /> },
                  { label: "Cải cách hành chính - CĐS", icon: <Cpu size={16} /> },
                  { label: "Chính sách thuế", icon: <Percent size={16} /> },
                  { label: "Thi đua, khen thưởng", icon: <Trophy size={16} /> },
                  { label: "Phòng, chống tham nhũng", icon: <ShieldCheck size={16} /> },
                  { label: "An toàn giao thông", icon: <ShieldAlert size={16} /> },
                ].map((item) => (
                  <div
                    key={item.label}
                    onClick={() => showAppToast(`Đang truy xuất thông tin về: ${item.label}`)}
                    className="flex items-center gap-3 py-3 px-4 bg-[#f8fafc] hover:bg-[#fff5f5] border border-slate-200/60 hover:border-red-200/80 rounded-xl transition-all cursor-pointer group text-left relative overflow-hidden"
                  >
                    <div className="w-[34px] h-[34px] relative rounded-full shadow-sm bg-white overflow-hidden flex items-center justify-center shrink-0 ring-[1.5px] ring-inset ring-[#0b3c7b]">
                      <span className="z-10 relative text-[#1E3A8A] translate-y-[-1px] group-hover:scale-105 group-hover:text-red-700 transition-all">{item.icon}</span>
                      <div className="absolute bottom-[-20%] left-[-10%] right-[-10%] h-[60%] pointer-events-none text-[#0b3c7b]">
                        <svg viewBox="0 0 100 50" overflow="visible" preserveAspectRatio="none" className="w-full h-full transition-transform duration-500 group-hover:-translate-y-1.5" fill="none">
                            <path d="M 0 15 Q 25 0 50 15 T 100 15 L 100 150 L 0 150 Z" fill="currentColor" />
                            <path d="M 0 21 Q 25 6 50 21 T 100 21 L 100 150 L 0 150 Z" fill="#ffffff" />
                            <path d="M 0 26 Q 25 11 50 26 T 100 26 L 100 150 L 0 150 Z" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-lg font-bold text-slate-700 group-hover:text-red-700 text-left leading-normal flex-1">
                      {item.label}
                    </span>
                    <ExternalLink
                      size={12}
                      className="ml-auto opacity-0 group-hover:opacity-100 text-red-600 shrink-0 z-10 transition-all duration-300 transform translate-x-1 group-hover:translate-x-0"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* CỘT 3: THÔNG TIN TRA CỨU */}
            <div className="text-left flex flex-col">
              <h4 className="text-xl font-black uppercase text-[#1E3A8A] mb-4 pb-2 border-b border-slate-100 flex items-center gap-2 text-left">
                <Search size={20} className="text-red-600" /> Thông tin tra cứu
              </h4>
              <div className="h-[460px] overflow-y-auto pr-2 custom-scrollbar-light text-left space-y-2.5">
                {[
                  { label: "Người phát ngôn", icon: <Mic size={16} /> },
                  { label: "Danh bạ điện thoại", icon: <Phone size={16} /> },
                  { label: "Thông tin báo chí", icon: <Newspaper size={16} /> },
                  { label: "Thông tin doanh nghiệp", icon: <Building2 size={16} /> },
                  { label: "Thông tin tuyển dụng", icon: <UserPlus size={16} /> },
                  { label: "Thông tin du lịch", icon: <MapPin size={16} /> },
                  { label: "Lịch làm việc Ủy ban", icon: <Calendar size={16} /> },
                  { label: "Lịch tiếp dân", icon: <Users size={16} /> },
                  { label: "Lịch ngừng cấp điện", icon: <ZapOff size={16} /> },
                  { label: "Tra cứu BHXH", icon: <HeartHandshake size={16} /> },
                  { label: "Giá thị trường", icon: <Tag size={16} /> },
                  { label: "Bảng giá đất", icon: <Database size={16} /> },
                  { label: "Bản đồ số", icon: <Globe size={16} /> },
                  { label: "Thông tin thời tiết", icon: <CloudSun size={16} /> },
                  { label: "Đường dây nóng", icon: <PhoneCall size={16} /> },
                  { label: "Hỏi đáp", icon: <HelpCircle size={16} /> },
                ].map((item) => (
                  <div
                    key={item.label}
                    onClick={() => showAppToast(`Đang truy xuất thông tin về: ${item.label}`)}
                    className="flex items-center gap-3 py-3 px-4 bg-[#f8fafc] hover:bg-[#fff5f5] border border-slate-200/60 hover:border-red-200/80 rounded-xl transition-all cursor-pointer group/item text-left relative overflow-hidden"
                  >
                    <div className="w-[34px] h-[34px] relative rounded-full shadow-sm bg-white overflow-hidden flex items-center justify-center shrink-0 ring-[1.5px] ring-inset ring-[#0b3c7b]">
                      <span className="z-10 relative text-red-600 translate-y-[-1px] group-hover/item:scale-105 group-hover/item:text-red-700 transition-all">{item.icon}</span>
                      <div className="absolute bottom-[-20%] left-[-10%] right-[-10%] h-[60%] pointer-events-none text-[#0b3c7b]">
                        <svg viewBox="0 0 100 50" overflow="visible" preserveAspectRatio="none" className="w-full h-full transition-transform duration-500 group-hover/item:-translate-y-1.5" fill="none">
                            <path d="M 0 15 Q 25 0 50 15 T 100 15 L 100 150 L 0 150 Z" fill="currentColor" />
                            <path d="M 0 21 Q 25 6 50 21 T 100 21 L 100 150 L 0 150 Z" fill="#ffffff" />
                            <path d="M 0 26 Q 25 11 50 26 T 100 26 L 100 150 L 0 150 Z" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-lg font-bold text-slate-700 group-hover/item:text-red-700 text-left leading-normal flex-1">
                      {item.label}
                    </span>
                    <ExternalLink
                      size={12}
                      className="ml-auto opacity-0 group-hover/item:opacity-100 text-red-600 shrink-0 z-10 transition-all duration-300 transform translate-x-1 group-hover/item:translate-x-0"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>
        </section>

        <SharedBottomSections onMapClick={() => setIsMapModalOpen(true)} hideMap={true} />
        </>
        ) : (
          <CategoryPortal 
            cat={activeCat} 
            onMapClick={() => setIsMapModalOpen(true)} 
            onLeaderClick={(leader) => {
              setSelectedLeader(leader);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        )}
      </main>

      {/* 11. FLOATING BOT BUTTON */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-center gap-3">
        {/* Chat Bot Dialog - positioned absolutely above the buttons to preserve vertical alignment */}
        <AnimatePresence>
          {isBotOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="absolute bottom-20 right-0 bg-white w-[calc(100vw-32px)] sm:w-[380px] h-[600px] rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden z-[110]"
            >
              <div className="bg-[#1E3A8A] p-6 flex items-center justify-between text-white shadow-lg relative overflow-hidden shrink-0">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10"></div>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="bg-white p-1 rounded-2xl ring-4 ring-white/20 shadow-xl w-12 h-12 flex items-center justify-center overflow-hidden">
                    <img src={logoKH} alt="Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg tracking-tight">
                      Trợ lý ảo
                    </h3>
                    <p className="text-lg font-bold text-white/60">
                      Trực tuyến 24/7
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsBotOpen(false)}
                  className="relative z-10 p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 bg-slate-50 p-6 space-y-5 overflow-y-auto custom-scrollbar">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm overflow-hidden ${msg.role === "user" ? "bg-red-600 text-white" : "bg-white border border-slate-100"}`}
                    >
                      {msg.role === "user" ? (
                        <User size={14} />
                      ) : (
                        <img src={logoKH} alt="Bot" className="w-full h-full object-contain p-1" />
                      )}
                    </div>
                    <div
                      className={`p-4 rounded-3xl shadow-sm text-lg border border-slate-100 flex flex-col gap-2 max-w-[85%] ${msg.role === "user" ? "bg-[#1E3A8A] text-white rounded-tr-none" : "bg-white rounded-tl-none"}`}
                    >
                      <p className="leading-relaxed whitespace-pre-wrap">
                        {msg.text}
                      </p>
                      {msg.role === "bot" && idx === 0 && (
                        <ul className="grid grid-cols-1 gap-1.5 mt-2">
                          {[
                            "Thủ tục hành chính",
                            "Tra cứu văn bản pháp luật",
                            "Thông tin du lịch Nha Trang",
                            "Hỗ trợ doanh nghiệp",
                          ].map((tag) => (
                            <li
                              key={tag}
                              onClick={() => {
                                setInput(tag);
                              }}
                              className="bg-slate-50 p-2 rounded-xl border border-slate-100 hover:border-red-600 hover:bg-red-50 cursor-pointer transition-all text-[#1E3A8A] font-bold"
                            >
                              # {tag}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
                {isBotLoading && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-white border border-slate-100 rounded-full flex items-center justify-center shrink-0 shadow-sm animate-bounce overflow-hidden">
                      <img src={logoKH} alt="Bot" className="w-full h-full object-contain p-1" />
                    </div>
                    <div className="bg-white p-4 rounded-3xl rounded-tl-none shadow-sm text-lg border border-slate-100 italic text-slate-400 text-left">
                      Đang suy nghĩ...
                    </div>
                  </div>
                )}
              </div>

              <div className="p-5 bg-white border-t border-slate-50 flex gap-2 shrink-0">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Nhập yêu cầu của bạn tại đây..."
                  className="flex-1 bg-slate-100 border-none rounded-2xl px-5 text-lg focus:ring-2 focus:ring-[#1E3A8A] transition-all font-medium py-4"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isBotLoading}
                  className="bg-red-600 text-white p-4 rounded-2xl hover:bg-[#1E3A8A] transition-all shadow-lg hover:translate-y-[-2px] disabled:opacity-50 disabled:translate-y-0"
                >
                  <Send size={20} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Back to top button positioned directly on top of the chatbot button in the column */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -6, 0] // Gentle floating effect
              }}
              whileHover={{ 
                scale: 1.18, 
                backgroundColor: "#EF4444", 
                boxShadow: "0px 0px 20px rgba(239, 68, 68, 0.6)" 
              }}
              whileTap={{ scale: 0.9 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{
                y: {
                  repeat: Infinity,
                  duration: 2.2,
                  ease: "easeInOut"
                },
                opacity: { duration: 0.2 },
                scale: { duration: 0.2 },
                backgroundColor: { duration: 0.2 },
                boxShadow: { duration: 0.2 }
              }}
              onClick={scrollToTop}
              className="p-3 bg-[#1E3A8A] text-white rounded-full shadow-2xl border border-white/20 cursor-pointer transition-colors duration-200"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Chatbot trigger button - slightly larger as requested */}
        <motion.button
          whileHover={{ 
            scale: 1.15,
            rotate: [0, -8, 8, -8, 0],
            boxShadow: isBotOpen 
              ? "0px 0px 25px rgba(220, 38, 38, 0.7)" 
              : "0px 0px 25px rgba(30, 58, 138, 0.7)"
          }}
          whileTap={{ scale: 0.95 }}
          transition={{
            rotate: { duration: 0.5, ease: "easeInOut" },
            scale: { duration: 0.2 },
            boxShadow: { duration: 0.2 }
          }}
          onClick={() => setIsBotOpen(!isBotOpen)}
          className={`w-16 h-16 rounded-full flex items-center justify-center shadow-[0_15px_35px_rgba(30,58,138,0.25)] transition-all duration-500 border-4 border-white shrink-0 cursor-pointer ${isBotOpen ? "bg-red-600 animate-none" : "bg-[#1E3A8A]"}`}
        >
          {isBotOpen ? (
            <X size={26} className="text-white" />
          ) : (
            <img 
              src={logoKH} 
              alt="Trợ lý virtual" 
              className="w-11 h-11 object-contain relative z-10 p-0.5 rounded-full" 
            />
          )}
        </motion.button>
      </div>

      {/* DETAILED NEWS MODAL */}
      <AnimatePresence>
        {selectedNews && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[210] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative border border-slate-100 flex flex-col max-h-[90vh]"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedNews(null)}
                className="absolute top-4 right-4 z-10 bg-black/55 hover:bg-black/75 text-white rounded-full p-2.5 transition-all shadow-lg backdrop-blur-sm cursor-pointer"
                title="Đóng chi tiết"
              >
                <X size={18} />
              </button>

              {/* Banner/Header image */}
              <div className="relative w-full h-56 sm:h-72 overflow-hidden shrink-0">
                <img
                  src={selectedNews.image}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  alt={selectedNews.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent p-6 flex flex-col justify-end">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-600 text-white text-lg font-black rounded-md tracking-wider uppercase shadow-md w-fit mb-2">
                    Tin nổi bật • Khánh Hòa
                  </span>
                  <div className="flex items-center gap-3 text-lg text-white/90 font-medium tracking-wider">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} className="text-red-400" /> {selectedNews.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <User size={12} className="text-red-400" /> Ban biên tập Cổng TTĐT
                    </span>
                  </div>
                </div>
              </div>

              {/* Content body with custom scrollbar */}
              <div className="p-6 overflow-y-auto text-left space-y-4">
                <h3 className="text-lg sm:text-xl font-black text-[#1E3A8A] leading-snug tracking-tight">
                  {selectedNews.title}
                </h3>
                
                <div className="w-16 h-1 bg-red-600 rounded-full" />

                {/* Sub-headline/summary with light grey quote background */}
                <div className="bg-slate-50 border-l-4 border-red-600 p-4 rounded-r-xl">
                  <p className="text-lg sm:text-lg font-semibold text-slate-700 leading-relaxed italic">
                    "{selectedNews.summary || selectedNews.title}"
                  </p>
                </div>

                {/* Simulated detailed report based on title */}
                <div className="text-lg sm:text-lg text-slate-600 leading-relaxed space-y-3.5 font-medium">
                  {selectedNews.content ? (
                    selectedNews.content.split("\n\n").map((para: string, pIdx: number) => (
                      <p key={pIdx}>
                        {pIdx === 0 && <strong>Khánh Hòa (TTXVN) — </strong>}
                        {para}
                      </p>
                    ))
                  ) : (
                    <>
                      <p>
                        <strong>Khánh Hòa (TTXVN)</strong> — Triển khai thực hiện các mục tiêu chiến lược phát triển bền vững, tỉnh Khánh Hòa tiếp tục đẩy mạnh các hoạt động giám sát, đôn đốc tháo gỡ kịp thời các khó khăn thực tiễn nhằm tối ưu hóa nguồn lực công, phục vụ đời sống dân sinh xã hội.
                      </p>
                      <p>
                        Đại diện lãnh đạo tỉnh cho biết, việc đổi mới phương thức truyền thông, công khai minh bạch thông tin chỉ đạo và điều hành thông qua Cổng thông tin điện tử tỉnh là một bước tiến quan trọng, tăng cường tính tương tác, tiếp thu ý kiến nhân dân, kiến tạo bộ máy chính quyền thân thiện, hoạt động hiệu quả.
                      </p>
                      <p>
                        Trong thời gian tới, các sở, ban, ngành liên quan trên địa bàn tỉnh Khánh Hòa sẽ tiếp tục phối hợp đồng bộ, khẩn trương hoàn thành các chỉ tiêu kế hoạch đề ra, đồng thời đẩy mạnh ứng dụng chuyển đổi số toàn diện trong toàn bộ hệ thống cơ quan nhà nước và dịch vụ công ích.
                      </p>
                    </>
                  )}
                </div>
              </div>

              {/* Footer action bar */}
              <div className="border-t border-slate-100 p-4 bg-slate-50 flex items-center justify-between shrink-0">
                <div className="flex gap-2">
                  <button 
                    onClick={() => window.print()}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-lg font-bold text-slate-600 hover:bg-slate-50 active:scale-95 transition-all cursor-pointer"
                  >
                    <Printer size={13} /> In bản tin
                  </button>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      setIsCopied(true);
                      setTimeout(() => setIsCopied(false), 2000);
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-lg font-bold text-slate-600 hover:bg-slate-50 active:scale-95 transition-all cursor-pointer"
                  >
                    <Share2 size={13} /> {isCopied ? "Đã sao chép!" : "Chia sẻ"}
                  </button>
                </div>
                <button
                  onClick={() => setSelectedNews(null)}
                  className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-lg font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  Đóng cửa sổ
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DETAILED INTERACTIVE MAP MODAL */}
      <AnimatePresence>
        {isMapModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-slate-950/98 backdrop-blur-lg flex flex-col items-center justify-center p-3 sm:p-6"
          >
            {/* Top Navigation Panel */}
            <div className="absolute top-4 right-4 z-50 flex items-center gap-3">
              <a
                href={mapImgSrc}
                target="_blank"
                rel="noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2.5 sm:p-3 font-semibold text-lg flex items-center gap-2 backdrop-blur-sm shadow-xl transition-all border border-white/10"
                title="Mở ảnh gốc HD trong tab mới"
              >
                <ExternalLink size={18} />
                <span className="hidden sm:inline">Ảnh gốc HD</span>
              </a>
              <button
                onClick={() => setIsMapModalOpen(false)}
                className="bg-red-600 hover:bg-red-700 text-white rounded-full p-2.5 sm:p-3 shadow-2xl transition-all border border-red-500/20"
                title="Đóng bản đồ"
              >
                <X size={18} />
              </button>
            </div>

            {/* Header branding */}
            <div className="text-center text-white max-w-2xl px-6 mb-4 mt-12 sm:mt-0 select-none">
              <h3 className="text-lg sm:text-2xl font-black tracking-tight text-red-400 flex items-center justify-center gap-2 mb-1">
                <Map size={24} className="text-red-500 shrink-0" /> BẢN ĐỒ ĐỊA GIỚI HÀNH CHÍNH TỈNH KHÁNH HÒA
              </h3>
              <p className="text-lg sm:text-lg text-slate-400 font-bold uppercase tracking-wider">
                Cổng thông tin địa giới & hành chính tỉnh
              </p>
            </div>

            {/* Main Interactive Stage with zoom and drag */}
            <div className="w-full max-w-5xl h-[65vh] sm:h-[70vh] bg-slate-50 border border-slate-200 rounded-2xl relative overflow-hidden flex items-center justify-center shadow-inner group/stage">
              
              {/* Reset message prompt */}
              <div className="absolute top-4 left-4 text-lg sm:text-lg text-slate-500 bg-white/90 border border-slate-200/50 py-3 px-4 rounded-full pointer-events-none select-none z-10 font-black animate-fade-in">
                💡 Cử chỉ: Cuộn dải / Vuốt để kéo thả bản đồ • Nhấn đúp để Đặt lại
              </div>

              {/* Scrollable drag-container */}
              <div className="w-full h-full flex items-center justify-center overflow-auto p-4 cursor-grab active:cursor-grabbing scrollbar-none sm:scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                <motion.div
                  drag
                  dragConstraints={{ left: -1000, right: 1000, top: -1000, bottom: 1000 }}
                  dragElastic={0.08}
                  className="relative shrink-0 flex items-center justify-center"
                >
                  <motion.img
                    animate={{ scale: zoomScale }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    src={mapImgSrc}
                    onError={handleMapImgError}
                    referrerPolicy="no-referrer"
                    className="max-h-[55vh] sm:max-h-[60vh] w-auto h-auto rounded-xl shadow-2xl select-none pointer-events-none"
                    alt="Bản đồ địa giới hành chính Khánh Hòa"
                    onDoubleClick={() => setZoomScale(1)}
                  />
                </motion.div>
              </div>

              {/* Float Floating Controllers: High quality gray and white elements */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/95 border border-slate-200/80 px-5 py-2 rounded-full flex items-center gap-3.5 backdrop-blur-md shadow-lg z-40 select-none text-slate-700">
                <button
                  onClick={() => setZoomScale(prev => Math.max(0.5, prev - 0.25))}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all active:scale-90 border border-slate-200"
                  title="Thu nhỏ"
                >
                  <Minus size={16} />
                </button>

                <span className="text-slate-800 text-lg font-mono font-black w-10 text-center select-none">
                  {Math.round(zoomScale * 100)}%
                </span>

                <button
                  onClick={() => setZoomScale(prev => Math.min(4, prev + 0.25))}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all active:scale-90 border border-slate-200"
                  title="Phóng to"
                >
                  <Plus size={16} />
                </button>

                <div className="w-[1px] h-5 bg-slate-200"></div>

                <button
                  onClick={() => setZoomScale(1)}
                  className="px-3.5 py-1.5 rounded-full bg-[#1E3A8A] hover:bg-red-600 text-lg font-black tracking-wider uppercase text-white transition-all select-none text-center active:scale-95 shadow-md shadow-blue-900/10"
                >
                  Đặt lại
                </button>
              </div>
            </div>

            {/* Bottom Credit watermark */}
            <div className="mt-4 text-lg sm:text-lg font-bold text-slate-500 tracking-widest shrink-0 flex items-center gap-1.5 uppercase select-none">
              <span>BẢN ĐỒ CHI TIẾT TỈNH KHÁNH HÒA • VILIAN MAP ENGINE</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 12. FOOTER */}
      <footer className="bg-[#1E3A8A] text-white pt-12 pb-6 font-sans text-left border-t border-yellow-600/30">
        <div className="mx-auto max-w-[1400px] px-8 text-left">
          {/* Header Title */}
          <div className="mb-10 text-left">
            <h2 className="text-3xl font-bold tracking-tight text-left text-white group-hover:text-yellow-400 transition-colors">
              Cổng Thông tin điện tử tỉnh Khánh Hòa
            </h2>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-8 pb-10 border-b border-white/10 text-left">
            {/* Column 1: THÔNG TIN LIÊN HỆ */}
            <div className="md:col-span-12 lg:col-span-6 space-y-4 text-left">
              <h3 className="text-white font-bold text-lg uppercase tracking-wider mb-2 text-left whitespace-nowrap">
                Thông tin liên hệ
              </h3>
              <div className="space-y-2.5 text-lg leading-relaxed text-white/85 text-left">
                <p>
                  Giấy phép số: 05/GP-TTĐT do Sở Văn hóa, Thể thao và Du lịch
                  tỉnh <span className="whitespace-nowrap">Khánh Hòa</span> cấp ngày 12/5/2025.
                </p>
                <p>
                  Trưởng Ban biên tập: Nguyễn Phương Huy — Phó Chánh Văn phòng
                  UBND tỉnh <span className="whitespace-nowrap">Khánh Hòa.</span>
                </p>
                
                {/* Single Row Contact details without wrapping */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-lg text-white/95 text-left border-t border-white/10 pt-2.5 mt-2 select-text">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <Map size={13} className="shrink-0 text-white/50" />
                    <span>Địa chỉ: 84 đường Hoàng Hoa Thám, phường Nha Trang.</span>
                  </div>
                  <span className="text-white/20 hidden sm:inline select-none">•</span>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <Headphones size={13} className="shrink-0 text-white/50" />
                    <span>Điện thoại: 0258.3812434.</span>
                  </div>
                  <span className="text-white/20 hidden sm:inline select-none">•</span>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <Mail size={13} className="shrink-0 text-white/50" />
                    <span>Email: banbientap@khanhhoa.gov.vn.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: TIỆN ÍCH */}
            <div className="md:col-span-4 lg:col-span-2 space-y-4 md:border-l md:border-white/5 md:pl-6 text-left">
              <h3 className="text-white font-bold text-lg uppercase tracking-wider mb-2 text-left whitespace-nowrap">
                Tiện ích
              </h3>
              <ul className="space-y-2 text-lg text-white/80 text-left">
                <li className="hover:text-[#FFFFFF] cursor-pointer transition-colors">
                  English
                </li>
                <li className="hover:text-[#FFFFFF] cursor-pointer transition-colors">
                  Русский
                </li>
                <li className="hover:text-[#FFFFFF] cursor-pointer transition-colors">
                  Sitemap
                </li>
                <li className="hover:text-[#FFFFFF] cursor-pointer transition-colors">
                  RSS
                </li>
                <li className="hover:text-[#FFFFFF] cursor-pointer transition-colors">
                  Sơ đồ website
                </li>
              </ul>
            </div>

            {/* Column 3: QR CODE */}
            <div className="md:col-span-4 lg:col-span-2 space-y-4 text-center md:border-l md:border-white/5 md:pl-6">
              <h3 className="text-white font-bold text-lg uppercase tracking-wider mb-2 text-center">
                QR Code
              </h3>
              <div className="flex justify-center gap-5">
                <div className="space-y-1.5">
                  <div className="bg-white p-1 rounded-lg">
                    <img
                      src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://facebook.com/khanhhoa"
                      alt="QR Fanpage"
                      className="w-14 h-14"
                    />
                  </div>
                  <p className="text-lg uppercase font-bold text-white/40">
                    Fanpage
                  </p>
                </div>
                <div className="space-y-1.5">
                  <div className="bg-white p-1 rounded-lg">
                    <img
                      src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://zalo.me/khanhhoa"
                      alt="QR Zalo"
                      className="w-14 h-14"
                    />
                  </div>
                  <p className="text-lg uppercase font-bold text-white/40">
                    Zalo
                  </p>
                </div>
              </div>
            </div>

            {/* Column 4: THỐNG KÊ TRUY CẬP */}
            <div className="md:col-span-4 lg:col-span-2 space-y-4 md:border-l md:border-white/5 md:pl-6 text-left">
              <h3 className="text-white font-bold text-lg uppercase tracking-wider mb-2 text-left whitespace-nowrap">
                Thống kê truy cập
              </h3>
              <div className="space-y-2 text-lg font-medium text-left">
                <div className="flex justify-between items-center group text-left">
                  <span className="text-white/70 whitespace-nowrap">Tổng truy cập:</span>
                  <span className="text-[#FFFFFF] font-bold whitespace-nowrap">99,453,414</span>
                </div>
                <div className="flex justify-between items-center text-left">
                  <span className="text-white/70 whitespace-nowrap">Truy cập trong tuần:</span>
                  <span className="text-[#FFFFFF] font-bold whitespace-nowrap">242,815</span>
                </div>
                <div className="flex justify-between items-center text-left">
                  <span className="text-white/70 whitespace-nowrap">Truy cập hôm nay:</span>
                  <span className="text-[#FFFFFF] font-bold whitespace-nowrap">128,876</span>
                </div>
                <div className="flex justify-between items-center text-left">
                  <span className="text-white/70 whitespace-nowrap">Đang online:</span>
                  <span className="text-[#FFFFFF] font-bold whitespace-nowrap">297</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-6 text-left">
            <p className="text-lg text-white/40 leading-relaxed text-center md:text-left max-w-3xl">
              © 2026 Cổng Thông tin điện tử tỉnh Khánh Hòa. Mọi hành vi sử dụng
              lại thông tin trên Cổng phải ghi rõ nguồn "khanhhoa.gov.vn"
            </p>
            <div className="flex items-center gap-3">
              <div className="bg-white px-3 py-1.5 rounded flex items-center gap-2 shadow-sm">
                <div className="bg-red-800 p-1 rounded text-base text-white font-bold flex flex-col items-center leading-none">
                  <span>!</span>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-lg font-bold text-red-800 uppercase">
                    NCSC
                  </span>
                  <span className="text-base font-bold text-slate-400 uppercase">
                    Tín nhiệm mạng
                  </span>
                </div>
              </div>
              <div className="bg-[#0074FF] px-3 py-1.5 rounded text-lg font-bold text-white uppercase cursor-pointer hover:bg-blue-600 transition-colors">
                IPv6
              </div>
              <div className="bg-white text-lg font-bold text-slate-900 px-3 py-1.5 rounded border border-white/10 uppercase cursor-pointer hover:bg-slate-50 transition-colors">
                DMCA
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Home Page Document QR Verification Modal */}
      <AnimatePresence>
        {homeSelectedQrDoc && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white border border-slate-200 shadow-2xl rounded-3xl max-w-lg w-full overflow-hidden text-left font-sans"
            >
              {/* Header */}
              <div className="bg-[#1E3A8A] text-white p-5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <QrCode size={20} className="text-emerald-400" />
                  <span className="font-extrabold text-lg uppercase tracking-wide">
                    XÁC THỰC VĂN BẢN SỐ (TRANG CHỦ)
                  </span>
                </div>
                <button
                  onClick={() => setHomeSelectedQrDoc(null)}
                  className="p-1 hover:bg-white/10 rounded-full transition-all text-white bg-transparent border-0 cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8 flex flex-col items-center text-center gap-5 text-slate-800">
                {/* Simulated QR Code with high-fidelity visual elements */}
                <div className="p-4 bg-white border-2 border-emerald-500/30 rounded-2xl shadow-inner relative group">
                  <div className="w-40 h-40 bg-slate-50 flex items-center justify-center rounded-xl overflow-hidden relative">
                    {/* Simulated elegant QR pattern */}
                    <div className="grid grid-cols-5 gap-1.5 p-3 w-full h-full opacity-90">
                      {Array.from({ length: 25 }).map((_, i) => {
                        const isCorner = i === 0 || i === 4 || i === 20 || i === 24;
                        const isRandomDark = (i * 7 + 13) % 3 === 0;
                        return (
                          <div
                            key={i}
                            className={`rounded-sm transition-all duration-300 ${
                              isCorner 
                                ? "bg-[#1E3A8A] border border-[#1E3A8A]" 
                                : isRandomDark 
                                  ? "bg-slate-800" 
                                  : "bg-transparent"
                            }`}
                          />
                        );
                      })}
                    </div>
                    {/* Central Gov Emblem or Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-md">
                        <Scale size={16} className="text-[#1E3A8A]" />
                      </div>
                    </div>
                  </div>
                  {/* Digital Signature Badge */}
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-emerald-600 text-white text-base font-bold rounded-full shadow flex items-center gap-1">
                    <CheckCircle2 size={10} />
                    <span>ĐÃ KÝ SỐ</span>
                  </div>
                </div>

                <div className="w-full text-left bg-slate-50 border border-slate-100 rounded-2xl p-4 flex flex-col gap-2.5">
                  <div>
                    <span className="text-slate-400 text-base font-bold block uppercase tracking-wider">Số ký hiệu</span>
                    <span className="text-[#1E3A8A] font-extrabold text-lg">{homeSelectedQrDoc.id}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-base font-bold block uppercase tracking-wider">Trích yếu nội dung</span>
                    <span className="text-slate-700 font-bold text-lg leading-snug">{homeSelectedQrDoc.title}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-slate-400 text-base font-bold block uppercase tracking-wider">Cơ quan ban hành</span>
                      <span className="text-slate-600 font-bold text-base">{homeSelectedQrDoc.agency || "UBND Tỉnh"}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-base font-bold block uppercase tracking-wider">Ngày ban hành</span>
                      <span className="text-slate-600 font-bold text-base">{homeSelectedQrDoc.date}</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-slate-200/50 mt-1 flex items-center gap-2 text-emerald-700">
                    <CheckCircle2 size={16} className="shrink-0" />
                    <span className="text-base font-bold">
                      Chứng thư số hợp chuẩn quy định ban hành văn bản chính quyền điện tử tỉnh Khánh Hòa.
                    </span>
                  </div>
                </div>

                <div className="flex gap-2 w-full">
                  <button
                    onClick={() => {
                      showAppToast(`Đang in chứng chỉ xác thực điện tử cho văn bản: ${homeSelectedQrDoc.id}`);
                      setHomeSelectedQrDoc(null);
                    }}
                    className="flex-1 py-2.5 border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-xl font-bold text-base transition-all flex items-center justify-center gap-1.5 cursor-pointer bg-transparent"
                  >
                    <span>In chứng nhận</span>
                  </button>
                  <button
                    onClick={() => {
                      showAppToast(`Đang truy vấn nhật ký ký số Blockchain của văn bản ${homeSelectedQrDoc.id}`);
                      setHomeSelectedQrDoc(null);
                    }}
                    className="flex-1 py-2.5 bg-[#1E3A8A] hover:bg-[#152C69] text-white rounded-xl font-bold text-base transition-all flex items-center justify-center gap-1.5 shadow-md cursor-pointer border-0"
                  >
                    <ExternalLink size={14} />
                    <span>Kiểm tra chữ ký số</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Global Portal Toast Notification */}
      <AnimatePresence>
        {appToast && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-[9999] bg-[#1E3A8A] text-white py-3.5 px-6 rounded-2xl shadow-2xl border border-white/20 flex items-center gap-3 max-w-sm backdrop-blur-md"
          >
            <div className="w-8 h-8 rounded-full bg-red-400 flex items-center justify-center text-[#1E3A8A] shrink-0 font-bold animate-bounce text-lg">
              ✓
            </div>
            <div className="flex-1 text-left text-lg font-bold leading-snug">
              {appToast}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
}
