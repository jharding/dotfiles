# matches case insensitive for lowercase
zstyle ':completion:*' matcher-list 'm:{a-z}={A-Z}'

# pasting with tabs doesn't perform completion
zstyle ':completion:*' insert-tab pending

# make completion feel BASH-like
setopt BASH_AUTO_LIST
setopt NO_AUTO_MENU
setopt NO_ALWAYS_LAST_PROMPT
