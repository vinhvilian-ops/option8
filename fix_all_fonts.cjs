const fs = require('fs');
const path = require('path');

function replaceFonts(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            replaceFonts(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            const regexes = [
                /text-\[9px\]/g,
                /text-\[10px\]/g,
                /text-\[11px\]/g,
                /text-\[11\.5px\]/g,
                /text-\[12px\]/g,
                /text-\[13px\]/g,
                /text-\[14px\]/g,
                /text-\[14\.5px\]/g,
                /text-\[15px\]/g,
                /text-\[15\.5px\]/g,
                /text-xs/g,
                /text-sm/g
            ];
            let changed = false;
            regexes.forEach(regex => {
                if(content.match(regex)) {
                   content = content.replace(regex, 'text-lg');
                   changed = true;
                }
            });
            if (changed) {
                fs.writeFileSync(fullPath, content);
                console.log('Updated ' + fullPath);
            }
        }
    }
}

replaceFonts('src');
console.log('done');
