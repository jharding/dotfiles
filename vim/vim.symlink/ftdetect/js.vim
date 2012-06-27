autocmd BufRead,BufNewFile *.js set tabstop=2 | set softtabstop=2 |set shiftwidth=2
autocmd BufWritePre *.js :%s/\s\+$//e

