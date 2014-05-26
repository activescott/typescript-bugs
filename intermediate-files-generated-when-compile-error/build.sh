#!/bin/bash 
rm -f out.js ; tsc --module amd --out out.js usesmodule.ts
