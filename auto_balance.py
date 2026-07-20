import re

with open('src/components/GovPortal.tsx', 'r') as f:
    content = f.read()

start = content.find('{activePillar.id === "lanhdao" && (')
end = content.find('{/* LẤY Ý KIẾN VÀ CÔNG BÁO QUỐC GIA SECTION */}')
lanhdao_block = content[start:end]

# We need to find how many divs are unbalanced.
text = re.sub(r'<div\b[^>]*/>', '', lanhdao_block)
opens = len(re.findall(r'<div\b[^>]*>', text))
closes = len(re.findall(r'</div>', text))

diff = opens - closes

print(f"Current diff: {diff}")

# Let's fix the end of lanhdao_block
# It currently has something like:
#               </div>
#               </div>
#               </div>
#               </div>
#               </div>
#               </div>
#             )}
# We will just strip ALL `</div>`s and `)}` from the end, and then add exactly what's needed.

# Strip existing closing brackets/divs from the end of lanhdao_block
stripped = lanhdao_block
while True:
    stripped = stripped.rstrip()
    if stripped.endswith(')}'):
        stripped = stripped[:-2]
    elif stripped.endswith('</div>'):
        stripped = stripped[:-6]
    else:
        break

# Now calculate how many we need for the stripped block
text_stripped = re.sub(r'<div\b[^>]*/>', '', stripped)
o = len(re.findall(r'<div\b[^>]*>', text_stripped))
c = len(re.findall(r'</div>', text_stripped))

needed = o - c
print(f"Stripped needed: {needed}")

if needed >= 0:
    new_end = "\n" + ("              </div>\n" * needed) + "            )}\n            "
    new_content = content[:start] + stripped + new_end + content[end:]
    with open('src/components/GovPortal.tsx', 'w') as f:
        f.write(new_content)
    print("Fixed!")
else:
    print("Error: needed < 0, meaning too many closing tags even after stripping the end. They must be inside the block!")
