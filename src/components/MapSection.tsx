import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Search, Map, Plus, Minus, Maximize2, ChevronRight, Info, X, 
  Building2, Users, Layers, Globe, Landmark, MapPin, Award, Check
} from "lucide-react";
const khanhHoaMap = "/ban-do-hanh-chinh-tinh-khanh-hoa-kho-lon.jpg";

// Interfaces
interface Commune {
  name: string;
  type: "Xã" | "Phường" | "Thị trấn";
  population: string;
  area: string;
  headquarters: string;
  leaders?: string[];
}

interface District {
  id: string;
  name: string;
  type: "Thành phố" | "Thị xã" | "Huyện";
  center: string;
  area: string;
  population: string;
  communesCount: string;
  leaders: {
    partySecretary: string; // Bí thư
    chairman: string; // Chủ tịch
    viceChairmen: string[]; // Các Phó Chủ tịch
  };
  // Percentage coordinates on the Mapkhanhhoa.png canvas
  topPercent: number;
  leftPercent: number;
  // SVG coordinates for responsive simplified map representation
  svgPath?: string;
  svgCx?: number;
  svgCy?: number;
  svgColor?: string;
  communes: Commune[];
}

// 9 Districts Data of Khanh Hoa Province
const KHANH_HOA_DISTRICTS: District[] = [
  {
    id: "van-ninh",
    name: "Huyện Vạn Ninh",
    type: "Huyện",
    center: "Thị trấn Vạn Giã",
    area: "562 km²",
    population: "134,820 người",
    communesCount: "13 đơn vị (1 TT, 12 xã)",
    leaders: {
      partySecretary: "Võ Hoàn Hải",
      chairman: "Đàm Ngọc Quang",
      viceChairmen: ["Nguyễn Thanh Sơn", "Lê Hồng Phương"]
    },
    topPercent: 18,
    leftPercent: 55,
    svgPath: "M 200,30 L 250,20 L 290,40 L 350,60 L 310,80 L 280,70 L 240,80 L 200,50 Z",
    svgCx: 260,
    svgCy: 50,
    svgColor: "#e0f2fe",
    communes: [
      { name: "Thị trấn Vạn Giã", type: "Thị trấn", population: "32,150", area: "10.2 km²", headquarters: "Đường Hùng Vương, Vạn Giã" },
      { name: "Xã Vạn Thắng", type: "Xã", population: "19,800", area: "28.3 km²", headquarters: "Thôn Quảng Hội, Vạn Thắng" },
      { name: "Xã Đại Lãnh", type: "Xã", population: "14,830", area: "18.4 km²", headquarters: "Thôn Tây Nam, Đại Lãnh" },
      { name: "Xã Vạn Thạnh", type: "Xã", population: "7,420", area: "115.3 km²", headquarters: "Thôn Đầm Môn, Vạn Thạnh" },
      { name: "Xã Vạn Thọ", type: "Xã", population: "5,860", area: "24.1 km²", headquarters: "Thôn Tuần Lễ, Vạn Thọ" },
      { name: "Xã Vạn Phước", type: "Xã", population: "11,200", area: "30.5 km²", headquarters: "Thôn Hóc Lớn, Vạn Phước" },
      { name: "Xã Vạn Khánh", type: "Xã", population: "12,410", area: "28.7 km²", headquarters: "Thôn Hội Khánh, Vạn Khánh" },
      { name: "Xã Vạn Long", type: "Xã", population: "9,850", area: "15.2 km²", headquarters: "Thôn Nhơn Thọ, Vạn Long" },
      { name: "Xã Vạn Bình", type: "Xã", population: "13,670", area: "22.4 km²", headquarters: "Thôn Bình Trung, Vạn Bình" },
      { name: "Xã Vạn Phú", type: "Xã", population: "15,900", area: "38.1 km²", headquarters: "Thôn Phú Cang, Vạn Phú" },
      { name: "Xã Vạn Lương", type: "Xã", population: "18,240", area: "26.8 km²", headquarters: "Thôn Hiền Lương, Vạn Lương" },
      { name: "Xã Vạn Hưng", type: "Xã", population: "14,500", area: "45.2 km²", headquarters: "Thôn Xuân Đông, Vạn Hưng" }
    ]
  },
  {
    id: "ninh-hoa",
    name: "Thị xã Ninh Hòa",
    type: "Thị xã",
    center: "Phường Ninh Hiệp",
    area: "1,197 km²",
    population: "231,160 người",
    communesCount: "27 đơn vị (7 phường, 20 xã)",
    leaders: {
      partySecretary: "Tống Trân",
      chairman: "Nguyễn Thị Hồng Hải",
      viceChairmen: ["Lê Minh Tâm", "Lê Thanh Hùng"]
    },
    topPercent: 33,
    leftPercent: 44,
    svgPath: "M 130,120 L 200,50 L 240,80 L 280,70 L 310,80 L 320,110 L 290,140 L 240,150 L 190,150 L 160,150 Z",
    svgCx: 220,
    svgCy: 110,
    svgColor: "#f0fdf4",
    communes: [
      { name: "Phường Ninh Hiệp", type: "Phường", population: "24,850", area: "5.8 km²", headquarters: "Số 162 Nguyễn Huệ, Ninh Hiệp" },
      { name: "Phường Ninh Giang", type: "Phường", population: "12,400", area: "6.3 km²", headquarters: "Đường Trần Quý Cáp, Ninh Giang" },
      { name: "Phường Ninh Hà", type: "Phường", population: "9,750", area: "7.1 km²", headquarters: "Thôn Hà Thanh, Ninh Hà" },
      { name: "Phường Ninh Đa", type: "Phường", population: "16,200", area: "13.4 km²", headquarters: "Quốc lộ 1A, Ninh Đa" },
      { name: "Phường Ninh Diêm", type: "Phường", population: "11,800", area: "9.2 km²", headquarters: "Thôn Phú Thọ, Ninh Diêm" },
      { name: "Phường Ninh Thủy", type: "Phường", population: "13,100", area: "10.5 km²", headquarters: "Thôn Mỹ Á, Ninh Thủy" },
      { name: "Phường Ninh Hải", type: "Phường", population: "8,950", area: "8.1 km²", headquarters: "Thôn Đông Cát, Ninh Hải" },
      { name: "Xã Ninh Vân", type: "Xã", population: "5,200", area: "34.2 km²", headquarters: "Thôn Tây, Ninh Vân" },
      { name: "Xã Ninh Ích", type: "Xã", population: "9,600", area: "48.5 km²", headquarters: "Thôn Tân Đảo, Ninh Ích" },
      { name: "Xã Ninh Lộc", type: "Xã", population: "8,450", area: "24.6 km²", headquarters: "Thôn Tam Ích, Ninh Lộc" },
      { name: "Xã Ninh Tây", type: "Xã", population: "7,800", area: "120.4 km²", headquarters: "Thôn Buôn Sim, Ninh Tây" },
      { name: "Xã Ninh An", type: "Xã", population: "11,500", area: "31.2 km²", headquarters: "Thôn Hòa Trung, Ninh An" },
      { name: "Xã Ninh Thọ", type: "Xã", population: "10,250", area: "27.5 km²", headquarters: "Thôn Lạc An, Ninh Thọ" }
    ]
  },
  {
    id: "khanh-vinh",
    name: "Huyện Khánh Vĩnh",
    type: "Huyện",
    center: "Thị trấn Khánh Vĩnh",
    area: "1,162 km²",
    population: "41,230 người",
    communesCount: "14 đơn vị (1 TT, 13 xã)",
    leaders: {
      partySecretary: "Phan Minh Hải",
      chairman: "Văn Ngọc Hường",
      viceChairmen: ["Cao Cường", "Nguyễn Văn Thuận"]
    },
    topPercent: 49,
    leftPercent: 23,
    svgPath: "M 60,130 L 130,120 L 160,150 L 150,210 L 110,240 L 70,230 L 50,180 Z",
    svgCx: 100,
    svgCy: 170,
    svgColor: "#fef9c3",
    communes: [
      { name: "Thị trấn Khánh Vĩnh", type: "Thị trấn", population: "6,450", area: "4.5 km²", headquarters: "Đường 2/8, TT. Khánh Vĩnh" },
      { name: "Xã Khánh Thượng", type: "Xã", population: "4,100", area: "185.3 km²", headquarters: "Thôn Hòn Dù, Khánh Thượng" },
      { name: "Xã Khánh Trung", type: "Xã", population: "3,850", area: "142.1 km²", headquarters: "Thôn Bắc Sông Giang, Khánh Trung" },
      { name: "Xã Khánh Đông", type: "Xã", population: "4,950", area: "65.4 km²", headquarters: "Thôn Suối Sâu, Khánh Đông" },
      { name: "Xã Khánh Nam", type: "Xã", population: "2,600", area: "52.8 km²", headquarters: "Thôn hòn Lay, Khánh Nam" },
      { name: "Xã Khánh Bình", type: "Xã", population: "3,900", area: "88.6 km²", headquarters: "Thôn Bến Khế, Khánh Bình" },
      { name: "Xã Liên Sang", type: "Xã", population: "2,450", area: "62.4 km²", headquarters: "Thôn Bầu Sang, Liên Sang" },
      { name: "Xã Cầu Bà", type: "Xã", population: "3,150", area: "45.2 km²", headquarters: "Thôn Cầu Bà, Cầu Bà" }
    ]
  },
  {
    id: "dien-khanh",
    name: "Huyện Diên Khánh",
    type: "Huyện",
    center: "Thị trấn Diên Khánh",
    area: "337 km²",
    population: "142,750 người",
    communesCount: "18 đơn vị (1 TT, 17 xã)",
    leaders: {
      partySecretary: "Đinh Văn Thiệu",
      chairman: "Nguyễn Văn Gẩm",
      viceChairmen: ["Nguyễn Tấn Cường", "Phan Văn Tùng"]
    },
    topPercent: 54,
    leftPercent: 39,
    svgPath: "M 150,210 L 190,150 L 220,150 L 230,210 L 180,220 L 160,220 Z",
    svgCx: 190,
    svgCy: 190,
    svgColor: "#fae8ff",
    communes: [
      { name: "Thị trấn Diên Khánh", type: "Thị trấn", population: "24,500", area: "4.1 km²", headquarters: "Số 10 Lý Tự Trọng, TT. Diên Khánh" },
      { name: "Xã Diên An", type: "Xã", population: "14,200", area: "8.6 km²", headquarters: "Thôn Phú Ân Nam, Diên An" },
      { name: "Xã Diên Phú", type: "Xã", population: "11,850", area: "9.2 km²", headquarters: "Thôn Phú Thạnh, Diên Phú" },
      { name: "Xã Diên Thạnh", type: "Xã", population: "8,950", area: "5.4 km²", headquarters: "Thôn Trường Thạnh, Diên Thạnh" },
      { name: "Xã Diên Lạc", type: "Xã", population: "9,400", area: "6.8 km²", headquarters: "Thôn Trường Lạc, Diên Lạc" },
      { name: "Xã Diên Toàn", type: "Xã", population: "7,850", area: "5.1 km²", headquarters: "Thôn Đông Diên Toàn, Diên Toàn" },
      { name: "Xã Diên Sơn", type: "Xã", population: "12,600", area: "12.3 km²", headquarters: "Thôn Tây, Diên Sơn" },
      { name: "Xã Diên Điền", type: "Xã", population: "13,200", area: "14.8 km²", headquarters: "Thôn Đại Điền, Diên Điền" }
    ]
  },
  {
    id: "nha-trang",
    name: "Thành phố Nha Trang",
    type: "Thành phố",
    center: "Phường Lộc Thọ",
    area: "251 km²",
    population: "422,100 người",
    communesCount: "22 đơn vị (14 phường, 8 xã)",
    leaders: {
      partySecretary: "Hồ Văn Mừng",
      chairman: "Nguyễn Sỹ Khánh",
      viceChairmen: ["Lưu Thành Nhân", "Phan Thanh Liêm"]
    },
    topPercent: 53,
    leftPercent: 61,
    svgPath: "M 220,150 L 240,150 L 290,140 L 300,180 L 280,210 L 250,210 L 230,210 Z",
    svgCx: 265,
    svgCy: 180,
    svgColor: "#ffedd5",
    communes: [
      { name: "Phường Lộc Thọ", type: "Phường", population: "18,450", area: "1.3 km²", headquarters: "Số 46 Trần Phú, Lộc Thọ" },
      { name: "Phường Tân Lập", type: "Phường", population: "14,900", area: "0.8 km²", headquarters: "Đường Ngô Gia Tự, Tân Lập" },
      { name: "Phường Vĩnh Nguyên", type: "Phường", population: "28,600", area: "42.5 km²", headquarters: "Đường Trần Phú, Vĩnh Nguyên" },
      { name: "Phường Phước Long", type: "Phường", population: "32,400", area: "4.2 km²", headquarters: "Đường Võ Thị Sáu, Phước Long" },
      { name: "Phường Vĩnh Hải", type: "Phường", population: "26,100", area: "2.5 km²", headquarters: "Đường 2/4, Vĩnh Hải" },
      { name: "Phường Vĩnh Phước", type: "Phường", population: "29,400", area: "1.8 km²", headquarters: "Đường 2/4, Vĩnh Phước" },
      { name: "Xã Vĩnh Hiệp", type: "Xã", population: "12,150", area: "6.5 km²", headquarters: "Thôn Vĩnh Điềm Trung, Vĩnh Hiệp" },
      { name: "Xã Phước Đồng", type: "Xã", population: "35,420", area: "46.3 km²", headquarters: "Thôn Phước Hạ, Phước Đồng" },
      { name: "Xã Vĩnh Ngọc", type: "Xã", population: "18,650", area: "8.2 km²", headquarters: "Thôn Ngọc Hội, Vĩnh Ngọc" }
    ]
  },
  {
    id: "cam-lam",
    name: "Huyện Cam Lâm",
    type: "Huyện",
    center: "Thị trấn Cam Đức",
    area: "547 km²",
    population: "110,650 người",
    communesCount: "14 đơn vị (1 TT, 13 xã)",
    leaders: {
      partySecretary: "Nguyễn Trọng Trung",
      chairman: "Ngô Văn Bảo",
      viceChairmen: ["Mai Như Chiêm", "Huỳnh Uy Viễn"]
    },
    topPercent: 66,
    leftPercent: 44,
    svgPath: "M 150,210 L 160,220 L 180,220 L 230,210 L 250,210 L 280,210 L 260,270 L 200,270 L 160,240 Z",
    svgCx: 210,
    svgCy: 240,
    svgColor: "#ecfeff",
    communes: [
      { name: "Thị trấn Cam Đức", type: "Thị trấn", population: "19,850", area: "15.8 km²", headquarters: "Đại lộ Hùng Vương, Cam Đức" },
      { name: "Xã Cam Hải Tây", type: "Xã", population: "9,600", area: "12.4 km²", headquarters: "Thôn Bắc Vĩnh, Cam Hải Tây" },
      { name: "Xã Cam Hải Đông", type: "Xã", population: "6,400", area: "38.5 km²", headquarters: "Bãi Dài, Cam Hải Đông" },
      { name: "Xã Cam Thành Bắc", type: "Xã", population: "17,300", area: "22.1 km²", headquarters: "Thôn Tân Thành, Cam Thành Bắc" },
      { name: "Xã Cam An Bắc", type: "Xã", population: "7,850", area: "24.5 km²", headquarters: "Thôn Tân An, Cam An Bắc" },
      { name: "Xã Cam An Nam", type: "Xã", population: "6,900", area: "18.2 km²", headquarters: "Thôn Vinh Nam, Cam An Nam" },
      { name: "Xã Cam Hiệp Bắc", type: "Xã", population: "5,400", area: "14.6 km²", headquarters: "Thôn Trung Hiệp, Cam Hiệp Bắc" },
      { name: "Xã Sơn Tân", type: "Xã", population: "3,200", area: "112.5 km²", headquarters: "Thôn Sơn Hiệp, Sơn Tân" }
    ]
  },
  {
    id: "khanh-son",
    name: "Huyện Khánh Sơn",
    type: "Huyện",
    center: "Thị trấn Tô Hạp",
    area: "338 km²",
    population: "27,390 người",
    communesCount: "8 đơn vị (1 TT, 7 xã)",
    leaders: {
      partySecretary: "Mấu Thái Cư",
      chairman: "Nguyễn Văn Nhuận",
      viceChairmen: ["Đinh Ngọc Bình", "Cao Minh Vỹ"]
    },
    topPercent: 74,
    leftPercent: 26,
    svgPath: "M 70,230 L 110,240 L 160,240 L 150,300 L 90,300 L 70,270 Z",
    svgCx: 110,
    svgCy: 270,
    svgColor: "#f3e8ff",
    communes: [
      { name: "Thị trấn Tô Hạp", type: "Thị trấn", population: "5,800", area: "16.1 km²", headquarters: "Đường Lê Duẩn, Tô Hạp" },
      { name: "Xã Sơn Bình", type: "Xã", population: "3,950", area: "48.2 km²", headquarters: "Thôn Chi Chay, Sơn Bình" },
      { name: "Xã Sơn Hiệp", type: "Xã", population: "3,200", area: "35.4 km²", headquarters: "Thôn Hòn Dung, Sơn Hiệp" },
      { name: "Xã Sơn Lâm", type: "Xã", population: "2,850", area: "52.3 km²", headquarters: "Thôn Lâm Thành, Sơn Lâm" },
      { name: "Xã Ba Cụm Bắc", type: "Xã", population: "3,400", area: "68.2 km²", headquarters: "Thôn Dốc Trầu, Ba Cụm Bắc" },
      { name: "Xã Ba Cụm Nam", type: "Xã", population: "2,100", area: "75.4 km²", headquarters: "Thôn Hòn Gầm, Ba Cụm Nam" }
    ]
  },
  {
    id: "cam-ranh",
    name: "Thành phố Cam Ranh",
    type: "Thành phố",
    center: "Phường Ba Ngòi",
    area: "327 km²",
    population: "138,510 người",
    communesCount: "15 đơn vị (9 phường, 6 xã)",
    leaders: {
      partySecretary: "Lữ Thanh Hải",
      chairman: "Lê Ngọc Thạch",
      viceChairmen: ["Nguyễn Ngọc Sơn", "Trần Anh Tuấn"]
    },
    topPercent: 82,
    leftPercent: 41,
    svgPath: "M 160,240 L 200,270 L 260,270 L 270,330 L 210,340 L 150,300 Z",
    svgCx: 210,
    svgCy: 310,
    svgColor: "#fef2f2",
    communes: [
      { name: "Phường Ba Ngòi", type: "Phường", population: "19,850", area: "7.2 km²", headquarters: "Số 02 Phạm Văn Đồng, Ba Ngòi" },
      { name: "Phường Cam Lộc", type: "Phường", population: "12,400", area: "3.5 km²", headquarters: "Đường Nguyễn Thái Học, Cam Lộc" },
      { name: "Phường Cam Linh", type: "Phường", population: "11,200", area: "2.1 km²", headquarters: "Đường 22/8, Cam Linh" },
      { name: "Phường Cam Lợi", type: "Phường", population: "9,600", area: "1.8 km²", headquarters: "Phố Cam Lợi, Cam Lợi" },
      { name: "Phường Cam Nghĩa", type: "Phường", population: "22,450", area: "105.3 km²", headquarters: "Đường Nguyễn Chí Thanh, Cam Nghĩa" },
      { name: "Phường Cam Phú", type: "Phường", population: "14,100", area: "4.8 km²", headquarters: "Đường Nguyễn Tất Thành, Cam Phú" },
      { name: "Phường Cam Thuận", type: "Phường", population: "15,200", area: "3.2 km²", headquarters: "Đại lộ Hùng Vương, Cam Thuận" }
    ]
  },
  {
    id: "truong-sa",
    name: "Huyện Trường Sa",
    type: "Huyện",
    center: "Thị trấn Trường Sa",
    area: "Khắp Vùng Biển",
    population: "Đặc thù chủ quyền",
    communesCount: "3 đơn vị (1 TT, 2 xã)",
    leaders: {
      partySecretary: "Lê Đình Hải",
      chairman: "Trần Văn Trực",
      viceChairmen: ["Sỹ Phùng", "Nguyễn Minh Vũ"]
    },
    topPercent: 82,
    leftPercent: 78,
    svgPath: "M 280,270 L 390,270 L 390,380 L 280,380 Z",
    svgCx: 335,
    svgCy: 325,
    svgColor: "#f8fafc",
    communes: [
      { name: "Thị trấn Trường Sa", type: "Thị trấn", population: "Quân dân trú đóng", area: "Đảo Trường Sa Lớn", headquarters: "Đảo Trường Sa, Huyện Trường Sa" },
      { name: "Xã Song Tử Tây", type: "Xã", population: "Quân dân trú đóng", area: "Đảo Song Tử Tây", headquarters: "Đảo Song Tử Tây, Trường Sa" },
      { name: "Xã Sinh Tồn", type: "Xã", population: "Quân dân trú đóng", area: "Đảo Sinh Tồn", headquarters: "Đảo Sinh Tồn, Trường Sa" }
    ]
  }
];

