echo "Install all dependencies for the project"
pnpm install

echo "Activate the CD virtual environment"
. scripts/cd-envsetup.sh

echo "Install the git hook scripts"

echo "Install hook scripts or replace existing"
echo "Read instructions from .pre-commit-config.yaml and install hooks locally under .git/hooks/"
pre-commit install --install-hooks --overwrite
