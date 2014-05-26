#!/bin/bash
rm -f *.js ; tsc --module amd --out out.js usesmodule.ts
