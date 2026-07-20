import re

with open('src/components/GovPortal.tsx', 'r') as f:
    content = f.read()

start = content.find('{activePillar.id === "lanhdao" && (')
end = content.find('{/* LẤY Ý KIẾN VÀ CÔNG BÁO QUỐC GIA SECTION */}')

lanhdao_block = content[start:end]

open_divs = len(re.findall(r'<div\b[^>]*>', lanhdao_block))
close_divs = len(re.findall(r'</div>', lanhdao_block))
missing = open_divs - close_divs

print(f"Missing divs: {missing}")

# Check if `)}` is already in lanhdao_block at the very end
has_bracket = lanhdao_block.strip().endswith(')}')
if has_bracket:
    print("Has bracket, stripping it to add divs...")
    # Remove the `)}` temporarily so we can add divs before it
    last_idx = lanhdao_block.rfind(')}')
    lanhdao_block = lanhdao_block[:last_idx]
    
new_end = "\n" + ("              </div>\n" * missing) + "            )}\n            "

new_content = content[:start] + lanhdao_block + new_end + content[end:]

with open('src/components/GovPortal.tsx', 'w') as f:
    f.write(new_content)
