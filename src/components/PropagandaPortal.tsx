import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Info,
  Search,
  CheckCircle,
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
  Droplets,
  Wind,
  Sun,
  Sparkles,
  Megaphone,
  Award,
  ChevronRight,
  MessageSquare,
  Send,
  FileText
} from "lucide-react";
import UtilitiesPortal from "./UtilitiesPortal";

export default function PropagandaPortal({ showUtilitiesSidebar = false }: { showUtilitiesSidebar?: boolean }) {
  const [toast, setToast] = useState<string | null>(null);
  const [qaInput, setQaInput] = useState("");
  const [qaMessages, setQaMessages] = useState([
    {
      id: "qam-1",
      sender: "Trợ lý ảo",
      text: "Chào bạn! Tôi là Trợ lý giải đáp hành chính công. Bạn có thể nhấn chọn các câu hỏi gợi ý bên dưới hoặc tự nhập thắc mắc về giá đất, thời tiết, bảo hiểm, đường dây nóng nhé!",
      time: "Bây giờ",
      isBot: true
    }
  ]);

  const [bannerIndex, setBannerIndex] = useState(0);

  const celebratoryBanners = [
    {
      id: "cb-1",
      badge: "SỰ KIỆN QUAN TRỌNG TRONG NĂM",
      title: "Kỷ niệm 79 năm Cách mạng Tháng Tám và Quốc khánh nước CHXHCN Việt Nam (02/09)",
      desc: "Ngày Quốc khánh thiêng liêng rực rỡ cờ hoa, kỷ niệm mốc son lịch sử khai sinh ra nước Việt Nam Dân chủ Nhân dân, thắp sáng khát vọng vươn tầm và phát triển thịnh vượng.",
      footerLeft: "* KHÁNH HÒA VỮNG BƯỚC ĐI LÊN *",
      footerRight: "KỶ NIỆM CÁCH MẠNG",
      bgGradient: "from-[#8B0000] via-[#B22222] to-[#D1111E]",
      img: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=1200"
    },
    {
      id: "cb-2",
      badge: "KỶ NIỆM LỊCH SỬ QUỐC GIA",
      title: "Hào khí Thăng Long - Hà Nội rạng ngời và hành trình đổi mới đất nước",
      desc: "Phát huy hào khí Thăng Long, tinh thần kiên cường tự chủ hướng tới xây dựng một nước Việt Nam hòa bình, thống nhất, sáng tạo rộng mở, giàu mạnh, phồn vinh.",
      footerLeft: "* KHÁNH HÒA ĐOÀN KẾT, SÁNG TẠO *",
      footerRight: "HÀO KHÍ TRUYỀN THỐNG",
      bgGradient: "from-[#990000] via-[#C92A2A] to-[#E03131]",
      img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200"
    },
    {
      id: "cb-3",
      badge: "KHÁNH HÒA SỐ HÓA TOÀN DIỆN VÌ DÂN",
      title: "Thiết lập Đô thị hành chính thông minh, Quy hoạch Bản đồ số 2030",
      desc: "Phát triển số hóa toàn diện thủ tục hành chính công vì lợi ích của nhân dân, kết nối thông tin dữ liệu liền mạch, định dạng đô thị ven biển thông minh, hiện đại.",
      footerLeft: "* CHUYỂN ĐỔI SỐ QUỐC GIA *",
      footerRight: "KỶ NGUYÊN SỐ MỚI",
      bgGradient: "from-[#111827] via-[#7F1D1D] to-[#991B1B]",
      img: "https://images.unsplash.com/photo-1568402102990-bc541580b59f?q=80&w=1200"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % celebratoryBanners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const handleSendQa = (textToSend?: string) => {
    const queryText = textToSend || qaInput.trim();
    if (!queryText) return;

    const userMsgId = `qam-u-${Date.now()}`;
    const cleanText = typeof queryText === 'string' ? queryText.trim() : "";
    if (!cleanText) return;
    
    // Add User Message
    setQaMessages(prev => [
      ...prev,
      {
        id: userMsgId,
        sender: "Bạn",
        text: cleanText,
        time: "Vừa xong",
        isBot: false
      }
    ]);

    if (!textToSend) {
      setQaInput("");
    }

    const normalized = cleanText.toLowerCase();
    let reply = "Cảm ơn bạn đã gửi câu hỏi. Tôi đã ghi nhận thắc mắc và chuyển đến phòng Ban chuyên trách tỉnh Khánh Hòa để rà soát và trả lời trong thời gian sớm nhất.";

    if (normalized.includes("đất") || normalized.includes("địa chính") || normalized.includes("sổ đỏ") || normalized.includes("bản đồ")) {
      reply = "Thông tin bảng giá đất nông nghiệp & đất ở đô thị chu kỳ mới do UBND tỉnh Khánh Hòa ban hành đang được niêm yết công khai tại mục 'Bảng giá đất' ở cột bên trái trong bảng cơ sở dữ liệu tra cứu liên thông.";
    } else if (normalized.includes("thời tiết") || normalized.includes("khí hậu") || normalized.includes("nha trang") || normalized.includes("bão") || normalized.includes("nhiệt độ")) {
      reply = "Hiện tại thời tiết thành phố Nha Trang và khu vực lân cận đang ở mức 28°C, gió nhẹ 14km/h, biển êm, trời quang đãng hoàn hảo cho tắm biển. Bạn có thể xem chi tiết thời tiết 3 ngày tới ở bảng Thời tiết ngay màn hình bên cạnh.";
    } else if (normalized.includes("bảo hiểm") || normalized.includes("bhxh") || normalized.includes("bhyt") || normalized.includes("y tế")) {
      reply = "Để kiểm tra thời hạn đóng bảo hiểm xã hội tự nguyện hoặc gia hạn thẻ bảo hiểm y tế gia đình trực tuyến, xin mời bạn nhấp vào mục 'Tra cứu bảo hiểm xã hội' ở cột thông tin bên trái để mở hộp thông tin chi tiết.";
    } else if (normalized.includes("đường dây nóng") || normalized.includes("hotline") || normalized.includes("sđt") || normalized.includes("khẩn cấp") || normalized.includes("điện thoại")) {
      reply = "Tỉnh Khánh Hòa duy trì các số điện thoại cứu nạn khẩn cấp và giải đáp: Cứu nạn (112), Cảnh sát (113), Cứu hỏa (114), Cấp cứu (115) và hỗ trợ hành chính tổng đài 1022. Xem danh sách chi tiết ở bảng điện thoại nóng bên cạnh.";
    } else if (normalized.includes("tuyển dụng") || normalized.includes("thi tuyển") || normalized.includes("công chức")) {
      reply = "Thông tin chỉ tiêu tuyển dụng công chức, viên chức và biên chế các Sở ban ngành được cập nhật hàng tuần tại chuyên mục 'Thông tin tuyển dụng'. Hãy bấm nút truy cập nhanh ở cột bên trái để cập nhật.";
    } else if (normalized.includes("chào") || normalized.includes("hello") || normalized.includes("hi")) {
      reply = "Xin chào! Tôi có thể giúp bạn giải đáp các vấn đề gì liên quan đến dịch vụ tra cứu hành chính công tỉnh Khánh Hòa hôm nay?";
    }

    setTimeout(() => {
      setQaMessages(prev => [
        ...prev,
        {
          id: `qam-bot-${Date.now()}`,
          sender: "Trợ lý ảo",
          text: reply,
          time: "Vừa xong",
          isBot: true
        }
      ]);
    }, 1000);
  };

  return (
    <div className="w-full text-slate-800 relative select-none">
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -20, x: "-50%" }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-blue-600 border border-blue-500 text-white font-bold text-lg py-3 px-6 rounded-2xl shadow-2xl flex items-center gap-2.5 backdrop-blur"
          >
            <CheckCircle size={16} />
            <span>{toast}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. Propaganda / Propaganda Information Section */}
      <div className="text-left mt-10 border-t border-slate-100 pt-10">
        <div className="flex items-center gap-3.5 mb-6">
          <div className="w-12 h-12 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center shrink-0 shadow-sm">
            <Megaphone size={22} className="stroke-[1.8]" />
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-[#1E3A8A] uppercase tracking-tight leading-none text-left">
            Thông tin tuyên truyền
          </h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Phổ biến pháp luật */}
          <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-50 text-blue-700 text-lg font-black rounded-lg uppercase tracking-wider">
                  Phổ biến pháp luật
                </span>
                <span className="text-lg text-slate-400 font-bold">Chuyên mục chính</span>
              </div>
              
              {/* Main Banner story */}
              <div 
                className="group cursor-pointer mb-5 text-left"
                onClick={() => showToast("Đang tải chuyên đề: Tuyên truyền Luật Đất đai 2024 mới...")}
              >
                <div className="h-44 w-full overflow-hidden rounded-xl mb-3 relative shadow-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600" 
                    alt="Luật Đất đai 2024" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                </div>
                <h4 className="text-lg font-black text-[#1E3A8A] group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                  Tuyên truyền, phổ biến Luật Đất đai năm 2024 mới nhất đến tổ chức và nhân dân
                </h4>
                <p className="text-lg text-black font-normal mt-1.5 leading-relaxed line-clamp-3">
                  Tập trung làm rõ các điều khoản đền bù giải phóng mặt bằng rộng rãi, quy định cụ thể quyền sử dụng đất của Việt kiều và thủ tục cấp sổ đỏ thuận tiện hơn.
                </p>
              </div>

              {/* Sub-news separator */}
              <div className="h-px bg-slate-100 my-4" />

              {/* 3 Sub-news list */}
              <div className="space-y-4">
                {[
                  {
                    id: "pp-sub1",
                    title: "Phổ biến Luật An ninh mạng cho thanh niên học đường",
                    desc: "Nâng cao nhận thức phòng ngừa lừa đảo công nghệ cao và bảo vệ dữ liệu cá nhân lành mạnh.",
                    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=150"
                  },
                  {
                    id: "pp-sub2",
                    title: "Ra quân tuyên truyền Luật phòng chống rác thải nhựa đại dương",
                    desc: "Ký cam kết xanh bảo vệ môi trường vịnh Nha Trang tại các xã, phường ven biển trọng điểm.",
                    img: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=150"
                  },
                  {
                    id: "pp-sub3",
                    title: "Tổ chức hội nghị tập huấn Luật Thực hiện dân chủ ở cơ sở năm mới",
                    desc: "Đẩy mạnh công khai minh bạch hoạt động ngân sách, giám sát đầu tư của ban nhân dân thôn bản.",
                    img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=150"
                  }
                ].map((news) => (
                  <div 
                    key={news.id}
                    onClick={() => showToast(`Đang mở bản tin: ${news.title}`)}
                    className="flex gap-4 items-center group cursor-pointer"
                  >
                    <div className="w-24 h-18 md:w-28 md:h-20 rounded-lg overflow-hidden shrink-0 bg-slate-100 shadow-sm border border-slate-100">
                      <img 
                        src={news.img} 
                        alt={news.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="text-left flex flex-col justify-center min-w-0">
                      <h5 className="text-lg font-black text-slate-800 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors mb-1">
                        {news.title}
                      </h5>
                      <p className="text-base text-slate-500 font-bold line-clamp-1">
                        {news.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Cải cách hành chính – Chuyển đổi số */}
          <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-50 text-blue-700 text-lg font-black rounded-lg uppercase tracking-wider">
                  Cải cách & Số hoá
                </span>
                <span className="text-lg text-slate-400 font-bold">Chuyên mục chính</span>
              </div>
              
              {/* Main Banner story */}
              <div 
                className="group cursor-pointer mb-5 text-left"
                onClick={() => showToast("Đang tải chuyên đề: Kết quả Chuyển đổi số 24/7...")}
              >
                <div className="h-44 w-full overflow-hidden rounded-xl mb-3 relative shadow-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600" 
                    alt="Chuyển đổi số Khánh Hòa" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                </div>
                <h4 className="text-lg font-black text-[#1E3A8A] group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                  Chỉ số thụ lý xử lý hồ sơ hành chính công trực tuyến tăng vượt mức 85% toàn tỉnh
                </h4>
                <p className="text-lg text-black font-normal mt-1.5 leading-relaxed line-clamp-3">
                  Không còn cảnh xếp hàng lấy số truyền thống, công nghệ hiện đại đã giúp người dân giao dịch hồ sơ đất đai, hộ tịch chuẩn hóa mức độ 4 vô cùng nhanh gọn.
                </p>
              </div>

              {/* Sub-news separator */}
              <div className="h-px bg-slate-100 my-4" />

              {/* 3 Sub-news list */}
              <div className="space-y-4">
                {[
                  {
                    id: "cs-sub1",
                    title: "Chính thức công bố ứng dụng điện thoại thông minh Công dân số iKhánhHòa",
                    desc: "Tích hợp phản ánh hiện trường, nhận thông báo khẩn cấp, nộp phạt giao thông cực tiện lợi.",
                    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=150"
                  },
                  {
                    id: "cs-sub2",
                    title: "Khánh Hòa áp dụng thí điểm 100% bản sao điện tử chứng thực từ bản chính",
                    desc: "Tiết kiệm tối đa chi phí in ấn hành chính giấy tờ và thời gian đi lại trực tiếp của bà con.",
                    img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=150"
                  },
                  {
                    id: "cs-sub3",
                    title: "Khởi động chiến dịch Tổ công nghệ số cộng đồng gõ cửa từng nhà",
                    desc: "Học tập tận tình các bước đăng ký tài khoản định danh VNeID và khai thác dịch vụ công.",
                    img: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?q=80&w=150"
                  }
                ].map((news) => (
                  <div 
                    key={news.id}
                    onClick={() => showToast(`Đang mở bản tin: ${news.title}`)}
                    className="flex gap-4 items-center group cursor-pointer"
                  >
                    <div className="w-24 h-18 md:w-28 md:h-20 rounded-lg overflow-hidden shrink-0 bg-slate-100 shadow-sm border border-slate-100">
                      <img 
                        src={news.img} 
                        alt={news.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="text-left flex flex-col justify-center min-w-0">
                      <h5 className="text-lg font-black text-slate-800 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors mb-1">
                        {news.title}
                      </h5>
                      <p className="text-base text-slate-500 font-bold line-clamp-1">
                        {news.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 3: Thông tin về chính sách thuế */}
          <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-indigo-50 text-indigo-700 text-lg font-black rounded-lg uppercase tracking-wider">
                  Chính sách thuế
                </span>
                <span className="text-lg text-slate-400 font-bold">Chuyên mục chính</span>
              </div>
              
              {/* Main Banner story */}
              <div 
                className="group cursor-pointer mb-5 text-left"
                onClick={() => showToast("Đang tải chuyên đề: Ưu đãi thuế mới ban hành...")}
              >
                <div className="h-44 w-full overflow-hidden rounded-xl mb-3 relative shadow-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600" 
                    alt="Chính sách thuế" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                </div>
                <h4 className="text-lg font-black text-[#1E3A8A] group-hover:text-indigo-600 transition-colors leading-snug line-clamp-2">
                  Tiếp tục áp dụng việc giảm 2% thuế GTGT và gia hạn hoàn thuế hỗ trợ sản xuất
                </h4>
                <p className="text-lg text-black font-normal mt-1.5 leading-relaxed line-clamp-3">
                  Kịp thời tiếp sức toàn diện cho các thành phần kinh tế hợp tác xã, hộ kinh doanh gia đình phục hồi nhanh, duy trì đà tăng trưởng bền vững qua các mùa.
                </p>
              </div>

              {/* Sub-news separator */}
              <div className="h-px bg-slate-100 my-4" />

              {/* 3 Sub-news list */}
              <div className="space-y-4">
                {[
                  {
                    id: "tx-sub1",
                    title: "Hướng dẫn thực hiện quyết toán thuế thu nhập cá nhân tiện lợi qua Etax Mobile",
                    desc: "Kê khai nhanh chóng tại nhà, hạn chế tối đa các sai sót thông số kỹ thuật kế toán thường gặp.",
                    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=150"
                  },
                  {
                    id: "tx-sub2",
                    title: "Hội nghị đối thoại tháo gỡ vướng mắc hóa đơn điện tử khởi tạo tự động",
                    desc: "Cơ quan thuế hỗ trợ gỡ rối kịp thời hóa đơn bán sỉ lẻ xăng dầu, siêu thị lớn trong quý.",
                    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=150"
                  },
                  {
                    id: "tx-sub3",
                    title: "Chính thức gia hạn thời gian đóng thuế sử dụng đất phi nông nghiệp",
                    desc: "Chương trình giãn nợ thuế đắc lực giúp nông dân phân bổ nguồn đầu tư hạt giống vật nuôi tốt.",
                    img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=150"
                  }
                ].map((news) => (
                  <div 
                    key={news.id}
                    onClick={() => showToast(`Đang mở bản tin: ${news.title}`)}
                    className="flex gap-4 items-center group cursor-pointer"
                  >
                    <div className="w-24 h-18 md:w-28 md:h-20 rounded-lg overflow-hidden shrink-0 bg-slate-100 shadow-sm border border-slate-100">
                      <img 
                        src={news.img} 
                        alt={news.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="text-left flex flex-col justify-center min-w-0">
                      <h5 className="text-lg font-black text-slate-800 line-clamp-2 leading-tight group-hover:text-indigo-600 transition-colors mb-1">
                        {news.title}
                      </h5>
                      <p className="text-base text-slate-500 font-bold line-clamp-1">
                        {news.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TIỆN ÍCH DỊCH VỤ & THÔNG TIN CÔNG KHAI */}
      <div className="mt-14 pt-14 border-t border-slate-200">
        <UtilitiesPortal showSidebar={showUtilitiesSidebar} />
      </div>

      {/* Dynamic National Celebration Banner Carousel */}
      <div className="mt-6 relative overflow-hidden rounded-3xl shadow-md border border-red-700/10 bg-red-900">
        <AnimatePresence mode="wait">
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
                {/* Full Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={cb.img} 
                    alt={cb.title} 
                    className="absolute inset-0 w-full h-full object-cover" 
                    referrerPolicy="no-referrer"
                  />
                  {/* Red gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-950 from-0% via-red-900/50 via-40% to-transparent to-60%" />
                  <div className="absolute inset-0 bg-gradient-to-r from-red-950/80 from-0% via-transparent via-40% to-transparent mix-blend-multiply" />
                </div>

                {/* Text Content */}
                <div className="relative z-10 p-8 md:p-10 flex flex-col justify-center flex-grow max-w-4xl">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute -left-10 -bottom-10 w-60 h-60 bg-yellow-500/10 rounded-full blur-2xl pointer-events-none" />
                  <div className="absolute top-1/2 -translate-y-1/2 right-10 opacity-10 pointer-events-none transform rotate-[15deg] select-none hidden md:block">
                    <Megaphone size={190} className="text-yellow-300 stroke-[1.2]" />
                  </div>

                  <div className="relative z-10">
                    <div className="text-yellow-400 text-base font-black uppercase tracking-wider px-2.5 py-1 rounded-md mb-4 flex items-center gap-1.5 w-fit select-none leading-none bg-black/20 backdrop-blur-sm border border-yellow-500/20">
                      <Sparkles size={13} className="fill-yellow-400" />
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

                <div className="relative z-20 border-t border-white/20 bg-red-950/90 backdrop-blur-md px-8 py-4 flex flex-col sm:flex-row gap-4 justify-between items-center text-lg font-black tracking-wider text-yellow-200 shadow-inner">
                  <span className="uppercase text-yellow-400 hidden md:inline-block tracking-widest text-base">{cb.footerLeft}</span>
                  
                  <div className="flex gap-2.5 items-center my-1 sm:my-0 bg-black/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
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
                        aria-label={`Go to slide ${dotIdx + 1}`}
                      />
                    ))}
                  </div>

                  <span className="flex items-center gap-1 uppercase opacity-90 text-yellow-300/90">
                    <Award size={12} className="text-yellow-300" />
                    {cb.footerRight}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
