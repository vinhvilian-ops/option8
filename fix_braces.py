import re

with open('src/components/GovPortal.tsx', 'r') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if line.strip() == ')}':
        # Check if the next line is LẤY Ý KIẾN...
        if i + 1 < len(lines) and 'LẤY Ý KIẾN VÀ CÔNG BÁO QUỐC GIA SECTION' in lines[i+1]:
            # This is the end of PILLAR 1.
            # Insert the missing </div> to close <div className="space-y-8">
            lines.insert(i, '                </div>\n')
            break

with open('src/components/GovPortal.tsx', 'w') as f:
    f.writelines(lines)
