const fs = require('fs');
let content = fs.readFileSync('src/components/UtilitiesPortal.tsx', 'utf8');
content = content.replace(/text-\[13\.5px\]/g, 'text-lg');
fs.writeFileSync('src/components/UtilitiesPortal.tsx', content);

let appContent = fs.readFileSync('src/App.tsx', 'utf8');
appContent = appContent.replace(/text-\[18px\]/g, 'text-lg');
fs.writeFileSync('src/App.tsx', appContent);

console.log('done');
