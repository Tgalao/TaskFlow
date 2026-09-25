# TaskFlow

Plataforma de gestão de tarefas (tipo mini-Trello/Jira), construída como projeto de portefólio para demonstrar CRUD completo, autenticação, backend e integração com base de dados.

## Stack

- **Frontend/Backend:** Next.js (App Router) + TypeScript
- **API:** Next.js Route Handlers
- **Base de dados:** PostgreSQL via Prisma ORM
- **Autenticação:** NextAuth.js / Auth.js (email+password e OAuth)

## Funcionalidades

- Criar conta / login
- Criar, editar, apagar tarefas
- Estados: To Do / In Progress / Done
- Prioridades: Low / Medium / High
- Deadlines
- Pesquisa
- Filtros
- Dashboard com estatisticas

## Estado do projeto

Em desenvolvimento - fase atual: MVP funcional (auth + CRUD de tarefas + dashboard).

Implementado:
- Registo e login (email + password, via NextAuth/Auth.js). OAuth (Google/GitHub) fica ativo automaticamente se as credenciais forem definidas no `.env`.
- CRUD de tarefas (criar, editar, apagar, mudar estado) com API Route Handlers.
- Pesquisa e filtros (estado, prioridade) na lista de tarefas.
- Dashboard com estatisticas (total, por estado, tarefas atrasadas).
- Rotas protegidas via proxy (`src/proxy.ts`).

Por fazer:
- Testes automatizados.
- Deployment.
- Screenshots / demo.

Ver docs/ARCHITECTURE.md para o schema da base de dados e a estrutura de pastas.

## Como correr o projeto localmente

Pre-requisitos: Node.js 20+ e uma base de dados PostgreSQL (local, Docker, ou um servico gratuito como Neon/Supabase).

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar variaveis de ambiente
cp .env.example .env
# edita o .env com a tua DATABASE_URL e gera um AUTH_SECRET com:
npx auth secret

# 3. Criar as tabelas na base de dados
npx prisma migrate dev --name init

# 4. Arrancar o servidor de desenvolvimento
npm run dev
```

A aplicacao fica disponivel em http://localhost:3000. Cria uma conta em `/register` e comeca a usar o dashboard e a lista de tarefas em `/dashboard` e `/tasks`.

Outros comandos uteis:
- `npm run build` / `npm run start` - build e arranque em modo producao.
- `npm run lint` - corre o ESLint.
- `npm run db:studio` - abre o Prisma Studio para inspecionar os dados.

## Processo de desenvolvimento

Ideia -> Planeamento -> Database/Architecture -> Development -> Git/Branches -> Testing -> Deployment -> README -> Screenshots -> Demo

## Autor

Tomas Seabra - projeto do curso Tecnico/a Programador/a de Informatica (modalidade de Aprendizagem, turma 3 API).

