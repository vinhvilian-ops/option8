import re

with open('src/components/GovPortal.tsx', 'r') as f:
    content = f.read()

start = content.find('{activePillar.id === "lanhdao" && (')
end = content.find(')}', start)

# Let's find the correct closing `)}`
# We'll just trace depth of `(` and `{`? No, trace `div`.
lanhdao_block = content[start:content.find('LẤY Ý KIẾN VÀ CÔNG BÁO QUỐC GIA SECTION')]

open_divs = len(re.findall(r'<div\b[^>]*>', lanhdao_block))
close_divs = len(re.findall(r'</div>', lanhdao_block))

print(f"open_divs={open_divs}, close_divs={close_divs}")
