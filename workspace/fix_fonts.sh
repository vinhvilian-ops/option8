#!/bin/bash

# Find and replace small font size classes in React components
# Minimal font size 16px (Tailwind text-base)

TARGET_DIR="src"

echo "Replacing text-xs with text-base..."
find "$TARGET_DIR" -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/text-xs/text-base/g'

echo "Replacing text-sm with text-base..."
find "$TARGET_DIR" -type f -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/text-sm/text-base/g'

echo "Replacing text-[x]px with text-base for x < 16..."
find "$TARGET_DIR" -type f -name "*.tsx" -o -name "*.ts" | xargs perl -i -pe 's/text-\[([0-9](\.[0-9]+)?|1[0-5](\.[0-9]+)?)px\]/text-base/g'

echo "Font size rà soát completed."
