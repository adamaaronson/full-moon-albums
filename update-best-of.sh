#!/bin/bash

cd src/data

python3 process_best_of.py

cd ../..

npm run dev