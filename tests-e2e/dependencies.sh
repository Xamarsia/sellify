#!/usr/bin/env bash

# Install selenium in Python Virtual Environment
python3 -m venv venv-selenium
. ./venv-selenium/bin/activate

pip install -r ./requirements.txt
