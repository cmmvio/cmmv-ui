#!/bin/bash

TARGET_DIR="./dist"

if [ ! -d "$TARGET_DIR" ]; then
    exit 1
fi

find "$TARGET_DIR" -type f ! -name "*.cjs.js" ! -name "*.es.js" ! -name "*.umd.js" -exec rm -f {} +
find "$TARGET_DIR" -type d -empty -exec rm -rf {} +
