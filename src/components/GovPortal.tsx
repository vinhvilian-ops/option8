import MapSection from "./MapSection";
import React, { useState, useRef, useEffect } from "react";
import MultimediaSection from "./MultimediaSection";
import UtilitiesPortal from "./UtilitiesPortal";
import { motion, AnimatePresence } from "motion/react";
import trongDongBg from "../assets/images/trong_dong.png";
import coToQuoc from "../assets/images/co_to_quoc.png";
import quocHuy from "../assets/images/quochuyvn.png";
import namChuTichImg from "../assets/images/nam chu tich.png";
import namPctImg from "../assets/images/nam pct.png";
import nuChuTichImg from "../assets/images/nu chu tich.png";
import nuPctImg from "../assets/images/nu PCT.png";
import tranPhongImg from "../assets/images/tran_phong.png";
import hoXuanTruongImg from "../assets/images/ho_xuan_truong.png";
import lamDongImg from "../assets/images/lam_dong.png";
import nguyenVietHungImg from "../assets/images/nguyen_viet_hung.png";
import nguyenKhacHaImg from "../assets/images/nguyen_khac_ha.png";
import luThanhHaiImg from "../assets/images/lu_thanh_hai.png";
import nguyenLongBienImg from "../assets/images/nguyen_long_bien.png";
import trinhMinhHoangImg from "../assets/images/trinh_minh_hoang.png";
import phamThiXuanTrangImg from "../assets/images/pham_thi_xuan_trang.png";
import tranHoaNamImg from "../assets/images/tran_hoa_nam.png";
import leHuyenImg from "../assets/images/le_huyen.png";
import nguyenThanhHaImg from "../assets/images/nguyen_thanh_ha.png";
import {
  Users,
  User,
  Contact,
  FileText,
  Building,
  Compass,
  Map,
  Search,
  CheckCircle2,
  ChevronRight,
  Send,
  Upload,
  Phone,
  HelpCircle,
  X,
  ChevronDown,
  Clock,
  Building2,
  Link as LinkIcon,
  Megaphone,
  Globe,
  ExternalLink,
  Calendar,
  Info,
  Play,
  FileBarChart,
  Camera,
  Layers,
  CheckCircle,
  Database,
  ChevronRightSquare,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Scale,
  BookOpen,
  Newspaper,
  MessageSquare,
  Landmark,
  Coins,
  ShoppingCart,
  Briefcase,
  Award,
  Trophy,
  Shield,
  Car,
  UserCheck,
  PhoneCall,
  ShieldCheck,
  Tag,
  Home,
  Cpu,
  Receipt,
  LayoutGrid,
  Gavel,
  PenTool,
  MessageSquareMore,
  BadgeDollarSign,
  CircleDollarSign,
  TrendingUp,
  MapPin,
  CalendarDays,
  Mic,
  UserPlus,
  Percent,
  ZapOff,
  HeartPulse,
  CloudSun,
  Monitor,
  Globe2,
} from "lucide-react";

// Definitions for the 5 Pillars of "CHÍNH QUYỀN" matching the 3 images:
const PILLARS = [
  {
    id: "lanhdao",
    name: "Tổ chức & Thường trực Lãnh đạo",
    desc: "Hoạt động lãnh đạo, cơ cấu bộ máy, trang riêng Chủ tịch & các PCT, lịch làm việc UBND",
    icon: Users,
    subs: [
      { id: "lanhdao-hd", name: "1. Hoạt động của lãnh đạo tỉnh" },
      { id: "lanhdao-tc", name: "2. Tổ chức bộ máy hành chính" },
      {
        id: "lanhdao-tr",
        name: "2.1. Trang riêng Chủ tịch & các Phó Chủ tịch",
      },
      { id: "lanhdao-lich", name: "3. Lịch làm việc Ủy ban nhân dân" },
    ],
  },
  {
    id: "vandan",
    name: "Chỉ đạo & Hệ thống văn bản",
    desc: "Chỉ đạo điều hành Chính phủ, Tỉnh, hoạt động Sở ngành, hệ thống văn bản, đa phương tiện",
    icon: FileText,
    subs: [
      {
        id: "vandan-cp",
        name: "1. Chỉ đạo, điều hành của Chính phủ, Thủ tướng",
      },
      { id: "vandan-tinh", name: "2. Thông tin chỉ đạo điều hành tỉnh" },
      { id: "vandan-so", name: "3. Hoạt động của sở ngành, địa phương" },
      { id: "vandan-hethong", name: "4. Hệ thống văn bản pháp quy" },
      { id: "vandan-media", name: "4. Thông tin đa phương tiện" },
    ],
  },
  {
    id: "congkhai",
    name: "Công khai, Tuyên truyền & Tra cứu",
    desc: "Lấy ý kiến pháp luật, công khai tài chính dán, tuyên truyền pháp chế, tra cứu BHXH",
    icon: Building,
    subs: [
      { id: "congkhai-yk", name: "Lấy ý kiến dự thảo văn bản QPPL" },
      { id: "congkhai-ck", name: "1. Thông tin công khai" },
      { id: "congkhai-tt", name: "2. Thông tin tuyên truyền, cải cách" },
      { id: "congkhai-tc", name: "3. Thông tin tra cứu & Dịch vụ số" },
    ],
  },
  {
    id: "dichvu",
    name: "Hỏi đáp & Dịch vụ công trực tuyến",
    desc: "Hỏi đáp hành chính, thủ tục một cửa, nhận và trả lời ý kiến kiến nghị, công báo quốc gia",
    icon: Compass,
    subs: [
      { id: "dichvu-hd", name: "Chuyên mục Hỏi đáp cử tri" },
      { id: "dichvu-online", name: "3. Dịch vụ công trực tuyến" },
      {
        id: "dichvu-tiepnhan",
        name: "4. Tiếp nhận, trả lời kiến nghị công dân",
      },
      { id: "dichvu-congbao", name: "1-2-5. Công báo quốc gia & Điều ước" },
      { id: "dichvu-banners", name: "1-2. Banner kỷ niệm & Bản tin tuần" },
    ],
  },
  {
    id: "bando",
    name: "Bản đồ & Thăm dò ý kiến",
    desc: "Bản đồ hành chính số, liên kết website, thăm dò ý kiến cử tri, đánh giá chỉ số hài lòng",
    icon: Compass,
    subs: [
      { id: "bando-filter", name: "1. Bản đồ số & Liên kết website" },
      { id: "bando-poll", name: "2. Thăm dò dư luận & Chỉ số hài lòng" },
      { id: "bando-sponsor", name: "3. Tra cứu bảo trợ xã hội" },
    ],
  },
];

const LOCAL_ENTITIES_DATA: Record<string, { title: string; leaders: any[] }> = {
  "Phường Xương Huân": {
    title: "Lãnh đạo Phường Xương Huân",
    leaders: [
      {
        role: "Chủ tịch UBND Phường",
        name: "Đặng Thị Thùy",
        detail: "Phụ trách chung chính quyền phường",
        img: nuChuTichImg,
      },
      {
        role: "Bí thư Đảng ủy Phường",
        name: "Nguyễn Văn Hùng",
        detail: "Chỉ đạo công tác Đảng bộ phường",
        img: namPctImg,
      },
      {
        role: "Phó Bí thư Đảng ủy",
        name: "Trần Minh Quân",
        detail: "Phụ trách khối dân vận",
        img: namPctImg,
      },
      {
        role: "Phó Chủ tịch UBND",
        name: "Lê Thị Hồng",
        detail: "Phụ trách Văn hóa - Xã hội",
        img: nuPctImg,
      },
    ],
  },
  "Xã Vĩnh Ngọc": {
    title: "Lãnh đạo Xã Vĩnh Ngọc",
    leaders: [
      {
        role: "Chủ tịch UBND Xã",
        name: "Lê Minh Tuấn",
        detail: "Điều hành kinh tế - xã hội xã",
        img: namPctImg,
      },
      {
        role: "Bí thư Đảng ủy Xã",
        name: "Trần Thế Quyền",
        detail: "Chỉ đạo chiến lược phát triển xã",
        img: namPctImg,
      },
      {
        role: "Phó Chủ tịch UBND",
        name: "Nguyễn Văn Nam",
        detail: "Phụ trách Nông nghiệp - Địa chính",
        img: namPctImg,
      },
    ],
  },
  "Đặc khu Vân Phong": {
    title: "Lãnh đạo Đặc khu kinh tế Vân Phong",
    leaders: [
      {
        role: "Trưởng Ban quản lý",
        name: "Hoàng Ngọc Huy",
        detail: "Quản lý chiến lược đặc khu",
        img: namPctImg,
      },
      {
        role: "Phó Trưởng Ban",
        name: "Vũ Trọng Đạt",
        detail: "Phụ trách đầu tư nước ngoài",
        img: namPctImg,
      },
      {
        role: "Phó Trưởng Ban",
        name: "Lê Văn Thắng",
        detail: "Phụ trách hạ tầng kỹ thuật",
        img: namPctImg,
      },
    ],
  },
  "Phường Lộc Thọ": {
    title: "Lãnh đạo Phường Lộc Thọ",
    leaders: [
      {
        role: "Chủ tịch UBND Phường",
        name: "Trương Văn Bảy",
        detail: "Quản lý đô thị du lịch",
        img: namPctImg,
      },
      {
        role: "Bí thư Đảng ủy Phường",
        name: "Nguyễn Thị Mai",
        detail: "Công tác xây dựng hệ thống chính trị",
        img: nuPctImg,
      },
    ],
  },
  "Xã Cam Hải Đông": {
    title: "Lãnh đạo Xã Cam Hải Đông",
    leaders: [
      {
        role: "Chủ tịch UBND Xã",
        name: "Bùi Văn Thành",
        detail: "Phát triển du lịch Bãi Dài",
        img: namPctImg,
      },
      {
        role: "Bí thư Đảng ủy Xã",
        name: "Phạm Minh Đức",
        detail: "Chỉ đạo công tác địa phương",
        img: namPctImg,
      },
    ],
  },
  "Phường Vĩnh Nguyên": {
    title: "Lãnh đạo Phường Vĩnh Nguyên",
    leaders: [
      {
        role: "Chủ tịch UBND Phường",
        name: "Ngô Văn Hùng",
        detail: "Quản lý kinh tế biển đảo",
        img: namPctImg,
      },
      {
        role: "Bí thư Đảng ủy Phường",
        name: "Lê Thị Lan",
        detail: "Công tác Đảng và Đoàn thể",
        img: nuPctImg,
      },
    ],
  },
  "Xã Phước Đồng": {
    title: "Lãnh đạo Xã Phước Đồng",
    leaders: [
      {
        role: "Chủ tịch UBND Xã",
        name: "Nguyễn Văn Hưởng",
        detail: "Phát triển nông thôn mới",
        img: namPctImg,
      },
      {
        role: "Bí thư Đảng ủy Xã",
        name: "Trần Văn Cường",
        detail: "Lãnh đạo chính trị địa phương",
        img: namPctImg,
      },
    ],
  },
};

const ORG_TABS_DATA: Record<
  string,
  {
    title: string;
    desc: string;
    leaders: any[];
    sectTitle: string;
    icon: any;
    image: string;
  }
> = {
  "Thường trực Tỉnh ủy": {
    sectTitle: "2.1. CỔNG TRANG RIÊNG: THƯỜNG TRỰC TỈNH ỦY",
    title: "Thường trực Tỉnh ủy",
    desc: "Truy cập thông tin chi tiết về sơ yếu lý lịch, thẩm quyền và lĩnh vực phân công của Thường trực Tỉnh ủy.",
    image:
      "https://images.unsplash.com/photo-1577493340887-b7bfff550145?q=80&w=600",
    icon: "Building",
    leaders: [
      {
        role: "Ủy viên Trung ương Đảng\nBí thư Tỉnh ủy",
        name: "TRẦN PHONG",
        img: tranPhongImg,
      },
      {
        role: "Ủy viên dự khuyết Trung ương Đảng\nPhó Bí thư Thường trực Tỉnh ủy",
        name: "HỒ XUÂN TRƯỜNG",
        img: hoXuanTruongImg,
      },
      {
        role: "Phó Bí thư Tỉnh ủy,\nChủ tịch HĐND tỉnh",
        name: "LÂM ĐÔNG",
        img: lamDongImg,
      },
      {
        role: "Phó Bí thư Tỉnh ủy,\nChủ tịch UBND tỉnh",
        name: "NGUYỄN VIỆT HÙNG",
        img: nguyenVietHungImg,
      },
      {
        role: "Phó Bí thư Tỉnh ủy,\nChủ tich UB MTTQ Việt Nam tỉnh",
        name: "NGUYỄN KHẮC HÀ",
        img: nguyenKhacHaImg,
      },
    ],
  },
  "Thường trực HĐND tỉnh": {
    sectTitle: "2.1. CỔNG TRANG RIÊNG: THƯỜNG TRỰC HĐND TỈNH",
    title: "Thường trực HĐND tỉnh",
    desc: "Truy cập thông tin chi tiết về sơ yếu lý lịch, thẩm quyền và lĩnh vực phân công của Thường trực Hội đồng Nhân dân.",
    image:
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=600",
    icon: "Users",
    leaders: [
      {
        role: "Chủ tịch HĐND tỉnh",
        name: "LÂM ĐÔNG",
        detail: "Chủ tọa kỳ họp HĐND",
        img: lamDongImg,
      },
      {
        role: "Phó Chủ tịch Thường trực HĐND tỉnh",
        name: "LỮ THANH HẢI",
        detail: "Phụ trách kinh tế ngân sách HĐND",
        img: luThanhHaiImg,
      },
      {
        role: "Phó Chủ tịch HĐND tỉnh",
        name: "PHẠM THỊ XUÂN TRANG",
        detail: "Phụ trách Pháp chế",
        img: phamThiXuanTrangImg,
      },
    ],
  },
  "Lãnh đạo UBND tỉnh": {
    sectTitle: "2.1. CỔNG TRANG RIÊNG: LÃNH ĐẠO UBND",
    title: "Lãnh đạo UBND tỉnh",
    desc: "Truy cập thông tin chi tiết về sơ yếu lý lịch, thẩm quyền và lĩnh vực phân công của các lãnh đạo.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600",
    icon: "User",
    leaders: [
      {
        role: "Chủ tịch UBND tỉnh",
        name: "NGUYỄN VIỆT HÙNG",
        detail: "Phó Bí thư Tỉnh ủy, Chủ tịch UBND tỉnh",
        img: nguyenVietHungImg,
        isMain: true,
      },
      {
        role: "Phó Chủ tịch Thường trực",
        name: "NGUYỄN LONG BIÊN",
        detail:
          "Ủy viên Ban Thường vụ Tỉnh ủy, Phó Chủ tịch Thường trực UBND tỉnh",
        img: nguyenLongBienImg,
      },
      {
        role: "Phó Chủ tịch",
        name: "TRẦN HÒA NAM",
        detail: "Ủy viên Ban Thường vụ Tỉnh ủy, Phó Chủ tịch UBND tỉnh",
        img: tranHoaNamImg,
      },
      {
        role: "Phó Chủ tịch",
        name: "TRỊNH MINH HOÀNG",
        detail: "Tỉnh ủy viên, Phó Chủ tịch UBND tỉnh",
        img: trinhMinhHoangImg,
      },
      {
        role: "Phó Chủ tịch",
        name: "LÊ HUYỀN",
        detail: "Ủy viên Ban Chấp hành Đảng bộ, Phó Chủ tịch UBND tỉnh",
        img: leHuyenImg,
      },
      {
        role: "Phó Chủ tịch",
        name: "NGUYỄN THANH HÀ",
        detail: "Ủy viên Ban Chấp hành Đảng bộ, Phó Chủ tịch UBND tỉnh",
        img: nguyenThanhHaImg,
      },
    ],
  },
  "Lãnh đạo xã, phường, đặc khu": {
    sectTitle: "2.1. CỔNG TRANG RIÊNG: LÃNH ĐẠO XÃ, PHƯỜNG",
    title: "Lãnh đạo xã, phường, đặc khu",
    desc: "Tra cứu thông tin liên hệ và thẩm quyền phân công của Chủ tịch, Bí thư các cấp xã, phường.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600",
    icon: "Map",
    leaders: [
      {
        role: "Chủ tịch UBND Phường Xương Huân",
        name: "Đặng Thị Thùy",
        detail: "Phụ trách chung",
        img: nuChuTichImg,
      },
      {
        role: "Bí thư Đảng ủy Phường Xương Huân",
        name: "Nguyễn Văn Hùng",
        detail: "Phụ trách công tác Đảng",
        img: namPctImg,
      },
      {
        role: "Chủ tịch UBND Xã Vĩnh Ngọc",
        name: "Lê Minh Tuấn",
        detail: "Ban quản lý xã",
        img: namPctImg,
      },
      {
        role: "Bí thư Đảng ủy Xã Vĩnh Ngọc",
        name: "Trần Thế Quyền",
        detail: "Đảng ủy xã",
        img: namPctImg,
      },
      {
        role: "Trưởng Ban quản lý Đặc khu kinh tế Vân Phong",
        name: "Hoàng Ngọc Huy",
        detail: "Phụ trách Đặc khu kinh tế",
        img: namPctImg,
      },
      {
        role: "Phó Trưởng Ban quản lý Đặc khu",
        name: "Vũ Trọng Đạt",
        detail: "Phó Trưởng ban",
        img: namPctImg,
      },
      {
        role: "Phó Trưởng Ban Nội chính",
        name: "Phạm Viết Giao",
        detail: "Ban Nội chính",
        img: namPctImg,
      },
    ],
  },
};

export const LEADER_PROFILES: Record<
  string,
  {
    name: string;
    role: string;
    dob: string;
    hometown: string;
    ethnicity: string;
    education: string;
    politicalTheory: string;
    process: string[];
    tasks: string[];
    imgKey?: string;
    partyJoinDate?: string;
  }
