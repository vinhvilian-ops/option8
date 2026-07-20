const fs = require('fs');
let content = fs.readFileSync('src/components/UtilitiesPortal.tsx', 'utf8');

const regexes = [
    /text-\[7\.5px\]/g,
    /text-\[8px\]/g,
    /text-\[8\.5px\]/g,
    /text-\[9\.5px\]/g,
    /text-\[10\.5px\]/g,
];

regexes.forEach(regex => {
    content = content.replace(regex, 'text-lg');
});

fs.writeFileSync('src/components/UtilitiesPortal.tsx', content);
console.log('done UtilitiesPortal');
