#!/bin/bash
if [ ! -d 'extension' ]; then
echo "Creating the extension folder a directory";
mkdir extension;
fi
cp -rf resources/*.json extension