> = {
  "Nghiêm Xuân Thành": {
    name: "Nghiêm Xuân Thành",
    role: "Ủy viên Ban Chấp hành Trung ương Đảng, Bí thư Tỉnh ủy Khánh Hòa",
    dob: "02/11/1969",
    hometown: "Xã Yên Lạc, tỉnh Phú Thọ",
    ethnicity: "Kinh",
    education: "Tiến sĩ Kinh tế",
    politicalTheory: "Cao cấp",
    partyJoinDate: "03/10/1994",
    process: [
      "Tháng 10/1988 - 8/1994: Cán bộ Ngân hàng Công Thương tỉnh Vĩnh Phú.",
      "Tháng 9/1994 - 5/1997: Trưởng phòng Kế toán Ngân hàng Công thương Phúc Yên, Vĩnh Phúc.",
      "Tháng 6/1997 - 4/1999: Cán bộ phòng Tổ chức cán bộ và đào tạo, Ngân hàng Công thương Việt Nam (Vietinbank).",
      "Tháng 5/1999 - 6/2002: Phó Chánh Văn phòng - Thư ký Tổng Giám đốc Ngân hàng Công thương Việt Nam; Ủy viên Ban Chấp hành Đảng bộ Ngân hàng Công thương Việt Nam (từ năm 2001).",
      "Tháng 7/2002 - 10/2003: Ủy viên Ban Chấp hành Đảng bộ Vietinbank, Trưởng Ban Thư ký Hội đồng quản trị Ngân hàng Công thương Việt Nam.",
      "Tháng 11/2003 - 7/2008: Ủy viên Ban Chấp hành Đảng bộ Vietinbank, Trưởng phòng Quản lý rủi ro và Nợ có vấn đề; Trưởng phòng Quản lý nợ có vấn đề Ngân hàng Công thương Việt Nam.",
      "Tháng 8/2008 - 10/2010: Bí thư Đảng ủy, Giám đốc Ngân hàng Công thương Việt Nam, chi nhánh Thanh Xuân.",
      "Tháng 10/2010 - 01/2012: Bí thư Đảng ủy, Giám đốc Ngân hàng Công thương Việt Nam, chi nhánh Đống Đa.",
      "Tháng 01/2012 - 6/2012: Ủy viên Ban Chấp hành Đảng bộ, Phó Tổng Giám đốc Ngân hàng Thương mại cổ phần Công thương Việt Nam.",
      "Tháng 6/2012 - 7/2013: Chánh Văn phòng Ngân hàng Nhà nước Việt Nam; Bí thư chi bộ Văn phòng.",
      "Tháng 7/2013 - 11/2014: Ủy viên Hội đồng Quản trị, Tổng Giám đốc Ngân hàng Thương mại cổ phần Ngoại thương Việt Nam; Ủy viên Ban Chấp hành Đảng bộ Khối Doanh nghiệp Trung ương (từ tháng 3/2014).",
      "Tháng 11/2014 - 6/2021: Ủy viên Ban Chấp hành, Ủy viên Ban Thường vụ Đảng ủy khối Doanh nghiệp Trung ương; Bí thư Đảng ủy, Chủ tịch Hội đồng Quản trị Ngân hàng Thương mại cổ phần Ngoại thương Việt Nam. Tại Đại hội đại biểu toàn quốc lần thứ XIII của Đảng, được bầu vào Ban Chấp hành Trung ương Đảng (tháng 01/2021).",
      "Tháng 6/2021 - 10/2024: Ủy viên Ban Chấp hành Trung ương Đảng, Bí thư Tỉnh ủy Hậu Giang, nhiệm kỳ 2020 - 2025.",
      "Tháng 11/2024 - 9/2025: Bộ Chính trị điều động, phân công, chỉ định tham gia Ban Chấp hành, Ban Thường vụ và giữ chức Bí thư Tỉnh ủy Khánh Hòa nhiệm kỳ 2020 - 2025.",
      "Từ tháng 9/2025: Ủy viên Ban Chấp hành Trung ương Đảng, Bí thư Tỉnh ủy Khánh Hòa nhiệm kỳ 2025 - 2030.",
    ],
    tasks: [
      "Chỉ đạo và chịu trách nhiệm toàn diện trước Trung ương Đảng về công tác lãnh đạo toàn bộ các hoạt động chính trị, kinh tế, xã hội, quốc phòng, an ninh và đối ngoại của tỉnh Khánh Hòa.",
      "Trực tiếp làm Bí thư Đảng ủy Quân sự tỉnh, chỉ đạo công tác xây dựng Đảng, xây dựng hệ thống chính trị vững mạnh.",
      "Chủ trì các hội nghị Ban Chấp hành Đảng bộ tỉnh, Ban Thường vụ Tỉnh ủy và Thường trực Tỉnh ủy Khánh Hòa.",
    ],
  },
  "TRẦN PHONG": {
    name: "TRẦN PHONG",
    role: "Ủy viên Ban Chấp hành Trung ương Đảng, Bí thư Tỉnh ủy Khánh Hòa",
    dob: "16/12/1974",
    hometown: "Quảng Trị",
    ethnicity: "Kinh",
    education: "Thạc sĩ Quản trị kinh doanh",
    politicalTheory: "Cao cấp",
    partyJoinDate: "25/9/2000",
    process: [
      "Tháng 10/2015 - 9/2016: Tỉnh ủy viên, Phó Chủ nhiệm Thường trực Ủy ban Kiểm tra Tỉnh ủy Quảng Bình; Bí thư Chi bộ cơ quan Ủy ban Kiểm tra Tỉnh ủy.",
      "Tháng 10/2016 - 6/2020: Tỉnh ủy viên, Bí thư Đảng ủy, Giám đốc Sở Tài nguyên và Môi trường; Ủy viên BCH Đảng bộ Khối các cơ quan tỉnh Quảng Bình.",
      "Tháng 7/2020 - 10/2020: Tỉnh ủy viên, Phó Chủ tịch UBND tỉnh Quảng Bình, nhiệm kỳ 2016 - 2021.",
      "Tháng 10/2020 - 11/2020: Ủy viên Ban Thường vụ Tỉnh ủy, Phó Chủ tịch UBND tỉnh Quảng Bình, nhiệm kỳ 2016 - 2021.",
      "Tháng 12/2020 - 12/2024: Ủy viên Ban Thường vụ Tỉnh ủy, Bí thư Thành ủy Đồng Hới; Chủ tịch HĐND thành phố Đồng Hới (từ 6/2021); Đại biểu HĐND tỉnh Quảng Bình khóa XVII, XVIII.",
      "Tháng 12/2024 - 6/2025: Phó Bí thư Tỉnh ủy, Bí thư Đảng ủy UBND tỉnh, Chủ tịch UBND tỉnh; Đại biểu HĐND tỉnh Quảng Bình khóa XVIII, nhiệm kỳ 2021 - 2026.",
      "Từ 1/7/2025 - 11/2025: Phó Bí thư Tỉnh ủy, Bí thư Đảng ủy UBND tỉnh, Chủ tịch UBND tỉnh Quảng Trị (mới); Đại biểu HĐND tỉnh Quảng Trị (mới) khóa VIII, nhiệm kỳ 2021 - 2026.",
      "Ngày 14/11/2025: Ban Bí thư điều động, chỉ định tham gia Ban Chấp hành, Ban Thường vụ, giữ chức Phó Bí thư Tỉnh ủy Khánh Hòa, nhiệm kỳ 2025 - 2030.",
      "Ngày 19/11/2025: Được HĐND tỉnh Khánh Hòa khóa VII bầu giữ chức vụ Chủ tịch UBND tỉnh Khánh Hòa nhiệm kỳ 2021 - 2026.",
      "Từ ngày 22/1/2026: Ủy viên Ban Chấp hành Trung ương Đảng khóa XIV.",
      "Từ tháng 3/2026: Ủy viên Ban Chấp hành Trung ương Đảng, giữ chức vụ Bí thư Tỉnh ủy Khánh Hòa nhiệm kỳ 2025 - 2030.",
    ],
    tasks: [
      "Chỉ đạo và chịu trách nhiệm toàn diện trước Trung ương Đảng về công tác lãnh đạo toàn bộ các hoạt động chính trị, kinh tế, xã hội, quốc phòng, an ninh và đối ngoại của tỉnh Khánh Hòa.",
      "Trực tiếp làm Bí thư Đảng ủy Quân sự tỉnh, chỉ đạo công tác xây dựng Đảng, xây dựng hệ thống chính trị vững mạnh.",
      "Chủ trì các hội nghị Ban Chấp hành Đảng bộ tỉnh, Ban Thường vụ Tỉnh ủy và Thường trực Tỉnh ủy Khánh Hòa.",
    ],
  },
  "NGUYỄN VIỆT HÙNG": {
    name: "NGUYỄN VIỆT HÙNG",
    role: "Phó Bí thư Tỉnh ủy, Chủ tịch UBND tỉnh Khánh Hòa",
    dob: "03/6/1978",
    hometown: "Xã Bột Xuyên, thành phố Hà Nội",
    ethnicity: "Kinh",
    education: "Cử nhân Kinh tế, Thạc sĩ Quản trị kinh doanh",
    politicalTheory: "Cao cấp",
    partyJoinDate: "02/9/2006",
    process: [
      "Tháng 01/2004 - 3/2005: Phó Trưởng phòng chuẩn bị đầu tư và giải phóng mặt bằng, Ban Quản lý dự án số 2, Tổng Công ty Đầu tư phát triển nhà và đô thị.",
      "Tháng 3/2005 - 12/2006: Trưởng Phòng giải phóng mặt bằng và kinh doanh nhà đất, Ban Quản lý dự án Đông Tăng Long tại TP. Hồ Chí Minh, Tổng Công ty Đầu tư phát triển nhà và đô thị.",
      "Tháng 01/2007 - 8/2007: Phó Giám đốc Trung tâm Giao dịch bất động sản, Tổng Công ty Đầu tư phát triển nhà và đô thị.",
      "Tháng 8/2007 - 02/2008: Phó Giám đốc phụ trách Trung tâm Giao dịch bất động sản, Tổng Công ty Đầu tư phát triển nhà và đô thị.",
      "Tháng 02/2008 - 10/2010: Trưởng Ban Thị trường, Tổng Công ty Đầu tư phát triển nhà và đô thị.",
      "Tháng 10/2010 - 12/2011: Phó Trưởng ban Chiến lược phát triển, Tập đoàn Phát triển nhà và đô thị.",
      "Tháng 12/2011 - 4/2013: Phó Trưởng ban Kinh tế - Kế hoạch, Tập đoàn Phát triển nhà và đô thị.",
      "Tháng 4/2013 - 10/2013: Trưởng ban Kinh doanh, Tổng Công ty Đầu tư phát triển nhà và đô thị.",
      "Tháng 10/2013 - 02/2015: Ủy viên Ban Chấp hành Đảng bộ, Trưởng ban Kinh doanh, Tổng Công ty Đầu tư phát triển nhà và đô thị.",
      "Tháng 02/2015 - 9/2015: Ủy viên Ban Chấp hành Đảng bộ, Phó Tổng Giám đốc Tổng Công ty Đầu tư phát triển nhà và đô thị; Chủ tịch Hội đồng thành viên Công ty liên doanh VINAFIC.",
      "Tháng 9/2015 - 12/2015: Bí thư Đảng ủy, Chánh Văn phòng Bộ Xây dựng.",
      "Tháng 12/2015 - 03/4/2018: Ủy viên Ban Chấp hành Đảng bộ Bộ Xây dựng, Bí thư Đảng ủy, Chánh Văn phòng Bộ Xây dựng.",
      "Từ 04/4/2018 - 12/2018: Bí thư Đảng ủy, Chủ tịch Hội đồng thành viên Tổng Công ty Đầu tư phát triển nhà và đô thị.",
      "Tháng 01/2019 - 9/2024: Ủy viên Ban Chấp hành Đảng bộ Khối Doanh nghiệp Trung ương, Bí thư Đảng ủy, Chủ tịch Hội đồng thành viên Tổng Công ty Đầu tư phát triển nhà và đô thị.",
      "Tháng 9/2024 - 02/2025: Ủy viên Ban Cán sự đảng, Thứ trưởng Bộ Xây dựng.",
      "Tháng 3/2025 - 25/3/2026: Ủy viên Ban Thường vụ Đảng ủy, Thứ trưởng Bộ Xây dựng.",
      "Từ ngày 25/3/2026: Phó Bí thư Tỉnh ủy Khánh Hòa.",
      "Từ ngày 30/3/2026: Phó Bí thư Tỉnh ủy Khánh Hòa, Chủ tịch UBND tỉnh Khánh Hòa.",
    ],
    tasks: [
      "Lãnh đạo, chỉ đạo và điều hành toàn diện các hoạt động của Ủy ban nhân dân tỉnh Khánh Hòa.",
      "Trực tiếp chỉ đạo các công tác quy hoạch, kế hoạch phát triển kinh tế - xã hội, ngân sách nhà nước, an ninh quốc phòng địa phương.",
      "Giữ mối liên hệ công tác giữa Ủy ban nhân dân tỉnh với Chính phủ, các bộ, ban, ngành Trung ương và Tỉnh ủy, Hội đồng nhân dân tỉnh Khánh Hòa.",
    ],
  },
  "NGUYỄN LONG BIÊN": {
    name: "NGUYỄN LONG BIÊN",
    role: "Ủy viên Ban Thường vụ Tỉnh ủy, Phó Chủ tịch Thường trực UBND tỉnh Khánh Hòa",
    dob: "08/08/1973",
    hometown: "Tỉnh Khánh Hòa",
    ethnicity: "Kinh",
    education: "Thạc sĩ Kinh tế Nông nghiệp, Cử nhân Tài chính kế toán",
    politicalTheory: "Cao cấp",
    partyJoinDate: "17/07/1999",
    process: [
      "Trước năm 2020: Kinh qua các chức vụ Phó Chủ tịch UBND huyện Ninh Sơn; Phó Bí thư Huyện ủy, Chủ tịch UBND huyện Ninh Sơn; Chánh Văn phòng UBND tỉnh Ninh Thuận; Giám đốc Sở Nội vụ tỉnh Ninh Thuận.",
      "11/2020 – 06/2025: Được Hội đồng nhân dân tỉnh bầu giữ chức vụ Ủy viên Ban Thường vụ Tỉnh ủy, Phó Chủ tịch UBND tỉnh Ninh Thuận.",
      "07/2025: Thủ tướng Chính phủ ban hành Quyết định phê chuẩn điều động đồng chí tham gia Ban Thường vụ Tỉnh ủy khóa mới và giữ chức vụ Phó Chủ tịch UBND tỉnh Khánh Hòa.",
      "10/2025 – nay: Kiêm nhiệm thêm chức vụ Phó Bí thư Thường trực Đảng ủy khối UBND tỉnh, đảm nhiệm vị trí Phó Chủ tịch Thường trực UBND tỉnh Khánh Hòa.",
    ],
    tasks: [
      "Giúp Chủ tịch UBND tỉnh điều hành các hoạt động chung của UBND tỉnh khi Chủ tịch đi vắng.",
      "Trực tiếp phụ trách các lĩnh vực: Kế hoạch và Đầu tư, Tài chính, Nội vụ, Cải cách hành chính.",
      "Làm Trưởng các Ban chỉ đạo cấp tỉnh liên quan và thực hiện nhiệm vụ khác do Chủ tịch phân công.",
    ],
  },
  "TRỊNH MINH HOÀNG": {
    name: "TRỊNH MINH HOÀNG",
    role: "Ủy viên Ban Chấp hành Đảng bộ, Phó Chủ tịch UBND tỉnh Khánh Hòa",
    dob: "27/05/1979",
    hometown: "Tỉnh Gia Lai",
    ethnicity: "Kinh",
    education: "Tiến sĩ Lâm sinh, Thạc sĩ Nông nghiệp, Kỹ sư Lâm nghiệp",
    politicalTheory: "Cao cấp",
    partyJoinDate: "25/12/2006",
    process: [
      "Trước năm 2019: Kinh qua các vị trí chuyên môn, giữ chức Phó Chủ tịch UBND huyện Ninh Sơn và Phó Giám đốc Sở.",
      "Giai đoạn thăng tiến chuyên ngành: Giám đốc Sở Nông nghiệp và Phát triển nông thôn tỉnh Ninh Thuận.",
      "05/2019 – 01/2024: Luân chuyển làm Tỉnh ủy viên, Bí thư Huyện ủy kiêm Chủ tịch HĐND huyện Ninh Hải.",
      "30/01/2024: Chính phủ ban hành Quyết định 123/QĐ-TTg phê chuẩn đồng chí giữ chức vụ Phó Chủ tịch UBND tỉnh.",
      "08/2025 – nay: Điều động, kiện toàn nhân sự mở rộng của tỉnh Khánh Hòa mới, đồng chí giữ chức vụ Phó Chủ tịch UBND tỉnh Khánh Hòa.",
    ],
    tasks: [
      "Phụ trách các lĩnh vực: Nông nghiệp, lâm nghiệp, thủy sản, phát triển nông thôn, phòng chống thiên tai.",
      "Chỉ đạo và theo dõi hoạt động của Sở Nông nghiệp và Phát triển nông thôn, Ban Quản lý các dự án nông nghiệp.",
      "Thực hiện các công việc khác theo sự phân công và ủy quyền của Chủ tịch UBND tỉnh.",
    ],
  },
  "TRẦN HÒA NAM": {
    name: "TRẦN HÒA NAM",
    role: "Ủy viên Ban Thường vụ Tỉnh ủy, Phó Chủ tịch UBND tỉnh Khánh Hòa",
    dob: "1970",
    hometown: "Xã Ninh An, thị xã Ninh Hòa, tỉnh Khánh Hòa",
    ethnicity: "Kinh",
    education:
      "Kỹ sư Thủy sinh vật học, Kỹ sư Xây dựng công trình; Cử nhân Quản trị kinh doanh",
    politicalTheory: "Cao cấp",
    process: [
      "Trước năm 2023: Kinh qua nhiều vị trí quản lý chuyên môn và giữ chức vụ Giám đốc Sở Kế hoạch và Đầu tư tỉnh Khánh Hòa.",
      "Tháng 01/2023: Tại kỳ họp bất thường của HĐND tỉnh khóa VII, đồng chí được bầu giữ chức vụ Phó Chủ tịch UBND tỉnh Khánh Hòa nhiệm kỳ 2021 - 2026.",
      "Tháng 02/2026: Được Ban Chấp hành Đảng bộ tỉnh bầu bổ sung vào Ban Thường vụ Tỉnh ủy với số phiếu tuyệt đối (54/54 phiếu).",
      "Tháng 03/2026 – nay: Ban Bí thư Trung ương Đảng chính thức ban hành quyết định chuẩn y đồng chí Trần Hòa Nam tham gia Ban Thường vụ Tỉnh ủy Khánh Hòa nhiệm kỳ 2025 - 2030. Sau đó, đồng chí tiếp tục được kiện toàn chức danh Phó Chủ tịch UBND tỉnh tại Kỳ họp thứ nhất HĐND tỉnh khóa VIII (nhiệm kỳ 2026 - 2031).",
    ],
    tasks: [
      "Đồng chí phụ trách chỉ đạo trực tiếp khối kinh tế ngành, bao gồm đầu tư công, quy hoạch đô thị, giao thông vận tải và làm việc với các tập đoàn lớn (như Tập đoàn FPT) về các dự án đô thị công nghệ trọng điểm.",
    ],
  },
  "LÊ HUYỀN": {
    name: "LÊ HUYỀN",
    role: "Ủy viên Ban Chấp hành Đảng bộ, Phó Chủ tịch UBND tỉnh Khánh Hòa",
    dob: "02/06/1972",
    hometown: "Tỉnh Gia Lai",
    ethnicity: "Kinh",
    education:
      "Thạc sĩ Quản lý Kinh tế, Kỹ sư Quản lý đất đai, Cử nhân Hành chính",
    politicalTheory: "Cao cấp",
    partyJoinDate: "13/01/2002",
    process: [
      "Giai đoạn nền tảng (tại Ninh Thuận): Kinh qua nhiều vị trí quản lý chuyên ngành, từng giữ các chức danh: Phó Giám đốc Sở Tài nguyên và Môi trường; Chủ tịch UBND huyện Thuận Nam; Chánh Văn phòng UBND tỉnh Ninh Thuận.",
      "12/2020 – 07/2025: Được bầu giữ chức vụ Tỉnh ủy viên, Phó Chủ tịch UBND tỉnh Ninh Thuận nhiệm kỳ 2021 - 2026.",
      "08/2025: Ban Bí thư Trung ương Đảng chỉ định đồng chí tham gia Ban Chấp hành Đảng bộ tỉnh Khánh Hòa. Ngay sau đó, Hội đồng nhân dân tỉnh bầu đồng chí giữ chức vụ Phó Chủ tịch UBND tỉnh Khánh Hòa với tỷ lệ phiếu cao (55/58 phiếu).",
      "09/2025 – nay: Thủ tướng Chính phủ chính thức ban hành Quyết định số phê chuẩn kết quả bầu, đồng chí chính thức điều hành công việc trên cương vị Phó Chủ tịch UBND tỉnh Khánh Hòa khóa VII và tiếp tục kiện toàn cho khóa VIII (nhiệm kỳ 2026 - 2031).",
    ],
    tasks: [
      "Giúp Chủ tịch UBND tỉnh theo dõi, chỉ đạo các lĩnh vực công tác theo sự phân công.",
      "Tham gia chỉ đạo các chương trình, dự án trọng điểm của tỉnh Khánh Hòa.",
      "Thực hiện các nhiệm vụ khác do Chủ tịch UBND tỉnh giao.",
    ],
  },
  "NGUYỄN THANH HÀ": {
    name: "NGUYỄN THANH HÀ",
    role: "Ủy viên Ban Chấp hành Đảng bộ, Phó Chủ tịch UBND tỉnh Khánh Hòa",
    dob: "28/3/1981",
    hometown: "Thành phố Hải Phòng",
    ethnicity: "Kinh",
    education: "Thạc sĩ Quản lý công, Cử nhân Hành chính học",
    politicalTheory: "Cao cấp",
    partyJoinDate: "4/11/2008",
    process: [
      "08/2008 – 02/2017: Bắt đầu công tác và kinh qua nhiều vị trí phòng, ban tại Sở Nội vụ tỉnh Khánh Hòa.",
      "02/2017 – 06/2020: Được bầu giữ chức vụ Phó Chủ tịch UBND thị xã Ninh Hòa.",
      "07/2020 – 07/2022: Thăng chức làm Tỉnh ủy viên, Giám đốc Sở Văn hóa và Thể thao tỉnh Khánh Hòa.",
      "08/2022 – 06/2025: Điều động giữ chức vụ Chánh Văn phòng UBND tỉnh Khánh Hòa.",
      "07/2025 – 10/2025: Chuyển sang giữ chức vụ Chánh Văn phòng Tỉnh ủy Khánh Hòa.",
      "10/2025 – nay: Tại Kỳ họp chuyên đề HĐND tỉnh khóa VII, đồng chí được bầu giữ chức vụ Phó Chủ tịch UBND tỉnh Khánh Hòa với số phiếu tuyệt đối 100%. Đồng chí tiếp tục được kiện toàn chức danh này cho nhiệm kỳ mới 2026 - 2031.",
    ],
    tasks: [
      "Giúp Chủ tịch UBND tỉnh theo dõi, chỉ đạo các lĩnh vực công tác theo sự phân công.",
      "Tham gia chỉ đạo các chương trình, dự án trọng điểm của tỉnh Khánh Hòa.",
      "Thực hiện các nhiệm vụ khác do Chủ tịch UBND tỉnh giao.",
    ],
  },
  "LÂM ĐÔNG": {
    name: "LÂM ĐÔNG",
    role: "Phó Bí thư Tỉnh ủy, Chủ tịch HĐND tỉnh Khánh Hòa",
    dob: "01/02/1971",
    hometown: "Gia Lai",
    ethnicity: "Kinh",
    education:
      "Thạc sĩ Xây dựng Đảng và chính quyền Nhà nước; Cử nhân sư phạm Tiếng Anh; Cử nhân giáo dục chính trị",
    politicalTheory: "Cao cấp",
    partyJoinDate: "29/01/1997",
    process: [
      "Tháng 09/1994 - 10/1994: Giáo viên Trường THCS Lê Lợi, huyện Ninh Sơn, tỉnh Ninh Thuận.",
      "Tháng 11/1994 - 10/1995: Sở Giáo dục và Đào tạo cử đi học liên thông chuẩn hóa trình độ đại học sư phạm tiếng Anh.",
      "Tháng 11/1995 - 02/2001: Chuyên viên Phòng Giáo dục huyện Ninh Sơn, tỉnh Ninh Thuận.",
      "Tháng 03/2001 - 03/2004: Huyện ủy viên, Bí thư huyện Đoàn Ninh Sơn, tỉnh Ninh Thuận.",
      "Tháng 04/2004 - 09/2007: Phó Bí thư Tỉnh đoàn Ninh Thuận.",
      "Tháng 10/2007 - 02/2010: Ủy viên BCH Trung ương Đoàn, Bí thư Tỉnh Đoàn tỉnh Ninh Thuận.",
      "Tháng 03/2010 - 08/2010: Bí thư Huyện ủy huyện Bác Ái, tỉnh Ninh Thuận.",
      "Tháng 09/2010 - 02/2011: Điều động đến công tác tại Ban Tổ chức Tỉnh ủy để chờ phân công nhiệm vụ.",
      "Tháng 03/2011 - 01/2015: Phó Chánh Văn phòng Tỉnh ủy Ninh Thuận.",
      "Tháng 02/2015 - 08/2015: Chánh Văn phòng Tỉnh ủy Ninh Thuận.",
      "Tháng 09/2015 - 11/2020: Tỉnh ủy viên, Chánh Văn phòng Tỉnh ủy Ninh Thuận (tháng 11/2020 Ủy viên Ban Thường vụ Tỉnh ủy Ninh Thuận).",
      "Tháng 12/2020 - 30/06/2025: Ủy viên Ban Thường vụ Tỉnh ủy, Trưởng Ban Tổ chức Tỉnh ủy Ninh Thuận.",
      "Từ 01/7/2025 - Tháng 9/2025: Ủy viên Ban Thường vụ Tỉnh ủy, Trưởng Ban Tuyên giáo và Dân vận Tỉnh ủy Khánh Hòa (mới).",
      "Tháng 9/2025 - 3/2026: Phó Bí thư Tỉnh ủy Khánh Hòa nhiệm kỳ 2025 - 2030, Chủ tịch HĐND tỉnh Khánh Hòa nhiệm kỳ 2021 - 2026.",
      "Từ ngày 30/3/2026: Phó Bí thư Tỉnh ủy Khánh Hòa; Chủ tịch HĐND tỉnh Khánh Hòa khóa VIII.",
    ],
    tasks: [
      "Chỉ đạo điều hành toàn bộ hoạt động của Thường trực Hội đồng nhân dân tỉnh Khánh Hòa.",
      "Trực tiếp phụ trách công tác quy hoạch, xây dựng văn bản quy phạm pháp luật, quyết định các chính sách lớn về kinh tế - xã hội địa phương.",
      "Giữ mối liên hệ công tác giữa Hội đồng nhân dân tỉnh với Ủy ban nhân dân tỉnh, Ủy ban Mặt trận Tổ quốc Việt Nam tỉnh và các cơ quan, đoàn thể địa phương.",
    ],
  },
  "LỮ THANH HẢI": {
    name: "LỮ THANH HẢI",
    role: "Ủy viên Ban Thường vụ Tỉnh ủy, Phó Chủ tịch HĐND tỉnh Khánh Hòa",
    dob: "21/7/1968",
    hometown: "Tỉnh Gia Lai",
    ethnicity: "Kinh",
    education: "Cử nhân Luật, Cử nhân Xây dựng Đảng và Chính quyền nhà nước",
    politicalTheory: "Cao cấp",
    partyJoinDate: "25/8/1999",
    process: [
      "Bí thư Đảng ủy, Chủ tịch HĐND phường Nha Trang, tỉnh Khánh Hòa (đến 10/2025).",
      "Ủy viên Ban Thường vụ Tỉnh ủy, Phó Chủ tịch HĐND tỉnh Khánh Hòa (từ 10/2025).",
      "Đại biểu Quốc hội: Khóa XIV.",
    ],
    tasks: [
      "Tham gia lãnh đạo, chỉ đạo hoạt động của Thường trực Hội đồng nhân dân tỉnh Khánh Hòa.",
      "Trực tiếp phụ trách các hoạt động giám sát, thẩm tra các văn bản quy phạm pháp luật và nghị quyết trình HĐND tỉnh.",
      "Thực hiện các nhiệm vụ khác theo sự phân công của Chủ tịch Hội đồng nhân dân tỉnh.",
    ],
  },
  "NGUYỄN KHẮC HÀ": {
    name: "NGUYỄN KHẮC HÀ",
    role: "Phó Bí thư Tỉnh ủy, Chủ tich UB MTTQ Việt Nam tỉnh Khánh Hòa",
    dob: "14/6/1973",
    hometown: "Đắk Lắk",
    ethnicity: "Kinh",
    education: "Cử nhân Luật; Cử nhân Chính trị chuyên ngành Tổ chức",
    politicalTheory: "Cao cấp",
    partyJoinDate: "03/01/2000",
    process: [
      "Tháng 8/1996 - 02/2006: Chuyên viên Văn phòng Tỉnh ủy Khánh Hòa; Chuyên viên Ban Nội chính Tỉnh ủy Khánh Hòa.",
      "Tháng 3/2006 - 3/2010: Trưởng phòng Tổng hợp, Văn phòng Tỉnh ủy Khánh Hòa.",
      "Tháng 4/2010 - 3/2012: Phó Chánh Văn phòng Tỉnh ủy Khánh Hòa.",
      "Tháng 4/2012 - 5/2015: Thành ủy viên, Phó Chủ tịch UBND thành phố Nha Trang.",
      "Tháng 6/2015 - 5/2016: Tỉnh ủy viên, Phó Giám đốc, Giám đốc Sở Văn hóa, Thể thao và Du lịch tỉnh Khánh Hòa.",
      "Tháng 6/2016 - 6/2020: Tỉnh ủy viên, Giám đốc Sở Văn hóa và Thể thao tỉnh Khánh Hòa.",
      "Tháng 7/2020 - 10/2020: Tỉnh ủy viên, Trưởng Ban Tổ chức Tỉnh ủy Khánh Hòa.",
      "Tháng 11/2020 - 30/6/2025: Ủy viên Ban Thường vụ Tỉnh ủy, Trưởng Ban Tổ chức Tỉnh ủy Khánh Hòa.",
      "Từ 01/7/2025 - Tháng 9/2025: Ủy viên Ban Thường vụ Tỉnh ủy, Trưởng Ban Tổ chức Tỉnh ủy Khánh Hòa (mới).",
      "Từ tháng 9/2025: Phó Bí thư Tỉnh ủy Khánh Hòa nhiệm kỳ 2025 - 2030; Chủ tịch Ủy ban MTTQVN tỉnh Khánh Hòa nhiệm kỳ 2024 - 2029.",
    ],
    tasks: [
      "Chỉ đạo toàn diện công tác Mặt trận Tổ quốc Việt Nam tỉnh Khánh Hòa, tăng cường khối đại đoàn kết toàn dân.",
      "Chủ trì phối hợp giữa Ủy ban Mặt trận Tổ quốc tỉnh với các cơ quan Đảng, chính quyền, ban ngành và tổ chức thành viên.",
      "Giám sát và phản biện xã hội, bảo vệ quyền và lợi ích hợp pháp của nhân dân.",
    ],
  },
  "Y Ngọc": {
    name: "Y Ngọc",
    role: "Ủy viên Ban Thường vụ Tỉnh ủy, Phó Chủ tịch Thường trực UBND Tỉnh",
    dob: "21/9/1977",
    hometown: "Xã Đăk Môn, tỉnh Quảng Ngãi",
    ethnicity: "Giẻ Triêng",
    education: "Thạc sĩ Quản lý giáo dục",
    politicalTheory: "Cao cấp",
    process: [
      "12/2010 - 4/2011: Trưởng Ban Tuyên giáo Huyện ủy Đăk Glei, tỉnh Kon Tum; Ủy viên hội đồng dân tộc của Quốc hội;",
      "5/2011 - 4/2013: Đại biểu HĐND, Trưởng Ban Kinh tế - Xã hội HĐND huyện Đăk Glei khóa XIII nhiệm kỳ 2011 - 2016.",
      "5/2013 - 7/2015: Phó Chánh Văn phòng Tỉnh ủy Kon Tum.",
      "8/2015 - 01/2017: Tỉnh Ủy viên, Phó Trưởng Ban trực Ban Tuyên giáo Tỉnh ủy, Đại biểu HĐND tỉnh Kon Tum khóa XI, nhiệm kỳ 2016 - 2021.",
      "02/2017 - 7/2020: Tỉnh Ủy viên, Bí thư Huyện ủy Đăk Glei; Đại biểu HĐND tỉnh Kon Tum khóa XI, nhiệm kỳ 2016 - 2021.",
      "7/2020 - 10/2020: Tỉnh Ủy viên, Phó trưởng Ban Tổ chức Tỉnh ủy Kon Tum.",
      "11/2020 - 4/2025: Ủy viên Ban Thường vụ Tỉnh ủy, Phó Bí thư Ban cán sự đảng UBND tỉnh, Phó Chủ tịch UBND tỉnh Kon Tum.",
      "4/2025 - 7/2025: Ủy viên Ban Thường vụ Tỉnh ủy, Phó Bí thư Thường trực Đảng ủy UBND tỉnh, Phó Chủ tịch Thường trực UBND tỉnh Kon Tum.",
      "7/2025 đến nay: Ủy viên Ban Thường vụ Tỉnh ủy, Phó Bí thư Đảng ủy UBND tỉnh, Phó Chủ tịch Thường trực UBND tỉnh Quảng Ngãi.",
    ],
    tasks: [
      "Trực tiếp phụ trách và chỉ đạo các lĩnh vực: giáo dục và đào tạo, dạy nghề; y tế, dân số, gia đình và trẻ em; văn hóa, thể thao, du lịch; lao động, thương binh và xã hội;",
      "Theo dõi và chỉ đạo hoạt động của các Sở: Giáo dục và Đào tạo, Y tế, Văn hóa và Thể thao, Du lịch, Lao động - Thương binh và Xã hội;",
      "Làm Chủ tịch các Hội đồng, Trưởng các Ban Chỉ đạo cấp tỉnh thuộc lĩnh vực được phân công phụ trách;",
      "Giữ mối liên hệ thường xuyên và phối hợp công tác giữa UBND tỉnh với Ban Tuyên giáo Tỉnh ủy, Văn phòng Tỉnh ủy, Ủy ban Mặt trận Tổ quốc Việt Nam tỉnh.",
    ],
  },
  "HỒ XUÂN TRƯỜNG": {
    name: "HỒ XUÂN TRƯỜNG",
    role: "Phó Bí thư Thường trực Tỉnh ủy Khánh Hòa",
    dob: "15/01/1979",
    hometown: "Xã Sơn Dương, huyện Lâm Thao, tỉnh Phú Thọ",
    ethnicity: "Kinh",
    education: "Thạc sĩ Quản trị kinh doanh, Kỹ sư Công nghệ thông tin",
    politicalTheory: "Cao cấp",
    process: [
      "2002 - 2007: Cán bộ công tác tại Tổng công ty Thủy tinh và Gốm xây dựng (Viglacera).",
      "2007 - 2009: Cán bộ, Chuyên viên phòng Tổ chức, Ban Tổ chức Đảng ủy Khối Doanh nghiệp Trung ương.",
      "2009 - 2015: Phó Trưởng ban, Trưởng ban Tổ chức Đảng ủy Khối Doanh nghiệp Trung ương.",
      "2015 - 2020: Ủy viên Ban Thường vụ, Trưởng ban Tổ chức Đảng ủy Khối Doanh nghiệp Trung ương.",
      "2020 - 2021: Phó Bí thư Đảng ủy Khối Doanh nghiệp Trung ương.",
      "01/2021 - 2024: Ủy viên dự khuyết Ban Chấp hành Trung ương Đảng khóa XIII, Phó Bí thư Đảng ủy Khối Doanh nghiệp Trung ương.",
      "2024 đến nay: Ủy viên dự khuyết Ban Chấp hành Trung ương Đảng khóa XIII, được Bộ Chính trị điều động, chỉ định giữ chức Phó Bí thư Thường trực Tỉnh ủy Khánh Hòa nhiệm kỳ 2020 - 2025.",
    ],
    tasks: [
      "Chịu trách nhiệm quản lý, điều hành các hoạt động thường trực của Tỉnh ủy Khánh Hòa.",
      "Phụ trách chỉ đạo, kiểm tra và đôn đốc thực hiện các chủ trương, nghị quyết của Đảng, chính sách pháp luật của Nhà nước trên địa bàn tỉnh Khánh Hòa.",
      "Trực tiếp chỉ đạo các công tác xây dựng Đảng, củng cố hệ thống chính trị địa phương và giữ mối liên hệ công tác giữa Thường trực Tỉnh ủy Khánh Hòa với các cơ quan Trung ương.",
    ],
  },
  "PHẠM THỊ XUÂN TRANG": {
    name: "PHẠM THỊ XUÂN TRANG",
    role: "Tỉnh ủy viên, Phó Chủ tịch HĐND tỉnh Khánh Hòa",
    dob: "1976",
    hometown: "Xã Vạn Hưng, huyện Vạn Ninh, tỉnh Khánh Hòa",
    ethnicity: "Kinh",
    education: "Đại học chuyên ngành Luật",
    politicalTheory: "Cao cấp",
    process: [
      "Trước 2018: Giữ chức vụ Phó Chủ tịch HĐND thành phố Nha Trang.",
      "10/2018 – 2021: Được bổ nhiệm làm Phó Giám đốc, sau đó thăng chức làm Giám đốc Sở Lao động - Thương binh và Xã hội tỉnh Khánh Hòa.",
      "2021 – 2026: Được bầu giữ chức vụ Phó Chủ tịch HĐND tỉnh Khánh Hòa khóa VII.",
      "09/2025: Trong giai đoạn kiện toàn nhân sự, đồng chí được Thường trực HĐND tỉnh thống nhất phân công điều hành toàn bộ hoạt động của HĐND tỉnh và Thường trực HĐND tỉnh Khánh Hòa khóa VII.",
      "03/2026 – nay: Tại Kỳ họp thứ nhất HĐND tỉnh Khánh Hòa khóa VIII (nhiệm kỳ 2026 - 2031), đồng chí tiếp tục được bầu tái cử giữ chức vụ Phó Chủ tịch HĐND tỉnh Khánh Hòa.",
    ],
    tasks: [
      "Tham gia chỉ đạo, điều hành các hoạt động của Thường trực Hội đồng nhân dân tỉnh Khánh Hòa.",
      "Trực tiếp phụ trách các mặt công tác pháp chế, xây dựng chính quyền và cải cách hành chính.",
      "Thực hiện các nhiệm vụ chỉ đạo điều hành theo sự phân công của Thường trực Hội đồng nhân dân tỉnh.",
    ],
  },
};

