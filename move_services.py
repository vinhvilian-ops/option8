import re

with open('src/components/GovPortal.tsx', 'r') as f:
    content = f.read()

# 1. Extract the 3 Service Cards
start_services = content.find('{/* Left Block: 3 Service Cards */}')
# Find the start of the Right Block
end_services = content.find('{/* Right Block: Công báo Quốc gia */}')

services_block = content[start_services:end_services]

# 2. Extract the "LẤY Ý KIẾN VÀ CÔNG BÁO QUỐC GIA SECTION" to remove it
start_full_section = content.find('{/* LẤY Ý KIẾN VÀ CÔNG BÁO QUỐC GIA SECTION */}')
end_full_section = content.find('{/* PILLAR 2: VĂN BẢN & ĐIỀU HÀNH */}')

# 3. Find the end of the 3 Small News Items map to insert the services_block
target_insert = content.find('                      {/* Right: 9 Banners */}')

# Ensure we're inserting just before closing the left column
# Actually, target_insert points to the start of the right column, so we need to go back slightly to insert inside the left column.
# The code right before target_insert is:
#                        })}
#                        </div>
#                      </div>
#
#                      {/* Right: 9 Banners */}

text_before = content[:target_insert]
# Find the closing tag of the left column
idx = text_before.rfind('                      </div>\n')

new_left_col = text_before[:idx] + "\n" + services_block + "                      </div>\n"

# Now append the Right: 9 Banners and the rest, but skipping the old full section
new_content = new_left_col + content[target_insert:start_full_section] + content[end_full_section:]

with open('src/components/GovPortal.tsx', 'w') as f:
    f.write(new_content)
