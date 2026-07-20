import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  FileText, 
  Send, 
  Scale, 
  Globe, 
  Clock, 
  MessageSquare,
  CheckCircle,
  ChevronRight
} from "lucide-react";

export default function DocumentSystemPortal() {
  const [draftDocSelected, setDraftDocSelected] = useState("Dự thảo kiến trúc cảnh quan biển Trần Phú");
  const [draftName, setDraftName] = useState("");
  const [draftContact, setDraftContact] = useState("");
  const [draftContent, setDraftContent] = useState("");
  const [toast, setToast] = useState<string | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [mapMode, setMapMode] = useState<'bao-quat' | 'can-canh'>('bao-quat');

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const renderDocImage = (doc: { num: string; img: string }, defaultColor: "red" | "blue" | "amber" | "emerald") => {
    if (imageErrors[doc.num]) {
      let abbr = "VB";
      if (doc.num.includes("/CĐ-")) abbr = "CĐ";
      else if (doc.num.includes("/CT-")) abbr = "CT";
      else if (doc.num.includes("/QĐ-")) abbr = "QĐ";
      else if (doc.num.includes("/KH-")) abbr = "KH";
      else if (doc.num.includes("/TB-")) abbr = "TB";
      else if (doc.num.includes("/KL-")) abbr = "KL";
      else if (doc.num.includes("/HDLN")) abbr = "HD";
      else if (doc.num.includes("/TTr-")) abbr = "TTr";
      else if (doc.num.includes("/HD-")) abbr = "HD";
      else if (doc.num.includes("/ĐA-")) abbr = "ĐA";
      else if (doc.num.includes("/TC-")) abbr = "TC";
      else {
        const parts = doc.num.split('/');
        if (parts.length > 1) {
          const subParts = parts[1].split('-');
          if (subParts.length > 0 && subParts[0].length <= 4) {
            abbr = subParts[0];
          }
        }
      }

      let colorClass = "bg-blue-50 text-[#1E3A8A] border-blue-200/60";
      if (defaultColor === "red") colorClass = "bg-red-50 text-red-700 border-red-200/60";
      else if (defaultColor === "amber") colorClass = "bg-amber-50 text-amber-700 border-amber-200/60";
      else if (defaultColor === "emerald") colorClass = "bg-emerald-50 text-emerald-700 border-emerald-200/60";

      return (
        <div className={`w-full h-full border flex flex-col items-center justify-center relative shadow-sm ${colorClass} shrink-0`}>
          <span className="text-lg md:text-[16px] font-black tracking-tight leading-none uppercase mb-0.5">
            {abbr}
          </span>
          <span className="text-base md:text-lg font-bold opacity-75 uppercase tracking-wider font-mono">
            VĂN BẢN
          </span>
          <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-current opacity-10 rounded-bl-md"></div>
        </div>
      );
    }

    return (
      <img 
        src={doc.img} 
        alt={doc.num} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        referrerPolicy="no-referrer"
        onError={() => {
          setImageErrors(prev => ({ ...prev, [doc.num]: true }));
        }}
      />
    );
  };

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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 text-left">
        {/* Cột lớn: Hệ thống văn bản (Khối riêng biệt có bo viền, đổ bóng nhẹ) */}
        <div className="lg:col-span-2 bg-white border border-slate-200/80 rounded-[32px] p-6 md:p-8 shadow-sm shadow-slate-100/10 text-left space-y-12">
          {/* Header section with blue circular icon inside the box */}
          <div id="document-system-header" className="flex items-center gap-3.5 text-left pb-6 border-b border-slate-200/60 pt-2">
            <div className="w-12 h-12 rounded-full bg-[#1E3A8A] flex items-center justify-center shrink-0 shadow-md shadow-blue-900/10">
              <FileText size={22} className="text-white stroke-[1.8]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[#1E3A8A] tracking-tight uppercase leading-none text-left">
              HỆ THỐNG VĂN BẢN
            </h2>
          </div>
          
          <div className="space-y-12">
          {/* CATEGORY 1: VĂN BẢN CHỈ ĐẠO ĐIỀU HÀNH */}
          <div id="dieu-hanh-section" className="text-left">
            <div className="border-b border-slate-100 pb-3 mb-6 flex items-center justify-between">
              <h3 className="text-2xl md:text-3xl font-black text-[#1E3A8A] tracking-tight text-left">
                Văn bản chỉ đạo điều hành
              </h3>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => showToast("Đang tải dữ liệu tất cả văn bản chỉ đạo điều hành...")}
                  className="text-lg font-bold text-[#1E3A8A] hover:text-blue-800 flex items-center gap-1 transition-colors bg-transparent border-0 cursor-pointer"
                >
                  Xem toàn bộ danh mục →
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  num: "185/CĐ-UBND",
                  date: "24/05/2026",
                  title: "Quyết định thực hiện các giải pháp thúc đẩy đầu tư công và phát triển hạ tầng trọng điểm",
                  img: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=300",
                },
                {
                  num: "42/CT-UBND",
                  date: "23/05/2026",
                  title: "Chỉ thị triển khai chiến dịch cao điểm giải phóng mặt bằng trục cao tốc Vân Phong - Nha Trang",
                  img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=300",
                },
                {
                  num: "1251/QĐ-UBND",
                  date: "21/05/2026",
                  title: "Quyết định phê duyệt chiến lược điều chỉnh quy hoạch toàn diện kinh tế biển đảo bền vững",
                  img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=300",
                },
                {
                  num: "98/KH-UBND",
                  date: "19/05/2026",
                  title: "Kế hoạch khắc phục và xử lý ô nhiễm hành lang bờ biển dài bằng công nghệ sinh học",
                  img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=300",
                },
                {
                  num: "180/CĐ-UBND",
                  date: "18/05/2026",
                  title: "Công điện khẩn trương chủ động phòng ngừa, xử lý sụt lún địa tầng khu vực ven sông",
                  img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=300",
                },
                {
                  num: "984/QĐ-UBND",
                  date: "15/05/2026",
                  title: "Quyết định kiện toàn lực lượng liên ngành đánh giá nỗ lực cải thiện chỉ số năng lực cạnh tranh",
                  img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=300",
                },
              ].map((doc, idx) => (
                <div 
                  key={idx}
                  onClick={() => showToast(`Đang truy xuất văn bản số: ${doc.num}`)}
                  className="flex gap-4 items-start cursor-pointer group text-left transition-all duration-200"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden shrink-0 shadow-sm bg-slate-50 border border-slate-100 relative">
                    {renderDocImage(doc, "blue")}
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <span className="text-lg font-normal text-black block mb-1 uppercase tracking-wider font-mono">
                      {doc.num} • {doc.date}
                    </span>
                    <h4 className="text-lg font-semibold text-slate-800 leading-snug line-clamp-2 group-hover:text-[#1E3A8A] transition-colors text-left">
                      {doc.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-slate-200/60" />

          {/* CATEGORY 2: THÔNG BÁO HÀNH CHÍNH & TUYỂN DỤNG */}
          <div id="hanh-chinh-tuyen-dung-section" className="text-left">
            <div className="border-b border-slate-100 pb-3 mb-6 flex items-center justify-between">
              <h3 className="text-2xl md:text-3xl font-black text-[#1E3A8A] tracking-tight text-left">
                Thông báo hành chính & tuyển dụng
              </h3>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => showToast("Đang tải dữ liệu thông báo hành chính và tuyển dụng...")}
                  className="text-lg font-bold text-[#1E3A8A] hover:text-blue-800 flex items-center gap-1 transition-colors bg-transparent border-0 cursor-pointer"
                >
                  Xem toàn bộ danh mục →
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  num: "79/TB-SNV",
                  date: "22/05/2026",
                  title: "Thông báo tuyển dụng công chức, viên chức khối hành chính tư pháp tỉnh Khánh Hòa năm 2026",
                  img: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=300",
                },
                {
                  num: "112/KL-TTR",
                  date: "21/05/2026",
                  title: "Kết luận thanh tra toàn diện công tác đền bù và tái định cư quỹ đất dự án đô thị mới",
                  img: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=300",
                },
                {
                  num: "85/TB-SGT",
                  date: "20/05/2026",
                  title: "Thông báo tạm ngừng điều tiết phương tiện cơ giới đường thủy nội địa qua luồng sông Cái",
                  img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=300",
                },
                {
                  num: "14/TB-BQL",
                  date: "18/05/2026",
                  title: "Thông báo mời thầu tư vấn quốc tế xây dựng khu hậu cần kho bãi logistics liên hợp cực Nam",
                  img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=300",
                },
                {
                  num: "05/TC-HĐND",
                  date: "16/05/2026",
                  title: "Thông cáo báo chí nội dung chi tiết kỳ họp bất thường HĐND phê duyệt ngân sách trung hạn",
                  img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=300",
                },
                {
                  num: "61/TB-STNMT",
                  date: "14/05/2026",
                  title: "Thông báo kiểm tra trực diện mức độ xử lý chất thải đạt chuẩn của cụm khu công nghiệp Trảng É",
                  img: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=300",
                },
              ].map((doc, idx) => (
                <div 
                  key={idx}
                  onClick={() => showToast(`Đang truy xuất thông báo số: ${doc.num}`)}
                  className="flex gap-4 items-start cursor-pointer group text-left transition-all duration-200"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden shrink-0 shadow-sm bg-slate-50 border border-slate-100 relative">
                    {renderDocImage(doc, "blue")}
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <span className="text-lg font-normal text-black block mb-1 uppercase tracking-wider font-mono">
                      {doc.num} • {doc.date}
                    </span>
                    <h4 className="text-lg font-semibold text-slate-800 leading-snug line-clamp-2 group-hover:text-blue-700 transition-colors text-left">
                      {doc.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-slate-200/60" />

          {/* CATEGORY 3: TÀI LIỆU CHUYÊN ĐỀ & VĂN BẢN KHÁC */}
          <div id="tai-lieu-chuyen-de-section" className="text-left">
            <div className="border-b border-slate-100 pb-3 mb-6 flex items-center justify-between">
              <h3 className="text-2xl md:text-3xl font-black text-[#1E3A8A] tracking-tight text-left">
                Tài liệu chuyên đề & văn bản khác
              </h3>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => showToast("Đang tải dữ liệu tài liệu chuyên đề khác...")}
                  className="text-lg font-bold text-[#1E3A8A] hover:text-blue-800 flex items-center gap-1 transition-colors bg-transparent border-0 cursor-pointer"
                >
                  Xem toàn bộ danh mục →
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  num: "342/KH-UBND",
                  date: "19/05/2026",
                  title: "Kế hoạch nâng thứ hạng chỉ số cải cách hành chính (PAR INDEX) và thông qua chỉ số hỗ trợ nhân dân",
                  img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=300",
                },
                {
                  num: "11/HDLN",
                  date: "18/05/2026",
                  title: "Hướng dẫn liên ngành làm hồ sơ thủ tục hưởng chế độ an sinh xã hội bưu chính công ích",
                  img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=300",
                },
                {
                  num: "105/TTr-UBND",
                  date: "17/05/2026",
                  title: "Tờ trình gửi Hội đồng thẩm định Trung ương về đề xuất xin cấp phép Khu kinh tế mở Vân Phong",
                  img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=300",
                },
                {
                  num: "77/KH-CA",
                  date: "15/05/2026",
                  title: "Kế hoạch phối hợp công an cấp xã rà soát, vận động thu thập dữ liệu sinh trắc học căn cước mới",
                  img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=300",
                },
                {
                  num: "19/HD-SST",
                  date: "12/05/2026",
                  title: "Hướng dẫn chuyển giao sáng chế kỹ thuật số giảm ô nhiễm xanh cho cộng đồng dân cư đô thị",
                  img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=300",
                },
                {
                  num: "145/ĐA-SGDĐT",
                  date: "10/05/2026",
                  title: "Đề án lắp đặt trang bị phòng máy, truyền dẫn cáp quang học đường tại các xã đảo xa bờ",
                  img: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=300",
                },
              ].map((doc, idx) => (
                <div 
                  key={idx}
                  onClick={() => showToast(`Đang truy xuất tài liệu số: ${doc.num}`)}
                  className="flex gap-4 items-start cursor-pointer group text-left transition-all duration-200"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden shrink-0 shadow-sm bg-slate-50 border border-slate-100 relative">
                    {renderDocImage(doc, "emerald")}
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <span className="text-lg font-normal text-black block mb-1 uppercase tracking-wider font-mono">
                      {doc.num} • {doc.date}
                    </span>
                    <h4 className="text-lg font-semibold text-slate-800 leading-snug line-clamp-2 group-hover:text-blue-700 transition-colors text-left">
                      {doc.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>

        {/* Cột nhỏ: Banners quảng cáo nằm ngoài khối Hệ thống văn bản */}
        <div className="lg:col-span-1 flex flex-col gap-4 lg:gap-5 w-full h-full">
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
                    className="relative flex-1 min-h-[110px] xl:min-h-[120px] rounded-[24px] overflow-hidden group cursor-pointer border border-slate-200/80 hover:border-blue-600/30 hover:shadow-xl transition-all duration-300 w-full"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
                      alt="Công khai ngân sách"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-transparent group-hover:from-blue-900/90 group-hover:to-transparent transition-all duration-500"></div>
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
  );
}
