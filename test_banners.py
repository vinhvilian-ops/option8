import re
with open('/tmp/9_banners.tsx', 'r') as f:
    wrapper = f.read()
open_divs = len(re.findall(r'<div\b[^>]*>', wrapper))
close_divs = len(re.findall(r'</div>', wrapper))
print(f"Banners: open={open_divs}, close={close_divs}")
