import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  BookOpen, 
  Maximize2, 
  Minimize2, 
  Sparkles, 
  TreePine, 
  Compass, 
  Anchor, 
  Tv, 
  Award, 
  Bookmark, 
  Share2, 
  RotateCcw
} from 'lucide-react';

interface Page {
  id: number;
  category: string;
  title: string;
  subtitle?: string;
  content: string;
  quote?: string;
  quoteAuthor?: string;
  image: string;
  imageCaption?: string;
  author?: string;
  badge?: string;
  sideNotes?: string[];
}

const pages: Page[] = [
  {
    id: 0,
    category: "TỔNG QUAN KHÁNH HÒA",
    title: "KHÁNH HÒA: KHÁT VỌNG VÀ KỶ NGUYÊN MỚI",
    subtitle: "Ấn phẩm chuyên đề thông tin đối ngoại chính thức tỉnh Khánh Hòa",
    content: "CƠ QUAN CHỦ QUẢN: SỞ THÔNG TIN VÀ TRUYỀN THÔNG TỈNH KHÁNH HÒA\n\nPhát hành: Quý II / 2026\nTài liệu chuyên san chiến lược hướng biển và hội nhập toàn cầu",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "Toàn cảnh vịnh Nha Trang biển xanh ngọc bích từ đỉnh núi",
    badge: "CHUYÊN ĐỀ ĐẶC BIỆT"
  },
  {
    id: 1,
    category: "LỜI NGỎ BAN BIÊN TẬP",
    title: "THƯ GỬI QUÝ ĐỘC GIẢ",
    subtitle: "Xứ Trầm Hương chuyển mình mạnh mẽ trong kỷ nguyên mới",
    content: "Xứ Trầm Hương - Yến Sào từ lâu đã ghi dấu ấn sâu đậm trong lòng nhân dân và du khách quốc tế bởi sự kết hòa diệu kỳ giữa thiên nhiên, biển đảo trù phú và bề dày di sản văn hóa.\n\nTrong kỷ nguyên số hóa, Khánh Hòa đứng trước thời cơ bứt phá, hướng tới mục tiêu trở thành thành phố trực thuộc Trung ương vào năm 2030.\n\nẤn phẩm chuyên đề này tập trung vào 6 trục thông tin cốt lõi: Tổng quan, Tự nhiên, Tài nguyên, Lịch sử, Hạ tầng và Cơ chế đặc thù.",
    author: "Sở Thông Tin và Truyền Thông Tỉnh Khánh Hòa",
    quote: "Phát triển Khánh Hòa là niềm tự hào xứ biển và mắt xích chiến lược củng cố kinh tế toàn quốc.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop",
    sideNotes: [
      "T 2-3: Tổng quan & Tầm nhìn",
      "T 4-5: Địa hình & Vịnh biển",
      "T 6-9: Tài nguyên thiên nhiên",
      "T 10-13: Lịch sử & Văn hóa",
      "T 14-17: Cơ sở hạ tầng",
      "T 18-19: Chính sách đặc thù"
    ]
  },
  {
    id: 2,
    category: "1. Tổng quan về Khánh Hòa",
    title: "VỊ THẾ ĐỊA CHÍNH TRỊ CHIẾN LƯỢC",
    subtitle: "Tâm điểm kết nối vùng và phát triển kinh tế biển Nam Trung Bộ",
    content: "Khánh Hòa là tỉnh duyên hải Nam Trung Bộ, sở hữu vị trí địa chính trị cực kỳ quan trọng trong chiến lược phát triển kinh tế - xã hội và bảo đảm an ninh quốc phòng của Việt Nam.\n\nNằm trên các trục giao thông huyết mạch của cả nước (Quốc lộ 1A, đường sắt Bắc - Nam, đường hàng không quốc tế), Khánh Hòa là cửa ngõ hướng biển thuận lợi cho vùng Tây Nguyên hùng vĩ. Với tổng diện tích tự nhiên hơn 5.137 km², đây là vùng đất giàu tiềm năng công nghiệp, du lịch dịch vụ chất lượng cao, đóng vai trò hạt nhân tăng trưởng của khu vực duyên hải miền Trung.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "Đường bờ biển Nha Trang trải dài quyến rũ kết nối vùng vịnh"
  },
  {
    id: 3,
    category: "1. Tổng quan về Khánh Hòa",
    title: "ĐỒNG BẰNG TRÙ PHÚ VÀ CÁC ĐÔ THỊ HẠT NHÂN",
    subtitle: "Cơ cấu hành chính năng động hướng đến đô thị loại I trực thuộc Trung ương",
    content: "Về mặt hành chính, tỉnh Khánh Hòa bao gồm thành phố Nha Trang (đô thị loại I - trung tâm chính trị, kinh tế, văn hóa), thành phố Cam Ranh, thị xã Ninh Hòa cùng 6 huyện: Vạn Ninh, Diên Khánh, Khánh Vĩnh, Khánh Sơn, Cam Lâm và huyện đảo Trường Sa.\n\nSự phân bổ hài hòa giữa đô thị ven biển năng động và các huyện miền núi trù phú tạo nên một hệ sinh thái kinh tế hoàn chỉnh. Tỉnh đang tập trung quy hoạch đồng bộ nhằm hoàn thành mục tiêu đưa toàn bộ Khánh Hòa trở thành thành phố trực thuộc Trung ương vào năm 2030, trong đó lấy Nha Trang, Cam Ranh và Khu kinh tế Vân Phong làm các cực tăng trưởng động lực chính.",
    image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "Đô thị biển Nha Trang rực rỡ hiện đại vươn mình ra biển lớn"
  },
  {
    id: 4,
    category: "2. Điều kiện tự nhiên",
    title: "ĐỊA THẾ SƯỜN NÚI HƯỚNG RA ĐẠI DƯƠNG",
    subtitle: "Sự kết hợp độc đáo giữa địa hình đồi núi dốc và bờ biển kéo dài",
    content: "Địa hình Khánh Hòa tương đối phức tạp, thấp dần từ Tây sang Đông. Phía Tây là dãy Trường Sơn hùng vĩ với nhiều đỉnh núi cao trên 1.500m che chắn vững vàng, tiếp nối là vùng đồi trung du, đồng bằng ven biển nhỏ hẹp và cuối cùng là bờ biển dài hơn 385 km vô cùng uốn lượn.\n\nĐịa thế này đã tạo nên cấu trúc địa hình sườn núi hướng thẳng ra biển sâu, kiến tạo nên ba vịnh biển kín gió tự nhiên tốt nhất nước gồm Nha Trang, Vân Phong, và Cam Ranh. Đây là điều kiện tự nhiên hiếm có giúp bảo vệ các khu dân cư ven biển khỏi sóng lớn và bão dữ, đồng thời cung cấp các bến cảng nước sâu hoạt động an toàn quanh năm.",
    image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "Những dải núi đá sừng sững ôm lấy dòng nước biển xanh thẳm"
  },
  {
    id: 5,
    category: "2. Điều kiện tự nhiên",
    title: "KHÍ HẬU ÔN HÒA & HỆ SINH THÁI BIỂN KỲ QUAN",
    subtitle: "Nguồn tài nguyên khí hậu nhiệt đới ôn hòa lý tưởng và đa dạng sinh học",
    content: "Khánh Hòa nằm trong vùng khí hậu nhiệt đới gió mùa nhưng có sự ôn hòa rõ rệt nhờ ảnh hưởng của biển đại dương sâu rộng. Nhiệt độ trung bình năm luôn ổn định quanh mức 26,7°C, số giờ nắng cao lên tới hơn 2.600 giờ/năm, ít chịu ảnh hưởng trực tiếp của bão lớn so với các tỉnh phía Bắc.\n\nNhờ khí hậu ôn hòa tuyệt hảo, các rạn san hô sinh trưởng mạnh mẽ, tiêu biểu là khu bảo tồn Hòn Mun vịnh Nha Trang với hơn 350 loài san hô cứng sinh sống cùng hàng nghìn loài sinh vật biển rực rỡ sắc màu. Đây chính là báu vật tự nhiên kiến tạo nên thiên đường du lịch nghỉ dưỡng thu hút du khách suốt bốn mùa.",
    image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "Hòn ngọc Nha Trang hiền hòa tỏa sáng rực rỡ dưới ánh nắng vàng"
  },
  {
    id: 6,
    category: "3. Tài nguyên thiên nhiên",
    title: "LÂM SẢN QUÝ KHÁNH HÒA - LINH KHÍ TRẦM HƯƠNG",
    subtitle: "Sản vật quý hiếm kết tinh linh khí nghìn năm của đất trời rừng sâu",
    content: "‘Khánh Hòa là xứ Trầm Hương...’. Trầm hương và Kỳ Nam Khánh Hòa có chất lượng vượt trội nhất thế giới nhờ thổ nhưỡng núi cao đặc trưng của dãy Trường Sơn phía huyện Vạn Ninh, Khánh Vĩnh.\n\nCây Dó Bầu khi chịu thương tích bởi bão táp hay sâu đục sẽ tự tiết ra lớp nhựa thơm quý giá để bọc bảo vệ vết thương. Trải qua hàng chục năm chắt chiu dưỡng chất và gió núi, lớp gỗ hóa thành Trầm Hương hảo hạng với mùi hương thanh khiết, quý phái. Đây không chỉ là tài nguyên lâm sản có giá trị kinh tế khổng lồ mà còn là biểu tượng tinh thần kiên cường của con người xứ biển.",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "Trầm hương tự nhiên nguyên bản vô cùng quý hiếm vùng núi rừng Khánh Hòa"
  },
  {
    id: 7,
    category: "3. Tài nguyên thiên nhiên",
    title: "VÀNG TRẮNG ĐẢO KHƠI - YẾN SÀO THIÊN NHIÊN",
    subtitle: "Báu vật dinh dưỡng quý giá được khai thác thủ công trên vách đá cheo leo",
    content: "Yến sào đảo thiên nhiên Khánh Hòa nổi danh khắp thế giới là loại tổ yến có giá trị dinh dưỡng cao nhất nhờ chứa lượng khoáng chất vi lượng phong phú tích tụ từ gió khơi đại dương sâu.\n\nChim yến hàng tự nhiên làm tổ trên các vách núi đá dựng đứng giữa khơi xa. Nghề khai thác yến sào đã có truyền thống hơn 700 năm, là sự kết hợp giữa lòng can trường tuyệt đỉnh của người thợ và sự bảo tồn tự nhiên nghiêm ngặt. Việc quản lý và khai thác khoa học bền vững đưa thương hiệu Yến sào Khánh Hòa trở thành báu vật xuất khẩu, biểu trưng cho sự trù phú tráng lệ của tài nguyên biển đảo địa phương.",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "Hang yến tự nhiên sừng sững giữa sóng gió trùng dương khơi xa"
  },
  {
    id: 8,
    category: "3. Tài nguyên thiên nhiên",
    title: "TÀI NGUYÊN THỦY HẢI SẢN & KINH TẾ BIỂN XANH",
    subtitle: "Thủ phủ nuôi trồng biển thông minh và chế biến thủy sản xuất khẩu",
    content: "Vùng biển Khánh Hòa có trữ lượng thủy hải sản khổng lồ với nhiều loài có giá trị xuất khẩu cao như cá ngừ đại dương Nha Trang, tôm hùm Cam Ranh, cá bớp, mực ống tươi ngon.\n\nĐể bảo vệ nguồn tài nguyên biển vô giá này, tỉnh đang đi đầu cả nước áp dụng công nghệ nuôi biển xa bờ bền vững bằng lồng nhựa HDPE tiêu chuẩn Na Uy chịu bão tốt, kết hợp các cảm biến thông minh giám sát dưới nước. Ngành chế biến xuất khẩu thủy hải sản đạt tiêu chuẩn khắt khe quốc tế đã đem về kim ngạch tỷ USD, nâng cao đời sống cho hàng chục vạn ngư dân và gìn giữ môi trường biển Nha Trang - Vân Phong mãi xanh tươi.",
    image: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "Hệ thống lồng nhựa HDPE nuôi biển thông minh bảo tồn hệ sinh thái biển"
  },
  {
    id: 9,
    category: "4. Lịch sử hình thành",
    title: "TIẾN TRÌNH LỊCH SỬ VÀNG SON NGÀN NĂM",
    subtitle: "Hành trình lập xứ, khai hoang và định hình vùng đất danh tiếng",
    content: "Vùng đất Khánh Hòa có bề dày lịch sử hàng ngàn năm, là nơi giao thoa rực rỡ giữa nền văn hóa Sa Huỳnh, văn hóa Chăm Pa cổ xưa và nền văn hóa Việt cổ thuần khiết.\n\nNăm 1653, Chúa Nguyễn Phúc Tần sai Cai cơ Hùng Lộc hầu sang lập dinh Thái Khang với hai huyện Quảng Phước và Tân Định, đánh dấu cột mốc lịch sử chính thức sáp nhập vùng đất này vào bản đồ nước Việt. Qua nhiều thăng trầm lịch sử, đến năm 1831 dưới triều vua Minh Mạng, tỉnh Khánh Hòa chính thức được thành lập. Suốt chiều dài lịch sử, con người nơi đây luôn giữ vững tinh thần hiếu học, can trường đấu tranh bảo vệ tổ quốc, gìn giữ bờ cõi biển đảo thiêng liêng.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "Vẻ đẹp trường tồn của di sản nghìn năm gìn giữ vẹn nguyên tinh hoa dân tộc"
  },
  {
    id: 10,
    category: "4. Lịch sử hình thành",
    title: "LINH THIÊNG DI TÍCH QUỐC GIA THÁP BÀ PO NAGAR",
    subtitle: "Quần thể đền tháp Chăm cổ vĩ đại soi bóng bên dòng sông Cái",
    content: "Xây dựng từ thế kỷ VIII đến thế kỷ XIII dưới thời vương quốc cổ Chăm Pa thịnh vượng, Tháp Bà Po Nagar ngự trị uy nghiêm trên đỉnh đồi Cù Lao, soi bóng mát dịu xuống dòng sông Cái Nha Trang.\n\nĐây là quần thể kiến trúc đền tháp gạch nung cổ xưa lớn nhất và được bảo tồn nguyên vẹn nhất miền Trung. Tháp thờ Thiên Y Thánh Mẫu Ana - người mẹ xứ sở dạy dân trồng lúa, dệt vải, chăn nuôi, mang lại cuộc sống ấm no cho nhân dân. Công trình kiến trúc điêu khắc đá tinh xảo kết tụ tinh hoa tôn giáo lâu đời này đã được xếp hạng là Di tích quốc gia đặc biệt, điểm đến tâm linh linh thiêng bậc nhất xứ sở.",
    image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "Các ngọn tháp gạch nung sừng sững ngạo nghễ thách thức lớp bụi thời gian"
  },
  {
    id: 11,
    category: "4. Lịch sử hình thành",
    title: "LỄ HỘI CẦU NGƯ & FESTIVAL BIỂN HIỆN ĐẠI",
    subtitle: "Giao hòa tuyệt diệu giữa bản sắc tâm linh cổ truyền và hơi thở thời đại",
    content: "Di sản lịch sử của Khánh Hòa được lưu giữ sống động qua các lễ hội truyền thống, tiêu biểu là lễ hội Cầu Ngư cầu mong trời yên biển lặng, cá đầy khoang của ngư dân vùng biển dạt dào.\n\nNgày nay, bản sắc ấy được kế thừa và thăng hoa rực rỡ qua Festival Biển Nha Trang - Khánh Hòa tổ chức định kỳ 2 năm một lần. Lễ hội là bữa tiệc văn hóa quốc tế hoành tráng, kết hợp tinh tế giữa di sản bài chòi, múa bóng cổ truyền và các màn trình diễn ánh sáng khổng lồ của hàng ngàn drone công nghệ hiện đại trên bầu trời đêm vịnh Nha Trang, khẳng định khát vọng vươn mình cởi mở với thế giới.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "Lễ hội ánh sáng hiện đại rực rỡ lung linh soi bóng vịnh Nha Trang"
  },
  {
    id: 12,
    category: "5. Cơ sở hạ tầng",
    title: "ĐỘNG LỰC SIÊU CẢNG BIỂN NƯỚC SÂU VÂN PHONG",
    subtitle: "Vịnh nước sâu tự nhiên tốt bậc nhất Đông Nam Á thúc đẩy logistics quốc tế",
    content: "Khu kinh tế Vân Phong nằm ở phía Bắc tỉnh Khánh Hòa, sở hữu vịnh nước sâu tự nhiên tốt nhất khu vực với độ sâu luồng lạch vượt trên 20m, kín gió tuyệt đối nhờ bán đảo Hòn Gốm án ngữ che chắn phía trước.\n\nĐây là điều kiện lý tưởng bậc nhất để xây dựng siêu cảng trung chuyển container quốc tế đón nhận những con tàu siêu trường siêu trọng trên thế giới. Hạ tầng kết nối giao thông đường bộ cao tốc Vân Phong - Nha Trang và Khánh Hòa - Buôn Ma Thuột đang hoàn thiện thần tốc, đưa Vân Phong thành trung tâm logistics cảng biển dịch vụ lớn, thu hút dòng vốn vĩ mô vươn khơi toàn cầu.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "Cảng biển container sầm uất nhộn nhịp tàu bè giao thương tại vịnh Vân Phong"
  },
  {
    id: 13,
    category: "5. Cơ sở hạ tầng",
    title: "HẠ TẦNG DU LỊCH CAO CẤP CAM RANH & HÒN TRE",
    subtitle: "Sân bay quốc tế hiện đại và các quần thể nghỉ dưỡng đẳng cấp 5-6 sao",
    content: "Khánh Hòa sở hữu hạ tầng du lịch quy mô hàng đầu châu Á với điểm nhấn là Cảng hàng không quốc tế Cam Ranh - nhà ga quốc tế hiện đại tiêu chuẩn 4 sao đón hàng triệu lượt khách ngoại quốc.\n\nBán đảo Cam Ranh với Bãi Dài cát trắng mịn lụa đã thu hút hơn 40 dự án siêu resort 5-6 sao đẳng cấp quốc tế. Song song đó, đảo ngọc Hòn Tre vịnh Nha Trang với tuyến cáp treo vượt biển kỷ lục thế giới và quần thể VinWonders sầm uất tạo nên hệ sinh thái du lịch - giải trí khép kín, hiện đại bậc nhất, đưa Nha Trang sánh ngang với những hòn đảo thiên đường du lịch lừng danh thế giới.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "Hồ bơi vô cực ngút ngàn hướng ra bãi cát trắng mịn màng của vịnh biển Cam Ranh"
  },
  {
    id: 14,
    category: "5. Cơ sở hạ tầng",
    title: "HẠ TẦNG SỐ & CHÍNH QUYỀN ĐIỆN TỬ",
    subtitle: "Trung tâm Giám sát Điều hành Thông minh (IOC) nâng tầm chất lượng cuộc sống",
    content: "Để tạo đà cho tương lai bứt phá bền vững, Khánh Hòa đang tập trung đầu tư thần tốc vào hạ tầng công nghệ số toàn diện, coi đây là xương sống của chính quyền phục vụ nhân dân.\n\nTrung tâm Giám sát và Điều hành Thông minh (IOC) tỉnh hoạt động liên tục 24/7, tích hợp hệ thống camera AI kiểm soát an ninh trật tự, cảm biến tự động đo đạc chất lượng nước biển và không khí đô thị. Hệ thống cổng dịch vụ công liên thông mức độ 4 giúp số hóa 100% hồ sơ đất đai và thủ tục hành chính, mang đến môi trường sống an toàn, nhanh chóng và cực kỳ minh bạch cho doanh nghiệp và nhân dân.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "Giao diện hệ thống số hóa điều hành thông minh số hóa hiện đại của tỉnh"
  },
  {
    id: 15,
    category: "5. Cơ sở hạ tầng",
    title: "HẠ TẦNG DÂN SINH Y TẾ & GIÁO DỤC CHẤT LƯỢNG CAO",
    subtitle: "Đầu tư xây dựng con người là gốc rễ của phát triển bền vững",
    content: "Hệ thống hạ tầng dân sinh được tỉnh đầu tư đặc biệt đồng bộ. Khánh Hòa sở hữu mạng lưới y tế hiện đại với Bệnh viện đa khoa chuyên sâu chất lượng cao khu vực, kết hợp trung tâm y tế cơ sở chăm sóc sức khỏe tốt cho đồng bào hải đảo Trường Sa và vùng đồng bào dân tộc thiểu số.\n\nHạ tầng giáo dục phát triển rực rỡ với các cơ sở đào tạo uy tín tầm quốc gia như Trường Đại học Nha Trang đi đầu trong nghiên cứu công nghệ sinh học biển sâu, cùng hệ thống trường học thông minh liên thông quốc tế, liên tục cung ứng nguồn lao động tay nghề kỹ thuật cao đáp ứng yêu cầu kỷ nguyên công nghiệp xanh.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "Trang thiết bị y khoa tiên tiến hàng đầu chăm sóc sức khỏe cho nhân dân"
  },
  {
    id: 16,
    category: "6. CHÍNH SÁCH ĐẶC THÙ ĐANG ĐƯỢC ÁP DỤNG",
    title: "NGHỊ QUYẾT SỐ 55/2022/QH15 CỦA QUỐC HỘI",
    subtitle: "Bệ phóng cơ chế vượt trội đưa Khánh Hòa bứt phá trở thành đầu tàu kinh tế",
    content: "Chính sách đặc thù cốt lõi nhất đang áp dụng tại tỉnh là Nghị quyết số 55/2022/QH15 của Quốc hội về thí điểm một số cơ chế, chính sách đặc thù phát triển tỉnh Khánh Hòa.\n\nNghị quyết trao cho tỉnh những cơ chế vượt trội về quản lý tài chính - ngân sách, phân cấp quản lý đất đai và quy hoạch đô thị linh hoạt. Đặc biệt, tỉnh được quyền quyết định chủ trương đầu tư các dự án nhóm A quy mô lớn, tạo điều kiện thông thoáng thu hút các nhà đầu tư chiến lược vào Khu kinh tế Vân Phong và dự án đô thị sân bay Cam Lâm, rút ngắn 50% thời gian phê duyệt thủ tục hành chính để kích hoạt các nguồn lực khổng lồ.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "Khung pháp lý ưu đãi đặc thù mở ra cơ hội vàng phát triển bứt phá vĩ mô"
  },
  {
    id: 17,
    category: "6. CHÍNH SÁCH ĐẶC THÙ ĐANG ĐƯỢC ÁP DỤNG",
    title: "CÔNG NGHIỆP CÔNG NGHỆ CAO & KHÁT VỌNG ĐÔ THỊ 2030",
    subtitle: "Kiên định con đường phát triển công nghiệp xanh và thu hút dòng vốn ngoại",
    content: "Chính sách thu hút đầu tư của Khánh Hòa ưu tiên dòng vốn FDI chất lượng cao rót trực tiếp vào công nghiệp sạch tại Nam Cam Ranh và các phân khu sản xuất chip bán dẫn, linh kiện điện tử cao cấp Vân Phong.\n\nTỉnh áp dụng các gói ưu đãi thuế thu nhập doanh nghiệp kịch trần, giảm tiền thuê đất lâu dài cho các dự án năng lượng tái tạo (điện gió ngoài khơi, hydro xanh sạch). Sự cam kết kiến tạo môi trường kinh doanh thông thoáng kết hợp cơ chế đặc thù ưu việt chính là nam châm thu hút các tập đoàn công nghệ toàn cầu hàng đầu thế giới từ Mỹ, Nhật Bản, Hàn Quốc đầu tư phát triển tương lai xanh.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "Hạ tầng kỹ thuật nghiên cứu công nghệ cao hiện đại và bảo vệ môi trường xanh"
  },
  {
    id: 18,
    category: "NIÊN GIÁM THỐNG KÊ",
    title: "SỰ TĂNG TRƯỞNG KỲ DIỆU QUA CÁC CON SỐ",
    subtitle: "Chỉ số kinh tế - xã hội bứt phá ấn tượng giai đoạn 2025 - 2026",
    content: "Kết quả thực hiện thí điểm cơ chế đặc thù ghi nhận những kỷ lục tăng trưởng vượt bậc mang tính lịch sử:\n\n• Tốc độ tăng trưởng GRDP đạt 10,3% - thuộc top 5 địa phương phát triển nhanh nhất cả nước.\n• Tổng vốn đầu tư FDI đăng ký mới đạt hơn 1,5 tỷ USD rót trực tiếp vào các dự án công nghệ xanh Vân Phong.\n• Kim ngạch xuất khẩu hải sản và hàng công nghệ cao vượt mốc 2,1 tỷ USD.\n• Ngành du lịch phục hồi kỳ diệu đón tiếp hơn 9,5 triệu lượt khách trong và ngoài nước nghỉ dưỡng sầm uất.\n\nSự đồng lòng đồng hành quyết liệt của chính quyền và người dân củng cố niềm tin vững vàng cho mọi nhà đầu tư.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    imageCaption: "Biểu đồ kinh tế liên tục ghi nhận những mốc kỷ lục tăng trưởng phi thường"
  },
  {
    id: 19,
    category: "BÌA SAU",
    title: "KHÁNH HÒA - KHÁT VỌNG & NIỀM TIN VƯƠN XA",
    subtitle: "Đón chào tương lai cởi mở rộng mở cơ hội phát triển vươn tầm quốc tế",
    content: "Sở Thông tin và Truyền thông tỉnh Khánh Hòa trân trọng gửi lời cảm ơn chân thành sâu sắc nhất tới quý bạn đọc đã đồng hành cùng cuốn kỷ yếu đặc san số hóa đặc biệt này.\n\nChúng tôi luôn cam kết tiên phong ứng dụng công nghệ số hóa dữ liệu minh bạch, cập nhật nhanh chóng chuẩn xác các quy hoạch chính sách vĩ mô hỗ trợ tối đa doanh nghiệp và người dân.\n\nHãy đến với Nha Trang - Khánh Hòa để hòa mình cùng thiên nhiên đại dương hữu tình, khám phá lịch sử di sản nghìn năm và đón đầu những vận hội đầu tư bứt phá vĩ đại!\n\nĐỊA CHỈ TÒA SOẠN: SỐ 01 TRẦN PHÚ, NHA TRANG, KHÁNH HÒA\nEmail: congthongtin@khanhhoa.gov.vn | Điện thoại: (0258) 3822 071",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    badge: "BẢN QUYỀN SỞ THÔNG TIN & TRUYỀN THÔNG KHÁNH HÒA"
  }
];

