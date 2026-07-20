import fs from 'fs';

let content = fs.readFileSync('src/components/GovPortal.tsx', 'utf-8');

// Replace grid wrapper
content = content.replace(
  '<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-2 md:pt-4">',
  '<div className="flex flex-col gap-6 pt-2 md:pt-4">'
);

// SECTION 2
content = content.replace(
  `{/* SECTION 2 (TỔ CHỨC BỘ MÁY HÀNH CHÍNH) */}
                    <div className="bg-white rounded-3xl border border-red-200 shadow-md overflow-hidden flex flex-col justify-between">
                      <div>
                        {/* News Image */}
                        <div className="h-44 overflow-hidden relative border-b border-red-100/50 bg-orange-50">`,
  `{/* SECTION 2 (TỔ CHỨC BỘ MÁY HÀNH CHÍNH) */}
                    <div className="bg-white rounded-3xl border border-red-200 shadow-md overflow-hidden flex flex-col lg:flex-row items-stretch">
                        {/* News Image */}
                        <div className="h-48 lg:h-auto lg:w-[35%] xl:w-[30%] overflow-hidden relative border-b lg:border-b-0 lg:border-r border-red-100/50 bg-orange-50 shrink-0">`
);

content = content.replace(
  `                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="p-5 pt-0">
                        <button 
                          onClick={() => showNotification("Đã chuyển tới danh bạ Tỉnh!")}`,
  `                            ))}
                          </div>
                        
                      <div className="pt-6 mt-auto">
                        <button 
                          onClick={() => showNotification("Đã chuyển tới danh bạ Tỉnh!")}`
);

// SECTION 2.1
content = content.replace(
  `{/* SECTION 2.1 (TRANG RIÊNG CHỦ TỊCH LÃNH ĐẠO) */}
                    <div className="bg-white rounded-3xl border border-red-200 shadow-md overflow-hidden flex flex-col justify-between">
                      <div>
                        {/* News Image */}
                        <div className="h-44 overflow-hidden relative border-b border-red-100/50 bg-orange-50">`,
  `{/* SECTION 2.1 (TRANG RIÊNG CHỦ TỊCH LÃNH ĐẠO) */}
                    <div className="bg-white rounded-3xl border border-red-200 shadow-md overflow-hidden flex flex-col lg:flex-row items-stretch">
                        {/* News Image */}
                        <div className="h-48 lg:h-auto lg:w-[35%] xl:w-[30%] overflow-hidden relative border-b lg:border-b-0 lg:border-r border-red-100/50 bg-orange-50 shrink-0">`
);

content = content.replace(
  `                           </div>
                        </div>
                      </div>
                      <div className="p-5 pt-0">
                        <button 
                          onClick={() => showNotification("Đã chuyển tới chuyên trang Lãnh Đạo Tỉnh!")}`,
  `                           </div>
                        
                      <div className="pt-6 mt-auto">
                        <button 
                          onClick={() => showNotification("Đã chuyển tới chuyên trang Lãnh Đạo Tỉnh!")}`
);

// SECTION 3
content = content.replace(
  `{/* SECTION 3 (LỊCH TUẦN & TIẾP DÂN) */}
                    <div className="bg-white rounded-3xl border border-red-200 shadow-md overflow-hidden flex flex-col justify-between">
                      <div>
                        {/* News Image */}
                        <div className="h-44 overflow-hidden relative border-b border-red-100/50 bg-orange-50">`,
  `{/* SECTION 3 (LỊCH TUẦN & TIẾP DÂN) */}
                    <div className="bg-white rounded-3xl border border-red-200 shadow-md overflow-hidden flex flex-col lg:flex-row items-stretch">
                        {/* News Image */}
                        <div className="h-48 lg:h-auto lg:w-[35%] xl:w-[30%] overflow-hidden relative border-b lg:border-b-0 lg:border-r border-red-100/50 bg-orange-50 shrink-0">`
);

content = content.replace(
  `                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-5 pt-0">
                        <button 
                          onClick={() => showNotification("Tải bản cứng lịch công tác đóng dấu đỏ thành công!")}`,
  `                            </div>
                          </div>
                        
                      <div className="pt-6 mt-auto">
                        <button 
                          onClick={() => showNotification("Tải bản cứng lịch công tác đóng dấu đỏ thành công!")}`
);

// Finally, we need to add <div className="space-y-4"> back because I removed it by replacing it with another class name.
content = content.replace(
  /<div className="p-5 space-y-4">/g,
  '<div className="p-5 flex flex-col w-full space-y-4">'
);

fs.writeFileSync('src/components/GovPortal.tsx', content);

