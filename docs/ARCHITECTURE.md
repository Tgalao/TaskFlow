# TaskFlow - Arquitetura

## 1. Decisoes de arquitetura

- **Estados de tarefa:** TODO / IN_PROGRESS / DONE
- **Prioridades:** LOW / MEDIUM / HIGH (default: MEDIUM)
- **Estrutura de dados:** flat - cada utilizador tem a sua propria lista de tarefas, sem o conceito de "boards" partilhados (fica fora do scope da v1; pode ser adicionado depois como extensao)
- **Autenticacao:** suporta email+password e OAuth (Google/GitHub) em simultaneo, via NextAuth.js / Auth.js com o Prisma Adapter

## 2. Schema da base de dados (Prisma)

```prisma
model User {
  id            String    @id @default(cuid())
  name          String?
  email         String    @unique
  emailVerified DateTime?
  image         String?
  password      String?   // hash bcrypt, so preenchido se usar login por password
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  tasks         Task[]
  accounts      Account[]
  sessions      Session[]
}

model Task {
  id          String     @id @default(cuid())
  title       String
  description String?
  status      TaskStatus @default(TODO)
  priority    Priority   @default(MEDIUM)
  dueDate     DateTime?
  completedAt DateTime?
  createdAt   DateTime   @default(now())
  updatedAt   DateTime   @updatedAt

  userId      String
  user        User       @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@index([userId])
  @@index([status])
}

enum TaskStatus {
  TODO
  IN_PROGRESS
  DONE
}

enum Priority {
  LOW
  MEDIUM
  HIGH
}

// Modelos de suporte do NextAuth.js (Prisma Adapter)
model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String? @db.Text
  access_token      String? @db.Text
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String? @db.Text
  session_state     String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}
```

## 3. Estrutura de pastas

```
taskflow/
  prisma/
    schema.prisma
    migrations/
  src/
    app/
      (auth)/
        login/page.tsx
        register/page.tsx
      (dashboard)/
        layout.tsx
        page.tsx
      tasks/
        page.tsx
        [id]/page.tsx
      api/
        auth/[...nextauth]/route.ts
        tasks/
          route.ts
          [id]/route.ts
      layout.tsx
      globals.css
    components/
      ui/
      tasks/
    lib/
      prisma.ts
      auth.ts
      validations/
    types/
  .env
  .env.example
  package.json
```

## 4. Processo por funcionalidade

Ideia -> Planeamento -> Database/Architecture -> Development -> Git/Branches -> Testing -> Deployment -> README -> Screenshots -> Demo

Cada funcionalidade e desenvolvida numa branch propria (ex: feature/auth, feature/task-crud, feature/dashboard-stats), com commits pequenos e focados.