const getLeaderProfile = (
  leaderName: string,
  leaderRole: string,
  imgUrl?: any,
) => {
  if (LEADER_PROFILES[leaderName]) {
    return { ...LEADER_PROFILES[leaderName], img: imgUrl };
  }
  return {
    name: leaderName,
    role: leaderRole,
    dob: "12/08/1975",
    hometown: "Nha Trang, Khánh Hòa",
    ethnicity: "Kinh",
    education: "Thạc sĩ Quản lý công",
    politicalTheory: "Cao cấp",
    img: imgUrl,
    process: [
      "2010 - 2015: Trưởng phòng chuyên môn thuộc Sở, Ủy ban Nhân dân tỉnh Khánh Hòa.",
      "2015 - 2020: Phó Giám đốc Sở, Ủy viên Ban chấp hành Đảng bộ tỉnh Khánh Hòa.",
      "2020 - 2024: Ủy viên Ban Thường vụ, Bí thư Huyện ủy, Thị ủy tỉnh Khánh Hòa.",
      "2024 đến nay: Công tác tại Thường trực cơ quan chính quyền địa phương tỉnh.",
    ],
    tasks: [
      "Chỉ đạo thực hiện các chương trình, kế hoạch phát triển kinh tế xã hội được phân công.",
      "Phụ trách các cơ quan chuyên môn trực thuộc Ủy ban nhân dân tỉnh.",
      "Thực hiện các nhiệm vụ chỉ đạo điều hành theo phân công của Chủ tịch UBND Tỉnh.",
    ],
  };
};

const LEADERS = ORG_TABS_DATA["Lãnh đạo UBND tỉnh"].leaders;

const MOCK_DOCS = [
  {
    num: "24/2026/QĐ-UBND",
    type: "Văn bản QPPL",
    cat: "vbpq",
    title:
      "Quy chuẩn kiến trúc cảnh quan ven biển dải băng Trần Phú - Nha Trang năm 2026",
    date: "20/05/2026",
    desc: "Hướng dẫn chỉ tiêu mật độ xây dựng, khoảng lùi hành lang an toàn ven vịnh bảo tồn Nha Trang.",
    fileText:
      "Văn bản áp đặt lệnh hạn chế nâng tầng cao vùng đệm bờ biển, tăng tối đa tỷ lệ cây xanh bóng mát.",
  },
  {
    num: "01/2026/ĐUQT",
    type: "Điều ước quốc tế",
    cat: "duqt",
    title:
      "Hiệp ước song phương về An ninh Giao thông hàng hải vịnh Nha Trang và vùng phụ cận Đông Nam Á",
    date: "18/05/2026",
    desc: "Hợp tác đa phương bảo vệ môi trường sinh thái đại dương và đảm bảo giao thông luồng lạch cảng Cam Ranh.",
    fileText:
      "Toàn văn hiệp định cam kết giảm thiểu rác thải nhựa đại dương của tàu tải, tuần tra hỗ trợ ngư dân gặp sự cố.",
  },
  {
    num: "112/TB-UBND",
    type: "Thông báo",
    cat: "tb",
    title:
      "Thông báo lịch tổ chức tiếp xúc cử tri và đối thoại doanh nghiệp FDI quý II/2026",
    date: "15/05/2026",
    desc: "Thời gian diễn ra vào ngày 05/06/2026 tại Trung tâm Hội nghị 46 Trần Phú nhằm gỡ gỡ vướng mắc đầu tư.",
    fileText:
      "Toàn bộ doanh nghiệp trong các KCN và người dân đăng ký qua trang thông tin điện tử trước ngày 30/05.",
  },
  {
    num: "09/2026/NQ-HĐND",
    type: "Nghị quyết",
    cat: "vbpq",
    title:
      "Nghị quyết đẩy nhanh chuyển đổi số hành chính công liên huyện Diên Khánh - Cam Ranh",
    date: "10/05/2026",
    desc: "Gói hỗ trợ ngân sách 45 tỷ đồng xây dựng trung tâm tích hợp giải dữ liệu dân cư.",
    fileText:
      "Bắt buộc 100% hồ sơ đất đai và hộ tịch liên thông trực tuyến, phạt nặng cán bộ chậm trễ.",
  },
  {
    num: "02/2026/ĐUQT",
    type: "Điều ước quốc tế",
    cat: "duqt",
    title:
      "Hiệp định Khung hợp tác đầu tư du lịch sinh thái bền vững với Hiệp hội Lữ hành Thế giới",
    date: "09/05/2026",
    desc: "Thu hút vốn FDI xanh từ các quỹ tài chính châu Âu nhằm quy hoạch bảo tồn hệ san hô Hòn Mun.",
    fileText:
      "Thanh khoản ưu đãi từ nguồn dự phòng xanh của WB đồng tài trợ, giảm phí đóng cảng cho du thuyền chạy bằng hydro sạch.",
  },
  {
    num: "1450/QĐ-CTUBND",
    type: "Chỉ đạo điều hành",
    cat: "ubnd",
    title:
      "Quyết định xử phạt vi phạm hành lang bảo trì di tích danh thắng quốc gia Tháp Bà Ponagar",
    date: "08/05/2026",
    desc: "Phạt hành chính và cưỡng chế tháo dỡ lấn chiếm hành lang công viên phía Tây tháp.",
    fileText:
      "Sở Văn hóa phối hợp UBND TP Nha Trang cưỡng chế hoàn tất trước ngày 25/05/2026.",
  },
  {
    num: "356/CV-UBND",
    type: "Văn bản khác",
    cat: "khac",
    title:
      "Công văn phối hợp tăng cường khai thác bay quốc tế từ Hàn Quốc, Trung Quốc đến Cam Ranh",
    date: "02/05/2026",
    desc: "Khuyến khích các hãng hàng không mở tuyến mới thông qua giảm phí bãi đỗ mặt đất.",
    fileText:
      "Chính sách ưu đãi kéo dài đến hết mùa lễ hội hoa và biển hè 2026.",
  },
];