export default function Flipbook() {
  const [pageIndex, setPageIndex] = useState(0); // 0 to 19
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [direction, setDirection] = useState(0);

  const totalSpreads = Math.ceil(pages.length / 2);

  // Layout calculations:
  // Desktop has side-by-side spreads:
  // Spread 0: Cover (Page 0)
  // Spread 1: Page 1 (Left) & Page 2 (Right)
  // Spread 2: Page 3 (Left) & Page 4 (Right)
  // Spread 3: Page 5 (Left) & Page 6 (Right)
  // Spread 4: Page 7 (Left) & Page 8 (Right)
  // Spread 5: Back Cover (Page 9)
  
  // Convert spread index to pages:
  const getPagesForSpread = (spreadIndex: number): { left: number; right: number } => {
    const leftPage = spreadIndex * 2;
    const rightPage = leftPage + 1;
    return { left: leftPage, right: rightPage };
  };

  const getSpreadIndexForPage = (pIdx: number): number => {
    return Math.floor(pIdx / 2);
  };

  const currentSpread = getSpreadIndexForPage(pageIndex);

  const goToPage = (idx: number) => {
    const targetIdx = Math.max(0, Math.min(pages.length - 1, idx));
    setDirection(targetIdx > pageIndex ? 1 : -1);
    setPageIndex(targetIdx);
  };

  const nextSpread = () => {
    if (currentSpread < totalSpreads - 1) {
      const nextSpreadIdx = currentSpread + 1;
      const targetPage = nextSpreadIdx * 2;
      goToPage(targetPage);
    }
  };

  const prevSpread = () => {
    if (currentSpread > 0) {
      const prevSpreadIdx = currentSpread - 1;
      const targetPage = prevSpreadIdx * 2;
      goToPage(targetPage);
    }
  };

  const downloadFullMagazine = () => {
    const textContent = pages.map((p) => {
      let notesText = "";
      if (p.sideNotes) {
        notesText = "\nMỤC LỤC ẤN PHẨM:\n" + p.sideNotes.map(n => " - " + n).join("\n");
      }
      return `==========================================\n${p.category.toUpperCase()}\n------------------------------------------\n${p.title}\n${p.subtitle || ""}\n==========================================\n\n${p.content}\n${p.quote ? `\nTrích dẫn: "${p.quote}"` : ""}${notesText}\n\n`;
    }).join("\n\n");

    const blob = new Blob([textContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Tap_Chi_Kha_Vong_Khanh_Hoa_2026.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const activeSpreadPages = getPagesForSpread(currentSpread);

  return (
    <div className="w-full flex flex-col items-center gap-6 p-4 md:p-8 bg-slate-900 rounded-[32px] shadow-2xl relative overflow-hidden text-left">
      {/* Background decorations for publication premium look */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 translate-y-1/2"></div>

      {/* Top Header Controls */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-white/10 z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
            <BookOpen size={20} />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight flex items-center gap-2">
              Kỳ San Đặc Biệt <span className="text-lg bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded border border-cyan-400/20 uppercase font-bold tracking-widest">Kỳ San Số</span>
            </h3>
            <p className="text-lg text-slate-400 font-bold uppercase tracking-widest mt-0.5">Sở Thông tin và Truyền thông Khánh Hòa</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={downloadFullMagazine}
            className="flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl text-lg font-bold tracking-tight transition-all active:scale-95"
            title="Tải tệp nội dung đầy đủ"
          >
            <Download size={16} />
            <span>Tải ấn phẩm (TXT)</span>
          </button>

          <button 
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2.5 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white rounded-xl transition-all shadow-lg active:scale-95 flex items-center gap-1.5 text-lg font-bold"
            title="Xem toàn màn hình độ nét cao"
          >
            {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
            <span>{isFullscreen ? "Thu nhỏ" : "Phóng to"}</span>
          </button>
        </div>
      </div>

      {/* Main Magazine Stage */}
      <div className={`w-full flex justify-center items-center py-6 ${isFullscreen ? "fixed inset-0 bg-slate-950 z-50 p-4 md:p-10 flex flex-col justify-between overflow-y-auto" : "relative"}`}>
        
        {isFullscreen && (
          <div className="w-full max-w-7xl flex items-center justify-between pb-4 border-b border-white/10 mb-6 shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 font-black tracking-widest text-lg uppercase">KỲ SAN SỐ HÓA</span>
              <span className="text-slate-400 font-bold text-lg">| KHÁNH HÒA 2026</span>
            </div>
            <button 
              onClick={() => setIsFullscreen(false)}
              className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all"
            >
              <Minimize2 size={20} />
            </button>
          </div>
        )}

        {/* Realistic Book Mockup Wrapper */}
        <div className={`w-full max-w-6xl relative select-none ${isFullscreen ? "my-auto" : ""}`}>
          
          {/* Subtle multiple stacked page layers underneath on Left and Right edges to look like real book thickness */}
          <div className="absolute inset-y-1.5 -left-2 w-full bg-white/20 rounded-l-2xl shadow-xl pointer-events-none transform -skew-y-1 lg:block hidden"></div>
          <div className="absolute inset-y-1 -left-1 w-full bg-white/40 rounded-l-2xl shadow-lg pointer-events-none lg:block hidden"></div>
          <div className="absolute inset-y-1.5 -right-2 w-full bg-white/20 rounded-r-2xl shadow-xl pointer-events-none transform skew-y-1 lg:block hidden"></div>
          <div className="absolute inset-y-1 -right-1 w-full bg-white/40 rounded-r-2xl shadow-lg pointer-events-none lg:block hidden"></div>

          {/* Core double page display */}
          <div className="relative bg-white rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border border-slate-200 overflow-hidden min-h-[800px] md:min-h-[850px] lg:h-[900px] flex flex-col lg:flex-row transform duration-300 w-full">
            
            {/* 3D Central Spine Shadow Divider (Visible only on desktop dual spread) */}
            <div className="absolute inset-y-0 left-1/2 w-8 -ml-4 bg-gradient-to-r from-black/5 via-black/25 to-black/5 z-20 pointer-events-none hidden lg:block" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`spread-${currentSpread}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full flex flex-col lg:flex-row min-h-[800px] md:min-h-[850px] lg:h-full"
              >
                {/* LEFT PAGE */}
                <div className="w-full lg:w-1/2 p-6 md:p-8 flex flex-col justify-between bg-[#FCFAF5] border-r border-slate-100 relative min-h-[800px] lg:h-full shrink-0">
                  {/* Inner left page shadow curvature */}
                  <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/5 to-transparent pointer-events-none" />
                  
                  {/* Fixed Header */}
                  <div className="flex items-center justify-between border-b border-slate-200/60 pb-3 shrink-0">
                    <span className="text-emerald-700 text-sm md:text-base font-black tracking-widest uppercase bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200/50">
                      {pages[activeSpreadPages.left].category}
                    </span>
                    <span className="text-sm md:text-base text-slate-400 font-bold uppercase tracking-wider">KỲ SAN KHÁNH HÒA</span>
                  </div>

                  {/* Scrollable Body Content */}
                  <div className="flex-1 overflow-y-auto min-h-0 py-4 pr-1 space-y-4 custom-scrollbar-light select-text">
                    <h2 className="text-xl md:text-2xl font-black text-emerald-900 tracking-tight leading-tight uppercase">
                      {pages[activeSpreadPages.left].title}
                    </h2>
                    {pages[activeSpreadPages.left].subtitle && (
                      <p className="text-sm md:text-base font-bold text-slate-500 italic leading-normal">
                        {pages[activeSpreadPages.left].subtitle}
                      </p>
                    )}

                    <div className="space-y-4">
                      {pages[activeSpreadPages.left].image && (
                        <div className="relative aspect-video rounded-lg overflow-hidden shadow-sm border border-slate-200">
                          <img 
                            src={pages[activeSpreadPages.left].image} 
                            alt={pages[activeSpreadPages.left].title} 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                          {pages[activeSpreadPages.left].imageCaption && (
                            <span className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-sm md:text-base px-2.5 py-1 rounded uppercase font-black tracking-wider">
                              {pages[activeSpreadPages.left].imageCaption}
                            </span>
                          )}
                        </div>
                      )}

                      <div className="text-slate-700 text-sm md:text-base leading-relaxed font-semibold text-justify whitespace-pre-line first-letter:text-3xl first-letter:font-black first-letter:text-emerald-600 first-letter:mr-2 first-letter:float-left">
                        {pages[activeSpreadPages.left].content}
                      </div>
                    </div>

                    {/* Editorial quote inside scrollable body */}
                    {pages[activeSpreadPages.left].quote && (
                      <div className="border-l-3 border-emerald-500 pl-3 py-1.5 italic text-emerald-950 font-extrabold text-sm md:text-base bg-emerald-500/5 rounded-r-lg">
                        "{pages[activeSpreadPages.left].quote}"
                        {pages[activeSpreadPages.left].quoteAuthor && (
                          <span className="block text-sm md:text-base font-black text-slate-500 not-italic mt-0.5">
                            — {pages[activeSpreadPages.left].quoteAuthor}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Fixed Footer */}
                  <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-sm md:text-base text-slate-400 font-black uppercase tracking-wider shrink-0">
                    <span>Ấn phẩm 2026</span>
                    <span>Trang {activeSpreadPages.left} / {pages.length - 1}</span>
                  </div>
                </div>

                {/* RIGHT PAGE */}
                <div className="w-full lg:w-1/2 p-6 md:p-8 flex flex-col justify-between bg-[#FAF8F3] relative min-h-[800px] lg:h-full shrink-0">
                  {/* Inner right page shadow curvature */}
                  <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black/5 to-transparent pointer-events-none" />

                  {/* Fixed Header */}
                  <div className="flex items-center justify-between border-b border-slate-200/60 pb-3 shrink-0">
                    <span className="text-sm md:text-base text-slate-400 font-bold uppercase tracking-wider">KỲ SAN KHÁNH HÒA</span>
                    <span className="text-cyan-700 text-sm md:text-base font-black tracking-widest uppercase bg-cyan-50 px-2.5 py-1 rounded border border-cyan-200/50">
                      {pages[activeSpreadPages.right].category}
                    </span>
                  </div>

                  {/* Scrollable Body Content */}
                  <div className="flex-1 overflow-y-auto min-h-0 py-4 pr-1 space-y-4 custom-scrollbar-light select-text">
                    <h2 className="text-xl md:text-2xl font-black text-cyan-900 tracking-tight leading-tight uppercase">
                      {pages[activeSpreadPages.right].title}
                    </h2>
                    {pages[activeSpreadPages.right].subtitle && (
                      <p className="text-sm md:text-base font-bold text-slate-500 italic leading-normal">
                        {pages[activeSpreadPages.right].subtitle}
                      </p>
                    )}

                    {/* Cover specific Table of Contents interactive menu (If Right Page is Page 1) */}
                    {activeSpreadPages.right === 1 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <p className="text-slate-700 text-sm md:text-base leading-relaxed font-semibold text-justify whitespace-pre-line">
                            {pages[activeSpreadPages.right].content}
                          </p>
                          {pages[activeSpreadPages.right].author && (
                            <p className="text-sm md:text-base font-black text-cyan-700 text-right">
                              — {pages[activeSpreadPages.right].author}
                            </p>
                          )}
                        </div>
                        
                        <div className="bg-[#E0F2FE]/40 border border-cyan-800/10 rounded-xl p-3 shadow-sm shrink-0">
                          <h4 className="text-sm md:text-base font-black text-cyan-900 tracking-widest uppercase border-b border-cyan-800/10 pb-1.5 mb-2 flex items-center gap-1">
                            <Bookmark size={12} className="text-cyan-700" />
                            <span>Mục lục nhanh</span>
                          </h4>
                          <div className="space-y-1.5">
                            {pages[activeSpreadPages.right].sideNotes?.map((note, i) => {
                              const targetIdx = i + 2; // Jump target page index
                              return (
                                <button
                                  key={i}
                                  onClick={() => goToPage(targetIdx)}
                                  className="w-full text-left text-sm md:text-base font-bold text-slate-700 hover:text-cyan-600 transition-colors py-1 px-1.5 hover:bg-cyan-50 rounded flex items-start gap-1 cursor-pointer leading-tight"
                                >
                                  <span className="text-cyan-500 font-extrabold shrink-0">•</span>
                                  <span>{note}</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Regular inside pages format
                      <div className="space-y-4">
                        {pages[activeSpreadPages.right].image && (
                          <div className="relative aspect-video rounded-lg overflow-hidden shadow-sm border border-slate-200">
                            <img 
                              src={pages[activeSpreadPages.right].image} 
                              alt={pages[activeSpreadPages.right].title} 
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            {pages[activeSpreadPages.right].imageCaption && (
                              <span className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-sm md:text-base px-2.5 py-1 rounded uppercase font-black tracking-wider">
                                {pages[activeSpreadPages.right].imageCaption}
                              </span>
                            )}
                          </div>
                        )}

                        <div className="text-slate-700 text-sm md:text-base leading-relaxed font-semibold text-justify whitespace-pre-line first-letter:text-3xl first-letter:font-black first-letter:text-cyan-600 first-letter:mr-2 first-letter:float-left">
                          {pages[activeSpreadPages.right].content}
                        </div>
                      </div>
                    )}

                    {pages[activeSpreadPages.right].quote && (
                      <div className="border-l-3 border-cyan-500 pl-3 py-1.5 italic text-cyan-950 font-extrabold text-sm md:text-base bg-cyan-500/5 rounded-r-lg">
                        "{pages[activeSpreadPages.right].quote}"
                      </div>
                    )}
                  </div>

                  {/* Fixed Footer */}
                  <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-sm md:text-base text-slate-400 font-black uppercase tracking-wider shrink-0">
                    <span>Trang {activeSpreadPages.right} / {pages.length - 1}</span>
                    <span>Chuyên Đề Đặc Biệt</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Quick jump slider / Thumbnails progress bar overlay on absolute bottom edge */}
          <div className="absolute -bottom-14 left-0 right-0 flex items-center justify-between px-6 py-2 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 text-white shadow-xl">
            <div className="flex items-center gap-3">
              <span className="text-lg text-slate-400 font-black uppercase">Ấn phẩm:</span>
              <span className="text-lg font-black text-cyan-400">
                {currentSpread === 0 ? "Bìa Trước & Lời Ngỏ" : currentSpread === totalSpreads - 1 ? "Niên giám & Bìa Sau" : `Trang ${activeSpreadPages.left} — ${activeSpreadPages.right}`}
              </span>
            </div>

            {/* Pagination controls inside */}
            <div className="flex items-center gap-4">
              <button
                onClick={prevSpread}
                disabled={currentSpread === 0}
                className="p-2 hover:bg-white/15 text-white disabled:opacity-30 rounded-full transition-all cursor-pointer"
                title="Lật về trước"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex gap-1.5 flex-wrap justify-center max-w-[240px] sm:max-w-none">
                {Array.from({ length: totalSpreads }).map((_, spreadIdx) => {
                  const isActive = currentSpread === spreadIdx;
                  return (
                    <button
                      key={spreadIdx}
                      onClick={() => {
                        goToPage(spreadIdx * 2);
                      }}
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${isActive ? "w-6 bg-gradient-to-r from-emerald-400 to-cyan-400" : "w-2.5 bg-white/20 hover:bg-white/40"}`}
                      title={`Spread ${spreadIdx + 1}`}
                    />
                  );
                })}
              </div>

              <button
                onClick={nextSpread}
                disabled={currentSpread === totalSpreads - 1}
                className="p-2 hover:bg-white/15 text-white disabled:opacity-30 rounded-full transition-all cursor-pointer"
                title="Lật tiếp theo"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-lg text-slate-400 font-black">QUY MÔ THẬT</span>
              <span className="text-lg font-black bg-white/10 text-white px-2 py-0.5 rounded border border-white/5 uppercase">A4 Premium</span>
            </div>
          </div>
        </div>
      </div>

      {/* Table of Contents / Navigation Assist Grid (Under Book) */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-3 pt-12 pb-2 border-t border-white/10 mt-10">
        {[
          {
            category: "Bìa & Lời ngỏ",
            pagesLabel: "Bìa — 1",
            title: "Khánh Hòa kỷ nguyên mới & Lời ngỏ"
          },
          {
            category: "1. Tổng quan về Khánh Hòa",
            pagesLabel: "T 2 — 3",
            title: "Vị thế chiến lược & Đô thị hạt nhân"
          },
          {
            category: "2. Điều kiện tự nhiên",
            pagesLabel: "T 4 — 5",
            title: "Địa thế ôm đại dương & Khí hậu ôn hòa"
          },
          {
            category: "3. Tài nguyên thiên nhiên",
            pagesLabel: "T 6 — 7",
            title: "Lâm sản trầm hương & Yến sào đảo khơi"
          },
          {
            category: "3. Tài nguyên & 4. Lịch sử",
            pagesLabel: "T 8 — 9",
            title: "Kinh tế biển xanh & Lịch sử ngàn năm"
          },
          {
            category: "4. Lịch sử hình thành",
            pagesLabel: "T 10 — 11",
            title: "Di tích Tháp Bà & Lễ hội văn hóa"
          },
          {
            category: "5. Cơ sở hạ tầng",
            pagesLabel: "T 12 — 13",
            title: "Siêu cảng Vân Phong & Resort Cam Ranh"
          },
          {
            category: "5. Cơ sở hạ tầng",
            pagesLabel: "T 14 — 15",
            title: "Hạ tầng số IOC & Y tế Giáo dục"
          },
          {
            category: "6. Chính sách đặc thù",
            pagesLabel: "T 16 — 17",
            title: "Nghị quyết số 55 & Công nghệ cao"
          },
          {
            category: "Niên giám & Bìa sau",
            pagesLabel: "T 18 — Sau",
            title: "Số liệu bứt phá & Khát vọng vươn xa"
          }
        ].map((s, spreadIdx) => {
          const isActive = currentSpread === spreadIdx;
          
          return (
            <button
              key={spreadIdx}
              onClick={() => goToPage(spreadIdx * 2)}
              className={`p-3 rounded-xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[5.5rem] ${
                isActive 
                ? "bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 border-emerald-500 text-white scale-[1.03] shadow-md shadow-emerald-500/10" 
                : "bg-white/5 border-white/5 text-slate-300 hover:bg-white/10 hover:border-white/15"
              }`}
            >
              <div className="flex items-center justify-between w-full gap-1">
                <span className="text-sm md:text-base font-bold tracking-wider text-white line-clamp-1">
                  {s.category}
                </span>
                <span className="text-sm md:text-base font-bold text-cyan-400 whitespace-nowrap">
                  {s.pagesLabel}
                </span>
              </div>
              <h5 className="text-xs md:text-sm font-medium line-clamp-2 text-white/80 leading-snug mt-1">
                {s.title}
              </h5>
            </button>
          );
        })}
      </div>

      {/* Decorative footer tag */}
      <div className="w-full text-center text-lg font-black tracking-widest text-slate-500 uppercase pt-4 flex items-center justify-center gap-1.5">
        <Sparkles size={12} className="text-emerald-400 animate-pulse" />
        <span>ẤN PHẨM SỐ HÓA KỲ SAN TUYÊN TRUYỀN CHÍNH THỨC TỈNH KHÁNH HÒA © 2026</span>
      </div>
    </div>
  );
}
