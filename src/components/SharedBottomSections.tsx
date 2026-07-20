import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
const khanhHoaMap = "/ban-do-hanh-chinh-tinh-khanh-hoa-kho-lon.jpg";
import {
  Briefcase,
  ChevronRight,
  ChevronLeft,
  Map,
  BarChart3,
  Facebook,
  Youtube,
  Twitter,
  ChevronDown,
  MessageSquare,
  Check,
  Store,
  Megaphone,
  Globe,
  Phone,
  ExternalLink,
  Building2,
  HelpCircle,
  Send,
  History,
  Search,
  X
} from "lucide-react";

interface Enterprise {
  id: string;
  name: string;
  shortName: string;
  logoType: 'viettel' | 'vnpt' | 'vilian' | 'yensao' | 'cangnhatrang' | 'ocop' | 'shinec' | 'succeed';
  description: string;
  address: string;
  phone: string;
  website: string;
  industry: string;
}

const ENTERPRISES: Enterprise[] = [
  {
    id: "viettel",
    name: "Tập đoàn Công nghiệp - Viễn thông Quân đội (Viettel) - Chi nhánh Khánh Hòa",
    shortName: "Viettel Khánh Hòa",
    logoType: "viettel",
    description: "Viettel Khánh Hòa là đại diện của Tập đoàn Công nghiệp - Viễn thông Quân đội tại tỉnh Khánh Hòa, giữ vai trò chủ lực, tiên phong trong phát triển hạ tầng viễn thông và đi đầu trong công cuộc chuyển đổi số toàn diện trên toàn địa bàn tỉnh.",
    address: "Tòa nhà Viettel, Số 9 Võ Nguyên Giáp, Phước Hải, Nha Trang, Khánh Hòa",
    phone: "0258 6250 178",
    website: "https://viettel.vn",
    industry: "Viễn thông & Công nghệ"
  },
  {
    id: "vnpt",
    name: "Viễn thông Khánh Hòa (VNPT Khánh Hòa)",
    shortName: "VNPT Khánh Hòa",
    logoType: "vnpt",
    description: "Đơn vị cung cấp dịch vụ Viễn thông - Công nghệ thông tin hàng đầu tại Khánh Hòa. Tiên phong cung cấp các giải pháp Chính quyền điện tử, đô thị thông minh, giáo dục số, y tế số và hạ tầng kết nối băng rộng siêu tốc.",
    address: "Số 50 Lê Thánh Tôn, Lộc Thọ, Nha Trang, Khánh Hòa",
    phone: "0258 3822 099",
    website: "https://khanhhoa.vnpt.vn",
    industry: "Viễn thông & Giải pháp Số"
  },
  {
    id: "vilian",
    name: "Công ty TNHH Thiết kế & Tư vấn Thương hiệu ViLiAn",
    shortName: "ViLiAn Agency",
    logoType: "vilian",
    description: "Đơn vị sáng tạo và tư vấn chiến lược thương hiệu toàn diện, chuyên nghiệp. ViLiAn đồng hành cùng các doanh nghiệp địa phương kiến tạo bản sắc thương hiệu độc bản, nâng tầm vị thế và giá trị cạnh tranh trên thị trường.",
    address: "Số 15 Trương Định, Phước Tiến, Nha Trang, Khánh Hòa",
    phone: "0905 123 456",
    website: "https://vilianbrand.com",
    industry: "Tư vấn & Thiết kế"
  },
  {
    id: "yensao",
    name: "Công ty TNHH Nhà nước MTV Yến sào Khánh Hòa",
    shortName: "Yến Sào Khánh Hòa",
    logoType: "yensao",
    description: "Doanh nghiệp nhà nước giữ vai trò chủ chốt trong quản lý, bảo tồn, khai thác và chế biến nguồn tài nguyên Yến sào quý hiếm. Thương hiệu Yến sào Khánh Hòa tự hào khẳng định chất lượng thượng hạng trong và ngoài nước.",
    address: "Số 248 Thống Nhất, Phương Sơn, Nha Trang, Khánh Hòa",
    phone: "0258 3822 474",
    website: "https://yensaokhanhhoa.com.vn",
    industry: "Chế biến Thực phẩm"
  },
  {
    id: "cangnhatrang",
    name: "Công ty Cổ phần Cảng Nha Trang",
    shortName: "Cảng Nha Trang",
    logoType: "cangnhatrang",
    description: "Cửa ngõ hàng hải quan trọng, chuyển hướng phục vụ du lịch biển quốc tế đẳng cấp cao. Nơi đón tiếp hàng triệu du khách từ các siêu du thuyền 5 sao xuyên lục địa sang trọng ghé thăm vịnh Nha Trang xinh đẹp.",
    address: "Số 5 Trần Phú, Vĩnh Nguyên, Nha Trang, Khánh Hòa",
    phone: "0258 3590 011",
    website: "http://nhatrangport.com.vn",
    industry: "Dịch vụ Cảng biển & Du lịch"
  },
  {
    id: "ocop",
    name: "Liên minh Hợp tác xã & Chuỗi sản phẩm OCOP Khánh Hòa",
    shortName: "OCOP Khánh Hòa",
    logoType: "ocop",
    description: "Hệ thống kết nối, hỗ trợ kỹ thuật và xúc tiến thương mại cho các sản phẩm nông, lâm, thủy sản chất lượng cao đạt chứng nhận OCOP quốc gia, mang nét đặc trưng vùng miền và nâng cao thu nhập cho cư dân nông nghiệp Khánh Hòa.",
    address: "Số 12 Hoàng Hoa Thám, Xương Huân, Nha Trang, Khánh Hòa",
    phone: "0258 3821 245",
    website: "http://ocop.gov.vn",
    industry: "Xúc tiến Thương mại"
  },
  {
    id: "shinec",
    name: "Công ty Cổ phần Shinec - Chủ đầu tư Khu công nghiệp sinh thái",
    shortName: "SHINEC",
    logoType: "shinec",
    description: "Nhà đầu tư phát triển hạ tầng khu công nghiệp mô hình sinh thái thân thiện với môi trường, thúc đẩy kinh tế tuần hoàn bền vững, thu hút dòng vốn FDI xanh chất lượng cao vào địa bàn khu vực miền Trung.",
    address: "Khu đô thị mới Lê Hồng Phong, Phước Hải, Nha Trang, Khánh Hòa",
    phone: "0258 3888 999",
    website: "https://shinec.com.vn",
    industry: "Bất động sản Công nghiệp"
  },
  {
    id: "succeed",
    name: "Trung tâm Xúc tiến Đầu tư, Thương mại & Du lịch Khánh Hòa",
    shortName: "Succeed Together",
    logoType: "succeed",
    description: "Cơ quan hỗ trợ chính phủ đồng hành cùng doanh nghiệp thúc đẩy liên kết, xúc tiến thu hút đầu tư, tìm kiếm thị trường tiêu thụ nông hải sản trong nước và quốc tế, định hướng 'Cùng đồng hành - Cùng phát triển'.",
    address: "Số 40 Trần Phú, Lộc Thọ, Nha Trang, Khánh Hòa",
    phone: "0258 3528 888",
    website: "https://ipa.khanhhoa.gov.vn",
    industry: "Xúc tiến Đầu tư & Liên kết"
  }
];

interface SharedBottomSectionsProps {
  onMapClick?: () => void;
  hideMap?: boolean;
}

