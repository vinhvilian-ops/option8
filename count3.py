import re
with open('src/components/GovPortal.tsx', 'r') as f:
    content = f.read()

start = content.find('{activePillar.id === "lanhdao" && (')
end = content.find('{/* LẤY Ý KIẾN VÀ CÔNG BÁO QUỐC GIA SECTION */}')
lanhdao_block = content[start:end]

opens = len(re.findall(r'<div\b[^>]*(?<!/)>', lanhdao_block))
closes = len(re.findall(r'</div>', lanhdao_block))

print(f"open_divs (not self-closing): {opens}, close_divs: {closes}")