interface MapSectionProps {
  mapFitMode?: 'contain' | 'cover';
}

export default function MapSection() {
  const [mapFitMode, setMapFitMode] = useState<'contain' | 'cover'>('contain');
  // Navigation states
  const [activeMapMode, setActiveMapMode] = useState<'svg' | 'image'>('image');
  const [selectedDistrict, setSelectedDistrict] = useState<District | null>(null);
  const [hoveredDistrict, setHoveredDistrict] = useState<District | null>(null);
  const [isLargeModalOpen, setIsLargeModalOpen] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCommune, setSelectedCommune] = useState<Commune | null>(null);

  // Filtered communes for current or global list
  const filteredCommunes = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase().trim();
    const result: { commune: Commune; district: District }[] = [];
    
    KHANH_HOA_DISTRICTS.forEach(district => {
      district.communes.forEach(commune => {
        if (commune.name.toLowerCase().includes(query)) {
          result.push({ commune, district });
        }
      });
    });
    return result;
  }, [searchQuery]);

  const handleDistrictClick = (district: District) => {
    setSelectedDistrict(district);
    setSelectedCommune(null);
  };

  const handleSelectCommuneFromSearch = (commune: Commune, district: District) => {
    setSelectedDistrict(district);
    setSelectedCommune(commune);
    setSearchQuery("");
  };

  return (
    <div className="col-span-4 h-full flex flex-col gap-4 bg-white rounded-3xl border border-slate-200 shadow-sm p-4">
      {/* Integrated Map Fit Mode Controller & Title */}
      <div className="flex flex-col items-start gap-3 w-full pl-1">
        <span className="text-base md:text-lg font-black text-black uppercase tracking-tight shrink-0 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-700 animate-pulse"></span>
          Bản đồ hành chính tỉnh
        </span>
        <div className="flex bg-slate-100 p-1 rounded-xl text-[13px] md:text-sm font-bold border border-slate-200 select-none shrink-0 w-full shadow-sm">
          <button 
            type="button"
            onClick={() => setMapFitMode('contain')}
            className={`flex-1 px-2 py-1.5 rounded-lg transition-all duration-200 cursor-pointer text-center ${
              mapFitMode === "contain" 
                ? "bg-white text-red-700 shadow-sm" 
                : "text-slate-600 hover:text-black"
            }`}>
            Bao quát (Tránh cắt lề)
          </button>
          <button 
            type="button"
            onClick={() => setMapFitMode('cover')}
            className={`flex-1 px-2 py-1.5 rounded-lg transition-all duration-200 cursor-pointer text-center ${
              mapFitMode === "cover" 
                ? "bg-white text-red-700 shadow-sm" 
                : "text-slate-600 hover:text-black"
            }`}>
            Cận cảnh
          </button>
        </div>
      </div>

      {/* Mini interactive widget display using modern responsive SVG interactive engine */}
      <div className="relative w-full flex-1 min-h-[500px] bg-[#f8fafc] rounded-2xl overflow-hidden border border-slate-200/80 flex flex-col">
        {/* Header toolbar */}
        <div className="px-4 md:px-5 py-3.5 border-b border-slate-200 bg-white flex flex-row items-center justify-between select-none z-10 text-left gap-2">
          <div className="flex flex-col flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#da1016] animate-pulse shrink-0"></div>
              <span className="text-[13px] md:text-base font-black tracking-wider uppercase text-slate-800 truncate">BẢN ĐỒ KHÁNH HÒA SỐ TƯƠNG TÁC</span>
            </div>
            {/* Smooth toggle tabs for SVG interactive map or high resolution static map */}
            <div className="flex flex-wrap gap-1.5 mt-2">
              <button
                onClick={() => setActiveMapMode('svg')}
                className={`px-2.5 py-1 rounded-lg text-[13px] font-bold tracking-wider transition-all ${
                  activeMapMode === 'svg'
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                }`}
              >
                Sơ đồ tương tác SVG 🗺️
              </button>
              <button
                onClick={() => setActiveMapMode('image')}
                className={`px-2.5 py-1 rounded-lg text-[13px] font-bold tracking-wider transition-all ${
                  activeMapMode === 'image'
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                }`}
              >
                Bản đồ quy hoạch HD 🌐
              </button>
            </div>
          </div>
          <div className="flex gap-1.5 shrink-0 self-start sm:self-center">
            <button
              onClick={() => setIsLargeModalOpen(true)}
              className="p-1.5 md:p-2 rounded-xl bg-slate-50 hover:bg-red-50 text-slate-600 hover:text-[#da1016] border border-slate-200 hover:border-red-200 active:scale-95 transition-all flex items-center gap-1 text-[13px] font-bold shrink-0"
              title="Phóng to toàn diện"
            >
              <Maximize2 size={13} />
              <span className="hidden sm:inline">Toàn màn hình</span>
            </button>
          </div>
        </div>

        {/* Content Box (SVG or Image toggled view) */}
        <div className="flex-1 relative overflow-hidden bg-slate-50 flex flex-col justify-between">
          <div className="flex-1 relative overflow-hidden flex items-center justify-center p-2 bg-[#fdfdfd]">
            {/* Embedded grid overlay for professional design */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

            {activeMapMode === 'svg' ? (
              /* PREMIUM INTERACTIVE SVG MAP ENGINE */
              <div className="w-full h-full flex items-center justify-center p-1">
                <svg viewBox="0 0 400 400" className="w-full h-full max-h-[310px] drop-shadow-md select-none">
                  {/* Grid background inside SVG */}
                  <defs>
                    <pattern id="gridPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="0.8" />
                    </pattern>
                    <linearGradient id="selectedDistrictGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fee2e2" />
                      <stop offset="100%" stopColor="#fca5a5" />
                    </linearGradient>
                    <linearGradient id="truongSaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f8fafc" />
                      <stop offset="100%" stopColor="#f1f5f9" />
                    </linearGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#gridPattern)" rx="16" />

                  {/* 1. Districts path groups */}
                  {KHANH_HOA_DISTRICTS.map((district) => {
                    const isSelected = selectedDistrict?.id === district.id;
                    const isHovered = hoveredDistrict?.id === district.id;
                    if (district.id === 'truong-sa') return null; // Render Trường Sa in custom Inset Map box later

                    return (
                      <path
                        key={district.id}
                        d={district.svgPath}
                        fill={isSelected ? "url(#selectedDistrictGrad)" : (isHovered ? "#fee2e2" : district.svgColor || "#f8fafc")}
                        stroke={isSelected ? "#da1016" : (isHovered ? "#f87171" : "#cbd5e1")}
                        strokeWidth={isSelected ? "2" : "1.2"}
                        strokeLinejoin="round"
                        onClick={() => handleDistrictClick(district)}
                        onMouseEnter={() => setHoveredDistrict(district)}
                        onMouseLeave={() => setHoveredDistrict(null)}
                        className="transition-all duration-300 cursor-pointer hover:brightness-95"
                      />
                    );
                  })}

                  {/* 2. Custom Elegant Inset Map for Truong Sa Huyen Dao to never get covered */}
                  <g transform="translate(265, 265)">
                    {/* Inset container with dashed border */}
                    <rect 
                      x="0" 
                      y="0" 
                      width="125" 
                      height="125" 
                      rx="16" 
                      fill="url(#truongSaGrad)" 
                      stroke={selectedDistrict?.id === 'truong-sa' ? '#da1016' : '#cbd5e1'} 
                      strokeWidth={selectedDistrict?.id === 'truong-sa' ? '2' : '1.2'}
                      strokeDasharray="4,4"
                      onClick={() => handleDistrictClick(KHANH_HOA_DISTRICTS.find(d => d.id === 'truong-sa')!)}
                      onMouseEnter={() => setHoveredDistrict(KHANH_HOA_DISTRICTS.find(d => d.id === 'truong-sa')!)}
                      onMouseLeave={() => setHoveredDistrict(null)}
                      className="cursor-pointer transition-all duration-300"
                    />
                    
                    {/* Inset Label */}
                    <text 
                      x="62" 
                      y="22" 
                      fontSize="8.5" 
                      fontWeight="900" 
                      fill="#da1016" 
                      textAnchor="middle" 
                      className="tracking-wider uppercase select-none pointer-events-none"
                    >
                      H. TRƯỜNG SA
                    </text>
                    <text 
                      x="62" 
                      y="33" 
                      fontSize="7" 
                      fontWeight="700" 
                      fill="#64748b" 
                      textAnchor="middle" 
                      className="select-none pointer-events-none uppercase"
                    >
                      (Quần đảo Trường Sa)
                    </text>

                    {/* Styled islands dots */}
                    <circle cx="35" cy="65" r="2.5" fill="#ef4444" opacity="0.8" />
                    <circle cx="55" cy="55" r="2" fill="#ef4444" opacity="0.8" />
                    <circle cx="85" cy="60" r="3" fill="#ef4444" opacity="0.8" />
                    <circle cx="45" cy="85" r="2" fill="#ef4444" opacity="0.8" />
                    <circle cx="75" cy="90" r="2.5" fill="#ef4444" opacity="0.8" />
                    <circle cx="95" cy="80" r="2" fill="#ef4444" opacity="0.8" />

                    {/* Truong Sa main dynamic hotspot to click */}
                    <g 
                      onClick={() => handleDistrictClick(KHANH_HOA_DISTRICTS.find(d => d.id === 'truong-sa')!)}
                      onMouseEnter={() => setHoveredDistrict(KHANH_HOA_DISTRICTS.find(d => d.id === 'truong-sa')!)}
                      onMouseLeave={() => setHoveredDistrict(null)}
                      className="cursor-pointer"
                    >
                      <circle cx="62" cy="72" r="4.5" fill="#da1016" stroke="#ffffff" strokeWidth="1" />
                    </g>
                  </g>

                  {/* 3. Text labels & Dynamic hotspots for land districts */}
                  {KHANH_HOA_DISTRICTS.map((district) => {
                    const isSelected = selectedDistrict?.id === district.id;
                    const isHovered = hoveredDistrict?.id === district.id;
                    if (district.id === 'truong-sa') return null;

                    const cx = district.svgCx || 0;
                    const cy = district.svgCy || 0;

                    return (
                      <g key={`hotspot-${district.id}`} className="pointer-events-none">
                        {/* Hotspot center dot */}
                        <circle 
                          cx={cx} 
                          cy={cy} 
                          r={isSelected ? "5.5" : "4"} 
                          fill={isSelected ? "#da1016" : (isHovered ? "#da1016" : "#f59e0b")} 
                          stroke="#ffffff" 
                          strokeWidth="1" 
                          className="transition-all duration-300"
                        />

                        {/* Interactive elegant label */}
                        <text
                          x={cx}
                          y={cy - 12}
                          fontSize="8.5"
                          fontWeight={isSelected ? "900" : "700"}
                          fill={isSelected ? "#da1016" : "#334155"}
                          textAnchor="middle"
                          className="select-none"
                        >
                          {district.name.replace("Huyện ", "").replace("Thành phố ", "TP. ").replace("Thị xã ", "TX. ")}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            ) : (
              /* REAL HD PLANNING IMAGE MAP - Co-responsive fitted container to avoid hotspot misalignments */
              <div className="relative h-full max-h-[310px] aspect-[4/5] mx-auto flex items-center justify-center">
                <img 
                  src={khanhHoaMap} 
                  alt="Bản đồ hành chính tỉnh Khánh Hòa" 
                  className="w-full h-full object-contain pointer-events-none"
                />

                {/* Pulsing hotspots overlay mapped to realistic positions */}
                {KHANH_HOA_DISTRICTS.map((district) => {
                  const isSelected = selectedDistrict?.id === district.id;
                  const isHovered = hoveredDistrict?.id === district.id;

                  return (
                    <button
                      key={district.id}
                      onClick={() => handleDistrictClick(district)}
                      onMouseEnter={() => setHoveredDistrict(district)}
                      onMouseLeave={() => setHoveredDistrict(null)}
                      style={{ 
                        top: `${district.topPercent}%`, 
                        left: `${district.leftPercent}%` 
                      }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group transition-all"
                    >
                      {/* Glowing dot */}
                      <span className={`relative flex h-3.5 w-3.5 rounded-full border border-white shadow transition-all duration-300 ${
                        isSelected 
                          ? "bg-[#da1016] scale-125 ring-4 ring-[#da1016]/20" 
                          : isHovered 
                            ? "bg-[#da1016] scale-110" 
                            : "bg-amber-500"
                      }`}></span>

                      {/* Highly polished small tooltip badge */}
                      <span className={`absolute top-5 left-1/2 -translate-x-1/2 bg-slate-900/90 text-white font-extrabold text-base px-2 py-0.5 rounded-md shadow-md whitespace-nowrap transition-all duration-200 border border-white/10 ${
                        isSelected || isHovered
                          ? "opacity-100 scale-100 translate-y-0"
                          : "opacity-0 scale-90 -translate-y-1"
                      }`}>
                        {district.name.replace("Huyện ", "").replace("Thành phố ", "TP. ").replace("Thị xã ", "TX. ")}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

          </div>

          {/* Details strip - Clean, elegant, monochrome and cohesive layout */}
          <div className="h-[185px] bg-white border-t border-slate-200 px-5 py-4 flex flex-col justify-between text-left">
            {selectedDistrict ? (
              <div className="space-y-2.5 flex-1 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <h5 className="text-base font-black text-slate-800 uppercase flex items-center gap-1.5">
                    <Landmark size={14} className="text-[#da1016]" />
                    {selectedDistrict.name}
                  </h5>
                  <button 
                    onClick={() => setSelectedDistrict(null)}
                    className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <X size={14} />
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-2 text-base">
                  <div className="bg-slate-50/50 p-2 rounded-xl border border-slate-200/60">
                    <span className="text-base font-black text-slate-400 uppercase tracking-wide block mb-0.5">Diện tích</span>
                    <span className="font-extrabold text-slate-700">{selectedDistrict.area}</span>
                  </div>
                  <div className="bg-slate-50/50 p-2 rounded-xl border border-slate-200/60">
                    <span className="text-base font-black text-slate-400 uppercase tracking-wide block mb-0.5">Dân số</span>
                    <span className="font-extrabold text-slate-700">{selectedDistrict.population}</span>
                  </div>
                  <div className="bg-slate-50/50 p-2 rounded-xl border border-slate-200/60">
                    <span className="text-base font-black text-slate-400 uppercase tracking-wide block mb-0.5">Trung tâm</span>
                    <span className="font-extrabold text-slate-700 truncate block">{selectedDistrict.center.replace("Thị trấn ", "TT. ").replace("Phường ", "P. ")}</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsLargeModalOpen(true)}
                  className="w-full py-2 bg-[#da1016] hover:bg-[#b80d12] text-white font-black text-base rounded-xl flex items-center justify-center gap-1 select-none active:scale-95 transition-all shadow-sm"
                >
                  <span>Chi tiết danh sách xã, phường & lãnh đạo</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            ) : (
              <div className="h-full flex flex-col justify-center items-center text-center gap-1 select-none py-1">
                <MapPin size={22} className="text-slate-400 stroke-[1.5]" />
                <p className="text-slate-700 font-extrabold text-base">Trình tra cứu địa giới hành chính</p>
                <p className="text-base text-slate-400">Chọn trực tiếp một điểm mốc trên bản đồ tương tác hoặc mở bản đồ lớn để tra cứu đầy đủ.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Button to view high resolution image in new tab */}
      <a 
        href={khanhHoaMap}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center bg-white hover:bg-slate-50 text-slate-700 hover:text-[#da1016] font-bold py-3 px-4 rounded-2xl text-base shadow-sm transition-all border border-slate-200/80 tracking-wider"
      >
        Mở ảnh bản đồ số quy hoạch gốc HD 🌐
      </a>


      {/* =======================================================================
          IMMERSIVE FULL-SCREEN REALISTIC INTERACTIVE MAP ENGINE DASHBOARD MODAL
          ======================================================================= */}
      <AnimatePresence>
        {isLargeModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="w-full max-w-6xl h-[92vh] sm:h-[88vh] bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 flex flex-col md:flex-row relative"
            >
              
              {/* LEFT COLUMN: INTERACTIVE CARTOGRAPHIC WORKSPACE */}
              <div className="flex-1 bg-[#fbfbfc] relative flex flex-col overflow-hidden border-r border-slate-200">
                {/* Modal Header */}
                <div className="p-5 border-b border-slate-200 bg-white flex items-center justify-between select-none z-10 text-left">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 bg-red-50 text-[#da1016] rounded-xl">
                      <Map size={22} className="stroke-[2]" />
                    </div>
                    <div>
                      <h4 className="text-base font-black text-slate-800 uppercase tracking-tight leading-none">
                        BẢN ĐỒ HÀNH CHÍNH SỐ TƯƠNG TÁC KHÁNH HÒA
                      </h4>
                      <p className="text-base font-bold text-slate-500 uppercase tracking-wider mt-1.5">
                        Dựa trên sơ đồ vị trí 9 quận, huyện & 65 xã phường đặc khu hành chính
                      </p>
                    </div>
                  </div>
                  
                  {/* Scale info */}
                  <div className="hidden sm:flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 text-base font-mono font-bold text-slate-600">
                    <span>TỶ LỆ KHÁI QUÁT: 1 : 250,000</span>
                  </div>
                </div>

                {/* Search Box on Map for quick commune lookup */}
                <div className="absolute top-20 left-5 right-5 sm:left-5 sm:right-auto sm:w-80 z-20">
                  <div className="relative shadow-lg rounded-2xl overflow-hidden border border-slate-200 bg-white">
                    <div className="flex items-center px-3.5 py-3">
                      <Search size={16} className="text-slate-400 shrink-0 mr-2" />
                      <input 
                        type="text"
                        placeholder="Tìm kiếm xã, phường, thị trấn (ví dụ: Tú Bông, Cam Đức...)"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-transparent border-0 text-base focus:outline-none font-bold text-slate-800 placeholder-slate-400"
                      />
                      {searchQuery && (
                        <button onClick={() => setSearchQuery("")} className="text-slate-400 hover:text-slate-600">
                          <X size={14} />
                        </button>
                      )}
                    </div>

                    {/* Search Results Dropdown overlay */}
                    {searchQuery.trim() && (
                      <div className="max-h-60 overflow-y-auto border-t border-slate-100 bg-white text-base divide-y divide-slate-50">
                        {filteredCommunes.length > 0 ? (
                          filteredCommunes.map(({ commune, district }) => (
                            <div 
                              key={commune.name}
                              onClick={() => handleSelectCommuneFromSearch(commune, district)}
                              className="px-4 py-3 hover:bg-red-50/50 cursor-pointer flex items-center justify-between transition-colors text-left"
                            >
                              <div>
                                <span className="font-black text-slate-800">{commune.name}</span>
                                <span className="text-base text-slate-400 font-bold block">{district.name}</span>
                              </div>
                              <span className="px-2 py-0.5 rounded bg-slate-100 text-base font-bold text-slate-500 uppercase">
                                {commune.type}
                              </span>
                            </div>
                          ))
                        ) : (
                          <div className="p-4 text-center text-slate-400 font-medium">
                            Không tìm thấy xã, phường nào phù hợp
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Main Interactive Map Area using high quality SVG or HD planning image depending on active toggle mode */}
                <div className="flex-1 relative overflow-hidden flex items-center justify-center p-4 sm:p-8 select-none">
                  {/* Grid background */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

                  <motion.div
                    animate={{ scale: zoomScale }}
                    transition={{ type: "spring", stiffness: 280, damping: 25 }}
                    className="w-full h-full max-h-[480px] aspect-[4/5] sm:aspect-[1/1] relative flex items-center justify-center"
                  >
                    {activeMapMode === 'svg' ? (
                      /* FULL SCREEN PREMIUM INTERACTIVE SVG MAP */
                      <svg viewBox="0 0 400 400" className="w-full h-full max-h-[450px] drop-shadow-xl select-none">
                        <defs>
                          <pattern id="modalGridPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="0.8" />
                          </pattern>
                          <linearGradient id="modalSelectedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#fee2e2" />
                            <stop offset="100%" stopColor="#fca5a5" />
                          </linearGradient>
                          <linearGradient id="modalTruongSaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#f8fafc" />
                            <stop offset="100%" stopColor="#f1f5f9" />
                          </linearGradient>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#modalGridPattern)" rx="24" />

                        {/* 1. Districts path groups */}
                        {KHANH_HOA_DISTRICTS.map((district) => {
                          const isSelected = selectedDistrict?.id === district.id;
                          const isHovered = hoveredDistrict?.id === district.id;
                          if (district.id === 'truong-sa') return null;

                          return (
                            <path
                              key={`modal-svg-${district.id}`}
                              d={district.svgPath}
                              fill={isSelected ? "url(#modalSelectedGrad)" : (isHovered ? "#fee2e2" : district.svgColor || "#f8fafc")}
                              stroke={isSelected ? "#da1016" : (isHovered ? "#f87171" : "#cbd5e1")}
                              strokeWidth={isSelected ? "2.2" : "1.2"}
                              strokeLinejoin="round"
                              onClick={() => handleDistrictClick(district)}
                              onMouseEnter={() => setHoveredDistrict(district)}
                              onMouseLeave={() => setHoveredDistrict(null)}
                              className="transition-all duration-300 cursor-pointer hover:brightness-95"
                            />
                          );
                        })}

                        {/* 2. Truong Sa Inset Map */}
                        <g transform="translate(265, 265)">
                          <rect 
                            x="0" 
                            y="0" 
                            width="125" 
                            height="125" 
                            rx="16" 
                            fill="url(#modalTruongSaGrad)" 
                            stroke={selectedDistrict?.id === 'truong-sa' ? '#da1016' : '#cbd5e1'} 
                            strokeWidth={selectedDistrict?.id === 'truong-sa' ? '2.2' : '1.2'}
                            strokeDasharray="4,4"
                            onClick={() => handleDistrictClick(KHANH_HOA_DISTRICTS.find(d => d.id === 'truong-sa')!)}
                            onMouseEnter={() => setHoveredDistrict(KHANH_HOA_DISTRICTS.find(d => d.id === 'truong-sa')!)}
                            onMouseLeave={() => setHoveredDistrict(null)}
                            className="cursor-pointer transition-all duration-300"
                          />
                          
                          <text 
                            x="62" 
                            y="22" 
                            fontSize="8.5" 
                            fontWeight="900" 
                            fill="#da1016" 
                            textAnchor="middle" 
                            className="tracking-wider uppercase select-none pointer-events-none"
                          >
                            H. TRƯỜNG SA
                          </text>
                          <text 
                            x="62" 
                            y="33" 
                            fontSize="7" 
                            fontWeight="700" 
                            fill="#64748b" 
                            textAnchor="middle" 
                            className="select-none pointer-events-none uppercase"
                          >
                            (Quần đảo Trường Sa)
                          </text>

                          {/* Styled islands dots */}
                          <circle cx="35" cy="65" r="2.5" fill="#ef4444" opacity="0.8" />
                          <circle cx="55" cy="55" r="2" fill="#ef4444" opacity="0.8" />
                          <circle cx="85" cy="60" r="3" fill="#ef4444" opacity="0.8" />
                          <circle cx="45" cy="85" r="2" fill="#ef4444" opacity="0.8" />
                          <circle cx="75" cy="90" r="2.5" fill="#ef4444" opacity="0.8" />
                          <circle cx="95" cy="80" r="2" fill="#ef4444" opacity="0.8" />

                          {/* Truong Sa dynamic ping hotspot */}
                          <g 
                            onClick={() => handleDistrictClick(KHANH_HOA_DISTRICTS.find(d => d.id === 'truong-sa')!)}
                            onMouseEnter={() => setHoveredDistrict(KHANH_HOA_DISTRICTS.find(d => d.id === 'truong-sa')!)}
                            onMouseLeave={() => setHoveredDistrict(null)}
                            className="cursor-pointer"
                          >
                            <circle cx="62" cy="72" r="4.5" fill="#da1016" stroke="#ffffff" strokeWidth="1" />
                          </g>
                        </g>

                        {/* 3. Hotspots & Labels for land districts */}
                        {KHANH_HOA_DISTRICTS.map((district) => {
                          const isSelected = selectedDistrict?.id === district.id;
                          const isHovered = hoveredDistrict?.id === district.id;
                          if (district.id === 'truong-sa') return null;

                          const cx = district.svgCx || 0;
                          const cy = district.svgCy || 0;

                          return (
                            <g key={`modal-hotspot-${district.id}`} className="pointer-events-none">
                              <circle 
                                cx={cx} 
                                cy={cy} 
                                r={isSelected ? "5.5" : "4"} 
                                fill={isSelected ? "#da1016" : (isHovered ? "#da1016" : "#f59e0b")} 
                                stroke="#ffffff" 
                                strokeWidth="1" 
                                className="transition-all duration-300"
                              />

                              <text
                                x={cx}
                                y={cy - 14}
                                fontSize="9"
                                fontWeight={isSelected ? "900" : "700"}
                                fill={isSelected ? "#da1016" : "#1e293b"}
                                textAnchor="middle"
                                className="select-none"
                              >
                                {district.name}
                              </text>
                            </g>
                          );
                        })}
                      </svg>
                    ) : (
                      /* REAL HD PLANNING IMAGE MAP */
                      <div className="relative w-full h-full flex items-center justify-center">
                        <img 
                          src={khanhHoaMap} 
                          className="w-full h-full object-contain pointer-events-none drop-shadow-lg"
                          alt="Bản đồ quy hoạch"
                        />

                        {/* Real coordinates mapped Hotspots */}
                        {KHANH_HOA_DISTRICTS.map((district) => {
                          const isSelected = selectedDistrict?.id === district.id;
                          const isHovered = hoveredDistrict?.id === district.id;

                          return (
                            <div
                              key={`modal-img-hotspot-${district.id}`}
                              style={{ 
                                top: `${district.topPercent}%`, 
                                left: `${district.leftPercent}%` 
                              }}
                              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center"
                            >
                              <button
                                onClick={() => handleDistrictClick(district)}
                                onMouseEnter={() => setHoveredDistrict(district)}
                                onMouseLeave={() => setHoveredDistrict(null)}
                                className="relative flex items-center justify-center transition-transform"
                              >
                                {/* Inner dot */}
                                <span className={`relative flex h-4.5 w-4.5 rounded-full border border-white shadow transition-all duration-300 ${
                                  isSelected 
                                    ? "bg-[#da1016] scale-125 ring-4 ring-[#da1016]/20" 
                                    : isHovered 
                                      ? "bg-[#da1016] scale-110" 
                                      : "bg-amber-500"
                                }`}></span>
                              </button>

                              {/* Refined label tooltip overlay (Permanently visible for easier access) */}
                              <div 
                                onClick={() => handleDistrictClick(district)}
                                className={`mt-2 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg border shadow-sm cursor-pointer select-none transition-all ${
                                  isSelected 
                                    ? "border-[#da1016] text-[#da1016] font-black scale-105" 
                                    : isHovered
                                      ? "border-slate-400 text-slate-800 font-extrabold"
                                      : "border-slate-200/80 text-slate-700 font-bold"
                                } text-base whitespace-nowrap`}
                              >
                                {district.name}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </motion.div>

                  {/* Manual Zoom controls */}
                  <div className="absolute bottom-6 left-6 bg-white border border-slate-200 px-4 py-2 rounded-2xl flex items-center gap-3 backdrop-blur-md shadow-lg select-none text-slate-700">
                    <button
                      onClick={() => setZoomScale(prev => Math.max(0.5, prev - 0.25))}
                      className="w-8 h-8 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-all active:scale-90 border"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="text-slate-800 text-base font-mono font-black w-8 text-center">
                      {Math.round(zoomScale * 100)}%
                    </span>
                    <button
                      onClick={() => setZoomScale(prev => Math.min(3, prev + 0.25))}
                      className="w-8 h-8 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-all active:scale-90 border"
                    >
                      <Plus size={14} />
                    </button>
                    <div className="w-[1px] h-4 bg-slate-200"></div>
                    <button
                      onClick={() => setZoomScale(1)}
                      className="px-3 py-1.5 rounded-xl bg-slate-900 text-white font-bold text-base uppercase active:scale-95 transition-all"
                    >
                      Đặt lại
                    </button>
                  </div>
                </div>

                {/* Watermark brand overlay on bottom left */}
                <div className="absolute bottom-5 right-6 text-base text-slate-400 font-bold uppercase tracking-widest select-none pointer-events-none">
                  VILIAN GEOSPATIAL MAP ENGINE V2
                </div>
              </div>

              {/* RIGHT COLUMN: RICH ADMINISTRATIVE DETAILS & COMMUNE SEARCH PANEL */}
              <div className="w-full md:w-[420px] bg-white flex flex-col h-full border-t md:border-t-0 md:border-l border-slate-200 overflow-hidden relative">
                
                {/* Modal Close Button */}
                <button 
                  onClick={() => setIsLargeModalOpen(false)}
                  className="absolute top-4 right-4 z-50 p-2 rounded-full bg-slate-100 hover:bg-slate-200 border text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                >
                  <X size={16} />
                </button>

                {selectedDistrict ? (
                  /* SELECTED DISTRICT VIEW */
                  <div className="flex-1 flex flex-col h-full overflow-hidden">
                    
                    {/* Header Banner - Sleek, unified Dark Crimson red */}
                    <div className="p-6 border-b bg-gradient-to-r from-red-800 to-[#990a0f] text-white relative select-none text-left">
                      <div className="absolute top-5 right-12 text-base font-black tracking-widest text-yellow-400 bg-red-950/40 px-2 py-0.5 rounded uppercase">
                        {selectedDistrict.type}
                      </div>
                      <h3 className="text-lg font-black uppercase tracking-tight flex items-center gap-2">
                        <Landmark size={20} className="text-yellow-400" />
                        {selectedDistrict.name}
                      </h3>
                      <p className="text-base text-red-100 font-semibold tracking-wide uppercase mt-1 flex items-center gap-1">
                        <MapPin size={11} className="text-yellow-400" />
                        Trụ sở UBND: {selectedDistrict.center}
                      </p>
                    </div>

                    {/* Stats Grid - Unified gray cards, crisp borders, no extra colors */}
                    <div className="p-5 border-b border-slate-100 grid grid-cols-2 gap-3 bg-slate-50/50">
                      <div className="bg-white p-3 rounded-2xl border border-slate-200/60 shadow-sm flex items-center gap-2.5 text-left">
                        <div className="p-2 bg-slate-50 text-slate-600 rounded-xl">
                          <Layers size={18} />
                        </div>
                        <div>
                          <span className="text-base font-black text-slate-400 uppercase tracking-wide block">Diện tích</span>
                          <span className="font-extrabold text-slate-800 text-base">{selectedDistrict.area}</span>
                        </div>
                      </div>
                      
                      <div className="bg-white p-3 rounded-2xl border border-slate-200/60 shadow-sm flex items-center gap-2.5 text-left">
                        <div className="p-2 bg-slate-50 text-slate-600 rounded-xl">
                          <Users size={18} />
                        </div>
                        <div>
                          <span className="text-base font-black text-slate-400 uppercase tracking-wide block">Dân số</span>
                          <span className="font-extrabold text-slate-800 text-base">{selectedDistrict.population}</span>
                        </div>
                      </div>
                    </div>

                    {/* Scrollable details contents */}
                    <div className="flex-1 overflow-y-auto p-5 space-y-5 text-left">
                      
                      {/* Unified Leadership Section with NO bright colorful panels, keeping it clean */}
                      <div className="space-y-3">
                        <h5 className="text-base font-black text-slate-800 uppercase tracking-wider flex items-center gap-1.5 pb-1 border-b border-slate-100">
                          <Award size={14} className="text-[#da1016]" />
                          BỘ MÁY LÃNH ĐẠO ĐỊA PHƯƠNG
                        </h5>
                        
                        <div className="space-y-2.5 text-base">
                          {/* Bí thư */}
                          <div className="p-3 bg-slate-50 border border-slate-200/60 rounded-xl flex items-center justify-between">
                            <div>
                              <span className="font-bold text-slate-500 block text-base uppercase tracking-wide mb-0.5">Bí thư Đảng bộ</span>
                              <span className="font-extrabold text-slate-800 text-base">{selectedDistrict.leaders.partySecretary}</span>
                            </div>
                            <span className="px-2 py-0.5 rounded bg-slate-200/60 text-base font-black text-slate-600 uppercase tracking-wider">Hạt nhân</span>
                          </div>

                          {/* Chủ tịch */}
                          <div className="p-3 bg-slate-50 border border-slate-200/60 rounded-xl flex items-center justify-between">
                            <div>
                              <span className="font-bold text-slate-500 block text-base uppercase tracking-wide mb-0.5">Chủ tịch UBND</span>
                              <span className="font-extrabold text-slate-800 text-base">{selectedDistrict.leaders.chairman}</span>
                            </div>
                            <span className="px-2 py-0.5 rounded bg-slate-200/60 text-base font-black text-slate-600 uppercase tracking-wider">Điều hành</span>
                          </div>

                          {/* Phó Chủ tịch */}
                          <div className="p-3 bg-slate-50 border border-slate-200/60 rounded-xl">
                            <span className="font-bold text-slate-500 block text-base uppercase tracking-wide mb-1.5">Các Phó Chủ tịch UBND</span>
                            <div className="flex flex-wrap gap-1.5">
                              {selectedDistrict.leaders.viceChairmen.map((vc, idx) => (
                                <span key={idx} className="px-2.5 py-1 rounded-lg bg-white border border-slate-200/80 text-slate-700 font-extrabold text-base">
                                  {vc}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Commune Lists Sub-division Section */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between pb-1 border-b border-slate-100">
                          <h5 className="text-base font-black text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                            <Building2 size={14} className="text-[#da1016]" />
                            DANH SÁCH XÃ, PHƯỜNG TRỰC THUỘC
                          </h5>
                          <span className="text-base font-bold text-slate-400">
                            {selectedDistrict.communesCount}
                          </span>
                        </div>

                        {/* List items with specific highlights (Clean light tags) */}
                        <div className="space-y-1.5">
                          {selectedDistrict.communes.map((comm, idx) => {
                            const isCommSelected = selectedCommune?.name === comm.name;
                            return (
                              <div 
                                key={idx}
                                onClick={() => setSelectedCommune(comm)}
                                className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                                  isCommSelected 
                                    ? "bg-red-50/50 border-red-200 shadow-sm" 
                                    : "bg-white hover:bg-slate-50 border-slate-100 hover:border-slate-200"
                                }`}
                              >
                                <div className="flex items-center gap-2">
                                  {isCommSelected ? (
                                    <Check size={14} className="text-[#da1016] shrink-0" />
                                  ) : (
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0"></div>
                                  )}
                                  <span className={`font-bold text-base ${isCommSelected ? "text-red-900" : "text-slate-700"}`}>
                                    {comm.name}
                                  </span>
                                </div>
                                <span className="px-2 py-0.5 rounded bg-slate-100 text-base font-bold text-slate-500 uppercase tracking-wider">
                                  {comm.type}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Back button option */}
                    <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center gap-2">
                      <button
                        onClick={() => {
                          setSelectedDistrict(null);
                          setSelectedCommune(null);
                        }}
                        className="w-full py-2.5 border border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-slate-800 font-extrabold text-base rounded-xl transition-all"
                      >
                        Quay lại Danh sách Đơn vị
                      </button>
                    </div>
                  </div>
                ) : (
                  /* GENERAL VIEW: LIST OF DISTRICTS */
                  <div className="flex-1 flex flex-col h-full overflow-hidden text-left">
                    <div className="p-6 border-b bg-gradient-to-r from-red-800 to-[#990a0f] text-white">
                      <h3 className="text-base font-black uppercase tracking-tight flex items-center gap-2">
                        <Landmark size={20} className="text-yellow-400" />
                        ĐƠN VỊ HÀNH CHÍNH KHÁNH HÒA
                      </h3>
                      <p className="text-base text-red-100 mt-1">
                        Vui lòng chọn quận, huyện trên Bản đồ gốc hoặc danh sách dưới đây để tra cứu chi tiết.
                      </p>
                    </div>

                    <div className="flex-1 overflow-y-auto p-5 space-y-2">
                      {KHANH_HOA_DISTRICTS.map((district) => (
                        <div
                          key={district.id}
                          onClick={() => handleDistrictClick(district)}
                          className="p-4 rounded-2xl border border-slate-100 hover:border-slate-200/80 bg-white hover:bg-slate-50/50 cursor-pointer transition-all flex items-center justify-between group/ditem shadow-sm"
                        >
                          <div className="space-y-1">
                            <h4 className="font-black text-base text-slate-800 group-hover/ditem:text-[#da1016] transition-colors uppercase">
                              {district.name}
                            </h4>
                            <p className="text-base text-slate-400 font-bold flex items-center gap-2">
                              <span>Diện tích: {district.area}</span>
                              <span className="text-slate-300">•</span>
                              <span>Dân số: {district.population}</span>
                            </p>
                          </div>
                          <ChevronRight size={16} className="text-slate-300 group-hover/ditem:text-[#da1016] transition-colors" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sub-commune view card overlay inside detail sidebar */}
                {selectedCommune && (
                  <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="absolute inset-x-0 bottom-0 bg-white border-t border-red-100 shadow-2xl p-5 space-y-3 z-30 text-left"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-red-50 text-base font-black text-[#da1016] uppercase tracking-wider">
                          Chi tiết {selectedCommune.type}
                        </span>
                        <h4 className="font-black text-slate-800 text-base">
                          {selectedCommune.name}
                        </h4>
                      </div>
                      <button 
                        onClick={() => setSelectedCommune(null)}
                        className="p-1 text-slate-400 hover:text-slate-600 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                      >
                        <X size={14} />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-base">
                      <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/60">
                        <span className="text-base font-bold text-slate-400 block mb-0.5">Dân số</span>
                        <span className="font-extrabold text-slate-700">{selectedCommune.population} người</span>
                      </div>
                      <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/60">
                        <span className="text-base font-bold text-slate-400 block mb-0.5">Diện tích</span>
                        <span className="font-extrabold text-slate-700">{selectedCommune.area}</span>
                      </div>
                    </div>

                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/60">
                      <span className="text-base font-black text-slate-400 uppercase block mb-1">Trụ sở hành chính UBND</span>
                      <p className="text-base font-bold text-slate-700">{selectedCommune.headquarters}</p>
                    </div>
                  </motion.div>
                )}

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
