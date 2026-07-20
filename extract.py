import re

with open('src/components/GovPortal.tsx', 'r') as f:
    content = f.read()
weekly = content[content.find('{/* WEEKLY ACTIVITIES'):content.find('{/* LẤY Ý KIẾN')]

big_news_start = weekly.find('<div\n                          onClick={() => {')
if big_news_start == -1: big_news_start = weekly.find('<div \n                          onClick={() => {')
big_news_end_str = '</button>\n                            </div>\n                          </div>\n                        </div>'
big_news_end = weekly.find(big_news_end_str) + len(big_news_end_str)
big = weekly[big_news_start:big_news_end]

small_news_start = weekly.find('{[\n                          {\n                            id: "weekly-small-1",')
small_news_end = weekly.find('})}') + 3
small = weekly[small_news_start:small_news_end]

def count(s):
    o = len(re.findall(r'<div\b[^>]*>', s))
    c = len(re.findall(r'</div>', s))
    return o, c

print(f"big: {count(big)}")
print(f"small: {count(small)}")

