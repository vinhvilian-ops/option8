const fs = require('fs');

function fixBanners(filePath) {
  let data = fs.readFileSync(filePath, 'utf8');

  // Change heading text size
  data = data.replace(/className="text-\[21px\] md:text-\[23px\] font-black mb-1\.5 tracking-tight leading-snug text-white"/g, 'className="text-2xl md:text-[26px] uppercase font-black mb-1.5 tracking-tight leading-snug text-white"');
  data = data.replace(/className="text-\[19px\] md:text-\[21px\] font-black mb-1\.5 tracking-tight leading-snug text-white"/g, 'className="text-xl md:text-[24px] uppercase font-black mb-1.5 tracking-tight leading-snug text-white"');

  // Fix gradient from-/to- ... to to-transparent
  const gradientRegex = /<div className="absolute inset-0 bg-gradient-to-r from-([\w-]+\/[0-9]+) to-([\w-]+\/[0-9]+) group-hover:from-([\w-]+\/[0-9]+) group-hover:to-([\w-]+\/[0-9]+) transition-all duration-500"><\/div>/g;
  data = data.replace(gradientRegex, '<div className="absolute inset-0 bg-gradient-to-r from-$1 to-transparent group-hover:from-$3 group-hover:to-transparent transition-all duration-500"></div>');
  
  // Fix chevron
  const chevronRegex = /<div className="w-9 h-9 rounded-full bg-white\/20 flex items-center justify-center backdrop-blur-md group-hover:bg-white group-hover:text-([\w-]+) transition-all shrink-0">\s*<ChevronRight size=\{18\} \/>\s*<\/div>/g;
  data = data.replace(chevronRegex, '<div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0 backdrop-blur-md group-hover:bg-white group-hover:text-$1 transition-all self-center">\n                        <ChevronRight size={20} />\n                      </div>');

  fs.writeFileSync(filePath, data);
  console.log('Fixed', filePath);
}

fixBanners('src/App.tsx');
fixBanners('src/components/LegalDocumentsPortal.tsx');
