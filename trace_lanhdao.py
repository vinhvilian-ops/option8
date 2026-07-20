import re

with open('src/components/GovPortal.tsx', 'r') as f:
    content = f.read()

start = content.find('{activePillar.id === "lanhdao" && (')
end = content.find('{/* LẤY Ý KIẾN VÀ CÔNG BÁO QUỐC GIA SECTION */}')
lanhdao_block = content[start:end]

lines = lanhdao_block.split('\n')
depth = 0
for i, line in enumerate(lines):
    opens = len(re.findall(r'<div\b[^>]*>', line))
    closes = len(re.findall(r'</div>', line))
    if opens > 0 or closes > 0:
        depth += opens - closes
        # Print lines where depth > 10 to inspect deep nesting
        print(f"Line {i+1}: depth={depth} (+{opens} -{closes}) | {line.strip()[:60]}")

print(f"Final depth: {depth}")
