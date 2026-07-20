import React from "react";
import { 
  ArrowLeft, 
  Calendar, 
  Eye, 
  Share2, 
  Printer, 
  FileText, 
  Download, 
  CheckCircle, 
  MessageSquare, 
  PhoneCall, 
  ThumbsUp, 
  Bookmark,
  ChevronRight,
  ShieldCheck,
  Building
} from "lucide-react";
import { motion } from "motion/react";

interface NewsDetailProps {
  news: {
    title: string;
    image: string;
    date?: string;
    category?: string;
    content?: string;
    summary?: string;
    author?: string;
  };
  onBack: () => void;
}

export default function NewsDetailPage({ news, onBack }: NewsDetailProps) {
  // Generate some realistic content if none is provided
  const articleContent = news.content || `Bản tin chỉ đạo điều hành chính thức về việc "${news.title}" được ban hành và ký duyệt bởi lãnh đạo có thẩm quyền của tỉnh Khánh Hòa. 

Để đáp ứng kịp thời các mục tiêu phát triển kinh tế - xã hội bền vững và cải cách hành chính số, Ủy ban nhân dân tỉnh yêu cầu Giám đốc các Sở, Ban, ngành thuộc tỉnh, Chủ tịch Ủy ban nhân dân các huyện, thị xã, thành phố tập trung chỉ đạo, triển khai thực hiện đồng bộ các giải pháp đột phá. 

Trong đó, chú trọng nâng cao hiệu suất làm việc, tăng cường phối hợp liên ngành, đẩy mạnh ứng dụng công nghệ thông tin vào công tác quản lý và vận hành công việc. Công tác giám sát, đánh giá định kỳ sẽ được thiết lập chặt chẽ nhằm bảo đảm mọi kế hoạch được hoàn thành đúng thời hạn cam kết với tinh thần trách nhiệm cao nhất.`;

  const publishDate = news.date || "19/05/2026";
  const categoryName = news.category || "Chỉ đạo & Điều hành";
  const summaryText = news.summary || `Triển khai nghiêm túc, quyết liệt các chỉ đạo điều hành của Ủy ban nhân dân tỉnh Khánh Hòa, tăng cường năng lực liên ngành, tối ưu hóa nguồn lực công nghệ để bảo đảm hiệu quả tối đa.`;

  // Random related news for the sidebar
  const relatedArticles = [
    {
      title: "Khánh Hòa thúc đẩy phát triển hạ tầng đô thị thông minh giai đoạn mới",
      date: "18/05/2026",
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=200"
    },
    {
      title: "Ủy ban nhân dân tỉnh sơ kết công tác cải cách thủ tục hành chính quý II",
      date: "17/05/2026",
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=200"
    },
    {
      title: "Tăng cường quản lý quy hoạch đất đai và bảo vệ tài nguyên môi trường",
      date: "16/05/2026",
      img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=200"
    }
  ];

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Đã sao chép liên kết bài viết vào bộ nhớ tạm!");
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="max-w-7xl mx-auto px-4 py-8 text-left"
    >
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-slate-500 font-semibold mb-6 text-base select-none">
        <span className="hover:text-red-600 cursor-pointer" onClick={onBack}>Trang chủ</span>
        <ChevronRight size={14} className="text-slate-300" />
        <span className="hover:text-red-600 cursor-pointer" onClick={onBack}>Chỉ đạo điều hành</span>
        <ChevronRight size={14} className="text-slate-300" />
        <span className="text-red-700 truncate max-w-xs md:max-w-md">{news.title}</span>
      </div>

      {/* Back Button */}
      <button 
        onClick={onBack}
        className="flex items-center gap-2.5 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 font-bold rounded-lg transition-all mb-8 shadow-sm cursor-pointer border border-slate-200/50"
      >
        <ArrowLeft size={18} /> Quay lại trang chủ
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: News Detail content */}
        <div className="lg:col-span-8 bg-white p-6 md:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-100/40">
          
          {/* Category Tag */}
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-red-50 text-red-700 border border-red-200/50 text-base font-extrabold rounded-full tracking-wide uppercase mb-5">
            <ShieldCheck size={14} className="text-red-600" />
            {categoryName}
          </span>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1E3A8A] leading-tight mb-5 tracking-tight">
            {news.title}
          </h1>

          {/* Metadata Row */}
          <div className="flex flex-wrap gap-5 items-center justify-between pb-6 border-b border-slate-100 text-slate-500 font-semibold mb-8 text-base">
            <div className="flex flex-wrap items-center gap-5">
              <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-md border border-slate-100">
                <Calendar size={15} className="text-red-500" />
                {publishDate}
              </span>
              <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-md border border-slate-100">
                <Eye size={15} className="text-blue-500" />
                2,485 lượt xem
              </span>
              <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1 rounded-md border border-slate-100 text-[#1E3A8A]">
                <Building size={15} className="text-blue-500" />
                UBND Tỉnh Khánh Hòa
              </span>
            </div>

            {/* Quick Actions Bar */}
            <div className="flex items-center gap-2">
              <button 
                onClick={handlePrint}
                title="In bài viết"
                className="p-2.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors border border-slate-150 cursor-pointer"
              >
                <Printer size={18} />
              </button>
              <button 
                onClick={handleShare}
                title="Sao chép liên kết"
                className="p-2.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors border border-slate-150 cursor-pointer"
              >
                <Share2 size={18} />
              </button>
            </div>
          </div>

          {/* Feature Image */}
          <div className="w-full h-[320px] md:h-[450px] rounded-2xl overflow-hidden border border-slate-200/60 shadow-md mb-8">
            <img 
              src={news.image} 
              alt={news.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Summary Lead Block */}
          <div className="p-6 bg-[#fbfbfb] border-l-4 border-red-600 rounded-r-xl mb-8 shadow-xs">
            <p className="text-slate-800 font-extrabold text-lg md:text-xl leading-relaxed italic">
              "{summaryText}"
            </p>
          </div>

          {/* Rich Content Area */}
          <div className="text-slate-700 text-lg md:text-xl leading-relaxed space-y-6 font-medium">
            <p>
              Triển khai nghiêm túc và kịp thời, đúng theo các định hướng của Bộ Chính trị và Chính phủ. Ủy ban nhân dân tỉnh Khánh Hòa ban hành văn bản chỉ đạo tác nghiệp, yêu cầu các cơ quan, đơn vị có liên quan tập trung mọi nguồn lực, tăng tốc rà soát các vướng mắc pháp lý và hạ tầng kỹ thuật.
            </p>
            <p>
              {articleContent}
            </p>

            {/* Highlighted key takeaway box */}
            <div className="p-6 my-8 border border-amber-200 bg-amber-50/20 rounded-2xl flex gap-4 items-start shadow-xs">
              <FileText className="text-amber-600 shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-extrabold text-amber-900 text-lg mb-1">Điểm mấu chốt cần lưu ý:</h4>
                <p className="text-amber-800 text-base md:text-lg font-medium leading-relaxed">
                  Các sở ban ngành có trách nhiệm hoàn tất phương án báo cáo gửi về Văn phòng UBND Tỉnh trước ngày 15 tháng sau. Mọi sự chậm trễ sẽ bị xem xét trách nhiệm người đứng đầu đơn vị trước Chủ tịch Ủy ban nhân dân tỉnh.
                </p>
              </div>
            </div>

            <p>
              UBND tỉnh cũng lưu ý việc kết hợp đồng bộ giữa phát triển hạ tầng và số hóa quy trình quản lý hành chính công. Đây được xem là khâu đột phá chiến lược để đưa chỉ số hiệu quả quản trị và hành chính công cấp tỉnh (PAPI) cũng như chỉ số cải cách hành chính (PAR INDEX) của tỉnh Khánh Hòa lọt vào nhóm dẫn đầu cả nước trong những năm tới.
            </p>
          </div>

          {/* Document Sign-off / Signature Area */}
          <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-start justify-between gap-6 text-base text-slate-500 font-semibold bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
            <div>
              <p className="mb-1">Nơi nhận:</p>
              <ul className="list-disc pl-4 space-y-1 text-slate-600 text-base md:text-base">
                <li>Thường trực Tỉnh ủy (để b/c)</li>
                <li>Thường trực HĐND tỉnh (để b/c)</li>
                <li>Chủ tịch, các PCT UBND tỉnh</li>
                <li>Các sở, ban, ngành, đoàn thể tỉnh</li>
                <li>Lưu: VT, TH.</li>
              </ul>
            </div>
            <div className="text-right self-end md:self-auto min-w-[200px]">
              <p className="uppercase font-black text-[#1E3A8A] text-lg mb-1">K/T CHỦ TỊCH</p>
              <p className="uppercase font-black text-red-700 text-lg mb-12">PHÓ CHỦ TỊCH THƯỜNG TRỰC</p>
              <p className="font-extrabold text-slate-900 text-lg">Nguyễn Tấn Tuân</p>
              <p className="text-base text-slate-500 mt-1">(Đã ký đóng dấu đỏ văn bản số 284/QĐ-UBND)</p>
            </div>
          </div>

          {/* Attached Files Section (Highly realistic for Vietnamese Gov Sites) */}
          <div className="mt-10 border border-slate-200 rounded-2xl overflow-hidden shadow-xs bg-white">
            <div className="bg-slate-50 px-5 py-4 border-b border-slate-200 flex items-center justify-between">
              <span className="font-extrabold text-slate-800 text-base md:text-lg flex items-center gap-2">
                <Download size={18} className="text-red-600" /> Tài liệu đính kèm chính thức (PDF)
              </span>
              <span className="text-base text-slate-400 font-bold">Dung lượng tổng: 2.4 MB</span>
            </div>
            <div className="p-4 divide-y divide-slate-100">
              <div className="py-3 flex items-center justify-between text-base font-semibold">
                <div className="flex items-center gap-3 min-w-0">
                  <FileText className="text-red-500 shrink-0" size={20} />
                  <span className="text-slate-700 truncate hover:text-[#1E3A8A] cursor-pointer">Van-ban-chi-dao-so-284-QD-UBND.pdf</span>
                </div>
                <button className="flex items-center gap-1.5 px-3 py-1 bg-[#1E3A8A] hover:bg-blue-700 text-white rounded-lg text-base font-bold transition-all shadow-xs cursor-pointer">
                  Tải về <Download size={12} />
                </button>
              </div>
              <div className="py-3 flex items-center justify-between text-base font-semibold">
                <div className="flex items-center gap-3 min-w-0">
                  <FileText className="text-emerald-500 shrink-0" size={20} />
                  <span className="text-slate-700 truncate hover:text-[#1E3A8A] cursor-pointer">Phu-luc-huong-dan-chi-tiet-dinh-kem.pdf</span>
                </div>
                <button className="flex items-center gap-1.5 px-3 py-1 bg-[#1E3A8A] hover:bg-blue-700 text-white rounded-lg text-base font-bold transition-all shadow-xs cursor-pointer">
                  Tải về <Download size={12} />
                </button>
              </div>
            </div>
          </div>

          {/* Feedback/Rating Module */}
          <div className="mt-10 p-6 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <h4 className="font-extrabold text-slate-800 text-base md:text-lg mb-1">Thông tin này có hữu ích đối với bạn không?</h4>
              <p className="text-slate-500 text-base md:text-base font-semibold">Ý kiến của bạn sẽ giúp chúng tôi hoàn thiện chất lượng cổng thông tin điện tử.</p>
            </div>
            <div className="flex gap-2 shrink-0">
              <button className="flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-xl text-base font-bold transition-all cursor-pointer shadow-xs">
                <ThumbsUp size={14} className="text-green-500" /> Hữu ích
              </button>
              <button className="flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-xl text-base font-bold transition-all cursor-pointer shadow-xs">
                <Bookmark size={14} className="text-blue-500" /> Lưu lại
              </button>
            </div>
          </div>

        </div>

        {/* Right Column: Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Related Articles */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-lg">
            <h3 className="text-lg md:text-xl font-black text-[#1E3A8A] uppercase tracking-tight pb-3 border-b border-slate-100 mb-5 flex items-center gap-2">
              <FileText size={18} className="text-red-600" /> Tin liên quan
            </h3>
            <div className="space-y-4">
              {relatedArticles.map((item, idx) => (
                <div 
                  key={idx} 
                  className="group flex gap-3 cursor-pointer p-1 rounded-xl hover:bg-slate-50 transition-all"
                  onClick={() => onBack()} // return to list to view or refresh with new article
                >
                  <div className="w-20 h-14 rounded-lg overflow-hidden shrink-0 border border-slate-150 shadow-xs">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base font-extrabold text-slate-800 leading-snug group-hover:text-red-700 transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                    <span className="text-base font-bold text-slate-400 mt-1 block flex items-center gap-1">
                      <Calendar size={10} /> {item.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hotline Portal Box */}
          <div className="p-6 bg-gradient-to-br from-[#1E3A8A] to-blue-900 rounded-3xl text-white shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-10 -translate-y-10" />
            <h3 className="font-black text-lg md:text-xl uppercase tracking-tight text-yellow-300 mb-2 flex items-center gap-2">
              <PhoneCall size={18} /> Phản ánh kiến nghị
            </h3>
            <p className="text-slate-100 text-base md:text-base font-semibold leading-relaxed mb-5">
              Hệ thống tiếp nhận phản ánh, kiến nghị của công dân và tổ chức liên quan đến hoạt động chỉ đạo, điều hành của cơ quan hành chính nhà nước.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl border border-white/10">
                <PhoneCall size={18} className="text-yellow-300 animate-bounce" />
                <div>
                  <p className="text-base text-blue-200 font-bold">Đường dây nóng hỗ trợ:</p>
                  <p className="font-extrabold text-white text-base">0258.3822.468</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl border border-white/10">
                <MessageSquare size={18} className="text-yellow-300" />
                <div>
                  <p className="text-base text-blue-200 font-bold">Gửi thư trực tuyến:</p>
                  <p className="font-extrabold text-white text-base">ubnd@khanhhoa.gov.vn</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
