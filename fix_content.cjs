const fs = require('fs');
const content = fs.readFileSync('src/components/UtilitiesPortal.tsx', 'utf8');

const badChunkStart = 'detailContent: "Kênh cung cấp thông tin tuyển dụng chính thức của các cơ quan quản lý nhà nước, đơ';
const badChunkEnd = 'size={16}>\n          </div>\n        </div>';

const startIndex = content.indexOf(badChunkStart);
const endIndex = content.indexOf(badChunkEnd) + badChunkEnd.length;

const replacement = `detailContent: "Kênh cung cấp thông tin tuyển dụng chính thức của các cơ quan quản lý nhà nước, đơn vị sự nghiệp công lập và các doanh nghiệp lớn trên địa bàn tỉnh Khánh Hòa. Cập nhật liên tục các chỉ tiêu thi tuyển công chức, viên chức, người lao động; hướng dẫn quy trình nộp hồ sơ, thời gian ôn tập và công bố kết quả minh bạch."
    }
  ];

  // Handle dynamic Q&A submits
  const handleQaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!qaInput.trim()) return;

    const newQa = {
      id: \`qa-new-\${Date.now()}\`,
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
    <div className="w-full text-slate-800 relative select-none mt-4 transition-all utilities-portal-root">
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
          <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center shrink-0 shadow-sm mt-0.5">
            <Building size={22} className="stroke-[1.8]" />
          </div>
          <div className="text-left">
            <div className="flex items-center">
              <h2 className={\`\${primaryText} font-black text-2xl md:text-3xl uppercase tracking-tight leading-none text-left\`}>
                Tiện ích dịch vụ & Thông tin công khai
              </h2>
            </div>
            <p className="text-lg sm:text-[18px] text-slate-800 font-medium mt-0.5">
              Cơ sở dữ liệu hỗ trợ công dân, doanh nghiệp tra cứu và tương tác trực tuyến
            </p>
          </div>
        </div>`;

const newContent = content.substring(0, startIndex) + replacement + content.substring(endIndex);
fs.writeFileSync('src/components/UtilitiesPortal.tsx', newContent);