function CustomSelect({ placeholder, options }: { placeholder: string, options: {value: string, label: string}[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectedLabel = options.find((o) => o.value === selected)?.label || placeholder;

  return (
    <div className="relative" ref={ref}>
      <button 
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-slate-50 border p-4 pr-10 rounded-xl text-left text-lg font-bold transition-colors focus:outline-none ${isOpen ? "border-[#1E3A8A]/30 ring-2 ring-[#1E3A8A]/10 bg-white" : "border-slate-100 hover:bg-slate-100"}`}
      >
        <span className={selected ? "text-slate-900 font-bold" : "text-slate-400 font-medium"}>{selectedLabel}</span>
        <ChevronDown size={16} className={`absolute right-4 top-1/2 -translate-y-1/2 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#1E3A8A]" : "text-slate-400"}`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-[calc(100%+8px)] left-0 right-0 bg-white rounded-xl shadow-[0_12px_40px_-10px_rgba(30,58,138,0.2)] border border-slate-100 z-50 overflow-hidden py-1.5 max-h-[400px] overflow-y-auto custom-scrollbar animate-in fade-in slide-in-from-top-2 duration-150">
          <button 
            onClick={() => { setSelected(null); setIsOpen(false); }}
            className={`w-full text-left px-5 py-3 text-lg transition-colors border-b border-slate-50 ${!selected ? "font-bold text-slate-400 bg-slate-50/50" : "font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-800"}`}
          >
            {placeholder}
          </button>
          
          {options.map((opt) => {
            const isSelected = selected === opt.value;
            return (
              <button
                key={opt.value}
                onClick={() => { setSelected(opt.value); setIsOpen(false); }}
                className={`w-full text-left px-5 py-2.5 text-lg transition-colors flex items-center justify-between ${isSelected ? "bg-[#1E3A8A] text-white font-bold" : "text-slate-700 hover:bg-slate-50 hover:text-[#1E3A8A] font-medium"}`}
              >
                <span>{opt.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function SharedBottomSections({ onMapClick, hideMap }: SharedBottomSectionsProps = {}) {
  const [mapFitMode, setMapFitMode] = useState<"contain" | "cover">("contain");
  const MAP_MIRRORS = [
    khanhHoaMap,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Vietnam_Khanh_Hoa_map.png/800px-Vietnam_Khanh_Hoa_map.png"
  ];
  const [mapImgSrc, setMapImgSrc] = useState(MAP_MIRRORS[0]);
  const handleMapImgError = () => {
    const currentIndex = MAP_MIRRORS.indexOf(mapImgSrc);
    if (currentIndex < MAP_MIRRORS.length - 1) {
      setMapImgSrc(MAP_MIRRORS[currentIndex + 1]);
    }
  };

  // Enterprise connection state handlers
  const [selectedEnterpriseIdx, setSelectedEnterpriseIdx] = useState(0);

  const handlePrevEnterprise = () => {
    setSelectedEnterpriseIdx((prev) => 
      prev === 0 ? ENTERPRISES.length - 1 : prev - 1
    );
  };

  const handleNextEnterprise = () => {
    setSelectedEnterpriseIdx((prev) => 
      (prev + 1) % ENTERPRISES.length
    );
  };

  const selectedEnterprise = ENTERPRISES[selectedEnterpriseIdx];

  // FAQ state handlers
  const [activeFaqId, setActiveFaqId] = useState<string | null>("faq-1");
  const [isFaqModalOpen, setIsFaqModalOpen] = useState(false);
  const [faqName, setFaqName] = useState("");
  const [faqEmail, setFaqEmail] = useState("");
  const [faqDept, setFaqDept] = useState("Văn phòng UBND tỉnh Khánh Hòa");
  const [faqContent, setFaqContent] = useState("");
  const [faqSubmitted, setFaqSubmitted] = useState(false);

  // Q&A History Modal state
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const [selectedPastFaqId, setSelectedPastFaqId] = useState<string>("past-1");
  const [historySearchQuery, setHistorySearchQuery] = useState("");
  const [historySelectedField, setHistorySelectedField] = useState("Tất cả");
  const historyCategoryContainerRef = useRef<HTMLDivElement>(null);

  const scrollHistoryCategories = (direction: "left" | "right") => {
    if (historyCategoryContainerRef.current) {
      const scrollAmount = 180;
      historyCategoryContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const PAST_FAQS = [
    {
      id: "past-1",
      title: "Kiến nghị xử lý ô nhiễm tiếng ồn từ hoạt động ca nhạc tự phát tại khu vực bãi biển Nha Trang",
      sender: "Nguyễn Minh Hùng (Cử tri Phường Lộc Thọ, TP. Nha Trang)",
      date: "28/06/2026",
      field: "Đô thị & Giao thông",
      content: "Hiện nay tại khu vực công viên bờ biển Trần Phú (đoạn đối diện khu vực Quảng trường 2 tháng 4), thường xuyên xuất hiện các nhóm tổ chức hát karaoke di động công suất lớn, kéo dài từ 19h đến quá 23h đêm. Việc này gây ảnh hưởng lớn đến không gian nghỉ ngơi của du khách lưu trú tại các khách sạn lân cận và đời sống người dân sinh sống gần đó. Đề nghị cơ quan chức năng kiểm tra và chấn chỉnh.",
      answerDept: "Ủy ban nhân dân Thành phố Nha Trang",
      answerContent: "Tiếp thu ý kiến của cử tri, UBND thành phố Nha Trang đã chỉ đạo Công an thành phố phối hợp với Đội Thanh tra xây dựng và UBND phường Lộc Thọ thành lập tổ công tác kiểm tra liên ngành. Qua rà soát, lực lượng chức năng đã tiến hành lập biên bản nhắc nhở 04 nhóm nhạc tự phát và xử phạt hành chính đối với 02 trường hợp vi phạm quy định về tiếng ồn trong khu dân cư sau 22 giờ theo quy định tại Nghị định 144/2021/NĐ-CP. Đồng thời, lực lượng tuần tra phường Lộc Thọ sẽ tiếp tục ứng trực thường xuyên tại khu vực Quảng trường để bảo đảm trật tự mỹ quan đô thị và không gian du lịch công cộng yên tĩnh cho du khách.",
      status: "Đã trả lời"
    },
    {
      id: "past-2",
      title: "Thủ tục và hồ sơ xin cấp phép nuôi trồng thủy sản bằng lồng bè trên vịnh Vân Phong",
      sender: "Lê Văn Hải (Cử tri xã Vạn Thạnh, Huyện Vạn Ninh)",
      date: "19/06/2026",
      field: "Tài nguyên & Môi trường",
      content: "Tôi và một số hộ dân tại Vạn Thạnh có nhu cầu đầu tư lồng bè gỗ nuôi biển công nghệ cao trên vịnh Vân Phong. Xin hỏi thủ tục đăng ký giao khu vực biển để nuôi trồng thủy sản và cơ quan nào có thẩm quyền cấp phép? Thời gian giải quyết là bao lâu?",
      answerDept: "Sở Tài nguyên và Môi trường tỉnh Khánh Hòa",
      answerContent: "Theo quy định của Luật Thủy sản và Nghị định 11/2021/NĐ-CP của Chính phủ, thẩm quyền giao khu vực biển cho cá nhân Việt Nam để nuôi trồng thủy sản thuộc về UBND cấp huyện (nếu nằm trong vùng biển 03 hải lý) và Sở Tài nguyên và Môi trường tham mưu cho UBND tỉnh (nếu nằm ngoài 03 hải lý). Đối với vịnh Vân Phong, trường hợp của công dân nộp hồ sơ tại Phòng Tài nguyên và Môi trường huyện Vạn Ninh (đối với quy mô hộ gia đình, cá nhân). Thành phần hồ sơ gồm: Đơn đề nghị giao khu vực biển (Mẫu số 01 ban hành kèm theo Nghị định số 11/2021/NĐ-CP); Bản đồ khu vực biển đề nghị giao; Đề án nuôi trồng thủy sản đã được phê duyệt. Thời gian giải quyết hồ sơ là không quá 30 ngày làm việc kể từ ngày nhận đủ hồ sơ hợp lệ.",
      status: "Đã trả lời"
    },
    {
      id: "past-3",
      title: "Thời hạn cấp giấy phép xây dựng nhà ở riêng lẻ tại khu vực đô thị Cam Lâm và lệ phí thực hiện",
      sender: "Phan Quốc Bảo (Thị trấn Cam Đức, Huyện Cam Lâm)",
      date: "10/06/2026",
      field: "Xây dựng",
      content: "Tôi đang có nhu cầu xây dựng nhà ở 3 tầng tại khu vực thị trấn Cam Đức, huyện Cam Lâm. Xin hỏi thời gian giải quyết cấp giấy phép xây dựng nhà ở riêng lẻ của huyện là bao nhiêu ngày làm việc và lệ phí áp dụng hiện hành là bao nhiêu?",
      answerDept: "Sở Xây dựng tỉnh Khánh Hòa",
      answerContent: "Theo quy chế chung và quy định tại Luật Xây dựng hiện hành, thẩm quyền cấp giấy phép xây dựng nhà ở riêng lẻ trên địa bàn huyện thuộc về UBND huyện Cam Lâm (Bộ phận Một cửa huyện). Thời gian giải quyết hồ sơ là không quá 15 ngày làm việc kể từ ngày nhận đủ hồ sơ hợp lệ. Về lệ phí cấp giấy phép xây dựng nhà ở riêng lẻ áp dụng trên địa bàn tỉnh Khánh Hòa hiện nay là 50.000 đồng/giấy phép (theo Nghị quyết của Hội đồng nhân dân tỉnh Khánh Hòa). Công dân nộp hồ sơ trực tuyến qua Cổng dịch vụ công tỉnh Khánh Hòa để được xử lý nhanh nhất.",
      status: "Đã trả lời"
    },
    {
      id: "past-4",
      title: "Kế hoạch nâng cấp cơ sở vật chất và phân tuyến tuyển sinh các trường THCS tại Nha Trang",
      sender: "Trần Thị Thu Thủy (Phường Phước Long, TP. Nha Trang)",
      date: "02/06/2026",
      field: "Giáo dục & Y tế",
      content: "Con tôi chuẩn bị hoàn thành chương trình Tiểu học và lên lớp 6. Tôi cư trú tại phường Phước Long, xin hỏi quy định phân tuyến tuyển sinh năm học tới tại khu vực có gì thay đổi không? Đồng thời trường THCS Phước Long đã có kế hoạch xây dựng thêm phòng học để đảm bảo học sinh học 2 buổi/ngày hay chưa?",
      answerDept: "Sở Giáo dục và Đào tạo tỉnh Khánh Hòa",
      answerContent: "Phòng Giáo dục và Đào tạo thành phố Nha Trang đã ban hành phương án tuyển sinh THCS theo nguyên tắc phân tuyến địa bàn cư trú để đảm bảo 100% học sinh hoàn thành chương trình tiểu học được vào học lớp 6 tại trường THCS gần nhất. Công dân cư trú hợp pháp tại phường Phước Long sẽ được tuyển sinh vào trường THCS Phước Long hoặc các trường lân cận theo danh sách phân tuyến chính thức được công bố trên website Phòng GD&ĐT Nha Trang vào tháng 5 hàng năm. Về cơ sở vật chất, UBND thành phố Nha Trang đã phê duyệt dự án đầu tư công giai đoạn 2026-2028 cho trường THCS Phước Long, bao gồm việc xây mới dãy nhà lớp học 4 tầng (12 phòng học) và khu hiệu bộ nhằm đáp ứng đầy đủ hạ tầng cho học sinh học bán trú.",
      status: "Đã trả lời"
    },
    {
      id: "past-5",
      title: "Thủ tục đăng ký tạm trú trực tuyến cho công dân ngoại tỉnh đến làm việc tại KCN Suối Dầu",
      sender: "Vũ Đình Trọng (Xã Suối Tân, Huyện Cam Lâm)",
      date: "15/05/2026",
      field: "Tư pháp & Thủ tục khác",
      content: "Tôi từ tỉnh khác đến làm việc tại Khu công nghiệp Suối Dầu và đang thuê trọ tại xã Suối Tân. Xin hỏi tôi có thể tự đăng ký tạm trú trực tuyến qua mạng được không hay bắt buộc phải đến đồn công an xã? Các bước thực hiện và giấy tờ cần thiết gồm những gì?",
      answerDept: "Công an tỉnh Khánh Hòa",
      answerContent: "Theo Luật Cư trú năm 2020, công dân hoàn toàn có thể tự đăng ký tạm trú trực tuyến qua Cổng dịch vụ công quản lý cư trú của Bộ Công an hoặc Cổng dịch vụ công tỉnh Khánh Hòa (yêu cầu tài khoản VNeID cấp độ 2). Quy trình thực hiện: 1) Truy cập cổng dịch vụ công cư trú; 2) Chọn dịch vụ 'Đăng ký tạm trú'; 3) Điền đầy đủ thông tin vào tờ khai điện tử; 4) Đính kèm bản chụp/scan các giấy tờ chứng minh chỗ ở hợp pháp (Hợp đồng thuê nhà có chữ ký hai bên, cam kết của chủ nhà trọ). Trong thời hạn 03 ngày làm việc kể từ ngày nhận đủ hồ sơ hợp lệ, cơ quan Công an xã Suối Tân sẽ cập nhật kết quả vào Cơ sở dữ liệu về cư trú và thông báo cho công dân.",
      status: "Đã trả lời"
    },
    {
      id: "past-6",
      title: "Thủ tục tách thửa và cấp Sổ đỏ đối với đất nông nghiệp tại xã Diên Toàn, huyện Diên Khánh",
      sender: "Lâm Quốc Trọng (Xã Diên Toàn, Huyện Diên Khánh)",
      date: "11/05/2026",
      field: "Tài nguyên & Môi trường",
      content: "Gia đình tôi có mảnh đất trồng cây lâu năm diện tích 1500m2 tại Diên Toàn. Tôi muốn tách ra làm 3 thửa cho các con thì diện tích tối thiểu được phép tách thửa tại khu vực này là bao nhiêu theo quy định mới nhất của tỉnh Khánh Hòa?",
      answerDept: "Sở Tài nguyên và Môi trường tỉnh Khánh Hòa",
      answerContent: "Theo Quyết định số 24/2024/QĐ-UBND của UBND tỉnh Khánh Hòa quy định về diện tích tối thiểu được phép tách thửa đối với các loại đất trên địa bàn tỉnh: Đối với đất nông nghiệp (đất trồng cây hàng năm, trồng cây lâu năm) tại khu vực nông thôn thuộc các xã của huyện Diên Khánh, diện tích tối thiểu của thửa đất mới hình thành và thửa đất còn lại sau khi tách thửa phải từ 500m2 trở lên. Trường hợp của công dân, đất có tổng diện tích 1500m2 mong muốn tách làm 3 thửa (bình quân mỗi thửa 500m2) là hoàn toàn đủ điều kiện về diện tích tối thiểu. Đề nghị công dân chuẩn bị hồ sơ đo vẽ tách thửa và nộp tại Văn phòng Đăng ký đất đai chi nhánh huyện Diên Khánh để được giải quyết theo thẩm quyền.",
      status: "Đã trả lời"
    },
    {
      id: "past-7",
      title: "Tiến độ giải phóng mặt bằng và thi công nâng cấp Quốc lộ 1A đoạn qua Diên Khánh",
      sender: "Lê Thị Hồng Hoa (Thị trấn Diên Khánh, Huyện Diên Khánh)",
      date: "08/05/2026",
      field: "Đô thị & Giao thông",
      content: "Tuyến tránh Quốc lộ 1A và các trục giao thông kết nối đi qua Diên Khánh hiện đang thi công dốc, bụi bặm và hệ thống thoát nước chưa hoàn thiện gây ngập úng cục bộ mỗi khi mưa lớn. Đề nghị UBND huyện thông tin tiến độ và giải pháp xử lý thoát nước.",
      answerDept: "Ủy ban nhân dân Huyện Diên Khánh",
      answerContent: "UBND huyện Diên Khánh đã tổ chức cuộc họp khẩn với Ban Quản lý dự án phát triển tỉnh Khánh Hòa và đơn vị thi công. Hiện nay tiến độ bồi thường giải phóng mặt bằng đã đạt 95%. Để giải quyết tình trạng ngập úng tạm thời, đơn vị thi công đã cam kết bổ sung 4 máy bơm dã chiến tại các điểm trũng thấp, khơi thông dòng chảy mương thoát nước dọc tuyến lộ hiện hữu và đẩy nhanh tiến độ đổ bê tông mương thoát nước vĩnh cửu, phấn đấu hoàn thành toàn bộ hệ thống thoát nước trước ngày 30/8/2026.",
      status: "Đã trả lời"
    },
    {
      id: "past-8",
      title: "Tình hình cung ứng vắc xin trong chương trình Tiêm chủng mở rộng tại huyện miền núi Khánh Sơn",
      sender: "Cao Thị Mai (Cử tri xã Ba Cụm Nam, Huyện Khánh Sơn)",
      date: "05/05/2026",
      field: "Giáo dục & Y tế",
      content: "Trẻ em tại các xã miền núi Khánh Sơn thường xuyên gặp tình trạng hoãn tiêm chủng do thiếu vắc xin 5 trong 1 (DPT-VGB-Hib). Xin hỏi Sở Y tế đã có giải pháp phân bổ kịp thời để đảm bảo quyền lợi phòng bệnh cho trẻ em đồng bào thiểu số hay chưa?",
      answerDept: "Sở Y tế tỉnh Khánh Hòa",
      answerContent: "Sở Y tế tỉnh Khánh Hòa ghi nhận phản ánh của cử tri. Việc gián đoạn cung ứng vắc xin 5 trong 1 thời gian qua là khó khăn chung của cả nước do thủ tục mua sắm tập trung từ Bộ Y tế. Ngay sau khi nhận được nguồn cấp phân bổ vào cuối tháng 4/2026, Sở Y tế đã lập tức phân bổ ưu tiên 1.200 liều vắc xin cho 2 huyện miền núi Khánh Sơn và Khánh Vĩnh. Hiện trạm y tế các xã đã lên lịch tiêm bù, gửi giấy mời đến từng hộ gia đình đồng bào. Đội ngũ y tế lưu động cũng được tăng cường xuống tận thôn bản để hỗ trợ tiêm chủng an toàn, bảo đảm không bỏ sót trẻ.",
      status: "Đã trả lời"
    },
    {
      id: "past-9",
      title: "Hỗ trợ kinh phí xóa nhà tạm, nhà dột nát cho hộ nghèo đồng bào dân tộc thiểu số tại huyện Khánh Vĩnh",
      sender: "Cơ Liêng Hải (Cử tri xã Khánh Thượng, Huyện Khánh Vĩnh)",
      date: "29/04/2026",
      field: "Xây dựng",
      content: "Gia dịch tôi thuộc diện hộ nghèo tại xã miền núi Khánh Thượng, căn nhà gỗ dột nát không đảm bảo an toàn trong mùa bão lũ tới. Cho hỏi chính sách của tỉnh hỗ trợ xây dựng nhà mới cho đồng bào là bao nhiêu tiền và làm sao để đăng ký?",
      answerDept: "Ủy ban nhân dân Huyện Khánh Vĩnh",
      answerContent: "Theo Đề án hỗ trợ nhà ở cho hộ nghèo, hộ cận nghèo trên địa bàn tỉnh Khánh Hòa giai đoạn 2023-2026 (thuộc Chương trình mục tiêu quốc gia), mức hỗ trợ xây mới nhà ở là 60 triệu đồng/hộ đối với nguồn ngân sách, kết hợp hỗ trợ vay vốn ưu đãi từ Ngân hàng Chính sách xã hội tối đa 40 triệu đồng. Đối với trường hợp của ông, đề nghị liên hệ trực tiếp Ban quản lý thôn hoặc UBND xã Khánh Thượng để nộp đơn xin hỗ trợ. Hội đồng xét duyệt cấp xã sẽ tiến hành thẩm định thực tế, đưa vào danh sách phê duyệt ưu tiên khởi công trước mùa mưa bão năm nay.",
      status: "Đã trả lời"
    },
    {
      id: "past-10",
      title: "Kiến nghị xử lý xả thải ô nhiễm nguồn nước kênh thoát lũ sông Cái Nha Trang",
      sender: "Trần Minh Hòa (Phường Ngọc Hiệp, TP. Nha Trang)",
      date: "22/04/2026",
      field: "Tài nguyên & Môi trường",
      content: "Kênh mương thoát lũ đổ ra sông Cái đoạn qua phường Ngọc Hiệp xuất hiện hiện tượng nước đen ngòm, bốc mùi hôi thối nồng nặc và có váng dầu. Nghi ngờ có một số cơ sở giặt là, giết mổ xả thải trực tiếp chưa qua xử lý. Mong cơ quan chức năng kiểm tra.",
      answerDept: "Sở Tài nguyên và Môi trường tỉnh Khánh Hòa",
      answerContent: "Sở Tài nguyên và Môi trường đã phối hợp với Cảnh sát phòng chống tội phạm về môi trường tỉnh và Phòng TN&MT thành phố Nha Trang tổ chức quan trắc nước thải, thanh tra đột xuất. Kết quả phát hiện 01 cơ sở giặt là công nghiệp và 02 cơ sở giết mổ gia súc xả nước thải vượt quy chuẩn kỹ thuật về chất thải từ 3 đến dưới 5 lần. Đoàn kiểm tra đã lập biên bản xử phạt hành chính tổng cộng 135 triệu đồng, đình chỉ hoạt động xả thải 3 tháng và yêu cầu các cơ sở này khẩn trương xây dựng hệ thống xử lý nước thải nội bộ đạt chuẩn trước khi được phép hoạt động trở lại.",
      status: "Đã trả lời"
    },
    {
      id: "past-11",
      title: "Quy hoạch bãi đỗ xe công cộng đô thị và cấm đỗ xe ngày chẵn lẻ tại trung tâm Nha Trang",
      sender: "Phùng Ngọc Anh (Phường Tân Lập, TP. Nha Trang)",
      date: "18/04/2026",
      field: "Đô thị & Giao thông",
      content: "Các tuyến đường như Hồng Bàng, Tô Hiến Thành, Nguyễn Trãi vào giờ cao điểm rất ùn tắc do ô tô đậu đỗ chiếm hết lòng đường. Tỉnh có kế hoạch gì về việc mở thêm các bãi đỗ xe công cộng quy mô lớn và triển khai cấm đỗ xe ngày chẵn, lẻ rộng rãi hơn không?",
      answerDept: "Sở Giao thông vận tải tỉnh Khánh Hòa",
      answerContent: "Sở Giao thông vận tải đã tham mưu cho UBND tỉnh phê duyệt phương án tổ chức giao thông phân luồng chi tiết tại trung tâm TP. Nha Trang. Đối với các tuyến đường hẹp, Sở đã tổ chức cắm biển cấm đỗ xe theo ngày chẵn, lẻ trên 12 tuyến trục chính bao gồm cả Hồng Bàng và Tô Hiến Thành. Về bãi đỗ xe, tỉnh đã phê duyệt quy hoạch và đang kêu gọi đầu tư xã hội hóa 3 bãi đỗ xe cao tầng thông minh tại khu vực sân bay Nha Trang cũ, khu vực Bắc Hòn Ông và khu vực kho cảng Bình Tân cũ để giảm tải áp lực hạ tầng cho khu vực trung tâm.",
      status: "Đã trả lời"
    },
    {
      id: "past-12",
      title: "Hướng dẫn đăng ký cấp phiếu Lý lịch tư pháp trực tuyến mức độ 4 bằng tài khoản VNeID",
      sender: "Trần Minh Triết (Phường Vĩnh Hải, TP. Nha Trang)",
      date: "10/04/2026",
      field: "Tư pháp & Thủ tục khác",
      content: "Tôi cần xin phiếu Lý lịch tư pháp số 1 để hoàn thiện hồ sơ xin việc tại công ty nước ngoài. Nghe nói tỉnh Khánh Hòa đã cho phép cấp trực tuyến qua ứng dụng VNeID, xin hướng dẫn các bước thực hiện để người dân dễ thao tác.",
      answerDept: "Sở Tư pháp tỉnh Khánh Hòa",
      answerContent: "Kể từ năm 2024, Sở Tư pháp tỉnh Khánh Hòa phối hợp với Công an tỉnh triển khai dịch vụ cấp Phiếu Lý lịch tư pháp trên ứng dụng định danh điện tử VNeID. Quy trình gồm: 1) Đăng nhập VNeID bằng tài khoản định danh mức 2; 2) Chọn mục 'Thủ tục hành chính' -> 'Cấp Phiếu lý lịch tư pháp'; 3) Điền thông tin tờ khai, chọn loại phiếu số 1 hoặc số 2 và cơ quan cấp là Sở Tư pháp Khánh Hòa; 4) Thanh toán phí trực tuyến (150.000đ - 200.000đ tùy đối tượng). Kết quả Phiếu lý lịch tư pháp điện tử (bản PDF có chữ ký số hợp lệ) sẽ được gửi thẳng vào ứng dụng VNeID của công dân trong vòng 10 ngày làm việc. Bản giấy sẽ được bưu điện gửi về địa chỉ đăng ký nếu công dân có nhu cầu.",
      status: "Đã trả lời"
    },
    {
      id: "past-13",
      title: "Bảo đảm cung ứng thuốc bảo hiểm y tế tại Bệnh viện Đa khoa tỉnh Khánh Hòa",
      sender: "Trương Văn Bảy (Phường Phương Sài, TP. Nha Trang)",
      date: "04/04/2026",
      field: "Giáo dục & Y tế",
      content: "Tôi bị bệnh tim mạch mãn tính, thường xuyên khám bảo hiểm y tế tại Bệnh viện Đa khoa tỉnh. Gần đây một số loại thuốc biệt dược điều trị huyết áp và tim mạch bị thiếu, tôi phải tự mua ngoài với giá rất đắt. Đề nghị bệnh viện giải quyết tình trạng thiếu thuốc này.",
      answerDept: "Sở Y tế tỉnh Khánh Hòa",
      answerContent: "Sở Y tế đã chỉ đạo Ban Giám đốc Bệnh viện Đa khoa tỉnh Khánh Hòa kiểm tra làm rõ. Nguyên nhân do gói thầu mua sắm thuốc tập trung của tỉnh năm trước bị chậm tiến độ chấm thầu. Hiện nay, Sở Y tế đã phê duyệt kết quả lựa chọn nhà thầu gói thầu cung cấp thuốc giai đoạn mới. Nhà thầu đã bắt đầu cung ứng đầy đủ các danh mục thuốc tim mạch, huyết áp, tiểu đường từ cuối tháng 3. Bệnh viện Đa khoa tỉnh cam kết đảm bảo 100% thuốc bảo hiểm y tế cho bệnh nhân ngoại trú điều trị mãn tính, chấm dứt việc người bệnh phải ra ngoài mua thuốc tự túc.",
      status: "Đã trả lời"
    },
    {
      id: "past-14",
      title: "Quy trình chuyển đổi mục đích sử dụng đất từ đất nông nghiệp sang đất ở nông thôn tại Cam Lâm",
      sender: "Nguyễn Hoàng Long (Xã Cam Hải Tây, Huyện Cam Lâm)",
      date: "28/03/2026",
      field: "Tài nguyên & Môi trường",
      content: "Tôi có thửa đất trồng cây hàng năm khác diện tích 300m2 tiếp giáp mặt đường bê tông liên thôn tại xã Cam Hải Tây. Đất nằm trong quy hoạch đất ở nông thôn. Xin hỏi tôi cần làm những bước nào để chuyển mục đích sang đất ở và nghĩa vụ tài chính tính thế nào?",
      answerDept: "Sở Tài nguyên và Môi trường tỉnh Khánh Hòa",
      answerContent: "Để chuyển mục đích sử dụng đất sang đất ở, thửa đất của ông phải đáp ứng đồng thời 2 điều kiện: Phù hợp với quy hoạch sử dụng đất huyện Cam Lâm đã được duyệt và có tên trong kế hoạch sử dụng đất hàng năm của huyện được phép chuyển mục đích. Quy trình: Ông nộp hồ sơ tại Bộ phận một cửa UBND huyện Cam Lâm gồm Đơn xin chuyển mục đích, Giấy chứng nhận quyền sử dụng đất bản gốc, Bản vẽ trích lục thửa đất. Nghĩa vụ tài chính (tiền sử dụng đất) sẽ được tính bằng chênh lệch giữa giá đất ở và giá đất nông nghiệp tại bảng giá đất do UBND tỉnh quy định tại thời điểm có quyết định cho phép chuyển mục đích.",
      status: "Đã trả lời"
    },
    {
      id: "past-15",
      title: "Kế hoạch nâng cấp và sửa chữa hệ thống đèn chiếu sáng công cộng tại các xã đảo thuộc vịnh Nha Trang",
      sender: "Lê Văn Tiến (Đảo Trí Nguyên, Phường Vĩnh Nguyên, TP. Nha Trang)",
      date: "22/03/2026",
      field: "Đô thị & Giao thông",
      content: "Hệ thống đèn đường chiếu sáng tại đảo Trí Nguyên nhiều đoạn đã bị hỏng hóc, bóng đèn huỳnh quang cháy nhiều tháng nay gây tối tăm, mất an ninh trật tự cho bà con ngư dân đi biển đêm. Kính đề nghị thành phố đầu tư hệ thống đèn LED mới tiết kiệm điện.",
      answerDept: "Ủy ban nhân dân Thành phố Nha Trang",
      answerContent: "UBND thành phố Nha Trang đã chỉ đạo Công ty CP Môi trường Đô thị Nha Trang tiến hành khảo sát thực tế tại đảo Trí Nguyên. Công ty đã lên phương án thay thế toàn bộ 85 bóng đèn cũ hỏng bằng hệ thống bóng đèn LED thông minh công suất 50W tiết kiệm điện, chống chịu muối mặn tốt. Dự án đã được triển khai lắp đặt hoàn thành vào giữa tháng 4/2026, khôi phục lại ánh sáng cho toàn bộ các trục đường liên tổ dân phố trên đảo, phục vụ sinh hoạt an toàn cho bà con ngư dân.",
      status: "Đã trả lời"
    },
    {
      id: "past-16",
      title: "Kiểm tra trật tự xây dựng và xử lý vi phạm xây dựng sai phép tại khu đô thị Lê Hồng Phong",
      sender: "Bùi Thị Hồng (Phường Phước Hải, TP. Nha Trang)",
      date: "15/03/2026",
      field: "Xây dựng",
      content: "Tại khu đô thị Lê Hồng Phong II, một số hộ dân đang xây dựng nhà ở vượt tầng, sai mật độ xây dựng và lấn chiếm khoảng lùi kỹ thuật phía sau block nhà làm ảnh hưởng đến thoát hiểm khi hỏa hoạn. Đề nghị thanh tra xây dựng vào cuộc.",
      answerDept: "Sở Xây dựng tỉnh Khánh Hòa",
      answerContent: "Sở Xây dựng đã chỉ đạo Thanh tra Sở phối hợp với UBND phường Phước Hải và Công an địa phương tiến hành kiểm tra đột xuất tại các block nhà thuộc KĐT Lê Hồng Phong II. Qua thanh tra, lực lượng đã phát hiện 3 công trình xây dựng vi phạm thiết kế mẫu nhà đã được phê duyệt (xây thêm tum, lấn chiếm khoảng lùi 2m phía sau). Lực lượng chức năng đã lập biên bản xử phạt hành chính đối với chủ đầu tư công trình, đình chỉ thi công vĩnh viễn và ra quyết định cưỡng chế tháo dỡ phần công trình xây dựng sai thiết kế quy hoạch, cam kết bàn giao lại hiện trạng thông thoáng cho lối thoát hiểm.",
      status: "Đã trả lời"
    },
    {
      id: "past-17",
      title: "Thời gian làm việc và thủ tục xin cấp thẻ tạm trú cho người lao động nước ngoài tại các doanh nghiệp du lịch Nha Trang",
      sender: "Lâm Quang Vinh (Giám đốc nhân sự Khách sạn Cam Ranh Bay)",
      date: "08/03/2026",
      field: "Tư pháp & Thủ tục khác",
      content: "Doanh nghiệp chúng tôi chuẩn bị đón 5 chuyên gia quản lý khách sạn người Hàn Quốc sang làm việc lâu dài. Xin hỏi thủ tục xin cấp thẻ tạm trú (Temporary Residence Card) nộp tại Phòng Quản lý Xuất nhập cảnh tỉnh Khánh Hòa cần những hồ sơ gì?",
      answerDept: "Công an tỉnh Khánh Hòa",
      answerContent: "Hồ sơ đề nghị cấp thẻ tạm trú cho người nước ngoài nộp tại Phòng Quản lý Xuất nhập cảnh Công an tỉnh Khánh Hòa (số 47 Lý Tự Trọng, Nha Trang). Thành phần hồ sơ gồm: 1) Văn bản bảo lãnh của doanh nghiệp (Mẫu NA6, NA8); 2) Hộ chiếu gốc còn thời hạn của chuyên gia; 3) Giấy phép lao động hoặc Giấy miễn giấy phép lao động đã được cấp; 4) Giấy chứng nhận đăng ký kinh doanh của khách sạn; 5) Khai báo tạm trú của người nước ngoài tại công an phường nơi cư trú. Thời gian giải quyết hồ sơ là trong vòng 05 ngày làm việc kể từ ngày nhận đủ hồ sơ hợp lệ. Lệ phí nộp theo quy định của Bộ Tài chính từ 135 USD đến 145 USD tùy thuộc vào thời hạn của thẻ tạm trú.",
      status: "Đã trả lời"
    },
    {
      id: "past-18",
      title: "Chính sách miễn giảm học phí cho con em đồng bào Raglai tại các xã khó khăn huyện Khánh Sơn",
      sender: "Mấu Thị Thanh (Xã Sơn Hiệp, Huyện Khánh Sơn)",
      date: "02/03/2026",
      field: "Giáo dục & Y tế",
      content: "Con tôi đang học trung học cơ sở tại trường PTDT Bán trú xã Sơn Hiệp. Xin hỏi gia đình chúng tôi là người đồng bào dân tộc Raglai thuộc diện hộ nghèo thì cháu được hưởng các chế độ miễn giảm học phí và hỗ trợ chi phí học tập như thế nào?",
      answerDept: "Sở Giáo dục và Đào tạo tỉnh Khánh Hòa",
      answerContent: "Theo quy định tại Nghị định số 81/2021/NĐ-CP của Chính phủ, con em học sinh người dân tộc thiểu số Raglai sinh sống tại vùng có điều kiện kinh tế - xã hội đặc biệt khó khăn (như huyện miền núi Khánh Sơn) và thuộc hộ nghèo, hộ cận nghèo sẽ được: 1) Miễn 100% học phí tại các cơ sở giáo dục công lập; 2) Hỗ trợ chi phí học tập mức 150.000 đồng/học sinh/tháng để mua sắm sách vở, đồ dùng học tập (thời gian hưởng tối đa 9 tháng/năm học). Ngoài ra, do học tại trường Phổ thông Dân tộc Bán trú, cháu còn được hỗ trợ tiền ăn bằng 40% mức lương cơ sở và hỗ trợ tiền nhà ở nếu ở bán trú tại trường theo Nghị định 116/2016/NĐ-CP. Đề nghị bà nộp đơn kèm giấy chứng nhận hộ nghèo và giấy khai sinh của cháu cho nhà trường để được áp dụng chế độ ngay từ đầu học kỳ.",
      status: "Đã trả lời"
    },
    {
      id: "past-19",
      title: "Giải quyết ô nhiễm khói bụi từ Nhà máy Đường Ninh Hòa ảnh hưởng khu dân cư xã Ninh Xuân",
      sender: "Đặng Văn Hóa (Xã Ninh Xuân, TX. Ninh Hòa)",
      date: "22/02/2026",
      field: "Tài nguyên & Môi trường",
      content: "Nhà máy Đường Ninh Hòa trong vụ ép mía xả khói bụi mù mịt, tàn tro mía đen bay đầy nhà cửa, giếng nước của người dân xã Ninh Xuân xung quanh nhà máy, gây ho, viêm họng cho trẻ em và người già. Đề nghị cơ quan chức năng kiểm soát nồng độ khí thải.",
      answerDept: "Sở Tài nguyên và Môi trường tỉnh Khánh Hòa",
      answerContent: "Nhận được phản ánh của bà con nhân dân, Sở Tài nguyên và Môi trường tỉnh Khánh Hòa đã phối hợp với UBND thị xã Ninh Hòa thành lập đoàn công tác tiến hành kiểm tra đột xuất quy trình xử lý khí thải lò hơi tại Nhà máy Đường Ninh Hòa. Kết quả phát hiện hệ thống lọc bụi tĩnh điện của nhà máy gặp sự cố rò rỉ dẫn đến bụi tro thoát ra ngoài không khí vượt quy chuẩn cho phép. Đoàn kiểm tra đã lập biên bản xử phạt vi phạm hành chính, đồng thời yêu cầu nhà máy tạm dừng lò hơi sự cố, tiến hành duy tu, nâng cấp toàn bộ hệ thống thu hồi bụi tro đạt chuẩn QCVN 19:2009/BTNMT. Hiện nay nhà máy đã hoàn tất khắc phục và lắp đặt trạm quan trắc khí thải tự động liên tục truyền dữ liệu trực tiếp về Sở TN&MT để kiểm soát 24/7.",
      status: "Đã trả lời"
    },
    {
      id: "past-20",
      title: "Đầu tư khẩn cấp hệ thống rào chắn hộ lan và gương cầu lồi tại đèo Khánh Lê kết nối Nha Trang - Đà Lạt",
      sender: "Đinh Văn Sơn (Cử tri Xã Sơn Thái, Huyện Khánh Vĩnh)",
      date: "15/02/2026",
      field: "Đô thị & Giao thông",
      content: "Tuyến đường đèo Khánh Lê (Quốc lộ 27C) thường xuyên bị sương mù dày đặc che khuất tầm nhìn, có nhiều khúc cua tay áo hiểm trở sâu hun hút đã xảy ra một số tai nạn nghiêm trọng. Đề nghị lắp đặt thêm gương cầu lồi, đinh phản quang và rào chắn hộ lan bảo vệ.",
      answerDept: "Sở Giao thông vận tải tỉnh Khánh Hòa",
      answerContent: "Đèo Khánh Lê thuộc tuyến Quốc lộ 27C do Khu Quản lý đường bộ III quản lý, tuy nhiên để bảo đảm an toàn tính mạng cho người tham gia giao thông, Sở GTVT tỉnh Khánh Hòa đã khẩn trương kiến nghị Bộ Giao thông vận tải cấp kinh phí bảo trì đột xuất. Hiện nay, dự án đã được phê duyệt và hoàn thành lắp đặt bổ sung 32 gương cầu lồi cỡ lớn tại các điểm mù nguy hiểm, sơn vạch kẻ đường phản quang công nghệ cao phản xạ sương mù, đồng thời lắp đặt hơn 1,5 km rào chắn hộ lan lốp cao su giảm chấn tại các bờ vực sâu nguy hiểm nhất trên đèo, góp phần hạn chế tối đa tai nạn giao thông trong điều kiện thời tiết xấu.",
      status: "Đã trả lời"
    }
  ];

  const FAQ_ITEMS = [
    {
      id: "faq-1",
      question: "Làm thế nào để nộp hồ sơ trực tuyến mức độ 4?",
      answer: "Công dân đăng nhập Cổng Dịch vụ công Quốc gia hoặc của Tỉnh bằng định danh điện tử VNeID, chọn thủ tục hành chính cần nộp, chuẩn bị các tệp đính kèm dạng PDF/ảnh hợp lệ và tiến hành thanh toán lệ phí (nếu có) trực tuyến thông qua Cổng thanh toán quốc gia."
    },
    {
      id: "faq-2",
      question: "Thời gian xử lý thủ tục Đất đai là bao lâu?",
      answer: "Thời gian giải quyết tùy thuộc vào loại thủ tục cụ thể. Đối với thủ tục cấp mới Giấy chứng nhận quyền sử dụng đất lần đầu là không quá 30 ngày làm việc. Thủ tục chuyển nhượng, tặng cho đất đai thông thường không quá 10-15 ngày làm việc kể từ khi nhận đủ hồ sơ hợp lệ."
    },
    {
      id: "faq-3",
      question: "Làm thế nào để kiến nghị phản ánh lên UBND?",
      answer: "Người dân có thể sử dụng Cổng Phản ánh kiến nghị trực tiếp trên trang chủ này hoặc thông qua ứng dụng di động công dân. Các ý kiến phản ánh sẽ được chuyển đến cơ quan thẩm quyền xử lý và công khai kết quả phản hồi trong vòng 3-5 ngày làm việc."
    },
    {
      id: "faq-4",
      question: "Đăng ký chữ ký số công cộng cho công dân ở đâu?",
      answer: "Công dân có thể đăng ký trực tuyến hoặc trực tiếp tại các quầy bưu điện của tỉnh, Trung tâm Phục vụ hành chính công, hoặc các điểm giao dịch của VNPT, Viettel để được kích hoạt chữ ký số cá nhân dùng cho các giao dịch hành chính công trực tuyến."
    }
  ];

  return (
    <>
      {/* THÔNG TIN CHUNG (Dropdowns & Maps) */}
      <section className="w-full mt-10">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 text-left mb-10">
        {/* Top Row: Map and Website Links */}
        <div className={`grid grid-cols-1 gap-8 mb-10 items-stretch ${hideMap ? 'lg:grid-cols-2' : 'lg:grid-cols-12'}`}>
          {/* BẢN ĐỒ HÀNH CHÍNH */}
          {!hideMap && (
            <div className="lg:col-span-8 flex text-left">
              <div className="bg-white p-8 rounded-3xl border border-slate-100 flex-1 flex flex-col">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 shrink-0 text-left">
                  <h4 className="text-xl font-black text-[#1E3A8A] flex items-center gap-3">
                    Bản đồ hành chính tỉnh
                  </h4>
                  {/* Map fit mode selector switches */}
                  <div className="flex bg-slate-100 p-1 rounded-xl text-lg font-bold border border-slate-200 w-max self-start sm:self-auto select-none">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setMapFitMode("contain");
                      }}
                      className={`px-3.5 py-1.5 rounded-lg transition-all duration-200 cursor-pointer ${
                        mapFitMode === "contain"
                          ? "bg-white text-blue-600 shadow-sm"
                          : "text-slate-500 hover:text-slate-850"
                      }`}
                    >
                      Bao quát (Tránh cắt lề)
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setMapFitMode("cover");
                      }}
                      className={`px-3.5 py-1.5 rounded-lg transition-all duration-200 cursor-pointer ${
                        mapFitMode === "cover"
                          ? "bg-white text-blue-600 shadow-sm relative z-10"
                          : "text-slate-500 hover:text-slate-850"
                      }`}
                    >
                      Cận cảnh
                    </button>
                  </div>
                </div>
  
                <div 
                  onClick={onMapClick}
                  className="flex-1 bg-slate-50 rounded-3xl relative overflow-hidden group cursor-zoom-in min-h-[500px] lg:min-h-[700px] border border-slate-100 shadow-inner flex items-center justify-center"
                >
                  <img
                    src={mapImgSrc}
                    onError={handleMapImgError}
                    referrerPolicy="no-referrer"
                    className={`w-full h-full opacity-95 transition-all duration-700 ${
                      mapFitMode === "contain" 
                        ? "object-contain p-6 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" 
                        : "object-cover group-hover:scale-[1.04] duration-[2500ms]"
                    }`}
                    alt="Bản đồ hành chính tỉnh Khánh Hòa"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent pointer-events-none"></div>
                  
                  {/* Legend Watermark indicating map mode */}
                  <div className="absolute top-4 right-4 bg-slate-900/75 backdrop-blur-md border border-white/10 text-white text-lg font-black tracking-widest px-3 py-1.5 rounded-lg uppercase shadow-lg select-none">
                    Chế độ: {mapFitMode === "contain" ? "Toàn cảnh hải đảo" : "Tập trung đất liền"}
                  </div>
  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="px-6 py-3.5 bg-gradient-to-r from-[#1E3A8A] to-[#1E40AF] hover:from-red-600 hover:to-red-700 text-white rounded-full text-lg font-black shadow-2xl flex items-center gap-2 hover:scale-105 active:scale-95 transition-all pointer-events-auto">
                      Mở bản đồ số chi tiết <BarChart3 size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* RIGHT COLUMN OR COLUMNS */}
          <div className={`${hideMap ? 'lg:col-span-2 flex flex-col md:flex-row' : 'lg:col-span-4 flex flex-col'} gap-8 text-left`}>
            {/* LIÊN KẾT WEBSITE */}
            <div className={`bg-white p-8 rounded-3xl border border-slate-100 ${hideMap ? 'flex-1' : 'flex-none'} flex flex-col relative z-20`}>
              <div className="absolute top-0 left-0 right-0 h-2 bg-[#1E3A8A] rounded-t-3xl"></div>
              <h4 className="text-lg font-black text-[#1E3A8A] mt-2 mb-8 shrink-0">
                Liên kết website
              </h4>
              <div className="space-y-6 flex-1 text-left">
                <div>
                  <label className="text-lg font-bold text-black block mb-2">
                    Sở, ban, ngành
                  </label>
                  <CustomSelect 
                    placeholder="Chọn đơn vị"
                    options={[
                      { value: "so-noi-vu", label: "Sở Nội vụ" },
                      { value: "so-tu-phap", label: "Sở Tư pháp" },
                      { value: "van-phong-ubnd", label: "Văn phòng UBND tỉnh" },
                      { value: "so-tai-chinh", label: "Sở Tài chính" },
                      { value: "thanh-tra", label: "Thanh tra tỉnh" },
                      { value: "so-xay-dung", label: "Sở Xây dựng" },
                      { value: "so-cong-thuong", label: "Sở Công Thương" },
                      { value: "so-khcn", label: "Sở Khoa học và Công nghệ" },
                      { value: "so-gddt", label: "Sở Giáo dục và Đào tạo" },
                      { value: "so-nnptnt", label: "Sở Nông nghiệp và Phát triển nông thôn" },
                      { value: "so-vhttdl", label: "Sở Văn hóa, Thể thao và Du lịch" },
                      { value: "so-yte", label: "Sở Y tế" },
                      { value: "so-tnmt", label: "Sở Tài nguyên và Môi trường" },
                      { value: "ban-qlda-phat-trien", label: "Ban quản lý dự án phát triển tỉnh" },
                      { value: "ban-ql-kkt", label: "Ban Quản lý Khu kinh tế và Khu công nghiệp" },
                      { value: "ban-dt", label: "Ban Dân tộc và Tôn giáo" },
                      { value: "ban-qlda-dautu", label: "Ban Quản lý dự án đầu tư xây dựng" },
                      { value: "ban-qlda-nongnghiep", label: "Ban QLDA ĐTXD các công trình Nông nghiệp và Giao thông" },
                      { value: "ban-vqg", label: "Ban Quản lý Vườn Quốc gia Núi Chúa – Phước Bình" }
                    ]}
                  />
                </div>
                <div>
                  <label className="text-lg font-bold text-black block mb-2">
                    UBND các xã, phường, đặc khu
                  </label>
                  <CustomSelect 
                    placeholder="Chọn xã, phường, đặc khu"
                    options={[
                      { value: "nam-cam-ranh", label: "UBND xã Nam Cam Ranh" },
                      { value: "bac-ninh-hoa", label: "UBND xã Bắc Ninh Hòa" },
                      { value: "tan-dinh", label: "UBND xã Tân Định" },
                      { value: "nam-ninh-hoa", label: "UBND xã Nam Ninh Hòa" },
                      { value: "tay-ninh-hoa", label: "UBND xã Tây Ninh Hòa" },
                      { value: "hoa-tri", label: "UBND xã Hòa Trí" },
                      { value: "dai-lanh", label: "UBND xã Đại Lãnh" },
                      { value: "tu-bong", label: "UBND xã Tu Bông" },
                      { value: "van-thang", label: "UBND xã Vạn Thắng" },
                      { value: "van-ninh", label: "UBND xã Vạn Ninh" },
                      { value: "van-hung", label: "UBND xã Vạn Hưng" },
                      { value: "dien-khanh", label: "UBND xã Diên Khánh" },
                      { value: "dien-lac", label: "UBND xã Diên Lạc" },
                      { value: "dien-dien", label: "UBND xã Diên Điền" },
                      { value: "dien-lam", label: "UBND xã Diên Lâm" },
                      { value: "dien-tho", label: "UBND xã Diên Thọ" },
                      { value: "suoi-hiep", label: "UBND xã Suối Hiệp" },
                      { value: "cam-lam", label: "UBND xã Cam Lâm" },
                      { value: "suoi-dau", label: "UBND xã Suối Dầu" },
                      { value: "cam-hiep", label: "UBND xã Cam Hiệp" },
                      { value: "cam-an", label: "UBND xã Cam An" },
                      { value: "bac-khanh-vinh", label: "UBND xã Bắc Khánh Vĩnh" },
                      { value: "trung-khanh-vinh", label: "UBND xã Trung Khánh Vĩnh" },
                      { value: "tay-khanh-vinh", label: "UBND xã Tây Khánh Vĩnh" },
                      { value: "nam-khanh-vinh", label: "UBND xã Nam Khánh Vĩnh" },
                      { value: "khanh-vinh", label: "UBND xã Khánh Vĩnh" },
                      { value: "khanh-son", label: "UBND xã Khánh Sơn" },
                      { value: "tay-khanh-son", label: "UBND xã Tây Khánh Sơn" },
                      { value: "dong-khanh-son", label: "UBND xã Đông Khánh Sơn" },
                      { value: "ninh-phuoc", label: "UBND xã Ninh Phước" },
                      { value: "bac-ai-tay", label: "UBND xã Bác Ái Tây" },
                      { value: "bac-ai", label: "UBND xã Bác Ái" },
                      { value: "bac-ai-dong", label: "UBND xã Bác Ái Đông" },
                      { value: "my-son", label: "UBND xã Mỹ Sơn" },
                      { value: "anh-dung", label: "UBND xã Anh Dũng" },
                      { value: "lam-son", label: "UBND xã Lâm Sơn" },
                      { value: "ninh-son", label: "UBND xã Ninh Sơn" },
                      { value: "cong-hai", label: "UBND xã Công Hải" },
                      { value: "thuan-bac", label: "UBND xã Thuận Bắc" },
                      { value: "vinh-hai", label: "UBND xã Vĩnh Hải" },
                      { value: "xuan-hai", label: "UBND xã Xuân Hải" },
                      { value: "ninh-hai", label: "UBND xã Ninh Hải" },
                      { value: "phuoc-dinh", label: "UBND xã Phước Dinh" },
                      { value: "phuoc-ha", label: "UBND xã Phước Hà" },
                      { value: "ca-na", label: "UBND xã Cà Ná" },
                      { value: "thuan-nam", label: "UBND xã Thuận Nam" },
                      { value: "phuoc-hau", label: "UBND xã Phước Hậu" },
                      { value: "phuoc-huu", label: "UBND xã Phước Hữu" },
                      { value: "do-vinh", label: "UBND phường Đô Vinh" },
                      { value: "bao-an", label: "UBND phường Bảo An" },
                      { value: "ninh-chu", label: "UBND phường Ninh Chữ" },
                      { value: "dong-hai", label: "UBND phường Đông Hải" },
                      { value: "phan-rang", label: "UBND phường Phan Rang" },
                      { value: "hoa-thang", label: "UBND phường Hòa Thắng" },
                      { value: "dong-ninh-hoa", label: "UBND phường Đông Ninh Hòa" },
                      { value: "p-ninh-hoa", label: "UBND phường Ninh Hòa" },
                      { value: "ba-ngoi", label: "UBND phường Ba Ngòi" },
                      { value: "cam-linh", label: "UBND phường Cam Linh" },
                      { value: "p-cam-ranh", label: "UBND phường Cam Ranh" },
                      { value: "bac-cam-ranh", label: "UBND phường Bắc Cam Ranh" },
                      { value: "nam-nha-trang", label: "UBND phường Nam Nha Trang" },
                      { value: "tay-nha-trang", label: "UBND phường Tây Nha Trang" },
                      { value: "bac-nha-trang", label: "UBND phường Bắc Nha Trang" },
                      { value: "p-nha-trang", label: "UBND phường Nha Trang" },
                      { value: "truong-sa", label: "UBND Đặc khu Trường Sa" }
                    ]}
                  />
                </div>
                <div>
                  <label className="text-lg font-bold text-black block mb-2">
                    Cổng thông tin khác
                  </label>
                  <CustomSelect 
                    placeholder="Chọn liên kết"
                    options={[
                      { value: "chinhphu", label: "Cổng TTĐT Chính phủ" },
                      { value: "quochoi", label: "Cổng TTĐT Quốc hội" },
                      { value: "mattran", label: "Ủy ban Trung ương MTTQ Việt Nam" },
                      { value: "p-angiang", label: "An Giang" },
                      { value: "p-bariavungtau", label: "Bà Rịa - Vũng Tàu" },
                      { value: "p-bacgiang", label: "Bắc Giang" },
                      { value: "p-backan", label: "Bắc Kạn" },
                      { value: "p-baclieu", label: "Bạc Liêu" },
                      { value: "p-bacninh", label: "Bắc Ninh" },
                      { value: "p-bentre", label: "Bến Tre" },
                      { value: "p-binhdinh", label: "Bình Định" },
                      { value: "p-binhduong", label: "Bình Dương" },
                      { value: "p-binhphuoc", label: "Bình Phước" },
                      { value: "p-binhthuan", label: "Bình Thuận" },
                      { value: "p-camau", label: "Cà Mau" },
                      { value: "p-cantho", label: "Cần Thơ" },
                      { value: "p-caobang", label: "Cao Bằng" },
                      { value: "p-danang", label: "Đà Nẵng" },
                      { value: "p-daklak", label: "Đắk Lắk" },
                      { value: "p-daknong", label: "Đắk Nông" },
                      { value: "p-dienbien", label: "Điện Biên" },
                      { value: "p-dongnai", label: "Đồng Nai" },
                      { value: "p-dongthap", label: "Đồng Tháp" },
                      { value: "p-gialai", label: "Gia Lai" },
                      { value: "p-hagiang", label: "Hà Giang" },
                      { value: "p-hanam", label: "Hà Nam" },
                      { value: "p-hanoi", label: "Hà Nội" },
                      { value: "p-hatinh", label: "Hà Tĩnh" },
                      { value: "p-haiduong", label: "Hải Dương" },
                      { value: "p-haiphong", label: "Hải Phòng" },
                      { value: "p-haugiang", label: "Hậu Giang" },
                      { value: "p-hoabinh", label: "Hòa Bình" },
                      { value: "p-hungyen", label: "Hưng Yên" },
                      { value: "p-khanhhoa", label: "Khánh Hòa" },
                      { value: "p-kiengiang", label: "Kiên Giang" },
                      { value: "p-kontum", label: "Kon Tum" },
                      { value: "p-laichau", label: "Lai Châu" },
                      { value: "p-lamdong", label: "Lâm Đồng" },
                      { value: "p-langson", label: "Lạng Sơn" },
                      { value: "p-laocai", label: "Lào Cai" },
                      { value: "p-longan", label: "Long An" },
                      { value: "p-namdinh", label: "Nam Định" },
                      { value: "p-nghean", label: "Nghệ An" },
                      { value: "p-ninhbinh", label: "Ninh Bình" },
                      { value: "p-ninhthuan", label: "Ninh Thuận" },
                      { value: "p-phutho", label: "Phú Thọ" },
                      { value: "p-phuyen", label: "Phú Yên" },
                      { value: "p-quangbinh", label: "Quảng Bình" },
                      { value: "p-quangnam", label: "Quảng Nam" },
                      { value: "p-quangngai", label: "Quảng Ngãi" },
                      { value: "p-quangninh", label: "Quảng Ninh" },
                      { value: "p-quangtri", label: "Quảng Trị" },
                      { value: "p-soctrang", label: "Sóc Trăng" },
                      { value: "p-sonla", label: "Sơn La" },
                      { value: "p-tayninh", label: "Tây Ninh" },
                      { value: "p-thaibinh", label: "Thái Bình" },
                      { value: "p-thainguyen", label: "Thái Nguyên" },
                      { value: "p-thanhhoa", label: "Thanh Hóa" },
                      { value: "p-thuathienhue", label: "Thừa Thiên Huế" },
                      { value: "p-tiengiang", label: "Tiền Giang" },
                      { value: "p-hcm", label: "TP Hồ Chí Minh" },
                      { value: "p-travinh", label: "Trà Vinh" },
                      { value: "p-tuyenquang", label: "Tuyên Quang" },
                      { value: "p-vinhlong", label: "Vĩnh Long" },
                      { value: "p-vinhphuc", label: "Vĩnh Phúc" },
                      { value: "p-yenbai", label: "Yên Bái" }
                    ]}
                  />
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-[#1E3A8A] shrink-0 text-left">
                <div className="flex gap-4">
                  <Facebook size={24} className="cursor-pointer hover:text-blue-600 transition-colors" />
                  <Youtube size={24} className="cursor-pointer hover:text-blue-600 transition-colors" />
                  <Twitter size={24} className="cursor-pointer hover:text-blue-600 transition-colors" />
                </div>
                <span className="text-lg font-black opacity-30">
                  VILIAN CMS
                </span>
              </div>
            </div>

            {/* HỎI ĐÁP & KHAI THÁC FAQ */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 flex-1 flex flex-col relative overflow-hidden text-left shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute top-0 left-0 right-0 h-2 bg-[#1E3A8A]"></div>
              <h4 className="text-lg font-black text-[#1E3A8A] mt-2 mb-6 shrink-0 flex items-center gap-2">
                <HelpCircle size={20} />
                Hỏi đáp công dân (FAQ)
              </h4>
              <p className="text-base text-black font-medium mb-6">
                Giải đáp nhanh các thắc mắc về thủ tục hành chính và dịch vụ công của tỉnh.
              </p>
              
              <div className="space-y-3 flex-1 overflow-y-auto max-h-[280px] pr-1">
                {FAQ_ITEMS.map((item) => {
                  const isOpen = activeFaqId === item.id;
                  return (
                    <div 
                      key={item.id} 
                      className={`border rounded-xl transition-all duration-200 overflow-hidden ${
                        isOpen ? 'border-blue-200 bg-blue-50/10 shadow-sm' : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50/30'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setActiveFaqId(isOpen ? null : item.id)}
                        className="w-full text-left p-4 flex items-center justify-between gap-3 select-none"
                      >
                        <span className="text-base font-bold text-slate-800 leading-snug">
                          {item.question}
                        </span>
                        <span className={`text-[#1E3A8A] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                          <ChevronDown size={18} />
                        </span>
                      </button>
                      <div 
                        className={`transition-all duration-300 overflow-hidden ${
                          isOpen ? 'max-h-[300px] border-t border-blue-100/50' : 'max-h-0'
                        }`}
                      >
                        <p className="p-4 text-black text-base leading-relaxed bg-white">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Gửi câu hỏi / Trợ giúp */}
              <div className="mt-auto pt-6 shrink-0 grid grid-cols-2 gap-3">
                <button 
                  type="button"
                  onClick={() => setIsFaqModalOpen(true)}
                  className="w-full bg-[#1E3A8A] hover:bg-[#152a66] text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all shadow-[#1E3A8A]/30 active:scale-[0.98] flex items-center justify-center gap-1.5 text-base cursor-pointer"
                >
                  <Send size={15} />
                  <span>Gửi câu hỏi</span>
                </button>
                <button 
                  type="button"
                  onClick={() => setIsHistoryModalOpen(true)}
                  className="w-full bg-blue-50 hover:bg-blue-100 border border-blue-200 text-[#1E3A8A] font-bold py-3.5 rounded-xl shadow-sm transition-all active:scale-[0.98] flex items-center justify-center gap-1.5 text-base cursor-pointer"
                >
                  <History size={15} />
                  <span>Lịch sử hỏi đáp</span>
                </button>
              </div>
            </div>

            {/* THĂM DÒ Ý KIẾN */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 flex-1 flex flex-col relative overflow-hidden text-left shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute top-0 left-0 right-0 h-2 bg-[#1E3A8A]"></div>
              <h4 className="text-lg font-black text-[#1E3A8A] mt-2 mb-6 shrink-0 flex items-center gap-2">
                <MessageSquare size={20} />
                Thăm dò ý kiến
              </h4>
              <p className="text-lg text-black font-medium mb-6">
                Bạn có hài lòng về giao diện Cổng thông tin không?
              </p>
              <div className="space-y-4 flex-1 mt-2">
                {[
                  "Hài lòng (Giao diện thân thiện, rõ ràng, dễ chịu, dễ đọc)",
                  "Chưa hài lòng",
                  "Cần cập nhật thêm"
                ].map((opt, i) => (
                  <label key={i} className="flex items-start gap-3 cursor-pointer group">
                    <div className="w-5 h-5 rounded-full border-2 border-slate-300 group-hover:border-red-500 flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <span className="text-lg text-black group-hover:text-slate-900 font-medium leading-relaxed">{opt}</span>
                  </label>
                ))}
              </div>
              <div className="mt-auto pt-6 shrink-0">
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all shadow-red-600/30 active:scale-[0.98]">
                  Gửi ý kiến
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* KẾT NỐI DOANH NGHIỆP INTERACTIVE SECTION */}
        <div className="mt-12 md:mt-16 bg-white rounded-[32px] p-6 md:p-10 border border-slate-200/80 shadow-sm text-left">
          <div className="text-center mb-8 md:mb-10 flex flex-col items-center">
            <h3 className="text-2xl md:text-3xl font-black text-[#1E3A8A] tracking-tight uppercase">
              Kết nối doanh nghiệp
            </h3>
            {/* Underline accent split bar (blue & red like Hai Phong portal) */}
            <div className="flex h-1 w-24 rounded-full overflow-hidden mt-3">
              <div className="w-1/2 bg-[#1E3A8A]"></div>
              <div className="w-1/2 bg-[#da1016]"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Side: Logo Cards Grid */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {ENTERPRISES.map((ent, idx) => {
                const isSelected = selectedEnterpriseIdx === idx;
                return (
                  <motion.div
                    key={ent.id}
                    whileHover={{ y: -4, scale: 1.02 }}
                    onClick={() => setSelectedEnterpriseIdx(idx)}
                    className={`bg-white rounded-2xl p-5 md:p-6 flex flex-col items-center justify-center min-h-[120px] md:min-h-[140px] border cursor-pointer select-none transition-all duration-300 relative shadow-sm hover:shadow-md ${
                      isSelected 
                        ? "border-[#1E3A8A] ring-2 ring-[#1E3A8A]/10 scale-[1.02]" 
                        : "border-slate-200 hover:border-slate-350"
                    }`}
                  >
                    {/* Logo container styled according to type */}
                    <div className="w-full flex items-center justify-center h-full">
                      {ent.logoType === 'viettel' && (
                        <div className="flex flex-col items-center justify-center">
                          <span className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#da1016] font-sans">viettel</span>
                          <span className="text-base md:text-base uppercase font-bold text-slate-400 tracking-wider mt-0.5">Theo cách của bạn</span>
                        </div>
                      )}
                      {ent.logoType === 'vnpt' && (
                        <div className="flex items-center gap-2">
                          <div className="w-5.5 h-5.5 rounded-full bg-blue-600 flex items-center justify-center relative overflow-hidden shrink-0">
                            <div className="absolute inset-0.5 border-2 border-white rounded-full opacity-60 rotate-45"></div>
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <span className="text-xl sm:text-2xl md:text-3xl font-black tracking-wide text-blue-700">VNPT</span>
                        </div>
                      )}
                      {ent.logoType === 'vilian' && (
                        <div className="flex flex-col items-center justify-center">
                          <span className="text-xl sm:text-2xl md:text-3xl font-black tracking-widest text-slate-800 font-serif leading-none">ViLiAn</span>
                          <span className="text-base md:text-base font-black text-[#da1016] tracking-widest uppercase mt-1.5">BRAND AGENCY</span>
                        </div>
                      )}
                      {ent.logoType === 'yensao' && (
                        <div className="flex flex-col items-center justify-center">
                          <span className="text-base sm:text-base md:text-base font-black text-blue-700 leading-none tracking-tight text-center">YẾN SÀO KHÁNH HÒA</span>
                          <span className="text-base md:text-base font-black text-amber-500 tracking-wider mt-1.5">SANEST BRAND</span>
                        </div>
                      )}
                      {ent.logoType === 'cangnhatrang' && (
                        <div className="flex flex-col items-center justify-center">
                          <span className="text-base sm:text-base md:text-base font-black text-emerald-800 leading-none uppercase text-center">CẢNG NHA TRANG</span>
                          <span className="text-base md:text-base font-bold text-slate-400 tracking-widest mt-1.5">NHA TRANG PORT</span>
                        </div>
                      )}
                      {ent.logoType === 'ocop' && (
                        <div className="flex flex-col items-center justify-center">
                          <div className="flex gap-0.5 items-center">
                            <span className="text-lg sm:text-xl md:text-2xl font-black text-red-600">O</span>
                            <span className="text-lg sm:text-xl md:text-2xl font-black text-amber-500">C</span>
                            <span className="text-lg sm:text-xl md:text-2xl font-black text-green-600">O</span>
                            <span className="text-lg sm:text-xl md:text-2xl font-black text-blue-600">P</span>
                          </div>
                          <span className="text-base md:text-base font-bold text-slate-400 tracking-wider mt-1">STANDARD QUALITY</span>
                        </div>
                      )}
                      {ent.logoType === 'shinec' && (
                        <div className="flex items-center gap-1.5 shrink-0">
                          <div className="flex gap-0.5 shrink-0">
                            <div className="w-2 h-4.5 bg-emerald-500 rounded-full"></div>
                            <div className="w-2 h-4.5 bg-teal-600 rounded-full"></div>
                            <div className="w-2 h-4.5 bg-sky-500 rounded-full"></div>
                          </div>
                          <span className="text-base sm:text-base md:text-lg font-black text-slate-800 tracking-wider">SHINEC</span>
                        </div>
                      )}
                      {ent.logoType === 'succeed' && (
                        <div className="flex flex-col items-center justify-center">
                          <span className="text-base sm:text-base md:text-base font-black text-[#1E3A8A] leading-none uppercase text-center">CÙNG THÀNH CÔNG</span>
                          <span className="text-base md:text-base font-black text-blue-600 tracking-widest mt-1.5 uppercase">Succeed Together</span>
                        </div>
                      )}
                    </div>

                    {/* Checkmark indicator for selected card */}
                    {isSelected && (
                      <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-[#1E3A8A] flex items-center justify-center text-white shadow-sm">
                        <Check size={10} strokeWidth={3} />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Right Side: Detailed Company Profile Panel */}
            <div className="lg:col-span-5 flex flex-col h-[760px] sm:h-[720px] lg:h-[720px]">
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200/80 shadow-md h-full flex flex-col justify-between text-left relative overflow-hidden">
                {/* Dynamic decorative top-bar styled by company color theme */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${
                  selectedEnterprise.logoType === 'viettel' ? 'bg-[#da1016]' :
                  selectedEnterprise.logoType === 'vnpt' ? 'bg-blue-600' :
                  selectedEnterprise.logoType === 'vilian' ? 'bg-[#da1016]' :
                  selectedEnterprise.logoType === 'yensao' ? 'bg-amber-500' :
                  selectedEnterprise.logoType === 'cangnhatrang' ? 'bg-teal-700' :
                  selectedEnterprise.logoType === 'ocop' ? 'bg-green-600' :
                  selectedEnterprise.logoType === 'shinec' ? 'bg-emerald-600' : 'bg-[#1E3A8A]'
                }`}></div>

                {/* Dynamic thick left-side accent line on detail card container */}
                <div className="flex-1 flex flex-col border-l-4 pl-4 md:pl-5 border-l-[#1E3A8A]/90 overflow-hidden">
                  {/* Badge & Industry */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#1E3A8A] text-[18px] font-extrabold uppercase tracking-wide">
                      <Building2 size={18} className="text-[#1E3A8A]" />
                      {selectedEnterprise.industry}
                    </span>
                  </div>

                  {/* Profile Name */}
                  <h4 className="text-xl md:text-2xl font-black text-slate-800 leading-snug tracking-tight mb-4">
                    {selectedEnterprise.name}
                  </h4>

                  {/* Profile Description */}
                  <p className="text-[18px] md:text-[19px] leading-relaxed text-slate-600 font-medium flex-1 mb-6 overflow-y-auto pr-1">
                    {selectedEnterprise.description}
                  </p>

                  {/* Key contact info box */}
                  <div className="bg-slate-50 rounded-xl p-5 space-y-4 border border-slate-100 text-[18px] shrink-0">
                    <div className="flex items-start gap-3">
                      <span className="font-bold text-slate-400 uppercase tracking-wider shrink-0 mt-0.5 min-w-[90px]">Địa chỉ:</span>
                      <span className="font-semibold text-slate-700 leading-normal">{selectedEnterprise.address}</span>
                    </div>
                    {selectedEnterprise.phone && (
                      <div className="flex items-start gap-3">
                        <span className="font-bold text-slate-400 uppercase tracking-wider shrink-0 min-w-[90px]">Hotline:</span>
                        <span className="font-bold text-slate-700 flex items-center gap-1.5">
                          <Phone size={18} className="text-[#1E3A8A] shrink-0 mt-1" />
                          {selectedEnterprise.phone}
                        </span>
                      </div>
                    )}
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-slate-400 uppercase tracking-wider shrink-0 min-w-[90px]">Website:</span>
                      <a 
                        href={selectedEnterprise.website} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="font-bold text-[#1E3A8A] hover:text-[#da1016] transition-colors hover:underline flex items-center gap-1.5 group/link overflow-hidden text-ellipsis whitespace-nowrap"
                      >
                        {selectedEnterprise.website.replace('https://', '').replace('http://', '')}
                        <ExternalLink size={16} className="text-[#1E3A8A] group-hover/link:text-[#da1016] shrink-0" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bottom controls: Dots and Chevron Nav Arrows */}
                <div className="flex items-center justify-between mt-6 pt-5 border-t border-slate-100 shrink-0">
                  {/* Pagination Indicators */}
                  <div className="flex gap-1.5 items-center">
                    {ENTERPRISES.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={() => setSelectedEnterpriseIdx(dotIdx)}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                          dotIdx === selectedEnterpriseIdx ? "w-5 bg-[#1E3A8A]" : "w-2 bg-slate-200 hover:bg-slate-300"
                        }`}
                        title={`Xem doanh nghiệp ${dotIdx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Manual cycle controls */}
                  <div className="flex gap-2">
                    <button
                      onClick={handlePrevEnterprise}
                      className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 hover:text-[#1E3A8A] flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
                      aria-label="Previous business"
                    >
                      <ChevronLeft size={16} strokeWidth={2.5} />
                    </button>
                    <button
                      onClick={handleNextEnterprise}
                      className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 hover:text-[#1E3A8A] flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
                      aria-label="Next business"
                    >
                      <ChevronRight size={16} strokeWidth={2.5} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* FAQ Question Submission Modal */}
      {isFaqModalOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl w-full max-w-lg overflow-hidden relative text-left">
            <div className="absolute top-0 left-0 right-0 h-2 bg-[#1E3A8A]"></div>
            <div className="p-8">
              <h4 className="text-xl font-black text-slate-800 mb-2 flex items-center gap-2">
                <HelpCircle className="text-[#1E3A8A]" size={24} />
                Gửi câu hỏi ý kiến công dân
              </h4>
              <p className="text-slate-500 text-base mb-6 leading-relaxed">
                Ý kiến đóng góp của bạn sẽ được chuyển đến cơ quan chức năng thuộc tỉnh để tiếp nhận, xử lý và phản hồi trong thời gian sớm nhất.
              </p>

              {!faqSubmitted ? (
                <form onSubmit={(e) => {
                  e.preventDefault();
                  if (!faqName.trim() || !faqContent.trim()) return;
                  setFaqSubmitted(true);
                  setTimeout(() => {
                    setFaqSubmitted(false);
                    setIsFaqModalOpen(false);
                    // Clear fields
                    setFaqName("");
                    setFaqEmail("");
                    setFaqContent("");
                  }, 3000);
                }} className="space-y-4">
                  <div>
                    <label className="block text-base font-bold text-slate-700 mb-1.5">Họ và tên của bạn <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      required 
                      value={faqName}
                      onChange={(e) => setFaqName(e.target.value)}
                      placeholder="Nguyễn Văn A" 
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-700 font-medium text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-bold text-slate-700 mb-1.5">Số điện thoại hoặc Email</label>
                    <input 
                      type="text" 
                      value={faqEmail}
                      onChange={(e) => setFaqEmail(e.target.value)}
                      placeholder="example@gmail.com hoặc 090..." 
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-700 font-medium text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-bold text-slate-700 mb-1.5">Cơ quan tiếp nhận câu hỏi</label>
                    <select 
                      value={faqDept}
                      onChange={(e) => setFaqDept(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-700 font-medium bg-white text-base"
                    >
                      <option value="Văn phòng UBND tỉnh Khánh Hòa">Văn phòng UBND tỉnh Khánh Hòa</option>
                      <option value="Sở Tư pháp tỉnh Khánh Hòa">Sở Tư pháp tỉnh Khánh Hòa</option>
                      <option value="Sở Xây dựng tỉnh Khánh Hòa">Sở Xây dựng tỉnh Khánh Hòa</option>
                      <option value="Sở Tài nguyên và Môi trường tỉnh Khánh Hòa">Sở Tài nguyên và Môi trường tỉnh Khánh Hòa</option>
                      <option value="Sở Y tế tỉnh Khánh Hòa">Sở Y tế tỉnh Khánh Hòa</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-base font-bold text-slate-700 mb-1.5">Nội dung câu hỏi / phản ánh <span className="text-red-500">*</span></label>
                    <textarea 
                      required
                      value={faqContent}
                      onChange={(e) => setFaqContent(e.target.value)}
                      rows={4}
                      placeholder="Nhập nội dung câu hỏi hoặc phản ánh chi tiết tại đây..." 
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-700 font-medium resize-none text-base"
                    ></textarea>
                  </div>
                  <div className="flex gap-3 justify-end pt-2 text-base">
                    <button 
                      type="button" 
                      onClick={() => setIsFaqModalOpen(false)}
                      className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-all cursor-pointer"
                    >
                      Hủy bỏ
                    </button>
                    <button 
                      type="submit" 
                      className="px-5 py-2.5 bg-[#1E3A8A] hover:bg-[#152a66] text-white font-bold rounded-xl transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
                    >
                      <Send size={14} />
                      Gửi câu hỏi
                    </button>
                  </div>
                </form>
              ) : (
                <div className="py-8 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-100 text-[#1E3A8A] rounded-full flex items-center justify-center animate-bounce">
                    <Check size={32} />
                  </div>
                  <h5 className="text-lg font-bold text-slate-800">
                    Gửi câu hỏi thành công!
                  </h5>
                  <p className="text-slate-500 text-base max-w-sm leading-relaxed">
                    Cảm ơn <strong className="text-slate-800">{faqName}</strong> đã gửi ý kiến đóng góp. Hệ thống đã tiếp nhận câu hỏi và chuyển tiếp cho <strong className="text-slate-800">{faqDept}</strong> xác minh, xử lý và trả lời bạn trong thời gian sớm nhất.
                  </p>
                  <span className="text-base text-[#1E3A8A] font-medium">Đang tự động đóng cửa sổ...</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Lịch sử hỏi đáp / Ý kiến công dân đã giải đáp Modal */}
      {isHistoryModalOpen && (() => {
        const filteredPastFaqs = PAST_FAQS.filter((faq) => {
          const matchesSearch = 
            faq.title.toLowerCase().includes(historySearchQuery.toLowerCase()) ||
            faq.content.toLowerCase().includes(historySearchQuery.toLowerCase()) ||
            faq.sender.toLowerCase().includes(historySearchQuery.toLowerCase()) ||
            faq.answerDept.toLowerCase().includes(historySearchQuery.toLowerCase());
          
          const matchesField = historySelectedField === "Tất cả" || faq.field === historySelectedField;
          return matchesSearch && matchesField;
        });

        const selectedPastFaq = PAST_FAQS.find(f => f.id === selectedPastFaqId) || filteredPastFaqs[0] || PAST_FAQS[0];

        return (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-[32px] border border-slate-100 shadow-2xl w-full max-w-6xl h-[85vh] flex flex-col overflow-hidden relative text-left">
              <div className="absolute top-0 left-0 right-0 h-2 bg-[#1E3A8A]"></div>
              
              {/* Header */}
              <div className="p-6 border-b border-slate-100 flex items-center justify-between shrink-0 bg-slate-50/50">
                <div>
                  <h4 className="text-xl font-black text-slate-800 flex items-center gap-2.5">
                    <History className="text-[#1E3A8A]" size={24} />
                    CỔNG TRA CỨU HỎI ĐÁP &amp; PHẢN ÁNH Ý KIẾN CÔNG DÂN
                  </h4>
                  <p className="text-slate-500 text-base mt-0.5 leading-relaxed">
                    Tổng hợp thông tin giải trình ý kiến cử tri và phản hồi trực tiếp của các cơ quan ban ngành (Tỉnh Khánh Hòa)
                  </p>
                </div>
                <button 
                  type="button" 
                  onClick={() => {
                    setIsHistoryModalOpen(false);
                    setHistorySearchQuery("");
                    setHistorySelectedField("Tất cả");
                  }}
                  className="w-10 h-10 hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition-all rounded-full flex items-center justify-center border border-slate-100 shadow-sm cursor-pointer"
                  title="Đóng cửa sổ"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
                
                {/* Left Sidebar: Search, Categories, and List */}
                <div className="w-full md:w-[380px] border-r border-slate-100 flex flex-col bg-slate-50/30 overflow-hidden shrink-0">
                  {/* Search Bar */}
                  <div className="p-4 border-b border-slate-100 shrink-0 bg-white">
                    <div className="relative">
                      <input 
                        type="text" 
                        value={historySearchQuery}
                        onChange={(e) => setHistorySearchQuery(e.target.value)}
                        placeholder="Tìm kiếm tiêu đề, nội dung, cơ quan..." 
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-700 font-medium text-base shadow-sm"
                      />
                      <Search className="absolute left-3.5 top-3 text-slate-400" size={16} />
                    </div>
                  </div>

                  {/* Horizontal Scrollable Categories with Custom Scroll Handles */}
                  <div className="relative border-b border-slate-100 bg-white flex items-center px-2 shrink-0 select-none">
                    <button 
                      type="button"
                      onClick={() => scrollHistoryCategories("left")}
                      className="w-7 h-7 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-800 flex items-center justify-center border border-slate-100 shadow-sm shrink-0 mr-1.5 cursor-pointer transition-all active:scale-90"
                      title="Cuộn trái"
                    >
                      <ChevronLeft size={14} strokeWidth={2.5} />
                    </button>
                    
                    <div 
                      ref={historyCategoryContainerRef}
                      className="flex-1 py-2.5 flex gap-1.5 overflow-x-auto scroll-smooth pr-1 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent"
                      style={{ scrollbarWidth: "thin" }}
                    >
                      {["Tất cả", "Đô thị & Giao thông", "Tài nguyên & Môi trường", "Xây dựng", "Giáo dục & Y tế", "Tư pháp & Thủ tục khác"].map((field) => (
                        <button
                          key={field}
                          onClick={() => {
                            setHistorySelectedField(field);
                            // Auto-select first in filtered if current selected is no longer matching
                            const matches = PAST_FAQS.filter(f => field === "Tất cả" || f.field === field);
                            if (matches.length > 0 && !matches.some(m => m.id === selectedPastFaqId)) {
                              setSelectedPastFaqId(matches[0].id);
                            }
                          }}
                          className={`px-3 py-1.5 rounded-full text-base font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 border ${
                            historySelectedField === field 
                              ? "bg-[#1E3A8A] text-white border-[#1E3A8A] shadow-md shadow-blue-900/10" 
                              : "bg-white hover:bg-slate-100 text-slate-600 border-slate-200"
                          }`}
                        >
                          {field}
                        </button>
                      ))}
                    </div>

                    <button 
                      type="button"
                      onClick={() => scrollHistoryCategories("right")}
                      className="w-7 h-7 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-800 flex items-center justify-center border border-slate-100 shadow-sm shrink-0 ml-1.5 cursor-pointer transition-all active:scale-90"
                      title="Cuộn phải"
                    >
                      <ChevronRight size={14} strokeWidth={2.5} />
                    </button>
                  </div>

                  {/* Scrollable Questions List */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50/50">
                    {filteredPastFaqs.length > 0 ? (
                      filteredPastFaqs.map((faq) => {
                        const isSelected = faq.id === selectedPastFaq.id;
                        return (
                          <div
                            key={faq.id}
                            onClick={() => setSelectedPastFaqId(faq.id)}
                            className={`cursor-pointer p-4 rounded-2xl border text-left transition-all relative ${
                              isSelected 
                                ? "border-[#1E3A8A] bg-blue-50/40 shadow-sm ring-2 ring-[#1E3A8A]/10" 
                                : "border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 shadow-sm"
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2 mb-1.5">
                              <span className={`text-base font-bold px-2 py-0.5 rounded-md uppercase tracking-wider border ${
                                faq.field === "Tài nguyên & Môi trường" 
                                  ? "text-emerald-700 bg-emerald-50 border-emerald-200/80 font-extrabold" 
                                  : faq.field === "Đô thị & Giao thông"
                                  ? "text-blue-700 bg-blue-50 border-blue-200/80"
                                  : faq.field === "Xây dựng"
                                  ? "text-amber-700 bg-amber-50 border-amber-200/80"
                                  : faq.field === "Giáo dục & Y tế"
                                  ? "text-rose-700 bg-rose-50 border-rose-200/80"
                                  : "text-purple-700 bg-purple-50 border-purple-200/80"
                              }`}>
                                {faq.field}
                              </span>
                              <span className="text-base text-slate-400 font-medium">{faq.date}</span>
                            </div>
                            <h5 className="text-base font-bold text-slate-800 leading-snug line-clamp-2 mb-2 group-hover:text-[#1E3A8A]">
                              {faq.title}
                            </h5>
                            <div className="flex items-center justify-between text-base text-slate-500 font-medium">
                              <span className="truncate max-w-[180px]">Người gửi: {faq.sender.split(" (")[0]}</span>
                              <span className="text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded text-base uppercase">
                                {faq.status}
                              </span>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div className="py-12 px-4 text-center text-slate-400 flex flex-col items-center justify-center space-y-3">
                        <HelpCircle className="opacity-20 text-slate-500" size={48} />
                        <span className="text-base font-bold">Không tìm thấy câu hỏi hoặc ý kiến phù hợp</span>
                        <button 
                          onClick={() => {
                            setHistorySearchQuery("");
                            setHistorySelectedField("Tất cả");
                          }}
                          className="text-base text-[#1E3A8A] font-bold underline"
                        >
                          Xóa các bộ lọc
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Panel: Detailed View */}
                <div className="flex-1 flex flex-col overflow-y-auto bg-white p-6 md:p-8">
                  {selectedPastFaq ? (
                    <div className="space-y-6">
                      
                      {/* Meta and Status Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100 text-base">
                        <div className="flex items-center gap-2">
                          <span className={`font-bold text-base px-3 py-1 rounded-full uppercase tracking-wider border ${
                            selectedPastFaq.field === "Tài nguyên & Môi trường"
                              ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                              : selectedPastFaq.field === "Đô thị & Giao thông"
                              ? "bg-blue-50 text-blue-700 border-blue-200"
                              : selectedPastFaq.field === "Xây dựng"
                              ? "bg-amber-50 text-amber-700 border-amber-200"
                              : selectedPastFaq.field === "Giáo dục & Y tế"
                              ? "bg-rose-50 text-rose-700 border-rose-200"
                              : "bg-purple-50 text-purple-700 border-purple-200"
                          }`}>
                            Lĩnh vực: {selectedPastFaq.field}
                          </span>
                          <span className="text-slate-400 font-bold">•</span>
                          <span className="text-slate-500 font-bold">Ngày nhận: {selectedPastFaq.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold text-base px-3 py-1 rounded-full uppercase tracking-wide">
                          <Check size={14} />
                          <span>Đã trả lời &amp; Công khai</span>
                        </div>
                      </div>

                      {/* Question Details */}
                      <div>
                        <h3 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight leading-snug mb-4">
                          {selectedPastFaq.title}
                        </h3>
                        <div className="flex items-center gap-2 text-slate-500 text-base font-semibold mb-4 bg-slate-50 p-3 rounded-xl border border-slate-100">
                          <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-black text-base shrink-0">
                            {selectedPastFaq.sender.charAt(0)}
                          </div>
                          <div>
                            <span className="text-slate-700 font-bold">{selectedPastFaq.sender}</span>
                            <span className="text-slate-400 font-bold mx-2">|</span>
                            <span className="text-base text-slate-400 font-semibold">Hình thức: Gửi ý kiến cử tri / Hỏi đáp điện tử</span>
                          </div>
                        </div>

                        <div className="bg-slate-50/50 rounded-2xl p-5 border border-slate-200 text-slate-600 font-medium italic leading-relaxed text-base relative">
                          <span className="absolute -top-3.5 left-4 text-5xl font-serif text-slate-200 pointer-events-none">“</span>
                          <p className="relative z-10 pl-2">
                            {selectedPastFaq.content}
                          </p>
                        </div>
                      </div>

                      {/* Answer Details from authority */}
                      <div className="pt-2">
                        <div className="bg-blue-50/60 border-l-4 border-[#1E3A8A] p-4 rounded-r-2xl mb-4 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Building2 className="text-[#1E3A8A]" size={20} />
                            <span className="text-[#1E3A8A] font-black text-base uppercase">
                              Cơ quan giải đáp: {selectedPastFaq.answerDept}
                            </span>
                          </div>
                          <span className="text-base font-bold bg-[#1E3A8A]/10 text-[#1E3A8A] px-2.5 py-1 rounded-md uppercase">
                            Phản hồi chính thức
                          </span>
                        </div>

                        <div className="text-slate-700 text-base leading-relaxed pl-1 space-y-4 font-normal whitespace-pre-line bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                          {selectedPastFaq.answerContent}
                        </div>
                      </div>

                    </div>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center text-slate-400">
                      <HelpCircle className="opacity-10 text-slate-500 mb-4" size={64} />
                      <span className="text-base font-bold">Vui lòng chọn một câu hỏi để xem chi tiết lời giải đáp</span>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>
        );
      })()}
    </>
  );
}

export function SharedNewsTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const TICKER_ITEMS = [
    { type: "TIN KHẨN", text: "Cảnh báo mưa dông diện rộng tại khu vực vùng núi Khánh Sơn và Khánh Vĩnh từ chiều tối nay. Người dân đề phòng sạt lở." },
    { type: "SỰ KIỆN", text: "Chào đón tàu du lịch biển siêu sang của Italia chở hơn 3.500 du khách quốc tế cập Cảng Nha Trang tuần này." },
    { type: "CHỈ ĐẠO", text: "UBND Tỉnh yêu cầu đẩy nhanh tiến độ số hóa hồ sơ thủ tục hành chính, phấn đấu đạt 100% dịch vụ công trực tuyến mức độ 4." },
    { type: "KINH TẾ", text: "Khánh Hòa lọt top 10 tỉnh thành có tốc độ tăng trưởng GRDP cao nhất cả nước trong nửa đầu năm 2026." }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TICKER_ITEMS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const current = TICKER_ITEMS[currentIndex];

  return (
    <div className="bg-slate-900 border border-slate-800 text-white rounded-2xl p-4.5 flex items-center gap-4 overflow-hidden relative shadow-md">
      <div className="flex items-center gap-2 shrink-0 select-none">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
        <span className={`px-3 py-1 rounded-lg text-base font-black tracking-wider uppercase text-white ${current.type === "TIN KHẨN" ? "bg-red-600" : current.type === "SỰ KIỆN" ? "bg-emerald-600" : "bg-[#1E3A8A]"}`}>
          {current.type}
        </span>
      </div>
      <div className="flex-1 overflow-hidden h-7 relative flex items-center">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="text-base font-bold text-slate-100 truncate hover:text-white transition-colors cursor-pointer select-none text-left"
        >
          {current.text}
        </motion.div>
      </div>
    </div>
  );
}

export function SharedEmergencyHotlines() {
  const HOTLINES = [
    { name: "Công an Phản ứng nhanh", phone: "113", desc: "An ninh trật tự, tai nạn xã hội", color: "border-blue-500 text-blue-600 bg-blue-50/50" },
    { name: "Cứu nạn & Cứu hỏa", phone: "114", desc: "Chữa cháy, cứu hộ khẩn cấp", color: "border-blue-500 text-blue-600 bg-blue-50/50" },
    { name: "Cấp cứu Y tế", phone: "115", desc: "Cấp cứu thương tích, bệnh tật", color: "border-emerald-500 text-emerald-600 bg-emerald-50/50" },
    { name: "Tổng đài Dịch vụ công KH", phone: "(0258) 1022", desc: "Tiếp nhận mọi ý kiến phản ánh", color: "border-[#1E3A8A] text-[#1E3A8A] bg-blue-50/20" }
  ];

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm text-left">
      <div className="flex items-center justify-between mb-5">
        <h4 className="text-base font-black uppercase text-slate-400 tracking-wider">Đường dây nóng khẩn cấp</h4>
        <span className="text-base font-bold bg-blue-50 text-blue-600 px-2 py-0.5 rounded-md uppercase tracking-wider">Hoạt động 24/7</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {HOTLINES.map((h, i) => (
          <div key={i} className="flex items-center gap-3.5 p-4 bg-slate-50 border border-slate-100 rounded-xl hover:border-slate-200 transition-colors">
            <div className={`w-11 h-11 rounded-full border flex items-center justify-center shrink-0 ${h.color}`}>
              <Phone size={18} />
            </div>
            <div className="min-w-0">
              <h5 className="text-base font-black text-slate-800 uppercase truncate">{h.name}</h5>
              <a href={`tel:${h.phone.replace(/[^0-9]/g, '')}`} className="text-lg font-black text-slate-900 hover:text-blue-600 transition-colors block mt-0.5">
                {h.phone}
              </a>
              <p className="text-base text-slate-400 font-bold mt-0.5 truncate">{h.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SharedGovDirectoryLinks() {
  const COLUMNS = [
    {
      title: "Dịch vụ công & Một cửa",
      links: [
        { label: "Cổng Dịch vụ công Quốc gia", url: "https://dichvucong.gov.vn" },
        { label: "Cổng Dịch vụ công Khánh Hòa", url: "https://dichvucong.khanhhoa.gov.vn" },
        { label: "Hệ thống Một cửa điện tử Tỉnh", url: "https://motcua.khanhhoa.gov.vn" }
      ]
    },
    {
      title: "Trang tin Chính phủ & Đảng bộ",
      links: [
        { label: "Cổng Thông tin điện tử Chính phủ", url: "https://chinhphu.vn" },
        { label: "Trang tin Đảng bộ tỉnh Khánh Hòa", url: "https://tinhuykhanhhoa.vn" },
        { label: "Hội đồng nhân dân tỉnh Khánh Hòa", url: "https://hdnd.khanhhoa.gov.vn" }
      ]
    },
    {
      title: "Cơ sở dữ liệu liên kết",
      links: [
        { label: "Cơ sở dữ liệu Văn bản pháp luật", url: "https://vbpl.vn" },
        { label: "Cổng thông tin Quy hoạch Tỉnh", url: "https://quyhoach.khanhhoa.gov.vn" },
        { label: "Cổng thông tin Cục Thuế Tỉnh", url: "https://cucthue.khanhhoa.gov.vn" }
      ]
    }
  ];

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm text-left">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {COLUMNS.map((col, i) => (
          <div key={i} className="space-y-4">
            <h5 className="text-base font-black uppercase text-slate-400 tracking-wider border-b border-slate-100 pb-2">
              {col.title}
            </h5>
            <ul className="space-y-2.5">
              {col.links.map((link, j) => (
                <li key={j}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-slate-600 hover:text-[#1E3A8A] flex items-center gap-1.5 transition-colors group"
                  >
                    <ChevronRight size={14} className="text-slate-400 group-hover:text-[#1E3A8A] transition-colors" />
                    <span>{link.label}</span>
                    <ExternalLink size={11} className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

