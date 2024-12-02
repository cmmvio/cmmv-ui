#!/bin/bash

TARGET_DIR="./dist"

# Check if the target directory exists
if [ ! -d "$TARGET_DIR" ]; then
    echo "The directory $TARGET_DIR does not exist."
    exit 1
fi

# Remove specific directories
rm -rf "$TARGET_DIR/core"
rm -rf "$TARGET_DIR/assets"
rm -rf "$TARGET_DIR/views"

# Remove specific files
rm -f "$TARGET_DIR/client.js"
rm -f "$TARGET_DIR/router.js"

# Preserve files with relevant names and extensions
find "$TARGET_DIR" -type f ! \( \
    -name "*.cjs.js" -o \
    -name "*.mjs.js" -o \
    -name "*.es.js" -o \
    -name "*.umd.js" -o \
    -name "*.vue.js" -o \
    -name "*.js" -o \
    -name "*.d.ts" \
\) -exec rm -f {} +

# Remove empty directories after cleanup
find "$TARGET_DIR" -type d -empty -exec rm -rf {} +

echo "Cleanup completed. Necessary files have been preserved, and unwanted files and directories have been removed."