function LeaderProfileView({
  profile,
  onBack,
}: {
  profile: any;
  onBack: () => void;
}) {
  const [activeTab, setActiveTab] = useState("cong-tac");

  return (
    <div className="bg-slate-50 p-6 sm:p-10 text-left font-sans flex flex-col gap-8 text-black relative overflow-hidden">
      {/* Patriotic Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none z-[-1]">
        {/* Trống đồng background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.25] overflow-hidden">
          <img
            src={trongDongBg}
            alt="Trống Đồng"
            className="w-[1500px] h-[1500px] max-w-none object-contain pointer-events-none animate-spin-slow-very"
          />
        </div>
      </div>

      {/* Back button */}
      <div className="relative z-10">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-base font-bold uppercase tracking-wider text-white bg-red-700 hover:bg-red-600 transition-all duration-200 cursor-pointer select-none border border-red-700 px-5 py-2.5 rounded-xl shadow-md active:scale-[0.98]"
        >
          <ArrowLeft size={16} />
          <span>Quay lại trang thường trực lãnh đạo</span>
        </button>
      </div>

      {/* Main Leader Info Box */}
      <div className="relative z-10 overflow-hidden flex flex-col md:flex-row items-center text-center md:text-left gap-8 w-full bg-white p-8 sm:p-10 rounded-3xl shadow-2xl border-2 border-red-100 hover:border-red-200 group/main">
        {/* Trống đồng background centered on photo area (32px padding + 88px half-width of 176px portrait) */}
        <div className="absolute left-[120px] sm:left-[128px] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] pointer-events-none opacity-85 z-0">
          <img
            src={trongDongBg}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        {/* Lá cờ Tổ quốc làm nền chìm trong khung */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden opacity-5">
          <img
            src={coToQuoc}
            alt="Nền Cờ Tổ Quốc"
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Circular portrait frame with glowing double rotating rings */}
        <div className="relative shrink-0 z-10 w-44 h-44 flex items-center justify-center my-2">
          {/* Golden Rotating Double-Ring */}
          <div className="absolute -inset-4 pointer-events-none z-20 opacity-100 flex items-center justify-center">
            {/* Clockwise rotating layer */}
            <svg
              className="absolute w-[124%] h-[124%] animate-spin"
              style={{ animationDuration: "12s" }}
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="#facc15"
                strokeWidth="0.6"
                className="opacity-70"
              />
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="#facc15"
                strokeWidth="3"
                strokeDasharray="6 140"
                strokeDashoffset="10"
                className="drop-shadow-[0_0_5px_rgba(250,204,21,0.85)]"
              />
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="#facc15"
                strokeWidth="3"
                strokeDasharray="6 140"
                strokeDashoffset="150"
                className="drop-shadow-[0_0_5px_rgba(250,204,21,0.85)]"
              />
              <circle
                cx="50"
                cy="50"
                r="41"
                fill="none"
                stroke="#facc15"
                strokeWidth="2.2"
                strokeDasharray="95 15 30 15 65 15"
                className="drop-shadow-[0_0_8px_rgba(250,204,21,0.9)] opacity-95"
              />
            </svg>
            {/* Counter-clockwise rotating layer */}
            <svg
              className="absolute w-[124%] h-[124%] animate-spin"
              style={{ animationDuration: "8s", animationDirection: "reverse" }}
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="36"
                fill="none"
                stroke="#facc15"
                strokeWidth="0.8"
                strokeDasharray="180 15 60 15"
                className="drop-shadow-[0_0_4px_rgba(250,204,21,0.65)] opacity-85"
              />
            </svg>
          </div>

          <div className="w-40 h-40 rounded-full shadow-2xl overflow-hidden bg-slate-50 flex items-center justify-center relative border-2 border-slate-200">
            {/* Fallback avatar icon */}
            <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
              <User size={64} className="text-slate-300" />
            </div>
            {profile.img && (
              <img
                src={profile.img}
                alt={profile.name}
                className="w-full h-full object-cover object-top relative z-10"
                referrerPolicy="no-referrer"
              />
            )}
          </div>
        </div>

        {/* Right Side: Text box aligned perfectly */}
        <div className="relative z-10 flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h2 className="text-red-800 font-black text-3xl sm:text-4xl uppercase tracking-wider mb-2">
            {profile.name}
          </h2>
          <p className="text-slate-700 font-bold text-lg sm:text-base leading-relaxed whitespace-pre-line max-w-xl">
            {profile.role}
          </p>
          <div className="flex items-center gap-1.5 text-red-700 font-bold text-lg uppercase tracking-widest mt-4">
            <span className="w-2 h-2 rounded-full bg-red-700 animate-pulse"></span>
            <span>Hồ sơ thường trực lãnh đạo</span>
          </div>
        </div>
      </div>

      {/* Section 1: Thông tin cá nhân */}
      <div className="relative z-10 space-y-4">
        <h4 className="text-lg font-black text-red-900 tracking-tight uppercase border-l-4 border-red-600 pl-3">
          Thông tin cá nhân
        </h4>
        <div className="text-lg text-black space-y-2.5 font-bold pl-1">
          <p className="flex items-start gap-1.5">
            <span className="text-red-700 shrink-0 select-none font-bold">
              -
            </span>
            <span>
              <strong>Ngày sinh:</strong> {profile.dob}.
            </span>
          </p>
          <p className="flex items-start gap-1.5">
            <span className="text-red-700 shrink-0 select-none font-bold">
              -
            </span>
            <span>
              <strong>Quê quán:</strong> {profile.hometown}.
            </span>
          </p>
          <p className="flex items-start gap-1.5">
            <span className="text-red-700 shrink-0 select-none font-bold">
              -
            </span>
            <span>
              <strong>Dân tộc:</strong> {profile.ethnicity}.
            </span>
          </p>
          <p className="flex items-start gap-1.5">
            <span className="text-red-700 shrink-0 select-none font-bold">
              -
            </span>
            <span>
              <strong>Trình độ:</strong> {profile.education}.
            </span>
          </p>
          <p className="flex items-start gap-1.5">
            <span className="text-red-700 shrink-0 select-none font-bold">
              -
            </span>
            <span>
              <strong>Lý luận chính trị:</strong> {profile.politicalTheory}.
            </span>
          </p>
          {profile.partyJoinDate && (
            <p className="flex items-start gap-1.5">
              <span className="text-red-700 shrink-0 select-none font-bold">
                -
              </span>
              <span>
                <strong>Ngày vào Đảng:</strong> {profile.partyJoinDate}.
              </span>
            </p>
          )}
        </div>
      </div>

      {/* Section 2: Interactive Tabs with exact border and background as the image */}
      <div className="relative z-10 mt-4">
        <div className="flex items-stretch border-b border-slate-300">
          {/* QUÁ TRÌNH CÔNG TÁC TAB */}
          <button
            onClick={() => setActiveTab("cong-tac")}
            className={`px-5 py-3 text-lg font-black tracking-wider uppercase transition-all duration-200 cursor-pointer select-none rounded-t-xl ${
              activeTab === "cong-tac"
                ? "bg-red-700 text-white border-t border-x border-red-700"
                : "bg-slate-200/60 text-black hover:bg-slate-200"
            }`}
          >
            Quá trình công tác
          </button>
          {/* NHIỆM VỤ TAB */}
          <button
            onClick={() => setActiveTab("nhiem-vu")}
            className={`px-5 py-3 text-lg font-black tracking-wider uppercase transition-all duration-200 cursor-pointer select-none rounded-t-xl ml-1.5 ${
              activeTab === "nhiem-vu"
                ? "bg-red-700 text-white border-t border-x border-red-700"
                : "bg-slate-200/60 text-black hover:bg-slate-200"
            }`}
          >
            Nhiệm vụ
          </button>
        </div>

        {/* Tab Content Box */}
        <div className="py-6 space-y-4">
          {activeTab === "cong-tac" ? (
            <div className="text-lg text-black space-y-3.5 leading-relaxed text-justify font-bold">
              {profile.process.map((item: string, idx: number) => (
                <p key={idx} className="flex items-start gap-2 pl-1">
                  <span className="text-red-700 shrink-0 select-none font-bold">
                    -
                  </span>
                  <span>
                    {item.startsWith("- ") ? item.substring(2) : item}
                  </span>
                </p>
              ))}
            </div>
          ) : (
            <div className="text-lg text-black space-y-3.5 leading-relaxed text-justify font-bold">
              {profile.tasks.map((item: string, idx: number) => (
                <p key={idx} className="flex items-start gap-2 pl-1">
                  <span className="text-red-700 shrink-0 select-none font-bold">
                    -
                  </span>
                  <span>
                    {item.startsWith("- ") ? item.substring(2) : item}
                  </span>
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface GovPortalProps {
  onLeaderClick?: (leader: any) => void;
}

export default function GovPortal({ onLeaderClick }: GovPortalProps) {
  const [activePillar, setActivePillar] = useState(PILLARS[0]);
  const [activeSubTab, setActiveSubTab] = useState(PILLARS[0].subs[0].id);
  const [activeOrgTab, setActiveOrgTab] = useState("Thường trực Tỉnh ủy");
  const [toast, setToast] = useState<string | null>(null);

  const [newsIndex, setNewsIndex] = useState(0);
  const [bannerIndex, setBannerIndex] = useState(0);

  const celebratoryBanners = [
    {
      id: "cb-1",
      badge: "LỄ KỶ NIỆM CHÍNH THỨC",
      title: "Kỷ niệm 136 năm Ngày sinh Chủ tịch Tôn Đức Thắng (20/08)",
      desc: "Tuyên truyền truyền thống yêu nước cách mạng kiên cường, tấm gương rực sáng về đạo đức, lối sống giản dị của đồng chí Tôn Đức Thắng - người chiến sĩ Độc lập lỗi lạc.",
      footerLeft: "* KHÁNH HÒA VỮNG BƯỚC ĐI LÊN *",
      footerRight: "KỶ NIỆM CÁCH MẠNG",
      bgGradient: "from-[#8B0000] via-[#B22222] to-[#D1111E]",
      img: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=1200",
    },
    {
      id: "cb-2",
      badge: "SỰ KIỆN QUAN TRỌNG TRONG NĂM",
      title: "Kỷ niệm 79 năm Cách mạng Tháng Tám và Quốc khánh (02/09)",
      desc: "Ngày Quốc khánh thiêng liêng rực rỡ cờ hoa, kỷ niệm mốc son lịch sử khai sinh ra nước Việt Nam Dân chủ Nhân dân, thắp sáng khát vọng vươn tầm và phát triển thịnh vượng.",
      footerLeft: "* KHÁNH HÒA ĐOÀN KẾT, SÁNG TẠO *",
      footerRight: "HÀO KHÍ TRUYỀN THỐNG",
      bgGradient: "from-[#990000] via-[#C92A2A] to-[#E03131]",
      img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200",
    },
    {
      id: "cb-3",
      badge: "MỐC SON LỊCH SỬ ĐỊA PHƯƠNG",
      title: "Kỷ niệm ngày Giải phóng tỉnh Khánh Hòa và TP Nha Trang",
      desc: "Sự kiện hào hùng đánh dấu mốc kết thúc thắng lợi cuộc kháng chiến chống Mỹ cứu nước, khôi phục hòa bình, mở ra kỷ nguyên mới.",
      footerLeft: "* CHUYỂN ĐỔI SỐ QUỐC GIA *",
      footerRight: "KỶ NGUYÊN SỐ MỚI",
      bgGradient: "from-[#111827] via-[#7F1D1D] to-[#991B1B]",
      img: "https://images.unsplash.com/photo-1568402102990-bc541580b59f?q=80&w=1200",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % celebratoryBanners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const LEADERS_NEWS = [
    {
      title:
        "Chủ tịch UBND tỉnh chủ trì phiên họp rà soát quy hoạch phân khu biển",
      summary:
        "UBND tỉnh Khánh Hòa họp chỉ đạo rà soát quy hoạch chi tiết các phân khu đô thị biển tại Nha Trang và Cam Lâm, hướng tới phát triển đô thị thông minh và bảo tồn thiên nhiên biển.",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1400&auto=format&fit=crop",
      date: "19/05/2026",
    },
    {
      title:
        "Phó Chủ tịch thường trực bàn giải pháp tháo gỡ khó khăn về cát san lấp",
      summary:
        "Chỉ đạo các đơn vị khẩn trương tháo gỡ khó khăn về nguồn vật liệu xây dựng, đẩy nhanh tiến độ thi công hạ tầng giao thông trọng điểm.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1400&auto=format&fit=crop",
      date: "18/05/2026",
    },
    {
      title:
        "Đoàn công tác Tỉnh ủy kiểm tra nâng cao hiệu quả cải cách hành chính",
      summary:
        "Đánh giá tích cực mô hình một cửa liên thông hiện đại, tăng cường nâng cấp hạ tầng số phục vụ thủ tục công trực tuyến cho công dân.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1400&auto=format&fit=crop",
      date: "18/05/2026",
    },
    {
      title: "Khánh Hòa sẵn sàng chuẩn bị cho sự kiện Festival Biển Nha Trang",
      summary:
        "Hoàn thiện các phương án chi tiết về phân luồng giao thông, chỉnh trang đô thị, đảm bảo mĩ quan phục vụ chuỗi hoạt động nghệ thuật văn hóa đặc sắc.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop",
      date: "17/05/2026",
    },
    {
      title:
        "Hội nghị Ban Chấp hành Đảng bộ tỉnh Khánh Hòa lần thứ 18 khóa XVIII",
      summary:
        "Tập trung thảo luận, cho ý kiến về báo cáo tình hình thực hiện nhiệm vụ phát triển kinh tế - xã hội, đầu tư công và công tác nhân sự, xây dựng Đảng.",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1400&auto=format&fit=crop",
      date: "16/05/2026",
    },
  ];

  // States for interactive widgets
  const [trTabs, setTrTabs] = useState("nhiemvu"); // Phân công, Hoạt động, Chỉ đạo, Lịch, Tiếp dân
  const [selectedLeader, setSelectedLeader] = useState(LEADERS[1]);
  const [selectedLocalEntity, setSelectedLocalEntity] =
    useState<string>("Phường Xương Huân");
  const [activeLeaderProfile, setActiveLeaderProfile] = useState<any | null>(
    null,
  );
  const [docSearch, setDocSearch] = useState("");
  const [docFilter, setDocFilter] = useState("all");
  const [readingDoc, setReadingDoc] = useState<any | null>(null);

  // Media states
  const [mediaTab, setMediaTab] = useState("photos");
  const [audioPlaying, setAudioPlaying] = useState(false);

  // Public budget / draft submission states
  const [draftComments, setDraftComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");
  const [infoPublicTab, setInfoPublicTab] = useState("budget");

  // State for Góp ý Dự thảo văn bản QPPL trực tiếp
  const [selectedDraftTitle, setSelectedDraftTitle] = useState(
    "Dự thảo Quy chuẩn kiến trúc cảnh quan ven biển dải băng Trần Phú - Nha Trang",
  );
  const [draftCitizenName, setDraftCitizenName] = useState("");
  const [draftCitizenContact, setDraftCitizenContact] = useState("");
  const [draftCitizenOpinion, setDraftCitizenOpinion] = useState("");
  const [draftSuccessMsg, setDraftSuccessMsg] = useState("");

  // Tra cứu states
  const [searchSpokesman, setSearchSpokesman] = useState("");
  const [lookupSocialId, setLookupSocialId] = useState("");
  const [socialResult, setSocialResult] = useState<any | null>(null);
  const [landStreet, setLandStreet] = useState("Trần Phú");
  const [landPriceResult, setLandPriceResult] = useState<any | null>(null);

  // Poll state
  const [voted, setVoted] = useState(false);
  const [poleValue, setPoleValue] = useState("xa-hoi");
  const [pollResults, setPollResults] = useState({
    xaHoi: 64,
    moiTruong: 22,
    haTang: 14,
  });

  // Web linkages dropdown
  const [webLinkGroup, setWebLinkGroup] = useState("");

  // Online public services simulator
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [serviceStep, setServiceStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    cardId: "",
    address: "",
    desc: "",
    agreed: false,
  });
  const [appliedCode, setAppliedCode] = useState<string | null>(null);

  // Utility portal states
  const [selectedUtility, setSelectedUtility] = useState<{
    group: string;
    title: string;
    details: string;
  } | null>(null);
  const [searchUtilityQuery, setSearchUtilityQuery] = useState("");

  // Anniversary & Weekly newsletter states
  const [activeAnniversaryIdx, setActiveAnniversaryIdx] = useState(0);
  const [activeWeeklyNewsId, setActiveWeeklyNewsId] = useState<string | null>(
    null,
  );
  const [activeDocCategory, setActiveDocCategory] = useState(
    "Văn bản chỉ đạo điều hành",
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveAnniversaryIdx((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Custom question
  const [qaInput, setQaInput] = useState("");
  const [qaList, setQaList] = useState([
    {
      q: "Thời hạn cấp giấy chứng nhận nhận quyền sử dụng đất nông nghiệp là bao lâu?",
      a: "Theo quy định, không quá 30 ngày kể từ ngày tiếp nhận đủ hồ sơ hợp lệ tại Văn phòng Đăng ký đất đai.",
    },
    {
      q: "Thủ tục xin cấp phép cải tạo nâng cấp nhà ở riêng lẻ nội đô như thế nào?",
      a: "Nộp hồ sơ trực tuyến gồm: đơn đề nghị, bản vẽ phương án thiết kế kiến trúc cải tạo và bản sao giấy tờ đất đai sở hữu.",
    },
  ]);

  // Consultation state
  const [consultMessages, setConsultMessages] = useState([
    {
      sender: "assistant",
      text: "Chào mừng Quý khách đến với Cổng tham vấn ý kiến nhân dân tỉnh Khánh Hòa. Hãy gửi ý kiến đóng góp hoặc thắc mắc của bạn về các dự thảo quy hoạch mới nhất.",
    },
  ]);
  const [consultInput, setConsultInput] = useState("");
  const consultChatEndRef = useRef<HTMLDivElement>(null);

  const handleSendConsult = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consultInput.trim()) return;

    const userText = consultInput.trim();
    setConsultMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setConsultInput("");

    setTimeout(() => {
      let replyText =
        "Xin cảm ơn ý kiến đóng góp quý báu của bạn. Hệ thống đã tiếp nhận nội dung và chuyển thẳng đến tổ soạn thảo Văn bản QPPL của Sở Xây dựng để đối chiếu, phân tích, bổ sung quy hoạch.";

      const lowerText = userText.toLowerCase();
      if (
        lowerText.includes("quy hoạch") ||
        lowerText.includes("biển") ||
        lowerText.includes("nha trang")
      ) {
        replyText =
          "Cảm ơn Ông/Bà đóng góp về Quy hoạch dải ven biển Nha Trang. Các ý kiến bảo tồn hệ sinh cảnh biển, mở rộng không gian xanh đang được Ban thường vụ xem xét cực kỳ nghiêm túc.";
      } else if (
        lowerText.includes("y tế") ||
        lowerText.includes("sức khỏe") ||
        lowerText.includes("bệnh viện")
      ) {
        replyText =
          "Ý kiến về đồng bộ cơ sở dữ liệu hồ sơ sức khỏe điện tử đã được ghi nhận. Sở Y tế đang tích cực tối ưu hóa quy trình liên thông giữa các bệnh viện tuyến đầu.";
      } else if (
        lowerText.includes("thủ tục") ||
        lowerText.includes("hành chính") ||
        lowerText.includes("một cửa")
      ) {
        replyText =
          "Ý kiến về cải cách một cửa số đã được chuyển tới Văn phòng UBND tỉnh Khánh Hòa để số hóa và rút ngắn tối đa thời gian xử lý hồ sơ hành chính.";
      }

      setConsultMessages((prev) => [
        ...prev,
        { sender: "assistant", text: replyText },
      ]);
    }, 1000);
  };

  useEffect(() => {
    if (consultChatEndRef.current) {
      consultChatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [consultMessages]);

  const showNotification = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 4000);
  };

  const handlePillarChange = (pillar: (typeof PILLARS)[0]) => {
    setActivePillar(pillar);
    setActiveSubTab(pillar.subs[0].id);
  };

  const handleVote = (e: React.FormEvent) => {
    e.preventDefault();
    if (voted) return;
    if (poleValue === "xa-hoi") {
      setPollResults((prev) => ({ ...prev, xaHoi: prev.xaHoi + 1 }));
    } else if (poleValue === "moi-truong") {
      setPollResults((prev) => ({ ...prev, moiTruong: prev.moiTruong + 1 }));
    } else {
      setPollResults((prev) => ({ ...prev, haTang: prev.haTang + 1 }));
    }
    setVoted(true);
    showNotification(
      "Cảm ơn bạn đã bình chọn! Ý kiến đóng góp đã được ghi nhận trực tiếp.",
    );
  };

  const handleLookupSocial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lookupSocialId.trim()) {
      showNotification("Vui lòng nhập số thẻ BHXH để tra cứu.");
      return;
    }
    // Simulate lookup
    setSocialResult({
      code: lookupSocialId,
      fullName: "NGUYỄN VĂN AN",
      cardId: "056096001235",
      type: "BHXH Bắt buộc (Nhóm Công chức)",
      timeline: "Hạn đóng đến: 31/12/2026 - Tốc độ tích lũy: 11 năm 4 tháng",
      status: "HỢP LỆ - Đang hoạt động thông suốt",
    });
    showNotification("Tra cứu hoàn tất cổng BHXH tỉnh!");
  };

  const handleLookupLandPrice = (e: React.FormEvent) => {
    e.preventDefault();
    const streets: Record<string, string> = {
      "Trần Phú": "150,000,000 VNĐ / m²",
      "Hùng Vương": "95,000,000 VNĐ / m²",
      "Vân Đồn": "45,000,000 VNĐ / m²",
      "Lê Thánh Tôn": "110,000,000 VNĐ / m²",
      "Phạm Văn Đồng": "75,000,000 VNĐ / m²",
    };
    const price =
      streets[landStreet] || "32,000,000 VNĐ / m² (Khu vực lân cận)";
    setLandPriceResult({ street: landStreet, price });
    showNotification(`Đã cập nhật bảng giá đất đường ${landStreet}!`);
  };

  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    setDraftComments((prev) => [...prev, newComment]);
    setNewComment("");
    showNotification(
      "Gửi ý kiến đóng góp cho dự thảo thành công! Văn phòng sở sẽ tiếp nhận phản hồi.",
    );
  };

  const handlePostQa = (e: React.FormEvent) => {
    e.preventDefault();
    if (!qaInput.trim()) return;
    setQaList((prev) => [
      ...prev,
      {
        q: qaInput,
        a: "Hệ thống đã chuyển câu hỏi của bạn đến cơ quan có thẩm quyền liên quan. Chúng tôi sẽ phản hồi bằng văn bản chính thức và cập nhật tại mục Tra cứu trực tuyến trong vòng 3 ngày làm việc.",
      },
    ]);
    setQaInput("");
    showNotification("Đã gửi câu hỏi tư vấn hành chính công công bộc!");
  };

  const handleApplyService = (e: React.FormEvent) => {
    e.preventDefault();
    if (serviceStep === 1) {
      if (!formData.name || !formData.cardId) {
        showNotification("Vui lòng nhập đầy đủ thông tin định danh.");
        return;
      }
      setServiceStep(2);
    } else {
      if (!formData.agreed) {
        showNotification(
          "Bạn phải cam kết thông tin khai báo là hoàn toàn đúng sự thật.",
        );
        return;
      }
      const trackingCode = `HSO-${Math.floor(100000 + Math.random() * 900000)}`;
      setAppliedCode(trackingCode);
      showNotification(
        `Nộp hồ sơ trực tuyến thành công! Mã hồ sơ theo dõi: ${trackingCode}`,
      );
    }
  };

  return (
    <div className="w-full text-left relative">
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-[9999] bg-gradient-to-r from-red-700 to-red-600 text-white font-bold text-lg py-3.5 px-5 rounded-2xl shadow-2xl flex items-center gap-3 border border-red-500/20 max-w-sm"
          >
            <CheckCircle
              size={18}
              className="text-red-400 shrink-0 animate-bounce"
            />
            <span>{toast}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Container - Standard web frame width without outer borders */}
      <div className="mx-auto max-w-7xl px-4 xl:px-0 py-8 flex flex-col justify-between min-h-[700px]">
        <div>
          {/* PILLAR 1: TỔ CHỨC & LÃNH ĐẠO - WIDESCREEN NEWS PAGE LAYOUT */}
          {activePillar.id === "lanhdao" && (
            <div className="space-y-8">
              {/* SECTION 1 (PRIORITY): HOẠT ĐỘNG CỦA LÃNH ĐẠO TỈNH (NỔI BẬT HƠN CẢ) */}
              {/* BOTTOM ROWS: 2 COLUMNS FOR SECTION 2 (LEFT) AND 2.1, 3 (RIGHT) */}
              <div className="flex flex-col gap-0 bg-white rounded-3xl overflow-hidden border border-slate-200">
                {/* NEW HORIZONTAL NAVIGATION BAR */}
                <div className="bg-red-700 p-8 flex flex-col lg:flex-row gap-10 items-center justify-between">
                  {/* EMBLEM AND TITLE */}
                  <div className="flex items-center gap-6 lg:pr-10 lg:py-2 lg:border-r-2 border-red-600 shrink-0">
                    <img
                      src={quocHuy}
                      alt="Quốc huy Việt Nam"
                      referrerPolicy="no-referrer"
                      className="w-24 h-24 md:w-28 md:h-28 object-contain"
                    />
                    <h3 className="text-white font-black text-2xl md:text-3xl lg:text-[32px] uppercase leading-[1.3] tracking-wider whitespace-nowrap">
                      BỘ MÁY
                      <br /> TỔ CHỨC
                    </h3>
                  </div>

                  {/* BUTTONS GRID */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 w-full max-w-5xl ml-auto">
                    {[
                      "Thường trực Tỉnh ủy",
                      "Thường trực HĐND tỉnh",
                      "Lãnh đạo UBND tỉnh",
                      "Lãnh đạo xã, phường, đặc khu",
                    ].map((label, idx) => (
                      <div
                        key={idx}
                        onClick={() => setActiveOrgTab(label)}
                        className={`group flex items-center justify-center gap-2 text-lg md:text-xl py-4 px-6 rounded-xl font-black cursor-pointer transition-all text-center tracking-tight ${activeOrgTab === label ? "bg-red-700 ring-2 ring-white scale-[1.02]" : "bg-white text-red-800 hover:bg-red-50"}`}
                      >
                        <div
                          className={
                            activeOrgTab === label ? "text-[#FFF700]" : ""
                          }
                        >
                          {label === "Thường trực Tỉnh ủy" ? (
                            <Building size={20} />
                          ) : label === "Thường trực HĐND tỉnh" ? (
                            <Users size={20} />
                          ) : label === "Lãnh đạo UBND tỉnh" ? (
                            <Contact size={20} />
                          ) : (
                            <Map size={20} />
                          )}
                        </div>
                        <span
                          className={`whitespace-nowrap ${activeOrgTab === label ? "text-[#FFF700]" : ""}`}
                        >
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* MAIN CONTENT AREA */}
                <div className="flex flex-col gap-0 w-full">
                  {/* SECTION 2.1 (TRANG RIÊNG CHỦ TỊCH LÃNH ĐẠO) - UPDATED TO MATCH REFERENCE IMAGE */}
                  {activeOrgTab !== "Lịch công tác" &&
                    ORG_TABS_DATA[activeOrgTab] &&
                    (activeLeaderProfile ? (
                      <LeaderProfileView
                        profile={activeLeaderProfile}
                        onBack={() => setActiveLeaderProfile(null)}
                      />
                    ) : (
                      <div className="overflow-hidden flex flex-col w-full h-auto mt-0 border-b border-slate-200">
                        {/* Top Header Banner */}
                        <div className="bg-red-700 px-6 py-4 flex justify-between items-center text-white min-h-[80px]">
                          <div className="flex flex-col justify-center">
                            <p className="text-red-100 text-lg font-bold uppercase tracking-widest pl-0.5">
                              Trang tin chi tiết
                            </p>
                            <h3 className="text-2xl font-black uppercase tracking-wider drop-">
                              {ORG_TABS_DATA[activeOrgTab].title.toUpperCase()}
                            </h3>
                          </div>
                          <Building
                            size={32}
                            className="text-red-100 drop- opacity-90"
                          />
                        </div>

                        {/* NEW: LOCAL ENTITIES SELECTOR FOR COMMUNE/WARD TAB */}
                        {activeOrgTab === "Lãnh đạo xã, phường, đặc khu" && (
                          <div className="bg-slate-100 p-6 border-b border-slate-200 flex flex-col gap-4">
                            <div className="flex items-center gap-2 text-slate-700 font-black uppercase text-base tracking-wider">
                              <MapPin size={18} className="text-red-700" />
                              <span>
                                Danh sách đơn vị hành chính & đặc khu:
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {Object.keys(LOCAL_ENTITIES_DATA).map(
                                (entity) => (
                                  <button
                                    key={entity}
                                    onClick={() =>
                                      setSelectedLocalEntity(entity)
                                    }
                                    className={`px-5 py-2.5 rounded-xl text-base font-bold transition-all border ${
                                      selectedLocalEntity === entity
                                        ? "bg-red-700 text-[#FFF700] border-red-700 scale-[1.05] z-10"
                                        : "bg-white text-slate-700 border-slate-200 hover:bg-red-50 hover:text-red-700 hover:border-red-200"
                                    }`}
                                  >
                                    {entity}
                                  </button>
                                ),
                              )}
                            </div>
                          </div>
                        )}

                        {/* Leaders List Banner */}
                        <div className="bg-slate-50 relative py-10 px-6 md:px-10 overflow-hidden min-h-[550px] flex flex-col justify-center gap-10">
                          {/* MAIN LEADER CARD */}
                          {(() => {
                            const leaders =
                              activeOrgTab === "Lãnh đạo xã, phường, đặc khu"
                                ? LOCAL_ENTITIES_DATA[selectedLocalEntity]
                                    .leaders
                                : ORG_TABS_DATA[activeOrgTab].leaders;

                            const mainLeader = leaders[0];
                            if (!mainLeader) return null;

                            return (
                              <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-8 w-full mt-2 bg-white hover:bg-slate-50 transition-all duration-500 p-8 rounded-3xl border border-slate-200 border-l-8 border-l-red-700 group/main overflow-hidden">
                                {/* Trống đồng background centered on photo area (80px padding + 80px half-width of 160px portrait) */}
                                <div className="absolute left-[112px] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] pointer-events-none opacity-80 z-0">
                                  <img
                                    src={trongDongBg}
                                    alt=""
                                    className="w-full h-full object-contain"
                                  />
                                </div>

                                <div className="relative shrink-0 z-10 group-hover/main:scale-105 transition-transform duration-300">
                                  <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden bg-slate-100 flex items-center justify-center relative border-4 border-slate-50 z-10">
                                    <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
                                      <User
                                        size={64}
                                        className="text-slate-300"
                                      />
                                    </div>
                                    {mainLeader.img && (
                                      <img
                                        src={mainLeader.img}
                                        alt={mainLeader.name}
                                        className="w-full h-full object-cover object-top relative z-10 transition-transform duration-500 group-hover/main:scale-110"
                                        referrerPolicy="no-referrer"
                                      />
                                    )}
                                  </div>
                                </div>
                                <div className="relative z-10 flex flex-col h-full justify-center mt-2">
                                  <h2 className="text-red-700 font-black text-4xl uppercase tracking-wider mb-2 transition-colors">
                                    {mainLeader.name}
                                  </h2>
                                  <p className="text-black font-bold text-xl leading-relaxed whitespace-pre-line max-w-xl mb-6">
                                    {mainLeader.role}
                                  </p>
                                  <button
                                    onClick={() => {
                                      if (onLeaderClick) {
                                        onLeaderClick(mainLeader);
                                      } else {
                                        setActiveLeaderProfile(
                                          getLeaderProfile(
                                            mainLeader.name,
                                            mainLeader.role,
                                            mainLeader.img,
                                          ),
                                        );
                                      }
                                    }}
                                    className="flex items-center justify-start gap-1.5 text-red-700 hover:text-red-800 text-lg font-bold tracking-wide transition-colors cursor-pointer group/btn mt-auto bg-red-50 px-4 py-2 rounded-lg w-fit"
                                  >
                                    <span>Trang tin chi tiết</span>
                                    <ArrowRight
                                      size={15}
                                      className="group-hover/btn:translate-x-1.5 transition-transform"
                                    />
                                  </button>
                                </div>
                              </div>
                            );
                          })()}

                          {/* SUB LEADERS GRID */}
                          {(() => {
                            const leaders =
                              activeOrgTab === "Lãnh đạo xã, phường, đặc khu"
                                ? LOCAL_ENTITIES_DATA[selectedLocalEntity]
                                    .leaders
                                : ORG_TABS_DATA[activeOrgTab].leaders;

                            const subLeaders = leaders.slice(1);
                            if (subLeaders.length === 0) return null;

                            return (
                              <div
                                className={`relative z-10 grid gap-6 w-full mb-4 ${(() => {
                                  const count = subLeaders.length;
                                  if (count === 1) return "grid-cols-1";
                                  if (count === 2)
                                    return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2";
                                  if (count === 3)
                                    return "grid-cols-1 sm:grid-cols-3 lg:grid-cols-3";
                                  if (count === 4)
                                    return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
                                  if (count === 5)
                                    return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5";
                                  return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3";
                                })()}`}
                              >
                                {subLeaders.map((leader, i) => (
                                  <div
                                    key={i}
                                    className="relative overflow-hidden flex flex-col items-center text-center gap-5 bg-white hover:bg-slate-50 transition-all duration-300 px-3 sm:px-4 lg:px-2 xl:px-4 py-6 rounded-2xl border border-slate-200 border-l-4 border-l-red-700 hover: flex-1 group/sub"
                                  >
                                    <div className="absolute top-[72px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-75 z-0">
                                      <img
                                        src={trongDongBg}
                                        alt=""
                                        className="w-full h-full object-contain"
                                      />
                                    </div>

                                    <div className="relative shrink-0 z-10 group-hover/sub:scale-105 transition-transform duration-300">
                                      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-slate-100 flex items-center justify-center relative border-2 border-slate-50 z-10">
                                        <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
                                          <User
                                            size={36}
                                            className="text-slate-300"
                                          />
                                        </div>
                                        {leader.img && (
                                          <img
                                            src={leader.img}
                                            alt={leader.name}
                                            className="w-full h-full object-cover object-top relative z-10 transition-transform duration-500 group-hover/sub:scale-110"
                                            referrerPolicy="no-referrer"
                                          />
                                        )}
                                      </div>
                                    </div>

                                    <div className="relative z-10 flex flex-col flex-1 h-full items-center justify-between w-full gap-3">
                                      <div className="flex flex-col items-center w-full">
                                        <h3 className="text-red-700 font-black text-xl uppercase tracking-tight mb-2 transition-colors whitespace-nowrap truncate w-full">
                                          {leader.name}
                                        </h3>
                                        <div className="flex flex-col items-center justify-center w-full min-h-[44px] gap-1">
                                          {leader.role
                                            .split("\n")
                                            .map((line, idx) => (
                                              <p
                                                key={idx}
                                                className={`text-black font-bold leading-snug text-base ${idx === 0 && line.includes("Ủy viên") ? "whitespace-nowrap tracking-tight" : "text-center"}`}
                                              >
                                                {line}
                                              </p>
                                            ))}
                                        </div>
                                      </div>
                                      <button
                                        onClick={() => {
                                          if (onLeaderClick) {
                                            onLeaderClick(leader);
                                          } else {
                                            setActiveLeaderProfile(
                                              getLeaderProfile(
                                                leader.name,
                                                leader.role,
                                                leader.img,
                                              ),
                                            );
                                          }
                                        }}
                                        className="flex items-center justify-center gap-1.5 text-red-700 hover:text-red-700 text-lg font-bold transition-colors cursor-pointer group/btn mt-auto bg-red-50/50 px-4 py-1.5 rounded-lg"
                                      >
                                        <span>Trang tin chi tiết</span>
                                        <ArrowRight
                                          size={15}
                                          className="group-hover/btn:translate-x-1.5 transition-transform"
                                        />
                                      </button>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            );
                          })()}
                        </div>
                      </div>
                    ))}

                  {/* SECTION 3 (LỊCH TUẦN & TIẾP DÂN) */}
                  <div className="bg-white flex flex-col lg:flex-row items-stretch">
                    {/* News Image */}
                    <div className="h-48 lg:h-auto lg:w-[30%] overflow-hidden relative border-b lg:border-b-0 lg:border-r border-slate-100 bg-slate-50 shrink-0">
                      <img
                        src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=600"
                        referrerPolicy="no-referrer"
                        alt="Lịch công tác khối nhà nước"
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-3 left-3 text-lg bg-red-700 text-white font-black uppercase tracking-widest px-2 py-0.5 rounded">
                        Lịch Công Tác
                      </span>
                      {/* Lịch công tác full width button */}
                      <div
                        onClick={() => {
                          window.dispatchEvent(
                            new CustomEvent("openWeeklySchedule"),
                          );
                        }}
                        className="absolute bottom-0 w-full bg-gradient-to-r from-red-700 to-red-900 hover:from-yellow-400 hover:to-yellow-500 text-white hover:text-red-950 py-4 text-lg font-extrabold uppercase tracking-widest text-center cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 group/schbtn border-t border-white/15 overflow-hidden"
                      >
                        <Calendar
                          size={16}
                          className="text-white/80 group-hover/schbtn:text-red-950 transition-colors group-hover/schbtn:scale-110 duration-300"
                        />
                        <span>Lịch làm việc đầy đủ</span>
                        <ArrowRight
                          size={15}
                          className="transform translate-x-0 group-hover/schbtn:translate-x-1.5 transition-transform duration-300 group-hover/schbtn:text-red-950"
                        />
                      </div>
                    </div>

                    <div className="p-6 flex flex-col w-full space-y-4">
                      <h4 className="text-lg font-black text-black uppercase tracking-wide border-b border-slate-200 pb-2">
                        LỊCH LÀM VIỆC TUẦN & TIẾP DÂN
                      </h4>

                      <p className="text-lg text-black font-semibold leading-relaxed">
                        Cập nhật thời gian biểu công tác hành chính chính quy
                        cấp tỉnh phối hợp ban công vụ Tỉnh Khánh Hòa.
                      </p>

                      {/* Weekly schedule inline list */}
                      <div className="space-y-3">
                        {[
                          {
                            day: "Thứ Hai (08:00)",
                            event:
                              "Giao ban rà soát giải ngân chỉ tiêu công trình đầu tư trọng điểm",
                          },
                          {
                            day: "Thứ Ba (14:00)",
                            event:
                              "Tiếp đón Ủy ban Xúc tiến Thương mại Hàn Quốc định hướng FDI",
                          },
                          {
                            day: "Thứ Năm (09:00)",
                            event:
                              "Họp tháo gỡ vướng mắc hồ sơ đất đai trực tuyến qua mạng một cửa",
                          },
                        ].map((row, idx) => (
                          <div
                            key={idx}
                            className="text-lg p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col gap-1 font-bold"
                          >
                            <span className="text-red-700 text-lg font-black">
                              {row.day}
                            </span>
                            <p className="text-black leading-normal font-semibold">
                              {row.event}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2">
                        <div className="p-4 bg-slate-100 rounded-2xl border border-slate-200 text-lg text-black leading-relaxed font-bold">
                          🏢{" "}
                          <strong className="text-black">
                            Lịch Tiếp Dân Định Kỳ:
                          </strong>{" "}
                          Thứ Năm tuần cuối cùng hàng tháng tại{" "}
                          <span className="text-red-700">
                            Ban Tiếp công dân tỉnh, số 2 Ngô Quyền, Nha Trang.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* NEWS SECTION (Moved from top) */}
              <div className="overflow-hidden w-full mt-10 mb-10">
                {/* Content Section: 1 big news, 3 small news below */}
                <div className="py-2 grid grid-cols-12 gap-8">
                  {/* Left: Main Featured News + 3 Vertical News */}
                  <div className="col-span-8 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                    {/* Header inside the block, styled perfectly like homepage */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-5 md:p-6 border-b border-slate-100 bg-white z-10 relative">
                      <div>
                        <h2 className="text-[24px] md:text-[28px] font-black uppercase tracking-tight flex items-center gap-3 text-red-800 leading-tight">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-700 flex items-center justify-center shrink-0 shadow-md">
                            <Users size={24} className="text-white" />
                          </div>
                          <span>
                            CHỈ ĐẠO, ĐIỀU HÀNH CỦA CHÍNH PHỦ,
                            <br className="hidden md:inline" />{" "}
                            <span className="inline-block">
                              THỦ TƯỚNG CHÍNH PHỦ
                            </span>
                          </span>
                        </h2>
                      </div>
                    </div>

                    {/* Main Featured News Item */}
                    <div className="h-[500px] sm:h-[580px] relative group w-full cursor-pointer shrink-0">
                      <img
                        src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200"
                        referrerPolicy="no-referrer"
                        alt="Chính phủ ban hành Nghị quyết thúc đẩy tăng trưởng kinh tế vĩ mô"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent pointer-events-none"></div>
                      <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                        <span className="inline-block px-3 py-1.5 bg-red-700 text-white text-lg uppercase font-black tracking-widest rounded-md mb-4 shadow-md">
                          Chỉ đạo nổi bật
                        </span>
                        <h2 className="text-2xl md:text-4xl font-black text-white leading-tight drop-shadow-lg max-w-4xl group-hover:text-yellow-400 transition-colors">
                          Chính phủ ban hành Nghị quyết thúc đẩy tăng trưởng
                          kinh tế vĩ mô, khơi thông nguồn lực đầu tư
                        </h2>
                      </div>
                    </div>

                    {/* 3 Smaller News Items Below (Vertical) */}
                    <div className="flex flex-col">
                      {[
                        {
                          img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600",
                          category: "Cải Cách Thể Chế",
                          title:
                            "Thủ tướng Chính phủ chỉ đạo khẩn trương hoàn thiện các dự thảo Luật trình Quốc hội",
                          date: "2 giờ trước",
                        },
                        {
                          img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600",
                          category: "Đối Ngoại Ngoại Giao",
                          title:
                            "Chính phủ chủ động đẩy mạnh hợp tác đối ngoại đa phương và thu hút đầu tư chất lượng",
                          date: "5 giờ trước",
                        },
                        {
                          img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600",
                          category: "Phát Triển Số",
                          title:
                            "Đẩy nhanh tiến trình số hóa dịch vụ công quốc gia, xây dựng hạ tầng dữ liệu đồng bộ",
                          date: "8 giờ trước",
                        },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className={`flex gap-4 p-4 hover:bg-slate-50 transition-all cursor-pointer group ${idx !== 2 ? "border-b border-slate-100" : ""}`}
                        >
                          <img
                            src={item.img}
                            alt={item.title}
                            className="w-32 h-24 object-cover rounded-xl shrink-0"
                          />
                          <div className="flex flex-col justify-center">
                            <span className="text-base uppercase font-black text-red-700 mb-1">
                              {item.category}
                            </span>
                            <h6 className="font-bold text-black leading-snug group-hover:text-red-700 transition-colors line-clamp-2">
                              {item.title}
                            </h6>
                            <span className="text-base text-black mt-2">
                              {item.date}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Map */}
                  <MapSection />
                </div>
              </div>

              {/* THÔNG TIN CHỈ ĐẠO & ĐIỀU HÀNH SECTION */}
              <div className="mt-10 mb-10 w-screen relative left-1/2 -translate-x-1/2 bg-black border-y border-yellow-400/30 py-12 xl:py-16 overflow-hidden">
                {/* Subtle Background Image with Gradient Overlay */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1572025442646-866d16c84a54?q=80&w=2000&auto=format&fit=crop"
                    alt="Background"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent md:via-black/20 lg:via-black/10 lg:to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 xl:px-0 relative z-10">
                  <div className="flex items-center w-full mb-6 pl-4 pr-4 lg:pl-8 lg:pr-12 pt-4">
                    <div className="flex items-center gap-3 relative shrink-0 z-10 pr-6">
                      <div className="w-10 h-10 rounded-full bg-red-700 flex items-center justify-center shadow-lg text-white">
                        <Users size={18} />
                      </div>
                      <h3 className="text-white text-3xl md:text-[36px] font-black uppercase tracking-tight flex flex-wrap gap-x-1.5 leading-snug">
                        TIN HOẠT ĐỘNG CỦA{" "}
                        <span className="text-red-500">LÃNH ĐẠO</span>
                      </h3>
                    </div>

                    {/* Horizontal thin line */}
                    <div className="flex-1 h-[1px] bg-white/10 relative z-0"></div>

                    <button
                      onClick={() =>
                        showNotification("Đã mở tất cả hoạt động lãnh đạo")
                      }
                      className="text-white hover:text-red-500 font-bold transition-colors text-lg flex items-center gap-1 shrink-0 pl-6 z-10"
                    >
                      Xem tất cả <ChevronRight size={14} />
                    </button>
                  </div>

                  {/* Layout Content (1 Big & 4 Small) */}
                  <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8 px-4 lg:px-8">
                    {/* Left: Big News */}
                    <div
                      className="xl:col-span-7 flex flex-col group cursor-pointer"
                      onClick={() => showNotification("Đã mở bài nổi bật")}
                    >
                      <div className="w-full relative rounded-2xl overflow-hidden shadow-2xl hover:border-[#facc15]/50 border border-white/20 transition-all duration-500 flex-1 aspect-[4/3]">
                        <img
                          src="https://images.unsplash.com/photo-1572025442646-866d16c84a54?q=80&w=1000"
                          alt="News"
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                        />
                        <div className="absolute bottom-0 left-0 right-0 z-20 text-left">
                          <div className="bg-red-700/95 border-t border-red-500/30 backdrop-blur-md p-5 sm:p-6 rounded-b-2xl shadow-xl w-full">
                            <div className="flex justify-between items-center mb-3">
                              <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-600 text-white text-base md:text-base font-black rounded-md tracking-wider uppercase shadow-md pointer-events-none self-start">
                                Tiêu Điểm
                              </span>
                              <span className="flex items-center gap-1.5 text-white text-base md:text-base font-bold bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
                                19/05/2026
                              </span>
                            </div>
                            <h3 className="text-lg md:text-xl lg:text-2xl font-extrabold text-white leading-tight tracking-tight line-clamp-3 group-hover:text-yellow-400 transition-colors">
                              Chủ tịch UBND tỉnh chủ trì phiên họp rà soát quy
                              hoạch phân khu biển
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Right: 5 Small */}
                    <div className="xl:col-span-5 relative">
                      <div className="xl:absolute xl:inset-0 flex flex-col gap-0 bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-3 lg:p-4 shadow-xl z-10 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/40 transition-colors h-[482px] xl:h-auto">
                        {[
                          {
                            title:
                              "Chủ tịch UBND tỉnh chủ trì phiên họp rà soát quy hoạch...",
                            date: "19/05/2026",
                            img: "https://images.unsplash.com/photo-1572025442646-866d16c84a54?q=80&w=200",
                            active: true,
                          },
                          {
                            title:
                              "Phó Chủ tịch thường trực bàn giải pháp tháo gỡ khó khăn về...",
                            date: "18/05/2026",
                            img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=200",
                            active: false,
                          },
                          {
                            title:
                              "Đoàn công tác Tỉnh ủy kiểm tra nâng cao hiệu quả cải cách...",
                            date: "18/05/2026",
                            img: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=200",
                            active: false,
                          },
                          {
                            title:
                              "Khánh Hòa sẵn sàng chuẩn bị cho sự kiện Festival Biển Nha...",
                            date: "17/05/2026",
                            img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=200",
                            active: false,
                          },
                          {
                            title:
                              "Hội nghị Ban Chấp hành Đảng bộ tỉnh Khánh Hòa lần thứ 18...",
                            date: "16/05/2026",
                            img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=200",
                            active: false,
                          },
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            onClick={() =>
                              showNotification(`Đã mở bài: ${item.title}`)
                            }
                            className={`group flex gap-4 py-3 lg:py-4 px-2 items-center cursor-pointer transition-all duration-300 border-b border-white/10 last:border-b-0 ${
                              item.active
                                ? "bg-white/5 relative"
                                : "bg-transparent hover:bg-white/5"
                            }`}
                          >
                            {item.active && (
                              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-yellow-400 rounded-r-md"></div>
                            )}
                            <div className="w-[110px] h-[72px] lg:w-[120px] lg:h-[78px] rounded-lg overflow-hidden shrink-0 border border-yellow-400/20 relative">
                              <img
                                src={item.img}
                                alt="Thumbnail"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                              />
                            </div>
                            <div className="flex-1 min-w-0 pr-1">
                              <h4
                                className={`text-[16px] lg:text-[17px] font-bold line-clamp-2 leading-snug mb-2 transition-colors ${
                                  item.active
                                    ? "text-yellow-400 font-black drop-shadow"
                                    : "text-gray-200 group-hover:text-yellow-400"
                                }`}
                              >
                                {item.title}
                              </h4>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-base text-gray-300 font-medium tracking-wide">
                                  <Calendar size={14} className="opacity-70" />
                                  <span>{item.date}</span>
                                </div>
                                {item.active && (
                                  <span className="text-[18px] font-black uppercase text-yellow-400 tracking-wider">
                                    Đang xem •
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* HOẠT ĐỘNG SỞ NGÀNH SECTION */}
              <div className="mt-10 mb-10 bg-white p-4 lg:p-6 rounded-3xl border border-gray-200 shadow-sm hover:cursor-default">
                {/* Header completely redesigned like reference image */}
                <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <h2 className="text-[26px] md:text-[30px] font-black tracking-tight text-red-900 uppercase flex items-center gap-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-700 flex items-center justify-center shrink-0 shadow-md hidden sm:flex">
                        <Landmark size={24} className="text-white" />
                      </div>
                      <span>HOẠT ĐỘNG SỞ NGÀNH, ĐỊA PHƯƠNG</span>
                    </h2>
                  </div>
                  <button
                    onClick={() => showNotification("Mở toàn bộ danh mục")}
                    className="hidden md:flex text-red-700 hover:text-red-800 transition-colors text-lg font-bold tracking-wide items-center gap-1 cursor-pointer"
                  >
                    Xem toàn bộ danh mục &rarr;
                  </button>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-6">
                  {/* Left: Big News (Dark Overlay Layout) */}
                  <div
                    className="xl:col-span-7 flex flex-col group cursor-pointer rounded-2xl overflow-hidden shadow-sm"
                    onClick={() => showNotification("Đã mở tin nổi bật")}
                  >
                    <div className="w-full relative overflow-hidden flex-shrink-0 aspect-[4/3]">
                      <img
                        src="https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=1200&auto=format&fit=crop"
                        alt="News"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-0 left-0 p-6 flex gap-2 z-10">
                        <span className="bg-red-700 text-white text-[18px] font-black uppercase tracking-wider px-3 py-1.5 rounded-sm shadow-md">
                          Tin nổi bật
                        </span>
                        <span className="bg-black/40 backdrop-blur-sm text-white text-[18px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm">
                          Giao thông & Hạ tầng
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 bg-red-700 p-6 lg:p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-[18px] text-yellow-400 font-bold tracking-wide mb-3 w-fit rounded-full">
                          <Calendar size={18} className="opacity-90" />
                          <span>19/05/2026</span>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 group-hover:text-yellow-400 transition-colors leading-tight line-clamp-3">
                          Sở GTVT thông báo về việc phân luồng giao thông phục
                          vụ thi công
                        </h3>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-t border-white/20 pt-4 mt-auto gap-3">
                        <span className="text-white text-[18px] font-black tracking-widest uppercase truncate">
                          • Bản tin Sở Ban Ngành •
                        </span>
                        <span className="text-white text-[18px] font-bold flex items-center gap-1 hover:text-yellow-200 transition-colors shrink-0">
                          Xem chi tiết bản tin <ChevronRight size={18} />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: 10 Small with Light Box style and Scroll */}
                  <div className="xl:col-span-5 relative min-h-[400px] xl:min-h-0">
                    <div className="xl:absolute xl:inset-0 flex flex-col w-full h-full overflow-y-auto max-h-[550px] xl:max-h-full pr-2 custom-scrollbar-light">
                      {[
                        {
                          title:
                            "UBND tỉnh đánh giá tình hình thực hiện kế hoạch đầu tư công",
                          author: "Sở Kế hoạch và Đầu tư tỉnh Khánh Hòa",
                          date: "19/05/2026",
                          img: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=400",
                        },
                        {
                          title:
                            "Sở Y tế triển khai chiến dịch tiêm chủng mẫu mở rộng",
                          author: "Sở Y tế tỉnh Khánh Hòa",
                          date: "18/05/2026",
                          img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=400",
                        },
                        {
                          title:
                            "Đoàn thanh tra kiểm tra công tác bảo vệ môi trường tại KCN",
                          author: "Sở Tài nguyên và Môi trường tỉnh Khánh Hòa",
                          date: "18/05/2026",
                          img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=400",
                        },
                        {
                          title:
                            "Sở Giáo dục công bố điểm thi tốt nghiệp THPT qua ứng dụng mobile",
                          author: "Sở Giáo dục và Đào tạo tỉnh Khánh Hòa",
                          date: "17/05/2026",
                          img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=400",
                        },
                        {
                          title:
                            "Khánh Hòa đẩy mạnh xúc tiến du lịch quốc tế trong quý 3",
                          author: "Sở Du lịch tỉnh Khánh Hòa",
                          date: "16/05/2026",
                          img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=400",
                        },
                        {
                          title:
                            "Hội nghị triển khai các giải pháp phòng chống dịch bệnh mùa hè",
                          author: "Sở Y tế tỉnh Khánh Hòa",
                          date: "15/05/2026",
                          img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=400",
                        },
                        {
                          title:
                            "Khởi công xây dựng nhà máy xử lý rác thải công nghệ cao",
                          author: "UBND tỉnh Khánh Hòa",
                          date: "14/05/2026",
                          img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400",
                        },
                        {
                          title:
                            "Tổ chức ngày hội việc làm và định hướng nghề nghiệp cho thanh niên",
                          author: "Sở Lao động - Thương binh và Xã hội",
                          date: "13/05/2026",
                          img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=400",
                        },
                        {
                          title:
                            "Kiểm tra an toàn thực phẩm tại các chợ truyền thống",
                          author: "Chi cục An toàn Vệ sinh thực phẩm",
                          date: "12/05/2026",
                          img: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=400",
                        },
                        {
                          title:
                            "Đẩy nhanh tiến độ cấp căn cước công dân gắn chíp điện tử",
                          author: "Công an tỉnh Khánh Hòa",
                          date: "11/05/2026",
                          img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=400",
                        },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          onClick={() => showNotification("Đã mở tin")}
                          className="group cursor-pointer flex gap-3 p-2 lg:p-3 border-b border-gray-100 hover:bg-gray-50 rounded-xl transition-all duration-300 items-stretch h-full last:border-b-0"
                        >
                          <div className="w-[100px] shrink-0 rounded-lg overflow-hidden relative border border-gray-100 shadow-sm bg-gray-50 h-[70px] self-center">
                            <img
                              src={item.img}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500"
                            />
                          </div>
                          <div className="flex-1 flex flex-col justify-center">
                            <h4 className="text-[16px] lg:text-[18px] font-bold text-black leading-snug group-hover:text-yellow-600 transition-colors line-clamp-2 mb-1">
                              {item.title}
                            </h4>
                            <span className="text-[14px] lg:text-[16px] text-black font-medium line-clamp-1 mb-1">
                              {item.author}
                            </span>
                            <div className="flex items-center gap-1.5 text-[14px] lg:text-[16px] text-red-500 font-bold tracking-wide mt-auto">
                              <Calendar size={16} className="opacity-80" />
                              <span>{item.date}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* LINE SEPARATOR */}
              {/* <div className="w-full border-t border-slate-200 mt-10 mb-10"></div> */}

              {/* HỆ THỐNG VĂN BẢN QPPL SECTION */}
              <div
                className="mb-10 flex flex-col gap-6 bg-white p-4 lg:p-6 rounded-3xl border border-gray-200 shadow-sm hover:cursor-default"
                id="van-ban-qppl-section"
              >
                {/* Heading and Tabs */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <h2 className="text-[26px] md:text-[30px] font-black tracking-tight text-red-900 uppercase flex items-center gap-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-700 flex items-center justify-center shrink-0 shadow-md">
                        <FileText size={24} className="text-white" />
                      </div>
                      <span>HỆ THỐNG VĂN BẢN QPPL</span>
                    </h2>
                  </div>

                  {/* Horizontal tab list of categories, fully extended below the heading */}
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {[
                      "Văn bản chỉ đạo điều hành",
                      "Văn bản quy phạm pháp luật",
                      "Văn bản mới cập nhật",
                      "Công báo Khánh Hòa",
                      "Thông báo chính thức",
                      "Văn bản khác",
                    ].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveDocCategory(cat)}
                        className={`flex items-center gap-2 py-2 px-4 rounded-full cursor-pointer transition-all border whitespace-nowrap text-[18px] font-black shadow-xs ${
                          activeDocCategory === cat
                            ? "bg-red-600 border-transparent text-white"
                            : "bg-white border-gray-100 text-black hover:bg-gray-50 hover:text-red-800"
                        }`}
                      >
                        <span>{cat}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Database Info Banner */}
                <div className="flex flex-col md:flex-row md:items-center justify-between bg-slate-50 p-5 rounded-2xl gap-4 border border-slate-200 shadow-xs">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white rounded-xl shadow-xs border border-slate-200 flex items-center justify-center shrink-0">
                      <FileText size={28} className="text-red-800" />
                    </div>
                    <div>
                      <h3 className="text-red-800 font-black text-[24px] md:text-[28px]">
                        Cơ sở dữ liệu văn bản tỉnh
                      </h3>
                      <p className="text-black text-[18px] font-bold mt-0.5">
                        Cập nhật liên tục 24/7 từ cơ sở dữ liệu chính phủ điện
                        tử tỉnh Khánh Hòa
                      </p>
                    </div>
                  </div>
                </div>

                {/* Responsive 2-Column Grid of Document Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto max-h-[640px] pr-3 custom-scrollbar-light">
                  {Array.from({ length: 20 }).map((_, idx) => {
                    const prefixes = {
                      "Văn bản chỉ đạo điều hành": [
                        "Chỉ thị",
                        "Quyết định",
                        "Kế hoạch",
                        "Công văn",
                      ],
                      "Văn bản quy phạm pháp luật": [
                        "Nghị quyết",
                        "Quyết định",
                        "Chỉ thị",
                      ],
                      "Văn bản mới cập nhật": [
                        "Thông báo",
                        "Quyết định",
                        "Kế hoạch",
                        "Chỉ thị",
                      ],
                      "Công báo Khánh Hòa": [
                        "Công báo",
                        "Nghị quyết",
                        "Quyết định",
                      ],
                      "Thông báo chính thức": [
                        "Thông báo kết luận",
                        "Thông báo nội bộ",
                        "Công văn",
                      ],
                      "Văn bản khác": [
                        "Báo cáo",
                        "Tờ trình",
                        "Giấy phép",
                        "Quyết định",
                      ],
                    };
                    const defaultPrefixes = [
                      "Dự thảo",
                      "Công văn",
                      "Tờ trình",
                      "Phiếu chuyển",
                    ];
                    const currentPrefixes =
                      prefixes[activeDocCategory as keyof typeof prefixes] ||
                      defaultPrefixes;
                    const type = currentPrefixes[idx % currentPrefixes.length];

                    const topics = [
                      "phát triển kinh tế số và xã hội số",
                      "quy hoạch không gian đô thị ven biển",
                      "đảm bảo an sinh xã hội mùa mưa bão",
                      "đẩy mạnh cải cách thủ tục hành chính",
                      "thu hút đầu tư vào khu công nghiệp",
                      "kiểm soát ô nhiễm môi trường biển",
                      "quản lý trật tự xây dựng và đô thị",
                      "phát triển du lịch cộng đồng",
                      "bảo tồn di sản văn hóa phi vật thể",
                      "nâng cao chất lượng nguồn nhân lực",
                      "triển khai khám chữa bệnh bảo hiểm y tế",
                      "quản lý trật tự an toàn giao thông",
                    ];
                    const topic = topics[idx % topics.length];

                    const rawIdPrefix = type
                      .split(" ")[0]
                      .substring(0, 2)
                      .toUpperCase();
                    const typeShort =
                      rawIdPrefix === "TH"
                        ? "TB"
                        : rawIdPrefix === "CH"
                          ? "CT"
                          : rawIdPrefix === "KẾ"
                            ? "KH"
                            : rawIdPrefix === "CÔ"
                              ? "CV"
                              : rawIdPrefix === "NG"
                                ? "NQ"
                                : "QĐ";

                    return (
                      <div
                        key={idx}
                        className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs hover:shadow-md hover:border-amber-300 transition-all cursor-pointer group flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-3 mb-3">
                            <span className="text-red-700 bg-red-50 px-2.5 py-1 rounded text-[18px] font-black tracking-wide border border-red-150/50">
                              {1024 + idx}/{typeShort}-UBND
                            </span>
                            <span className="flex items-center gap-1.5 text-black text-[18px] font-bold">
                              <Calendar size={16} className="text-black" />{" "}
                              {`${(30 - (idx % 28)).toString().padStart(2, "0")}/05/2026`}
                            </span>
                          </div>
                          <h5 className="font-extrabold text-red-800 text-[18px] md:text-[20px] mb-2 leading-snug group-hover:text-red-700 transition-colors">
                            {type} về {topic}
                          </h5>
                          <p className="text-black text-[18px] leading-relaxed line-clamp-2 mb-4">
                            Nội dung quy định chi tiết việc triển khai {topic}{" "}
                            trên địa bàn toàn tỉnh, yêu cầu các cơ quan ban
                            ngành nghiêm túc thực hiện...
                          </p>
                        </div>
                        <div className="flex items-center justify-between text-[18px] text-black font-bold border-t border-slate-50 pt-3 mt-auto">
                          <span>Đơn vị ban hành: UBND Tỉnh</span>
                          <span className="text-red-700 hover:underline">
                            Chi tiết →
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <button className="mt-6 w-full bg-red-600 text-white py-4 rounded-xl font-black flex items-center justify-center gap-2 hover:bg-red-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-sm text-[20px] group">
                  Truy cập Cổng văn bản chính thức{" "}
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>

              {/* CUSTOM SECTION ADDED BELOW HỆ THỐNG VĂN BẢN BLOCK IN LANDING PAGE */}
              <div className="mt-10 mb-10 w-full overflow-hidden">
                <UtilitiesPortal showSidebar={false} theme="red" />
              </div>
              {/* UNIFIED WEEKLY ACTIVITIES & HISTORICAL ANNIVERSARIES BLOCK */}
              <div className="w-full mt-8 text-left space-y-8">
                {/* DYNAMIC ANNIVERSARIES RED BANNER ONLY */}
                {/* DYNAMIC ANNIVERSARIES 3 ITEMS GRID */}
                <div className="relative overflow-hidden rounded-3xl shadow-md border border-blue-700/10 bg-blue-700">
                  {" "}
                  <AnimatePresence mode="wait">
                    {" "}
                    {celebratoryBanners.map((cb, idx) => {
                      if (idx !== bannerIndex) return null;
                      return (
                        <motion.div
                          key={cb.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.4 }}
                          className="relative flex flex-col overflow-hidden h-[420px] md:h-[360px] text-left"
                        >
                          {" "}
                          {/* Full Background Image */}{" "}
                          <div className="absolute inset-0">
                            {" "}
                            <img
                              src={cb.img}
                              alt={cb.title}
                              className="absolute inset-0 w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />{" "}
                            {/* Blue gradient overlay */}{" "}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 from-0% via-blue-700/50 via-40% to-transparent to-60%" />{" "}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 from-0% via-transparent via-40% to-transparent mix-blend-multiply" />{" "}
                          </div>
                          {/* Text Content */}
                          <div className="relative z-10 p-8 md:p-10 flex flex-col justify-center flex-grow max-w-4xl">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
                            <div className="absolute -left-10 -bottom-10 w-60 h-60 bg-yellow-500/10 rounded-full blur-2xl pointer-events-none" />
                            <div className="absolute top-1/2 -translate-y-1/2 right-10 opacity-10 pointer-events-none transform rotate-[15deg] select-none hidden md:block">
                              <Megaphone
                                size={190}
                                className="text-yellow-300 stroke-[1.2]"
                              />
                            </div>

                            <div className="relative z-10">
                              <div className="text-yellow-400 text-base font-black uppercase tracking-wider px-2.5 py-1 rounded-md mb-4 flex items-center gap-1.5 w-fit select-none leading-none bg-black/20 backdrop-blur-sm border border-yellow-500/20">
                                <Sparkles
                                  size={13}
                                  className="fill-yellow-400"
                                  id="sparkles-icon"
                                />
                                {cb.badge}
                              </div>
                              <h3 className="text-2xl md:text-[36px] font-black tracking-tight text-white mb-3 leading-snug drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                {cb.title}
                              </h3>
                              <p className="text-lg md:text-[20px] text-yellow-50 font-medium opacity-95 block leading-relaxed mt-3 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] max-w-3xl">
                                {cb.desc}
                              </p>
                            </div>
                          </div>
                          {/* Footer */}{" "}
                          <div className="relative z-20 border-t border-white/20 bg-blue-800/90 backdrop-blur-md px-8 py-4 flex gap-4 justify-between items-center text-lg font-black tracking-wider text-yellow-200 shadow-inner">
                            <span className="uppercase text-yellow-400 hidden md:inline-block tracking-widest text-base">
                              {cb.footerLeft}
                            </span>
                            <div className="flex gap-2.5 items-center">
                              {celebratoryBanners.map((_, dotIdx) => (
                                <div
                                  key={dotIdx}
                                  onClick={() => setBannerIndex(dotIdx)}
                                  className={`block w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                                    dotIdx === bannerIndex
                                      ? "bg-yellow-400 scale-125 shadow-[0_0_8px_rgba(250,204,21,0.85)]"
                                      : "bg-white/60 hover:bg-white"
                                  }`}
                                  title={`Slide ${dotIdx + 1}`}
                                />
                              ))}
                            </div>
                            <span className="uppercase text-yellow-400/80 hidden lg:inline-block text-base">
                              {cb.footerRight}
                            </span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>

                {/* Simple minimalist divider line */}
                <div className="border-t border-transparent pt-4" />

                {/* WEEKLY ACTIVITIES NEWS SECTION */}
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8 items-start mb-10">
                  <div
                    className="xl:col-span-8 flex flex-col gap-6 bg-white p-6 md:p-8 rounded-[24px] border border-slate-200/80 shadow-xs hover:cursor-default"
                    id="hoat-dong-su-kien-section"
                  >
                    <div className="relative z-10">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-200 pb-5">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-red-700 flex items-center justify-center shrink-0 shadow-md">
                            <CheckCircle2 size={24} className="text-white" />
                          </div>
                          <div>
                            <h2 className="text-[26px] md:text-[30px] font-black tracking-tight text-red-800 uppercase flex items-center gap-2">
                              HOẠT ĐỘNG & SỰ KIỆN NỔI BẬT
                              <span className="hidden md:flex w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                            </h2>
                          </div>
                        </div>
                      </div>

                      {/* Left: Big News + 3 Small News */}
                      <div className="flex flex-col gap-6">
                        <div
                          onClick={() => {
                            setActiveWeeklyNewsId(
                              activeWeeklyNewsId === "weekly-big-1"
                                ? null
                                : "weekly-big-1",
                            );
                          }}
                          className="w-full rounded-2xl border border-slate-200 overflow-hidden group shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col"
                        >
                          {/* Top Cover Image */}
                          <div className="w-full relative overflow-hidden flex-shrink-0 aspect-[16/10]">
                            <img
                              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
                              alt="Hội nghị UBND tỉnh"
                              referrerPolicy="no-referrer"
                              className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 pointer-events-none"
                            />

                            {/* Top-left Badges */}
                            <div className="absolute top-4 left-4 flex gap-3 z-10 pointer-events-none">
                              <div className="bg-red-700 text-white text-[16px] font-black uppercase tracking-wider px-3 py-1.5 rounded-md shadow-md animate-pulse">
                                Tiêu điểm tuần
                              </div>
                              <div className="bg-amber-600 text-white text-[16px] font-black uppercase tracking-wider px-3 py-1.5 rounded-md shadow-md">
                                Quy hoạch & Hạ tầng
                              </div>
                            </div>
                          </div>

                          {/* Bottom solid red content section */}
                          <div className="flex-1 bg-red-700 p-5 md:p-6 text-left space-y-2.5 select-none">
                            {/* Date & Metadata */}
                            <div className="flex items-center gap-2 text-lg font-bold text-yellow-400">
                              <Calendar
                                size={18}
                                className="opacity-90 shrink-0"
                              />
                              <span>25/05/2026</span>
                            </div>

                            {/* Large Title */}
                            <h4 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tight group-hover:text-yellow-400 transition-colors">
                              Thường trực UBND tỉnh định hướng Quy hoạch dải đô
                              thị biển và công viên vịnh Nha Trang
                            </h4>

                            {/* Smooth Collapsible Section */}
                            <AnimatePresence>
                              {activeWeeklyNewsId === "weekly-big-1" && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.25 }}
                                  className="overflow-hidden border-t border-white/10 pt-3 mt-3 text-lg text-gray-200 leading-relaxed text-justify space-y-2 bg-black/40 backdrop-blur-md p-3 rounded-lg max-h-[140px] overflow-y-auto"
                                >
                                  <p>
                                    Cuộc họp thu hút đông đảo đại diện từ các Sở
                                    Xây dựng, Sở Tài nguyên và Môi trường cùng
                                    hiệp hội chuyên gia Kiến trúc đô thị Việt
                                    Nam. Phát biểu tại phiên thảo luận, Ban
                                    Thường trực nhấn mạnh tầm quan trọng của
                                    việc duy trì hạ tầng biển hài hòa, giảm
                                    thiểu bê tông hóa và tăng thêm ít nhất 25%
                                    diện tích công viên công cộng phục vụ người
                                    dân bản địa và du khách quốc tế.
                                  </p>
                                  <p>
                                    Hệ thống hành lang giao thông đi bộ dưới
                                    lòng đất, các bãi đậu xe ngầm thông minh kết
                                    hợp quảng trường nhạc nước sẽ được tích hợp
                                    triệt để trong giai đoạn quy hoạch tầm nhìn
                                    2026-2030.
                                  </p>
                                </motion.div>
                              )}
                            </AnimatePresence>

                            {/* Bottom actions line */}
                            <div className="flex justify-between items-center pt-2.5 border-t border-white/20 mt-2 text-lg text-white font-black uppercase tracking-wider">
                              <span>* Bản tin Khánh Hòa *</span>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveWeeklyNewsId(
                                    activeWeeklyNewsId === "weekly-big-1"
                                      ? null
                                      : "weekly-big-1",
                                  );
                                }}
                                className="hover:text-yellow-300 flex items-center gap-1 transition-colors cursor-pointer"
                              >
                                <span>
                                  {activeWeeklyNewsId === "weekly-big-1"
                                    ? "Thu gọn"
                                    : "Xem chi tiết bản tin"}
                                </span>
                                <ChevronDown
                                  size={11}
                                  className={`transition-transform duration-200 ${activeWeeklyNewsId === "weekly-big-1" ? "rotate-180" : ""}`}
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* 3 Small News Items */}
                        <div className="flex flex-col gap-2">
                          {[
                            {
                              id: "weekly-small-1",
                              category: "Kinh tế & Đầu tư",
                              source: "Sở Du lịch tỉnh Khánh Hòa",
                              title:
                                "Sự kiện Quảng bá Xúc tiến du lịch hè xanh Festival Nha Trang 2026",
                              date: "18/05/2026",
                              image:
                                "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?q=80&w=400&fit=crop",
                              detail:
                                "Du lịch Khánh Hòa chính thức khởi động chuỗi hoạt động kích cầu liên kết quốc tế, phấn đấu đón trên 120.000 lượt khách nghỉ dưỡng lữ hành cao cấp quốc tế trải nghiệm dưỡng xanh và hoạt động bảo vệ thiên nhiên biển.",
                              fullText:
                                "Chương trình trọng tâm tập trung vào bảo tồn đa dạng sinh học các rạn san hô Hòn Mun, các hoạt động lặn biển nhặt rác dọn rác nhựa đại dương và thúc đẩy mô hình khách sạn không dùng nhựa một lần tại các resort danh tiếng khép kín ven vịnh Nha Trang.",
                            },
                            {
                              id: "weekly-small-2",
                              category: "Cải cách hành chính",
                              source:
                                "Văn phòng Ủy ban nhân dân tỉnh Khánh Hòa",
                              title:
                                "Số hóa quy trình liên thông một cửa số cấp tỉnh và cơ sở hành chính",
                              date: "18/05/2026",
                              image:
                                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=400&fit=crop",
                              detail:
                                "Thành phố vinh danh tốp 12 đơn vị xuất sắc tối ưu hóa đạt mốc giảm 40% thời gian thụ lý hồ sơ cấp phép đăng ký kinh doanh và liên thông trực tuyến dữ liệu cư trú.",
                              fullText:
                                "Qua khảo sát độc lập từ bên thứ ba, tỷ lệ người dân hài lòng về thái độ tác phong của cán bộ tại Trung tâm Phục vụ hành chính công đạt mốc kỷ lục 98.4%, khẳng định hiệu quả cao của việc loại bỏ hoàn toàn các nút thắt trung gian phiền hà.",
                            },
                            {
                              id: "weekly-small-3",
                              category: "Y tế & Dân sinh",
                              source: "Sở Y tế tỉnh Khánh Hòa",
                              title:
                                "Hồ sơ sức khỏe điện tử đồng bộ dữ liệu quốc gia toàn tỉnh",
                              date: "18/05/2026",
                              image:
                                "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=400&fit=crop",
                              detail:
                                "Ứng dụng cơ sở dữ liệu y tế dùng chung giúp chia sẻ nhanh chóng kết quả chẩn đoán hình ảnh giữa bệnh viện tỉnh và huyện, nâng cao chất lượng khám cho người nghèo.",
                              fullText:
                                "Người bệnh chỉ cần quẹt mã QR căn cước công dân hoặc VNeID là toàn bộ lịch sử sử dụng thuốc, lịch tiêm ngừa, dị ứng đều hiển thị đầy đủ, giảm thời gian đóng tiền lẻ và giảm thiểu quy trình kê khai giấy tờ thủ công.",
                            },
                          ].map((smallItem, index) => {
                            const isSmallExpanded =
                              activeWeeklyNewsId === smallItem.id;
                            return (
                              <React.Fragment key={smallItem.id}>
                                <div
                                  onClick={() => {
                                    setActiveWeeklyNewsId(
                                      isSmallExpanded ? null : smallItem.id,
                                    );
                                  }}
                                  className="py-4 transition-all duration-300 text-left flex gap-4 cursor-pointer items-start hover:bg-slate-50/60 px-2 rounded-xl"
                                >
                                  {/* Left Rounded Image Thumbnail */}
                                  <div className="w-24 h-18 md:w-28 md:h-20 shrink-0 rounded-xl overflow-hidden bg-slate-100 shadow-xs">
                                    <img
                                      src={smallItem.image}
                                      alt={smallItem.title}
                                      referrerPolicy="no-referrer"
                                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                  </div>

                                  {/* Right Text Content Body */}
                                  <div className="flex-1 min-w-0 flex flex-col justify-between min-h-[72px] md:min-h-[80px]">
                                    <div className="space-y-1">
                                      {/* Title: Black color */}
                                      <h5 className="text-[18px] md:text-xl font-bold text-black leading-snug line-clamp-2 hover:text-red-600 transition-colors">
                                        {smallItem.title}
                                      </h5>

                                      {/* Publisher/Source Info */}
                                      <p className="text-lg text-black font-medium truncate">
                                        {smallItem.source}
                                      </p>
                                    </div>

                                    {/* Date row with micro calendar symbol */}
                                    <div className="flex items-center gap-2 text-lg font-bold text-black mt-0.5">
                                      <Calendar
                                        size={18}
                                        className="text-red-500 shrink-0"
                                      />
                                      <span>{smallItem.date}</span>
                                    </div>

                                    {/* Dropdown description on click */}
                                    <AnimatePresence>
                                      {isSmallExpanded && (
                                        <motion.div
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{
                                            height: "auto",
                                            opacity: 1,
                                          }}
                                          exit={{ height: 0, opacity: 0 }}
                                          transition={{ duration: 0.2 }}
                                          className="overflow-hidden border-t border-slate-200/60 pt-2 mt-2 text-lg text-black font-medium leading-relaxed space-y-1"
                                        >
                                          <p>{smallItem.detail}</p>
                                          <p className="text-black">
                                            {smallItem.fullText}
                                          </p>
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                </div>
                                {index < 2 && (
                                  <div className="border-b border-slate-200/80 my-1" />
                                )}
                              </React.Fragment>
                            );
                          })}
                        </div>

                        {/* Elegant straight gray divider line */}
                        <div className="border-b border-slate-200/80 my-8" />

                        {/* Title for Tiện ích dịch vụ */}
                        <div className="flex items-center gap-3 mt-4 mb-6">
                          <h2 className="text-[26px] md:text-[30px] font-black tracking-tight text-red-700 uppercase flex items-center gap-3">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-700 flex items-center justify-center shrink-0 shadow-md">
                              <Building2 size={24} className="text-white" />
                            </div>
                            <div className="flex flex-col">
                              <span>
                                TIỆN ÍCH DỊCH VỤ & THÔNG TIN CÔNG KHAI
                              </span>
                              <span className="text-[17px] md:text-lg text-black font-medium tracking-normal normal-case mt-0.5">
                                Cơ sở dữ liệu hỗ trợ công dân, doanh nghiệp tra
                                cứu và tương tác trực tuyến
                              </span>
                            </div>
                          </h2>
                        </div>

                        {/* Left Block: 3 Service Cards */}
                        <div className="flex flex-col gap-2 h-full w-full">
                          {/* Card 1: Dịch vụ trực tuyến */}
                          <div className="py-4 px-2 transition-all duration-300 text-left flex gap-4 cursor-pointer items-start hover:bg-slate-50/60 rounded-xl group relative z-10 w-full">
                            <div className="flex-1 flex items-start justify-between">
                              <div className="flex gap-5">
                                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center shrink-0 border border-red-100 shadow-inner text-red-600">
                                  <Monitor size={32} />
                                </div>
                                <div className="flex flex-col justify-center">
                                  <span className="text-lg font-black tracking-widest text-red-600 uppercase mb-1 drop-shadow-sm">
                                    Thủ tục hành chính
                                  </span>
                                  <h3 className="text-[22px] md:text-2xl font-black leading-tight tracking-tight text-slate-900 drop-shadow-md">
                                    Dịch vụ trực tuyến
                                  </h3>
                                  <p className="text-lg text-black font-normal mt-2 max-w-[80%] leading-relaxed mb-4">
                                    Hệ thống giải quyết thủ tục hành chính công
                                    trực tuyến mức độ 3, 4. Nộp hồ sơ, tra cứu
                                    và nhận kết quả tại nhà nhanh chóng, minh
                                    bạch.
                                  </p>

                                  <div className="flex flex-wrap gap-2 lg:gap-3 relative z-10">
                                    <span className="bg-red-50 hover:bg-red-100 border border-red-200/60 text-red-800 text-lg font-bold px-3 py-1.5 rounded-full transition-colors cursor-pointer whitespace-nowrap">
                                      Đăng ký doanh nghiệp
                                    </span>
                                    <span className="bg-red-50 hover:bg-red-100 border border-red-200/60 text-red-800 text-lg font-bold px-3 py-1.5 rounded-full transition-colors cursor-pointer whitespace-nowrap">
                                      Cấp phép xây dựng
                                    </span>
                                    <span className="bg-red-50 hover:bg-red-100 border border-red-200/60 text-red-800 text-lg font-bold px-3 py-1.5 rounded-full transition-colors cursor-pointer whitespace-nowrap">
                                      Hộ tịch sự kiện
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all self-center">
                                <ChevronRight size={20} />
                              </div>
                            </div>
                          </div>

                          <div className="border-b border-slate-200/80 my-1" />

                          {/* Card 2: Tiếp nhận kiến nghị */}
                          <div className="py-4 px-2 transition-all duration-300 text-left flex gap-4 cursor-pointer items-start hover:bg-slate-50/60 rounded-xl group relative z-10 w-full">
                            <div className="flex-1 flex items-start justify-between">
                              <div className="flex gap-5">
                                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center shrink-0 border border-red-100 shadow-inner text-red-600">
                                  <MessageSquare
                                    size={32}
                                    className="text-red-600"
                                  />
                                </div>
                                <div className="flex flex-col justify-center">
                                  <span className="text-lg font-black tracking-widest text-red-600 uppercase mb-1 drop-shadow-sm">
                                    Lắng nghe & Giải đáp
                                  </span>
                                  <h3 className="text-[22px] md:text-2xl font-black leading-tight tracking-tight text-slate-900 drop-shadow-md">
                                    Tiếp nhận, trả lời kiến nghị công dân
                                  </h3>
                                  <p className="text-lg text-black font-normal mt-2 max-w-[85%] leading-relaxed">
                                    Cổng thông tin tương tác, tiếp nhận phản
                                    ánh, kiến nghị của công dân và doanh nghiệp
                                    về quy định hành chính, các vấn đề kinh tế -
                                    xã hội trên địa bàn tỉnh Khánh Hòa.
                                  </p>
                                </div>
                              </div>
                              <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all self-center">
                                <ChevronRight size={20} />
                              </div>
                            </div>
                          </div>

                          <div className="border-b border-slate-200/80 my-1" />

                          {/* Card 3: Điều ước quốc tế */}
                          <div className="py-4 px-2 transition-all duration-300 text-left flex gap-4 cursor-pointer items-start hover:bg-slate-50/60 rounded-xl group relative z-10 w-full">
                            <div className="flex-1 flex items-start justify-between">
                              <div className="flex gap-5">
                                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center shrink-0 border border-red-100 shadow-inner text-red-600">
                                  <Globe2 size={32} className="text-red-600" />
                                </div>
                                <div className="flex flex-col justify-center gap-1">
                                  <span className="text-lg font-black tracking-widest text-red-600 uppercase mb-1 drop-shadow-sm">
                                    Thỏa thuận ngoại giao
                                  </span>
                                  <h3 className="text-[22px] md:text-2xl font-black leading-tight tracking-tight text-slate-900 drop-shadow-md">
                                    Điều ước quốc tế
                                  </h3>
                                  <p className="text-lg text-black font-normal mt-1.5 max-w-[85%] leading-relaxed">
                                    Tra cứu hệ thống các điều ước quốc tế mà
                                    nước Cộng hòa Xã hội Chủ nghĩa Việt Nam là
                                    thành viên. Thỏa thuận, hiệp định hợp tác
                                    song phương và đa phương.
                                  </p>
                                </div>
                              </div>
                              <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:text-white transition-all self-center">
                                <ChevronRight size={20} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: 13 Banners */}
                  <div className="xl:col-span-4 flex flex-col gap-4 lg:gap-5 w-full h-full justify-between">
                    {/* Banner Quảng cáo 1: Phổ biến Giáo dục Pháp luật */}
                    <motion.div
                      whileHover={{ scale: 1.02, y: -3 }}
                      onClick={() =>
                        showNotification(
                          "Đang mở Cổng thông tin tuyên truyền Phổ biến Giáo dục Pháp luật...",
                        )
                      }
                      className="relative flex-1 min-h-[110px] xl:min-h-[120px] rounded-[24px] overflow-hidden group cursor-pointer border border-slate-200/80 hover:border-amber-600/30 hover:shadow-xl transition-all duration-300 w-full"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80"
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                        alt="Phổ biến Pháp luật"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/95 to-transparent group-hover:from-zinc-800/90 group-hover:to-transparent transition-all duration-500"></div>
                      <div className="relative h-full px-7 flex items-center justify-between gap-4 text-white text-left">
                        <div className="flex-1">
                          <h5 className="text-xl md:text-2xl uppercase font-black tracking-tight leading-snug text-white group-hover:text-yellow-300 transition-colors">
                            Phổ biến Giáo dục{" "}
                            <span className="whitespace-nowrap">Pháp luật</span>
                          </h5>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md group-hover:bg-white group-hover:text-zinc-900 transition-all shrink-0">
                          <ChevronRight size={18} />
                        </div>
                      </div>
                    </motion.div>

                    {/* Banner Quảng cáo 2: AI Pháp luật */}
                    <motion.div
                      whileHover={{ scale: 1.02, y: -3 }}
                      onClick={() =>
                        showNotification(
                          "Đang mở Trợ lý AI pháp luật - Cổng Pháp luật Quốc gia...",
                        )
                      }
                      className="relative flex-1 min-h-[110px] xl:min-h-[120px] rounded-[24px] overflow-hidden group cursor-pointer border border-slate-200/80 hover:border-red-600/30 hover:shadow-xl transition-all duration-300 w-full"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop"
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                        alt="AI pháp luật"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/95 to-transparent group-hover:from-zinc-800/90 group-hover:to-transparent transition-all duration-500"></div>
                      <div className="relative h-full px-7 flex items-center justify-between gap-4 text-white text-left">
                        <div className="flex-1">
                          <h5 className="text-xl md:text-2xl uppercase font-black tracking-tight leading-snug text-white group-hover:text-yellow-300 transition-colors">
                            AI Pháp luật -{" "}
                            <span className="whitespace-nowrap">
                              Cổng quốc gia
                            </span>
                          </h5>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md group-hover:bg-white group-hover:text-zinc-900 transition-all shrink-0">
                          <ChevronRight size={18} />
                        </div>
                      </div>
                    </motion.div>

                    {/* Banner Quảng cáo 3: Điện hạt nhân Ninh Thuận */}
                    <motion.div
                      whileHover={{ scale: 1.02, y: -3 }}
                      onClick={() =>
                        showNotification(
                          "Đang kết nối Cổng thông tin dự án Điện hạt nhân Ninh Thuận...",
                        )
                      }
                      className="relative flex-1 min-h-[110px] xl:min-h-[120px] rounded-[24px] overflow-hidden group cursor-pointer border border-slate-200/80 hover:border-red-600/30 hover:shadow-xl transition-all duration-300 w-full"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80"
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                        alt="Điện hạt nhân Ninh Thuận"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/95 to-transparent group-hover:from-zinc-800/90 group-hover:to-transparent transition-all duration-500"></div>
                      <div className="relative h-full px-7 flex items-center justify-between gap-4 text-white text-left">
                        <div className="flex-1">
                          <h5 className="text-xl md:text-2xl uppercase font-black tracking-tight leading-snug text-white group-hover:text-yellow-300 transition-colors">
                            Điện hạt nhân{" "}
                            <span className="whitespace-nowrap">
                              Ninh Thuận
                            </span>
                          </h5>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md group-hover:bg-white group-hover:text-zinc-900 transition-all shrink-0">
                          <ChevronRight size={18} />
                        </div>
                      </div>
                    </motion.div>

                    {/* Banner Quảng cáo 4: Bản đồ số 65 xã phường */}
                    <motion.div
                      whileHover={{ scale: 1.02, y: -3 }}
                      onClick={() =>
                        showNotification(
                          "Đang kết nối hệ thống Bản đồ số 65 xã, phường, đặc khu...",
                        )
                      }
                      className="relative flex-1 min-h-[110px] xl:min-h-[120px] rounded-[24px] overflow-hidden group cursor-pointer border border-slate-200/80 hover:border-red-600/30 hover:shadow-xl transition-all duration-300 w-full"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                        alt="Bản đồ số 65 xã"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/95 to-transparent group-hover:from-zinc-800/90 group-hover:to-transparent transition-all duration-500"></div>
                      <div className="relative h-full px-7 flex items-center justify-between gap-4 text-white text-left">
                        <div className="flex-1">
                          <h5 className="text-xl md:text-2xl uppercase font-black tracking-tight leading-snug text-white group-hover:text-yellow-300 transition-colors">
                            Bản đồ số 65 Xã, Phường,{" "}
                            <span className="whitespace-nowrap">Đặc khu</span>
                          </h5>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md group-hover:bg-white group-hover:text-zinc-900 transition-all shrink-0">
                          <ChevronRight size={18} />
                        </div>
                      </div>
                    </motion.div>

                    {/* Banner 5: Tra cứu giá đất */}
                    <motion.div
                      whileHover={{ scale: 1.02, y: -3 }}
                      onClick={() =>
                        showNotification(
                          "Đang kết nối hệ thống Tra cứu giá đất trực tuyến...",
                        )
                      }
                      className="relative flex-1 min-h-[110px] xl:min-h-[120px] rounded-[24px] overflow-hidden group cursor-pointer border border-slate-200/80 hover:border-red-600/30 hover:shadow-xl transition-all duration-300 w-full"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80"
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                        alt="Tra cứu giá đất"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/95 to-transparent group-hover:from-zinc-800/90 group-hover:to-transparent transition-all duration-500"></div>
                      <div className="relative h-full px-7 flex items-center justify-between gap-4 text-white text-left">
                        <div className="flex-1">
                          <h5 className="text-xl md:text-2xl uppercase font-black tracking-tight leading-snug text-white group-hover:text-yellow-300 transition-colors">
                            Tra cứu giá đất{" "}
                            <span className="whitespace-nowrap">
                              trực tuyến
                            </span>
                          </h5>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md group-hover:bg-white group-hover:text-zinc-900 transition-all shrink-0">
                          <ChevronRight size={18} />
                        </div>
                      </div>
                    </motion.div>

                    {/* Banner 6: Công khai ngân sách */}
                    <motion.div
                      whileHover={{ scale: 1.02, y: -3 }}
                      onClick={() =>
                        showNotification(
                          "Đang kết nối Cổng công khai ngân sách nhà nước...",
                        )
                      }
                      className="relative flex-1 min-h-[110px] xl:min-h-[120px] rounded-[24px] overflow-hidden group cursor-pointer border border-slate-200/80 hover:border-red-600/30 hover:shadow-xl transition-all duration-300 w-full"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                        alt="Công khai ngân sách"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/95 to-transparent group-hover:from-zinc-800/90 group-hover:to-transparent transition-all duration-500"></div>
                      <div className="relative h-full px-7 flex items-center justify-between gap-4 text-white text-left">
                        <div className="flex-1">
                          <h5 className="text-xl md:text-2xl uppercase font-black tracking-tight leading-snug text-white group-hover:text-yellow-300 transition-colors">
                            Công khai Ngân sách{" "}
                            <span className="whitespace-nowrap">Nhà nước</span>
                          </h5>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md group-hover:bg-white group-hover:text-zinc-900 transition-all shrink-0">
                          <ChevronRight size={18} />
                        </div>
                      </div>
                    </motion.div>

                    {/* Banner 7: Cổng Dịch vụ công trực tuyến */}
                    <motion.div
                      whileHover={{ scale: 1.02, y: -3 }}
                      onClick={() =>
                        showNotification(
                          "Đang kết nối Cổng Dịch vụ công trực tuyến...",
                        )
                      }
                      className="relative flex-1 min-h-[110px] xl:min-h-[120px] rounded-[24px] overflow-hidden group cursor-pointer border border-slate-200/80 hover:border-red-600/30 hover:shadow-xl transition-all duration-300 w-full"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80"
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                        alt="Dịch vụ công"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/95 to-transparent group-hover:from-zinc-800/90 group-hover:to-transparent transition-all duration-500"></div>
                      <div className="relative h-full px-7 flex items-center justify-between gap-4 text-white text-left">
                        <div className="flex-1">
                          <h5 className="text-xl md:text-2xl uppercase font-black tracking-tight leading-snug text-white group-hover:text-yellow-300 transition-colors">
                            Cổng Dịch vụ công{" "}
                            <span className="whitespace-nowrap">
                              trực tuyến
                            </span>
                          </h5>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md group-hover:bg-white group-hover:text-zinc-900 transition-all shrink-0">
                          <ChevronRight size={18} />
                        </div>
                      </div>
                    </motion.div>

                    {/* Banner 8: Du lịch Nha Trang - Khánh Hòa */}
                    <motion.div
                      whileHover={{ scale: 1.02, y: -3 }}
                      onClick={() =>
                        showNotification(
                          "Đang kết nối Cổng thông tin xúc tiến Du lịch Nha Trang - Khánh Hòa...",
                        )
                      }
                      className="relative flex-1 min-h-[110px] xl:min-h-[120px] rounded-[24px] overflow-hidden group cursor-pointer border border-slate-200/80 hover:border-red-600/30 hover:shadow-xl transition-all duration-300 w-full"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                        alt="Du lịch Nha Trang"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/95 to-transparent group-hover:from-zinc-800/90 group-hover:to-transparent transition-all duration-500"></div>
                      <div className="relative h-full px-7 flex items-center justify-between gap-4 text-white text-left">
                        <div className="flex-1">
                          <h5 className="text-xl md:text-2xl uppercase font-black tracking-tight leading-snug text-white group-hover:text-yellow-300 transition-colors">
                            Du lịch Nha Trang -{" "}
                            <span className="whitespace-nowrap">Khánh Hòa</span>
                          </h5>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md group-hover:bg-white group-hover:text-zinc-900 transition-all shrink-0">
                          <ChevronRight size={18} />
                        </div>
                      </div>
                    </motion.div>

                    {/* Banner 9: Cơ sở dữ liệu quốc gia */}
                    <motion.div
                      whileHover={{ scale: 1.02, y: -3 }}
                      onClick={() => {
                        showNotification(
                          "Đang kết nối đến cổng Cơ sở dữ liệu văn bản quy phạm pháp luật Quốc gia...",
                        );
                      }}
                      className="relative flex-1 min-h-[110px] xl:min-h-[120px] rounded-[24px] overflow-hidden group cursor-pointer border border-slate-200/80 hover:border-red-600/30 hover:shadow-xl transition-all duration-300 w-full"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80"
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                        alt="Cơ sở dữ liệu Quốc gia"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/95 to-transparent group-hover:from-zinc-800/90 group-hover:to-transparent transition-all duration-500"></div>
                      <div className="relative h-full px-7 flex items-center justify-between gap-4 text-white text-left">
                        <div className="flex-1">
                          <h5 className="text-xl md:text-2xl uppercase font-black tracking-tight leading-snug text-white group-hover:text-yellow-300 transition-colors">
                            Cơ sở dữ liệu{" "}
                            <span className="whitespace-nowrap">Quốc gia</span>
                          </h5>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md group-hover:bg-white group-hover:text-zinc-900 transition-all shrink-0">
                          <ChevronRight size={18} />
                        </div>
                      </div>
                    </motion.div>

                    {/* Banner 10: Xúc tiến Đầu tư & Thương mại */}
                    <motion.div
                      whileHover={{ scale: 1.02, y: -3 }}
                      onClick={() =>
                        showNotification(
                          "Đang mở Cổng thông tin Xúc tiến Đầu tư...",
                        )
                      }
                      className="relative flex-1 min-h-[110px] xl:min-h-[120px] rounded-[24px] overflow-hidden group cursor-pointer border border-slate-200/80 hover:border-red-600/30 hover:shadow-xl transition-all duration-300 w-full"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80"
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                        alt="Xúc tiến Đầu tư"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/95 to-transparent group-hover:from-zinc-800/90 group-hover:to-transparent transition-all duration-500"></div>
                      <div className="relative h-full px-7 flex items-center justify-between gap-4 text-white text-left">
                        <div className="flex-1">
                          <h5 className="text-xl md:text-2xl uppercase font-black tracking-tight leading-snug text-white group-hover:text-yellow-300 transition-colors">
                            Xúc tiến Đầu tư & Thương mại
                          </h5>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md group-hover:bg-white group-hover:text-zinc-900 transition-all shrink-0">
                          <ChevronRight size={18} />
                        </div>
                      </div>
                    </motion.div>

                    {/* Banner 11: Chuyển đổi số Quốc gia */}
                    <motion.div
                      whileHover={{ scale: 1.02, y: -3 }}
                      onClick={() =>
                        showNotification(
                          "Đang mở Cổng Chuyển đổi số Quốc gia...",
                        )
                      }
                      className="relative flex-1 min-h-[110px] xl:min-h-[120px] rounded-[24px] overflow-hidden group cursor-pointer border border-slate-200/80 hover:border-red-600/30 hover:shadow-xl transition-all duration-300 w-full"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80"
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                        alt="Chuyển đổi số"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/95 to-transparent group-hover:from-zinc-800/90 group-hover:to-transparent transition-all duration-500"></div>
                      <div className="relative h-full px-7 flex items-center justify-between gap-4 text-white text-left">
                        <div className="flex-1">
                          <h5 className="text-xl md:text-2xl uppercase font-black tracking-tight leading-snug text-white group-hover:text-yellow-300 transition-colors">
                            Chuyển đổi số Quốc gia
                          </h5>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md group-hover:bg-white group-hover:text-zinc-900 transition-all shrink-0">
                          <ChevronRight size={18} />
                        </div>
                      </div>
                    </motion.div>

                    {/* Banner 12: Đào tạo & Tuyển dụng */}
                    <motion.div
                      whileHover={{ scale: 1.02, y: -3 }}
                      onClick={() =>
                        showNotification("Đang mở Cổng Đào tạo & Tuyển dụng...")
                      }
                      className="relative flex-1 min-h-[110px] xl:min-h-[120px] rounded-[24px] overflow-hidden group cursor-pointer border border-slate-200/80 hover:border-red-600/30 hover:shadow-xl transition-all duration-300 w-full"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80"
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                        alt="Đào tạo và Tuyển dụng"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/95 to-transparent group-hover:from-zinc-800/90 group-hover:to-transparent transition-all duration-500"></div>
                      <div className="relative h-full px-7 flex items-center justify-between gap-4 text-white text-left">
                        <div className="flex-1">
                          <h5 className="text-xl md:text-2xl uppercase font-black tracking-tight leading-snug text-white group-hover:text-yellow-300 transition-colors">
                            Đào tạo & Nguồn nhân lực
                          </h5>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md group-hover:bg-white group-hover:text-zinc-900 transition-all shrink-0">
                          <ChevronRight size={18} />
                        </div>
                      </div>
                    </motion.div>

                    {/* Banner 13: Bảo hiểm Xã hội Điện tử */}
                    <motion.div
                      whileHover={{ scale: 1.02, y: -3 }}
                      onClick={() =>
                        showNotification("Đang mở Cổng Bảo hiểm Xã hội...")
                      }
                      className="relative flex-1 min-h-[110px] xl:min-h-[120px] rounded-[24px] overflow-hidden group cursor-pointer border border-slate-200/80 hover:border-red-600/30 hover:shadow-xl transition-all duration-300 w-full"
                    >
                      <img
                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80"
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                        alt="Bảo hiểm Xã hội Điện tử"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/95 to-transparent group-hover:from-zinc-800/90 group-hover:to-transparent transition-all duration-500"></div>
                      <div className="relative h-full px-7 flex items-center justify-between gap-4 text-white text-left">
                        <div className="flex-1">
                          <h5 className="text-xl md:text-2xl uppercase font-black tracking-tight leading-snug text-white group-hover:text-yellow-300 transition-colors">
                            Bảo hiểm Xã hội Điện tử
                          </h5>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md group-hover:bg-white group-hover:text-zinc-900 transition-all shrink-0">
                          <ChevronRight size={18} />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* PILLAR 2: VĂN BẢN & ĐIỀU HÀNH */}

          {activePillar.id === "vandan" && (
            <div>
              {activeSubTab === "vandan-cp" && (
                <div className="grid grid-cols-12 gap-8">
                  {/* Left: Spotlight + 3 Small */}
                  <div className="col-span-8 space-y-6">
                    {/* Big Spotlight News */}
                    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                      <span className="text-base text-red-700 font-bold uppercase tracking-widest mb-2 block">
                        Tiêu điểm Chính phủ
                      </span>
                      <h4 className="text-2xl font-black text-black mb-3">
                        Quyết định số 129/QĐ-TTg phê duyệt đẩy mạnh liên kết
                        vùng duyên hải Nam Trung Bộ
                      </h4>
                      <img
                        src="https://images.unsplash.com/photo-1572025442646-866d16c84a54?q=80&w=1000"
                        alt="News"
                        className="w-full h-64 object-cover rounded-2xl mb-4"
                      />
                      <p className="text-lg text-black leading-relaxed text-justify">
                        Thủ tướng Chính phủ trực tiếp ký kết chỉ thị giao phó
                        tỉnh Khánh Hòa giữ vị thế hạt nhân điều phối, tập trung
                        khai thông du lịch biển liên tỉnh Bắc-Nam, xây dựng cụm
                        logistic quốc tế phục vụ thông thương kinh tế biển sâu
                        sắc.
                      </p>
                    </div>

                    {/* 3 Small Vertical Items */}
                    <div className="space-y-4">
                      {[1, 2, 3].map((item) => (
                        <div
                          key={item}
                          className="flex gap-4 p-4 bg-white rounded-2xl border border-slate-100 hover:border-red-200 transition-all"
                        >
                          <img
                            src="https://images.unsplash.com/photo-1572025442646-866d16c84a54?q=80&w=200"
                            alt="News"
                            className="w-24 h-24 object-cover rounded-xl"
                          />
                          <div className="flex flex-col justify-center">
                            <span className="text-base font-bold text-red-700 uppercase mb-1">
                              Chỉ đạo mới
                            </span>
                            <h5 className="font-bold text-black leading-snug">
                              Văn bản hướng dẫn thi hành luật đất đai số {item}
                              ...
                            </h5>
                            <span className="text-base text-black mt-1">
                              19/05/2026
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Map */}
                  <MapSection />
                </div>
              )}

              {activeSubTab === "vandan-tinh" && (
                <div className="bg-white p-5 rounded-2xl border border-red-100/50 shadow-sm space-y-3">
                  <span className="text-lg text-red-800/70 font-extrabold uppercase">
                    Quyết định ban hành tỉnh
                  </span>
                  <h4 className="text-lg font-black text-red-800">
                    Ứng phó phòng chống thiên tai và ứng cứu mưa lũ cục bộ, bồi
                    lấp bờ sông dốc cao
                  </h4>
                  <p className="text-lg text-red-800 leading-relaxed font-semibold">
                    Chủ tịch UBND tỉnh chỉ thị Sở Nông nghiệp phối hợp các địa
                    bàn trọng điểm như Khánh Vĩnh, Khánh Sơn rà soát toàn bộ sạt
                    lở bồi lấp, di chuyển hộ dân khẩn trương trước đợt bão lớn
                    xuất hiện.
                  </p>
                  <span className="text-lg text-red-800/70 block font-normal">
                    Ký ban hành lúc 16:30 chiều qua bởi Văn Phòng Tỉnh ủy.
                  </span>
                </div>
              )}

              {activeSubTab === "vandan-so" && (
                <div className="space-y-4">
                  {[
                    {
                      title:
                        "Sở Giao thông: Ban hành kế hoạch dẹp xe dù bến cóc xung quanh ranh thành Nha Trang",
                      agency: "Sở Giao thông Vận tải",
                    },
                    {
                      title:
                        "Sở Du lịch: Công bố số lượng du khách chạm đạt kỷ lục mới 4.5 triệu lượt",
                      agency: "Sở Du lịch",
                    },
                  ].map((n, i) => (
                    <div
                      key={i}
                      className="bg-white p-4.5 rounded-xl border border-red-100 hover:border-red-300 transition-colors"
                    >
                      <span className="text-base bg-red-50 text-red-800 px-2 py-0.5 rounded uppercase font-black tracking-widest block w-max mb-1.5">
                        {n.agency}
                      </span>
                      <h5 className="text-lg font-black text-red-950 leading-normal mb-1">
                        {n.title}
                      </h5>
                      <p className="text-lg text-red-900/80 font-medium">
                        Bản tin hoạt động thực hiện chỉ tiêu hành động từ đầu
                        tháng.
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {activeSubTab === "vandan-hethong" && (
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-3">
                    <div className="relative flex-1">
                      <input
                        type="text"
                        placeholder="Số ký hiệu, tên văn bản..."
                        value={docSearch}
                        onChange={(e) => setDocSearch(e.target.value)}
                        className="w-full bg-white border border-red-200 py-2.5 pl-9 pr-4 rounded-xl text-lg font-bold text-red-900"
                      />
                      <Search
                        size={14}
                        className="absolute left-3 top-3.5 text-red-800/70"
                      />
                    </div>
                    <select
                      value={docFilter}
                      onChange={(e) => setDocFilter(e.target.value)}
                      className="bg-white border select-none border-red-200 p-2.5 rounded-xl text-lg font-bold text-red-900"
                    >
                      <option value="all">Tất cả thể loại</option>
                      <option value="vbpq">Văn bản QPPL</option>
                      <option value="ubnd">Chỉ đạo điều hành</option>
                      <option value="tb">Thông báo</option>
                      <option value="duqt">Điều ước quốc tế</option>
                    </select>
                  </div>

                  <div className="space-y-2 max-h-[320px] overflow-y-auto bg-white p-3 rounded-2xl border border-red-100/50 shadow-inner">
                    {MOCK_DOCS.filter((d) => {
                      const matchesSearch =
                        d.title
                          .toLowerCase()
                          .includes(docSearch.toLowerCase()) ||
                        d.num.toLowerCase().includes(docSearch.toLowerCase());
                      const matchesCat =
                        docFilter === "all" || d.cat === docFilter;
                      return matchesSearch && matchesCat;
                    }).map((doc, idx) => (
                      <div
                        key={idx}
                        onClick={() => setReadingDoc(doc)}
                        className="p-3 bg-red-50/50 rounded-xl border border-red-100 hover:border-red-500 cursor-pointer transition-all flex items-start justify-between gap-3 text-lg"
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="bg-red-600 text-white text-lg font-black px-1.5 py-0.5 rounded">
                              {doc.type}
                            </span>
                            <span className="text-base font-semibold text-red-700">
                              {doc.num}
                            </span>
                          </div>
                          <p className="font-extrabold text-red-950 leading-normal line-clamp-1">
                            {doc.title}
                          </p>
                          <span className="text-base text-red-800/70 font-medium">
                            {doc.date}
                          </span>
                        </div>
                        <ChevronRight
                          size={14}
                          className="text-red-800/70 shrink-0 mt-2"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeSubTab === "vandan-media" && (
                <div className="space-y-4">
                  <div className="flex gap-2">
                    {[
                      "photos",
                      "videos",
                      "infographics",
                      "longform",
                      "audio",
                    ].map((t) => (
                      <button
                        key={t}
                        onClick={() => setMediaTab(t)}
                        className={`px-3.5 py-1.5 rounded-lg text-lg font-extrabold uppercase tracking-wider ${
                          mediaTab === t
                            ? "bg-red-700 text-white"
                            : "bg-red-50 text-red-800"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-red-100/50 min-h-[220px]">
                    {mediaTab === "photos" && (
                      <div className="grid grid-cols-2 gap-3">
                        <div className="relative rounded-lg overflow-hidden group">
                          <img
                            src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=400&auto=format&fit=crop"
                            alt="Hội nghị"
                            className="w-full h-28 object-cover"
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-end p-2">
                            <span className="text-white text-base font-bold line-clamp-1">
                              Ký kết định hướng quy hoạch hành chính công
                            </span>
                          </div>
                        </div>
                        <div className="relative rounded-lg overflow-hidden group">
                          <img
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400&auto=format&fit=crop"
                            alt="Cơ sở hạ tầng"
                            className="w-full h-28 object-cover"
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-end p-2">
                            <span className="text-white text-base font-bold line-clamp-1">
                              Vận hành trung tâm đô thị thông minh
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {mediaTab === "videos" && (
                      <div className="relative rounded-xl overflow-hidden aspect-video max-w-sm mx-auto bg-red-950 flex items-center justify-center">
                        <div className="text-center text-white space-y-2 z-10 p-4">
                          <Play
                            className="mx-auto text-red-500 animate-pulse"
                            size={32}
                          />
                          <p className="text-lg font-black uppercase">
                            Đồng thuận xanh và số hóa của cư dân Nha Trang
                          </p>
                        </div>
                        <div
                          className="absolute inset-0 opacity-40 bg-cover bg-center"
                          style={{
                            backgroundImage:
                              "url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400')",
                          }}
                        />
                      </div>
                    )}

                    {mediaTab === "infographics" && (
                      <div className="space-y-4">
                        <h5 className="text-lg font-black text-red-700 tracking-wider uppercase">
                          ĐỒ HỌA CHUYỂN ĐỔI SỐ HÀNH CHÍNH TỈNH:
                        </h5>
                        <div className="space-y-2 text-lg">
                          <div>
                            <div className="flex justify-between text-lg font-bold mb-1">
                              <span>
                                Hồ sơ liên thông hành chính số trực tuyến
                              </span>
                              <span className="text-red-700">98.2%</span>
                            </div>
                            <div className="w-full bg-red-50 h-2 rounded-full overflow-hidden">
                              <div
                                className="bg-red-700 h-full"
                                style={{ width: "98.2%" }}
                              />
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-lg font-bold mb-1">
                              <span>
                                Giải quyết phản ánh đúng hạn trong 48h
                              </span>
                              <span className="text-red-700">94.5%</span>
                            </div>
                            <div className="w-full bg-red-50 h-2 rounded-full overflow-hidden">
                              <div
                                className="bg-red-700 h-full"
                                style={{ width: "94.5%" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {mediaTab === "longform" && (
                      <div className="space-y-2 text-lg">
                        <h5 className="font-extrabold text-red-950 text-lg">
                          Khánh Hòa 2026: Trở thành Đô thị Trực thuộc Trung ương
                          thông minh tương lai
                        </h5>
                        <p className="text-red-900/80 leading-relaxed font-semibold">
                          Từng dải tấp lập ven bờ ngọc Nha Trang được tích hợp
                          sâu bởi mạng lưới camera hành chính AI, đảm bảo cuộc
                          sống văn minh bậc nhất...
                        </p>
                        <span className="text-red-700 font-bold hover:underline cursor-pointer">
                          Đọc tiếp đặc san chuyên san ...
                        </span>
                      </div>
                    )}

                    {mediaTab === "audio" && (
                      <div className="flex flex-col items-center justify-center space-y-4 py-4 text-center">
                        <span className="p-3 bg-red-50 rounded-full text-red-700 animate-pulse">
                          <Megaphone size={24} />
                        </span>
                        <div>
                          <p className="text-lg font-black text-red-800">
                            BẢN TIN PHÁT THANH CÔNG BỘC KHÁNH HÒA TUẦN 21
                          </p>
                          <p className="text-lg text-red-800/70 font-medium">
                            Bản thu phát thanh tổng hợp chỉ đạo các ban ngành
                            địa phương.
                          </p>
                        </div>
                        <button
                          onClick={() => setAudioPlaying(!audioPlaying)}
                          className={`px-6 py-2 rounded-xl text-lg font-bold text-white transition-all ${
                            audioPlaying
                              ? "bg-red-700 hover:bg-red-600"
                              : "bg-red-700 hover:bg-red-700"
                          }`}
                        >
                          {audioPlaying
                            ? "⏸ ĐANG PHÁT - DỪNG PHÁT"
                            : "▶ BẮT ĐẦU NGHE TIN PHÁT THANH"}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* PILLAR 3: MINH BẠCH & TRUYÊN TRUYỀN */}
          {activePillar.id === "congkhai" && (
            <div>
              {activeSubTab === "congkhai-yk" && (
                <div className="bg-white p-5 rounded-2xl border border-red-100/50 shadow-sm space-y-4">
                  <h4 className="text-lg font-black text-red-950 uppercase border-b pb-2">
                    LẤY Ý KIẾN CẦN LẬP PHÁP DỰ THẢO VĂN BẢN QPPL
                  </h4>
                  <div className="bg-red-50 text-red-900 border border-red-200 p-4 rounded-xl text-lg space-y-2">
                    <span className="font-bold block uppercase text-red-700">
                      Dự thảo Quy chuẩn rác thải nhựa nông thôn mới 2026
                    </span>
                    <p className="font-semibold text-red-800 leading-relaxed text-justify">
                      Đế án cấm triệt để việc đốt vỏ bao nilon và bình đựng
                      thuốc bảo vệ thực vật tại ao đầm, yêu cầu hộ dân tập kết
                      đúng nơi kiểm dịch trong vòng 24 giờ.
                    </p>
                  </div>

                  <form onSubmit={handlePostComment} className="space-y-3">
                    <label className="text-base uppercase font-black text-red-900/80 tracking-wider block">
                      Ý kiến góp ý công dân:
                    </label>
                    <textarea
                      rows={2}
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Nhập phần đề xuất, thắc mắc sửa đổi, bổ sung của bạn hoặc đơn vị đại diện..."
                      className="w-full bg-red-50/30 border p-3.5 rounded-xl text-lg font-bold focus:outline-none focus:border-red-500 text-red-950"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-red-700 text-white px-5 py-2.5 rounded-xl text-lg font-bold hover:bg-red-600 flex items-center gap-1"
                    >
                      Nộp góp ý văn bản <Send size={12} />
                    </button>
                  </form>

                  {draftComments.length > 0 && (
                    <div className="space-y-2 mt-4 pt-4 border-t">
                      <span className="text-lg font-black text-red-800/70 uppercase tracking-widest block">
                        Góp ý mới gửi:
                      </span>
                      {draftComments.map((cmt, i) => (
                        <div
                          key={i}
                          className="p-3 bg-red-50/30 rounded-lg text-lg font-semibold text-red-900 border"
                        >
                          {cmt}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {activeSubTab === "congkhai-ck" && (
                <div className="space-y-4">
                  <div className="flex gap-2">
                    {["budget", "tender", "investment", "socio"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setInfoPublicTab(tab)}
                        className={`px-3 py-1.5 rounded-lg text-lg uppercase font-extrabold tracking-wide ${
                          infoPublicTab === tab
                            ? "bg-red-900 text-white"
                            : "bg-red-50 text-red-800"
                        }`}
                      >
                        {tab === "budget" && "Ngân sách"}
                        {tab === "tender" && "Đấu thầu mua sắm"}
                        {tab === "investment" && "Dự án đầu tư"}
                        {tab === "socio" && "Kinh tế - Xã hội"}
                      </button>
                    ))}
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-red-100/50 min-h-[220px] text-lg space-y-4">
                    {infoPublicTab === "budget" && (
                      <div className="space-y-3">
                        <h5 className="font-bold text-red-900">
                          Công khai ngân sách cấp phát năm tài chính 2026:
                        </h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-lg font-semibold text-red-800">
                          <div className="p-3 bg-yellow-50 text-amber-800 rounded-lg">
                            Tổng thu ngân sách nhà nước: 18,450 Tỷ VNĐ
                          </div>
                          <div className="p-3 bg-red-50 text-red-800 rounded-lg">
                            Tổng chi phát hành xã hội: 14,210 Tỷ VNĐ
                          </div>
                        </div>
                        <div className="p-3.5 bg-red-50/30 rounded-xl space-y-1">
                          <div className="flex justify-between font-black text-lg">
                            <span>Tỷ lệ phân giải đền bù cao tốc</span>
                            <span>84.2%</span>
                          </div>
                          <div className="w-full bg-red-100 h-2 rounded-full overflow-hidden">
                            <div
                              className="bg-amber-500 h-full"
                              style={{ width: "84.2%" }}
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {infoPublicTab === "tender" && (
                      <div className="space-y-3">
                        <h5 className="font-bold text-red-900">
                          Gói thầu mua sắm công nghiệp đang vận hành:
                        </h5>
                        {[
                          {
                            label: "Mã thầu: KH-2026-00412",
                            title:
                              "Cung cấp máy móc y học hiện đại cho Bệnh viện Đa khoa Cam Ranh",
                          },
                          {
                            label: "Mã thầu: KH-2026-00550",
                            title:
                              "Bảo trì nâng cấp lòng đường dải hành lang tránh lũ lộ Diên Khánh",
                          },
                        ].map((ten, i) => (
                          <div
                            key={i}
                            className="p-3 bg-red-50/30 rounded-lg border flex justify-between items-center text-lg font-semibold"
                          >
                            <div>
                              <span className="text-red-700 block text-lg font-black uppercase mb-0.5">
                                {ten.label}
                              </span>
                              <span className="text-red-950 block">
                                {ten.title}
                              </span>
                            </div>
                            <span className="text-lg bg-red-100 text-red-800 py-1 px-2.5 rounded-md uppercase font-black shrink-0 tracking-wider">
                              HỒ SƠ MỞ
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {infoPublicTab === "investment" && (
                      <div className="space-y-3/2">
                        <h5 className="font-bold text-red-900">
                          Danh mục Đề án FDI và Đầu tư trọng điểm hạ tầng:
                        </h5>
                        <div className="p-3 bg-red-50/30 border-l-4 border-red-700 rounded-r-lg">
                          <span className="font-black text-red-950 block text-lg">
                            Xây dựng Khu công nghệ sinh học biển Nha Trang
                          </span>
                          <p className="text-base text-red-800/70 mt-1 leading-snug">
                            Chủ quản: Viện Hải dương học phối hợp Sở Khoa học.
                            Số vốn: 12.4 Triệu USD.
                          </p>
                        </div>
                      </div>
                    )}

                    {infoPublicTab === "socio" && (
                      <div className="space-y-2">
                        <h5 className="font-bold text-red-900">
                          Báo cáo chỉ số kinh tế chung của Tỉnh:
                        </h5>
                        <p className="text-red-900/80 leading-relaxed font-semibold italic">
                          "Khánh Hòa đạt mức chỉ số tăng trưởng công thương dịch
                          vụ GRDP tăng +8.45% so với cùng kỳ năm trước, thuộc
                          nhóm các địa bàn biển phát triển năng động nhất duyên
                          hải."
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeSubTab === "congkhai-tt" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      title:
                        "Phổ biến Hiến pháp & Luật Đất đai mới 2024 sửa đổi",
                      d: "Cung cấp cẩm nang tra cứu và quyền thu hồi đền bù cho cư dân.",
                    },
                    {
                      title: "Cải cách hành chính tích hợp định danh VNeID",
                      d: "Giảm tối thiểu toàn bộ các khâu thủ tục nộp giấy trực tiếp.",
                    },
                    {
                      title:
                        "An toàn giao thông: Đã phạt nguội xe cơ giới vượt tốc tốc độ Trần Phú",
                      d: "Tạo nếp sống văn minh an khang của thành phố du lịch văn hóa.",
                    },
                  ].map((card, i) => (
                    <div
                      key={i}
                      className="bg-white p-5 rounded-xl border border-red-100 relative overflow-hidden flex flex-col justify-between"
                    >
                      <div>
                        <h5 className="text-lg font-black text-red-800 mb-2 leading-snug">
                          {card.title}
                        </h5>
                        <p className="text-lg text-red-800/70 leading-normal font-semibold text-justify">
                          {card.d}
                        </p>
                      </div>
                      <span className="text-lg text-red-700 font-black cursor-pointer uppercase tracking-wider block mt-4 hover:underline">
                        Xem tư liệu →
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {activeSubTab === "congkhai-tc" && (
                <div className="space-y-6">
                  {/* Social Security Simulator */}
                  <div className="bg-white p-5 rounded-2xl border border-red-100/50 shadow-sm space-y-4">
                    <h4 className="text-lg font-black text-red-800 uppercase border-b pb-1.5 flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-red-700" /> CỔNG
                      TRA CỨU BẢO HIỂM XÃ HỘI (SI PHÁT SỐ)
                    </h4>
                    <form onSubmit={handleLookupSocial} className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Số sổ BHXH (Ví dụ: 7912440123)..."
                        value={lookupSocialId}
                        onChange={(e) => setLookupSocialId(e.target.value)}
                        className="bg-red-50/30 border p-2.5 rounded-xl text-lg font-bold flex-1"
                      />
                      <button
                        type="submit"
                        className="bg-red-700 text-white px-5 rounded-xl text-lg font-bold hover:bg-red-700"
                      >
                        Truy nguyên
                      </button>
                    </form>
                    {socialResult && (
                      <div className="p-3.5 bg-red-50 text-red-900 rounded-xl space-y-1.5 border border-red-250 text-lg font-semibold shadow-inner">
                        <div>
                          <strong>Người thụ hưởng:</strong>{" "}
                          {socialResult.fullName}
                        </div>
                        <div>
                          <strong>Đến số CCCD:</strong> {socialResult.cardId}
                        </div>
                        <div>
                          <strong>Nhóm định loại:</strong> {socialResult.type}
                        </div>
                        <div>
                          <strong>Quá trình tích:</strong>{" "}
                          {socialResult.timeline}
                        </div>
                        <div className="text-red-700 font-bold">
                          ● Trạng thái: {socialResult.status}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Land price Lookup Database */}
                  <div className="bg-white p-5 rounded-2xl border border-red-100/50 shadow-sm space-y-4">
                    <h4 className="text-lg font-black text-red-800 uppercase border-b pb-1.5 flex items-center gap-1.5">
                      <Layers size={13} className="text-red-700" /> BẢNG GIÁ ĐẤT
                      TỈNH QUY ĐỊNH
                    </h4>
                    <form
                      onSubmit={handleLookupLandPrice}
                      className="flex gap-2"
                    >
                      <select
                        value={landStreet}
                        onChange={(e) => setLandStreet(e.target.value)}
                        className="bg-red-50/30 border border-red-200 p-2.5 rounded-xl text-lg font-bold flex-1 focus:outline-none"
                      >
                        <option value="Trần Phú">
                          Đường Trần Phú (Nha Trang)
                        </option>
                        <option value="Hùng Vương">
                          Đường Hùng Vương (Nha Trang)
                        </option>
                        <option value="Vân Đồn">
                          Đường Vân Đồn (Nha Trang)
                        </option>
                        <option value="Lê Thánh Tôn">
                          Đường Lê Thánh Tôn (Nha Trang)
                        </option>
                        <option value="Phạm Văn Đồng">
                          Đường Phạm Văn Đồng (Nha Trang)
                        </option>
                      </select>
                      <button
                        type="submit"
                        className="bg-red-700 text-white px-5 rounded-xl text-lg font-bold hover:bg-red-700"
                      >
                        Tính giá đất
                      </button>
                    </form>
                    {landPriceResult && (
                      <div className="p-3.5 bg-red-50 text-red-900 rounded-xl flex justify-between items-center text-lg font-bold border border-red-150">
                        <span>Đơn giá đất nhà nước thẩm định:</span>
                        <span className="text-lg font-black text-red-700">
                          {landPriceResult.price}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* PILLAR 4: HỎI ĐÁP & DỊCH VỤ CÔNG */}
          {activePillar.id === "dichvu" && (
            <div>
              {activeSubTab === "dichvu-hd" && (
                <div className="bg-white p-5 rounded-2xl border border-red-100/50 shadow-sm space-y-4">
                  <h4 className="text-lg font-black text-red-800 uppercase border-b pb-2">
                    CHUYÊN MỤC HỎI ĐÁP Ý KIẾN CỦ TRÍ QUẢN LÝ
                  </h4>
                  <div className="space-y-4 max-h-[220px] overflow-y-auto pr-2">
                    {qaList.map((qa, i) => (
                      <div
                        key={i}
                        className="p-3 bg-red-50/30 rounded-xl space-y-2 border"
                      >
                        <div className="font-extrabold text-lg text-red-700 flex gap-1 items-start">
                          <span className="bg-red-650 text-white font-black text-lg px-1 rounded block mt-0.5 shrink-0">
                            HỎI
                          </span>
                          <p className="text-left leading-normal">{qa.q}</p>
                        </div>
                        <div className="text-lg leading-relaxed text-red-800 font-semibold flex gap-1 items-start border-t border-dashed pt-2">
                          <span className="bg-red-700 text-white font-black text-lg px-1 rounded block mt-0.5 shrink-0">
                            ĐÁP
                          </span>
                          <p className="text-left text-justify text-red-800">
                            {qa.a}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <form
                    onSubmit={handlePostQa}
                    className="space-y-3 pt-3 border-t"
                  >
                    <textarea
                      rows={2}
                      value={qaInput}
                      onChange={(e) => setQaInput(e.target.value)}
                      placeholder="Đặt câu hỏi pháp lý, thủ tục hoặc khiếu nại của bạn gửi Văn phòng UBND tỉnh..."
                      className="w-full bg-red-50/30 border p-3.5 rounded-xl text-lg font-bold text-red-950"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-red-700 text-white px-5 py-2 rounded-xl text-lg font-bold hover:bg-red-600"
                    >
                      Gửi câu hỏi chất vấn
                    </button>
                  </form>
                </div>
              )}

              {activeSubTab === "dichvu-online" && (
                <div className="bg-white p-5 rounded-2xl border border-red-100/50 shadow-sm space-y-4">
                  <h4 className="text-lg font-black text-red-800 uppercase border-b pb-2">
                    CỔNG DỊCH VỤ CÔNG LIÊN THÔNG QUỐC GIA
                  </h4>
                  <p className="text-lg text-red-900/80 font-semibold col-span-2">
                    Chọn thủ tục cần xử lý và thực hiện điền thông tin định danh
                    trực tuyến:
                  </p>

                  {!selectedService ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        "Cấp phép xây dựng nhà ở riêng lẻ đô thị",
                        "Gia hạn thẻ Bảo hiểm Y tế gia đình",
                        "Thành lập chi nhánh liên danh doanh nghiệp",
                        "Xác nhận hộ tịch cư trú ngoài nước tịch",
                      ].map((serv, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setSelectedService(serv);
                            setServiceStep(1);
                            setAppliedCode(null);
                          }}
                          className="p-3 bg-red-50/30 rounded-xl hover:bg-red-50 text-lg font-bold text-red-700 border hover:border-red-300 transition-all text-left flex justify-between items-center"
                        >
                          <span className="leading-snug pr-3">{serv}</span>
                          <ChevronRightSquare
                            size={16}
                            className="text-red-200 shrink-0"
                          />
                        </button>
                      ))}
                    </div>
                  ) : (
                    <form
                      onSubmit={handleApplyService}
                      className="space-y-4 border border-dashed border-red-200 p-4 rounded-xl text-lg font-semibold"
                    >
                      <div className="flex justify-between items-center border-b pb-2 mb-2">
                        <span className="font-bold text-red-700 flex items-center gap-1">
                          <Sparkles size={13} /> {selectedService}
                        </span>
                        <button
                          type="button"
                          onClick={() => setSelectedService(null)}
                          className="text-red-800/70 hover:text-red-800"
                        >
                          <X size={14} />
                        </button>
                      </div>

                      {appliedCode ? (
                        <div className="py-4 text-center space-y-3">
                          <span className="p-3 bg-yellow-50 rounded-full text-amber-600 inline-block">
                            <CheckCircle size={32} />
                          </span>
                          <h5 className="font-extrabold text-red-700 text-lg">
                            GỬI HỒ SƠ THÀNH CÔNG MIỄN PHÍ!
                          </h5>
                          <p className="text-red-900/80 text-lg leading-relaxed max-w-xs mx-auto">
                            Mã hồ sơ định danh của bạn là{" "}
                            <strong>{appliedCode}</strong>. Công chức sẽ tiến
                            hành rà soát cấp phép bản mềm dạng QR định hướng
                            trong vòng 24 giờ hành chính.
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-3 text-left">
                          {serviceStep === 1 ? (
                            <div className="space-y-3">
                              <div>
                                <label className="block text-lg text-red-800/70 font-extrabold uppercase mb-1">
                                  Họ tên người đề nghị
                                </label>
                                <input
                                  type="text"
                                  placeholder="NGUYỄN VĂN AN..."
                                  value={formData.name}
                                  onChange={(e) =>
                                    setFormData({
                                      ...formData,
                                      name: e.target.value,
                                    })
                                  }
                                  className="w-full bg-red-50/30 border p-2.5 rounded-lg text-lg font-bold"
                                  required
                                />
                              </div>
                              <div>
                                <label className="block text-lg text-red-800/70 font-extrabold uppercase mb-1">
                                  Mã định danh cá nhân CCCD
                                </label>
                                <input
                                  type="text"
                                  placeholder="056096001235..."
                                  value={formData.cardId}
                                  onChange={(e) =>
                                    setFormData({
                                      ...formData,
                                      cardId: e.target.value,
                                    })
                                  }
                                  className="w-full bg-red-50/30 border p-2.5 rounded-lg text-lg font-bold"
                                  required
                                />
                              </div>
                              <button
                                type="submit"
                                className="w-full bg-red-750 text-white py-2.5 rounded-lg text-lg font-bold hover:bg-red-600"
                              >
                                Tiếp tục kê khai bước 2 →
                              </button>
                            </div>
                          ) : (
                            <div className="space-y-3">
                              <div>
                                <label className="block text-lg text-red-800/70 font-extrabold uppercase mb-1">
                                  Mô tả lý do / Trực trạng xin giấy phép
                                </label>
                                <textarea
                                  rows={2}
                                  value={formData.address}
                                  onChange={(e) =>
                                    setFormData({
                                      ...formData,
                                      address: e.target.value,
                                    })
                                  }
                                  placeholder="Cam kết xây dựng theo đúng thỏa đồ bản ..."
                                  className="w-full bg-red-50/30 border p-2.5 rounded-lg text-lg font-bold"
                                />
                              </div>
                              <div className="flex gap-2 items-center">
                                <input
                                  type="checkbox"
                                  checked={formData.agreed}
                                  onChange={(e) =>
                                    setFormData({
                                      ...formData,
                                      agreed: e.target.checked,
                                    })
                                  }
                                  className="scale-110"
                                  id="agree-chinh-quyen"
                                />
                                <label
                                  htmlFor="agree-chinh-quyen"
                                  className="text-base text-red-900/80 font-bold select-none cursor-pointer"
                                >
                                  Tôi xin cam đoan các thông tin kê khai là
                                  thật.
                                </label>
                              </div>
                              <div className="flex gap-2 pt-2 border-t">
                                <button
                                  type="button"
                                  onClick={() => setServiceStep(1)}
                                  className="bg-red-100 text-red-800 px-4 py-2 rounded-lg text-lg font-bold flex-1"
                                >
                                  Quay lại
                                </button>
                                <button
                                  type="submit"
                                  className="bg-red-750 text-white px-4 py-2 rounded-lg text-lg font-bold flex-1"
                                >
                                  Nộp hồ sơ ngay ✓
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </form>
                  )}
                </div>
              )}

              {activeSubTab === "dichvu-tiepnhan" && (
                <div className="bg-white p-5 rounded-2xl border border-red-100/50 shadow-sm space-y-4 text-lg font-bold">
                  <h4 className="text-lg font-black text-red-800 uppercase border-b pb-2">
                    TIẾP NHẬN PHẢN HỒI Ý KIẾN CÔNG DÂN & DOANH NGHIỆP
                  </h4>
                  <p className="text-red-900/80 font-semibold leading-relaxed text-justify">
                    Hệ thống đã tự động liên kết với trung tâm xử lý phản ánh
                    thực hiện chuyển giao trách nhiệm. Quý công dân và đơn vị
                    doanh nghiệp xin vui lòng sử dụng biểu mẫu nộp phản ánh hiện
                    trường ngoài trang chính để nhận phiếu xử lý định hướng cụ
                    thể.
                  </p>
                  <div className="p-4 bg-red-50 text-red-900 border border-red-150 rounded-xl">
                    Tổng số lượng kiến nghị đã tiếp nhận và phân giải giải quyết
                    tính đến tháng 5/2026: <strong>14,250 trường hợp</strong>{" "}
                    (Đạt tỷ lệ dứt điểm 92.4%).
                  </div>
                </div>
              )}

              {activeSubTab === "dichvu-congbao" && (
                <div className="bg-white p-5 rounded-2xl border border-red-100/50 shadow-sm space-y-3 text-lg">
                  <h4 className="text-lg font-black text-red-800 uppercase border-b pb-2">
                    CƠ SỞ DỮ LIỆU QUỐC GIA & CÔNG BÁO CHÍNH THỨC
                  </h4>
                  <p className="text-red-900/80 font-semibold">
                    Cửa ngõ kết nối cơ quan lập pháp: kết nối chính thức đến kho
                    chứa dữ liệu chính trị quốc gia nước Cộng hòa Xã hội Chủ
                    nghĩa Việt Nam.
                  </p>
                  <div
                    className="p-3 bg-red-50/30 rounded-lg flex items-center justify-between border-red-200 border cursor-pointer hover:border-red-300"
                    onClick={() =>
                      showNotification(
                        "Chuyển liên kết CSDL hành chính quốc gia!",
                      )
                    }
                  >
                    <span className="font-extrabold text-red-700">
                      ● Trang Công báo nước Cộng hòa XHCN Việt Nam
                    </span>
                    <ExternalLink size={13} className="text-red-800/70" />
                  </div>
                  <div
                    className="p-3 bg-red-50/30 rounded-lg flex items-center justify-between border-red-200 border cursor-pointer hover:border-red-300"
                    onClick={() =>
                      showNotification(
                        "Chuyển liên kết văn bản pháp quy quốc gia!",
                      )
                    }
                  >
                    <span className="font-extrabold text-red-700">
                      ● Cơ sở dữ liệu quốc gia về văn bản quy phạm pháp luật
                    </span>
                    <ExternalLink size={13} className="text-red-800/70" />
                  </div>
                </div>
              )}

              {activeSubTab === "dichvu-banners" && (
                <div className="space-y-4">
                  {/* Banner Tuyên Truyền Kỷ Niệm */}
                  <div className="bg-white text-red-700 p-6 rounded-2xl shadow-md text-center space-y-3 relative overflow-hidden flex flex-col justify-center min-h-[160px] border border-red-100">
                    <div className="absolute top-0 left-0 bg-red-700 text-white text-base font-black px-2.5 py-1 uppercase rounded-br-lg">
                      Tuyên truyền Quốc gia
                    </div>
                    <h4 className="text-lg md:text-base font-black tracking-widest text-red-800 uppercase pt-2">
                      CHÀO MỪNG CÁC NGÀY KỶ NIỆM THẮNG LỢI LỚN TRONG NĂM 2026
                    </h4>
                    <p className="text-lg text-black leading-relaxed font-semibold max-w-md mx-auto">
                      Chào mừng 51 năm Ngày thống nhất đất nước và Giải phóng
                      hoàn toàn miền Nam, thống nhất Tổ quốc (30/04/1975 -
                      30/04/2026).
                    </p>
                  </div>

                  {/* Bản Tin Tuần */}
                  <div className="bg-white p-5 rounded-2xl border border-red-100/50 shadow-sm space-y-3">
                    <span className="text-lg bg-red-100 text-red-800 px-2 py-0.5 rounded uppercase font-black tracking-widest">
                      Bản tin truyền thông tổng hợp
                    </span>
                    <h4 className="text-lg font-black text-red-800">
                      Điểm tin hoạt động nổi bật, sự kiện chủ chốt toàn tỉnh
                      Khánh Hòa tuần vừa qua
                    </h4>
                    <p className="text-lg text-red-900/80 leading-relaxed font-semibold text-justify">
                      Trong tuần qua, Tỉnh tổ chức xúc tiến FDI thành công, khởi
                      động hạ tầng chuyển đổi hành chính số liên huyện, xử lý
                      nhanh sạt lở bồi lấp bờ sông dốc cao, đảm bảo toàn thể an
                      cư sinh kế của dân cư trong thời gian mưa lũ bất ngờ.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* PILLAR 5: BẢN ĐỒ & THĂM DÒ - RED-ORANGE THEMED */}
          {activePillar.id === "bando" && (
            <div>
              {activeSubTab === "bando-filter" && (
                <div className="bg-white p-5 rounded-2xl border border-red-100/50 shadow-sm space-y-4">
                  <h4 className="text-lg font-black text-red-800 uppercase border-b pb-2">
                    MẠNG LƯỚI LIÊN KẾT WEBSITE ĐƠN VỊ NGOÀI PORTAL
                  </h4>
                  <div className="space-y-3">
                    <label className="text-base uppercase font-black text-red-800 tracking-wider block">
                      Chọn Cấp/Sở ban ngành cần liên kết điện tử:
                    </label>
                    <select
                      value={webLinkGroup}
                      onChange={(e) => {
                        setWebLinkGroup(e.target.value);
                        if (e.target.value) {
                          showNotification(
                            `Mô phỏng: Chuyển hướng thành công sang trang ${e.target.value}.gov.vn của Tỉnh!`,
                          );
                        }
                      }}
                      className="w-full bg-red-50/30 border p-3 rounded-xl text-lg font-bold text-red-900 focus:outline-[#EA580C]"
                    >
                      <option value="">
                        -- Chọn Đơn vị chức năng cần liên kết --
                      </option>
                      <option value="Sở Kế hoạch và Đầu tư">
                        Sở Kế hoạch và Đầu tư (sokhdt.khanhhoa.gov.vn)
                      </option>
                      <option value="Sở Tài chính">
                        Sở Tài chính (sotaichinh.khanhhoa.gov.vn)
                      </option>
                      <option value="Sở Tư pháp">
                        Sở Tư pháp (sotuphap.khanhhoa.gov.vn)
                      </option>
                      <option value="UBND Thành Phố Nha Trang">
                        UBND Thành Phố Nha Trang (nhatrang.gov.vn)
                      </option>
                      <option value="UBND Huyện Vạn Ninh">
                        UBND Huyện Vạn Ninh (vanninh.gov.vn)
                      </option>
                    </select>
                  </div>
                </div>
              )}

              {activeSubTab === "bando-poll" && (
                <div className="bg-white p-5 rounded-2xl border border-red-100/50 shadow-sm space-y-4">
                  <h4 className="text-lg font-black text-red-800 uppercase border-b pb-2">
                    THĂM DÒ Ý KIẾN: ĐỊNH HƯỚNG QUY HOẠCH PHÁT TRIỂN TIÊN PHONG
                  </h4>
                  <p className="text-lg text-red-900/80 font-semibold leading-relaxed">
                    Bạn đánh giá lĩnh vực nào cần đun đẩy nâng cấp cải tiến
                    triệt để nhất tại đô thị Khánh Hòa thời gian tới?
                  </p>

                  <form
                    onSubmit={handleVote}
                    className="space-y-3 text-lg font-bold"
                  >
                    {[
                      {
                        id: "xa-choi",
                        label:
                          "Hạ tầng phục vụ xã hội và an sinh an khang cử tri",
                        res: pollResults.xaHoi,
                      },
                      {
                        id: "moi-truong",
                        label: "Bảo tồn môi trường biển, xử lý rác thải vịnh",
                        res: pollResults.moiTruong,
                      },
                      {
                        id: "ha-tang",
                        label: "Cải cách thủ tục một cửa hành chính",
                        res: pollResults.haTang,
                      },
                    ].map((choice) => (
                      <div
                        key={choice.id}
                        className="p-3 bg-red-50/30 rounded-xl flex items-center justify-between border cursor-pointer hover:border-red-400"
                        onClick={() => setPoleValue(choice.id)}
                      >
                        <div className="flex gap-2 items-center">
                          <input
                            type="radio"
                            name="poll"
                            checked={poleValue === choice.id}
                            onChange={() => setPoleValue(choice.id)}
                            readOnly
                          />
                          <span className="text-red-900 leading-tight">
                            {choice.label}
                          </span>
                        </div>
                        {voted && (
                          <span className="text-red-700 text-lg font-black shrink-0">
                            {choice.res} lượt bình chọn
                          </span>
                        )}
                      </div>
                    ))}

                    {!voted ? (
                      <button
                        type="submit"
                        className="bg-red-700 text-white px-6 py-2.5 rounded-xl text-lg font-bold hover:bg-red-700"
                      >
                        Bình chọn ý kiến ngay
                      </button>
                    ) : (
                      <div className="p-3 bg-yellow-50 text-amber-800 text-lg rounded-xl font-bold border border-amber-200/60">
                        Cảm ơn bạn! Cuộc khảo sát đã cập nhật tỷ lệ dân cư bình
                        chọn.
                      </div>
                    )}
                  </form>
                </div>
              )}

              {activeSubTab === "bando-sponsor" && (
                <div className="bg-white p-5 rounded-2xl border border-red-100/50 shadow-sm space-y-4">
                  <h4 className="text-lg font-black text-red-700 uppercase border-b pb-2">
                    HỖ TRỢ QUẢNG BÁ SẢN PHẨM DOANH NGHIỆP ĐỊA PHƯƠNG (OCOP)
                  </h4>
                  <p className="text-lg text-red-900/80 font-medium leading-relaxed">
                    Trưng bày nông - lâm - thủy - hải sản sạch đạt chứng thức
                    OCOP tiêu chuẩn Quốc gia:
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-lg">
                    <div className="p-3 bg-red-50/20 border border-red-100 rounded-xl space-y-1">
                      <span className="text-red-700 font-black tracking-widest block text-lg">
                        OCOP 5 SAO ★★★★★
                      </span>
                      <strong>Yến sào Khánh Hòa tự nhiên</strong>
                      <span className="text-base text-red-800/70 block font-normal">
                        Sản vật quý thiên nhiên ban tặng vịnh biển hoang sơ dã.
                      </span>
                    </div>
                    <div className="p-3 bg-red-50/20 border border-red-100 rounded-xl space-y-1">
                      <span className="text-red-700 font-black tracking-widest block text-lg">
                        OCOP 4 SAO ★★★★
                      </span>
                      <strong>Xoài chín cát Cam Lâm thơm ngon</strong>
                      <span className="text-base text-red-800/70 block font-normal">
                        Xoài Úc thâm quả, ngọt dịu nhẹ, phục vụ xuất khẩu quốc
                        tế.
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* PDF Document Reader Simulation Modal */}
      <AnimatePresence>
        {readingDoc && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-2xl text-left flex flex-col"
            >
              <div className="bg-red-600 text-white py-4 px-6 flex items-center justify-between">
                <span className="text-lg font-black uppercase flex items-center gap-2">
                  <FileText size={18} className="text-red-400" /> Bản xem văn
                  bản chính quy phạm
                </span>
                <button
                  onClick={() => setReadingDoc(null)}
                  className="p-1 hover:bg-white/10 rounded-full text-white cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-8 space-y-5 overflow-y-auto max-h-[420px] text-lg">
                {/* Emblem */}
                <div className="text-center font-bold uppercase text-red-900/80">
                  CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
                  <br />
                  Độc lập - Tự do - Hạnh phúc
                  <div className="w-20 h-[1.5px] bg-red-700 mx-auto mt-2" />
                </div>
                <div className="flex justify-between font-bold text-red-800/70 uppercase">
                  <span>UBND TỈNH KHÁNH HÒA</span>
                  <span>Số: {readingDoc.num}</span>
                </div>
                <div className="space-y-4">
                  <h4 className="text-center font-black text-red-800 text-lg leading-snug">
                    {readingDoc.type.toUpperCase()}
                  </h4>
                  <p className="text-center font-extrabold text-red-950 uppercase leading-snug max-w-md mx-auto">
                    {readingDoc.title}
                  </p>
                  <div className="border-t border-dashed border-red-200 pt-4" />
                  <p className="text-red-900 leading-relaxed text-justify indent-8 font-medium">
                    {readingDoc.desc}
                  </p>
                  <p className="text-red-900 leading-relaxed text-justify indent-8 font-medium">
                    {readingDoc.fileText}
                  </p>
                </div>
              </div>

              <div className="bg-red-50/30 py-4 px-6 border-t border-red-100/50 flex justify-end gap-3 rounded-b-3xl">
                <button
                  onClick={() => setReadingDoc(null)}
                  className="bg-red-100 text-red-950 px-4 py-2 rounded-xl text-lg font-bold hover:bg-red-300"
                >
                  Đóng bản đọc
                </button>
                <button
                  onClick={() => {
                    showNotification(
                      `Đã gửi yêu cầu tải số hóa: ${readingDoc.num}.pdf thành công!`,
                    );
                    setReadingDoc(null);
                  }}
                  className="bg-red-700 text-white px-5 py-2 rounded-xl text-lg font-bold hover:bg-red-700 shadow-md"
                >
                  Tải xuống PDF bản gốc
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
