const fs = require('fs');

let content = fs.readFileSync('src/components/GovPortal.tsx', 'utf-8');

// Replace grid wrapper
content = content.replace(
  '<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-2 md:pt-4">',
  '<div className="flex flex-col gap-6 pt-2 md:pt-4">'
);

// We want to remove the wrapper `<div>` that contains Image + content, so we can use flex flex-col md:flex-row on the main container.
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
                        <div className="h-48 lg:h-auto lg:w-[35%] overflow-hidden relative border-b lg:border-b-0 lg:border-r border-red-100/50 bg-orange-50 shrink-0">`
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
                        
                      <div className="pt-4 mt-auto">
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
                        <div className="h-48 lg:h-auto lg:w-[35%] overflow-hidden relative border-b lg:border-b-0 lg:border-r border-red-100/50 bg-orange-50 shrink-0">`
);

content = content.replace(
  `                           </div>
                        </div>
                      </div>
                      <div className="p-5 pt-0">
                        <button 
                          onClick={() => showNotification("Đã chuyển tới chuyên trang Lãnh Đạo Tỉnh!")}`,
  `                           </div>
                        
                      <div className="pt-4 mt-auto">
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
                        <div className="h-48 lg:h-auto lg:w-[35%] overflow-hidden relative border-b lg:border-b-0 lg:border-r border-red-100/50 bg-orange-50 shrink-0">`
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
                        
                      <div className="pt-4 mt-auto">
                        <button 
                          onClick={() => showNotification("Tải bản cứng lịch công tác đóng dấu đỏ thành công!")}`
);

// We need to fix the wrapping of the <button className="... pb-0"/> because we removed the original <div className="p-5 pt-0">.
// Now the button will be inside the `.p-5.space-y-4` which we will change to `.p-5.flex.flex-col.w-full`
content = content.replace(
  /<div className="p-5 space-y-4">/g,
  '<div className="p-5 flex flex-col w-full">'
);

// Also need to push the button wrapper container inside `flex flex-col w-full`
// wait, the button is replacing `</div> </div> <div className="p-5 pt-0">`
// by `</div> </div> <div className="pt-4 mt-auto">`
// let's double check if my replacement for buttons left a closing div issue

// Original:
/*
<div className="p-5 space-y-4"> // NOW: className="p-5 flex flex-col w-full"
  ...
  <div className="space-y-1.5">
     ...
  </div>
</div>
</div>
<div className="p-5 pt-0">
  <button ... />
</div>
</div>
*/

// My Replacements for bottom part:
// SECTION 2
/*
                      <div className="pt-4 mt-auto">
                        <button 
                          onClick={() => showNotification("Đã chuyển tới danh bạ Tỉnh!")}
                          className="w-full bg-red-900 text-white py-3.5 px-4 rounded-2xl text-[11px] font-black uppercase tracking-wider hover:bg-red-700 transition-colors shadow-md flex items-center justify-center gap-2"
                        >
                          Truy cập Danh Bạ Công Vụ
                        </button>
                      </div>
                    </div>
*/
// It seems I removed `</div> </div>` correctly and left only one `</div>` at the very bottom `</div> </div>` => `</div> <div className="pt-4 mt-auto"> <button ... /> </div> </div>`
// BUT wait. If I change the `p-5 space-y-4` then the inner content will be right inside `p-5 flex flex-col w-full`.
// So the button's wrapper `<div className="pt-4 mt-auto">` is INSIDE `p-5 flex flex-col w-full`.
// If so, my replace for the `</div> </div>` needs to be:
/*
  `                            ))}
                          </div>
                        
                      <div className="pt-4 mt-auto">
                        <button 
*/
// The above removed ONE `</div>` and replaced ONE `</div> <div className="p-5 pt-0">`. This puts it securely inside the former `p-5 space-y-4` which is now `p-5 flex flex-col w-full`.

fs.writeFileSync('src/components/GovPortal.tsx', content);

