#!/bin/bash

# Function to display script usage

print_usage() {
    echo "
Runs e2e tests environment setup.

Options:
    -h, --help                       Display help message
    -f, --force                      Force venv rebuild (remove existing venv)
"
exit 2
}

parse_args() {
    SHORT_OPTS="hf"
    LONG_OPTS="help,force"

    PARSED_ARGS=$(getopt -n init --options $SHORT_OPTS --longoptions $LONG_OPTS -- "$@")
    VALID_ARGS=$?

    # Print getopt's invalid output if it is unsuccessful
    if [ "$VALID_ARGS" != "0" ]; then
        echo "It is Invalid option: $1"
        exit 2
    fi

    eval set -- "$PARSED_ARGS"
    while :; do
        case "$1" in
        -h | --help)
            print_usage
            shift
            ;;
        -f | --force)
            ARG_NAME=$2
            shift
            ;;
        --)
            shift
            break
            ;;
        *)
            echo "It is Unexpected option: $1"
            print_usage
            ;;
        esac
    done
}

################################################################################
# functions
################################################################################

setup_cd_venv() {

if [ -f ]; then
    echo "Virtual environment forced rebuild."
    rm -rf ~/venv/venv-cd
fi

python3 -m venv ~/venv/venv-cd
. ~/venv/venv-cd/bin/activate ## run this command with source instead of dot (.) to run venv

echo "Installing cd-requirements..."

# Create and fill requirements file
cat > ~/venv/cd-requirements.txt << EOF
pre-commit==4.5.0
EOF

pip install -r ~/venv/cd-requirements.txt

echo "Install the git hook scripts"
# It will read instructions from .pre-commit-config.yaml and install hooks locally under .git/hooks/
pre-commit install

echo "Setup complete. To activate the venv in a new shell run: \\n source ./cd-envsetup.sh"
}

################################################################################
# main
################################################################################

parse_args $@

setup_cd_venv
