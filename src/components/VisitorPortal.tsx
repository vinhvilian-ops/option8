import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Compass,
  Calendar,
  MapPin,
  Plane,
  Languages,
  Heart,
  Sun,
  Waves,
  Star,
  Play,
  CheckCircle,
  HelpCircle,
  Search,
  Database,
  ChevronRight,
  Info,
  Award,
  BookOpen,
  Map,
  Users,
  Video,
  Sparkles,
  UtensilsCrossed,
  Camera,
  Tent,
  X,
  ShieldAlert,
  Briefcase,
  HeartPulse,
  Zap,
  FileText,
  TrendingUp,
  Layers,
  MessageSquare,
  Send,
  PhoneCall,
  CloudSun,
  Droplets,
  Wind,
  Megaphone,
  Train,
  Utensils,
  BedDouble,
  Hospital,
  Landmark,
  CreditCard,
  ShoppingBag,
  Tv,
  Building2,
  Globe,
  Plus,
  LayoutGrid,
  Palmtree
} from "lucide-react";
import MultimediaSection from "./MultimediaSection";

const HIGHLIGHT_DETAILS: Record<string, {
  title: string;
  category: string;
  image: string;
  subtitle: string;
  sections: { title: string; content: string }[];
  tips: string[];
}> = {
  "Tháp Bà Ponagar cổ kính nghìn năm": {
    title: "Tháp Bà Ponagar cổ kính nghìn năm",
    category: "Di sản Văn hóa Chăm Pa",
    image: "/src/assets/images/ponagar_tower_sunset_1780308166808.png",
    subtitle: "Biểu tượng tâm linh kiêu hãnh ngàn năm bên dòng sông Cái",
    sections: [
      {
        title: "1. Tổng quan lịch sử vĩ đại",
        content: "Tháp Bà Ponagar là quần thể đền tháp Chăm Pa được xây dựng từ khoảng thế kỷ thứ VIII đến thế kỷ thứ XIII. Đây là thời kỳ phát triển rực rỡ nhất của Vương quốc Chăm Pa cổ đại. Quần thể này tọa lạc trên đỉnh một ngọn đồi nhỏ cao khoảng 10-12 mét so với mực nước biển, nằm ở cửa sông Cái, thành phố Nha Trang. Tên gọi 'Tháp Po Nagar' thực chất là tên của ngọn tháp lớn nhất, cao khoảng 23 mét, thờ nữ thần Po Ina Nagar - người được dân gian gọi kính cẩn là Thánh Mẫu Thiên Y A Na."
      },
      {
        title: "2. Kiến trúc gạch nung độc bản kì vĩ",
        content: "Điểm độc đáo thu hút các nhà khoa học và du khách suốt hàng thế kỷ qua chính là kỹ thuật xây tháp của người Chăm cổ. Toàn bộ đền tháp được xây bằng gạch nung màu đỏ sẫm đặc trưng, khít mạch nối liền nhau mà hoàn toàn không thấy vết vữa liên kết. Các bức tường tháp được trang trí bằng các hình chạm khắc tinh xảo hình vũ nữ, tiên nữ thần thoại Apasara, các linh vật và thần voi Ganesha. Trải qua mưa nắng dãi dầu và chiến tranh tàn phá, các tháp gạch vẫn sừng sững uy nghiêm, màu gạch nung vẫn đỏ thắm rạng ngời dưới ánh hoàng hôn."
      },
      {
        title: "3. Tầng Mandapa huyền thoại",
        content: "Khi bước qua lối vào chính, du khách sẽ bắt gặp tầng Mandapa (nhà khách tiền đường). Nơi đây gồm 10 cột gạch lớn xếp thành hai hàng sừng sững bên ngoài và 12 cột nhỏ xếp vây quanh bên trong. Theo nghiên cứu, đây từng là nơi sửa soạn lễ phục, chuẩn bị lễ vật trang trọng của nhà vua và các tu sĩ trước khi làm lễ tế Thánh Mẫu ở các tháp phía trên thượng viện."
      },
      {
        title: "4. Lễ hội Tháp Bà di sản phi vật thể quốc gia",
        content: "Hàng muôn vạn đồng bào từ vùng duyên hải miền Trung từ Nam chí Bắc hành hương dâng bái. Lễ hội Tháp Bà Ponagar diễn ra từ ngày 20 đến 23 tháng 3 âm lịch hàng năm. Đây là dịp để người dân tỏ lòng biết ơn sâu sắc đối với Thánh Mẫu Thiên Y A Na - người mẹ vĩ đại của xứ sở trầm hương, người đã có công truyền dạy người dân cách cày cấy, dệt vải, chăn nuôi và bảo hộ cuộc sống an lành, ấm no. Những điệu múa bóng dâng Mẫu mềm mại thướt tha hòa cùng khói trầm nghi ngút tạo nên một không gian tâm linh linh thiêng, huyền bí vô cùng."
      }
    ],
    tips: [
      "Vé tham quan là 30.000đ/lượt, gửi xe máy phía dưới chân đồi khoảng 5.000đ.",
      "Vui lòng mặc trang phục kín đáo (che vai và đầu gối) khi vào bên trong điện thờ tháp chính. Ban quản lý có chuẩn bị sẵn áo lam dài miễn phí cho du khách mượn tạm.",
      "Thời điểm chụp ảnh đẹp nhất là lúc bình minh bừng sáng hoặc hoàng hôn buông xuống (khoảng 16h30 - 17h30), khi ánh nắng vàng rực rỡ chiếu xiên qua tháp gạch đỏ cổ kính tạo hiệu ứng mãn nhãn.",
      "Du khách có thể kết hợp tắm bùn khoáng nóng Tháp Bà ngay gần khu di tích sau buổi tham quan để thư giãn tối ưu."
    ]
  },
  "Nem nướng Ninh Hòa trứ danh": {
    title: "Nem nướng Ninh Hòa trứ danh",
    category: "Tinh hoa Ẩm thực Khánh Hòa",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600",
    subtitle: "Món quà dân dã đượm vị mặn mòi xứ biển gió ngàn",
    sections: [
      {
        title: "1. Nguồn gốc xuất xứ",
        content: "Nem nướng có nguồn gốc từ thị xã Ninh Hòa - một vùng đất bán sơn địa nằm cách thành phố biển Nha Trang khoảng 30km về phía bắc. Ban đầu, đây chỉ là món ăn gia đình mộc mạc làm vào dịp lễ tết hoặc cúng giỗ. Tuy nhiên, nhờ hương vị hấp dẫn đặc sắc vượt trội, món nem nướng Ninh Hòa đã nhanh chóng lan tỏa khắp tỉnh Khánh Hòa và trở thành một đại sứ ẩm thực nổi tiếng quốc tế, thu hút bất kỳ ai đặt chân đến miền duyên hải này."
      },
      {
        title: "2. Quy trình chế biến công phu",
        content: "Để có những cây nem nướng thơm ngon dai giòn tự nhiên, người thợ làm nem phải chọn thịt đùi heo đất vừa mổ còn ấm nóng dẻo, lọc bỏ hoàn toàn gân bám rồi xay nhuyễn, giã liên tục bằng tay hoặc chày máy. Sau đó, thịt được trộn cùng mỡ gáy heo xắt hạt lựu li ti, tỏi băm thơm, tiêu hột cay và gia vị bí truyền. Hỗn hợp nem dẻo quánh này được bọc đều tăm tắp quanh những que sả thơm hoặc đũa tre rồi nướng trực tiếp trên than củi dừa đỏ rực. Khi nướng, người đầu bếp phải liên tục xoay tay để mỡ chảy đều xèo xèo, nem chín vàng ươm bóng bẩy rực rỡ."
      },
      {
        title: "3. Bánh tráng chiên giòn rụm và nước sốt bí truyền",
        content: "Một phần nem nướng Ninh Hòa hoàn chỉnh không thể thiếu đĩa bánh tráng chiên giòn tan (gọi là bánh ram). Bánh ram được cuốn từ bánh tráng mặn Ninh Hòa rồi thả vào chảo dầu nóng chiên phồng giòn rụm. Linh hồn làm nên sự thành bại của món nem chính là chén nước chấm sánh đặc có màu vàng cam bắt mắt. Nước sốt này được ninh ấm từ gạo nếp thơm dẻo, đậu nành xay, gan heo giã nhỏ, thịt nạc dăm băm nhuyễn và tỏi ớt, đun liu riu nhiều giờ tạo độ sánh mượt, béo bùi dịu ngọt khó cưỡng."
      },
      {
        title: "4. Bản giao hưởng rau sống núi rừng",
        content: "Ăn kèm nem nướng là một 'khu rừng thu nhỏ' với đủ loại rau tươi roi rói: xà lách, tía tô, húng quế, diếp cá, ngò ôm, dưa leo xắt mỏng, xoài xanh bào chua, khế chua và chuối chát xắt mỏng để khử mùi tanh. Khi ăn, du khách đặt bánh tráng tẻ mỏng lên lòng bàn tay, lần lượt xếp rau sống, nem nướng ấm nóng, bánh ram chiên giòn rụm, xoài khế, cuộn tròn thật chặt tay rồi chấm ngập sâu vào chén nước sốt sánh ấm dồi dào vị béo ngọt bùi bùi. Cảm giác cắn ngập miệng nổ giòn tan của ram và vị ngọt đậm đà của nem tạo nên bản giao hưởng ẩm thực hoàn hảo khó phai."
      }
    ],
    tips: [
      "Địa chỉ khuyên dùng: Quán Nem Đặng Văn Quyên (16A Lãn Ông hoặc số 2-4 Phan Bội Châu, Nha Trang), Nem Ngọc Tiên (59 Lê Thành Phương).",
      "Hãy ăn khi nước sốt chấm còn ấm nóng, bạn có thể rắc thêm chút hành phi giòn và một vài hạt đậu phộng giã nhỏ vào nước chấm để nhân đôi vị thơm bùi.",
      "Nem nướng chua Ninh Hòa cũng là một đặc sản mua làm quà tuyệt hảo đi kèm. Nem chua được gói tỉ mỉ trong lá chùm ruột hoặc lá khế rồi bọc lá chuối dày dặn bên ngoài, sau 3-5 ngày tự lên men chua ngọt dai sần sật cực bắt mồi."
    ]
  }
};

const BUSINESS_PROMO_DETAILS: Record<string, {
  name: string;
  category: string;
  image: string;
  phone: string;
  url: string;
  address: string;
  promotion: string;
  description: string;
  highlights: string[];
  terms: string[];
}> = {
  "pb-1": {
    name: "Yến Sào Khánh Hòa Sanest",
    category: "Quà tặng & Đặc sản",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=600",
    phone: "1800 558879",
    url: "https://yensaokhanhhoa.com.vn",
    address: "Số 06 Phố Pasteur, Phường Xương Huân, TP. Nha Trang, Tỉnh Khánh Hòa",
    promotion: "🎁 ƯU ĐÃI ĐẶC QUYỀN DU KHÁCH: Giảm ngay 10% cho tất cả các dòng yến hộp quà tặng cao cấp & Tặng kèm 01 hũ nước yến đông trùng hạ thảo thượng hạng khi quét mã ưu đãi thành viên tại quầy.",
    description: "Công ty Yến sào Khánh Hòa tự hào là đơn vị dẫn đầu cả nước trong công nghệ bảo tồn, chăm sóc và khai thác tổ yến tự nhiên tại các đảo đá ngoài khơi vịnh Nha Trang. Yến sào Khánh Hòa khai thác hoang dã chứa hàm lượng vi chất dinh dưỡng siêu hạng đứng đầu Đông Nam Á, mang lại giá trị phục hồi sinh lực vượt trội và là món quà sức khỏe quý tộc trân quý nhất.",
    highlights: [
      "100% tổ yến thiên nhiên khai thác bền vững từ hơn 30 đảo yến hoang sơ ngoài khơi Khánh Hòa.",
      "Được chứng nhận chất lượng nghiêm ngặt bởi FDA Hoa Kỳ và các tổ chức kiểm định quốc tế uy tín.",
      "Hộp quà tặng bọc gấm đỏ sang trọng, phụ kiện chưng yến đường phèn hạt sen đi kèm hoàn chỉnh.",
      "Dịch vụ đóng gói chuyên nghiệp chống sốc, hỗ trợ đóng thùng xốp đạt tiêu chuẩn ký gửi an ninh hàng không hoàn toàn miễn phí."
    ],
    terms: [
      "Áp dụng cho du khách xuất trình màn hình ưu đãi này trực tiếp tại hệ thống showroom chính hãng Khánh Hòa.",
      "Không áp dụng cộng gộp đồng thời với các chương trình khuyến mãi nội bộ khác.",
      "Mỗi du khách được nhận tối đa 02 hũ nước yến tặng kèm trong suốt hành trình.",
      "Hạn áp dụng đến hết ngày 31/12/2026."
    ]
  },
  "pb-5": {
    name: "Six Senses Ninh Van Bay",
    category: "Lưu trú & Resort",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=600",
    phone: "0258 3524268",
    url: "https://www.sixsenses.com/en/resorts/ninh-van-bay",
    address: "Bán đảo Ninh Vân, Thị xã Ninh Hòa, Tỉnh Khánh Hòa (Đón tàu tại bến tàu Six Senses Nha Trang)",
    promotion: "💎 KHÁNH HÒA PREMIUM STAY: Miễn phí nâng hạng phòng biệt thự hướng biển (tùy tình trạng phòng thực tế), tặng 01 liệu trình massage trị liệu bùn khoáng thiên nhiên 45 phút cho 02 người, và miễn phí hoàn toàn dịch vụ đưa đón bằng cano cao tốc vượt vịnh lộng gió.",
    description: "Nép mình bên những mỏm đá granite khổng lồ lãng mạn hướng thẳng ra làn nước xanh ngọc phẳng lặng, Six Senses Ninh Van Bay mang đến định nghĩa tuyệt đối về chốn ẩn dật sinh thái xa hoa đẳng cấp sáu sao châu lục. Các biệt thự được xây thủ công hoàn toàn từ gỗ dừa, lá cọ, sở hữu hồ bơi vô cực riêng tư tạc vào đá và quản gia tận tâm hỗ trợ du khách 24/7.",
    highlights: [
      "Tách biệt hoàn hảo trên bán đảo hoang sơ, chỉ có thể tiếp cận bằng đường biển riêng tư.",
      "Hệ sinh thái san hô tự nhiên ngay thềm biệt thự, rùa biển quý hiếm thường xuyên xuất hiện.",
      "Ẩm thực sinh thái 'Organic Farm-to-Table' lấy nguyên liệu thảo mộc từ trang trại riêng rộng 2 hecta của resort.",
      "Triết lý nghỉ dưỡng chữa lành chuyên sâu với đội ngũ chuyên gia Ayurvedic phục hồi sức khỏe tinh thần hàng đầu thế giới."
    ],
    terms: [
      "Yêu cầu đặt phòng tối thiểu trước 03 ngày thông qua Hotline chính thức của Resort và cung cấp mã ưu đãi 'VISIT-KHANHHOA-6S'.",
      "Mã ưu đãi áp dụng cho kỳ nghỉ từ 2 đêm liên tiếp trở lên.",
      "Không áp dụng cho các dịp lễ tết đặc biệt quốc gia.",
      "Hạn áp dụng dịch vụ đến hết ngày 30/11/2026."
    ]
  }
};

// Types for portal
interface Article {
  title: string;
  engTitle?: string;
  date: string;
  img: string;
  isFeatured?: boolean;
}

const CUISINES = [
  {
    name: "Nem nướng Ninh Hòa",
    desc: "Nem băm nướng bọc trên que sả thơm nức, ăn kèm ram giòn tan, rau thơm đầy bát dĩa thu hội.",
    votes: 4120,
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400"
  },
  {
    name: "Bún sứa Nha Trang",
    desc: "Tô bún chan nước ngọt trong thanh nấu từ cá dăm, sứa giòn dẻo tươi rói của vùng biển xa bờ.",
    votes: 3840,
    img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=400"
  },
  {
    name: "Xoài Úc chín ngọt Cam Lâm",
    desc: "Trái quả chín căng mịn vàng óng rực rỡ, thịt ngọt đượm vị biển đảo mà dồi dào chất xơ.",
    votes: 2125,
    img: "https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=400"
  },
  {
    name: "Tôm hùm Bình Ba",
    desc: "Vương quốc đảo nuôi tôm bự, thịt béo thơm rắc sả nướng trên củi dừa ven ghềnh rặng lộng lẫy.",
    votes: 5122,
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400"
  }
];

const DESTINATIONS = [
  { id: "vinwonders", name: "VinWonders Nha Trang", cost: 750000, duration: "1 Ngày" },
  { id: "ponagar", name: "Tháp Bà Ponagar", cost: 30000, duration: "2 Giờ" },
  { id: "hon-mun", name: "Hòn Mun Lặn Biển", cost: 450000, duration: "1 Ngày" },
  { id: "binh-ba", name: "Huyện đảo Bình Ba", cost: 350000, duration: "1 Ngày" },
  { id: "suoi-nuoc-nong", name: "Tắm bùn khoáng nóng tháp Bà", cost: 250000, duration: "3 Giờ" }
];

