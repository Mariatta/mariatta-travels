#!/bin/bash
# Install mariatta-travels slash commands by symlinking into ~/.claude/commands/
#
# Usage:
#   git clone https://github.com/Mariatta/mariatta-travels.git
#   cd mariatta-travels
#   ./install.sh
#
# After running this, commands like `/new-trip` work from any directory in
# Claude Code. Since these are symlinks, pulling updates from this repo
# automatically updates your commands — no reinstall needed.

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
COMMANDS_SRC="$SCRIPT_DIR/.claude/commands"
COMMANDS_DST="$HOME/.claude/commands"

if [ ! -d "$COMMANDS_SRC" ]; then
  echo "Error: $COMMANDS_SRC does not exist."
  echo "Are you running this from the mariatta-travels repo root?"
  exit 1
fi

mkdir -p "$COMMANDS_DST"

echo "Installing mariatta-travels commands..."
echo "  Source: $COMMANDS_SRC"
echo "  Target: $COMMANDS_DST"
echo ""

count=0
for file in "$COMMANDS_SRC"/*.md; do
  [ -f "$file" ] || continue
  name="$(basename "$file")"
  target="$COMMANDS_DST/$name"

  if [ -L "$target" ]; then
    echo "  Updating: $name (replacing existing symlink)"
    rm "$target"
  elif [ -f "$target" ]; then
    echo "  Skipping: $name (file already exists and is not a symlink)"
    echo "           Remove it manually if you want to use the version from this repo:"
    echo "           rm $target"
    continue
  else
    echo "  Installing: $name"
  fi

  ln -s "$file" "$target"
  count=$((count + 1))
done

echo ""
if [ $count -eq 0 ]; then
  echo "No new commands installed."
else
  echo "Installed $count command(s). Try them in Claude Code:"
  for file in "$COMMANDS_SRC"/*.md; do
    [ -f "$file" ] || continue
    name="$(basename "$file" .md)"
    echo "  /$name"
  done
fi

echo ""
echo "Since these are symlinks, pulling updates from this repo will"
echo "automatically update your commands — no reinstall needed."