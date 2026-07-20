import re
with open('src/components/GovPortal.tsx', 'r') as f:
    content = f.read()

start = content.find('{/* WEEKLY ACTIVITIES NEWS SECTION */}')
end = content.find('{/* LẤY Ý KIẾN VÀ CÔNG BÁO QUỐC GIA SECTION */}')
block = content[start:end]

depth = 0
for i, line in enumerate(block.split('\n')):
    opens = len(re.findall(r'<div\b[^>]*>', line))
    closes = len(re.findall(r'</div>', line))
    if opens > 0 or closes > 0:
        depth += opens - closes
        print(f"Line {i}: depth={depth} (+{opens} -{closes}) | {line.strip()}")

print(f"Final depth: {depth}")