const TOURISM_GUIDES = [
  {
    id: "dac-sac",
    title: "Đặc sắc du lịch Khánh Hòa",
    subtitle: "Khởi Nguồn Trải Nghiệm Thượng Lưu",
    engTitle: "KTV Tourism Highlights",
    icon: Sparkles,
    color: "from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:to-blue-900",
    shadow: "shadow-blue-500/10 hover:shadow-blue-500/25",
    bgLight: "bg-blue-50/50",
    borderActive: "border-blue-500",
    iconColor: "text-blue-600",
    image: "/src/assets/images/nha_trang_drone_view_1780308147253.png",
    tagline: "Đặc biệt tôn vinh những kỳ quan biển đảo độc nhất thế giới và chuỗi thương hiệu du lịch đẳng cấp quốc tế của tỉnh Khánh Hòa.",
    highlights: [
      { title: "Hệ sinh thái vịnh biển vương quốc", desc: "Khánh Hòa tự hào sở hữu đồng thời 3 vịnh lớn tuyệt đẹp: Vịnh Nha Trang, Vịnh Cam Ranh và Vịnh Vân Phong với nét đặc thù sinh cảnh quý hiếm." },
      { title: "Tọa độ nghỉ dưỡng đẳng cấp quốc tế", desc: "Tập trung các resort siêu sang chuẩn 5-6 sao hàng đầu châu lục mang lại những trải nghiệm sinh thái tách biệt lý tưởng." },
      { title: "Du lịch Xanh & Wellness bền vững", desc: "Tận dụng nguồn bùn khoáng tinh khiết thiên nhiên và các dòng khoáng nóng dồi dào khoáng chất cho chu trình trị liệu phục hồi thể lực tối ưu." },
      { title: "Liên kết hạ tầng quốc tế đồng bộ", desc: "Cảng hàng không quốc tế Cam Ranh và hệ thống giao thông đường biển kết nối hiện đại mang Nha Trang gần gũi hơn với thế giới." }
    ]
  },
  {
    id: "diem-den",
    title: "Điểm đến du lịch",
    subtitle: "Tọa Độ Đẹp Phải Đến Một Lần",
    engTitle: "Must-Visit Destinations",
    icon: MapPin,
    color: "from-blue-600 via-blue-750 to-blue-800 hover:from-blue-700 hover:to-blue-900",
    shadow: "shadow-blue-500/10 hover:shadow-blue-500/25",
    bgLight: "bg-blue-50/50",
    borderActive: "border-blue-500",
    iconColor: "text-blue-600",
    image: "/src/assets/images/ponagar_tower_sunset_1780308166808.png",
    tagline: "Hành trình di sản qua các danh thắng nổi tiếng từ rạn san hô cổ ngự nghìn năm đến các bãi cát trắng thoai thoải uốn lượn.",
    highlights: [
      { title: "🕌 Tháp Bà Ponagar cổ kính nghìn năm", desc: "Quần thể đền tháp Chăm Pa cổ đại được xây dựng tinh xảo từ thế kỷ thứ VIII, trung tâm thờ phụng Thiên Y A Na Thánh Mẫu cứu độ chúng sinh vĩ đại." },
      { title: "🐠 Khu bảo tồn biển rạn san hô Hòn Mun", desc: "Hòn đảo hoang sơ sở hữu bãi đá đen tuyền kỳ ảo và thế giới sinh học đại dương cực kỳ phong phú với hơn 350 loài san hô rực rỡ sắc màu." },
      { title: "🏖️ Bãi dài Cam Ranh hoang sơ quyến rũ", desc: "Top bãi biển hoang sơ đón bình minh lộng lẫy nhất châu Á, bờ cát thoai thoải mịn màng uốn lượn bên làn nước xanh trong vắt tận đáy xanh ngọc." },
      { title: "🎢 VinWonders đảo Hòn Tre kỳ thú", desc: "Cổng thiên đường vui chơi giải trí kỷ lục châu Á nối liền bờ vịnh bằng tuyến cáp treo vượt biển nổi bật đầy quy mô." }
    ]
  },
  {
    id: "am-thuc",
    title: "Ẩm thực - Đặc sản",
    subtitle: "Tinh Hoa Ẩm Thực Vùng Biển",
    engTitle: "Culinary & Local Specialities",
    icon: UtensilsCrossed,
    color: "from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:to-red-900",
    shadow: "shadow-red-500/10 hover:shadow-red-500/25",
    bgLight: "bg-red-50/50",
    borderActive: "border-red-500",
    iconColor: "text-red-600",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    tagline: "Khám phá hương vị ẩm thực đặc sắc từ những hải sản tự nhiên vừa đánh bắt cho tới các món quà biếu quý giá vô song của vùng biển Nha Trang.",
    highlights: [
      { title: "🍢 Nem nướng Ninh Hòa trứ danh", desc: "Thịt băm giòn dai nướng sả bùi ngậy cuộn bánh tráng và rau xanh phủ đầy dĩa, hòa cùng vị nước sốt ấm nếp sánh ngọt bí truyền quyến rũ thực khách." },
      { title: "🍜 Bún sứa Nha Trang thanh mát", desc: "Tô bún nóng hổi dùng nước hầm trong vắt từ cá tươi đậm ngọt sảng khoái, điểm xuyết từng thớ sứa trắng tinh giòn lật sật cực ngon." },
      { title: "🪵 Trầm hương Vạn Giã tột đỉnh tâm linh", desc: "Đệ nhất kỳ hương tích tụ từ loài gió bầu sâu thẳm trong rừng đại ngàn Khánh Hòa mang giá trị phong thủy và xông thanh lọc linh thiêng." },
      { title: "🪹 Yến sào đảo yến thiên nhiên", desc: "Được mệnh danh vàng trắng của Khánh Hòa, tổ yến khai thác tự nhiên mang hàm lượng dinh dưỡng siêu hạng đứng đầu danh mục bát bửu quý giá." }
    ]
  },
  {
    id: "le-hoi",
    title: "Khám phá lễ hội",
    subtitle: "Rực Rỡ Bản Sắc Miền Biển",
    engTitle: "Traditional & Cultural Festivals",
    icon: Tent,
    color: "from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:to-red-900",
    shadow: "shadow-red-500/10 hover:shadow-red-500/25",
    bgLight: "bg-red-50/50",
    borderActive: "border-red-500",
    iconColor: "text-red-600",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    tagline: "Tìm về cội nguồn tín ngưỡng hào hùng và nếp hoạt động nghệ thuật rực rỡ mang hơi thở khát vọng của người con xứ Trầm hương.",
    highlights: [
      { title: "🏮 Lễ hội đền Tháp Bà Ponagar lịch sử", desc: "Di sản văn hóa phi vật thể quốc gia thu hút hàng vạn đồng bào dâng hương tưởng niệm Thánh Mẫu dệt nên nét múa bóng uyển điệu tuyệt đẹp." },
      { title: "🎺 Festival Biển Nha Trang tầm vóc quốc tế", desc: "Chuỗi sự kiện kỷ niệm văn hóa âm nhạc lộng lẫy quy tụ đại nhạc hội không gian ánh sáng drone hiện đại, trình diễn carnival tuyệt mĩ." },
      { title: "⛵ Lễ hội Cầu ngư tôn vinh Thần biển Cá Ông", desc: "Bao gồm rước sắc thần trang trọng bên rặng sóng bạc, múa hát bả trạo hào hùng tái hiện khí thế lao động can trường kéo lưới vượt đại dương." },
      { title: "🕯️ Lễ hội Am Chúa tìm về cội nguồn xứ sở", desc: "Hành hương lễ hội văn hóa thiêng liêng tưởng nhớ vị Mẫu hiền từ, lưu truyền muôn đời bài ca khẩn nguyện mưa thuận gió hòa an lành." }
    ]
  },
  {
    id: "hinh-anh",
    title: "Du lịch qua hình ảnh",
    subtitle: "Khoảnh Khắc Đẹp Mãn Nhãn",
    engTitle: "Tourism Through Beautiful Photos",
    icon: Camera,
    color: "from-cyan-600 via-cyan-700 to-blue-800 hover:from-cyan-700 hover:to-blue-900",
    shadow: "shadow-cyan-500/10 hover:shadow-cyan-500/25",
    bgLight: "bg-cyan-50/50",
    borderActive: "border-cyan-500",
    iconColor: "text-cyan-600",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    tagline: "Chiêm ngưỡng bộ ảnh nghệ thuật đầy đam mê ghi dấu khoảnh khắc mộng mơ bừng sáng của vương quốc trầm hương hữu tình.",
    highlights: [
      { title: "🌅 Bình minh lộng lẫy vịnh Nha Trang", desc: "Vệt nắng hồng dạt dào buổi sớm chiếu rực thảm cát vàng bên rặng dừa xanh mướt, kiến tạo một bức bích họa tuyệt tác thiên nhiên rực rỡ." },
      { title: "🛶 Nhịp nhổ mái chèo Đầm Nha Phu bình yên", desc: "Thuyền thúng nhẹ lướt sóng sương sớm, người dân mộc mạc gom lưới cua tái hiện nhịp sống bình thường thơ mộng mộc mạc." },
      { title: "🌄 Hoàng hôn mơ màng trên dốc Cô Tiên", desc: "Khung cảnh chiều tà tuyệt đẹp từ đỉnh đồi thu trọn dải ngân hà đèn điện lung linh của thành phố biển bắt đầu trỗi dậy về đêm." },
      { title: "🚤 Du thuyền sang trọng vượt sóng xa bờ", desc: "Hình ảnh du khách trải nghiệm hải trình lướt sóng đầy tự do chinh phục rặng khơi xa mát mẻ trong khí lành đại dương trong lành." }
    ]
  }
];

