const fs = require('fs');
const content = fs.readFileSync('src/components/GovPortal.tsx', 'utf-8');

const lines = content.split('\n');
let opensCount = 0;
let closesCount = 0;
let details = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('//')) continue; // skip inline comments
  if (line.includes('/*') && line.includes('*/')) continue;
  
  const opens = (line.match(/<div[ >]/g) || []).length;
  const closes = (line.match(/<\/div>/g) || []).length;
  
  if (opens > 0 || closes > 0) {
    opensCount += opens;
    closesCount += closes;
    details.push(`${i+1}: +${opens} -${closes} = ${opensCount - closesCount} | ${line.trim()}`);
  }
}

console.log('Balance:', opensCount - closesCount);
if (opensCount !== closesCount) {
  console.log(details.slice(-30).join('\n'));
}
