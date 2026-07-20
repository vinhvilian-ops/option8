import React, { useState, useEffect, useRef } from "react";
import { 
  Calendar, 
  User, 
  Users, 
  MapPin, 
  Clock, 
  FileText, 
  CheckCircle2, 
  Plus, 
  Building2, 
  Info, 
  ArrowRight, 
  ChevronRight, 
  AlertCircle,
  FileSpreadsheet,
  Download,
  Search,
  Upload,
  X
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ScheduleEvent {
  id: string;
  date: string;
  dayOfWeek: string;
  leaderName: string;
  leaderTitle: string;
  field: string;
  location: string;
  time: string;
  status: "Đúng lịch" | "Thay đổi" | "Đã hoàn thành";
}

interface RegistrationRecord {
  id: string;
  fullName: string;
  idCard: string;
  phone: string;
  address: string;
  subject: string;
  preferredDate: string;
  fileName?: string;
  regDate: string;
  status: "Đang chờ duyệt" | "Đã tiếp nhận" | "Đã lên lịch";
}

export default function CitizenReceptionSchedule() {
  const [activeTab, setActiveTab] = useState<"calendar" | "register" | "guide">(() => {
    try {
      const saved = localStorage.getItem("citizenReceptionActiveTab");
      if (saved && (saved === "calendar" || saved === "register" || saved === "guide")) {
        return saved as "calendar" | "register" | "guide";
      }
    } catch (e) {
      // ignore
    }
    return "calendar";
  });

  useEffect(() => {
    try {
      localStorage.setItem("citizenReceptionActiveTab", activeTab);
    } catch (e) {
      // ignore
    }
  }, [activeTab]);

  const [selectedMonth, setSelectedMonth] = useState<number | "all">("all");
  const [selectedLeaderFilter, setSelectedLeaderFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showRegModal, setShowRegModal] = useState(false);
  const [selectedEventForReg, setSelectedEventForReg] = useState<ScheduleEvent | null>(null);
  
  // Registration Form State
  const [fullName, setFullName] = useState("");
  const [idCard, setIdCard] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [subject, setSubject] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [attachedFile, setAttachedFile] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Saved bookings (stored locally)
  const [registrations, setRegistrations] = useState<RegistrationRecord[]>([]);
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);

  const showToast = (msg: string, type: "success" | "error") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 4000);
  };

  // Mock static schedule data for 2026 based on user image
  const SCHEDULE_EVENTS: ScheduleEvent[] = [
    { id: "rc-1-1", date: "29/01/2026", dayOfWeek: "Thứ Năm", leaderName: "Lãnh đạo UBND tỉnh Khánh Hòa", leaderTitle: "Chủ tịch/Phó Chủ tịch", field: "Tiếp công dân định kỳ", location: "Trụ sở tiếp công dân tỉnh Khánh Hòa (số 02 Ngô Quyền, phường Xương Huân, TP Nha Trang)", time: "Sáng: 08:00 - 11:30 | Chiều: 13:30 - 17:00", status: "Đúng lịch" },
    { id: "rc-2-1", date: "26/02/2026", dayOfWeek: "Thứ Năm", leaderName: "Lãnh đạo UBND tỉnh Khánh Hòa", leaderTitle: "Chủ tịch/Phó Chủ tịch", field: "Tiếp công dân định kỳ", location: "Trụ sở tiếp công dân tỉnh Khánh Hòa (số 02 Ngô Quyền, phường Xương Huân, TP Nha Trang)", time: "Sáng: 08:00 - 11:30 | Chiều: 13:30 - 17:00", status: "Đúng lịch" },
    { id: "rc-3-1", date: "19/03/2026", dayOfWeek: "Thứ Năm", leaderName: "Lãnh đạo UBND tỉnh Khánh Hòa", leaderTitle: "Chủ tịch/Phó Chủ tịch", field: "Tiếp công dân định kỳ", location: "Trụ sở tiếp công dân tỉnh Khánh Hòa (số 02 Ngô Quyền, phường Xương Huân, TP Nha Trang)", time: "Sáng: 08:00 - 11:30 | Chiều: 13:30 - 17:00", status: "Đúng lịch" },
    { id: "rc-4-1", date: "23/04/2026", dayOfWeek: "Thứ Năm", leaderName: "Lãnh đạo UBND tỉnh Khánh Hòa", leaderTitle: "Chủ tịch/Phó Chủ tịch", field: "Tiếp công dân định kỳ", location: "Trụ sở tiếp công dân tỉnh Khánh Hòa (số 02 Ngô Quyền, phường Xương Huân, TP Nha Trang)", time: "Sáng: 08:00 - 11:30 | Chiều: 13:30 - 17:00", status: "Đúng lịch" },
    { id: "rc-5-1", date: "21/05/2026", dayOfWeek: "Thứ Năm", leaderName: "Lãnh đạo UBND tỉnh Khánh Hòa", leaderTitle: "Chủ tịch/Phó Chủ tịch", field: "Tiếp công dân định kỳ", location: "Trụ sở tiếp công dân tỉnh Khánh Hòa (số 02 Ngô Quyền, phường Xương Huân, TP Nha Trang)", time: "Sáng: 08:00 - 11:30 | Chiều: 13:30 - 17:00", status: "Đúng lịch" },
    { id: "rc-5-2", date: "28/05/2026", dayOfWeek: "Thứ Năm", leaderName: "Lãnh đạo UBND tỉnh Khánh Hòa", leaderTitle: "Chủ tịch/Phó Chủ tịch", field: "Tiếp công dân định kỳ", location: "Trụ sở tiếp công dân tỉnh Khánh Hòa (số 02 Ngô Quyền, phường Xương Huân, TP Nha Trang)", time: "Sáng: 08:00 - 11:30 | Chiều: 13:30 - 17:00", status: "Đúng lịch" },
    { id: "rc-6-1", date: "25/06/2026", dayOfWeek: "Thứ Năm", leaderName: "Lãnh đạo UBND tỉnh Khánh Hòa", leaderTitle: "Chủ tịch/Phó Chủ tịch", field: "Tiếp công dân định kỳ", location: "Trụ sở tiếp công dân tỉnh Khánh Hòa (số 02 Ngô Quyền, phường Xương Huân, TP Nha Trang)", time: "Sáng: 08:00 - 11:30 | Chiều: 13:30 - 17:00", status: "Đúng lịch" },
    { id: "rc-7-1", date: "23/07/2026", dayOfWeek: "Thứ Năm", leaderName: "Lãnh đạo UBND tỉnh Khánh Hòa", leaderTitle: "Chủ tịch/Phó Chủ tịch", field: "Tiếp công dân định kỳ", location: "Trụ sở tiếp công dân tỉnh Khánh Hòa (số 02 Ngô Quyền, phường Xương Huân, TP Nha Trang)", time: "Sáng: 08:00 - 11:30 | Chiều: 13:30 - 17:00", status: "Đúng lịch" },
    { id: "rc-8-1", date: "20/08/2026", dayOfWeek: "Thứ Năm", leaderName: "Lãnh đạo UBND tỉnh Khánh Hòa", leaderTitle: "Chủ tịch/Phó Chủ tịch", field: "Tiếp công dân định kỳ", location: "Trụ sở tiếp công dân tỉnh Khánh Hòa (số 02 Ngô Quyền, phường Xương Huân, TP Nha Trang)", time: "Sáng: 08:00 - 11:30 | Chiều: 13:30 - 17:00", status: "Đúng lịch" },
    { id: "rc-9-1", date: "17/09/2026", dayOfWeek: "Thứ Năm", leaderName: "Lãnh đạo UBND tỉnh Khánh Hòa", leaderTitle: "Chủ tịch/Phó Chủ tịch", field: "Tiếp công dân định kỳ", location: "Trụ sở tiếp công dân tỉnh Khánh Hòa (số 02 Ngô Quyền, phường Xương Huân, TP Nha Trang)", time: "Sáng: 08:00 - 11:30 | Chiều: 13:30 - 17:00", status: "Đúng lịch" },
    { id: "rc-10-1", date: "22/10/2026", dayOfWeek: "Thứ Năm", leaderName: "Lãnh đạo UBND tỉnh Khánh Hòa", leaderTitle: "Chủ tịch/Phó Chủ tịch", field: "Tiếp công dân định kỳ", location: "Trụ sở tiếp công dân tỉnh Khánh Hòa (số 02 Ngô Quyền, phường Xương Huân, TP Nha Trang)", time: "Sáng: 08:00 - 11:30 | Chiều: 13:30 - 17:00", status: "Đúng lịch" },
    { id: "rc-11-1", date: "19/11/2026", dayOfWeek: "Thứ Năm", leaderName: "Lãnh đạo UBND tỉnh Khánh Hòa", leaderTitle: "Chủ tịch/Phó Chủ tịch", field: "Tiếp công dân định kỳ", location: "Trụ sở tiếp công dân tỉnh Khánh Hòa (số 02 Ngô Quyền, phường Xương Huân, TP Nha Trang)", time: "Sáng: 08:00 - 11:30 | Chiều: 13:30 - 17:00", status: "Đúng lịch" },
    { id: "rc-12-1", date: "24/12/2026", dayOfWeek: "Thứ Năm", leaderName: "Lãnh đạo UBND tỉnh Khánh Hòa", leaderTitle: "Chủ tịch/Phó Chủ tịch", field: "Tiếp công dân định kỳ", location: "Trụ sở tiếp công dân tỉnh Khánh Hòa (số 02 Ngô Quyền, phường Xương Huân, TP Nha Trang)", time: "Sáng: 08:00 - 11:30 | Chiều: 13:30 - 17:00", status: "Đúng lịch" },
  ];

  // Load custom registrations from localstorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("kh_citizen_reception_registrations");
    if (saved) {
      try {
        setRegistrations(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse registrations:", e);
      }
    }
  }, []);

  const saveToStorage = (updatedList: RegistrationRecord[]) => {
    setRegistrations(updatedList);
    localStorage.setItem("kh_citizen_reception_registrations", JSON.stringify(updatedList));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setAttachedFile(e.dataTransfer.files[0].name);
      showToast(`Đã đính kèm tệp: ${e.dataTransfer.files[0].name}`, "success");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFile(e.target.files[0].name);
      showToast(`Đã đính kèm tệp: ${e.target.files[0].name}`, "success");
    }
  };

  const handleOpenRegModal = (event: ScheduleEvent) => {
    setSelectedEventForReg(event);
    setPreferredDate(event.date);
    setShowRegModal(true);
  };

  const handleSubmitRegistration = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim() || !idCard.trim() || !phone.trim() || !address.trim() || !subject.trim() || !preferredDate) {
      showToast("Vui lòng điền đầy đủ tất cả thông tin bắt buộc.", "error");
      return;
    }

    const newReg: RegistrationRecord = {
      id: "REG-" + Date.now().toString().slice(-6),
      fullName,
      idCard,
      phone,
      address,
      subject,
      preferredDate,
      fileName: attachedFile || undefined,
      regDate: new Date().toLocaleDateString("vi-VN"),
      status: "Đang chờ duyệt"
    };

    const updated = [newReg, ...registrations];
    saveToStorage(updated);

    // Reset Form
    setFullName("");
    setIdCard("");
    setPhone("");
    setAddress("");
    setSubject("");
    setAttachedFile(null);
    setShowRegModal(false);
    setSelectedEventForReg(null);

    showToast(`Đăng ký tiếp công dân thành công! Mã đơn: ${newReg.id}. Hãy theo dõi trạng thái duyệt đơn thư.`, "success");
  };

  // Filter schedules
  const filteredEvents = SCHEDULE_EVENTS.filter(event => {
    const matchesLeader = selectedLeaderFilter === "all" || 
      (selectedLeaderFilter === "chairman" && event.leaderTitle.includes("Chủ tịch")) ||
      (selectedLeaderFilter === "vice" && event.leaderTitle.includes("Phó Chủ tịch")) ||
      (selectedLeaderFilter === "ban" && event.leaderTitle.includes("Ban Tiếp"));
      
    const matchesSearch = searchQuery.trim() === "" || 
      event.leaderName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.field.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.date.includes(searchQuery);

    const matchesMonth = selectedMonth === "all" || parseInt(event.date.split("/")[1]) === selectedMonth;
    
    return matchesLeader && matchesSearch && matchesMonth;
  });

  // Group events by month (from 1 to 12) for the all-year view
  const groupedEventsByMonth: { [key: number]: ScheduleEvent[] } = {};
  for (let m = 1; m <= 12; m++) {
    groupedEventsByMonth[m] = filteredEvents.filter(event => parseInt(event.date.split("/")[1]) === m);
  }

  return (
    <section id="citizen-reception-schedule-section" className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-6 md:p-8 text-left transition-all duration-300">
      
      {/* Dynamic Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className={`fixed bottom-8 right-8 z-[10000] text-white font-extrabold text-lg py-4 px-6 rounded-2xl shadow-2xl flex items-center gap-3 border max-w-sm ${
              toast.type === "success" 
                ? "bg-gradient-to-r from-blue-600 to-blue-700 border-blue-500/20" 
                : "bg-gradient-to-r from-red-600 to-red-700 border-red-500/20"
            }`}
          >
            {toast.type === "success" ? (
              <CheckCircle2 size={18} className="text-[#38bdf8] shrink-0" />
            ) : (
              <AlertCircle size={18} className="text-red-300 shrink-0" />
            )}
            <span>{toast.msg}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header with full-width title and professional layout */}
      <div className="border-b border-slate-100 pb-6 mb-8 text-left space-y-4">
        <div className="text-left w-full">
          <h3 className="text-2xl md:text-3xl font-black text-[#1E3A8A] uppercase tracking-tight leading-tight text-left">
            Lịch tiếp công dân<br />Lãnh đạo UBND tỉnh Khánh Hòa
          </h3>
          <p className="text-base md:text-lg text-black font-bold mt-2">
            Lịch tiếp công dân năm 2026
          </p>
        </div>

        {/* Tab Switchers (No icons, separated by vertical bars) */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-bold pt-2 border-t border-slate-100">
          <button
            onClick={() => setActiveTab("calendar")}
            className={`transition-all cursor-pointer py-1 px-1 text-base ${
              activeTab === "calendar"
                ? "text-blue-700 font-extrabold"
                : "text-slate-600 hover:text-blue-700 font-medium"
            }`}
          >
            Lịch tiếp công dân
          </button>
          <span className="text-slate-300 font-light select-none">|</span>
          <button
            onClick={() => setActiveTab("register")}
            className={`transition-all cursor-pointer py-1 px-1 text-base ${
              activeTab === "register"
                ? "text-blue-700 font-extrabold"
                : "text-slate-600 hover:text-blue-700 font-medium"
            }`}
          >
            <span>Đăng ký trực tuyến</span>
            {registrations.length > 0 && (
              <span className="ml-1 bg-red-500 text-white font-bold text-base px-1.5 py-0.5 rounded-full inline-block align-middle">
                {registrations.length}
              </span>
            )}
          </button>
          <span className="text-slate-300 font-light select-none">|</span>
          <button
            onClick={() => setActiveTab("guide")}
            className={`transition-all cursor-pointer py-1 px-1 text-base ${
              activeTab === "guide"
                ? "text-blue-700 font-extrabold"
                : "text-slate-600 hover:text-blue-700 font-medium"
            }`}
          >
            Hướng dẫn quy trình
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <AnimatePresence mode="wait">
        
        {/* TAB 1: CALENDAR VIEW */}
        {activeTab === "calendar" && (
          <motion.div
            key="calendar-tab"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Quick alert bar */}
            <div className="bg-blue-50 border border-blue-100 p-4 rounded-2xl flex items-start gap-3.5">
              <Info className="text-blue-600 shrink-0 mt-0.5" size={18} />
              <div className="text-base md:text-lg text-slate-700 leading-relaxed">
                <span className="font-bold text-blue-900">Thông báo về việc tiếp công dân:</span> <span className="font-normal text-black">Trụ sở Tiếp công dân tỉnh thực hiện tiếp công dân định kỳ của Lãnh đạo UBND tỉnh theo lịch đã ban hành. Công dân có thể đăng ký lịch trực tuyến hoặc gửi đơn thư trực tiếp tại Trụ sở.</span>
              </div>
            </div>

            {/* Month Selector - 2-row grid style with "Cả năm" spanning vertically */}
            <div className="w-full bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm grid grid-cols-7 mb-6">
              <button
                onClick={() => setSelectedMonth("all")}
                className={`row-span-2 py-2.5 px-3 flex items-center justify-center font-bold text-base transition-all cursor-pointer focus:outline-none border-r border-slate-200 ${
                  selectedMonth === "all" ? "bg-blue-600 text-white" : "bg-white text-slate-600 hover:bg-slate-50"
                }`}
              >
                Cả năm
              </button>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((m, idx) => (
                <button
                  key={m}
                  onClick={() => setSelectedMonth(m)}
                  className={`py-2.5 px-3 text-center font-bold text-base transition-all cursor-pointer focus:outline-none border-slate-200 ${
                    idx < 6 ? "border-b" : ""
                  } ${idx % 6 !== 5 ? "border-r" : ""} ${
                    selectedMonth === m ? "bg-blue-600 text-white" : "bg-white text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  Tháng {m}
                </button>
              ))}
            </div>

            {/* Filter tools - Segmented full-width bar separated by vertical lines with no individual boxes */}
            <div className="w-full bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-slate-200 mb-6">
              {[
                { id: "all", label: "Tất cả lãnh đạo" },
                { id: "chairman", label: "Chủ tịch UBND" },
                { id: "vice", label: "Các Phó Chủ tịch" },
                { id: "ban", label: "Ban Tiếp công dân" }
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setSelectedLeaderFilter(btn.id)}
                  className={`flex-1 py-3 px-4 text-center font-bold text-base md:text-lg transition-all cursor-pointer focus:outline-none ${
                    selectedLeaderFilter === btn.id
                      ? "bg-[#1E3A8A] text-white"
                      : "bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-800"
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>

            {/* Schedule Table (Giao diện bảng chuẩn xác như ảnh mẫu yêu cầu) */}
            <div className="space-y-3 bg-white">
              {filteredEvents.length === 0 ? (
                <div className="bg-slate-50 border border-slate-100 rounded-3xl p-10 text-center text-slate-400 font-bold text-lg">
                  Không tìm thấy lịch tiếp công dân phù hợp với bộ lọc hiện tại.
                </div>
              ) : selectedMonth === "all" ? (
                // Nếu là cả năm thì lặp qua từng tháng từ 1 đến 12
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((m) => {
                  const monthEvents = groupedEventsByMonth[m] || [];
                  if (monthEvents.length === 0) return null; // Bỏ qua tháng không có sự kiện
                  
                  return (
                    <div key={m} className="border border-blue-200 rounded-lg overflow-hidden shadow-sm">
                      {/* Tiêu đề Tháng */}
                      <div className="bg-[#DCEBFD] text-[#1E3A8A] font-extrabold text-base md:text-lg py-2 px-4 text-center tracking-wide uppercase border-b border-blue-200">
                        Tháng {m}
                      </div>
                      
                      {/* Bảng */}
                      <div className="w-full overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold text-base">
                              <th className="py-2.5 px-4 md:px-6 w-[200px] border-r border-slate-200 text-center">Ngày tiếp</th>
                              <th className="py-2.5 px-4 md:px-6">Địa điểm</th>
                            </tr>
                          </thead>
                          <tbody>
                            {monthEvents.map((event) => (
                              <tr key={event.id} className="border-b border-slate-200 last:border-0 hover:bg-slate-50/50 transition-colors">
                                <td className="py-3 px-4 md:px-6 font-semibold text-slate-800 text-base border-r border-slate-200 text-center whitespace-nowrap">
                                  <div>{event.date}</div>
                                </td>
                                <td className="py-3 px-4 md:px-6 text-slate-700 text-base">
                                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="space-y-1">
                                      <p className="font-semibold text-slate-800 leading-snug">{event.location}</p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  );
                })
              ) : (
                // Nếu chọn một tháng cụ thể
                (() => {
                  const monthEvents = filteredEvents;
                  
                  return (
                    <div className="border border-blue-200 rounded-lg overflow-hidden shadow-sm">
                      {/* Tiêu đề Tháng */}
                      <div className="bg-[#DCEBFD] text-[#1E3A8A] font-extrabold text-base md:text-lg py-2 px-4 text-center tracking-wide uppercase border-b border-blue-200">
                        Tháng {selectedMonth}
                      </div>
                      
                      {/* Bảng */}
                      <div className="w-full overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold text-base">
                              <th className="py-2.5 px-4 md:px-6 w-[200px] border-r border-slate-200 text-center">Ngày tiếp</th>
                              <th className="py-2.5 px-4 md:px-6">Địa điểm</th>
                            </tr>
                          </thead>
                          <tbody>
                            {monthEvents.map((event) => (
                              <tr key={event.id} className="border-b border-slate-200 last:border-0 hover:bg-slate-50/50 transition-colors">
                                <td className="py-3 px-4 md:px-6 font-semibold text-slate-800 text-base border-r border-slate-200 text-center whitespace-nowrap">
                                  <div>{event.date}</div>
                                </td>
                                <td className="py-3 px-4 md:px-6 text-slate-700 text-base">
                                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="space-y-1">
                                      <p className="font-semibold text-slate-800 leading-snug">{event.location}</p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  );
                })()
              )}

              {/* Nút xuất file ở góc dưới cùng bên phải */}
              <div className="flex justify-end gap-3 pt-4">
                <button 
                  onClick={() => showToast("Đang xuất file Word...", "success")}
                  className="flex items-center gap-1.5 px-4 py-2 border border-blue-600 rounded text-blue-700 font-bold text-base shadow-sm bg-white hover:bg-blue-50 transition-all cursor-pointer"
                >
                  <FileText size={14} className="text-blue-600" /> Xuất file Word
                </button>
                <button 
                  onClick={() => showToast("Đang xuất file Excel...", "success")}
                  className="flex items-center gap-1.5 px-4 py-2 border border-green-600 rounded text-green-700 font-bold text-base shadow-sm bg-white hover:bg-green-50 transition-all cursor-pointer"
                >
                  <FileSpreadsheet size={14} className="text-green-600" /> Xuất file Excel
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 2: REGISTRATION FORM */}
        {activeTab === "register" && (
          <motion.div
            key="register-tab"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Left Column: Form (7 spans) */}
            <div className="lg:col-span-7 bg-slate-50 rounded-2xl border border-slate-200/60 p-5 md:p-6 text-left">
              <h4 className="text-lg font-black text-[#1E3A8A] uppercase tracking-wide mb-4 flex items-center gap-2">
                <Plus size={16} /> Phiếu Đăng Ký Tiếp Công Dân Trực Tuyến
              </h4>
              
              <form onSubmit={handleSubmitRegistration} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-lg font-black text-slate-500 uppercase tracking-wider mb-1.5">
                      Họ và tên công dân <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nhập họ và tên..."
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-white border border-slate-200 p-2.5 px-3.5 rounded-xl text-lg font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-red-550 transition-all shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-black text-slate-500 uppercase tracking-wider mb-1.5">
                      Số CCCD/Hộ chiếu <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nhập 12 số CCCD..."
                      value={idCard}
                      onChange={(e) => setIdCard(e.target.value)}
                      className="w-full bg-white border border-slate-200 p-2.5 px-3.5 rounded-xl text-lg font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-red-550 transition-all shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-lg font-black text-slate-500 uppercase tracking-wider mb-1.5">
                      Số điện thoại <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Nhập số điện thoại liên hệ..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white border border-slate-200 p-2.5 px-3.5 rounded-xl text-lg font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-red-550 transition-all shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-black text-slate-500 uppercase tracking-wider mb-1.5">
                      Chọn ngày tiếp nhận dự kiến <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      required
                      className="w-full bg-white border border-slate-200 p-2.5 px-3.5 rounded-xl text-lg font-semibold text-slate-800 focus:outline-none focus:border-red-550 transition-all shadow-sm"
                    >
                      <option value="">-- Chọn một lịch tiếp --</option>
                      {SCHEDULE_EVENTS.map(ev => (
                        <option key={ev.id} value={ev.date}>
                          Ngày {ev.date} - LĐ: {ev.leaderName}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-black text-slate-500 uppercase tracking-wider mb-1.5">
                    Địa chỉ thường trú/Tạm trú <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Số nhà, đường, thôn/xóm, phường/xã, quận/huyện..."
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full bg-white border border-slate-200 p-2.5 px-3.5 rounded-xl text-lg font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-red-550 transition-all shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-lg font-black text-slate-500 uppercase tracking-wider mb-1.5">
                    Nội dung tóm tắt kiến nghị, phản ánh, khiếu nại <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Ghi chi tiết vụ việc, nội dung phản ánh kiến nghị cụ thể và yêu cầu giải quyết..."
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-white border border-slate-200 p-2.5 px-3.5 rounded-xl text-lg font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-red-550 transition-all shadow-sm leading-relaxed"
                  />
                </div>

                {/* File attachment upload box with drag-and-drop */}
                <div>
                  <label className="block text-lg font-black text-slate-500 uppercase tracking-wider mb-1.5">
                    Đính kèm đơn thư, tài liệu chứng minh (nếu có)
                  </label>
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-2xl p-4 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-2 ${
                      dragOver 
                        ? "border-red-500 bg-red-50" 
                        : "border-slate-200 bg-white hover:border-blue-400 hover:bg-slate-50/50"
                    }`}
                  >
                    <Upload size={22} className="text-slate-400 group-hover:text-blue-500" />
                    <div className="text-lg font-bold text-slate-600">
                      {attachedFile ? (
                        <span className="text-blue-600 flex items-center gap-1.5 justify-center">
                          <CheckCircle2 size={14} className="text-green-500" /> Đã chọn: {attachedFile}
                        </span>
                      ) : (
                        <span>Kéo thả tệp hoặc click để tải lên tệp đơn thư (.pdf, .docx, .png)</span>
                      )}
                    </div>
                    <p className="text-lg text-slate-400 font-medium">Dung lượng tối đa 15MB</p>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                    />
                  </div>
                </div>

                <div className="pt-2 text-right">
                  <button
                    type="submit"
                    className="bg-[#1E3A8A] hover:bg-red-600 text-white font-extrabold text-lg py-3 px-6 rounded-xl transition-all shadow-md shadow-slate-100 cursor-pointer"
                  >
                    Gửi phiếu đăng ký trực tuyến
                  </button>
                </div>
              </form>
            </div>

            {/* Right Column: Submitted tickets track (5 spans) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white rounded-2xl border border-slate-200/80 p-5 text-left shadow-sm">
                <h4 className="text-lg font-black text-slate-800 uppercase tracking-wide mb-3 flex items-center gap-1.5">
                  <Building2 size={15} className="text-blue-600" /> Danh sách phiếu đã đăng ký ({registrations.length})
                </h4>

                {registrations.length === 0 ? (
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 text-center text-slate-400 font-semibold text-lg leading-relaxed">
                    Bạn chưa có đơn đăng ký tiếp công dân nào được tạo trên thiết bị này. Thông tin đăng ký sẽ hiển thị tại đây sau khi nộp thành công.
                  </div>
                ) : (
                  <div className="space-y-3.5 max-h-[460px] overflow-y-auto pr-1">
                    {registrations.map((reg) => (
                      <div
                        key={reg.id}
                        className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-blue-300 transition-all text-lg space-y-2 relative"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-extrabold text-blue-900 font-mono tracking-wider">{reg.id}</span>
                          <span className="text-lg font-extrabold text-slate-400">{reg.regDate}</span>
                        </div>
                        
                        <div>
                          <p className="font-bold text-slate-800 line-clamp-1">{reg.fullName}</p>
                          <p className="text-lg text-slate-500 font-medium leading-relaxed mt-1 line-clamp-2">
                            <strong className="text-slate-600">Nội dung:</strong> {reg.subject}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between">
                          <span className="text-lg text-slate-500 font-bold">
                            Ngày tiếp: <strong className="text-red-600 font-extrabold">{reg.preferredDate}</strong>
                          </span>
                          <span className="text-lg font-black px-2 py-0.5 rounded-md bg-yellow-100 text-yellow-800">
                            {reg.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Offline backup guidelines block */}
              <div className="bg-amber-50/50 border border-amber-100 rounded-2xl p-4 text-left">
                <h5 className="text-lg font-black text-amber-800 uppercase flex items-center gap-1.5 mb-2">
                  <AlertCircle size={14} /> Gửi trực tiếp / Gửi bưu chính
                </h5>
                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                  Công dân cũng có thể gửi đơn thư đăng ký trực tiếp hoặc qua dịch vụ bưu chính công ích tới địa chỉ: <br />
                  <strong className="text-slate-800">Ban Tiếp công dân tỉnh Khánh Hòa</strong>, số 02 Ngô Quyền, phường Xương Huân, thành phố Nha Trang, tỉnh Khánh Hòa.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 3: GUIDELINE / PROCEDURAL INFO */}
        {activeTab === "guide" && (
          <motion.div
            key="guide-tab"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-6 text-left"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  title: "Đăng ký tiếp nhận",
                  desc: "Công dân thực hiện đăng ký qua mạng trực tuyến hoặc đăng ký trực tiếp tại Trụ sở tiếp công dân trước ngày làm việc ít nhất 2 ngày.",
                  color: "border-l-blue-600 text-blue-700"
                },
                {
                  step: "02",
                  title: "Thẩm tra & Phân loại",
                  desc: "Ban Tiếp công dân phân loại, thẩm định nội dung vụ việc để xếp lịch hoặc chuyển giao cơ quan thẩm quyền hướng dẫn thụ lý.",
                  color: "border-l-red-600 text-red-600"
                },
                {
                  step: "03",
                  title: "Thực hiện đón tiếp",
                  desc: "Chủ tịch/Phó Chủ tịch UBND Tỉnh trực tiếp lắng nghe ý kiến, đối thoại dân chủ và đưa ra thông báo kết luận chỉ đạo giải quyết chính thức.",
                  color: "border-l-orange-500 text-orange-600"
                }
              ].map((step, idx) => (
                <div key={idx} className={`bg-slate-50 border-l-4 ${step.color} p-5 rounded-r-2xl border-t border-r border-b border-slate-200/60`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-black tracking-widest uppercase text-slate-400">Bước {step.step}</span>
                    <CheckCircle2 size={16} className="text-slate-300" />
                  </div>
                  <h4 className="text-lg font-black text-slate-800 mb-2">{step.title}</h4>
                  <p className="text-lg text-slate-500 font-semibold leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* General citizens rights and rules card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
              <h4 className="text-lg font-black text-slate-800 uppercase tracking-wide flex items-center gap-1.5">
                <Info size={16} className="text-blue-600" /> Nội quy, nghĩa vụ và quyền lợi của công dân tại buổi tiếp
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-slate-600">
                <div className="space-y-2.5">
                  <h5 className="font-extrabold text-slate-800 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block" /> Quyền lợi của công dân
                  </h5>
                  <ul className="list-disc pl-5 space-y-2 font-medium leading-relaxed">
                    <li>Trình bày trung thực, khách quan về nội dung khiếu nại, tố cáo, kiến nghị của mình.</li>
                    <li>Yêu cầu giữ bí mật thông tin cá nhân đối với đơn tố cáo hành vi vi phạm pháp luật nguy hiểm.</li>
                    <li>Được nhận thông báo văn bản trả lời chính thức từ UBND tỉnh sau khi thụ lý xem xét nội dung.</li>
                    <li>Có quyền cử người đại diện hợp pháp bằng văn bản ủy quyền trong các vụ việc tranh chấp dân sự, đất đai phức tạp.</li>
                  </ul>
                </div>

                <div className="space-y-2.5">
                  <h5 className="font-extrabold text-slate-800 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 inline-block" /> Nghĩa vụ của công dân
                  </h5>
                  <ul className="list-disc pl-5 space-y-2 font-medium leading-relaxed text-slate-500">
                    <li>Xuất trình căn cước công dân hoặc giấy tờ tùy thân còn hiệu lực pháp lý cho cán bộ đón tiếp.</li>
                    <li>Nghiêm chỉnh chấp hành nội quy, không được mang theo chất nổ, vũ khí, chất độc hại vào trụ sở tiếp dân.</li>
                    <li>Không được kích động bè phái, gây rối trật tự an ninh công cộng tại khu vực hành chính công.</li>
                    <li>Cung cấp đầy đủ đơn thư gốc, hồ sơ pháp lý liên quan làm căn cứ xác thực chứng minh vụ việc.</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Online Registration Mini-Modal */}
      <AnimatePresence>
        {showRegModal && selectedEventForReg && (
          <div className="fixed inset-0 z-[11000] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-lg w-full overflow-hidden text-left"
            >
              {/* Header */}
              <div className="bg-[#1E3A8A] text-white p-5 flex items-center justify-between">
                <div>
                  <h4 className="font-black text-lg uppercase tracking-wider leading-none mb-1">Xác nhận Đăng ký Lịch</h4>
                  <p className="text-lg text-blue-100 font-semibold">Đăng ký tiếp công dân ngày {selectedEventForReg.date}</p>
                </div>
                <button
                  onClick={() => setShowRegModal(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Modal form */}
              <form onSubmit={handleSubmitRegistration} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
                <div className="bg-blue-50/50 p-3.5 rounded-xl border border-blue-100 text-lg text-slate-600 space-y-1.5">
                  <p><strong className="text-slate-800">Lãnh đạo chủ trì:</strong> {selectedEventForReg.leaderName} ({selectedEventForReg.leaderTitle})</p>
                  <p><strong className="text-slate-800">Lĩnh vực:</strong> {selectedEventForReg.field}</p>
                  <p><strong className="text-slate-800">Thời gian:</strong> {selectedEventForReg.time}, Ngày {selectedEventForReg.date}</p>
                </div>

                <div>
                  <label className="block text-lg font-black text-slate-500 uppercase tracking-wider mb-1.5">
                    Họ và tên công dân <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nhập họ và tên..."
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 px-3 rounded-xl text-lg font-semibold text-slate-800 focus:outline-none focus:border-red-500 transition-all"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-lg font-black text-slate-500 uppercase tracking-wider mb-1.5">
                      CCCD/Hộ chiếu <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Số CCCD..."
                      value={idCard}
                      onChange={(e) => setIdCard(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 p-2.5 px-3 rounded-xl text-lg font-semibold text-slate-800 focus:outline-none focus:border-red-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-black text-slate-500 uppercase tracking-wider mb-1.5">
                      Số điện thoại <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Số điện thoại..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 p-2.5 px-3 rounded-xl text-lg font-semibold text-slate-800 focus:outline-none focus:border-red-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-black text-slate-500 uppercase tracking-wider mb-1.5">
                    Địa chỉ thường trú <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nhập địa chỉ..."
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 px-3 rounded-xl text-lg font-semibold text-slate-800 focus:outline-none focus:border-red-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-lg font-black text-slate-500 uppercase tracking-wider mb-1.5">
                    Nội dung tóm tắt kiến nghị, phản ánh <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Nhập nội dung phản ánh khiếu nại..."
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 p-2.5 px-3 rounded-xl text-lg font-semibold text-slate-800 focus:outline-none focus:border-red-500 transition-all leading-relaxed"
                  />
                </div>

                <div className="flex gap-2.5 justify-end pt-2">
                  <button
                    type="button"
                    onClick={() => setShowRegModal(false)}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-lg rounded-xl transition-all cursor-pointer"
                  >
                    Hủy bỏ
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white font-extrabold text-lg rounded-xl transition-all shadow-md cursor-pointer"
                  >
                    Xác nhận đăng ký
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
