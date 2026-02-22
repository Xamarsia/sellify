#!/usr/bin/env bash

# pnpm install

cd tests/e2e/venv

# Install selenium in Python Virtual Environment
python3 -m venv venv-selenium
source venv-selenium/bin/activate

pip install -U selenium==3.8.0
# selenium --version

pip install -U pytest
# pytest --version
