#!/bin/bash
if [ ! -d 'extension' ]; then
echo "Create a directory";
mkdir extension;
fi
cp -rf manifest.json extension
cp -rf rules.json extension
npm run build
