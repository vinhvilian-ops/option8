import re

with open('src/components/GovPortal.tsx', 'r') as f:
    content = f.read()

start_marker = '{/* SECTION 3 (LỊCH TUẦN & TIẾP DÂN) */}'
end_marker = '{/* NEWS SECTION (Moved from top) */}'

if start_marker in content and end_marker in content:
    start_idx = content.find(start_marker)
    end_idx = content.find(end_marker)
    
    block = content[start_idx:end_idx]
    
    # Remove shadows from block
    block = re.sub(r'\s*shadow-2xl', '', block)
    block = re.sub(r'\s*shadow-xl', '', block)
    block = re.sub(r'\s*hover:shadow-xl', '', block)
    block = re.sub(r'\s*hover:shadow-lg', '', block)
    block = re.sub(r'\s*shadow-lg', '', block)
    block = re.sub(r'\s*shadow-md', '', block)
    block = re.sub(r'\s*shadow-sm', '', block)
    block = re.sub(r'\s*drop-shadow-md', '', block)
    
    new_content = content[:start_idx] + block + content[end_idx:]
    
    with open('src/components/GovPortal.tsx', 'w') as f:
        f.write(new_content)
    print("Shadows removed from Section 3")
else:
    print("Markers not found")

