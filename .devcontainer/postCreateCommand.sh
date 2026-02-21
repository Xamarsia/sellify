#!/usr/bin/env bash

pnpm install

# Install selenium in Python Virtual Environment
python3 -m venv venv-selenium
source ./../venv-selenium/bin/activate

pip install -U selenium
# selenium --version

pip install -U pytest
# pytest --version
