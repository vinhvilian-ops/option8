import os

replacements = {
    "Phổ biến Giáo dục Pháp luật": 'Phổ biến Giáo dục <span className="whitespace-nowrap">Pháp luật</span>',
    "AI Pháp luật - Cổng quốc gia": 'AI Pháp luật - <span className="whitespace-nowrap">Cổng quốc gia</span>',
    "Điện hạt nhân Ninh Thuận": 'Điện hạt nhân <span className="whitespace-nowrap">Ninh Thuận</span>',
    "Bản đồ số 65 Xã, Phường, Đặc khu": 'Bản đồ số 65 Xã, Phường, <span className="whitespace-nowrap">Đặc khu</span>',
    "Tra cứu giá đất trực tuyến": 'Tra cứu giá đất <span className="whitespace-nowrap">trực tuyến</span>',
    "Công khai Ngân sách Nhà nước": 'Công khai Ngân sách <span className="whitespace-nowrap">Nhà nước</span>',
    "Cổng Dịch vụ công trực tuyến": 'Cổng Dịch vụ công <span className="whitespace-nowrap">trực tuyến</span>',
    "Du lịch Nha Trang - Khánh Hòa": 'Du lịch Nha Trang - <span className="whitespace-nowrap">Khánh Hòa</span>',
    "Cơ sở dữ liệu Quốc gia": 'Cơ sở dữ liệu <span className="whitespace-nowrap">Quốc gia</span>'
}

files_to_update = [
    'src/components/LegalDocumentsPortal.tsx'
]

for filepath in files_to_update:
    if not os.path.exists(filepath):
        continue
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for old, new in replacements.items():
        # Replace instances of {old} inside the h5 tags, just doing a simpler replace without worrying about exact spaces
        content = content.replace(f"                      {old}\n", f"                      {new}\n")
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

