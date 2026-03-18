#!/bin/bash

echo "Install git hook"
. scripts/pre-commit-setup.sh

echo "Install all project dependencies"
pnpm install
