import fs from 'fs';

let content = fs.readFileSync('src/components/UtilitiesPortal.tsx', 'utf8');

content = content.replace(/h-\[600px\]/g, 'h-[480px]');
content = content.replace(/min-h-\[600px\]/g, 'min-h-[480px]');
content = content.replace(/w-\[44px\] h-\[44px\]/g, 'w-[38px] h-[38px]');
content = content.replace(/gap-4 py-2\.5 px-4 bg-\[#f8fafc\]/g, 'gap-3.5 py-2 px-3 bg-[#f8fafc]');
content = content.replace(/space-y-3/g, 'space-y-2');
content = content.replace(/IconComponent size=\{20\}/g, 'IconComponent size={18}');
content = content.replace(/text-\[18px\] font-bold text-slate-700/g, 'text-[16px] font-bold text-slate-700');

fs.writeFileSync('src/components/UtilitiesPortal.tsx', content);
