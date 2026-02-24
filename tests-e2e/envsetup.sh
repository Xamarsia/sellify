#!/usr/bin/env bash

# Function to display script usage

print_usage() {
    echo "
Runs e2e tests env setup script

Options:
    -h, --help      Display help message
    -f, --force     Force venv rebuild (remove existing venv)
"
exit 2
}

parse_args() {
    SHORT_OPTS="hf"
    LONG_OPTS="help,force"

    PARSED_ARGS=$(getopt -n init --options $SHORT_OPTS --longoptions $LONG_OPTS -- "$@")
    VALID_ARGS=$?

    # Print getopt's Invalid output if it is unseccessful
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

setup_selenium_venv() {

if [ -f ]; then
    echo "Virtual environment forced rebuild."
    rm -rf venv-selenium
fi

echo "Install Selenium in Python Virtual Environment"
python3 -m venv venv-selenium
. ./venv-selenium/bin/activate ## run this command with source instead of dot (.) to run venv

echo "Installing requirements..."
pip install -r ./requirements.txt

echo "Setup complete. To activate the venv in a new shell run: \\n source ./envsetup.sh"
}

################################################################################
# main
################################################################################

parse_args $@

setup_selenium_venv
