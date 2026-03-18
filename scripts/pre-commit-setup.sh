#!/bin/bash

################################################################################
# functions
################################################################################

setup_pre_commit_venv() {

python3 -m venv ~/venv/pre-commit-venv
. ~/venv/pre-commit-venv/bin/activate ## run this command with source instead of dot (.) to run venv

echo "Installing pre-commit-requirements..."

# Create and fill requirements file
cat > ~/venv/pre-commit-requirements.txt << EOF
pre-commit==4.5.0
EOF

pip install -r ~/venv/pre-commit-requirements.txt

echo "Install git hook scripts by using pre-commit"

echo "Read instructions from .pre-commit-config.yaml and install hooks locally under .git/hooks/"
pre-commit install --install-hooks --overwrite


echo "Setup complete. To activate the venv in a new shell run: \\n source ./pre-commit-setup.sh"
}

################################################################################
# main
################################################################################

parse_args $@

setup_pre_commit_venv
