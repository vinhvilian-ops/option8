const fs = require('fs');
let appContent = fs.readFileSync('src/App.tsx', 'utf8');
appContent = appContent.replace(/<h4 className="text-lg font-black uppercase text-\[#1E3A8A\]/g, '<h4 className="text-xl font-black uppercase text-[#1E3A8A]');
fs.writeFileSync('src/App.tsx', appContent);
console.log('done');
