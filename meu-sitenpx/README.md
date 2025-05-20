Passo a passo:
create-next-app@latest template-site

Installing dependencies:
- react
- react-dom
- next

Installing devDependencies:
- typescript
- @types/node
- @types/react
- @types/react-dom 
- @tailwindcss/postcss
- tailwindcss
- eslint
- eslint-config-next
- @eslint/eslintrc

para rodar o app : npm run dev

page.js só deve existir dentro da pasta de páginas (app/).
Componentes reutilizáveis devem ficar em components/ (fora de app/) e NÃO devem ter page.js.

# para realizar commits:
$ cd meu-sitenpx
$ git add .
$ git commit -m "primeiro commit"
$ git push origin main
# #############################

# para retorceder para versões anteriores:
$ realizar checkout para a versão desejada
    $ mensagem "HEAD detached from 34d0be3" deve ser exibida no console
$ git checkout -b voltar_ao_antigo
$ git branch -f main
$ git checkout main
$ git push origin main --force
# #############################

ideia para os cards: https://codepen.io/creativemanner/pen/NWrNWrd?editors=1100