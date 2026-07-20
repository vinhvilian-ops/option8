import re

with open('src/components/GovPortal.tsx', 'r') as f:
    content = f.read()

with open('/tmp/9_banners.tsx', 'r') as f:
    banners = f.read()

# 1. Remove `h-[600px]` from the grid
content = re.sub(r'(<div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-stretch) h-\[600px\](">)', r'\1\2', content)

# 2. Extract the 3 small news block
# It starts with: {/* Right: 3 Small News Items...
small_news_start = content.find('{/* Right: 3 Small News Items (1 cột có 3 thông tin nhỏ) */}')
if small_news_start != -1:
    # Find the end of this block
    # It's followed by: </div>\n                    </div>\n            {/* LẤY Ý KIẾN VÀ CÔNG BÁO QUỐC GIA SECTION */}
    end_marker = '{/* LẤY Ý KIẾN VÀ CÔNG BÁO QUỐC GIA SECTION */}'
    end_idx = content.find(end_marker, small_news_start)
    if end_idx != -1:
        # The block is from small_news_start to end_idx
        block_content = content[small_news_start:end_idx]
        
        # In block_content, we want to extract the inner array and map part, or just change the wrapper className.
        # Currently it is:
        # {/* Right: 3 Small News Items... */}
        # <div className="xl:col-span-5 space-y-4"> ... </div>
        # We want to change the wrapper to `<div className="flex flex-col gap-4 mt-6">` because it will be inside col-span-7 under the main news.
        
        modified_small_news = re.sub(r'<div className="xl:col-span-5 space-y-4">', r'<div className="flex flex-col gap-4 mt-6">', block_content)
        modified_small_news = modified_small_news.strip()
        
        # Wait, the `col-span-7` block ends right before `small_news_start`.
        # Let's find the closing `</div>` of `col-span-7`.
        # The `col-span-7` block ends with:
        #                             </div>
        #                           </div>
        #                         </div>
        #                       </div>
        # Then `small_news_start` begins.
        # We need to insert `modified_small_news` right before the last `</div>` of `col-span-7`.
        
        # Let's just find the exact text:
        col7_end_text = """                              </button>
                            </div>
                          </div>
                        </div>
                      </div>"""
        if col7_end_text in content[:small_news_start]:
            new_col7_end = f"""                              </button>
                            </div>
                          </div>
                        </div>

                        {modified_small_news}
                      </div>"""
            # replace the end of col-span-7
            content = content.replace(col7_end_text, new_col7_end, 1)
            
            # Now remove the old small_news block from its original position
            content = content[:small_news_start] + content[end_idx:]
            
            # Now we need to insert the 9 banners where the small news used to be (i.e. before end_marker)
            # The 9 banners need a wrapper: `<div className="xl:col-span-5 flex flex-col gap-4">`
            banners_block = f"""                      {{/* Right: 9 Banners */}}
                      <div className="xl:col-span-5 flex flex-col gap-4">
{banners}
                      </div>
                    </div>
            """
            content = content.replace(end_marker, banners_block + end_marker)
            
            with open('src/components/GovPortal.tsx', 'w') as f:
                f.write(content)
            print("Successfully updated!")
        else:
            print("Could not find col7 end text")
    else:
        print("Could not find end marker")
else:
    print("Could not find small news start")