const TRAVEL_STYLES = [
  {
    id: "luxury",
    name: "Nghỉ dưỡng Thượng lưu",
    desc: "Trải nghiệm kỳ quan biệt lập chuẩn 5-6 sao quốc tế hàng đầu châu lục.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=700&q=80",
    places: ["Six Senses Ninh Vân Bay", "L'Alya Ninh Van Bay", "The Anam Cam Ranh"],
    placesDetail: [
      { name: "Six Senses Ninh Vân Bay", img: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=300&q=80", desc: "Biệt thự vách đá biệt lập vương mình biển khơi đầy chất thơ." },
      { name: "L'Alya Ninh Van Bay", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=300&q=80", desc: "Phong cách mộc mạc hoài cổ ẩn trong dải thiên nhiên tĩnh lặng." },
      { name: "The Anam Cam Ranh", img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=300&q=80", desc: "Kỳ quan kiến trúc tinh tế mang hơi thở Đông Dương quý phái." },
      { name: "InterContinental", img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=300&q=80", desc: "Biểu tượng sang trọng ngay trung tâm phố biển nhộn nhịp." }
    ],
    cost: "9,500,000đ - 22,000,000đ / đêm",
    tips: "Đặt trước từ 3-4 tuần để giữ các căn biệt thự ghềnh đá ngắm hoàng hôn rực rỡ nhất."
  },
  {
    id: "wellness",
    name: "Chăm sóc Sức khỏe",
    desc: "Bồi đắp sinh lực với bùn khoáng nóng thiên nhiên và thủy liệu pháp quý giá.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=700&q=80",
    places: ["Suối bùn khoáng nóng Tháp Bà", "I-Resort Nha Trang", "Tắm bùn Hòn Tằm"],
    placesDetail: [
      { name: "Suối bùn khoáng Tháp Bà", img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=300&q=80", desc: "Dịch vụ bùn trầm tích mộc mạc ngấm trọn sinh khí thiên nhiên." },
      { name: "I-Resort Nha Trang", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=300&q=80", desc: "Làng nghỉ mát tranh tre thuần Việt nâng tầm chăm sóc thể lý." },
      { name: "Tắm bùn Hòn Tằm", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=300&q=80", desc: "Khu tắm bùn trên núi đảo lớn nhất tự hào sở hữu view biển bồng bềnh." },
      { name: "Amiana Resort", img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=300&q=80", desc: "Tắm bùn khoáng cao cấp trong không gian tĩnh lặng." }
    ],
    cost: "350,000đ - 1,200,000đ / ngày",
    tips: "Nên ngâm bùn nóng 20 phút trước khi xông xịt hơi tự nhiên để lưu thông tuần hoàn tối ưu."
  },
  {
    id: "adventure",
    name: "Thám hiểm Vịnh biển dã ngoại",
    desc: "Chinh phục bãi san hô đa sắc, chèo ván chèo kayak độc đáo vượt đại ngàn biển khơi.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=700&q=80",
    places: ["Đảo Hòn Mun bảo tồn", "Hòn Nội - Đảo Yến", "Vịnh Vân Phong hoang dã"],
    placesDetail: [
      { name: "Đảo Hòn Mun", img: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=300&q=80", desc: "Lặn sâu ngắm nhìn rặng san hô sặc sỡ bên làn đá đen độc lạ." },
      { name: "Hòn Nội - Đảo Yến", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80", desc: "Nơi có bãi tắm đôi nóng lạnh kỳ quan, quê hương loài chim yến." },
      { name: "Vịnh Vân Phong", img: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=300&q=80", desc: "Hải trình khám phá cực Đông đất liền đón ánh bình minh lấp lánh." },
      { name: "Đảo Khỉ Hòn Lao", img: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=300&q=80", desc: "Vương quốc của hơn ngàn chú khỉ tự nhiên thân thiện." }
    ],
    cost: "650,000đ - 1,800,000đ / khách",
    tips: "Thời điểm sóng êm nước trong vắt để ngắm rạn san hô đẹp nhất là từ tháng 4 đến tháng 9."
  }
];

const LANDMARK_SPOTLIGHTS = [
  {
    id: "ponagar",
    name: "🕌 Tháp Bà Ponagar cổ xưa nghìn năm",
    desc: "Huyền thoại kiến trúc Chăm Pa tinh xảo sừng sững từ thế kỷ thứ VIII bên cửa sông Cái, nơi dâng hương thờ mẫu Thiên Y A Na linh thiêng.",
    image: "/src/assets/images/ponagar_tower_sunset_1780308166808.png",
    extraImages: [
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1559592442-748ff23c3146?auto=format&fit=crop&w=400&q=80"
    ],
    hours: "06:00 - 18:00 hàng ngày",
    tip: "Ban quản lý tháp cung cấp áo dài lễ phục miễn phí cho du khách trước khi vào điện thờ hành lễ trang nghiêm.",
    photoSpot: "Hàng cột đá rêu phong Octagonal khu tiền sảnh Mandapa vươn đón nắng xiên cực đẹp buổi sớm.",
    distance: "Nằm tại chân cầu Bóng, cách trung tâm Nha Trang chỉ 2.5km."
  },
  {
    id: "honmun",
    name: "🐠 Đảo Hòn Mun - Vương quốc san hô",
    desc: "Khu bảo tồn sinh học biển quốc gia sở hữu bờ đá đen kỳ vĩ uốn lượn cùng hơn 350 loài san hô sặc sỡ và muôn loài sinh vật biển rực rỡ kỳ ảo dưới đáy sâu.",
    image: "/src/assets/images/nha_trang_coral_diving_1780308185424.png",
    extraImages: [
      "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1520520731457-9283dd14aa66?auto=format&fit=crop&w=400&q=80"
    ],
    hours: "Canô cao tốc đưa đón du khách từ 08:00 - 15:30",
    tip: "Nên mang dép đi biển tránh rạn san hô nhọn, vui lòng bôi kem chống nắng sinh học bảo vệ môi trường biển.",
    photoSpot: "Quay chụp góc rộng dưới làn nước trong vắt nhìn sâu tới 15 mét lung linh ánh cầu vồng bờ san.",
    distance: "Nằm phía Đông Nam đảo Hòn Tre, di chuyển khoảng 20 phút bằng canô từ cảng Vĩnh Trường."
  },
  {
    id: "baidai",
    name: "🏖️ Bãi Dài Cam Ranh lãng mạn nên thơ",
    desc: "Bờ cát trắng thoai thoải uốn lượn ôm trọn làn nước xanh biếc, một trong những tọa độ ngắm bình minh mộng mơ quyến rũ bậc nhất biển Việt Nam.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    extraImages: [
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=400&q=80"
    ],
    hours: "Hoàn toàn miễn phí quanh năm",
    tip: "Khám phá các nhà bè đơn sơ phía đầm Thủy Triều lân cận để thưởng thức sò huyết thủy triều tươi nướng chấm muối ớt xiêm xanh cực đỉnh.",
    photoSpot: "Bờ cát thoải mịn phẳng lặng óng ánh sắc bạc lấp lánh như gương lúc hừng đông 05:15 sáng.",
    distance: "Trên trục đường Nguyễn Tất Thành dẫn ra sân bay, cách trung tâm Nha Trang 25km."
  }
];

const DHI_ADDRESSES: Record<string, { name: string; bestShop: string; averagePrice: string; souvenirName: string; unitCost: number; unitLabel: string; image: string; souvenirImage: string }> = {
  nem: {
    name: "Nem nướng Ninh Hòa",
    bestShop: "Nem nướng Đặng Văn Quyên (16A Lãn Ông) hoặc Nem nướng Vũ Thành An (15 Tô Hiến Thành)",
    averagePrice: "45,000đ - 65,000đ / suất tháp dừa đầy đủ ram giòn vỏ",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=500&q=80",
    souvenirName: "Nem chua Ninh Hòa đóng hộp quà tặng",
    souvenirImage: "https://images.unsplash.com/photo-1625220194771-7ebded0d90ae?auto=format&fit=crop&w=300&q=80",
    unitCost: 120000,
    unitLabel: "Hộp 10 cây lớn bọc lá"
  },
  bunsua: {
    name: "Bún sứa Nha Trang tươi rói",
    bestShop: "Bún sứa cá Nguyên Loan (123 Ngô Gia Tự) hoặc Bún sứa cá Lá Cây Bàng (6 Hàn Thuyên)",
    averagePrice: "35,000đ - 55,000đ / tô nước lèo trong vắt nóng hổi",
    image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&w=500&q=80",
    souvenirName: "Đặc sản Chả cá Nha Trang chiên vàng",
    souvenirImage: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=300&q=80",
    unitCost: 150000,
    unitLabel: "Gói 2 khoanh bánh chả lớn (1kg)"
  },
  yensao: {
    name: "Yến sào đảo yến tự nhiên",
    bestShop: "Công ty Yến Sào Khánh Hòa quốc doanh (Hệ thống showroom Sanest 24 Thống Nhất)",
    averagePrice: "3,800,000đ - 8,000,000đ / 100gr tổ thô hoang dã",
    image: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=500&q=80",
    souvenirName: "Tổ yến chưng sẵn nước hoàn hảo Sanest",
    souvenirImage: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=300&q=80",
    unitCost: 290000,
    unitLabel: "Hộp quà tặng 6 hũ thủy tinh"
  },
  tramhuong: {
    name: "Trầm hương Vạn Giã hội tụ tinh hoa",
    bestShop: "Hội Trầm hương Khánh Hòa (Showroom số 10 Ngô Gia Tự hoặc các cơ sở tạc tượng nghệ thuật)",
    averagePrice: "350,000đ - 25,000,000đ tùy chế phẩm tăm hoặc thác khói vòng",
    image: "https://images.unsplash.com/photo-1621510456681-23a23cfb5f57?auto=format&fit=crop&w=500&q=80",
    souvenirName: "Ống trúc nhang trầm kiến xông tăm đỉnh",
    souvenirImage: "https://images.unsplash.com/photo-1602192102148-360bd58f001c?auto=format&fit=crop&w=300&q=80",
    unitCost: 260000,
    unitLabel: "Hộp ống trúc 50 nén trầm xông"
  }
};

const FESTIVAL_CALENDAR = [
  {
    name: "🌸 Lễ hội đền Am Chúa",
    time: "Mùng 1 đến mùng 3 tháng 3 âm lịch hàng năm",
    image: "https://images.unsplash.com/photo-1559592442-748ff23c3146?auto=format&fit=crop&w=500&q=80",
    meaning: "Hành hương tri ân Đức Mẫu khởi thủy hiền từ, tái hiện nghi thức tế lễ cổ truyền linh thiêng nhất."
  },
  {
    name: "🕌 Đại hội đền Tháp Bà Ponagar",
    time: "Mùng 20 đến mùng 23 tháng 3 âm lịch hàng năm",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=500&q=80",
    meaning: "Di sản văn hóa phi vật thể của quốc gia, quy tụ vũ điệu múa bóng Chăm cổ kính dâng hoa tạ ơn dòng nước dòng đời."
  },
  {
    name: "⛵ Lễ hội Cầu ngư vùng biển lộng gió",
    time: "Ngay sau Tết Nguyên Đán hoặc đầu mùa hạ",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=500&q=80",
    meaning: "Tôn vinh Cá Ông nâng thuyền rẽ sóng cứu sinh, rước sắc uy nghiêm và hát múa bả trạo khởi thế can trường bám đại dương."
  }
];


const TRIVIA_QUESTIONS = [
  {
    id: "q1",
    question: "Xứ sở Khánh Hòa từ xưa được lưu truyền vinh danh gắn liền với danh xưng kỳ vĩ nào?",
    options: [
      "Xứ vàng mỏ cát thủy tinh lấp lánh",
      "Xứ trầm hương và biển yến hoang sơ",
      "Xứ hoa dừa ngọt và cá thu muối mặn"
    ],
    correctAnswer: "Xứ trầm hương và biển yến hoang sơ",
    insight: "Khánh Hòa từ ngàn xưa nổi tiếng bấy lâu nay với dòng Trầm hương Vạn Giã tích tụ vạn niên tinh khiết đệ nhất, và rặng Đảo Yến hoang sơ ban tặng món báu bát bửu bổ dưỡng bổ cốt."
  },
  {
    id: "q2",
    question: "Vũ điệu truyền thống tuyệt mĩ dâng lên bà Chúa Thiên Y A Na tại Tháp Bà có tên là gì?",
    options: [
      "Múa bóng bưng mâm dĩa hoa cổ Chăm",
      "Múa lân đồng nhảy lửa rực rỡ",
      "Múa xoè dải lụa thắt nút"
    ],
    correctAnswer: "Múa bóng bưng mâm dĩa hoa cổ Chăm",
    insight: "Múa bóng dâng Mẫu do các nghệ nhân uốn khúc nâng mâm vàng dĩa hoa nhịp nhàng rộn rã trống ghi-năng, tạo nên bầu không khí cổ linh trang trọng có một không hai."
  }
];

const POLAROID_PHOTOS = [
  {
    id: 1,
    title: "Bình Minh Thơ Mộng Nha Trang",
    tag: "Aura Morning",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
    lens: "Focus: 24mm • f/4.0 • ISO 100",
    bestHour: "05:15 - 05:45 AM",
    vibes: "Làn sóng xô dịu mát, nền trời ửng hồng vàng quyện rặng dừa thơ mộng rực sáng.",
    gallery: [
      { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80", title: "Bình minh bờ cát mịn" },
      { url: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=700&q=80", title: "Dừa nghiêng đại dương xanh" },
      { url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=700&q=80", title: "Thuyền chài hừng đông" },
      { url: "https://images.unsplash.com/photo-1471922687109-c99aeb694444?auto=format&fit=crop&w=700&q=80", title: "Vệt nắng chân trời vạn dặm" }
    ]
  },
  {
    id: 2,
    title: "Nhịp Chèo Bình Yên Đầm Nha Phu",
    tag: "Rustic Harbor",
    img: "https://images.unsplash.com/photo-1559592442-748ff23c3146?auto=format&fit=crop&w=700&q=80",
    lens: "Focus: 50mm • f/1.8 • ISO 200",
    bestHour: "06:00 - 06:45 AM",
    vibes: "Chiếc mâm chèo gỗ khua nhẹ phá tan dải sương hừng hực nhịp mưu sinh xưa cũ.",
    gallery: [
      { url: "https://images.unsplash.com/photo-1559592442-748ff23c3146?auto=format&fit=crop&w=700&q=80", title: "Nhịp chèo đầm mây" },
      { url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=700&q=80", title: "Mặt nước lặng như gương" },
      { url: "https://images.unsplash.com/photo-1513553404607-988bf2703777?auto=format&fit=crop&w=700&q=80", title: "Hừng đông vùng cửa vịnh" },
      { url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=700&q=80", title: "Thuyền gỗ đơn sơ neo bến" }
    ]
  },
  {
    id: 3,
    title: "Chiều Tà Dốc Cô Tiên Huyền Ảo",
    tag: "Cosmic Sunset",
    img: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=700&q=80",
    lens: "Focus: 35mm • f/2.8 • ISO 400",
    bestHour: "17:30 - 18:15 PM",
    vibes: "Ông mặt trời lùi về rặng núi phía xa, nhường sân khấu cho dãy ngân hà đèn biển lung linh sầm uất.",
    gallery: [
      { url: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=700&q=80", title: "Mặt trời lặn sau đỉnh tiên" },
      { url: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=700&q=80", title: "Vạt nắng thung lũng sương" },
      { url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80", title: "Vách đá đón gió tà dương" },
      { url: "https://images.unsplash.com/photo-1472214222541-d510753a4907?auto=format&fit=crop&w=700&q=80", title: "Sắc cam thẫm nhuộm đại ngàn" }
    ]
  },
  {
    id: 4,
    title: "Du Thuyền Sang Trọng Lướt Vịnh Vàng",
    tag: "VIP Cruising",
    img: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=700&q=80",
    lens: "Focus: 16mm • f/5.6 • ISO 80",
    bestHour: "15:00 - 16:30 PM",
    vibes: "Tận hưởng làn gió mát lạnh đại dương bao la trên mạn vỏ sắt du thuyền sành điệu bậc nhất.",
    gallery: [
      { url: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=700&q=80", title: "Du thuyền lướt sóng" },
      { url: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=700&q=80", title: "Mạn boong rực rỡ hoàng hôn" },
      { url: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=700&q=80", title: "Cánh buồm đón gió khơi" },
      { url: "https://images.unsplash.com/photo-1605281317010-fe5fedc36584?auto=format&fit=crop&w=700&q=80", title: "Tiệc ngắm cảnh hoàng gia" }
    ]
  }
];

const SCENIC_SLIDES = [
  {
    id: "sc-1",
    image: "/src/assets/images/nha_trang_drone_view_1780308147253.png",
    title: "Vịnh Nha Trang - Một Trong Những Vịnh Biển Đẹp Nhất Thế Giới",
    subtitle: "Nơi thiên nhiên biển xanh, cát trắng và nắng ấm hòa quyện tuyệt vời cùng chuỗi resort nghỉ dưỡng sinh thái đỉnh cao.",
    tag: "AERIAL SUNNY BAY",
    stat: "🏖️ 300+ Ngày Nắng Ấm / Năm"
  },
  {
    id: "sc-2",
    image: "/src/assets/images/ponagar_tower_sunset_1780308166808.png",
    title: "Tháp cổ Ponagar - Linh Hồn Di Sản Ngàn Năm Văn Hóa",
    subtitle: "Dấu ấn Tháp Chăm cổ sừng sững bên cầu Bóng lịch sử, rực hồng uy nghi đón ánh nắng hoàng hôn đỏ thẫm ấm áp.",
    tag: "GOLDEN HERITAGE SKYLINE",
    stat: "Di Tích Di Sản Quốc Gia Kỳ Vỹ"
  },
  {
    id: "sc-3",
    image: "/src/assets/images/nha_trang_coral_diving_1780308185424.png",
    title: "Thám Hiểm Rạn San Hô Hòn Mun Tuyệt Mỹ",
    subtitle: "Du hành dưới lòng nước xanh ngọc trong vắt, khám phá đại dương kỳ diệu đầy san hô nguyên thủy và vạn dòng sinh cá rạng rỡ.",
    tag: "DEEP AQUAMARINE DIVING",
    stat: "🐠 350+ Loài San Hô Rực Rỡ"
  }
];

const PANORAMA_GALLERY = [
  {
    id: "pg-1",
    title: "Vòng cung lộng lẫy Vịnh biển Nha Trang",
    category: "bay",
    categoryLabel: "Vịnh biển & Đảo",
    desc: "Góc nhìn tuyệt tác say đắm từ tầng mây bao trọn cung đường duyên hải uốn lượn phẳng lặng quyến rũ dạt dào.",
    img: "/src/assets/images/nha_trang_drone_view_1780308147253.png",
    author: "Mạnh Hùng (Nhiếp ảnh Gia)",
    baseLikes: 1420
  },
  {
    id: "pg-2",
    title: "Ánh Hoàng Hôn Tháp Ponagar trầm mặc cố kính",
    category: "ditich",
    categoryLabel: "Di sản cổ kính",
    desc: "Từng vệt mây tía lấp lánh phản chiếu lớp gạch tháp Chăm nung ngàn mùa sương khói linh thiêng bên sóng Cái dạt dào.",
    img: "/src/assets/images/ponagar_tower_sunset_1780308166808.png",
    author: "Khánh Đan",
    baseLikes: 1105
  },
  {
    id: "pg-3",
    title: "Lòng Vịnh San Hô Hòn Mun rực rỡ muôn màu",
    category: "bay",
    categoryLabel: "Vịnh biển & Đảo",
    desc: "Môi trường bảo tồn thủy sinh đa dạng hàng đầu, nơi rặng san hô sặc sỡ quyện luồng nắng xiên đại dương say đắm.",
    img: "/src/assets/images/nha_trang_coral_diving_1780308185424.png",
    author: "Hải Nam (Scuba team)",
    baseLikes: 1680
  },
  {
    id: "pg-4",
    title: "Thác bùn khoáng nóng bồi bổ sức khỏe Tháp Bà",
    category: "wellness",
    categoryLabel: "Resort & Wellness",
    desc: "Dòng bùn khoáng tinh khiết trầm tích ngàn sông dồi dào vi sinh hồi sức làn da, thanh lọc thân tâm bồng bềnh dồi dào sinh lực.",
    img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=700&q=80",
    author: "Hương Giang Spa",
    baseLikes: 945
  },
  {
    id: "pg-5",
    title: "Tiệc Trà Hoàng Hôn trên Du thuyền hoàng gia",
    category: "luxury",
    categoryLabel: "Nghỉ dưỡng Thượng lưu",
    desc: "Trải nghiệm sang trọng thưởng ngoạn gió khơi ngào ngạt, thả hồn bên dĩa bánh ngọt lãng mạn lướt sóng vàng bồng bềnh.",
    img: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=700&q=80",
    author: "Cruises Elite",
    baseLikes: 832
  },
  {
    id: "pg-6",
    title: "Nem Nướng Ninh Hòa dậy vị đặc trưng vùng ấm",
    category: "cuisine",
    categoryLabel: "Ẩm thực đặc sắc",
    desc: "Sự kết hợp ngọt dịu dẻo bùi từ xâu nem nướng củi rực thơm hương sả láng giềng cùng chén mắm nếp dẻo thơm sóng sánh.",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    author: "Bếp Bản Địa Nha Trang",
    baseLikes: 1109
  }
];

export default function VisitorPortal() {
  // Toast notifications state
  const [toast, setToast] = useState<string | null>(null);

  // Active state for tourism guides detail panel
  const [activeGuideId, setActiveGuideId] = useState<string | null>("dac-sac");

  // Search portal / interactive states
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

  // Business Promotion States (Hỗ trợ quảng bá doanh nghiệp)
  const [promoName, setPromoName] = useState("");
  const [promoCategory, setPromoCategory] = useState("Ẩm thực & Nhà hàng");
  const [promoPhone, setPromoPhone] = useState("");
  const [promoUrl, setPromoUrl] = useState("");
  const [promoDesc, setPromoDesc] = useState("");
  const [promoImgUrl, setPromoImgUrl] = useState("");
  const [promoSearchQuery, setPromoSearchQuery] = useState("");
  const [selectedPromoCategory, setSelectedPromoCategory] = useState("Tất cả");

  const [promotedBusinesses, setPromotedBusinesses] = useState([
    {
      id: "pb-1",
      name: "Yến Sào Khánh Hòa Sanest",
      category: "Quà tặng & Đặc sản",
      phone: "1800 558879",
      url: "https://yensaokhanhhoa.com.vn",
      desc: "Nguồn sản phẩm yến sào thiên nhiên khai thác bền vững từ các hang đảo yến ngoài khơi Khánh Hòa, giữ nguyên những vi chất quý dồi dào sức khỏe và bổ dưỡng.",
      status: "Đã duyệt",
      date: "01/06/2026",
      isPremium: true,
      img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=400"
    },
    {
      id: "pb-5",
      name: "Six Senses Ninh Van Bay",
      category: "Lưu trú & Resort",
      phone: "0258 3524268",
      url: "https://www.sixsenses.com/en/resorts/ninh-van-bay",
      desc: "Khu nghỉ dưỡng sinh thái siêu sang nép mình bên những mỏm đá ấn tượng hướng ra vịnh biển Ninh Vân xanh ngọc bích phẳng lặng thanh khiết bậc nhất Việt Nam.",
      status: "Đã duyệt",
      date: "01/06/2026",
      isPremium: true,
      img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=400"
    },
    {
      id: "pb-2",
      name: "Trầm Hương Vương Cát",
      category: "Quà tặng & Đặc sản",
      phone: "0905 124567",
      url: "https://tramhuongkhanhhoa.vn",
      desc: "Nơi tôn vinh các tác phẩm trầm kỳ nghệ thuật đẳng cấp quốc gia, nhang trầm sạch organic không khói độc và tinh dầu trầm hương Khánh Hòa trứ danh.",
      status: "Đã duyệt",
      date: "31/05/2026",
      isPremium: true,
      img: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?auto=format&fit=crop&w=400"
    },
    {
      id: "pb-6",
      name: "Scuba Diving & Coral Reef Tours Hòn Mun",
      category: "Lữ hành & Tour",
      phone: "0905 555666",
      url: "https://nhatrangseatour.vn",
      desc: "Trải nghiệm lặn biển chuyên nghiệp ngắm san hô rạng rực rỡ tại vùng bảo tồn đại dương Hòn Mun, có chỉ dẫn viên quốc tế chứng nhận 1-kèm-1 an toàn.",
      status: "Đã duyệt",
      date: "30/05/2026",
      isPremium: true,
      img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=400"
    },
    {
      id: "pb-3",
      name: "Nha Trang Sea Guided Tours",
      category: "Lữ hành & Tour",
      phone: "0258 3822115",
      url: "https://nhatrangseatour.vn",
      desc: "Cung cấp hải trình khép kín bằng du thuyền mini ngắm san hô rạn Hòn Mun, lướt sóng tốc độ cao và tổ chức BBQ dã ngoại đảo biệt lập đẳng cấp.",
      status: "Đã duyệt",
      date: "29/05/2026",
      isPremium: false,
      img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=400"
    },
    {
      id: "pb-7",
      name: "Bánh Căn Seafood Đêm Tháp Bà",
      category: "Ẩm thực & Nhà hàng",
      phone: "0914 999111",
      url: "https://khanhhoa.gov.vn",
      desc: "Đặc sản bánh căn nóng hổi giòn rụm đúc khuôn đất nung truyền thống với nhân tôm sú tươi ngon, mực trứng ngọt lịm cùng nước chấm xíu mại đậm đà.",
      status: "Đã duyệt",
      date: "29/05/2026",
      isPremium: false,
      img: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?q=80&w=400"
    },
    {
      id: "pb-4",
      name: "Boutique Resort Làng Muối Hòn Khói",
      category: "Lưu trú & Resort",
      phone: "0258 3840111",
      url: "https://honkhoisaltresort.com",
      desc: "Nghỉ dưỡng sinh thái mộc mạc nép mình bên cánh ruộng muối Hòn Khói thanh bình, mang đến phong cách thư giãn chữa lành thân tâm thuần khiết.",
      status: "Đã duyệt",
      date: "28/05/2026",
      isPremium: false,
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400"
    },
    {
      id: "pb-8",
      name: "Nem Nướng Ninh Hòa Đặng Văn Quyên",
      category: "Ẩm thực & Nhà hàng",
      phone: "0258 3826737",
      url: "https://nemnuongdangvanquyen.vn",
      desc: "Nem nướng Ninh Hòa trứ danh với hương vị đậm đà, ăn kèm bánh tráng chiên giòn, rau sống tươi xanh và nước chấm tương thịt độc quyền.",
      status: "Đã duyệt",
      date: "27/05/2026",
      isPremium: true,
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400"
    },
    {
      id: "pb-9",
      name: "Amiana Resort Nha Trang",
      category: "Lưu trú & Resort",
      phone: "0258 3553333",
      url: "https://amianaresort.com",
      desc: "Khu nghỉ dưỡng sang trọng nép mình bên vịnh biển xanh mát, sở hữu hồ bơi nước mặn tự nhiên lớn nhất và hệ thống tắm bùn khoáng nóng riêng tư.",
      status: "Đã duyệt",
      date: "26/05/2026",
      isPremium: true,
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=400"
    },
    {
      id: "pb-10",
      name: "VinWonders Nha Trang",
      category: "Lữ hành & Tour",
      phone: "1900 667788",
      url: "https://vinwonders.com",
      desc: "Công viên giải trí của những kỷ lục với show diễn hoành tráng, cáp treo vượt biển và hàng trăm trò chơi cảm giác mạnh đẳng cấp thế giới.",
      status: "Đã duyệt",
      date: "25/05/2026",
      isPremium: true,
      img: "https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?q=80&w=400"
    }
  ]);

  const handleAddPromotion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoName.trim() || !promoPhone.trim() || !promoDesc.trim()) {
      showToast("Vui lòng điền đầy đủ thông tin Tên, Số điện thoại và Mô tả ngắn!");
      return;
    }

    let finalImg = promoImgUrl.trim();
    if (!finalImg) {
      if (promoCategory === "Quà tặng & Đặc sản") {
        finalImg = "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=400";
      } else if (promoCategory === "Ẩm thực & Nhà hàng") {
        finalImg = "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400";
      } else if (promoCategory === "Lưu trú & Resort") {
        finalImg = "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=400";
      } else if (promoCategory === "Lữ hành & Tour") {
        finalImg = "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=400";
      } else {
        finalImg = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=400";
      }
    }

    const newPromo = {
      id: `pb-${Date.now()}`,
      name: promoName.trim(),
      category: promoCategory,
      phone: promoPhone.trim(),
      url: promoUrl.trim() || "https://khanhhoa.gov.vn",
      desc: promoDesc.trim(),
      status: "Chờ phê duyệt",
      date: "Hôm nay",
      isPremium: false,
      img: finalImg
    };

    setPromotedBusinesses(prev => [newPromo, ...prev]);
    showToast(`Đăng ký thành công cho "${promoName}"! Hồ sơ sẽ được phê duyệt trong vòng 24 giờ.`);
    
    // Reset fields
    setPromoName("");
    setPromoPhone("");
    setPromoUrl("");
    setPromoDesc("");
    setPromoImgUrl("");
  };

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

  // Custom sub-states for the 5 tourism guides interactive widgets
  const [travelStyle, setTravelStyle] = useState<string>("luxury");
  const [spotlightId, setSpotlightId] = useState<string>("ponagar");
  const [spotlightImageIndex, setSpotlightImageIndex] = useState<Record<string, number>>({});
  const [selectedDishId, setSelectedDishId] = useState<string>("nem");
  const [souvenirQty, setSouvenirQty] = useState<number>(3);
  const [triviaAnswers, setTriviaAnswers] = useState<Record<string, string>>({});
  const [triviaFeedback, setTriviaFeedback] = useState<string | null>(null);
  const [selectedPolaroidId, setSelectedPolaroidId] = useState<number>(1);
  const [selectedPolaroidSubIdx, setSelectedPolaroidSubIdx] = useState<number>(0);

  // Reset sub-image index when parent polaroid ID changes
  useEffect(() => {
    setSelectedPolaroidSubIdx(0);
  }, [selectedPolaroidId]);

  // States for visual enhancements (Scenery slideshow, photo gallery filtering, lightbox popups, loves)
  const [galleryFilter, setGalleryFilter] = useState("all");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [selectedDetailHighlight, setSelectedDetailHighlight] = useState<any>(null);
  const [selectedBusinessPromo, setSelectedBusinessPromo] = useState<any>(null);

  const handleOpenPromo = (b: any) => {
    const customPromo = BUSINESS_PROMO_DETAILS[b.id] || {
      name: b.name,
      category: b.category,
      image: b.img || "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=400",
      phone: b.phone,
      url: b.url,
      address: "Hỗ trợ kết nối bởi Cổng thông tin Du lịch Khánh Hòa Smart",
      promotion: `🎁 ƯU ĐÃI ĐỒNG HÀNH XANH: Giảm giá 5% cho khách hàng quét mã QR hoặc xuất trình giao diện ưu đãi từ ứng dụng Khánh Hòa Portal.`,
      description: b.desc || `Sản phẩm, dịch vụ OCOP uy tín chất lượng thuộc lĩnh vực ${b.category} của tỉnh Khánh Hòa.`,
      highlights: [
        "Đạt chuẩn chất lượng dịch vụ du lịch văn minh Khánh Hòa.",
        "Cam kết sử dụng nguyên vật liệu bản địa bền vững.",
        "Cung cách đón tiếp chu đáo, niêm yết giá công khai.",
        "Hỗ trợ chỉ đường du lịch thực tế ảo tiện ích."
      ],
      terms: [
        "Vui lòng xuất trình màn hình hiển thị này tại cơ sở.",
        "Không áp dụng cộng dồn với các khuyến mãi nội bộ khác.",
        "Hạn áp dụng trong vòng 90 ngày kể từ ngày đăng ký."
      ]
    };
    setSelectedBusinessPromo(customPromo);
    showToast(`Mở thông tin ưu đãi của: ${b.name}`);
  };
  const [likedGalleryIds, setLikedGalleryIds] = useState<string[]>([]);
  const [activeSceneryIdx, setActiveSceneryIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSceneryIdx((prev) => (prev + 1) % SCENIC_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // States for interactive calculator (previous features preserved but pushed below)
  const [selectedSpots, setSelectedSpots] = useState<string[]>([]);
  const [visitorsCount, setVisitorsCount] = useState<number>(1);
  const [daysCount, setDaysCount] = useState<number>(2);
  const [votesList, setVotesList] = useState<number[]>(CUISINES.map(c => c.votes));

  // Poll state (Khảo sát ý kiến)
  const [pollSelected, setPollSelected] = useState<string>("hailong");
  const [hasVoted, setHasVoted] = useState<boolean>(false);
  const [pollVotes, setPollVotes] = useState({ hailong: 5892, khonghailong: 324, capnhat: 1125 });

  // History Tab states
  const [activeHistoryTab, setActiveHistoryTab] = useState<string>("ditich");

  // Video playback modal (for watching Khanh Hoa introduction video)
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Initialize selected spots
  useEffect(() => {
    setSelectedSpots([DESTINATIONS[0].id]);
  }, []);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3500);
  };

  const handleToggleSpot = (id: string) => {
    if (selectedSpots.includes(id)) {
      if (selectedSpots.length > 1) {
        setSelectedSpots(selectedSpots.filter(spotId => spotId !== id));
      } else {
        showToast("Vui lòng chọn ít nhất một địa điểm tham quan.");
      }
    } else {
      setSelectedSpots([...selectedSpots, id]);
    }
  };

  const handleVote = (idx: number) => {
    const nextVotes = [...votesList];
    nextVotes[idx] += 1;
    setVotesList(nextVotes);
    showToast(`Cảm ơn bạn đã bình chọn cho món "${CUISINES[idx].name}"!`);
  };

  const handlePollVote = (e: React.FormEvent) => {
    e.preventDefault();
    if (hasVoted) {
      showToast("Bạn đã biểu quyết trước đó rồi nhé!");
      return;
    }
    const nextVotes = { ...pollVotes };
    if (pollSelected === "hailong") nextVotes.hailong += 1;
    else if (pollSelected === "khonghailong") nextVotes.khonghailong += 1;
    else nextVotes.capnhat += 1;
    
    setPollVotes(nextVotes);
    setHasVoted(true);
    showToast("Gửi bình chọn thành công! Cảm ơn ý kiến góp ý của quý khách.");
  };

  // Cost calculation
  const totalCostOfSpots = DESTINATIONS
    .filter(d => selectedSpots.includes(d.id))
    .reduce((currentSum, node) => currentSum + node.cost, 0);

  const totalCostEstimated = totalCostOfSpots * visitorsCount;

  // Type safe summation of poll votes
  const totalPollVotes = pollVotes.hailong + pollVotes.khonghailong + pollVotes.capnhat;

  return (
    <div className="w-full text-slate-800 relative select-none font-sans text-lg visitor-portal-large">
      <style>{`
        /* Root container default font size */
        .visitor-portal-large {
          font-size: 18px !important;
        }
        
        /* Ensure input, select, textarea, button default to 18px */
        .visitor-portal-large input,
        .visitor-portal-large select,
        .visitor-portal-large textarea,
        .visitor-portal-large button {
          font-size: 18px !important;
        }

        /* Override all smaller font size utilities (standard & arbitrary) to at least 18px */
        .visitor-portal-large .text-lg,
        .visitor-portal-large .text-lg,
        .visitor-portal-large .text-base,
        .visitor-portal-large .text-\\[8px\\],
        .visitor-portal-large .text-\\[8\\.5px\\],
        .visitor-portal-large .text-\\[9px\\],
        .visitor-portal-large .text-\\[9\\.5px\\],
        .visitor-portal-large .text-\\[10px\\],
        .visitor-portal-large .text-\\[10\\.5px\\],
        .visitor-portal-large .text-\\[11px\\],
        .visitor-portal-large .text-\\[11\\.5px\\],
        .visitor-portal-large .text-\\[12px\\],
        .visitor-portal-large .text-\\[13px\\],
        .visitor-portal-large .text-\\[14px\\],
        .visitor-portal-large .text-\\[15px\\],
        .visitor-portal-large .text-\\[16px\\],
        .visitor-portal-large .text-\\[17px\\],
        /* Responsive versions */
        .visitor-portal-large .sm\\:text-lg,
        .visitor-portal-large .sm\\:text-lg,
        .visitor-portal-large .sm\\:text-base,
        .visitor-portal-large .md\\:text-lg,
        .visitor-portal-large .md\\:text-lg,
        .visitor-portal-large .md\\:text-base,
        .visitor-portal-large .lg\\:text-lg,
        .visitor-portal-large .lg\\:text-lg,
        .visitor-portal-large .lg\\:text-base,
        .visitor-portal-large .xl\\:text-lg,
        .visitor-portal-large .xl\\:text-lg,
        .visitor-portal-large .xl\\:text-base {
          font-size: 18px !important;
        }

        /* Scale up 18px (text-lg) and equivalents to 22px */
        .visitor-portal-large .text-lg,
        .visitor-portal-large .text-\\[18px\\],
        .visitor-portal-large .sm\\:text-lg,
        .visitor-portal-large .md\\:text-lg,
        .visitor-portal-large .lg\\:text-lg,
        .visitor-portal-large .xl\\:text-lg {
          font-size: 22px !important;
        }

        /* Scale up 20px (text-xl) and equivalents to 25px */
        .visitor-portal-large .text-xl,
        .visitor-portal-large .text-\\[20px\\],
        .visitor-portal-large .sm\\:text-xl,
        .visitor-portal-large .md\\:text-xl,
        .visitor-portal-large .lg\\:text-xl,
        .visitor-portal-large .xl\\:text-xl {
          font-size: 25px !important;
        }

        /* Scale up 24px (text-2xl) and equivalents to 30px */
        .visitor-portal-large .text-2xl,
        .visitor-portal-large .text-\\[24px\\],
        .visitor-portal-large .sm\\:text-2xl,
        .visitor-portal-large .md\\:text-2xl,
        .visitor-portal-large .lg\\:text-2xl,
        .visitor-portal-large .xl\\:text-2xl {
          font-size: 30px !important;
        }

        /* Scale up 30px (text-3xl) and equivalents to 36px */
        .visitor-portal-large .text-3xl,
        .visitor-portal-large .text-\\[30px\\],
        .visitor-portal-large .sm\\:text-3xl,
        .visitor-portal-large .md\\:text-3xl,
        .visitor-portal-large .lg\\:text-3xl,
        .visitor-portal-large .xl\\:text-3xl {
          font-size: 36px !important;
        }

        /* Scale up 36px (text-4xl) and equivalents to 44px */
        .visitor-portal-large .text-4xl,
        .visitor-portal-large .text-\\[36px\\],
        .visitor-portal-large .sm\\:text-4xl,
        .visitor-portal-large .md\\:text-4xl,
        .visitor-portal-large .lg\\:text-4xl,
        .visitor-portal-large .xl\\:text-4xl {
          font-size: 44px !important;
        }

        /* Scale up 48px (text-5xl) and equivalents to 56px */
        .visitor-portal-large .text-5xl,
        .visitor-portal-large .text-\\[48px\\],
        .visitor-portal-large .sm\\:text-5xl,
        .visitor-portal-large .md\\:text-5xl,
        .visitor-portal-large .lg\\:text-5xl,
        .visitor-portal-large .xl\\:text-5xl {
          font-size: 56px !important;
        }

        /* Scale up larger display headings to 64px */
        .visitor-portal-large .text-6xl,
        .visitor-portal-large .text-7xl {
          font-size: 64px !important;
        }
      `}</style>
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -25, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -25, x: "-50%" }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#1E3A8A] text-white border border-blue-500 font-bold text-lg py-3 px-6 rounded-2xl shadow-2xl flex items-center gap-2.5 backdrop-blur-md"
          >
            <CheckCircle size={15} className="text-red-400 stroke-[2.5]" />
            <span>{toast}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal Background overlay */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/75 flex items-center justify-center p-4 md:p-8 backdrop-blur"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-slate-800 w-full max-w-4xl aspect-video rounded-3xl overflow-hidden border border-slate-350 shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-slate-700/80 hover:bg-slate-600 text-white flex items-center justify-center font-bold text-lg cursor-pointer border-0"
              >
                ✕
              </button>
              {/* Embed mock beautiful tourism video */}
              <iframe
                title="Khánh Hòa - Điểm Hẹn Du Lịch"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================================
         1. HERO SECTION (Khám phá Khánh Hòa Background)
         ========================================================================= */}
      <div 
        className="w-full relative pt-16 md:pt-24 pb-24 md:pb-32 bg-cover bg-center text-left shadow-xl"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(6, 182, 212, 0.88) 0%, rgba(3, 105, 161, 0.93) 40%, rgba(30, 58, 138, 0.97) 100%), url('https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1800')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
          <div className="max-w-5xl text-left">
            {/* Mini Gold Tag */}
            <div className="inline-flex items-center gap-1.5 text-[#FFFFFF] text-base md:text-lg font-black uppercase tracking-widest mb-5">
              <span>⚡ VISIT KHANH HOA</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Khám phá <span className="text-[#FFFFFF] drop-shadow-sm">Khánh Hòa</span>
            </h1>

            <p className="text-lg md:text-lg text-slate-100 font-medium italic mt-3 max-w-2xl leading-relaxed drop-shadow-md">
              &quot;Where blue oceans meet timeless culture&quot; — Nơi trùng khơi sóng biếc hòa quyện di sản tâm linh vượt thời gian.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <button
                onClick={() => {
                  showToast("Dẫn bạn đến Bản Đồ và Điểm đến danh lam thắng cảnh...");
                  document.getElementById("danh-lam-thang-canh-row")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#FFFFFF] hover:bg-[#FFC72C] text-[#0f172a] font-black text-lg md:text-xl px-6 py-3.5 rounded-full shadow-lg active:scale-95 transition-all flex items-center gap-2 cursor-pointer border-0"
              >
                <Compass size={16} className="text-[#0f172a]" />
                <span>Bắt đầu khám phá / Start exploring</span>
              </button>

              <button
                onClick={() => setIsVideoOpen(true)}
                className="bg-transparent hover:bg-white/10 text-white font-black text-lg md:text-xl px-6 py-3.5 rounded-full border border-white/40 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Play size={14} className="text-white fill-transparent" />
                <span>Xem video / Watch</span>
              </button>
            </div>
          </div>

          {/* Small transparent statistics cards overlay */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 md:mt-14 relative z-10 max-w-5xl text-left">
            {[
              { value: "300+", label: "Ngày Nắng / Sunny Days", icon: <Sun className="text-red-300" size={18} /> },
              { value: "385km", label: "Bờ Biển / Coastline", icon: <Waves className="text-blue-300" size={18} /> },
              { value: "65", label: "Điểm Đến / Destinations", icon: <Star className="text-red-300 fill-red-300/30" size={18} /> },
              { value: "5.2M", label: "Lượt Khách / Visitors", icon: <Heart className="text-red-300 fill-red-500/20" size={18} /> }
            ].map((stat, idx) => (
              <div 
                key={idx}
                className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 flex flex-col justify-between text-left shadow-sm group hover:bg-white/15 transition-colors min-w-[220px]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg md:text-2xl font-black text-white tracking-tight">{stat.value}</span>
                  {stat.icon}
                </div>
                <span className="text-base md:text-lg text-slate-200 font-bold mt-2 block tracking-wide leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wrapping Container for all Centered Grid Blocks Below */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        {/* =========================================================================
           2. FIVE COLORFUL OVERLAPPING CARDS REGION
           ========================================================================= */}
        <div className="relative z-20 -mt-10 md:-mt-[55px] grid grid-cols-2 md:grid-cols-5 gap-3.5 mb-14">
          {[
            { title: "Lịch sự kiện", eng: "Events", icon: <Calendar size={22} className="stroke-[1.5]" />, bg: "bg-[#0089C4] hover:bg-[#007AB0]" },
            { title: "Bản đồ du lịch", eng: "Travel map", icon: <MapPin size={22} className="stroke-[1.5]" />, bg: "bg-[#004480] hover:bg-[#00386B]" },
            { title: "Hướng dẫn đến KH", eng: "Getting here", icon: <Plane size={22} className="stroke-[1.5]" />, bg: "bg-[#C83500] hover:bg-[#B32F00]" },
            { title: "Cẩm nang tiếng Việt", eng: "Phrasebook", icon: <Languages size={22} className="stroke-[1.5]" />, bg: "bg-[#E58100] hover:bg-[#D17600]" },
            { title: "Tour gợi ý", eng: "Suggested tours", icon: <Compass size={22} className="stroke-[1.5]" />, bg: "bg-[#009890] hover:bg-[#008780]" }
          ].map((c, i) => (
            <div
              key={i}
              onClick={() => showToast(`Đang mở chuyên đề: ${c.title}...`)}
              className={`${c.bg} text-white p-4 rounded-2xl cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between aspect-video md:aspect-auto md:min-h-[120px] text-left group`}
            >
              <div className="text-white shrink-0">
                {c.icon}
              </div>
              <div className="mt-3 text-left">
                <h4 className="text-lg md:text-lg font-black uppercase tracking-wide leading-tight">{c.title}</h4>
                <p className="text-lg text-white/80 font-medium tracking-wide mt-0.5 leading-none">{c.eng}</p>
              </div>
            </div>
          ))}
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Help QA feedback portal button */}
        <div 
          onClick={() => showToast("Đang tải dữ liệu Hỏi đáp công dân - du khách...")}
          className="bg-gradient-to-r from-red-600 to-red-600 text-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-red-500/20 flex items-center justify-between cursor-pointer group transition-all text-left"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <HelpCircle className="text-white w-6 h-6 animate-pulse" />
            </div>
            <div className="text-left">
              <span className="text-lg font-black text-red-200 tracking-wider block uppercase mb-1 pointer-events-none">HỎI ĐÁP DU LỊCH</span>
              <h4 className="text-lg md:text-base font-black text-white uppercase leading-none group-hover:text-yellow-300 transition-colors">
                CÔNG DÂN, DU KHÁCH HỎI
              </h4>
              <p className="text-lg text-red-50/80 font-bold mt-1 shadow-sm">
                Q&A with local authorities
              </p>
            </div>
          </div>
          <ChevronRight size={20} className="text-white group-hover:translate-x-1 duration-200" />
        </div>

        {/* CSDL tourism search portal button */}
        <div 
          onClick={() => showToast("Đang tải cổng tra cứu Cơ sở dữ liệu Du lịch Khánh Hòa...")}
          className="bg-gradient-to-r from-blue-700 to-sky-700 text-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-blue-500/20 flex items-center justify-between cursor-pointer group transition-all text-left"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <Database className="text-white w-6 h-6" />
            </div>
            <div className="text-left">
              <span className="text-lg font-black text-sky-200 tracking-wider block uppercase mb-1 pointer-events-none">CƠ SỞ DỮ LIỆU</span>
              <h4 className="text-lg md:text-base font-black text-white uppercase leading-none group-hover:text-sky-200 transition-colors">
                TRA CỨU CSDL DU LỊCH KHÁNH HÒA
              </h4>
              <p className="text-lg text-blue-50/80 font-bold mt-1 shadow-sm">
                Provincial tourism database
              </p>
            </div>
          </div>
          <ChevronRight size={20} className="text-white group-hover:translate-x-1 duration-200" />
        </div>
      </div>

      {/* Công cụ tra cứu & Tương tác tức thời */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-14">
        {/* Panel 1: ĐƯỜNG DÂY NÓNG (Hotline) - Red layout */}
        <div className="bg-gradient-to-br from-red-500 via-red-700 to-red-900 rounded-2xl p-4 text-white shadow-sm space-y-4 text-left relative overflow-hidden group flex flex-col justify-between h-full">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0 animate-pulse">
                  <PhoneCall size={15} />
                </div>
                <div>
                  <h4 className="text-lg font-black tracking-tight text-white/95">Đường dây nóng cứu hộ</h4>
                  <p className="text-base text-red-100 font-bold uppercase tracking-wider leading-none mt-0.5">Khẩn cấp 24/7</p>
                </div>
              </div>
              <span className="text-base font-black tracking-widest text-[#FFE4E6] bg-white/20 backdrop-blur-md px-2 py-1 rounded-md uppercase leading-none">24/7</span>
            </div>

            <div className="grid grid-cols-4 gap-2 relative z-10">
              {[
                { label: "Cứu nạn", num: "112", style: "bg-white/10 hover:bg-white/20 border-white/10" },
                { label: "Cảnh sát", num: "113", style: "bg-white/10 hover:bg-white/20 border-white/10" },
                { label: "Cứu hỏa", num: "114", style: "bg-white/10 hover:bg-white/20 border-white/10" },
                { label: "Cấp cứu", num: "115", style: "bg-white/10 hover:bg-white/20 border-white/10" }
              ].map((hl, idx) => (
                <div 
                  key={idx}
                  onClick={() => showToast(`Đang kết nối hành trình khẩn cấp cuộc gọi ${hl.num}...`)}
                  className={`p-2 py-3 rounded-xl border text-center cursor-pointer transition-all ${hl.style} flex flex-col justify-center items-center gap-1`}
                >
                  <PhoneCall size={12} className="text-yellow-400 mb-0.5" />
                  <span className="text-lg font-black opacity-90 leading-none">{hl.label}</span>
                  <span className="text-lg font-black tracking-wide block leading-none">{hl.num}</span>
                </div>
              ))}
            </div>

            <div 
              onClick={() => showToast("Đang kết nối tới Tổng đài Hành chính công 1022...")}
              className="bg-white/15 backdrop-blur-md border border-white/10 text-white rounded-xl p-3 px-4 flex items-center justify-between cursor-pointer hover:bg-white/20 transition-all relative z-10"
            >
              <div>
                <span className="text-lg text-red-100 uppercase font-black tracking-widest block leading-none mb-1">Phản ánh công ích</span>
                <span className="text-lg font-black text-yellow-400">Tổng đài nóng 1022</span>
              </div>
              <div className="text-yellow-400 font-black text-lg leading-none shrink-0">
                (0258) 1022
              </div>
            </div>
        </div>

        {/* Panel 2: THÔNG TIN THỜI TIẾT (Weather Details) */}
        <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-sky-600 rounded-2xl p-4 text-white shadow-sm space-y-3.5 text-left relative overflow-hidden group flex flex-col justify-between h-full">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-white/15 backdrop-blur-md flex items-center justify-center text-white shrink-0">
                  <CloudSun size={15} className="animate-pulse" />
                </div>
                <div>
                  <h4 className="text-lg font-black tracking-tight text-white/95">Dự báo khí tượng</h4>
                  <p className="text-base text-[#A5F3FC] font-extrabold uppercase tracking-widest font-mono">Nha Trang • Live</p>
                </div>
              </div>
              <span className="text-base font-black tracking-widest text-[#E0F2FE] bg-white/20 backdrop-blur-md px-1.5 py-0.5 rounded-md uppercase font-mono">Live</span>
            </div>

            <div className="relative z-10 flex items-center justify-between p-2.5 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-black text-white tracking-tighter drop-shadow">28°C</span>
                <div>
                  <span className="text-lg font-black text-white block">Nắng ấm biển xanh</span>
                  <span className="text-lg text-sky-100/90 [word-spacing:-0.03em] block leading-normal mt-0.5">Không khí mát mẻ, lý tưởng du lịch</span>
                </div>
              </div>
              <CloudSun size={26} className="text-red-300 filter drop-shadow animate-bounce" style={{ animationDuration: '4s' }} />
            </div>

            <div className="grid grid-cols-3 gap-1.5 relative z-10">
              {[
                { label: "Độ ẩm", val: "82%", icon: Droplets, color: "text-blue-300" },
                { label: "Sức gió", val: "14 km/h", icon: Wind, color: "text-blue-200" },
                { label: "Chỉ số UV", val: "6 (An toàn)", icon: Sun, color: "text-red-300" }
              ].map((st, i) => {
                const Icon = st.icon;
                return (
                  <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/10 p-1.5 py-2 rounded-xl text-center flex flex-col items-center justify-center gap-1">
                    <div className="flex items-center gap-1">
                      <Icon size={12} className={st.color} />
                      <span className="text-base text-sky-100 uppercase tracking-wider font-extrabold block">{st.label}</span>
                    </div>
                    <span className="text-lg font-black text-white tracking-wide">{st.val}</span>
                  </div>
                );
              })}
            </div>

            <div className="relative z-10 border-t border-white/10 pt-2 flex justify-between items-center text-base font-black text-sky-100 font-sans">
              <span className="flex items-center gap-0.5">Mai: <span className="text-red-200 font-extrabold">29°C 🌤️</span></span>
              <span className="flex items-center gap-0.5">Kia: <span className="text-blue-200 font-extrabold">28°C 🌦️</span></span>
              <span className="flex items-center gap-0.5 font-extrabold">Sắp tới: <span className="text-red-350">30°C ☀️</span></span>
            </div>
        </div>
      </div>

      {/* =========================================================================
         MOCK COMPONENT: THÔNG TIN ĐA PHƯƠNG TIỆN (Requested by user)
         ========================================================================= */}
      <div className="mb-14">
        <MultimediaSection />
      </div>

      {/* =========================================================================
         ADDITIONAL COMPONENT: 5 TOURISM GUIDES (Requested by user)
         ========================================================================= */}
      <div className="mb-14 text-left">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-200 pb-4 mb-6 gap-3">
          <div className="text-left">
            <span className="text-lg font-black tracking-widest text-blue-600 uppercase bg-blue-50 px-2.5 py-1 rounded-md mb-2 inline-block">
              HÀNH TRÌNH KHÁM PHÁ SỐ HÓA KHÁNH HÒA
            </span>
            <div className="flex items-start gap-3.5 mt-1">
              <div className="w-12 h-12 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center shadow-sm shrink-0">
                <Compass size={22} className="text-white" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl md:text-3xl font-black text-[#1E3A8A] uppercase tracking-tight leading-none text-left">
                  KHÁM PHÁ DU LỊCH KHÁNH HÒA
                </h3>
                <p className="text-lg text-slate-500 font-bold">
                  Trải nghiệm thực tế năm sao, tinh hoa ẩm thực, danh thắng lịch sử và khoảnh khắc nghệ thuật lộng lẫy
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
           CINEMATIC SCENIC BILLBOARD CAROUSEL (Khánh Hòa Dream Slideshow)
           ========================================================================= */}
        <div className="relative mb-8 rounded-3xl overflow-hidden shadow-lg border border-slate-200/60 bg-slate-900 group/scenery select-none h-[280px] sm:h-[350px]">
          {/* Active Image with zoom dynamic effect */}
          <div className="absolute inset-0">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeSceneryIdx}
                src={SCENIC_SLIDES[activeSceneryIdx].image}
                alt={SCENIC_SLIDES[activeSceneryIdx].title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1.01 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full object-cover brightness-95 opacity-90 scale-100 hover:scale-102 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
          </div>

          {/* Gradients overlay for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 to-transparent z-10" />

          {/* Floating Indicators & Stats */}
          <div className="absolute top-4 left-4 z-20 flex gap-2">
            <span className="bg-blue-600/90 text-white text-base sm:text-lg font-black uppercase tracking-widest px-2.5 py-1 rounded-md backdrop-blur-md shadow">
              🚀 {SCENIC_SLIDES[activeSceneryIdx].tag}
            </span>
            <span className="bg-slate-900/60 backdrop-blur-md border border-white/10 text-white text-base sm:text-lg font-black uppercase tracking-wide px-2.5 py-1 rounded-md shadow">
              {SCENIC_SLIDES[activeSceneryIdx].stat}
            </span>
          </div>

          {/* Slide main content text */}
          <div className="absolute bottom-5 sm:bottom-8 left-5 sm:left-8 right-5 sm:right-8 z-20 text-left space-y-2 max-w-2xl">
            <motion.h4 
              key={`h4-${activeSceneryIdx}`}
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="text-base sm:text-xl md:text-2xl font-black text-white leading-normal uppercase drop-shadow-md tracking-wide"
            >
              {SCENIC_SLIDES[activeSceneryIdx].title}
            </motion.h4>
          </div>

          {/* Navigation manual controls */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2 opacity-0 group-hover/scenery:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => {
                setActiveSceneryIdx((prev) => (prev - 1 + SCENIC_SLIDES.length) % SCENIC_SLIDES.length);
                showToast("Khám phá ảnh trước");
              }}
              className="w-8 h-8 rounded-full bg-black/40 hover:bg-blue-600/90 text-white border-0 flex items-center justify-center cursor-pointer transition-all active:scale-95 shadow backdrop-blur-xs"
            >
              ←
            </button>
            <button
              onClick={() => {
                setActiveSceneryIdx((prev) => (prev + 1) % SCENIC_SLIDES.length);
                showToast("Khám phá ảnh sau");
              }}
              className="w-8 h-8 rounded-full bg-black/40 hover:bg-blue-600/90 text-white border-0 flex items-center justify-center cursor-pointer transition-all active:scale-95 shadow backdrop-blur-xs"
            >
              →
            </button>
          </div>

          {/* Slide dots tracking progress row */}
          <div className="absolute right-6 bottom-6 z-20 flex gap-2.5 items-center bg-black/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5">
            {SCENIC_SLIDES.map((slide, sIdx) => (
              <button
                key={slide.id}
                onClick={() => {
                  setActiveSceneryIdx(sIdx);
                  showToast(`Xem địa danh ${slide.id === "sc-1" ? "Vịnh Nha Trang" : slide.id === "sc-2" ? "Tháp Ponagar" : "Hòn Mun"}`);
                }}
                className={`w-2 h-2 rounded-full border-0 p-0 cursor-pointer transition-all ${
                  activeSceneryIdx === sIdx 
                    ? "bg-red-400 w-6" 
                    : "bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>

        {/* 5 columns card grid (Tab Selectors with Active Highlight Glow) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-8">
          {TOURISM_GUIDES.map((guide) => {
            const IconComponent = guide.icon;
            const isActive = activeGuideId === guide.id;
            return (
              <motion.div
                key={guide.id}
                whileHover={{ y: -4, scale: 1.01 }}
                onClick={() => {
                  setActiveGuideId(guide.id);
                  showToast(`Chuyển mục: ${guide.title}`);
                }}
                className={`relative group bg-white rounded-2xl border p-4 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden min-h-[145px] ${
                  isActive 
                    ? "border-blue-600 ring-2 ring-blue-500/10 shadow-lg text-blue-700" 
                    : "border-slate-200 hover:border-slate-300 shadow-sm text-slate-700"
                }`}
              >
                {/* Decorative background accent */}
                <div className={`absolute -right-4 -bottom-4 w-16 h-16 rounded-full transition-transform duration-500 z-0 opacity-60 ${
                  isActive ? "bg-blue-50 scale-125" : "bg-slate-50 group-hover:scale-110"
                }`} />

                <div className="relative z-10 flex flex-col items-start text-left flex-1">
                  {/* Icon wrapper */}
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-105 duration-300 shadow-inner ${
                    isActive ? "bg-blue-600 text-white" : `${guide.bgLight} ${guide.iconColor}`
                  }`}>
                    <IconComponent className="w-4.5 h-4.5" />
                  </div>

                  {/* Title and details */}
                  <h4 className={`text-lg font-black uppercase leading-snug tracking-tight ${
                    isActive ? "text-blue-800" : "text-slate-800"
                  }`}>
                    {guide.title}
                  </h4>
                  <p className="text-[18px] text-black font-bold mt-1">
                    {guide.engTitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =========================================================================
           IN-PLACE RICH VISUAL EXPLORER HUB
           ========================================================================= */}
        <AnimatePresence mode="wait">
          {activeGuideId && (() => {
            const guide = TOURISM_GUIDES.find(g => g.id === activeGuideId)!;
            const IconComponent = guide.icon;
            return (
              <motion.div
                key={guide.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-md overflow-hidden relative"
              >
                {/* Main Content Info Row */}
                <div className="flex flex-col lg:flex-row min-h-[380px]">
                  {/* Left Imagery Pane */}
                  <div className="lg:w-5/12 bg-slate-100 relative flex flex-col justify-end p-6 md:p-8 overflow-hidden min-h-[220px] lg:min-h-full shrink-0 border-r border-slate-200">
                    <div className="absolute inset-0">
                      <img
                        src={guide.image}
                        alt={guide.title}
                        className="w-full h-full object-cover scale-102 hover:scale-105 duration-1000"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    {/* Shadow overlay gradient: Soft Warm Gray overlay instead of harsh black */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-800/40 to-transparent z-10" />

                    <div className="relative z-20 text-left">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg font-bold text-yellow-400 tracking-wider block">
                          {guide.engTitle}
                        </span>
                      </div>
                      <h3 className="text-base md:text-lg font-black text-white uppercase leading-tight tracking-tight mt-1">
                        {guide.title}
                      </h3>
                      <p className="text-lg text-slate-200 font-bold italic mt-2 opacity-95">
                        "{guide.subtitle}"
                      </p>
                      <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-4 text-lg text-slate-300 font-bold">
                        <div className="flex items-center gap-1">
                          <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                          <span>Đã xác minh</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Award className="w-3.5 h-3.5 text-red-400" />
                          <span>Sản vật đặc hữu</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Highlights & Detailed Info Pane */}
                  <div className="flex-1 p-6 md:p-8 flex flex-col justify-between text-left">
                    <div>
                      <div className="flex items-center border-b border-slate-100 pb-3 mb-4">
                        <h4 className="text-[21px] md:text-[24px] font-black text-blue-800 uppercase tracking-wider">
                          GIÁ TRỊ DI SẢN & ĐIỂM NHẤN CHỌN LỌC
                        </h4>
                      </div>
                      <p className="text-lg text-slate-600 font-bold leading-relaxed mb-5 italic bg-slate-50 p-3 rounded-xl border border-slate-100">
                        {guide.tagline}
                      </p>

                      {/* Highlights list */}
                      <div className="space-y-4">
                        {guide.highlights.map((item, idx) => {
                          const isPonagar = item.title.includes("Tháp Bà Ponagar");
                          const isNem = item.title.includes("Nem nướng Ninh Hòa");
                          const hasDetails = isPonagar || isNem;
                          const detailsKey = isPonagar ? "Tháp Bà Ponagar cổ kính nghìn năm" : (isNem ? "Nem nướng Ninh Hòa trứ danh" : null);

                          return (
                            <div 
                              key={idx} 
                              onClick={() => {
                                if (hasDetails && detailsKey) {
                                  setSelectedDetailHighlight(HIGHLIGHT_DETAILS[detailsKey]);
                                  showToast(`Mở thuyết minh chi tiết: ${detailsKey}`);
                                }
                              }}
                              className={`flex gap-3 text-left items-start group/item rounded-2xl p-3 transition-all ${
                                hasDetails 
                                  ? "hover:bg-blue-50/70 bg-blue-50/20 cursor-pointer border border-blue-100/50 hover:border-blue-200 shadow-sm hover:shadow-md" 
                                  : ""
                              }`}
                            >
                              <span className="text-lg font-black bg-blue-50 text-blue-700 w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 shadow-sm border border-blue-100 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all">
                                {idx + 1}
                              </span>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1 flex-wrap">
                                  <h5 className="text-lg font-black text-slate-805 leading-none group-hover/item:text-blue-700 transition-colors">
                                    {item.title}
                                  </h5>
                                  {hasDetails && (
                                    <span className="text-lg bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-black animate-pulse flex items-center gap-1 shadow-xs shrink-0">
                                      ✨ Nhấp xem chi tiết (Thanh cuộn)
                                    </span>
                                  )}
                                </div>
                                <p className="text-lg md:text-lg text-black font-normal leading-relaxed">
                                  {item.desc}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
                        <span className="text-lg text-slate-400 font-bold">Trực quan hóa dữ liệu du khách</span>
                      </div>
                      <button
                        onClick={() => showToast(`Cảm ơn bạn đã lưu cẩm nang: ${guide.title}!`)}
                        className="w-full sm:w-auto bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white font-black uppercase text-lg tracking-wider py-2.5 px-5 rounded-xl transition-all cursor-pointer border-0 shadow-md"
                      >
                        Tải trọn bộ PDF cẩm nang du lịch
                      </button>
                    </div>
                  </div>
                </div>

                {/* =========================================================================
                   EXCLUSIVE INTERACTIVE WIDGET (Hành trình gợi mở du lịch)
                   ========================================================================= */}
                <div className="bg-slate-50 border-t border-slate-200/80 p-8 md:p-10 text-left">
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200/60">
                    <div className="flex items-center gap-2">
                      <h4 className="text-[21px] md:text-[24px] font-black text-blue-900 uppercase tracking-wider">
                        HÀNH TRÌNH THỰC TẾ & KHÔNG GIAN TƯƠNG TÁC
                      </h4>
                    </div>
                    <span className="text-lg text-red-600 font-black flex items-center gap-1 selection:bg-red-100">
                      <Sparkles className="w-3.5 h-3.5" /> Gợi mở du lịch của bạn
                    </span>
                  </div>

                  {/* 1. INTERACTIVE WIDGET FOR DAC-SAC (Khánh Hòa Style Planner) */}
                  {activeGuideId === "dac-sac" && (
                    <div className="space-y-4 text-left">
                      <p className="text-lg text-slate-500 font-extrabold uppercase tracking-wider mb-2 flex items-center gap-1">
                        Chọn phong cách để khám phá biển đảo Nha Trang theo cách riêng của bạn:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {TRAVEL_STYLES.map((style) => (
                          <div
                            key={style.id}
                            onClick={() => {
                              setTravelStyle(style.id);
                              showToast(`Tìm hiểu gu du lịch: ${style.name}`);
                            }}
                            className={`relative h-56 rounded-xl cursor-pointer overflow-hidden shadow-sm hover:shadow-md transition-all group ${
                              travelStyle === style.id
                                ? "ring-3 ring-blue-600 ring-offset-1 text-white scale-[1.01]"
                                : "text-white"
                            }`}
                          >
                            {/* Background image fallback */}
                            <img 
                              src={style.image} 
                              alt={style.name} 
                              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 duration-700 pointer-events-none"
                              referrerPolicy="no-referrer"
                            />
                            {/* Gradient Overlay: Soft slate tones instead of black */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-800/35 to-slate-900/10" />
                            
                            {/* Content */}
                            <div className="absolute inset-0 p-3 flex flex-col justify-end text-left">
                              <h5 className="text-lg font-bold leading-none mb-1 flex items-center gap-1.5 drop-shadow-sm text-yellow-400 uppercase">
                                {style.name.toUpperCase()}
                              </h5>
                              <p className="text-base text-slate-100 font-bold leading-normal line-clamp-2 opacity-90">
                                {style.desc}
                              </p>
                            </div>

                            {/* Active Shine Border Indicator */}
                            {travelStyle === style.id && (
                              <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-blue-500 shadow shadow-blue-400 animate-ping" />
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Display Travel Blueprint Suggestion */}
                      {(() => {
                        const styleNode = TRAVEL_STYLES.find(t => t.id === travelStyle)!;
                        return (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mt-3"
                          >
                            <div className="flex flex-col gap-4">
                              <div className="space-y-3 flex flex-col justify-between">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                  <div className="space-y-1.5">
                                    <span className="text-lg font-black text-blue-600 uppercase bg-blue-50 px-2 py-0.5 rounded inline-block border border-blue-100">
                                      Hành trình đề xuất chuẩn chỉnh từ dân bản xứ
                                    </span>
                                    <h5 className="text-lg font-bold text-slate-800 uppercase flex items-center gap-1.5">
                                      Lịch trình khuyên đọc: {styleNode.name}
                                    </h5>
                                  </div>
                                </div>
                                
                                <div className="space-y-1">
                                  <p className="text-base text-slate-700 font-extrabold flex items-center gap-1">
                                    📍 Địa danh lưu trú & trải nghiệm điểm nhấn hình ảnh sống động:
                                  </p>
                                  {/* Grid of Places with Photos */}
                                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-1">
                                    {(styleNode as any).placesDetail?.map((place: any, pi: number) => (
                                      <div key={pi} className="bg-slate-50/70 border border-slate-200/80 rounded-lg overflow-hidden group/place flex flex-row sm:flex-col items-center sm:items-stretch text-left shadow-2xs">
                                        <div className="w-14 h-14 sm:w-full sm:h-40 overflow-hidden bg-slate-200 shrink-0">
                                          <img 
                                            src={place.img} 
                                            alt={place.name} 
                                            className="w-full h-full object-cover group-hover/place:scale-105 duration-500"
                                            referrerPolicy="no-referrer"
                                          />
                                        </div>
                                        <div className="p-2 min-w-0">
                                          <h6 className="text-base font-black text-slate-800 leading-tight mb-0.5 truncate">
                                            {place.name}
                                          </h6>
                                          <p className="text-base text-black font-normal leading-normal line-clamp-2">
                                            {place.desc}
                                          </p>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-start w-full">
                                <div className="text-base text-slate-600 font-medium bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-100 leading-relaxed italic w-full shadow-sm">
                                  💡 <strong>Bản xứ bật mí:</strong> {styleNode.tips}
                                </div>
                              </div>
                            </div>
                            
                            {/* Subscription form */}
                            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col gap-4 bg-slate-50/60 p-5 rounded-2xl">
                              <p className="text-lg text-slate-700 font-bold leading-relaxed text-left">
                                📞 Đã tìm thấy lịch trình mơ ước? Gọi ngay chuyên viên hỗ trợ 24/7 của vương quốc để setup:
                              </p>
                              <div className="flex flex-col sm:flex-row gap-3 w-full">
                                <input
                                  type="text"
                                  placeholder="Nhập số điện thoại nhận lộ trình miễn phí..."
                                  className="flex-1 bg-white border border-slate-200 px-4 py-2.5 rounded-xl text-lg font-bold focus:outline-none focus:border-blue-500 text-slate-800 placeholder-slate-400 shadow-xs"
                                />
                                <button
                                  onClick={() => showToast("Đăng ký thành công! Tư vấn viên Khánh Hòa sẽ liên hệ bạn ngay trong 5 phút.")}
                                  className="bg-blue-600 hover:bg-blue-700 text-white font-black text-lg py-2.5 px-6 rounded-xl cursor-pointer border-0 shrink-0 shadow-xs transition-all flex items-center justify-center gap-2"
                                >
                                  📨 Đăng Ký Tư Vấn Free
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })()}
                    </div>
                  )}

                  {/* 2. INTERACTIVE WIDGET FOR DIEM-DEN (Landmark Spotlight Viewer) */}
                  {activeGuideId === "diem-den" && (
                    <div className="space-y-4 text-left">
                      <p className="text-lg text-slate-500 font-bold uppercase tracking-wider">
                        Danh sách thắng cảnh - Hãy chọn một tọa độ để xem chi tiết ảnh góc rộng:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {LANDMARK_SPOTLIGHTS.map((land) => (
                          <button
                            key={land.id}
                            onClick={() => {
                              setSpotlightId(land.id);
                              // Reset active gallery slide for this landmark
                              setSpotlightImageIndex(prev => ({ ...prev, [land.id]: 0 }));
                              showToast(`Tiêu điểm: ${land.name}`);
                            }}
                            className={`px-3 py-2 rounded-xl text-base font-black border cursor-pointer transition-all ${
                              spotlightId === land.id
                                ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white border-transparent shadow shadow-blue-500/20"
                                : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                            }`}
                          >
                            {land.name.split(" - ")[0]}
                          </button>
                        ))}
                      </div>

                      {(() => {
                        const landNode = LANDMARK_SPOTLIGHTS.find(l => l.id === spotlightId)!;
                        // Determine current displaying photo in the landmark swapper gallery
                        const activeImageIdx = spotlightImageIndex[landNode.id] ?? 0;
                        const allPhotosList = [landNode.image, ...(landNode.extraImages ?? [])];
                        const activeImg = allPhotosList[activeImageIdx] ?? landNode.image;

                        return (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-5"
                          >
                            {/* Dynamic Photo Gallery Column */}
                            <div className="md:col-span-5 space-y-2.5">
                              <div className="relative h-48 md:h-56 w-full rounded-xl overflow-hidden shadow-inner bg-slate-100 border border-slate-200 group/gallery">
                                <img 
                                  src={activeImg} 
                                  alt={landNode.name} 
                                  className="w-full h-full object-cover group-hover/gallery:scale-[1.03] duration-500"
                                  referrerPolicy="no-referrer"
                                />
                                <span className="absolute bottom-2.5 left-2.5 bg-slate-800/70 text-white text-base font-extrabold uppercase px-2 py-0.5 rounded tracking-wider backdrop-blur-xs">
                                  Góc độ {activeImageIdx + 1} / {allPhotosList.length}
                                </span>
                              </div>

                              {/* Thumbnails to tap / hover swap */}
                              <div className="grid grid-cols-3 gap-2">
                                {allPhotosList.map((photo, pIdx) => (
                                  <div
                                    key={pIdx}
                                    onClick={() => setSpotlightImageIndex(prev => ({ ...prev, [landNode.id]: pIdx }))}
                                    className={`relative h-12 md:h-14 rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${
                                      activeImageIdx === pIdx
                                        ? "border-blue-600 ring-2 ring-blue-500/10 scale-102"
                                        : "border-slate-200 hover:border-slate-350"
                                    }`}
                                  >
                                    <img 
                                      src={photo} 
                                      alt="perspective" 
                                      className="w-full h-full object-cover" 
                                      referrerPolicy="no-referrer"
                                    />
                                    <div className={`absolute inset-0 bg-black/20 group hover:bg-transparent ${activeImageIdx === pIdx ? "bg-transparent" : ""}`} />
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Details Text Column */}
                            <div className="md:col-span-4 space-y-2.5 flex flex-col justify-between text-left">
                              <div className="space-y-1.5">
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className="bg-blue-50 text-blue-700 text-lg font-black px-2 py-0.5 rounded border border-blue-100">
                                    CẨM NANG TOÀN KHÁM PHÁ TIỀM NĂNG
                                  </span>
                                  <span className="text-base text-slate-400 font-extrabold flex items-center gap-1">
                                    <MapPin className="w-3 h-3 text-blue-600" /> {landNode.distance}
                                  </span>
                                </div>
                                <h5 className="text-lg font-black text-slate-800 uppercase leading-none">
                                  {landNode.name}
                                </h5>
                                <p className="text-base text-slate-600 font-semibold leading-relaxed">
                                  {landNode.desc}
                                </p>
                              </div>

                              <div className="bg-blue-50/40 p-2.5 rounded-lg border border-blue-50 text-left">
                                <span className="text-lg text-[#0F172A] font-black block uppercase tracking-wide">
                                  ⏰ Giờ hoạt động & Lý tưởng nhất:
                                </span>
                                <p className="text-lg text-[#1E3A8A] font-bold mt-0.5">{landNode.hours}</p>
                              </div>

                              <div className="bg-red-50/40 p-2.5 rounded-lg border border-red-50 text-left">
                                <span className="text-lg text-red-800 font-black block uppercase tracking-wide">
                                  📸 Góc chụp “Sống ảo” lý tưởng nhất:
                                </span>
                                <p className="text-lg text-red-700 font-bold mt-0.5">{landNode.photoSpot}</p>
                              </div>
                            </div>

                            {/* Local advice and navigation map Column */}
                            <div className="md:col-span-3 bg-slate-900/5 p-4 rounded-xl border border-slate-200/60 flex flex-col justify-between text-left">
                              <div className="space-y-1.5">
                                <span className="text-lg font-black text-slate-400 uppercase tracking-widest block">
                                  DÂN ĐỊA PHƯƠNG KHUYÊN
                                </span>
                                <h6 className="text-base font-black text-red-700 uppercase">
                                  💡 MÁCH BẠN TỐI ƯU:
                                </h6>
                                <p className="text-lg text-slate-650 font-semibold leading-relaxed">
                                  "{landNode.tip}"
                                </p>
                              </div>

                              <button
                                onClick={() => showToast("Đang kết nối hệ thống GPS... Định vị Thắng cảnh chuẩn 100% trên google map di động.")}
                                className="w-full bg-white hover:bg-slate-50 text-slate-800 text-lg font-black py-2 rounded-lg cursor-pointer border border-slate-200 mt-3 flex items-center justify-center gap-1.5"
                              >
                                🗺️ Xem Bản Đồ Đường Đi Chi Tiết
                              </button>
                            </div>
                          </motion.div>
                        );
                      })()}
                    </div>
                  )}

                  {/* 3. INTERACTIVE WIDGET FOR AM-THUC (Gourmet Addresses & Souvenir Luggage Weight Counter) */}
                  {activeGuideId === "am-thuc" && (
                    <div className="space-y-4 text-left">
                      <p className="text-lg text-slate-500 font-bold uppercase tracking-wider mb-2">
                        Hãy chọn đặc sản Nha Trang để tra cứu địa chỉ gia truyền & chọn hộp quà lưu niệm:
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {Object.keys(DHI_ADDRESSES).map((key) => (
                          <button
                            key={key}
                            onClick={() => {
                              setSelectedDishId(key);
                              showToast(`Tìm hiểu đặc sản: ${DHI_ADDRESSES[key].name}`);
                            }}
                            className={`p-2.5 rounded-xl text-base font-black border cursor-pointer transition-all ${
                              selectedDishId === key
                                ? "bg-red-500 text-white border-transparent shadow shadow-red-500/20"
                                : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                            }`}
                          >
                            🍲 {DHI_ADDRESSES[key].name}
                          </button>
                        ))}
                      </div>

                      {(() => {
                        const dishNode = DHI_ADDRESSES[selectedDishId];
                        const totalSouCost = dishNode.unitCost * souvenirQty;
                        return (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mt-3 space-y-4"
                          >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-3">
                                {/* Food Photo */}
                                <div className="h-32 sm:h-36 w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs">
                                  <img 
                                    src={dishNode.image} 
                                    alt={dishNode.name} 
                                    className="w-full h-full object-cover" 
                                    referrerPolicy="no-referrer"
                                  />
                                </div>

                                <div className="space-y-1.5">
                                  <span className="bg-red-50 text-red-700 text-lg font-black px-2 py-0.5 rounded border border-red-100 uppercase">
                                    📍 Quán ăn gia truyền bản xứ tiến cử:
                                  </span>
                                  <h5 className="text-lg font-black text-slate-800 uppercase leading-none">
                                    😋 {dishNode.name}
                                  </h5>
                                  <p className="text-lg text-blue-900 font-extrabold leading-normal bg-blue-50/50 p-2 rounded-lg border border-blue-200">
                                    👉 {dishNode.bestShop}
                                  </p>
                                  <p className="text-lg text-slate-500 font-bold block">
                                    💵 Nhận định giá bình quân: <span className="text-red-600 font-black">{dishNode.averagePrice}</span>
                                  </p>
                                </div>
                              </div>

                              {/* Souvenir Baggage Calculator tool */}
                              <div className="bg-red-50/30 p-3.5 rounded-xl border border-red-200/60 text-left flex flex-col justify-between space-y-2.5">
                                <div className="space-y-2.5">
                                  <div className="flex justify-between items-center">
                                    <span className="text-base text-[#0F172A] font-black uppercase">
                                      🎁 ƯỚC TÍNH CHI PHÍ QUYẾT MUA QUÀ MANG VỀ:
                                    </span>
                                    <span className="text-base text-red-800 font-black bg-red-100 px-1.5 py-0.5 rounded">
                                      Bỏ ký gửi bay
                                    </span>
                                  </div>
                                  
                                  {/* Souvenir Item Header with miniature photo side to side */}
                                  <div className="flex items-center gap-3 bg-white/70 p-2 rounded-lg border border-slate-200">
                                    <div className="w-12 h-12 rounded-md overflow-hidden bg-slate-100 shrink-0">
                                      <img 
                                        src={dishNode.souvenirImage} 
                                        alt={dishNode.souvenirName} 
                                        className="w-full h-full object-cover" 
                                        referrerPolicy="no-referrer"
                                      />
                                    </div>
                                    <div className="min-w-0">
                                      <h6 className="text-base font-black text-slate-800 leading-tight">
                                        {dishNode.souvenirName}
                                      </h6>
                                      <p className="text-base text-slate-400 font-bold leading-normal truncate mt-0.5">
                                        Đại lý đóng gói: {dishNode.unitCost.toLocaleString()}đ / {dishNode.unitLabel}
                                      </p>
                                    </div>
                                  </div>

                                  <div className="flex items-center justify-between gap-3 bg-white p-2 rounded-lg border border-slate-200">
                                    <span className="text-lg text-slate-500 font-bold">Số lượng đặt sẵn:</span>
                                    <div className="flex items-center gap-2">
                                      <button
                                        onClick={() => souvenirQty > 1 && setSouvenirQty(souvenirQty - 1)}
                                        className="w-5 h-5 bg-slate-100 rounded flex items-center justify-center font-bold text-slate-600 hover:bg-slate-205 cursor-pointer border-0"
                                      >
                                        -
                                      </button>
                                      <span className="text-lg font-black text-slate-800 w-6 text-center">{souvenirQty}</span>
                                      <button
                                        onClick={() => setSouvenirQty(souvenirQty + 1)}
                                        className="w-5 h-5 bg-slate-100 rounded flex items-center justify-center font-bold text-slate-600 hover:bg-slate-205 cursor-pointer border-0"
                                      >
                                        +
                                      </button>
                                    </div>
                                  </div>

                                  <div className="flex items-center justify-between pt-1 text-lg font-black text-slate-800">
                                    <span>TỔNG GIA QUÀ TẶNG ƯỚC TÍNH:</span>
                                    <span className="text-red-600 text-lg font-black">{totalSouCost.toLocaleString()}đ</span>
                                  </div>
                                </div>

                                {/* Air traveling security tip */}
                                <div className="text-lg text-slate-500 font-semibold leading-relaxed border-t border-slate-200/60 pt-2 bg-slate-100 p-2 rounded">
                                  ✈️ {selectedDishId === "yensao" || selectedDishId === "bunsua" 
                                    ? "Quy định An ninh Hàng không: Đối với các hũ nước yến thủy tinh hoặc nước mắm truyền thống Khánh Hòa, quý du khách nhớ đóng kỹ bọc chống sốc đóng thùng xốp ký gửi gầm bay."
                                    : "Mặt hàng này đóng hút chân không đặc sản thoải mái mang xách tay bay cabin nội địa rất khô ráo không sợ bay hương."}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })()}
                    </div>
                  )}

                  {/* 4. INTERACTIVE WIDGET FOR LE-HOI (Festival Calendar & Cultural Trivia) */}
                  {activeGuideId === "le-hoi" && (
                    <div className="space-y-4 text-left">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Column Left: Festival Calendar with images */}
                        <div className="space-y-2.5">
                          <p className="text-lg text-slate-500 font-extrabold uppercase tracking-wider">
                            📆 LỊCH TRÌNH 3 ĐẠI LỄ HỘI LỚN NHẤT TRONG NĂM (ẢNH MINH HỌA):
                          </p>
                          <div className="space-y-2">
                            {FESTIVAL_CALENDAR.map((fest, ki) => (
                              <div key={ki} className="bg-white p-2.5 rounded-xl border border-slate-200 text-left flex items-start gap-3 shadow-2xs group/fest">
                                {/* Festival Miniature Image */}
                                <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                                  <img 
                                    src={fest.image} 
                                    alt={fest.name} 
                                    className="w-full h-full object-cover group-hover/fest:scale-105 duration-500"
                                    referrerPolicy="no-referrer"
                                  />
                                </div>
                                
                                <div className="flex-1 min-w-0 space-y-0.5">
                                  <h6 className="text-lg font-black text-[#1E3A8A] leading-tight flex items-center gap-1">
                                    {fest.name}
                                  </h6>
                                  <p className="text-base text-slate-500 font-extrabold">
                                    📅 Thời gian: <span className="text-red-650">{fest.time}</span>
                                  </p>
                                  <p className="text-lg md:text-base text-black font-normal leading-normal">
                                    {fest.meaning}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Column Right: Cultural Trivia Quiz */}
                        <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-3 text-left">
                          <p className="text-lg text-[#1E3A8A] font-black uppercase tracking-wider pb-1.5 border-b border-slate-200 flex items-center gap-1.5">
                            🧠 TRÒ CHƠI Ô CHỮ: THỬ TÀI HIỂU BIẾT XỨ SỞ TRẦM HƯƠNG
                          </p>
                          {TRIVIA_QUESTIONS.map((questionNode, qIdx) => (
                            <div key={questionNode.id} className="space-y-1.5 text-left border-b border-dashed border-slate-200 pb-2.5 last:border-0 last:pb-0">
                              <p className="text-base font-black text-slate-705 leading-normal">
                                {qIdx + 1}. {questionNode.question}
                              </p>
                              <div className="grid grid-cols-1 gap-1">
                                {questionNode.options.map((opt, optIdx) => {
                                  const selectedAnswer = triviaAnswers[questionNode.id];
                                  const isCorrectValue = opt === questionNode.correctAnswer;
                                  const isSelected = selectedAnswer === opt;
                                  let btnClass = "bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200";
                                  if (isSelected) {
                                    if (isCorrectValue) {
                                      btnClass = "bg-blue-500 text-white border-transparent scale-[1.01]";
                                    } else {
                                      btnClass = "bg-red-500 text-white border-transparent";
                                    }
                                  }
                                  return (
                                    <button
                                      key={optIdx}
                                      onClick={() => {
                                        const newAnsw = { ...triviaAnswers, [questionNode.id]: opt };
                                        setTriviaAnswers(newAnsw);
                                        if (isCorrectValue) {
                                          showToast(`Chính xác! Đáp án đúng là: ${opt}`);
                                        } else {
                                          showToast(`Gần đúng thôi! Bạn hãy thử sự lựa chọn khác xem sao nhé.`);
                                        }
                                      }}
                                      className={`text-left text-lg font-bold px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${btnClass}`}
                                    >
                                      {opt}
                                    </button>
                                  );
                                })}
                              </div>

                              {/* Show insight when selected correctly */}
                              {triviaAnswers[questionNode.id] === questionNode.correctAnswer && (
                                <p className="text-base bg-blue-50 text-blue-800 p-2 rounded-lg border border-blue-100 font-semibold leading-relaxed mt-1">
                                  🎉 <span className="font-extrabold">Thông tin bổ ích:</span> {questionNode.insight}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 5. INTERACTIVE WIDGET FOR HINH-ANH (Polaroid Photo Wall & Wallpaper Downloader) */}
                  {activeGuideId === "hinh-anh" && (
                    <div className="space-y-4">
                      <p className="text-lg text-slate-500 font-bold uppercase tracking-wider mb-2">
                        Nhấp chọn tấm kỉ niệm Polaroid để ngắm nhìn rộng lớn & tải hình nền tuyệt tác:
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {POLAROID_PHOTOS.map((photo) => (
                          <div
                            key={photo.id}
                            onClick={() => {
                              setSelectedPolaroidId(photo.id);
                              showToast(`Xem ảnh nghệ thuật: ${photo.title}`);
                            }}
                            className={`p-2 bg-white rounded-xl shadow-sm border transition-all cursor-pointer text-center group ${
                              selectedPolaroidId === photo.id
                                ? "border-sky-500 ring-2 ring-sky-300/30 scale-[1.01]"
                                : "border-slate-200/80 hover:border-slate-300"
                            }`}
                          >
                            <div className="h-28 w-full rounded-lg bg-slate-50 overflow-hidden relative mb-2">
                              <img src={photo.img} alt={photo.title} className="w-full h-full object-cover group-hover:scale-105 duration-300" />
                            </div>
                            <span className="text-base font-black text-slate-700 block truncate group-hover:text-sky-600">
                              📷 {photo.title.split(" - ")[0]}
                            </span>
                            <span className="text-base text-slate-400 font-extrabold tracking-wider uppercase block mt-0.5">
                              {photo.tag}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Expanded Polaroid Sandbox Frame */}
                      {(() => {
                        const photNode = POLAROID_PHOTOS.find(p => p.id === selectedPolaroidId)!;
                        const activeImgObj = photNode.gallery?.[selectedPolaroidSubIdx] || { url: photNode.img, title: photNode.title };
                        
                        return (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white w-full p-5 lg:p-7 pb-8 rounded-3xl border border-slate-200 shadow-xl mt-3 relative text-left"
                            style={{ boxShadow: "0 15px 35px rgba(0,0,0,0.06), 0 5px 20px rgba(0,0,0,0.03)" }}
                          >
                            {/* Tape Simulation */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-7 bg-red-100/60 shadow-sm backdrop-blur-xs select-none rotate-[1.5deg] opacity-80 pointer-events-none z-10" />

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mt-3">
                              {/* Left column: Big Image Area */}
                              <div className="lg:col-span-7 flex flex-col justify-between">
                                <div className="h-72 sm:h-96 w-full rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden relative shadow-inner group/polarpreview">
                                  <img 
                                    src={activeImgObj.url} 
                                    alt={activeImgObj.title} 
                                    className="w-full h-full object-cover transition-all duration-500 scale-[1.01] hover:scale-105" 
                                    referrerPolicy="no-referrer"
                                  />
                                  {/* Glassmorphic Indicator on image */}
                                  <div className="absolute bottom-3 left-3 bg-slate-900/70 backdrop-blur-md px-3 py-1.5 rounded-lg text-base font-bold text-white flex items-center gap-1.5">
                                    <span>📸 {activeImgObj.title}</span>
                                  </div>
                                  <span className="absolute bottom-3 right-3 bg-slate-800/75 text-white text-base font-black uppercase px-2.5 py-1.5 rounded-lg">
                                    {photNode.lens}
                                  </span>
                                </div>
                              </div>

                              {/* Right column: Gallery Strip and Details */}
                              <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                                <div className="space-y-4">
                                  <div>
                                    <span className="text-lg font-black text-red-600 bg-red-50 px-2.5 py-1 rounded-full uppercase tracking-wider border border-red-100">
                                      Bộ sưu tập ảnh ({photNode.gallery?.length || 1} góc máy)
                                    </span>
                                    <h4 className="text-lg md:text-[16px] font-bold text-slate-800 tracking-tight mt-1.5 leading-snug">
                                      "{photNode.title}"
                                    </h4>
                                  </div>

                                  {/* Sub Images Multi-Grid - "Khung hình to bên dưới có nhiều hình ảnh hơn nằm trong 1 khung" */}
                                  <div className="space-y-2">
                                    <p className="text-lg text-slate-400 font-bold uppercase tracking-wider">
                                      Nhấp góc ảnh khác trong khung này để xem lớn:
                                    </p>
                                    <div className="grid grid-cols-4 gap-2">
                                      {photNode.gallery?.map((gImg, idx) => (
                                        <div
                                          key={idx}
                                          onClick={() => {
                                            setSelectedPolaroidSubIdx(idx);
                                            showToast(`Thay đổi góc máy: ${gImg.title}`);
                                          }}
                                          className={`relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer border transition-all ${
                                            selectedPolaroidSubIdx === idx
                                              ? "border-sky-500 ring-2 ring-sky-450/40 scale-102 shadow-sm"
                                              : "border-slate-200 hover:border-slate-350 hover:scale-[1.03]"
                                          }`}
                                        >
                                          <img 
                                            src={gImg.url} 
                                            alt={gImg.title} 
                                            className="w-full h-full object-cover" 
                                            referrerPolicy="no-referrer"
                                          />
                                          <div className={`absolute inset-0 bg-black/10 transition-colors ${selectedPolaroidSubIdx === idx ? 'bg-transparent' : 'hover:bg-transparent'}`} />
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  <div className="space-y-2 pt-2 border-t border-slate-100">
                                    <div className="flex flex-wrap items-center gap-2">
                                      <span className="text-base text-slate-500 font-bold bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-md flex items-center gap-1">
                                        🌅 Giờ đẹp: <span className="text-red-600 font-extrabold">{photNode.bestHour}</span>
                                      </span>
                                      <span className="text-base text-slate-500 font-bold bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-md">
                                        📍 {photNode.tag}
                                      </span>
                                    </div>
                                    <p className="text-lg text-slate-600 font-medium italic leading-relaxed pt-1 select-none">
                                      💬 {photNode.vibes}
                                    </p>
                                  </div>
                                </div>

                                {/* Download simulated trigger */}
                                <div className="pt-3 border-t border-slate-100 mt-2">
                                  <button
                                    onClick={() => showToast(`Bắt đầu tải ảnh "${activeImgObj.title}" chất lượng gốc HD 4K...`)}
                                    className="w-full bg-gradient-to-r from-sky-600 to-[#1E3A8A] hover:bg-sky-700 text-white font-black text-base uppercase py-2.5 px-4 rounded-xl border-0 cursor-pointer shadow-md flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
                                  >
                                    📥 Tải hình nền di động cực nét (HD)
                                  </button>
                                  <p className="text-lg text-slate-400 text-center mt-1.5 font-bold">
                                    * Ảnh phân giải cao, tối ưu dung lượng và sắc nét trên mọi dòng máy iOS / Android.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })()}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })()}
        </AnimatePresence>

        {/* =========================================================================
           EXCLUSIVE PHOTO GALLERY: PANORAMA GALLERY - KHÁNH HÒA KỲ VỸ
           ========================================================================= */}
        <div className="mt-24 pt-14 border-t border-slate-200">
          <div className="flex flex-col mb-6 gap-5">
            <div className="w-full">
              <span className="text-lg font-black tracking-widest text-[#059669] uppercase bg-blue-50 px-2.5 py-1 rounded-md mb-2 inline-block border border-blue-100">
                PHỔ BIẾN HÌNH ẢNH DANH THẮNG
              </span>
              <div className="flex items-start gap-3.5 mt-1">
                <div className="w-12 h-12 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center shadow-sm shrink-0">
                  <Camera size={22} className="text-white" />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <h4 className="text-2xl md:text-3xl font-black text-[#1E3A8A] uppercase tracking-tight leading-tight text-left">
                    PHÒNG TRƯNG BÀY PANORAMA KHÁNH HÒA KỲ VỸ
                  </h4>
                  <p className="text-lg text-slate-500 font-bold w-full max-w-none mt-1">
                    Khám phá các kiệt tác hình ảnh nghệ thuật sắc nét về vịnh biển, di sản văn hóa truyền thống và món ăn ngon đặc sản xứ Trầm.
                  </p>
                </div>
              </div>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-row items-center justify-between gap-2 bg-slate-100/80 p-2 rounded-2xl overflow-x-auto scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden w-full border border-slate-200/50 shadow-inner">
              {[
                { filter: "all", label: "Tất cả", icon: LayoutGrid, color: "text-blue-600" },
                { filter: "bay", label: "Vịnh biển & Đảo", icon: Palmtree, color: "text-indigo-500" },
                { filter: "ditich", label: "Di tích cổ", icon: Landmark, color: "text-slate-500" },
                { filter: "cuisine", label: "Ẩm thực", icon: Utensils, color: "text-orange-500" },
                { filter: "wellness", label: "Resort & Wellness", icon: BedDouble, color: "text-emerald-500" }
              ].map((pill) => {
                const Icon = pill.icon;
                const isActive = galleryFilter === pill.filter;
                return (
                <button
                  key={pill.filter}
                  onClick={() => {
                    setGalleryFilter(pill.filter);
                    showToast(`Đang hiển thị danh mục ảnh: ${pill.label}`);
                  }}
                  className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-lg font-black transition-all duration-300 whitespace-nowrap cursor-pointer select-none border-0 shrink-0 flex-1 ${
                    isActive
                      ? "bg-white text-[#1e3a8a] shadow-sm font-extrabold"
                      : "bg-transparent text-slate-500 hover:text-[#1e3a8a] hover:bg-white/40"
                  }`}
                >
                  <Icon size={14} className={isActive ? "text-[#1e3a8a]" : pill.color} />
                  <span>{pill.label}</span>
                </button>
              )})}
            </div>
          </div>

          {/* Photo Masonry Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PANORAMA_GALLERY.filter((item) => galleryFilter === "all" || item.category === galleryFilter).map((imgNode) => {
              const isLiked = likedGalleryIds.includes(imgNode.id);
              const totalLikesCount = imgNode.baseLikes + (isLiked ? 1 : 0);
              
              return (
                <motion.div
                  layout
                  key={imgNode.id}
                  whileHover={{ y: -6, scale: 1.015 }}
                  className="bg-white rounded-2xl border border-slate-200/75 shadow-sm overflow-hidden flex flex-col justify-between group/card relative"
                >
                  {/* Image container box */}
                  <div className="h-44 sm:h-48 relative overflow-hidden bg-slate-50 border-b border-slate-100 cursor-pointer" onClick={() => setLightboxImg(imgNode.img)}>
                    <img
                      src={imgNode.img}
                      alt={imgNode.title}
                      className="w-full h-full object-cover group-hover/card:scale-105 duration-700 brightness-[0.98]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-base font-black text-slate-800 shadow-sm uppercase tracking-wider flex items-center gap-1">
                        🔍 Phóng to chi tiết
                      </span>
                    </div>

                    {/* Left corner tag overlay */}
                    <span className="absolute top-2.5 left-2.5 z-10 bg-slate-900/70 text-white text-base font-black uppercase px-2 py-0.5 rounded tracking-widest backdrop-blur-xs shadow-sm">
                      {imgNode.categoryLabel}
                    </span>

                    {/* Floating Love/Heart button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent trigger lightbox zoom
                        if (isLiked) {
                          setLikedGalleryIds(likedGalleryIds.filter((id) => id !== imgNode.id));
                          showToast(`Đã bỏ lưu ảnh: ${imgNode.title}`);
                        } else {
                          setLikedGalleryIds([...likedGalleryIds, imgNode.id]);
                          showToast(`Đã lưu ảnh nghệ thuật vào mục yêu thích: ${imgNode.title}!`);
                        }
                      }}
                      className={`absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer border-0 shadow backdrop-blur-md transition-all ${
                        isLiked 
                          ? "bg-red-500 text-white" 
                          : "bg-white/80 hover:bg-white text-slate-650 hover:scale-105"
                      }`}
                    >
                      <Heart size={14} className={isLiked ? "fill-white text-white" : "text-slate-650"} />
                    </button>
                  </div>

                  {/* Body textual information */}
                  <div className="p-4 text-left space-y-2 flex-1 flex flex-col justify-between bg-slate-50/50">
                    <div>
                      <h5 className="text-[20px] font-black text-slate-800 leading-tight group-hover/card:text-blue-750 transition-colors">
                        {imgNode.title}
                      </h5>
                      <p className="text-[18px] text-slate-505 font-normal leading-relaxed mt-2.5 line-clamp-3">
                        {imgNode.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Expanded Lightbox Modal Popup */}
          <AnimatePresence>
            {lightboxImg && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-[100] flex items-center justify-center p-3.5 sm:p-5"
                onClick={() => setLightboxImg(null)}
              >
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.95 }}
                  className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full flex flex-col shadow-2xl relative border border-white/10"
                  onClick={(e) => e.stopPropagation()} // Stop click propagate outside
                >
                  <button
                    onClick={() => setLightboxImg(null)}
                    className="absolute top-4 right-4 z-50 bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md border-0 hover:bg-slate-700 cursor-pointer transition-all hover:scale-105"
                  >
                    <X size={15} />
                  </button>

                  <div className="grid grid-cols-1 md:grid-cols-12">
                    {/* Image Column */}
                    <div className="md:col-span-8 bg-slate-950 flex items-center justify-center h-[280px] sm:h-[450px]">
                      <img
                        src={lightboxImg}
                        alt="Zoomed"
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Metadata Detail Column */}
                    <div className="md:col-span-4 p-5 sm:p-7 text-left flex flex-col justify-between space-y-4">
                      {(() => {
                        const originalNode = PANORAMA_GALLERY.find((p) => p.img === lightboxImg) || SCENIC_SLIDES.find((s) => s.image === lightboxImg);
                        return (
                          <>
                            <div className="space-y-3">
                              <span className="bg-blue-50 text-blue-700 text-base sm:text-lg font-black px-2.5 py-1 rounded-md border border-blue-100 inline-block uppercase tracking-wider">
                                🌟 TOÀN CẢNH MÃN NHÃN HD
                              </span>
                              <h4 className="text-lg sm:text-base font-black text-slate-805 uppercase leading-snug">
                                {originalNode ? originalNode.title : "Kiệt Tác Phong Cảnh Khánh Hòa"}
                              </h4>
                              <p className="text-lg text-slate-500 font-bold">
                                {originalNode && (originalNode as any).author ? `Ảnh chụp từ: ${(originalNode as any).author}` : "Cổng thông tin du lịch"} • Phân giải chuẩn quốc tế
                              </p>
                              <p className="text-lg text-slate-650 font-semibold leading-relaxed border-t border-slate-100 pt-3">
                                {originalNode ? (originalNode as any).desc || (originalNode as any).subtitle : "Chúc mừng bạn đã chiêm ngưỡng những góc chụp sắc nét đỉnh cao chuẩn chất lượng cao của thắng cảnh miền đất Nha Trang, Khánh Hòa."}
                              </p>
                            </div>

                            <div className="space-y-2.5">
                              <button
                                onClick={() => {
                                  showToast("Đang tải xuống ảnh gốc chất lượng cao...");
                                  setTimeout(() => showToast("Tải xuống hoàn toàn thành công! Lưu thành công ảnh nền Nha Trang."), 800);
                                }}
                                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-black text-lg sm:text-lg uppercase tracking-wider py-3 px-4 rounded-xl shadow border-0 cursor-pointer flex items-center justify-center gap-2 transition-colors"
                              >
                                📥 Tải xuống ảnh gốc HD
                              </button>
                              <p className="text-lg text-slate-400 text-center font-bold">
                                * Được phân phối bởi Thư viện danh thắng Cổng thông tin du lịch.
                              </p>
                            </div>
                          </>
                        );
                      })()}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Detailed Highlight Modal (Thuyết minh di sản & ẩm thực đặc sắc) */}
          <AnimatePresence>
            {selectedDetailHighlight && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[100] flex items-center justify-center p-4 sm:p-6"
                onClick={() => setSelectedDetailHighlight(null)}
              >
                <motion.div
                  initial={{ scale: 0.95, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.95, y: 20 }}
                  className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl relative border border-slate-100"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedDetailHighlight(null)}
                    className="absolute top-4 right-4 z-50 bg-slate-900/90 text-white w-9 h-9 rounded-full flex items-center justify-center shadow-md border-0 hover:bg-slate-700 cursor-pointer transition-all hover:scale-110"
                  >
                    <X size={18} />
                  </button>

                  {/* Header Banner */}
                  <div className="relative h-48 sm:h-64 shrink-0">
                    <img
                      src={selectedDetailHighlight.image}
                      alt={selectedDetailHighlight.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent flex flex-col justify-end p-5 sm:p-7 text-left">
                      <span className="bg-red-500 text-white text-base sm:text-base font-black px-2.5 py-1 rounded-full uppercase tracking-wider inline-block self-start mb-2 shadow-sm animate-pulse">
                        {selectedDetailHighlight.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-1">
                        {selectedDetailHighlight.title}
                      </h3>
                      <p className="text-base sm:text-base text-slate-200 font-bold italic">
                        {selectedDetailHighlight.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Scrollable Content Area */}
                  <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-left [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-slate-50 [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-400 scroll-smooth">
                    {selectedDetailHighlight.sections.map((sec: any, sIdx: number) => (
                      <div key={sIdx} className="space-y-2 border-b border-slate-100 pb-5 last:border-0 last:pb-0">
                        <h4 className="text-lg font-black text-blue-900 uppercase tracking-tight flex items-center gap-2">
                          <span className="w-1.5 h-4 bg-blue-600 rounded-sm inline-block" />
                          {sec.title}
                        </h4>
                        <p className="text-lg text-slate-700 font-medium leading-relaxed whitespace-pre-line text-justify">
                          {sec.content}
                        </p>
                      </div>
                    ))}

                    {/* Practical Tips Panel */}
                    <div className="bg-amber-50/70 border border-amber-100 rounded-2xl p-5 space-y-3">
                      <h4 className="text-lg font-black text-amber-900 uppercase tracking-tight flex items-center gap-1.5">
                        💡 Bí kíp bỏ túi & Kinh nghiệm thực tế
                      </h4>
                      <ul className="space-y-2.5">
                        {selectedDetailHighlight.tips.map((tip: string, tIdx: number) => (
                          <li key={tIdx} className="flex gap-2.5 text-lg text-amber-950 font-semibold items-start leading-relaxed">
                            <span className="text-amber-500 shrink-0 mt-1">📌</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Sticky Footer */}
                  <div className="border-t border-slate-100 p-4 bg-slate-50 flex items-center justify-between shrink-0">
                    <span className="text-lg text-slate-400 font-bold">Cổng thông tin Du lịch Khánh Hòa</span>
                    <button
                      onClick={() => {
                        setSelectedDetailHighlight(null);
                        showToast("Đã lưu điểm nhấn thành công vào lộ trình yêu thích!");
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-black uppercase text-lg px-5 py-2 rounded-xl transition-all border-0 shadow-md cursor-pointer hover:scale-102"
                    >
                      Lưu vào Cẩm nang cá nhân
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Detailed Business Promotion & OCOP Modal */}
          <AnimatePresence>
            {selectedBusinessPromo && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[100] flex items-center justify-center p-4 sm:p-6"
                onClick={() => setSelectedBusinessPromo(null)}
              >
                <motion.div
                  initial={{ scale: 0.95, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.95, y: 20 }}
                  className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl relative border border-slate-100"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedBusinessPromo(null)}
                    className="absolute top-4 right-4 z-50 bg-slate-900/90 text-white w-9 h-9 rounded-full flex items-center justify-center shadow-md border-0 hover:bg-slate-700 cursor-pointer transition-all hover:scale-110"
                  >
                    <X size={18} />
                  </button>

                  {/* Header Image & Title */}
                  <div className="relative h-40 sm:h-52 shrink-0">
                    <img
                      src={selectedBusinessPromo.image}
                      alt={selectedBusinessPromo.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-5 sm:p-6 text-left">
                      <span className="bg-emerald-600 text-white text-base sm:text-base font-black px-2.5 py-1 rounded-full uppercase tracking-wider inline-block self-start mb-1.5 shadow-sm">
                        🌿 {selectedBusinessPromo.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                        {selectedBusinessPromo.name}
                      </h3>
                      <p className="text-base text-slate-300 font-bold flex items-center gap-1.5 mt-1">
                        <MapPin size={12} className="text-red-400 shrink-0" /> {selectedBusinessPromo.address}
                      </p>
                    </div>
                  </div>

                  {/* Scrollable Body */}
                  <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-left [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-slate-50 [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-400 scroll-smooth">
                    {/* Hot Promotion Banner */}
                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 border-l-4 border-l-emerald-600">
                      <h4 className="text-lg font-black text-emerald-950 uppercase tracking-tight mb-2 flex items-center gap-1.5">
                        🔥 CHƯƠNG TRÌNH KHUYẾN MÃI ĐANG DIỄN RA
                      </h4>
                      <p className="text-lg text-emerald-900 font-bold leading-relaxed whitespace-pre-line">
                        {selectedBusinessPromo.promotion}
                      </p>
                    </div>

                    {/* About Business */}
                    <div className="space-y-2">
                      <h4 className="text-lg font-black text-slate-800 uppercase tracking-tight flex items-center gap-1.5">
                        🏢 Giới thiệu thương hiệu & Triết lý xanh
                      </h4>
                      <p className="text-lg text-slate-600 font-medium leading-relaxed text-justify">
                        {selectedBusinessPromo.description}
                      </p>
                    </div>

                    {/* Grid Section: Highlights & QR Code */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
                      {/* Highlights */}
                      <div className="md:col-span-8 space-y-3">
                        <h4 className="text-base font-black text-slate-800 uppercase tracking-tight flex items-center gap-1.5">
                          ⭐ Đặc sắc nổi bật
                        </h4>
                        <ul className="space-y-2">
                          {selectedBusinessPromo.highlights.map((item: string, idx: number) => (
                            <li key={idx} className="flex gap-2 text-lg text-slate-600 font-semibold items-start leading-relaxed">
                              <span className="text-emerald-500 shrink-0 mt-1">✔</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* QR Code and Actions */}
                      <div className="md:col-span-4 bg-slate-50 rounded-2xl p-4 flex flex-col items-center justify-center border border-slate-100 text-center gap-2">
                        <span className="text-base font-black text-slate-500 uppercase tracking-wider">MÃ QR ƯU ĐÃI CHÍNH CHỦ</span>
                        
                        {/* Simulation of QR code */}
                        <div className="w-32 h-32 bg-white rounded-xl border border-slate-200 p-2 shadow-xs relative flex items-center justify-center group/qr">
                          <svg className="w-full h-full text-slate-800" viewBox="0 0 100 100" fill="currentColor">
                            <rect x="0" y="0" width="25" height="25" />
                            <rect x="5" y="5" width="15" height="15" fill="white" />
                            <rect x="10" y="10" width="5" height="5" />
                            
                            <rect x="75" y="0" width="25" height="25" />
                            <rect x="80" y="5" width="15" height="15" fill="white" />
                            <rect x="85" y="10" width="5" height="5" />
                            
                            <rect x="0" y="75" width="25" height="25" />
                            <rect x="5" y="80" width="15" height="15" fill="white" />
                            <rect x="10" y="85" width="5" height="5" />

                            <rect x="35" y="10" width="10" height="15" />
                            <rect x="55" y="20" width="15" height="5" />
                            <rect x="40" y="40" width="20" height="20" />
                            <rect x="70" y="50" width="5" height="15" />
                            <rect x="15" y="45" width="15" height="10" />
                            <rect x="80" y="80" width="10" height="10" />
                          </svg>
                          <div className="absolute inset-0 bg-slate-900/10 rounded-xl opacity-0 group-hover/qr:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                            <span className="text-base text-white font-black bg-slate-950/80 px-2 py-1 rounded-md">Phóng to</span>
                          </div>
                        </div>

                        <span className="text-base font-bold text-slate-400">Được mã hóa bởi Smart-Portal</span>
                      </div>
                    </div>

                    {/* Terms & Conditions */}
                    <div className="border-t border-slate-100 pt-5 space-y-2.5">
                      <h4 className="text-base font-black text-slate-805 uppercase tracking-tight flex items-center gap-1.5">
                        📋 Điều khoản & Điều kiện sử dụng
                      </h4>
                      <ul className="space-y-1.5">
                        {selectedBusinessPromo.terms.map((term: string, idx: number) => (
                          <li key={idx} className="flex gap-2 text-lg text-slate-500 font-semibold items-start leading-normal">
                            <span className="text-slate-400 shrink-0 mt-1">•</span>
                            <span>{term}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Sticky Footer */}
                  <div className="border-t border-slate-100 p-4 bg-slate-50 flex items-center justify-between shrink-0">
                    <span className="text-lg text-slate-500 font-bold">Hotline: <strong className="text-blue-700">{selectedBusinessPromo.phone}</strong></span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          showToast(`Đang liên hệ Hotline bảo lãnh của ${selectedBusinessPromo.name}...`);
                        }}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-black uppercase text-lg px-4 py-2 rounded-xl transition-all border-0 shadow-md cursor-pointer flex items-center gap-1"
                      >
                        <PhoneCall size={13} /> Gọi ngay
                      </button>
                      <button
                        onClick={() => {
                          window.open(selectedBusinessPromo.url, "_blank");
                          showToast(`Đang chuyển hướng tới trang chủ của ${selectedBusinessPromo.name}`);
                        }}
                        className="bg-slate-900 hover:bg-slate-800 text-white font-black uppercase text-lg px-4 py-2 rounded-xl transition-all border-0 shadow-md cursor-pointer flex items-center gap-1"
                      >
                        <Globe size={13} /> Website
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>



      {/* =========================================================================
         NEW COMPONENT: 2. HỖ TRỢ QUẢNG BÁ DOANH NGHIỆP ĐỊA PHƯƠNG (OCOP & DỊCH VỤ)
         ========================================================================= */}
      <div className="mt-24 text-left border-t border-slate-200 pt-14 mb-10">
        <div className="flex items-center gap-3.5 mb-6">
          <div className="w-12 h-12 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center shadow-sm shrink-0">
            <Briefcase size={22} className="text-white" />
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-[#1E3A8A] uppercase tracking-tight leading-none text-left">
            2. Hỗ trợ quảng bá doanh nghiệp
          </h3>
        </div>

        <p className="text-lg text-slate-500 font-semibold mb-6 leading-relaxed w-full">
          Nhằm thúc đẩy kinh tế số địa phương, Cổng thông tin hỗ trợ các cơ sở sản xuất, thương hiệu OCOP hữu cơ và doanh nghiệp du lịch Khánh Hòa quảng bá hình ảnh sản phẩm, dịch vụ ẩm thực, nghỉ dưỡng, vui chơi giải trí hữu ích hoàn toàn miễn phí, mang lại cơ hội kết nối tin cậy trực tiếp tới hàng triệu du khách.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: List of Promoted Businesses with Custom Image and Filters (lg:col-span-8) */}
          <div className="lg:col-span-8 flex flex-col space-y-4 text-left order-1 h-full">
            <div className="flex flex-col gap-3 pb-3 border-b border-slate-100">
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-lg font-black text-slate-800 uppercase tracking-wider flex items-center gap-1.5 truncate">
                  <Building2 size={19} className="text-blue-600 shrink-0" /> <span className="truncate">Bản đồ doanh nghiệp du lịch & đặc sản xanh</span>
                </h4>
                <span className="text-lg font-black uppercase text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100 shrink-0">
                  {promotedBusinesses.length} Cơ sở liên thông
                </span>
              </div>

              {/* Dynamic Filters and Search with Premium Design */}
              <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between pt-1">
                <div className="relative w-full md:max-w-[210px] shrink-0">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={13} />
                  <input
                    type="text"
                    placeholder="Tìm đối tác, đặc sản..."
                    value={promoSearchQuery}
                    onChange={(e) => setPromoSearchQuery(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 pl-8.5 pr-3 py-2 rounded-xl text-lg font-bold text-slate-700 placeholder-slate-400 focus:outline-none focus:border-blue-500 hover:border-slate-300 transition-all text-left"
                  />
                </div>

                {/* Category Pills matching the premium Panorama style */}
                <div className="flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl overflow-x-auto scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden max-w-full border border-slate-200/50 shadow-inner">
                  {[
                    { value: "Tất cả", label: "Tất cả", icon: LayoutGrid, color: "text-blue-600" },
                    { value: "Ẩm thực & Nhà hàng", label: "Ẩm thực", icon: Utensils, color: "text-orange-500" },
                    { value: "Quà tặng & Đặc sản", label: "Đặc sản", icon: ShoppingBag, color: "text-pink-500" },
                    { value: "Lưu trú & Resort", label: "Khách sạn", icon: BedDouble, color: "text-emerald-500" },
                    { value: "Lữ hành & Tour", label: "Tours", icon: Palmtree, color: "text-indigo-500" }
                  ].map((tab) => {
                    const Icon = tab.icon;
                    const isActive = selectedPromoCategory === tab.value;
                    return (
                      <button
                        key={tab.value}
                        type="button"
                        onClick={() => {
                          setSelectedPromoCategory(tab.value);
                          showToast(`Đang hiển thị danh mục: ${tab.label}`);
                        }}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-lg font-black transition-all duration-300 whitespace-nowrap cursor-pointer select-none border-0 shrink-0 ${
                          isActive
                            ? "bg-white text-[#1e3a8a] shadow-sm font-extrabold"
                            : "bg-transparent text-slate-500 hover:text-[#1e3a8a] hover:bg-white/40"
                        }`}
                      >
                        <Icon size={11} className={isActive ? "text-[#1e3a8a]" : tab.color} />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* List with Banner Images */}
            <div className="flex-1 relative min-h-[500px]">
              <div className="absolute inset-0 overflow-y-auto pr-3 custom-scrollbar-light">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {promotedBusinesses
                .filter((b) => {
                  const matchesCategory = selectedPromoCategory === "Tất cả" || b.category === selectedPromoCategory;
                  const matchesSearch = b.name.toLowerCase().includes(promoSearchQuery.toLowerCase()) || 
                                        b.desc.toLowerCase().includes(promoSearchQuery.toLowerCase()) ||
                                        b.category.toLowerCase().includes(promoSearchQuery.toLowerCase());
                  return matchesCategory && matchesSearch;
                })
                .map((b) => (
                  <div
                    key={b.id}
                    onClick={() => handleOpenPromo(b)}
                    className={`bg-white rounded-2xl border transition-all overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md group cursor-pointer ${
                      b.status === "Chờ phê duyệt"
                        ? "border-red-200 bg-red-50/20"
                        : "border-slate-100 hover:border-blue-400"
                    }`}
                  >
                    <div>
                      {/* Business Promo Image Preview with dynamic size */}
                      <div className="relative h-40 sm:h-48 w-full overflow-hidden bg-slate-100">
                        <img
                          src={b.img}
                          alt={b.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="absolute bottom-2 right-2 text-base font-black uppercase px-1.5 py-0.5 rounded shadow-xs bg-black/75 backdrop-blur-xs text-white">
                          {b.status === "Chờ phê duyệt" ? "Đăng ký mới" : "✓ Đã duyệt"}
                        </span>
                      </div>

                      <div className="p-3.5 text-left">
                        <h5 className="text-lg font-black text-slate-850 tracking-tight leading-snug line-clamp-1 group-hover:text-blue-600 transition-colors">
                          {b.name}
                        </h5>

                        <p className="text-lg text-black font-normal leading-relaxed mt-1.5 line-clamp-3 select-none">
                          {b.desc}
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 pt-0">
                      {/* Clean Contact Row with Truncated Link */}
                      <div className="border-t border-slate-100 pt-3 space-y-1">
                        <div className="flex items-center justify-between gap-1.5 text-lg font-black text-slate-500">
                          <span 
                            className="text-sky-600 hover:underline cursor-pointer flex items-center gap-1 font-bold truncate max-w-[60%]" 
                            onClick={(e) => {
                              e.stopPropagation();
                              showToast(`Chuẩn bị chuyển hướng tới website: ${b.url}`);
                            }}
                            title={b.url}
                          >
                            <Globe size={11} className="shrink-0 text-sky-500" /> 
                            <span className="truncate">{b.url.replace("https://", "").replace("www.", "")}</span>
                          </span>
                          <span className="text-slate-500 font-bold shrink-0 flex items-center gap-0.5">
                            <span className="text-slate-400 font-semibold">Hotline:</span> {b.phone}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Register Form (lg:col-span-4) */}
          <div className="lg:col-span-4 bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm order-2">
            <h4 className="text-lg font-black text-slate-800 uppercase tracking-wider mb-6 pb-2 border-b border-slate-100 flex items-center gap-1.5">
              <Plus size={19} className="text-blue-600" /> Đăng ký giới thiệu sản phẩm / dịch vụ
            </h4>
            
            <form onSubmit={handleAddPromotion} className="space-y-6">
              <div>
                <label className="block text-lg md:text-lg font-black text-slate-500 uppercase tracking-tight mb-2">
                  Tên Doanh nghiệp / HTX / Cơ sở <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: HTX Trầm Hương Vạn Giã..."
                  value={promoName}
                  onChange={(e) => setPromoName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 py-3 px-4 rounded-xl text-lg font-bold text-slate-700 placeholder-slate-400 focus:outline-none focus:border-blue-500 hover:border-slate-305 transition-all text-left"
                />
              </div>

              <div>
                <label className="block text-lg md:text-lg font-black text-slate-500 uppercase tracking-tight mb-2">
                  Lĩnh vực hoạt động <span className="text-red-500">*</span>
                </label>
                <select
                  value={promoCategory}
                  onChange={(e) => setPromoCategory(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 py-3 px-4 rounded-xl text-lg font-bold text-slate-700 focus:outline-none focus:border-blue-500 transition-all cursor-pointer"
                >
                  <option value="Quà tặng & Đặc sản">Quà tặng & Đặc sản</option>
                  <option value="Ẩm thực & Nhà hàng">Ẩm thực & Nhà hàng</option>
                  <option value="Lưu trú & Resort">Lưu trú & Resort</option>
                  <option value="Lữ hành & Tour">Lữ hành & Tour</option>
                  <option value="Dịch vụ khác">Dịch vụ khác</option>
                </select>
              </div>

              <div>
                <label className="block text-lg md:text-lg font-black text-slate-500 uppercase tracking-tight mb-2">
                  Số điện thoại liên hệ <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Ví dụ: 0905xxxxx"
                  value={promoPhone}
                  onChange={(e) => setPromoPhone(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 py-3 px-4 rounded-xl text-lg font-bold text-slate-700 placeholder-slate-400 focus:outline-none focus:border-blue-500 hover:border-slate-305 transition-all text-left"
                />
              </div>

              <div>
                <label className="block text-lg md:text-lg font-black text-slate-500 uppercase tracking-tight mb-2">
                  Đường dẫn ảnh Banner (Tùy chọn)
                </label>
                <input
                  type="url"
                  placeholder="Ví dụ: https://images.unsplash.com/..."
                  value={promoImgUrl}
                  onChange={(e) => setPromoImgUrl(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 py-3 px-4 rounded-xl text-lg font-bold text-slate-700 placeholder-slate-400 focus:outline-none focus:border-blue-500 hover:border-slate-305 transition-all text-left"
                />
                <p className="text-base text-slate-400 mt-1.5 font-normal leading-normal">
                  * Hệ thống sẽ tự động thêm ảnh phong cảnh tuyệt đẹp nếu để trống.
                </p>
              </div>

              <div>
                <label className="block text-lg md:text-lg font-black text-slate-500 uppercase tracking-tight mb-2">
                  Trang Web / Facebook (Tùy chọn)
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg font-bold"><Globe size={12} /></span>
                  <input
                    type="url"
                    placeholder="https://example.com"
                    value={promoUrl}
                    onChange={(e) => setPromoUrl(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 py-3 pl-10 pr-4 rounded-xl text-lg font-bold text-slate-700 placeholder-slate-400 focus:outline-none focus:border-blue-500 hover:border-slate-305 transition-all text-left"
                  />
                </div>
              </div>

              <div>
                <label className="block text-lg md:text-lg font-black text-slate-500 uppercase tracking-tight mb-2">
                  Mô tả sản phẩm & Giá trị xanh <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Nhập thông tin giới thiệu ngắn, ưu đãi giảm giá nổi bật..."
                  value={promoDesc}
                  onChange={(e) => setPromoDesc(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 py-3 px-4 rounded-xl text-lg font-bold text-slate-700 placeholder-slate-400 focus:outline-none focus:border-blue-500 hover:border-slate-305 transition-all text-left resize-none text-lg"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-slate-900 hover:bg-blue-600 text-white font-black text-lg uppercase py-3.5 px-4 rounded-xl border-0 cursor-pointer shadow-md transition-colors flex items-center justify-center gap-2"
              >
                🚀 Gửi thông tin quảng bá
              </button>
              <p className="text-lg text-slate-400 text-center font-normal leading-normal px-2">
                * Nhấn nút gửi để lập tức đẩy thông tin lên lưới hiển thị du lịch. Ban kiểm duyệt sẽ rà soát và cấp nhãn OCOP/Premium chính chủ{'\u00A0'}sau!
              </p>
            </form>
          </div>

          {/* Full-width Banner at the bottom */}
          <div className="lg:col-span-12 order-3 w-full mt-2">
            <div className="bg-sky-50 border border-sky-100 rounded-2xl p-4 text-left flex items-start gap-3 shadow-sm">
              <span className="text-sky-600 bg-white shadow-xs p-2 rounded-xl text-lg shrink-0">🤝</span>
              <div>
                <h5 className="text-lg font-black text-sky-900 leading-snug mb-1">Cơ chế bảo trợ du lịch xanh & Cam kết phát triển cộng đồng</h5>
                <p className="text-lg text-sky-850 leading-normal font-semibold">
                  Mọi cơ sở quảng bá trên nền tảng cam kết sử dụng nguyên liệu địa phương bền vững và trích 1% lợi nhuận để gây quỹ trồng rừng bảo vệ nguồn nước ngầm Khánh Hòa. Hãy ưu tiên ủng hộ các thương hiệu gắn nhãn xanh này nhé!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      </div>
    </div>
  );
}
