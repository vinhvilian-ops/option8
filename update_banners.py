import os
import re

files_to_update = [
    'src/App.tsx',
    'src/components/GovPortal.tsx',
    'src/components/LegalDocumentsPortal.tsx'
]

# Regex pattern to match the h5 and the p tag
# We want to remove the <p>...</p> entirely and update the <h5> classes

for filepath in files_to_update:
    if not os.path.exists(filepath):
        continue
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Update h5
    # Find: <h5 className="text-[18px] md:text-[20px] uppercase font-black mb-1.5 tracking-tight leading-snug text-white">
    # Replace with: <h5 className="text-[20px] md:text-[24px] uppercase font-black tracking-tight leading-snug text-white group-hover:text-yellow-300 transition-colors">
    content = re.sub(
        r'<h5 className="text-\[18px\] md:text-\[20px\] uppercase font-black mb-1\.5 tracking-tight leading-snug text-white">',
        r'<h5 className="text-xl md:text-2xl uppercase font-black tracking-tight leading-snug text-white group-hover:text-yellow-300 transition-colors">',
        content
    )
    
    # Also handle GovPortal which might have slightly different classes, but let's check
    
    # 2. Remove p
    # Regex to match <p className="text-lg md:text-lg ..."> ... </p>
    content = re.sub(
        r'\s*<p className="text-lg md:text-lg font-bold text-white/90 group-hover:text-yellow-300 transition-colors line-clamp-2 leading-relaxed">\s*.*?\s*</p>',
        '',
        content,
        flags=re.DOTALL
    )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

