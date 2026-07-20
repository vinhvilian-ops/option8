const fs = require('fs');
const file = 'src/components/MultimediaSection.tsx';
let content = fs.readFileSync(file, 'utf8');

const regexes = [
    /text-\[9px\]/g,
    /text-\[11px\]/g,
    /text-\[12px\]/g,
    /text-\[13px\]/g,
    /text-\[14px\]/g,
    /text-\[14\.5px\]/g,
    /text-\[15px\]/g,
    /text-\[15\.5px\]/g,
    /text-xs/g,
    /text-sm/g
];

regexes.forEach(regex => {
    content = content.replace(regex, 'text-lg');
});

fs.writeFileSync(file, content);
console.log('done');
