import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Building, 
  Search, 
  ChevronRight, 
  PieChart, 
  ShoppingCart, 
  FileText, 
  BarChart2, 
  ClipboardCheck, 
  Compass, 
  Landmark, 
  Scale, 
  Cpu, 
  Coins, 
  Trophy, 
  Award, 
  ShieldAlert, 
  Car, 
  Mic, 
  Phone, 
  Newspaper, 
  Shield, 
  HeartPulse, 
  TrendingUp, 
  Layers, 
  Map, 
  PhoneCall, 
  Send, 
  HelpCircle,
  X,
  CheckCircle,
  Clock,
  ExternalLink,
  Database,
  Megaphone,
  UserPlus,
  DollarSign,
  Percent,
  Gavel,
  ShieldCheck,
  Building2,
  MapPin,
  CalendarDays,
  Users,
  ZapOff,
  Tag,
  Globe,
  CloudSun
} from "lucide-react";

// Types for utility items
interface UtilityItem {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  iconColor: string;
  bgColor: string;
  category: number; // 1, 2, or 3
  detailTitle: string;
  detailContent: string;
}

export default function UtilitiesPortal({ showSidebar = true, theme = "blue" }: { showSidebar?: boolean; theme?: "blue" | "red" }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [qaInput, setQaInput] = useState("");
  
  // Custom interactive Q&A feed
  const [qaAnswers, setQaAnswers] = useState([
    {
      id: "qa-1",
      question: "Thời hạn cấp giấy chứng nhận nhận quyền sử dụng đất nông nghiệp là bao lâu?",
      answer: "Theo quy định, không quá 30 ngày kể từ ngày tiếp nhận đủ hồ sơ hợp lệ tại Văn phòng Đăng ký đất đai.",
      time: "Vừa xong",
      status: "Đã trả lời"
    },
    {
      id: "qa-2",
      question: "Thủ tục xin cấp phép cải tạo nâng cấp nhà ở riêng lẻ nội đô như thế nào?",
      answer: "Người dân nộp hồ sơ tại Bộ phận Một cửa UBND cấp Huyện kèm bản vẽ kỹ thuật chi tiết để được duyệt thụ lý trong thời hạn 15 ngày làm việc theo Điều 95 Luật Xây dựng.",
      time: "3 phút trước",
      status: "Đã trả lời"
    }
  ]);

  // Selected item modal state
  const [selectedItem, setSelectedItem] = useState<UtilityItem | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg(null);
    }, 4000);
  };

  const isRed = theme === "red";
  const primaryBg = isRed ? "bg-[#a50b12]" : "bg-[#1E3A8A]";
  const primaryBorder = isRed ? "border-red-400" : "border-blue-400";
  const primaryText = isRed ? "text-[#a50b12]" : "text-[#1E3A8A]";
  const focusBorder = isRed ? "focus:border-[#a50b12]" : "focus:border-[#1E3A8A]";
  
  // For individual item hover:
  const cardBgClass = isRed ? "bg-[#f4f7fa] hover:bg-[#fff5f5]" : "bg-[#f4f7fa] hover:bg-[#f0f4f8]";
  const cardBorderClass = isRed ? "border border-[#e2e8f0] hover:border-red-200" : "border border-[#e2e8f0] hover:border-blue-200";
  const cardTextClass = isRed ? "text-slate-700 group-hover/item:text-[#a50b12]" : "text-slate-700 group-hover/item:text-[#1E3A8A]";
  
  const iconBorderColor = isRed ? "border-2 border-[#a50b12]" : "border-2 border-[#1E3A8A]";
  const iconColor = isRed ? "text-[#a50b12]" : "text-[#1E3A8A]";
  const waveColor = isRed ? "text-[#a50b12]" : "text-[#1E3A8A]";

  // Sidebar colors:
  const sidebarBg = isRed ? "bg-[#5e0407]" : "bg-[#122c66]";
  const sidebarBadgeBg = isRed ? "bg-red-950/50" : "bg-[#1a4095]";
  const sidebarBadgeText = isRed ? "text-red-300" : "text-sky-400";
  const sidebarBtnBg = isRed ? "bg-[#a50b12] hover:bg-[#8f090f] border-red-500/30" : "bg-[#1E3A8A] hover:bg-[#1a347d] border-blue-500/20";

  const utilitiesList: UtilityItem[] = [
    // Column 1: THÔNG TIN CÔNG KHAI
    {
      id: "ck-1",
      title: "Công khai ngân sách",
      icon: DollarSign,
      iconColor: "text-blue-900",
      bgColor: "bg-white",
      category: 1,
      detailTitle: "Công khai quyết toán Ngân sách Nhà nước Tỉnh Khánh Hòa",
      detailContent: "Số liệu ngân sách của tỉnh Khánh Hòa được cập nhật và niêm yết rõ ràng theo Luật Ngân sách Nhà nước. Năm tài khóa mới tập trung phân bổ 45% nguồn lực cho đầu tư hạ tầng giao thông kết nối liên vùng, 25% cho giáo dục & y tế, và 15% cho mục tiêu chuyển đổi số, xây dựng hệ sinh thái đô thị biển thông minh vịnh Nha Trang."
    },
    {
      id: "ck-2",
      title: "Đấu thầu mua sắm công",
      icon: Coins,
      iconColor: "text-blue-900",
      bgColor: "bg-white",
      category: 1,
      detailTitle: "Hệ thống Đấu thầu và Mua sắm công trực tuyến",
      detailContent: "Quản lý minh bạch toàn bộ các gói thầu xây dựng công trình giao thông, nâng cấp bệnh viện tỉnh, và sắm sửa trang thiết bị trường học. Mọi hồ sơ mời thầu, danh sách nhà đầu tư vượt qua vòng kỹ thuật và giá thầu trúng cử đều được số hóa hoàn toàn, đảm bảo tính cạnh tranh lành mạnh và hạn chế lãng phí ngân sách công ích."
    },
    {
      id: "ck-3",
      title: "Thông tin dự án đầu tư",
      icon: TrendingUp,
      iconColor: "text-blue-900",
      bgColor: "bg-white",
      category: 1,
      detailTitle: "Công bố danh mục dự án FDI & Đầu tư trong nước trọng điểm",
      detailContent: "Cổng thông tin xúc tiến dự án trọng tâm tỉnh Khánh Hòa. Cập nhật tiến độ đền bù giải phóng mặt bằng, quy mô vốn và quyền sử dụng đất sạch đối với các tổ hợp logistics cảng biển nước sâu Bắc Vân Phong, siêu dự án nghỉ dưỡng đô thị sinh thái Cam Lâm và các dự án sản xuất công nghệ không khói tiêu chuẩn quốc tế."
    },
    {
      id: "ck-4",
      title: "Báo cáo kinh tế xã hội",
      icon: BarChart2,
      iconColor: "text-blue-900",
      bgColor: "bg-white",
      category: 1,
      detailTitle: "Chỉ số Báo cáo Kinh tế - Xã hội Định kỳ Hàng tháng",
      detailContent: "Khánh Hòa duy trì đà kinh tế phát triển vượt trội với GRDP tăng trưởng ấn tượng trong khu vực Nam Trung Bộ. Toàn bộ thông tin số liệu về lượng khách du lịch quốc tế, giá trị xuất khẩu thủy hải sản, công suất hạ tầng giao thông vận tải hàng không, cảng biển và tỷ lệ giải ngân vốn đầu tư công đều được tổng hợp trực quan."
    },
    {
      id: "ck-5",
      title: "Chương trình - Đề tài",
      icon: Award,
      iconColor: "text-blue-900",
      bgColor: "bg-white",
      category: 1,
      detailTitle: "Chương trình - Đề tài khoa học công nghệ tỉnh Khánh Hòa",
      detailContent: "Cổng công khai thông tin quản lý, đăng ký và nghiệm thu các đề tài nghiên cứu khoa học, chương trình đổi mới sáng tạo, phát triển công nghệ cấp tỉnh. Cung cấp dữ liệu chi tiết về kinh phí phân bổ, sản phẩm ứng dụng thực tế và danh sách các nhà khoa học, tổ chức chủ trì thực hiện nhằm tối ưu hóa tính thực tiễn."
    },
    {
      id: "ck-6",
      title: "Quy hoạch - Kế hoạch",
      icon: Map,
      iconColor: "text-blue-900",
      bgColor: "bg-white",
      category: 1,
      detailTitle: "Quy hoạch sử dụng đất và kế hoạch phát triển đô thị tỉnh Khánh Hòa",
      detailContent: "Công bố bản đồ số quy hoạch sử dụng đất giai đoạn 2021-2030, tầm nhìn đến năm 2050. Chi tiết các khu vực chuyển đổi mục đích sử dụng đất, hành lang bảo vệ bờ biển, quy hoạch chi tiết 1/500 các khu đô thị mới và trục đường giao thông huyết mạch của tỉnh nhằm đảm bảo tính minh bạch, ngăn ngừa đầu cơ trục lợi."
    },
    {
      id: "ck-7",
      title: "Kho bạc nhà nước",
      icon: Building,
      iconColor: "text-blue-900",
      bgColor: "bg-white",
      category: 1,
      detailTitle: "Báo cáo tình hình quản lý, thu chi ngân sách qua Kho bạc Nhà nước",
      detailContent: "Cung cấp số liệu công khai định kỳ về tổng thu ngân sách nhà nước trên địa bàn tỉnh, lũy kế giải ngân vốn đầu tư công thực tế của các ban quản lý dự án, và các khoản chi thường xuyên từ ngân sách. Giúp các cấp chính quyền và nhân dân dễ dàng kiểm tra, giám sát dòng tiền công ích một cách chuẩn xác, đúng luật định."
    },
    {
      id: "ck-8",
      title: "Giá thu tiền sử dụng đất",
      icon: DollarSign,
      iconColor: "text-blue-900",
      bgColor: "bg-white",
      category: 1,
      detailTitle: "Tra cứu bảng giá đất và nghĩa vụ tài chính tiền sử dụng đất mới nhất",
      detailContent: "Hệ thống cập nhật tự động bảng giá các loại đất phi nông nghiệp, đất ở đô thị và đất sản xuất kinh doanh do UBND Tỉnh ban hành áp dụng thực tế. Tích hợp công cụ tính toán sơ bộ nghĩa vụ thuế, lệ phí trước bạ và tiền sử dụng đất khi công dân thực hiện thủ tục cấp giấy chứng nhận hoặc chuyển đổi mục đích sử dụng đất."
    },
    {
      id: "ck-9",
      title: "Kết quả giải quyết TTHC",
      icon: ClipboardCheck,
      iconColor: "text-blue-900",
      bgColor: "bg-white",
      category: 1,
      detailTitle: "Thống kê kết quả tiếp nhận và giải quyết thủ tục hành chính công trực tuyến",
      detailContent: "Biểu đồ hóa tỷ lệ hồ sơ được giải quyết đúng hạn, quá hạn hoặc đang thụ lý tại các sở ngành, địa phương. Công khai kết quả đánh giá mức độ hài lòng của người dân khi thực hiện dịch vụ công trực tiếp tại Bộ phận Một cửa và qua môi trường điện tử trực tuyến, hướng đến nâng cao chất lượng phụng sự nhân dân."
    },

    // Column 2: THÔNG TIN TUYÊN TRUYỀN
    {
      id: "tt-1",
      title: "Phổ biến pháp luật",
      icon: Scale,
      iconColor: "text-blue-900",
      bgColor: "bg-white",
      category: 2,
      detailTitle: "Hội đồng Phổ biến, Giáo dục Pháp luật Tỉnh Khánh Hòa",
      detailContent: "Chiến dịch tuyên truyền sâu rộng các bộ luật cơ bản mới ban hành, bao gồm Luật Đất đai thế hệ mới năm 2024, Luật An toàn giao thông đường bộ, và Bộ luật Bảo vệ môi trường biển vịnh Nha Trang. Biên dịch và biên soạn sách cầm tay ngắn gọn, tờ phát thanh số phục vụ riêng cho các vùng đồng bào miền núi xa biên giới."
    },
    {
      id: "tt-2",
      title: "Cải cách hành chính - CĐS",
      icon: Cpu,
      iconColor: "text-blue-900",
      bgColor: "bg-white",
      category: 2,
      detailTitle: "Đẩy mạnh Chuyển dịch Số và Một Cửa Liên Thông Hiện Đại",
      detailContent: "Hướng dẫn đăng ký định danh điện tử VNeID mức độ 2, làm quen sử dụng dịch vụ nộp hồ sơ công trực tuyến qua Cổng Hành chính công Một cửa tỉnh. Áp dụng 100% việc cấp bản sao điện tử chứng thực từ bản chính giúp công dân không tốn công in ấn, photocopy, tiết kiệm ngân quỹ cá nhân đáng kể."
    },
    {
      id: "tt-3",
      title: "Chính sách thuế",
      icon: Percent,
      iconColor: "text-blue-900",
      bgColor: "bg-white",
      category: 2,
      detailTitle: "Cập nhật Ưu đãi và Biểu mẫu Tờ khai Thuế Nhà nước mới",
      detailContent: "Cục Thuế tỉnh Khánh Hòa phổ biến quy định miễn giảm 2% thuế suất VAT cho các nhóm ngành sản xuất, thương mại dịch vụ tiêu dùng hàng ngày. Hướng dẫn trực quan lộ trình kê khai thuế qua ứng dụng thông minh eTax Mobile, giúp cá nhân tự do quyết toán hoàn phí thu nhập cá nhân ở nhà chỉ với vài thao tác vuốt thông minh."
    },
    {
      id: "tt-4",
      title: "Thi đua, khen thưởng",
      icon: Trophy,
      iconColor: "text-blue-900",
      bgColor: "bg-white",
      category: 2,
      detailTitle: "Cơ cấu Thi đua khen thưởng Gương sáng Lao động Sáng tạo",
      detailContent: "Biểu dung các tập thể ban ngành xuất sắc, hộ kinh doanh tiêu biểu, và các cá nhân sáng tạo đột phá của xã phường ven đại dương. Tuyên dương đề án cải tiến công cụ nông nghiệp của nông dân, những y bác sĩ hết mình vì bệnh nhân vùng biển khó khăn, lan tỏa vẻ đẹp nhân văn sâu sắc trên phương tiện đại chúng."
    },
    {
      id: "tt-5",
      title: "Phòng, chống tham nhũng",
      icon: ShieldAlert,
      iconColor: "text-blue-900",
      bgColor: "bg-white",
      category: 2,
      detailTitle: "Công tác Giám sát, Thanh tra và Phòng chống Tham nhũng Tiêu cực",
      detailContent: "Cung cấp cổng tiếp nhận phản ánh, khiếu nại nặc danh an toàn tuyệt đối của thanh tra tỉnh Khánh Hòa. Bảo mật thông tin người dân cung cấp về các biểu hiện nhũng nhiễu, vụ lợi hay hạch sách trong giải quyết giấy tờ nhà đất của công chức hành chính, góp phần xây dựng tổ chức bộ máy phụng sự nhân dân sạch trong."
    },
    {
      id: "tt-6",
      title: "An toàn giao thông",
      icon: Car,
      iconColor: "text-blue-900",
      bgColor: "bg-white",
      category: 2,
      detailTitle: "Chiến dịch tuyên truyền và chấp hành quy chuẩn an toàn giao thông đường bộ",
      detailContent: "Phổ biến kiến thức pháp luật giao thông đường bộ mới, các mức xử phạt hành vi vi phạm nồng độ cồn, chạy quá tốc độ qua hệ thống camera giám sát (phạt nguội) của tỉnh. Hướng dẫn kỹ năng lái xe an toàn, quy tắc nhường đường và văn hóa ứng xử văn minh khi tham gia giao thông nhằm giảm thiểu tai nạn đáng tiếc."
    },
    {
      id: "tt-7",
      title: "Hướng dẫn pháp luật",
      icon: FileText,
      iconColor: "text-blue-900",
      bgColor: "bg-white",
      category: 2,
      detailTitle: "Chuyên mục cẩm nang hướng dẫn và giải đáp quy trình áp dụng pháp luật",
      detailContent: "Tổng hợp các bài viết phân tích, Infographic trực quan sinh động và video hướng dẫn chi tiết quy trình pháp lý thường gặp như thừa kế đất đai, đăng ký khai sinh có yếu tố nước ngoài, thành lập hộ kinh doanh cá thể. Giúp người dân hiểu đúng và tự tin thực hiện các quyền lợi, nghĩa vụ hợp pháp của mình."
    },
    {
      id: "tt-8",
      title: "Học tập làm theo Bác",
      icon: Trophy,
      iconColor: "text-blue-900",
      bgColor: "bg-white",
      category: 2,
      detailTitle: "Tuyên truyền phong trào học tập và làm theo tư tưởng, đạo đức Hồ Chí Minh",
      detailContent: "Giới thiệu các mô hình hay, cách làm sáng tạo và các gương điển hình tiên tiến trong học tập, lao động, sản xuất tại địa phương. Lan tỏa những hành động đẹp vì cộng đồng, tinh thần vượt khó vươn lên, nâng cao ý thức trách nhiệm đạo đức công vụ của cán bộ công chức trong công tác phục vụ nhân dân hàng ngày."
    },

    // Column 3: THÔNG TIN TRA CỨU
    {
      id: "tc-1",
      title: "Người phát ngôn",
      icon: Mic,
      iconColor: "text-blue-900",
      bgColor: "bg-white",
      category: 3,
      detailTitle: "Danh sách Đại diện Phát ngôn chính thức của Tỉnh Khánh Hòa",
      detailContent: "Họ tên, địa chỉ thư điện tử công việc và điện thoại bàn phản hồi báo chí của Chánh văn phòng UBND Tỉnh, Giám đốc Sở Tài nguyên Môi trường, Giám đốc Sở Du lịch, và Chủ tịch UBND các huyện thị. Cam kết cung cấp thông tin thời sự chính xác tuyệt đối, dập tắt các tin đồn xã hội thất thiệt gây hoang mang dư luận."
    },
    {
      id: "tc-2",
      title: "Danh bạ điện thoại",
      icon: Phone,
      iconColor: "text-blue-900",
      bgColor: "bg-white",
      category: 3,
      detailTitle: "Tổng đài Danh bạ Điện thoại Ban ngành Khánh Hòa",
      detailContent: "Số máy hotline phòng trực ban 24/7 của toàn bộ các Sở Sở KHĐT, Sở Tư pháp, Sở Y tế và Bộ phận Tiếp dân các Huyện Cam Lâm, Diên Khánh, Cam Ranh. Hỗ trợ kết nối kịp thời khi công dân gặp sự cố hoặc cần hỗ trợ giấy tờ đột xuất giữa các phòng ban ban ngành hành chính công liên quan."
    },
    {
      id: "tc-3",
      title: "Thông tin báo chí",
      icon: Newspaper,
      iconColor: "text-blue-900",
      bgColor: "bg-white",
      category: 3,
      detailTitle: "Cổng Thông cáo Báo chí và Trực quan Truyền thông Khánh Hòa",
      detailContent: "Bản tin tổng hợp các bài báo, phóng sự chất lượng cao ghi nhận quá trình đô thị hóa vững bền, xúc tiến kinh tế biển đảo nước sâu, tổ chức văn hóa ẩm thực Festival Biển. Đây là nguồn dữ liệu mở, tin cậy đối với các cơ quan báo đài trung ương và quốc tế muốn đăng tải đưa tin về tiềm năng Khánh Hòa."
    },
    {
      id: "tc-4",
      title: "Thông tin doanh nghiệp",
      icon: Building,
      iconColor: "text-blue-900",
      bgColor: "bg-white",
      category: 3,
      detailTitle: "Cổng thông tin Đăng ký và Tra cứu Doanh nghiệp Tỉnh Khánh Hòa",
      detailContent: "Hỗ trợ cá nhân và tổ chức tra cứu nhanh chóng giấy phép đăng ký kinh doanh, tình trạng hoạt động, mã số thuế doanh nghiệp, ngành nghề đăng ký và thông tin người đại diện pháp luật của toàn bộ các công ty, hợp tác xã trên địa bàn tỉnh Khánh Hòa. Giúp nâng cao tính minh bạch và an toàn trong giao dịch thương mại."
    },
    {
      id: "tc-5",
      title: "Thông tin tuyển dụng",
      icon: UserPlus,
      iconColor: "text-blue-900",
      bgColor: "bg-white",
      category: 3,
      detailTitle: "Cổng thông tin Việc làm và Tuyển dụng Hành chính công",
      detailContent: "Kênh cung cấp thông tin tuyển dụng chính thức của các cơ quan quản lý nhà nước, đơn vị sự nghiệp công lập và các doanh nghiệp lớn trên địa bàn tỉnh Khánh Hòa. Cập nhật liên tục các chỉ tiêu thi tuyển công chức, viên chức, người lao động; hướng dẫn quy trình nộp hồ sơ, thời gian ôn tập và công bố kết quả minh bạch."
    }
  ];

  // Handle dynamic Q&A submits
  const handleQaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!qaInput.trim()) return;

    const newQa = {
      id: `qa-new-${Date.now()}`,
      question: qaInput.trim(),
      answer: "Đang chuyển gửi tới Sở, Ban, Ngành liên quan thẩm định giải đáp và sẽ phản hồi lại trong thời gian sớm nhất.",
      time: "Vừa xong",
      status: "Đang phân tích"
    };

    setQaAnswers(prev => [newQa, ...prev]);
    setQaInput("");
    showToast("Gửi ý kiến / câu hỏi thành công! Trực ban chính quyền đã tiếp nhận và đang số hóa thụ lý.");
  };

  // Filtered lists based on search term
  const filterItem = (items: UtilityItem[], catNum: number) => {
    return items.filter(
      item => item.category === catNum && 
      (item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
       item.detailTitle.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  return (
    <div className="w-full text-slate-800 relative select-none transition-all utilities-portal-root bg-white p-6 md:p-10 rounded-3xl border border-gray-200 shadow-sm hover:cursor-default">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMsg && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -20, x: "-50%" }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-blue-600 border border-blue-500 text-white font-bold text-lg py-3 px-6 rounded-2xl shadow-2xl flex items-center gap-2.5 backdrop-blur"
          >
            <CheckCircle size={15} />
            <span>{toastMsg}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Title Banner with Dynamic Accent Border on the Left */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-5">
        <div className="flex items-start gap-3.5 text-left">
          {/* Circle icon representing utilities with dynamic colors */}
          <div className={`w-12 h-12 ${primaryBg} text-white rounded-full flex items-center justify-center shrink-0 shadow-sm mt-0.5`}>
            <Building size={22} className="stroke-[1.8]" />
          </div>
          <div className="text-left">
            <div className="flex items-center">
              <h2 className={`${primaryText} font-black text-2xl md:text-3xl uppercase tracking-tight leading-none text-left`}>
                Tiện ích dịch vụ & Thông tin công khai
              </h2>
            </div>
            <p className="text-lg sm:text-[18px] text-slate-800 font-medium mt-0.5">
              Cơ sở dữ liệu hỗ trợ công dân, doanh nghiệp tra cứu và tương tác trực tuyến
            </p>
          </div>
        </div>

        {/* Quick Search Input */}
        <div className="relative flex items-center w-full max-w-xs self-end">
          <Search className="absolute left-3.5 text-slate-400" size={14} />
          <input
            id="utility-search-bar"
            type="text"
            placeholder="Tìm nhanh tiện ích..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full bg-slate-50 border border-slate-200/80 p-2.5 pl-10 rounded-full text-[16px] font-bold text-slate-700 placeholder-slate-450 focus:outline-none ${focusBorder} hover:border-slate-300 transition-all text-left`}
          />
        </div>
      </div>

      {/* Tri-Column Information Grid + Interactive Sidebar Column */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left 3 Lists Section (Total spans 9 or 12 columns) - Direct layout without inner card container */}
        <div className={`${showSidebar ? "lg:col-span-9" : "lg:col-span-12"} flex flex-col justify-between p-2`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 divide-y md:divide-y-0">
            
            {/* Column 1: THÔNG TIN CÔNG KHAI */}
            <div className="flex flex-col justify-between text-left">
              <div>
                {/* Header Badge */}
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
                  <Database size={20} className="text-red-600 shrink-0" />
                  <span className={`${primaryText} font-black text-lg uppercase tracking-tight`}>
                    Thông tin công khai
                  </span>
                </div>

                {/* Utility List Items with elegant scrollbar */}
                <div className="h-[480px] overflow-y-auto pr-2 custom-scrollbar-light text-left space-y-2">
                  {filterItem(utilitiesList, 1).length === 0 ? (
                    <p className="text-lg italic text-slate-400 text-center py-4 font-bold">Không tìm thấy tiện ích phù hợp</p>
                  ) : (
                    filterItem(utilitiesList, 1).map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <div
                          id={`utility-${item.id}`}
                          key={item.id}
                          onClick={() => setSelectedItem(item)}
                          className={`group/item flex items-center gap-3.5 py-2 px-3 bg-[#f8fafc] ${isRed ? "hover:bg-[#fff5f5] hover:border-red-200/80" : "hover:bg-[#f0f4f8] hover:border-blue-200/80"} border border-slate-200/60 rounded-xl transition-all duration-300 cursor-pointer text-left relative overflow-hidden`}
                        >
                          {/* Circular Badge with animating rising wave */}
                          <div className={`relative w-[38px] h-[38px] rounded-full shadow-sm bg-white overflow-hidden flex items-center justify-center shrink-0 ring-[1.5px] ring-inset ${isRed ? "ring-[#a50b12]" : "ring-[#0b3c7b]"} transition-all duration-300`}>
                            {/* Icon - stays as red or blue */}
                            <span className={`z-10 relative ${isRed ? "text-red-600 group-hover/item:text-red-700" : "text-[#b32b2b] group-hover/item:text-red-700"} translate-y-[-1px] transition-all`}>
                              <IconComponent size={18} />
                            </span>
                            
                            {/* Animated wave graphic fill from the bottom */}
                            <div className={`absolute bottom-[-20%] left-[-10%] right-[-10%] h-[60%] pointer-events-none ${isRed ? "text-[#a50b12]" : "text-[#0b3c7b]"}`}>
                              <svg viewBox="0 0 100 50" overflow="visible" preserveAspectRatio="none" className="w-full h-full transition-transform duration-500 ease-out group-hover/item:-translate-y-1.5" fill="none">
                                  <path d="M 0 15 Q 25 0 50 15 T 100 15 L 100 150 L 0 150 Z" fill="currentColor" />
                                  <path d="M 0 21 Q 25 6 50 21 T 100 21 L 100 150 L 0 150 Z" fill="#ffffff" />
                                  <path d="M 0 26 Q 25 11 50 26 T 100 26 L 100 150 L 0 150 Z" fill="currentColor" />
                              </svg>
                            </div>
                          </div>
                          
                          <span className={`text-[16px] font-bold text-slate-700 ${isRed ? "group-hover/item:text-red-700" : "group-hover/item:text-blue-700"} transition-colors line-clamp-1 leading-normal text-left flex-1`}>
                            {item.title}
                          </span>
                          <ExternalLink
                            size={16}
                            className={`ml-auto opacity-0 group-hover/item:opacity-100 ${isRed ? "text-red-600" : "text-blue-600"} shrink-0 z-10 transition-all duration-300 transform translate-x-1 group-hover/item:translate-x-0`}
                          />
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>

            {/* Column 2: THÔNG TIN TUYÊN TRUYỀN */}
            <div className="md:pl-8 flex flex-col justify-between text-left">
              <div>
                {/* Header Badge */}
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
                  <Megaphone size={20} className="text-red-600 shrink-0" />
                  <span className={`${primaryText} font-black text-lg uppercase tracking-tight`}>
                    Thông tin tuyên truyền
                  </span>
                </div>

                {/* Utility List Items with elegant scrollbar */}
                <div className="h-[480px] overflow-y-auto pr-2 custom-scrollbar-light text-left space-y-2">
                  {filterItem(utilitiesList, 2).length === 0 ? (
                    <p className="text-lg italic text-slate-400 text-center py-4 font-bold">Không tìm thấy tiện ích phù hợp</p>
                  ) : (
                    filterItem(utilitiesList, 2).map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <div
                          id={`utility-${item.id}`}
                          key={item.id}
                          onClick={() => setSelectedItem(item)}
                          className={`group/item flex items-center gap-3.5 py-2 px-3 bg-[#f8fafc] ${isRed ? "hover:bg-[#fff5f5] hover:border-red-200/80" : "hover:bg-[#f0f4f8] hover:border-blue-200/80"} border border-slate-200/60 rounded-xl transition-all duration-300 cursor-pointer text-left relative overflow-hidden`}
                        >
                          {/* Circular Badge with animating rising wave */}
                          <div className={`relative w-[38px] h-[38px] rounded-full shadow-sm bg-white overflow-hidden flex items-center justify-center shrink-0 ring-[1.5px] ring-inset ${isRed ? "ring-[#a50b12]" : "ring-[#0b3c7b]"} transition-all duration-300`}>
                            {/* Icon - stays as red or blue */}
                            <span className={`z-10 relative ${isRed ? "text-red-600 group-hover/item:text-red-700" : "text-[#1E3A8A] group-hover/item:text-blue-700"} translate-y-[-1px] transition-all`}>
                              <IconComponent size={18} />
                            </span>
                            
                            {/* Animated wave graphic fill from the bottom */}
                            <div className={`absolute bottom-[-20%] left-[-10%] right-[-10%] h-[60%] pointer-events-none ${isRed ? "text-[#a50b12]" : "text-[#0b3c7b]"}`}>
                              <svg viewBox="0 0 100 50" overflow="visible" preserveAspectRatio="none" className="w-full h-full transition-transform duration-500 ease-out group-hover/item:-translate-y-1.5" fill="none">
                                  <path d="M 0 15 Q 25 0 50 15 T 100 15 L 100 150 L 0 150 Z" fill="currentColor" />
                                  <path d="M 0 21 Q 25 6 50 21 T 100 21 L 100 150 L 0 150 Z" fill="#ffffff" />
                                  <path d="M 0 26 Q 25 11 50 26 T 100 26 L 100 150 L 0 150 Z" fill="currentColor" />
                              </svg>
                            </div>
                          </div>
                          
                          <span className={`text-[16px] font-bold text-slate-700 ${isRed ? "group-hover/item:text-red-700" : "group-hover/item:text-blue-700"} transition-colors line-clamp-1 leading-normal text-left flex-1`}>
                            {item.title}
                          </span>
                          <ExternalLink
                            size={16}
                            className={`ml-auto opacity-0 group-hover/item:opacity-100 ${isRed ? "text-red-600" : "text-blue-600"} shrink-0 z-10 transition-all duration-300 transform translate-x-1 group-hover/item:translate-x-0`}
                          />
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>

            {/* Column 3: THÔNG TIN TRA CỨU */}
            <div className="md:pl-8 flex flex-col justify-between text-left">
              <div>
                {/* Header Badge */}
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
                  <Search size={20} className="text-red-600 shrink-0" />
                  <span className={`${primaryText} font-black text-lg uppercase tracking-tight`}>
                    Thông tin tra cứu
                  </span>
                </div>

                {/* Utility List Items with elegant scrollbar */}
                <div className="h-[480px] overflow-y-auto pr-2 custom-scrollbar-light text-left space-y-2">
                  {filterItem(utilitiesList, 3).length === 0 ? (
                    <p className="text-lg italic text-slate-400 text-center py-4 font-bold">Không tìm thấy tiện ích phù hợp</p>
                  ) : (
                    filterItem(utilitiesList, 3).map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <div
                          id={`utility-${item.id}`}
                          key={item.id}
                          onClick={() => setSelectedItem(item)}
                          className={`group/item flex items-center gap-3.5 py-2 px-3 bg-[#f8fafc] ${isRed ? "hover:bg-[#fff5f5] hover:border-red-200/80" : "hover:bg-[#f0f4f8] hover:border-blue-200/80"} border border-slate-200/60 rounded-xl transition-all duration-300 cursor-pointer text-left relative overflow-hidden`}
                        >
                          {/* Circular Badge with animating rising wave */}
                          <div className={`relative w-[38px] h-[38px] rounded-full shadow-sm bg-white overflow-hidden flex items-center justify-center shrink-0 ring-[1.5px] ring-inset ${isRed ? "ring-[#a50b12]" : "ring-[#0b3c7b]"} transition-all duration-300`}>
                            {/* Icon - stays as red or blue */}
                            <span className={`z-10 relative text-red-600 group-hover/item:text-red-700 translate-y-[-1px] transition-all`}>
                              <IconComponent size={18} />
                            </span>
                            
                            {/* Animated wave graphic fill from the bottom */}
                            <div className={`absolute bottom-[-20%] left-[-10%] right-[-10%] h-[60%] pointer-events-none ${isRed ? "text-[#a50b12]" : "text-[#0b3c7b]"}`}>
                              <svg viewBox="0 0 100 50" overflow="visible" preserveAspectRatio="none" className="w-full h-full transition-transform duration-500 ease-out group-hover/item:-translate-y-1.5" fill="none">
                                  <path d="M 0 15 Q 25 0 50 15 T 100 15 L 100 150 L 0 150 Z" fill="currentColor" />
                                  <path d="M 0 21 Q 25 6 50 21 T 100 21 L 100 150 L 0 150 Z" fill="#ffffff" />
                                  <path d="M 0 26 Q 25 11 50 26 T 100 26 L 100 150 L 0 150 Z" fill="currentColor" />
                              </svg>
                            </div>
                          </div>
                          
                          <span className={`text-[16px] font-bold text-slate-700 ${isRed ? "group-hover/item:text-red-700" : "group-hover/item:text-blue-700"} transition-colors line-clamp-1 leading-normal text-left flex-1`}>
                            {item.title}
                          </span>
                          <ExternalLink
                            size={16}
                            className={`ml-auto opacity-0 group-hover/item:opacity-100 ${isRed ? "text-red-600" : "text-blue-600"} shrink-0 z-10 transition-all duration-300 transform translate-x-1 group-hover/item:translate-x-0`}
                          />
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar Interactive Column: CHÍNH QUYỀN - HỎI ĐÁP (Total spans 3 columns) */}
        {showSidebar && (
          <div className="lg:col-span-3 flex">
            <div className={`text-white rounded-3xl p-5 shadow-lg w-full flex flex-col justify-between border ${isRed ? "border-red-950/40 bg-[#5e0407]" : "border-slate-800 bg-[#122c66]"} text-left relative overflow-hidden h-full min-h-[480px]`}>
              {/* Ambient Background Grid Glow */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${isRed ? "bg-red-500/10" : "bg-sky-500/10"} rounded-full blur-3xl pointer-events-none`} />
              <div className={`absolute -left-10 -bottom-10 w-24 h-24 ${isRed ? "bg-red-500/5" : "bg-sky-500/5"} rounded-full blur-2xl pointer-events-none`} />

              {/* Sidebar Top: Badge + Icon + Headline */}
              <div>
                <div className="flex items-start gap-3 border-b border-white/10 pb-4 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-[#FFFFFF] shrink-0 border border-white/5 shadow-inner">
                    <HelpCircle size={16} />
                  </div>
                  <div className="text-left">
                    <span className={`inline-block text-lg font-black uppercase tracking-wider px-2 py-0.5 rounded-md leading-none ${sidebarBadgeBg} ${sidebarBadgeText}`}>
                      Hệ thống hành chính
                    </span>
                    <h3 className="text-lg font-black uppercase tracking-tight text-white mt-1">
                      Chính quyền - Hỏi đáp
                    </h3>
                  </div>
                </div>

                {/* Subheading text */}
                <p className="text-lg text-slate-300 font-semibold leading-relaxed mb-4">
                  Công dân đề xuất trực tuyến, góp ý sáng kiến xây dựng đô thị, hoặc trao đổi tháo gỡ vướng mắc hồ sơ.
                </p>

                {/* Question Interactive Form */}
                <form onSubmit={handleQaSubmit} className="space-y-2.5 mb-5 text-left">
                  <div>
                    <label className={`text-lg font-black block uppercase tracking-wider mb-1.5 ${isRed ? "text-red-300" : "text-sky-400/90"}`}>
                      Nhập nội dung câu hỏi / kiến nghị
                    </label>
                    <textarea
                      id="qa-textarea-sidebar"
                      rows={3}
                      required
                      placeholder="Ghi rõ chi tiết nội dung cần hỏi đáp hoặc ban ý kiến..."
                      value={qaInput}
                      onChange={(e) => setQaInput(e.target.value)}
                      className={`w-full border p-3 rounded-xl text-lg font-semibold text-slate-200 placeholder-slate-450 focus:outline-none transition-all resize-none shadow-inner text-left ${
                        isRed 
                          ? "bg-[#330204] border-red-950/80 focus:border-red-400/80 hover:border-red-900" 
                          : "bg-[#0d2252] border-slate-700/80 focus:border-sky-400/80 hover:border-slate-600"
                      }`}
                    ></textarea>
                  </div>

                  {/* Submitting button block in high contrast Yellow */}
                  <button
                    type="submit"
                    className={`w-full active:scale-[0.98] text-white font-black text-lg uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer leading-none ${
                      isRed ? "bg-[#a50b12] hover:bg-[#8f090f]" : "bg-sky-500 hover:bg-sky-600"
                    }`}
                  >
                    <Send size={11} className="fill-white" />
                    <span>Gửi câu hỏi ngay</span>
                  </button>
                </form>

                {/* Recent Q&A Feed Section */}
                <div className="border-t border-white/10 pt-4 text-left">
                  <span className={`text-lg font-black tracking-widest uppercase block mb-3 ${isRed ? "text-red-300" : "text-sky-400/90"}`}>
                    Câu hỏi vừa nhận mới nhất ({qaAnswers.length})
                  </span>

                  {/* Vertical scrollable chat history log with custom sleek scrollbar */}
                  <div className="space-y-4 max-h-[175px] overflow-y-auto pr-1 select-text scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
                    {qaAnswers.map((qa) => (
                      <div key={qa.id} className="border-b border-white/5 pb-3 last:border-0 last:pb-0 text-lg">
                        {/* Badge / Status alignment with clock */}
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-lg font-black bg-white/10 text-slate-300 px-1.5 py-0.5 rounded uppercase flex items-center gap-1 leading-none font-mono">
                            <Clock size={8} /> {qa.time}
                          </span>
                          <span className={`text-lg font-black uppercase px-1.5 py-0.5 rounded leading-none ${
                            qa.status === "Đang phân tích" 
                              ? "bg-amber-500/20 text-amber-300 animate-pulse border border-amber-500/20" 
                              : (isRed ? "bg-red-500/20 text-red-300 border border-red-500/20" : "bg-blue-500/20 text-blue-300 border border-blue-500/20")
                          }`}>
                            {qa.status}
                          </span>
                        </div>

                        {/* Question Text */}
                        <p className="font-extrabold text-white mb-1.5 leading-snug">
                          <span className={`${isRed ? "text-red-300" : "text-sky-300"} font-black`}>Hỏi:</span> {qa.question}
                        </p>

                        {/* Reply Answer text */}
                        <p className={`text-slate-300 font-medium leading-relaxed p-2 rounded-lg border border-white/5 ${isRed ? "bg-[#330204]" : "bg-[#0a1b41]"}`}>
                          <span className={`${isRed ? "text-red-400" : "text-blue-400"} font-extrabold`}>Đáp:</span> {qa.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Sidebar support footer */}
              <div className={`mt-4 pt-4 border-t border-white/10 rounded-2xl p-2.5 px-3 flex items-center justify-between ${isRed ? "bg-[#330204]/40" : "bg-[#0d2252]/40"}`}>
                <div className="text-left">
                  <span className="text-lg text-slate-350 uppercase font-black block tracking-wider">Hỗ trợ pháp lý</span>
                  <span className="text-lg font-extrabold text-white tracking-wide block mt-0.5">Hotline: 1900 1234</span>
                </div>
                <div className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/5 shadow cursor-pointer transition-all ${
                  isRed ? "hover:bg-[#a50b12]" : "hover:bg-sky-500"
                }`}>
                  <Phone size={13} />
                </div>
              </div>

            </div>
          </div>
        )}

      </div>

      {/* Two elegant national portals banner widgets at the bottom (Red and Blue cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 mb-16">
        
        {/* National Gazette Banner Card (Tòa soạn công báo) -> Red */}
        <div 
          onClick={() => showToast("Hệ thống liên kết: Đang hướng tới Công báo Quốc gia nước CHXHCN Việt Nam...")}
          className="bg-gradient-to-r from-[#1E3A8A] via-[#1D4ED8] to-[#2563EB] hover:to-[#3B82F6] text-white py-6 px-6 rounded-3xl shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-between relative overflow-hidden group select-none"
        >
          {/* Subtle logo vector outline glow */}
          <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
            <Building size={140} className="stroke-[1.2] rotate-12" />
          </div>

          <div className="flex items-center gap-4 relative z-10 text-left">
            <div className="w-11 h-11 bg-white/15 backdrop-blur rounded-2xl flex items-center justify-center text-white border border-white/10 shadow group-hover:scale-105 transition-transform duration-300">
              <FileText size={20} className="stroke-[1.8]" />
            </div>
            <div>
              <h4 className="text-lg md:text-base font-black tracking-tight text-white/95 group-hover:text-sky-200 transition-colors">
                Công báo Quốc gia
              </h4>
              <p className="text-lg text-sky-150 text-sky-100 font-extrabold uppercase tracking-wider block leading-none mt-1.5 opacity-90">
                Nước Cộng hòa Xã hội Chủ nghĩa Việt Nam
              </p>
            </div>
          </div>

          {/* Action trigger chevron button aligned right */}
          <div className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/30 text-white flex items-center justify-center border border-white/10 transition-all relative z-10 font-bold">
            <ChevronRight size={16} />
          </div>
        </div>

        {/* National Legal VBQPPL Portal -> Blue */}
        <div 
          onClick={() => showToast("Hệ thống liên kết: Đang hướng tới Cơ sở dữ liệu Quốc gia về Văn bản Pháp luật...")}
          className="bg-gradient-to-r from-[#0F4C81] via-[#1D5E9E] to-[#2E75B5] hover:to-[#3886CD] text-white py-6 px-6 rounded-3xl shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-between relative overflow-hidden group select-none"
        >
          {/* Subtle logo vector outline glow */}
          <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
            <Scale size={140} className="stroke-[1.2] -rotate-12" />
          </div>

          <div className="flex items-center gap-4 relative z-10 text-left">
            <div className="w-11 h-11 bg-white/15 backdrop-blur rounded-2xl flex items-center justify-center text-white border border-white/10 shadow group-hover:scale-105 transition-transform duration-300">
              <Layers size={19} className="stroke-[1.8]" />
            </div>
            <div>
              <h4 className="text-lg md:text-base font-black tracking-tight text-white/95 group-hover:text-sky-200 transition-colors">
                Cơ sở dữ liệu Quốc gia
              </h4>
              <p className="text-lg text-blue-100 font-extrabold uppercase tracking-wider block leading-none mt-1.5 opacity-90">
                Hệ thống văn bản quy phạm pháp luật
              </p>
            </div>
          </div>

          {/* Action trigger chevron button aligned right */}
          <div className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/30 text-white flex items-center justify-center border border-white/10 transition-all relative z-10 font-bold">
            <ChevronRight size={16} />
          </div>
        </div>

      </div>

      {/* Utility Information Detail Modal Overlay */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl max-w-xl w-full p-6 md:p-8 shadow-2xl border border-slate-100 relative text-left"
            >
              {/* Close Button top corner */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
                title="Đóng cửa sổ"
              >
                <X size={15} />
              </button>

              {/* Modal Core Contents */}
              <div className="flex items-start gap-4 mb-5 border-b border-slate-50 pb-4">
                <div className={`w-12 h-12 rounded-2xl ${selectedItem.bgColor} flex items-center justify-center shrink-0 shadow-sm border border-slate-100/10`}>
                  {React.createElement(selectedItem.icon, { size: 22, className: selectedItem.iconColor })}
                </div>
                <div className="text-left">
                  <span className="text-lg font-black bg-slate-100 text-slate-500 tracking-wider uppercase px-2 py-0.5 rounded-md leading-none">
                    Mã liên kết: {selectedItem.id.toUpperCase()}
                  </span>
                  <h3 className={`${primaryText} font-black text-lg md:text-base mt-2 tracking-tight`}>
                    {selectedItem.detailTitle}
                  </h3>
                </div>
              </div>

              {/* Informative text body copy */}
              <div className="bg-slate-50/70 border border-slate-100 rounded-2xl p-4 md:p-5 mb-6 text-lg font-semibold text-slate-600 leading-relaxed text-justify whitespace-pre-line">
                {selectedItem.detailContent}
              </div>

              {/* Sub-actions of Modal window */}
              <div className="flex flex-col sm:flex-row gap-3 items-center justify-between border-t border-slate-50 pt-5">
                <span className={`text-lg font-extrabold flex items-center gap-1 px-2.5 py-1 rounded-lg ${
                  isRed ? "text-red-600 bg-red-50" : "text-blue-600 bg-blue-50"
                }`}>
                  <CheckCircle size={12} /> Cổng dữ liệu đạt kiểm định tiêu chuẩn an toàn thông tin
                </span>
                
                <div className="flex gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      showToast(`Đang tải mẫu tờ khai số hóa cho mục: ${selectedItem.title}`);
                      setSelectedItem(null);
                    }}
                    className="flex-1 sm:flex-none bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-lg px-4 py-2.5 rounded-xl transition-all cursor-pointer text-center"
                  >
                    Tải về biểu mẫu
                  </button>
                  <button
                    onClick={() => {
                      showToast(`Đang định tuyến liên thông kết nối tới trang chính thức...`);
                      setSelectedItem(null);
                    }}
                    className={`flex-1 sm:flex-none text-white font-heavy text-lg px-4 py-2.5 rounded-xl transition-all flex items-center justify-center gap-1 cursor-pointer shadow-sm text-center font-bold ${
                      isRed ? "bg-[#a50b12] hover:bg-[#8f090f]" : "bg-[#1E3A8A] hover:bg-blue-800"
                    }`}
                  >
                    <span>Liên tiếp kết công</span>
                    <ExternalLink size={11} />
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
