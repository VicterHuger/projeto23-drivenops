# projeto23-drivenops

### Resumo: 
 - Projeto dedicado a construir a Infraestrutura de deploy da aplicação sorteador de estudantes, desde o momento do commit até o seu deploy. Isso envolve os processos de CI, CD; e consequentemente as tecnologias: Docker (e Docker Compose), AWS (Amazon Web Services) e GitHub Actions.

 ### Como executar a aplicação localmente sem Docker?

 1) Criar arquivo `.env.development` na pasta `back-end` com as credenciais para o acesso local ao prisma orm que se encontram no arquivo `.env.example`.

 2) Entrar na pasta back-end e executar o script dev: 
  - `$ cd back-end/ && npm run dev` 
 3) Criar arquivo `.env` na pasta `front-end` com a variável REACT_APP_BASE_URL=http://localhost:`PORT`  para o acesso local ao back-end, onde `PORT`é a porta default sendo 5000.
 4) Entrar na pasta front-end e executar o script start: 
  - `$ cd front-end/ && npm start` 
 5) Acessar a aplicação no naveagor no link: `http://localhost:3000` 