import re

with open('src/components/GovPortal.tsx', 'r') as f:
    content = f.read()

start = content.find('{/* WEEKLY ACTIVITIES NEWS SECTION */}')
end = content.find('{/* LẤY Ý KIẾN VÀ CÔNG BÁO QUỐC GIA SECTION */}')
block = content[start:end]

# Count opening and closing divs in the block
open_divs = len(re.findall(r'<div\b[^>]*>', block))
close_divs = len(re.findall(r'</div>', block))

# Also count motion.div
open_motion = len(re.findall(r'<motion\.div\b[^>]*>', block))
close_motion = len(re.findall(r'</motion\.div>', block))

print(f"open_divs={open_divs}, close_divs={close_divs}")
print(f"open_motion={open_motion}, close_motion={close_motion}")
