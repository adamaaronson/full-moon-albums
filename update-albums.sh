#!/bin/bash

cd src/data

python3 process_albums.py

cd ../..

npm run dev