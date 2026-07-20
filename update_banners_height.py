import os
import re

files_to_update = [
    'src/App.tsx',
    'src/components/GovPortal.tsx',
    'src/components/LegalDocumentsPortal.tsx'
]

for filepath in files_to_update:
    if not os.path.exists(filepath):
        continue
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Update height
    content = re.sub(
        r'className="relative h-\[145px\] rounded-\[24px\]',
        r'className="relative h-[110px] rounded-[24px]',
        content
    )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

