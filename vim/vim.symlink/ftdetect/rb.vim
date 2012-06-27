autocmd BufRead,BufNewFile *.rb set tabstop=2 | set softtabstop=2 |set shiftwidth=2
autocmd BufWritePre *.rb :%s/\s\+$//e

