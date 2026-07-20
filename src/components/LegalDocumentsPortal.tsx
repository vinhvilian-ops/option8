import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  FileText, 
  Database, 
  Search, 
  MessageSquare, 
  Send, 
  Phone, 
  ChevronLeft,
  ChevronRight, 
  Scale, 
  Globe, 
  Bookmark, 
  Info,
  CheckCircle,
  CheckCircle2,
  Clock,
  ShieldAlert,
  BookOpen,
  Briefcase,
  Compass,
  HeartPulse,
  Zap,
  TrendingUp,
  Layers,
  Map,
  CloudSun,
  PhoneCall,
  HelpCircle,
  Droplets,
  Wind,
  Sun,
  Sparkles,
  Megaphone,
  Award,
  Download,
  Calendar,
  X,
  QrCode,
  Filter,
  RotateCcw,
  Building2,
  ExternalLink
} from "lucide-react";

interface DocItem {
  id: string;
  date: string;
  title: string;
  agency: string;
  type: string;
  field: string;
  level: string;
  year: string;
  effectiveDate: string;
  gazetteNum: string;
  category: string;
}

const LOCAL_DOC_DATA: Record<string, DocItem[]> = {
  "Văn bản mới cập nhật": [
    {
      id: "255/QĐ-STC",
      date: "15/07/2026",
      title: "Ban hành tiêu chuẩn, định mức sử dụng máy móc, thiết bị chuyên dùng của Sở Tài chính thành phố Đà Nẵng",
      agency: "Sở Tài chính",
      type: "Quyết định",
      field: "Kinh tế - Xã hội",
      level: "Cấp Tỉnh",
      year: "2026",
      effectiveDate: "15/07/2026",
      gazetteNum: "Số 20/2026",
      category: "Văn bản mới cập nhật"
    },
    {
      id: "6707/UBND-SNV",
      date: "13/07/2026",
      title: "V/v triển khai Luật Viên chức số 129/2025/QH15 và các Nghị định hướng dẫn thi hành Luật Viên chức",
      agency: "Sở Nội vụ",
      type: "Công văn",
      field: "Nội vụ",
      level: "Cấp Tỉnh",
      year: "2026",
      effectiveDate: "13/07/2026",
      gazetteNum: "Số 19/2026",
      category: "Văn bản mới cập nhật"
    },
    {
      id: "355/KH-UBND",
      date: "13/07/2026",
      title: "Tăng cường thực thi tiết kiệm điện và phát triển điện mặt trời mái nhà và tăng cường lãnh đạo, chỉ đạo công tác quản lý, sử dụng năng lượng tiết kiệm, hiệu quả và phát triển các nguồn năng lượng tái tạo, năng lượng mới, năng lượng sạch trên địa bàn thành phố",
      agency: "UBND Tỉnh",
      type: "Kế hoạch",
      field: "Năng lượng",
      level: "Cấp Tỉnh",
      year: "2026",
      effectiveDate: "13/07/2026",
      gazetteNum: "Số 18/2026",
      category: "Văn bản mới cập nhật"
    },
    {
      id: "3096/QĐ-UBND",
      date: "13/07/2026",
      title: "Phê duyệt giá đất ở tái định cư tại Khu TĐC phục vụ giải toả tuyến đường vành đai phía Tây xã Hoà Khương để làm cơ sở thu tiền sử dụng đất cho các hộ gia đình, cá nhân được bố trí tái định cư nhưng chưa có giá đất trước ngày 01/8/2024 trên địa bàn xã Hòa Tiến",
      agency: "UBND Tỉnh",
      type: "Quyết định",
      field: "Đất đai & Tài nguyên",
      level: "Cấp Tỉnh",
      year: "2026",
      effectiveDate: "13/07/2026",
      gazetteNum: "Số 17/2026",
      category: "Văn bản mới cập nhật"
    },
    {
      id: "354/KH-UBND",
      date: "13/07/2026",
      title: "Triển khai các nhiệm vụ, giải pháp chủ yếu thực hiện mục tiêu tăng trưởng kinh tế 6 tháng cuối năm 2026 trên địa bàn thành phố Đà Nẵng",
      agency: "UBND Tỉnh",
      type: "Kế hoạch",
      field: "Kinh tế - Xã hội",
      level: "Cấp Tỉnh",
      year: "2026",
      effectiveDate: "13/07/2026",
      gazetteNum: "Số 16/2026",
      category: "Văn bản mới cập nhật"
    },
    {
      id: "113/2026/QĐ-UBND",
      date: "13/07/2026",
      title: "Ban hành Quy định quản lý an toàn trong sử dụng điện trên địa bàn thành phố Đà Nẵng",
      agency: "UBND Tỉnh",
      type: "Quyết định",
      field: "Năng lượng",
      level: "Cấp Tỉnh",
      year: "2026",
      effectiveDate: "13/07/2026",
      gazetteNum: "Số 15/2026",
      category: "Văn bản mới cập nhật"
    },
    {
      id: "12/CT-UBND",
      date: "13/07/2026",
      title: "Chỉ thị về tăng cường công tác bảo vệ môi trường trên địa bàn thành phố",
      agency: "UBND Tỉnh",
      type: "Chỉ thị",
      field: "Môi trường",
      level: "Cấp Tỉnh",
      year: "2026",
      effectiveDate: "13/07/2026",
      gazetteNum: "Số 14/2026",
      category: "Văn bản mới cập nhật"
    },
    {
      id: "45/BC-SGDDT",
      date: "12/07/2026",
      title: "Báo cáo kết quả kỳ thi tốt nghiệp THPT năm 2026",
      agency: "Sở Giáo dục và Đào tạo",
      type: "Báo cáo",
      field: "Giáo dục - Đào tạo",
      level: "Cấp Tỉnh",
      year: "2026",
      effectiveDate: "12/07/2026",
      gazetteNum: "Số 13/2026",
      category: "Văn bản mới cập nhật"
    },
    {
      id: "156/TB-VPUB",
      date: "11/07/2026",
      title: "Thông báo kết luận của Chủ tịch UBND tỉnh tại phiên họp thường kỳ tháng 6",
      agency: "Văn phòng UBND",
      type: "Thông báo",
      field: "Hành chính",
      level: "Cấp Tỉnh",
      year: "2026",
      effectiveDate: "11/07/2026",
      gazetteNum: "Số 12/2026",
      category: "Văn bản mới cập nhật"
    },
    {
      id: "89/NQ-HĐND",
      date: "10/07/2026",
      title: "Nghị quyết về nhiệm vụ phát triển kinh tế - xã hội 6 tháng cuối năm 2026",
      agency: "HĐND Tỉnh",
      type: "Nghị quyết",
      field: "Chính trị",
      level: "Cấp Tỉnh",
      year: "2026",
      effectiveDate: "20/07/2026",
      gazetteNum: "Số 11/2026",
      category: "Văn bản mới cập nhật"
    },
    {
      id: "234/QĐ-UBND",
      date: "09/07/2026",
      title: "Quyết định phê duyệt dự án đầu tư xây dựng cầu Rồng 2",
      agency: "UBND Tỉnh",
      type: "Quyết định",
      field: "Giao thông",
      level: "Cấp Tỉnh",
      year: "2026",
      effectiveDate: "09/07/2026",
      gazetteNum: "Số 10/2026",
      category: "Văn bản mới cập nhật"
    },
    {
      id: "67/KH-SYT",
      date: "08/07/2026",
      title: "Kế hoạch triển khai chiến dịch tiêm chủng mở rộng đợt 3 năm 2026",
      agency: "Sở Y tế",
      type: "Kế hoạch",
      field: "Y tế",
      level: "Cấp Tỉnh",
      year: "2026",
      effectiveDate: "15/07/2026",
      gazetteNum: "Số 09/2026",
      category: "Văn bản mới cập nhật"
    },
    {
      id: "12/2026/TT-BTC",
      date: "07/07/2026",
      title: "Thông tư hướng dẫn quản lý và sử dụng kinh phí sự nghiệp thực hiện chương trình mục tiêu quốc gia",
      agency: "Bộ Tài chính",
      type: "Thông tư",
      field: "Tài chính",
      level: "Trung ương",
      year: "2026",
      effectiveDate: "22/08/2026",
      gazetteNum: "Số 08/2026",
      category: "Văn bản mới cập nhật"
    },
    {
      id: "456/CV-STNMT",
      date: "06/07/2026",
      title: "V/v tăng cường kiểm tra xử lý vi phạm trong lĩnh vực khai thác khoáng sản",
      agency: "Sở Tài nguyên và Môi trường",
      type: "Công văn",
      field: "Tài nguyên",
      level: "Cấp Tỉnh",
      year: "2026",
      effectiveDate: "06/07/2026",
      gazetteNum: "Số 07/2026",
      category: "Văn bản mới cập nhật"
    },
    {
      id: "78/NĐ-CP",
      date: "05/07/2026",
      title: "Nghị định quy định về quản lý và bảo vệ biên giới quốc gia",
      agency: "Chính phủ",
      type: "Nghị định",
      field: "An ninh trật tự",
      level: "Trung ương",
      year: "2026",
      effectiveDate: "20/08/2026",
      gazetteNum: "Số 06/2026",
      category: "Văn bản mới cập nhật"
    },
    {
      id: "90/QĐ-STC",
      date: "04/07/2026",
      title: "Quyết định điều chỉnh dự toán ngân sách nhà nước năm 2026",
      agency: "Sở Tài chính",
      type: "Quyết định",
      field: "Tài chính",
      level: "Cấp Tỉnh",
      year: "2026",
      effectiveDate: "04/07/2026",
      gazetteNum: "Số 05/2026",
      category: "Văn bản mới cập nhật"
    },
    {
      id: "34/CT-TU",
      date: "03/07/2026",
      title: "Chỉ thị của Tỉnh ủy về tăng cường sự lãnh đạo của Đảng đối với công tác chuyển đổi số",
      agency: "Tỉnh ủy",
      type: "Chỉ thị",
      field: "Chính trị",
      level: "Cấp Tỉnh",
      year: "2026",
      effectiveDate: "03/07/2026",
      gazetteNum: "Số 04/2026",
      category: "Văn bản mới cập nhật"
    },
    {
      id: "567/TB-UBND",
      date: "02/07/2026",
      title: "Thông báo về việc nghỉ lễ Quốc khánh 02/9 năm 2026",
      agency: "UBND Tỉnh",
      type: "Thông báo",
      field: "Hành chính",
      level: "Cấp Tỉnh",
      year: "2026",
      effectiveDate: "02/07/2026",
      gazetteNum: "Số 03/2026",
      category: "Văn bản mới cập nhật"
    },
    {
      id: "23/NQ-CP",
      date: "01/07/2026",
      title: "Nghị quyết của Chính phủ về đẩy mạnh cải cách hành chính nhà nước",
      agency: "Chính phủ",
      type: "Nghị quyết",
      field: "Hành chính",
      level: "Trung ương",
      year: "2026",
      effectiveDate: "01/07/2026",
      gazetteNum: "Số 02/2026",
      category: "Văn bản mới cập nhật"
    },
    {
      id: "101/QĐ-TTg",
      date: "30/06/2026",
      title: "Quyết định của Thủ tướng Chính phủ về phê duyệt quy hoạch tỉnh thời kỳ 2021-2030",
      agency: "Thủ tướng Chính phủ",
      type: "Quyết định",
      field: "Xây dựng",
      level: "Trung ương",
      year: "2026",
      effectiveDate: "30/06/2026",
      gazetteNum: "Số 01/2026",
      category: "Văn bản mới cập nhật"
    },
    {
      id: "88/CV-SNNPTNT",
      date: "29/06/2026",
      title: "V/v chủ động phòng chống dịch bệnh trên cây trồng, vật nuôi mùa mưa bão",
      agency: "Sở Nông nghiệp và Phát triển nông thôn",
      type: "Công văn",
      field: "Nông nghiệp",
      level: "Cấp Tỉnh",
      year: "2026",
      effectiveDate: "29/06/2026",
      gazetteNum: "Số 150/2026",
      category: "Văn bản mới cập nhật"
    },
    {
      id: "44/KH-SDL",
      date: "28/06/2026",
      title: "Kế hoạch tổ chức Lễ hội Du lịch biển 2026",
      agency: "Sở Du lịch",
      type: "Kế hoạch",
      field: "Du lịch",
      level: "Cấp Tỉnh",
      year: "2026",
      effectiveDate: "05/07/2026",
      gazetteNum: "Số 149/2026",
      category: "Văn bản mới cập nhật"
    },
    {
      id: "123/TB-STTTT",
      date: "27/06/2026",
      title: "Thông báo về việc vận hành hệ thống thông tin giải quyết thủ tục hành chính mới",
      agency: "Sở Thông tin và Truyền thông",
      type: "Thông báo",
      field: "Công nghệ thông tin",
      level: "Cấp Tỉnh",
      year: "2026",
      effectiveDate: "01/07/2026",
      gazetteNum: "Số 148/2026",
      category: "Văn bản mới cập nhật"
    },
    {
      id: "55/BC-SLDTHXH",
      date: "26/06/2026",
      title: "Báo cáo tình hình lao động, việc làm và tiền lương 6 tháng đầu năm 2026",
      agency: "Sở Lao động - Thương binh và Xã hội",
      type: "Báo cáo",
      field: "Lao động - Tiền lương",
      level: "Cấp Tỉnh",
      year: "2026",
      effectiveDate: "26/06/2026",
      gazetteNum: "Số 147/2026",
      category: "Văn bản mới cập nhật"
    },
    {
      id: "77/QĐ-SCT",
      date: "25/06/2026",
      title: "Quyết định phê duyệt danh mục các dự án thu hút đầu tư vào khu công nghiệp",
      agency: "Sở Công thương",
      type: "Quyết định",
      field: "Đầu tư",
      level: "Cấp Tỉnh",
      year: "2026",
      effectiveDate: "25/06/2026",
      gazetteNum: "Số 146/2026",
      category: "Văn bản mới cập nhật"
    },
    {
      id: "11/CT-UBND",
      date: "24/06/2026",
      title: "Chỉ thị về việc tăng cường kỷ luật, kỷ cương hành chính trong các cơ quan nhà nước",
      agency: "UBND Tỉnh",
      type: "Chỉ thị",
      field: "Hành chính",
      level: "Cấp Tỉnh",
      year: "2026",
      effectiveDate: "24/06/2026",
      gazetteNum: "Số 145/2026",
      category: "Văn bản mới cập nhật"
    },
    {
      id: "99/KH-SVHTT",
      date: "23/06/2026",
      title: "Kế hoạch tổ chức Đại hội Thể dục thể thao tỉnh lần thứ IX",
      agency: "Sở Văn hóa và Thể thao",
      type: "Kế hoạch",
      field: "Thể thao",
      level: "Cấp Tỉnh",
      year: "2026",
      effectiveDate: "01/08/2026",
      gazetteNum: "Số 144/2026",
      category: "Văn bản mới cập nhật"
    },
    {
      id: "202/CV-SKHCN",
      date: "22/06/2026",
      title: "V/v hướng dẫn đăng ký đề tài khoa học công nghệ cấp tỉnh năm 2027",
      agency: "Sở Khoa học và Công nghệ",
      type: "Công văn",
      field: "Khoa học - Công nghệ",
      level: "Cấp Tỉnh",
      year: "2026",
      effectiveDate: "22/06/2026",
      gazetteNum: "Số 143/2026",
      category: "Văn bản mới cập nhật"
    },
    {
      id: "33/NQ-TU",
      date: "21/06/2026",
      title: "Nghị quyết của Tỉnh ủy về bảo tồn và phát huy giá trị di sản văn hóa",
      agency: "Tỉnh ủy",
      type: "Nghị quyết",
      field: "Văn hóa",
      level: "Cấp Tỉnh",
      year: "2026",
      effectiveDate: "21/06/2026",
      gazetteNum: "Số 142/2026",
      category: "Văn bản mới cập nhật"
    },
    {
      id: "444/TB-SKHĐT",
      date: "20/06/2026",
      title: "Thông báo về việc hỗ trợ doanh nghiệp khởi nghiệp đổi mới sáng tạo",
      agency: "Sở Kế hoạch và Đầu tư",
      type: "Thông báo",
      field: "Doanh nghiệp",
      level: "Cấp Tỉnh",
      year: "2026",
      effectiveDate: "20/06/2026",
      gazetteNum: "Số 141/2026",
      category: "Văn bản mới cập nhật"
    },
    {
      id: "66/BC-SXD",
      date: "19/06/2026",
      title: "Báo cáo tiến độ triển khai các dự án nhà ở xã hội trên địa bàn",
      agency: "Sở Xây dựng",
      type: "Báo cáo",
      field: "Đất đai - Nhà ở",
      level: "Cấp Tỉnh",
      year: "2026",
      effectiveDate: "19/06/2026",
      gazetteNum: "Số 140/2026",
      category: "Văn bản mới cập nhật"
    },
    {
      id: "15/QĐ-UBND",
      date: "18/06/2026",
      title: "Quyết định phê duyệt quy hoạch chi tiết khu đô thị mới phía Nam",
      agency: "UBND Tỉnh",
      type: "Quyết định",
      field: "Xây dựng",
      level: "Cấp Tỉnh",
      year: "2026",
      effectiveDate: "18/06/2026",
      gazetteNum: "Số 139/2026",
      category: "Văn bản mới cập nhật"
    },
    {
      id: "22/KH-STP",
      date: "17/06/2026",
      title: "Kế hoạch phổ biến giáo dục pháp luật 6 tháng cuối năm 2026",
      agency: "Sở Tư pháp",
      type: "Kế hoạch",
      field: "Chính sách",
      level: "Cấp Tỉnh",
      year: "2026",
      effectiveDate: "01/07/2026",
      gazetteNum: "Số 138/2026",
      category: "Văn bản mới cập nhật"
    },
    {
      id: "789/CV-CAT",
      date: "16/06/2026",
      title: "V/v tăng cường đảm bảo an ninh trật tự trong các ngày lễ lớn",
      agency: "Công an Tỉnh",
      type: "Công văn",
      field: "An ninh trật tự",
      level: "Cấp Tỉnh",
      year: "2026",
      effectiveDate: "16/06/2026",
      gazetteNum: "Số 137/2026",
      category: "Văn bản mới cập nhật"
    },
    {
      id: "55/NQ-HĐND",
      date: "15/06/2026",
      title: "Nghị quyết thông qua danh mục các dự án thu hồi đất năm 2026",
      agency: "HĐND Tỉnh",
      type: "Nghị quyết",
      field: "Đất đai - Nhà ở",
      level: "Cấp Tỉnh",
      year: "2026",
      effectiveDate: "25/06/2026",
      gazetteNum: "Số 136/2026",
      category: "Văn bản mới cập nhật"
    },
    {
      id: "10/CT-TU",
      date: "14/06/2026",
      title: "Chỉ thị về việc đẩy mạnh thực hiện nếp sống văn minh đô thị",
      agency: "Tỉnh ủy",
      type: "Chỉ thị",
      field: "Văn hóa",
      level: "Cấp Tỉnh",
      year: "2026",
      effectiveDate: "14/06/2026",
      gazetteNum: "Số 135/2026",
      category: "Văn bản mới cập nhật"
    }
  ],
  "Công báo Khánh Hòa": [
    {
      id: "185/CĐ-UBND",
      date: "24/05/2026",
      title: "Quyết định thúc đẩy đầu tư công và hạ tầng chiến lược",
      agency: "UBND Tỉnh",
      type: "Quyết định",
      field: "Đầu tư công",
      level: "Cấp Tỉnh",
      year: "2026",
      effectiveDate: "01/06/2026",
      gazetteNum: "Số 15/2026",
      category: "Công báo Khánh Hòa"
    },
    {
      id: "42/CT-UBND",
      date: "23/05/2026",
      title: "Chỉ thị triển khai chiến dịch giải phóng mặt bằng cao tốc",
      agency: "UBND Tỉnh",
      type: "Chỉ thị",
      field: "Đô thị & Quy hoạch",
      level: "Cấp Tỉnh",
      year: "2026",
      effectiveDate: "23/05/2026",
      gazetteNum: "Số 14/2026",
      category: "Công báo Khánh Hòa"
    }
  ],
  "Thông báo chính thức": [
    {
      id: "142/TB-UBND",
      date: "30/05/2026",
      title: "Kết luận của Chủ tịch tỉnh về Quy hoạch đô thị Diên Khánh",
      agency: "UBND Tỉnh",
      type: "Thông báo",
      field: "Đô thị & Quy hoạch",
      level: "Cấp Tỉnh",
      year: "2026",
      effectiveDate: "30/05/2026",
      gazetteNum: "Số 15/2026",
      category: "Thông báo chính thức"
    }
  ]
};

