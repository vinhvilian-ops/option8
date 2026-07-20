const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// replace emoji with Lucide icon component 
content = content.replace(/🟢 Đang lấy ý kiến/g, '<CheckCircle2 size={16} /> Đang lấy ý kiến');
content = content.replace(/⏳ Hết hạn góp ý/g, '<Clock size={16} /> Hết hạn góp ý');
content = content.replace(/CheckCircle2,/g, 'CheckCircle2, Clock,');

fs.writeFileSync('src/App.tsx', content);
console.log('done');
