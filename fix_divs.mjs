import fs from 'fs';

let content = fs.readFileSync('src/components/GovPortal.tsx', 'utf-8');

// I will just add an extra `</div>` before the closing of the section cards where they end.

content = content.replace(
  `                      <div className="pt-6 mt-auto">
                        <button 
                          onClick={() => showNotification("Đã chuyển tới danh bạ Tỉnh!")}
                          className="w-full bg-red-900 text-white py-3.5 px-4 rounded-2xl text-[11px] font-black uppercase tracking-wider hover:bg-red-700 transition-colors shadow-md flex items-center justify-center gap-2"
                        >
                          Truy cập Danh Bạ Công Vụ
                        </button>
                      </div>
                    </div>`,
  `                      <div className="pt-6 mt-auto">
                        <button 
                          onClick={() => showNotification("Đã chuyển tới danh bạ Tỉnh!")}
                          className="w-full bg-red-900 text-white py-3.5 px-4 rounded-2xl text-[11px] font-black uppercase tracking-wider hover:bg-red-700 transition-colors shadow-md flex items-center justify-center gap-2"
                        >
                          Truy cập Danh Bạ Công Vụ
                        </button>
                      </div>
                      </div>
                    </div>`
);

content = content.replace(
  `                      <div className="pt-6 mt-auto">
                        <button 
                          onClick={() => showNotification("Đã chuyển tới chuyên trang Lãnh Đạo Tỉnh!")}
                          className="w-full bg-red-900 text-white py-3.5 px-4 rounded-2xl text-[11px] font-black uppercase tracking-wider hover:bg-red-700 shadow-md flex items-center justify-center gap-2"
                        >
                          Truy cập Cổng Lãnh Đạo
                        </button>
                      </div>
                    </div>`,
  `                      <div className="pt-6 mt-auto">
                        <button 
                          onClick={() => showNotification("Đã chuyển tới chuyên trang Lãnh Đạo Tỉnh!")}
                          className="w-full bg-red-900 text-white py-3.5 px-4 rounded-2xl text-[11px] font-black uppercase tracking-wider hover:bg-red-700 shadow-md flex items-center justify-center gap-2"
                        >
                          Truy cập Cổng Lãnh Đạo
                        </button>
                      </div>
                      </div>
                    </div>`
);

content = content.replace(
  `                      <div className="pt-6 mt-auto">
                        <button 
                          onClick={() => showNotification("Tải bản cứng lịch công tác đóng dấu đỏ thành công!")}
                          className="w-full bg-red-700 text-white py-3.5 px-4 rounded-2xl text-[11px] font-black uppercase tracking-wider hover:bg-red-800 shadow-md flex items-center justify-center gap-2"
                        >
                          Tải Lịch Bản Gốc Gửi Từ VP Tỉnh
                        </button>
                      </div>
                    </div>`,
  `                      <div className="pt-6 mt-auto">
                        <button 
                          onClick={() => showNotification("Tải bản cứng lịch công tác đóng dấu đỏ thành công!")}
                          className="w-full bg-red-700 text-white py-3.5 px-4 rounded-2xl text-[11px] font-black uppercase tracking-wider hover:bg-red-800 shadow-md flex items-center justify-center gap-2"
                        >
                          Tải Lịch Bản Gốc Gửi Từ VP Tỉnh
                        </button>
                      </div>
                      </div>
                    </div>`
);


fs.writeFileSync('src/components/GovPortal.tsx', content);

