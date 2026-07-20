import re

with open('src/components/GovPortal.tsx', 'r') as f:
    lines = f.readlines()

# 1. We will find where PILLAR 1 ends.
# It ends around line 1876: `            )}`
# And then the 9 banners start at line 1878: `{/* Right: 9 Banners */}`
# They end before `            {/* LẤY Ý KIẾN VÀ CÔNG BÁO QUỐC GIA SECTION */}` which is around 2137.

# Let's find the exact lines:
pillar1_end = -1
for i, line in enumerate(lines):
    if line.strip() == ')}' and 'PILLAR 1' not in lines[i]: # Actually PILLAR 1 comment is way up
        # check if it's the right one
        if '{/* Right: 9 Banners */}' in lines[i+2] or '{/* Right: 9 Banners */}' in lines[i+1]:
            pillar1_end = i
            break

# We need to find the LẤY Ý KIẾN section:
lay_y_kien_idx = -1
for i, line in enumerate(lines):
    if '{/* LẤY Ý KIẾN VÀ CÔNG BÁO QUỐC GIA SECTION */}' in line:
        lay_y_kien_idx = i
        break

if pillar1_end != -1 and lay_y_kien_idx != -1:
    # Delete the injected banners
    del lines[pillar1_end+1 : lay_y_kien_idx]
    
# Now, let's fix the grid at line 1688.
# We need to find `grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8 items-stretch`
grid_idx = -1
for i, line in enumerate(lines):
    if 'grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8 items-stretch' in line:
        grid_idx = i
        break

# The small news starts at line 1774
# `                        {/* Right: 3 Small News Ite             {/* Right: 3 Small News Items (1 cột có 3 thông tin nhỏ) */}`
small_news_idx = -1
for i, line in enumerate(lines):
    if 'Right: 3 Small News Items' in line or 'Right: 3 Small News Ite' in line:
        small_news_idx = i
        break

if small_news_idx != -1:
    # The small news block ends at `                      </div>` just before the grid closes.
    # Grid closes around line 1871.
    grid_close_idx = -1
    for i in range(small_news_idx, len(lines)):
        if lines[i].strip() == '</div>' and lines[i+1].strip() == '</div>' and lines[i+2].strip() == '</div>':
            grid_close_idx = i + 1
            break
            
    # Extract the small news block (without its col-span-5 wrapper if possible, or just change it)
    # The small news block is lines[small_news_idx : grid_close_idx - 1]
    small_news_lines = lines[small_news_idx : grid_close_idx - 1]
    
    # modify small_news_lines to remove col-span-5 wrapper
    # actually we just change `<div className="xl:col-span-5 space-y-4">` to `<div className="flex flex-col gap-4 mt-6">`
    for i in range(len(small_news_lines)):
        if 'className="xl:col-span-5 space-y-4"' in small_news_lines[i]:
            small_news_lines[i] = small_news_lines[i].replace('className="xl:col-span-5 space-y-4"', 'className="flex flex-col gap-4 mt-4"')
        # Fix the corrupted comment
        if 'Right: 3 Small News Ite' in small_news_lines[i]:
            small_news_lines[i] = '                        {/* 3 Small News Items */}\n'
            
    # Where to insert small_news_lines?
    # At the end of col-span-7.
    # col-span-7 closes just before small_news_idx.
    # Lines small_news_idx - 1 is `                        </div>`
    # We want it inside col-span-7, so we insert it BEFORE the `</div>` of col-span-7.
    # We delete lines[small_news_idx : grid_close_idx - 1]
    del lines[small_news_idx : grid_close_idx - 1]
    
    # insert small_news_lines before the </div> of col-span-7
    # The </div> of col-span-7 is now at lines[small_news_idx - 1] (since we deleted after it) Wait, no.
    # Actually, `lines[small_news_idx - 1]` is the `</div>` that closes `col-span-7`?
    # Let's verify:
    # 1770:                            </div>
    # 1771:                          </div>
    # 1772:                        </div>
    # 1773:
    # 1774:                        {/* Right: 3 Small News Ite ...
    # So line 1772 is the closing of col-span-7!
    # We should insert `small_news_lines` at index 1772.
    
    # Re-evaluate index because we deleted banners below? No, banners were deleted below, so indices above are unaffected.
    
    # Insert small_news_lines
    lines = lines[:small_news_idx-1] + small_news_lines + lines[small_news_idx-1:]
    
    # Now, we need to add the 9 banners as the new col-span-5!
    # Read banners
    with open('/tmp/9_banners.tsx', 'r') as fb:
        banners = fb.read()
    
    new_col5 = f"""                      {{/* Right: 9 Banners */}}
                      <div className="xl:col-span-5 flex flex-col gap-4 h-fit">
{banners}
                      </div>
"""
    # Insert new_col5 before grid_close_idx (which has shifted by +len(small_news_lines) - len(small_news_lines) = 0!)
    # Actually, grid_close_idx is the `</div>` of the grid.
    # Let's find it again to be safe.
    grid_close_idx = -1
    for i in range(grid_idx, len(lines)):
        if lines[i].strip() == '</div>' and lines[i+1].strip() == '</div>' and lines[i+2].strip() == '</div>':
            grid_close_idx = i
            break
            
    lines.insert(grid_close_idx, new_col5)

with open('src/components/GovPortal.tsx', 'w') as f:
    f.writelines(lines)
