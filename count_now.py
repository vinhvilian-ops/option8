import re
with open('src/components/GovPortal.tsx', 'r') as f:
    content = f.read()

start = content.find('{/* WEEKLY ACTIVITIES NEWS SECTION */}')
end = content.find('{/* LẤY Ý KIẾN VÀ CÔNG BÁO QUỐC GIA SECTION */}')
block = content[start:end]

print("Block open div:", len(re.findall(r'<div\b[^>]*>', block)))
print("Block close div:", len(re.findall(r'</div>', block)))

print("Block open motion:", len(re.findall(r'<motion\.div\b[^>]*>', block)))
print("Block close motion:", len(re.findall(r'</motion\.div>', block)))
