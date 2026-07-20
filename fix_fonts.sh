#!/bin/bash

# Find and replace small font size classes in React components
# Minimal font size 16px (Tailwind text-base)

TARGET_DIR="src"

# Common small text classes
# text-xs (12px) -> text-base (16px)
# text-sm (14px) -> text-base (16px)
# text-[...]px (where px < 16) -> text-base (16px)

find "$TARGET_DIR" -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/text-xs/text-base/g'
find "$TARGET_DIR" -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/text-sm/text-base/g'

# Use perl for regex matching text-[x.xpx] where x.x < 16
find "$TARGET_DIR" -type f -name "*.tsx" -o -name "*.ts" | xargs perl -i -pe 's/text-\[([0-9](\.[0-9]+)?|1[0-5](\.[0-9]+)?)px\]/text-base/g'

echo "Font size rà soát completed."
