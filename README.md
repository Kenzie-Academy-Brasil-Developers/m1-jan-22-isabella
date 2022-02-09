# REPOSITORIOS REMOTOS

# criar uma copia do repositorio remoto -> 
git clone <cominho-ssh-do-repo>

# puxar os códigos atuais do repo remoto
git pull origin <nome-da-branch>
*git pull origin html

# enviar os códigos pro repo remoto
git push origin <nome-da-branch>
*git push origin html

# adicionar arquivos no commit 
git add . *adicionar todos os arquivos*
git add <nome-do-arquivo>

# fechar a caixa e colocar o nome da etiqueta
git commmit -m "nome-do-commit"
*git commit -m "Finalizando layout html/css"


# criar uma branch local -> espelho do código contido na brach principal
git checkout -b <nome-da-branch>
*git checkout -b html