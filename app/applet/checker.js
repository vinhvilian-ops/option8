const fs = require('fs');
const content = fs.readFileSync('src/components/GovPortal.tsx', 'utf-8');

const lines = content.split('\n');
let count = 0;
let details = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('//')) continue; // skip inline comments
  if (line.includes('/*') && line.includes('*/')) continue;
  
  // This is a very rough heuristic but good enough for div
  const opens = (line.match(/<div[ >]/g) || []).length;
  const closes = (line.match(/<\/div>/g) || []).length;
  
  if (opens > 0 || closes > 0) {
    count += (opens - closes);
    details.push(`${i+1}: +${opens} -${closes} = ${count} | ${line.trim()}`);
  }
}

console.log('Balance:', count);
if (count !== 0) {
  console.log(details.slice(-30).join('\n'));
}