interface DraftDocItem {
  id: string;
  title: string;
  status: "Đang lấy ý kiến" | "Hết hạn góp ý";
  deadline: string;
  desc: string;
  commentsCount: number;
}

export default function LegalDocumentsPortal() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Văn bản mới cập nhật");
  const [inputText, setInputText] = useState("");

  // States for search and filter of general documents
  const [docSearchQuery, setDocSearchQuery] = useState("");
  const [docFromDate, setDocFromDate] = useState("");
  const [docToDate, setDocToDate] = useState("");
  const [docSearchType, setDocSearchType] = useState("Tất cả");
  const [docSearchField, setDocSearchField] = useState("Tất cả");
  const [docSearchLevel, setDocSearchLevel] = useState("Tất cả");
  const [docSearchAgency, setDocSearchAgency] = useState("Tất cả");
  const [docSearchYear, setDocSearchYear] = useState("Tất cả"); // Keep for backward compatibility or hidden logic
  const [docShowAdvanced, setDocShowAdvanced] = useState(false);
  const [selectedQrDoc, setSelectedQrDoc] = useState<DocItem | null>(null);
  const [docCurrentPage, setDocCurrentPage] = useState(1);

  // Reset pagination when category or filters change
  useEffect(() => {
    setDocCurrentPage(1);
  }, [selectedCategory, docSearchQuery, docSearchYear, docSearchType, docSearchAgency, docSearchField]);

  // States for Góp ý Dự thảo QPPL Trực tiếp
  const [draftDocSelected, setDraftDocSelected] = useState("Dự thảo kiến trúc cảnh quan biển Trần Phú");
  const [draftName, setDraftName] = useState("");
  const [draftContact, setDraftContact] = useState("");
  const [draftContent, setDraftContent] = useState("");
  const [messages, setMessages] = useState([
    {
      id: "m-1",
      sender: "SỞ XÂY DỰNG KHÁNH HÒA",
      text: "Chào mừng Quý khách đến với Cổng tham vấn ý kiến nhân dân tỉnh Khánh Hòa. Hãy gửi ý kiến đóng góp hoặc thắc mắc của bạn về các dự thảo quy hoạch mới nhất.",
      time: "Hôm nay",
      isSystem: true
    }
  ]);
  const [toast, setToast] = useState<string | null>(null);

  // States for interactive consultation draft lists (from the screenshot)
  const [draftSearchQuery, setDraftSearchQuery] = useState("");
  const [selectedDraftTab, setSelectedDraftTab] = useState<"Tất cả" | "Đang lấy ý kiến" | "Hết hạn góp ý">("Tất cả");
  const [selectedDraftForFeedback, setSelectedDraftForFeedback] = useState<DraftDocItem | null>(null);
  const [selectedDraftForComments, setSelectedDraftForComments] = useState<DraftDocItem | null>(null);
  const [expandedDraftComments, setExpandedDraftComments] = useState<Record<string, boolean>>({});
  const [feedbackName, setFeedbackName] = useState("");
  const [feedbackContact, setFeedbackContact] = useState("");
  const [feedbackContent, setFeedbackContent] = useState("");

  const [draftsList, setDraftsList] = useState<DraftDocItem[]>([
    {
      id: "1",
      title: "Dự thảo Quy định cụ thể mức thu học phí giáo dục công lập",
      status: "Đang lấy ý kiến",
      deadline: "30/07/2026",
      desc: "Đề xuất miễn giảm học phí cho học sinh vùng bãi ngang ven biển đặc biệt khó khăn kể từ khóa học mới.",
      commentsCount: 2
    },
    {
      id: "2",
      title: "Dự thảo Thiết kế đô thị kiến trúc cảnh quan biển Nha Trang",
      status: "Đang lấy ý kiến",
      deadline: "25/07/2026",
      desc: "Trưng bày trực quan mô hình bến tàu du lịch quốc tế, phố đi bộ kết hợp mua sắm đêm ven biển.",
      commentsCount: 1
    },
    {
      id: "3",
      title: "Dự thảo Quy hoạch chi tiết phân khu giải trí đảo Hòn Tre",
      status: "Đang lấy ý kiến",
      deadline: "15/07/2026",
      desc: "Mở rộng hệ thống cáp treo, xây dựng khu bảo tồn rạn san hô nhân tạo sinh thái kết hợp nghỉ dưỡng sinh thái cao cấp.",
      commentsCount: 1
    },
    {
      id: "4",
      title: "Dự thảo Đề án phát triển trường THPT Chuyên Lê Quý Đôn",
      status: "Hết hạn góp ý",
      deadline: "08/05/2026",
      desc: "Mở rộng cơ sở vật chất phòng thí nghiệm tế bào gốc và tuyển chọn giảng viên cốt cán nước ngoài.",
      commentsCount: 1
    },
    {
      id: "5",
      title: "Dự thảo phát triển tuyến phố đi bộ kết hợp ẩm thực đêm",
      status: "Hết hạn góp ý",
      deadline: "04/05/2026",
      desc: "Quy định giờ thử nghiệm, phương án dọn dẹp vệ sinh môi trường trước 5h sáng tại các trục du lịch.",
      commentsCount: 1
    },
    {
      id: "6",
      title: "Dự thảo Quy định mới về hạn mức đất giao cho hộ gia đình",
      status: "Đang lấy ý kiến",
      deadline: "12/07/2026",
      desc: "Quy chuẩn diện tích đất ở nông thôn tối đa khi tách thửa nhằm hạn chế tình trạng thu gom đất đầu cơ bất hợp pháp.",
      commentsCount: 0
    }
  ]);

  const [commentsDb, setCommentsDb] = useState<Record<string, { sender: string; content: string; date: string }[]>>([
    {
      "1": [
        { sender: "Trần Hữu Minh", content: "Tôi hoàn toàn ủng hộ đề xuất miễn giảm học phí cho học sinh vùng bãi ngang ven biển. Việc này giúp giảm bớt gánh nặng kinh tế rất nhiều cho bà con.", date: "24/05/2026" },
        { sender: "Lê Thị Thu", content: "Đề nghị xem xét mở rộng thêm đối tượng áp dụng cho các hộ nghèo cận nghèo tại các xã đảo lân cận.", date: "25/05/2026" }
      ],
      "2": [
        { sender: "KTS. Nguyễn Văn Hùng", content: "Thiết kế cảnh quan biển cần lưu ý mật độ cây xanh và khoảng lùi xây dựng để giữ tầm nhìn khoáng đạt từ phía đường Trần Phú ra biển.", date: "23/05/2026" }
      ],
      "3": [
        { sender: "Lâm Hải Đăng", content: "Phát triển rạn san hô nhân tạo là giải pháp bảo tồn rất bền vững, vừa kết hợp du lịch vừa giáo dục bảo vệ môi trường.", date: "20/05/2026" }
      ],
      "4": [
        { sender: "Phạm Minh Đức", content: "Mở rộng quy mô chuyên Lê Quý Đôn là hướng đi đúng đắn để đào tạo nguồn nhân lực chất lượng cao cho tỉnh nhà.", date: "07/05/2026" }
      ],
      "5": [
        { sender: "Bùi Quốc Toản", content: "Cần quản lý chặt chẽ vấn đề xả rác và tiếng ồn tại khu phố đi bộ đêm để không ảnh hưởng đời sống cư dân xung quanh.", date: "02/05/2026" }
      ],
      "6": []
    }
  ][0]);





  const handleSendOpinion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsgId = `u-${Date.now()}`;
    const userText = inputText.trim();
    
    // Add User Message
    setMessages(prev => [
      ...prev,
      {
        id: userMsgId,
        sender: "BẠN",
        text: userText,
        time: "Vừa xong",
        isSystem: false
      }
    ]);
    setInputText("");

    showToast("Gửi ý kiến đóng góp thành công! Ban biên tập sẽ phản hồi sớm.");

    // Automatic chatbot / system reply
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          id: `sys-reply-${Date.now()}`,
          sender: "CỔNG THÔNG TIN",
          text: `Cảm ơn ý kiến đóng góp quý báu của bạn về dự thảo quy hoạch. Ý kiến đã được chuyển trực tiếp đến bộ phận thụ lý Sở Xây dựng để tổng hợp và phản hồi chính thức trước ngày 15 của tháng kế tiếp.`,
          time: "Vừa xong",
          isSystem: true
        }
      ]);
    }, 1500);
  };



  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const handleRedirectSystem = (title: string) => {
    showToast(`Đang chuyển hướng tới hệ thống dữ liệu: ${title}...`);
  };

  // Comprehensive array of documents including 2025-2024 historical files
  const allDocuments: DocItem[] = [
    ...LOCAL_DOC_DATA["Văn bản mới cập nhật"].map(d => ({ ...d, category: "Văn bản mới cập nhật" })),
    ...LOCAL_DOC_DATA["Công báo Khánh Hòa"].map(d => ({ ...d, category: "Công báo Khánh Hòa" })),
    ...LOCAL_DOC_DATA["Thông báo chính thức"].map(d => ({ ...d, category: "Thông báo chính thức" })),
  ];

  // Dynamic filter logic
  const filteredDocuments = allDocuments.filter(doc => {
    // 1. Text Search (Số ký hiệu or Trích yếu)
    if (docSearchQuery.trim()) {
      const q = docSearchQuery.toLowerCase().trim();
      const match = doc.title.toLowerCase().includes(q) || doc.id.toLowerCase().includes(q);
      if (!match) return false;
    }
    // 2. Date Range filter
    if (docFromDate || docToDate) {
      // Basic string comparison for DD/MM/YYYY dates
      const parseDate = (d: string) => {
        const [day, month, year] = d.split("/").map(Number);
        return new Date(year, month - 1, day).getTime();
      };
      const docTime = parseDate(doc.date);
      
      if (docFromDate) {
        const fromTime = new Date(docFromDate).getTime();
        if (docTime < fromTime) return false;
      }
      if (docToDate) {
        const toTime = new Date(docToDate).getTime();
        if (docTime > toTime) return false;
      }
    }
    // 3. Document Type
    if (docSearchType !== "Tất cả") {
      if (doc.type !== docSearchType) return false;
    }
    // 4. Field
    if (docSearchField !== "Tất cả") {
      if (doc.field !== docSearchField) return false;
    }
    // 5. Level
    if (docSearchLevel !== "Tất cả") {
      if (doc.level !== docSearchLevel) return false;
    }
    // 6. Agency
    if (docSearchAgency !== "Tất cả") {
      if (doc.agency !== docSearchAgency) return false;
    }

    // Default: restrict to selected tab category when no filter active
    const isFilterActive = docSearchQuery.trim() !== "" || docFromDate !== "" || docToDate !== "" || docSearchType !== "Tất cả" || docSearchField !== "Tất cả" || docSearchLevel !== "Tất cả" || docSearchAgency !== "Tất cả";
    if (!isFilterActive) {
      return doc.category === selectedCategory;
    }
    return true;
  });

  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredDocuments.length / itemsPerPage) || 1;
  const paginatedDocuments = filteredDocuments.slice(
    (docCurrentPage - 1) * itemsPerPage,
    docCurrentPage * itemsPerPage
  );

  const handleDraftSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!draftName.trim() || !draftContact.trim() || !draftContent.trim()) {
      showToast("Vui lòng điền đầy đủ thông tin yêu cầu.");
      return;
    }
    showToast(`Cảm ơn cử tri ${draftName}! Ý kiến đóng góp về "${draftDocSelected}" đã được gửi thành công đến Ban Kiểm Soát.`);
    setDraftName("");
    setDraftContact("");
    setDraftContent("");
  };

  return (
    <div className="w-full text-slate-800 text-xl relative select-none">
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -20, x: "-50%" }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-blue-600 border border-blue-500 text-white font-bold text-xl py-4 px-8 rounded-2xl shadow-2xl flex items-center gap-2.5 backdrop-blur"
          >
            <CheckCircle size={22} />
            <span>{toast}</span>
          </motion.div>
        )}
      </AnimatePresence>

        <div className="w-full text-left">
          {/* Left Card: Synchronized document database with table view - Now full-width for a spacious and premium experience */}
          <div className="w-full bg-white border border-slate-200 p-6 md:p-8 rounded-[32px] text-slate-800 hover:shadow-xl hover:border-blue-600/30 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between shadow-sm min-h-[650px] mb-8 text-left">
            {/* Background deco */}
            <div className="absolute right-0 bottom-0 text-slate-100 opacity-20 -mb-20 -mr-20 pointer-events-none select-none">
              <FileText size={350} />
            </div>

            <div className="flex flex-col gap-6 relative z-10 w-full h-full justify-between">
              {/* Header section with vertical blue accent & beautiful icon block - now inside the card container */}
              <div id="legal-doc-db-header" className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200/60 pb-5 pt-2 text-left">
                <div className="flex items-center gap-3.5 text-left">
                  {/* Circle icon representing legal/QPPL documents with dynamic blue gradient */}
                  <div className="w-12 h-12 bg-[#1E3A8A] text-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                    <Scale size={22} className="stroke-[1.8]" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center">
                      <h2 className="text-2xl md:text-3xl font-black text-[#1E3A8A] uppercase tracking-tight leading-none text-left font-heading">
                        HỆ THỐNG VĂN BẢN QPPL
                      </h2>
                    </div>
                    <p className="text-lg text-slate-900 font-extrabold uppercase tracking-wider mt-1.5 pl-0.5">
                      Cơ sở dữ liệu văn bản quy phạm pháp luật và chỉ đạo điều hành chính thức
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3 text-left">
                  <div className="text-left">
                    <h4 className="text-xl md:text-2xl font-black leading-tight text-left text-[#1E3A8A]">
                      Văn bản chỉ đạo điều hành của tỉnh
                    </h4>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-2">
                  {[
                    "Văn bản mới cập nhật",
                    "Công báo Khánh Hòa",
                    "Thông báo chính thức"
                  ].map((categoryLabel) => {
                    const isSelected = selectedCategory === categoryLabel;
                    const isFilterActive = docSearchQuery.trim() !== "" || docSearchYear !== "Tất cả" || docSearchType !== "Tất cả" || docSearchAgency !== "Tất cả" || docSearchField !== "Tất cả";
                    return (
                      <button
                        key={categoryLabel}
                        onClick={() => {
                          setSelectedCategory(categoryLabel);
                          // Clear search query to show clicked category cleanly
                          setDocSearchQuery("");
                          setDocFromDate("");
                          setDocToDate("");
                          setDocSearchType("Tất cả");
                          setDocSearchField("Tất cả");
                          setDocSearchLevel("Tất cả");
                          setDocSearchAgency("Tất cả");
                        }}
                        className={`px-4 py-2 rounded-xl text-lg font-bold transition-all duration-300 ${
                          isSelected && !isFilterActive
                            ? 'bg-[#1E3A8A] text-white shadow-md' 
                            : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {categoryLabel}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Detailed Document Search and Advanced Filters Panel */}
              <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm flex flex-col gap-5 text-left mb-6 border border-slate-100">
                {/* Row 1: Search and Date Range */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Search Section */}
                  <div className="flex flex-col gap-2">
                    <label className="text-slate-800 font-bold text-[17px]">Tìm kiếm</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Nhập số ký hiệu văn bản, trích yếu"
                        value={docSearchQuery}
                        onChange={(e) => setDocSearchQuery(e.target.value)}
                        className="w-full pl-4 pr-10 py-2.5 bg-white border border-slate-200 rounded text-lg text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      />
                      <Search size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    </div>
                  </div>

                  {/* Date Range Section */}
                  <div className="flex flex-col gap-2">
                    <label className="text-slate-800 font-bold text-[17px]">Ngày ban hành</label>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative">
                        <input
                          type={docFromDate ? "date" : "text"}
                          onFocus={(e) => (e.target.type = "date")}
                          onBlur={(e) => !docFromDate && (e.target.type = "text")}
                          placeholder="Từ ngày"
                          value={docFromDate}
                          onChange={(e) => setDocFromDate(e.target.value)}
                          className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded text-lg text-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all cursor-pointer"
                        />
                        <Calendar size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      </div>
                      <div className="relative">
                        <input
                          type={docToDate ? "date" : "text"}
                          onFocus={(e) => (e.target.type = "date")}
                          onBlur={(e) => !docToDate && (e.target.type = "text")}
                          placeholder="Đến ngày"
                          value={docToDate}
                          onChange={(e) => setDocToDate(e.target.value)}
                          className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded text-lg text-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all cursor-pointer"
                        />
                        <Calendar size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 2: Select Filters */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Hình thức văn bản */}
                  <div className="flex flex-col gap-2">
                    <label className="text-slate-800 font-bold text-[17px]">Hình thức văn bản</label>
                    <select
                      value={docSearchType}
                      onChange={(e) => setDocSearchType(e.target.value)}
                      className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded text-lg text-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22%2394a3b8%22%20stroke-width%3D%222%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22M19%209l-7%207-7-7%22%20%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem_1.25rem] bg-[right_0.5rem_center] bg-no-repeat pr-10"
                    >
                      <option value="Tất cả">Chọn hình thức văn bản</option>
                      <option value="Phương án">Phương án</option>
                      <option value="Đề án">Đề án</option>
                      <option value="Chương trình">Chương trình</option>
                      <option value="Quyết định">Quyết định</option>
                      <option value="Báo cáo">Báo cáo</option>
                      <option value="Chỉ thị">Chỉ thị</option>
                      <option value="Công văn">Công văn</option>
                      <option value="Công điện">Công điện</option>
                      <option value="Kế hoạch">Kế hoạch</option>
                      <option value="Nghị định">Nghị định</option>
                      <option value="Thông báo">Thông báo</option>
                      <option value="Thông tư">Thông tư</option>
                      <option value="Văn bản">Văn bản</option>
                      <option value="Nghị quyết">Nghị quyết</option>
                    </select>
                  </div>

                  {/* Lĩnh vực */}
                  <div className="flex flex-col gap-2">
                    <label className="text-slate-800 font-bold text-[17px]">Lĩnh vực</label>
                    <select
                      value={docSearchField}
                      onChange={(e) => setDocSearchField(e.target.value)}
                      className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded text-lg text-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22%2394a3b8%22%20stroke-width%3D%222%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22M19%209l-7%207-7-7%22%20%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem_1.25rem] bg-[right_0.5rem_center] bg-no-repeat pr-10"
                    >
                      <option value="Tất cả">Chọn lĩnh vực</option>
                      <option value="Chính sách">Chính sách</option>
                      <option value="Xuất - Nhập khẩu">Xuất - Nhập khẩu</option>
                      <option value="Nông nghiệp">Nông nghiệp</option>
                      <option value="Giáo dục - Đào tạo">Giáo dục - Đào tạo</option>
                      <option value="Doanh nghiệp">Doanh nghiệp</option>
                      <option value="Hành chính">Hành chính</option>
                      <option value="Đầu tư">Đầu tư</option>
                      <option value="Tài nguyên">Tài nguyên</option>
                      <option value="Môi trường">Môi trường</option>
                      <option value="Công nghiệp">Công nghiệp</option>
                      <option value="Chính trị">Chính trị</option>
                      <option value="Văn hóa">Văn hóa</option>
                      <option value="Xã hội">Xã hội</option>
                      <option value="Thể thao">Thể thao</option>
                      <option value="Tài chính">Tài chính</option>
                      <option value="Du lịch">Du lịch</option>
                      <option value="Y tế">Y tế</option>
                      <option value="Giao thông">Giao thông</option>
                      <option value="Khoa học - Công nghệ">Khoa học - Công nghệ</option>
                      <option value="Kinh tế">Kinh tế</option>
                      <option value="Xây dựng">Xây dựng</option>
                      <option value="Công nghệ thông tin">Công nghệ thông tin</option>
                      <option value="An ninh trật tự">An ninh trật tự</option>
                      <option value="Lao động - Tiền lương">Lao động - Tiền lương</option>
                      <option value="Đất đai - Nhà ở">Đất đai - Nhà ở</option>
                    </select>
                  </div>

                  {/* Cấp ban hành */}
                  <div className="flex flex-col gap-2">
                    <label className="text-slate-800 font-bold text-[17px]">Cấp ban hành</label>
                    <select
                      value={docSearchLevel}
                      onChange={(e) => setDocSearchLevel(e.target.value)}
                      className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded text-lg text-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22%2394a3b8%22%20stroke-width%3D%222%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22M19%209l-7%207-7-7%22%20%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem_1.25rem] bg-[right_0.5rem_center] bg-no-repeat pr-10"
                    >
                      <option value="Tất cả">Chọn cấp ban hành</option>
                      <option value="Cấp Tỉnh">Cấp Tỉnh</option>
                      <option value="Cấp Sở">Cấp Sở</option>
                      <option value="Cấp Huyện">Cấp Huyện</option>
                    </select>
                  </div>

                  {/* Cơ quan ban hành */}
                  <div className="flex flex-col gap-2">
                    <label className="text-slate-800 font-bold text-[17px]">Cơ quan ban hành</label>
                    <select
                      value={docSearchAgency}
                      onChange={(e) => setDocSearchAgency(e.target.value)}
                      className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded text-lg text-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22%2394a3b8%22%20stroke-width%3D%222%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22M19%209l-7%207-7-7%22%20%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem_1.25rem] bg-[right_0.5rem_center] bg-no-repeat pr-10"
                    >
                      <option value="Tất cả">Chọn cơ quan ban hành</option>
                      <option value="UBND Tỉnh">UBND Tỉnh</option>
                      <option value="Sở Xây dựng">Sở Xây dựng</option>
                      <option value="Sở Tài nguyên và Môi trường">Sở Tài nguyên và Môi trường</option>
                      <option value="Sở Tài chính">Sở Tài chính</option>
                      <option value="Sở Nội vụ">Sở Nội vụ</option>
                    </select>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end gap-3 mt-2">
                  <button
                    onClick={() => {
                      showToast(`Đang tìm kiếm văn bản...`);
                    }}
                    className="px-8 py-2.5 bg-[#27AE60] hover:bg-[#219150] text-white font-bold rounded text-lg flex items-center gap-2 shadow-sm transition-all"
                  >
                    <Search size={18} />
                    <span>Tìm kiếm</span>
                  </button>

                  <button
                    onClick={() => {
                      setDocSearchQuery("");
                      setDocFromDate("");
                      setDocToDate("");
                      setDocSearchType("Tất cả");
                      setDocSearchField("Tất cả");
                      setDocSearchLevel("Tất cả");
                      setDocSearchAgency("Tất cả");
                      showToast("Đã xóa tất cả điều kiện lọc.");
                    }}
                    className="px-8 py-2.5 bg-[#27AE60] hover:bg-[#219150] text-white font-bold rounded text-lg flex items-center gap-2 shadow-sm transition-all"
                  >
                    <span>Xóa điều kiện</span>
                  </button>
                </div>
              </div>
              
              <div className="flex-1 flex flex-col text-left justify-start mt-2">
                <div className="w-full overflow-x-auto border border-slate-200/80 rounded-2xl shadow-sm bg-white min-h-[700px] max-h-[850px] overflow-y-auto scrollbar-thin">
                  <table className="w-full text-left border-collapse min-w-[700px]">
                    <thead className="sticky top-0 z-10 bg-[#1E3A8A]">
                      <tr className="text-white font-black text-lg">
                        <th className="py-4 px-4 font-black w-[18%] text-center text-[18px] border border-slate-300/30">
                          Số ký hiệu văn bản
                        </th>
                        <th className="py-4 px-4 font-black w-[52%] text-center text-[18px] border border-slate-300/30">
                          Trích yếu
                        </th>
                        <th className="py-4 px-4 font-black w-[15%] text-center text-[18px] border border-slate-300/30">
                          Ngày ban hành
                        </th>
                        <th className="py-4 px-4 font-black w-[15%] text-center text-[18px] border border-slate-300/30">
                          Hình thức văn bản
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {filteredDocuments.length === 0 ? (
                        <tr>
                          <td colSpan={4} className="py-12 text-center text-slate-400 font-bold text-xl">
                            Không tìm thấy văn bản phù hợp với bộ lọc tìm kiếm.
                          </td>
                        </tr>
                      ) : (
                        paginatedDocuments.map((doc, dIdx) => {
                          const displayId = doc.id;
                          return (
                            <tr 
                              key={dIdx} 
                              className="hover:bg-slate-50 transition-colors duration-150 cursor-pointer group/row"
                            >
                              <td 
                                className="py-4 px-4 align-middle border border-slate-200 text-center font-semibold text-slate-700 text-[17px] group-hover/row:text-[#1E3A8A] transition-colors"
                                onClick={() => showToast(`Đang mở xem chi tiết văn bản: ${displayId}`)}
                              >
                                {displayId}
                              </td>
                              <td className="py-4 px-4 text-[17px] text-slate-700 font-medium leading-relaxed align-middle border border-slate-200 group-hover/row:text-[#1E3A8A] transition-colors">
                                {doc.title}
                              </td>
                              <td className="py-4 px-4 text-[17px] text-slate-700 font-medium text-center align-middle border border-slate-200 group-hover/row:text-[#1E3A8A] transition-colors">
                                {doc.date}
                              </td>
                              <td className="py-4 px-4 text-[17px] text-slate-700 font-medium align-middle border border-slate-200 group-hover/row:text-[#1E3A8A] transition-colors">
                                {doc.type}
                              </td>

                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Pagination controls replacing the redirect button */}
              <div className="pt-6 pb-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 mt-4">
                <span className="text-slate-500 font-bold text-lg">
                  Hiển thị <span className="text-[#1E3A8A]">{Math.min((docCurrentPage - 1) * itemsPerPage + 1, filteredDocuments.length)}</span> - <span className="text-[#1E3A8A]">{Math.min(docCurrentPage * itemsPerPage, filteredDocuments.length)}</span> trong tổng số <span className="text-[#1E3A8A] font-extrabold">{filteredDocuments.length}</span> văn bản
                </span>

                <div className="flex items-center gap-1.5">
                  {/* Previous button */}
                  <button
                    onClick={() => setDocCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={docCurrentPage === 1}
                    className="px-3 py-2 border border-slate-200 rounded-xl font-bold text-base text-slate-600 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <ChevronLeft size={16} />
                    <span>Trước</span>
                  </button>

                  {/* Page Numbers */}
                  {Array.from({ length: totalPages }).map((_, idx) => {
                    const pageNum = idx + 1;
                    const isActive = docCurrentPage === pageNum;
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setDocCurrentPage(pageNum)}
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
                    onClick={() => setDocCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={docCurrentPage === totalPages}
                    className="px-3 py-2 border border-slate-200 rounded-xl font-bold text-base text-slate-600 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <span>Sau</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Consultation and Information Grid matching screenshot */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:items-stretch items-start w-full mt-6 text-left">
            {/* LEFT COLUMN: Lấy ý kiến dự thảo văn bản quy phạm pháp luật (Colspan 2 equivalent to 8/12) */}
            <div className="lg:col-span-2 flex flex-col h-full">
              <div className="bg-white border border-slate-200/80 rounded-[32px] p-6 md:p-8 pb-4 md:pb-5 hover:shadow-xl hover:border-[#1E3A8A]/30 hover:-translate-y-1 flex flex-col justify-between transition-all duration-300 flex-1 h-full">
                <div className="flex flex-col h-full flex-1 justify-between">
                  <div className="flex flex-col h-full flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                      <h4 className="text-2xl font-black leading-tight text-left text-[#1E3A8A]">
                        Lấy ý kiến dự thảo văn bản quy phạm pháp luật
                      </h4>
                    </div>
                    
                    <p className="text-slate-900 text-lg md:text-lg font-medium mb-4">
                      Hệ thống tham vấn, tiếp thu và giải trình ý kiến đóng góp của người dân, tổ chức đối với các dự thảo văn bản quy phạm pháp luật tỉnh Khánh Hòa soạn thảo.
                    </p>

                    {/* Thanh lọc trạng thái dự thảo */}
                    <div className="flex flex-wrap gap-2 mb-4 justify-start">
                      <button
                        onClick={() => setSelectedDraftTab("Tất cả")}
                        className={`px-4 py-2 rounded-xl text-lg font-black transition-all ${
                          selectedDraftTab === "Tất cả"
                            ? "bg-[#1E3A8A] text-white shadow-md shadow-blue-900/10"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        📁 Tất cả dự thảo ({draftsList.length})
                      </button>
                      <button
                        onClick={() => setSelectedDraftTab("Đang lấy ý kiến")}
                        className={`px-4 py-2 rounded-xl text-lg font-black transition-all flex items-center gap-1.5 ${
                          selectedDraftTab === "Đang lấy ý kiến"
                            ? "bg-emerald-600 text-white shadow-md shadow-emerald-950/10"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <CheckCircle2 size={16} /> Đang lấy ý kiến ({draftsList.filter(d => d.status === "Đang lấy ý kiến").length})
                      </button>
                      <button
                        onClick={() => setSelectedDraftTab("Hết hạn góp ý")}
                        className={`px-4 py-2 rounded-xl text-lg font-black transition-all flex items-center gap-1.5 ${
                          selectedDraftTab === "Hết hạn góp ý"
                            ? "bg-amber-600 text-white shadow-md shadow-amber-950/10"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        ⏳ Dự thảo hết hạn góp ý ({draftsList.filter(d => d.status === "Hết hạn góp ý").length})
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
                        const filtered = draftsList.filter(draft => {
                          const query = draftSearchQuery.toLowerCase().trim();
                          const matchesSearch = draft.title.toLowerCase().includes(query) || draft.desc.toLowerCase().includes(query);
                          if (selectedDraftTab === "Tất cả") return matchesSearch;
                          return draft.status === selectedDraftTab && matchesSearch;
                        });

                        const handleDownloadDraft = (draft: any) => {
                          showToast(`Đang kết nối để tải xuống tài liệu dự thảo...`);
                          const textContent = `DỰ THẢO VĂN BẢN QUY PHẠM PHÁP LUẬT TỈNH KHÁNH HÒA\n\nKý hiệu tham khảo: ${draft.id}\nHạn đóng góp ý kiến: ${draft.deadline}\n\nTiêu đề:\n${draft.title}\n\nNội dung chi tiết dự thảo sơ thảo:\n${draft.desc}\n\n---\nCổng thông tin tiếp nhận ý kiến đóng góp trực tuyến tỉnh Khánh Hòa.\nCảm ơn bạn đã đồng hành đóng góp ý kiến xây dựng pháp luật địa phương!`;
                          const blob = new Blob([textContent], { type: "text/plain;charset=utf-8" });
                          const url = URL.createObjectURL(blob);
                          const element = document.createElement("a");
                          element.href = url;
                          element.download = `Du_thao_Luat_${draft.id.replace(/\//g, "_")}.txt`;
                          document.body.appendChild(element);
                          element.click();
                          document.body.removeChild(element);
                          URL.revokeObjectURL(url);
                          showToast(`Đã tải xuống file dự thảo ${draft.id} thành công!`);
                        };
                        
                        if (filtered.length > 0) {
                          return filtered.map((draft) => {
                            const comments = commentsDb[draft.id] || [];
                            const commentsExpanded = !!expandedDraftComments[draft.id];
                            const expired = draft.status === "Hết hạn góp ý";

                            return (
                              <div 
                                key={draft.id} 
                                className="bg-white border border-slate-100 rounded-2xl p-3.5 md:p-4 shadow-sm hover:shadow-md hover:border-[#1E3A8A]/30 transition-all duration-300"
                              >
                                <div className="flex items-center justify-between gap-2 mb-2">
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
                                    Hạn góp ý: {draft.deadline}
                                  </span>
                                </div>
                                
                                <h4 className="text-lg md:text-lg font-black text-slate-800 hover:text-[#1E3A8A] transition-colors leading-snug mb-1.5 text-left">
                                  {draft.title}
                                </h4>
                                
                                <p className="text-lg text-black font-normal mb-3 text-left leading-relaxed">
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
                                          ? "bg-blue-50 text-blue-700 border-blue-200"
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
                                    onClick={() => {
                                      if (expired) {
                                        showToast("Hệ thống đã dừng tiếp nhận ý kiến đóng góp cho dự thảo này do quá hạn quy định.");
                                      } else {
                                        setSelectedDraftForFeedback(draft);
                                        setFeedbackName("");
                                        setFeedbackContact("");
                                        setFeedbackContent("");
                                      }
                                    }}
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
                                              <span className="text-lg font-black text-slate-700">{comment.sender}</span>
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

            {/* RIGHT COLUMN: 9 sidebar banners with beautiful photo backgrounds exactly matching the Home Page */}
            <div className="flex flex-col gap-4 lg:gap-5 w-full h-full justify-between">
              {/* Banner Quảng cáo 1: Phổ biến Giáo dục Pháp luật */}
              <motion.div
                whileHover={{ scale: 1.02, y: -3 }}
                onClick={() => showToast("Đang mở Cổng thông tin tuyên truyền Phổ biến Giáo dục Pháp luật...")}
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
                onClick={() => showToast("Đang mở Trợ lý AI pháp luật - Cổng Pháp luật Quốc gia...")}
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
                onClick={() => showToast("Đang kết nối Cổng thông tin dự án Điện hạt nhân Ninh Thuận...")}
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
                onClick={() => showToast("Đang kết nối hệ thống Bản đồ số 65 xã, phường, đặc khu...")}
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
                onClick={() => showToast("Đang kết nối hệ thống Tra cứu giá đất trực tuyến...")}
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
                onClick={() => showToast("Đang kết nối Cổng công khai ngân sách nhà nước...")}
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
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0 backdrop-blur-md group-hover:bg-white group-hover:text-blue-950 transition-all self-center">
                        <ChevronRight size={20} />
                      </div>
                </div>
              </motion.div>

              {/* Banner 7: Cổng Dịch vụ công trực tuyến */}
              <motion.div
                whileHover={{ scale: 1.02, y: -3 }}
                onClick={() => showToast("Đang kết nối Cổng Dịch vụ công trực tuyến...")}
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
                onClick={() => showToast("Đang kết nối Cổng thông tin xúc tiến Du lịch Nha Trang - Khánh Hòa...")}
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
                  showToast("Đang kết nối đến cổng Cơ sở dữ liệu văn bản quy phạm pháp luật Quốc gia...");
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

      {/* MODAL 1: GÓP Ý DỰ THẢO */}
      <AnimatePresence>
        {selectedDraftForFeedback && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDraftForFeedback(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-[24px] border border-slate-200 shadow-2xl p-6 md:p-8 max-w-2xl w-full relative z-10 font-sans text-left text-slate-800"
            >
              <button
                onClick={() => setSelectedDraftForFeedback(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center cursor-pointer border-0"
              >
                <X size={16} />
              </button>

              <div className="flex items-center gap-2.5 mb-5 border-b border-slate-100 pb-3">
                <Send className="text-[#1E3A8A] w-6 h-6 shrink-0" />
                <h3 className="text-xl md:text-2xl font-black text-[#1E3A8A] uppercase tracking-wide">
                  Góp ý dự thảo trực tuyến
                </h3>
              </div>

              <div className="mb-6 bg-slate-50 p-4 rounded-xl border border-slate-100 text-left">
                <span className="text-lg font-bold text-blue-600 uppercase tracking-wider block mb-1">
                  Đang góp ý cho văn bản:
                </span>
                <p className="text-xl font-bold text-slate-800 leading-snug">
                  {selectedDraftForFeedback.title}
                </p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!feedbackName.trim() || !feedbackContact.trim() || !feedbackContent.trim()) {
                    showToast("Vui lòng điền đầy đủ các thông tin bắt buộc!");
                    return;
                  }
                  
                  // Dynamically prepend new comment
                  const newComment = {
                    sender: feedbackName.trim(),
                    content: feedbackContent.trim(),
                    date: "Vừa xong"
                  };
                  
                  setCommentsDb(prev => ({
                    ...prev,
                    [selectedDraftForFeedback.id]: [newComment, ...(prev[selectedDraftForFeedback.id] || [])]
                  }));

                  // Update comment count on local state draft item
                  setDraftsList(prev => prev.map(d => {
                    if (d.id === selectedDraftForFeedback.id) {
                      return { ...d, commentsCount: d.commentsCount + 1 };
                    }
                    return d;
                  }));

                  showToast(`Ý kiến đóng góp của bạn về "${selectedDraftForFeedback.title}" đã được gửi và ghi nhận thành công!`);
                  setSelectedDraftForFeedback(null);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-lg font-bold text-slate-700 mb-1">
                    Họ và tên cử tri / đại diện tổ chức <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nhập họ và tên..."
                    value={feedbackName}
                    onChange={(e) => setFeedbackName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl py-3 px-4 text-xl font-bold text-slate-700 placeholder-slate-400 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-lg font-bold text-slate-700 mb-1">
                    Số điện thoại / Email liên hệ <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nhập số điện thoại hoặc email liên hệ..."
                    value={feedbackContact}
                    onChange={(e) => setFeedbackContact(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl py-3 px-4 text-xl font-bold text-slate-700 placeholder-slate-400 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-lg font-bold text-slate-700 mb-1">
                    Nội dung ý kiến đóng góp chi tiết <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Mô tả chi tiết ý kiến, bổ sung điều khoản hoặc kiến nghị sửa đổi quy hoạch dự thảo..."
                    value={feedbackContent}
                    onChange={(e) => setFeedbackContent(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl py-3 px-4 text-xl font-semibold text-slate-700 placeholder-slate-400 focus:outline-none transition-all resize-none"
                  />
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedDraftForFeedback(null)}
                    className="flex-1 py-3 border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-xl font-bold text-xl transition-all cursor-pointer bg-transparent"
                  >
                    Hủy bỏ
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-[#1E3A8A] hover:bg-blue-700 text-white rounded-xl font-black text-xl shadow-lg shadow-blue-900/10 transition-all cursor-pointer border-0"
                  >
                    Gửi ý kiến đóng góp
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MODAL 2: XEM GÓP Ý */}
      <AnimatePresence>
        {selectedDraftForComments && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDraftForComments(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-[24px] border border-slate-200 shadow-2xl p-6 md:p-8 max-w-2xl w-full relative z-10 font-sans text-left text-slate-800 flex flex-col max-h-[85vh]"
            >
              <button
                onClick={() => setSelectedDraftForComments(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center cursor-pointer border-0"
              >
                <X size={16} />
              </button>

              <div className="flex items-center gap-2.5 mb-4 border-b border-slate-100 pb-3 shrink-0">
                <MessageSquare className="text-blue-600 w-6 h-6 shrink-0" />
                <h3 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-wide">
                  Ý kiến đóng góp đã nhận ({commentsDb[selectedDraftForComments.id]?.length || 0})
                </h3>
              </div>

              <div className="mb-4 bg-slate-50 p-4 rounded-xl border border-slate-100 shrink-0 text-left">
                <span className="text-lg font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Đang xem góp ý của dự thảo:
                </span>
                <p className="text-xl font-bold text-[#1E3A8A] leading-snug">
                  {selectedDraftForComments.title}
                </p>
              </div>

              {/* Scrollable Comments List */}
              <div className="flex-1 overflow-y-auto space-y-3.5 pr-1.5 scrollbar-thin">
                {(() => {
                  const comments = commentsDb[selectedDraftForComments.id] || [];
                  if (comments.length === 0) {
                    return (
                      <div className="text-center py-10 bg-slate-50/50 rounded-xl border border-dashed border-slate-200/85">
                        <p className="text-xl text-slate-400 font-bold">Chưa có ý kiến đóng góp công khai nào cho dự thảo này.</p>
                        <p className="text-lg text-slate-400 mt-1">Hãy đóng góp ý kiến đầu tiên để giúp hoàn thiện chính sách của tỉnh!</p>
                      </div>
                    );
                  }

                  return comments.map((comm, cIdx) => (
                    <div key={cIdx} className="bg-slate-50/70 border border-slate-200/60 rounded-xl p-4 flex gap-3 text-left">
                      <div className="w-10 h-10 rounded-full bg-blue-100 text-[#1E3A8A] flex items-center justify-center font-black text-xl shrink-0">
                        {comm.sender.charAt(0).toUpperCase()}
                      </div>
                      <div className="flex-1 min-w-0 text-left">
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <h5 className="font-extrabold text-slate-800 text-lg leading-tight">
                            {comm.sender}
                          </h5>
                          <span className="text-lg text-slate-400 font-medium shrink-0">
                            📅 {comm.date}
                          </span>
                        </div>
                        <p className="text-base text-slate-600 font-semibold leading-relaxed text-left bg-white p-3 rounded-lg border border-slate-100/50 shadow-sm">
                          {comm.content}
                        </p>
                      </div>
                    </div>
                  ));
                })()}
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-3 shrink-0">
                <button
                  onClick={() => setSelectedDraftForComments(null)}
                  className="w-full py-3 bg-[#1E3A8A] hover:bg-blue-700 text-white rounded-xl font-black text-xl transition-colors cursor-pointer border-0"
                >
                  Đóng cửa sổ
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Dynamic QR Verification Modal */}
      <AnimatePresence>
        {selectedQrDoc && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
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
                    XÁC THỰC VĂN BẢN SỐ
                  </span>
                </div>
                <button
                  onClick={() => setSelectedQrDoc(null)}
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
                    <span className="text-[#1E3A8A] font-extrabold text-lg">{selectedQrDoc.id}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-base font-bold block uppercase tracking-wider">Trích yếu nội dung</span>
                    <span className="text-slate-700 font-bold text-lg leading-snug">{selectedQrDoc.title}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-slate-400 text-base font-bold block uppercase tracking-wider">Cơ quan ban hành</span>
                      <span className="text-slate-600 font-bold text-base">{selectedQrDoc.agency}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-base font-bold block uppercase tracking-wider">Ngày ban hành</span>
                      <span className="text-slate-600 font-bold text-base">{selectedQrDoc.date}</span>
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
                      showToast(`Đang in chứng chỉ xác thực điện tử cho văn bản: ${selectedQrDoc.id}`);
                      setSelectedQrDoc(null);
                    }}
                    className="flex-1 py-2.5 border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-xl font-bold text-base transition-all flex items-center justify-center gap-1.5 cursor-pointer bg-transparent"
                  >
                    <span>In chứng nhận</span>
                  </button>
                  <button
                    onClick={() => {
                      showToast(`Đang truy vấn nhật ký ký số Blockchain của văn bản ${selectedQrDoc.id}`);
                      setSelectedQrDoc(null);
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
    </div>
  );
}
