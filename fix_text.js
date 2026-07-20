const fs = require('fs');
const filepath = '/app/applet/src/components/GovPortal.tsx';
let content = fs.readFileSync(filepath, 'utf8');
const lines = content.split('\n');
console.log('Total lines read:', lines.length);
for (let i = 800; i < 820; i++) {
  if (lines[i]) {
    console.log(i + 1, ':', lines[i]);
  }
}
