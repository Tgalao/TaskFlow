import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";

export const metadata: Metadata = { title: "About - TaskFlow" };

export default function AboutPage() {
  return (
    <LegalPage title="About TaskFlow">
      <p>
        TaskFlow is a task management platform (mini-Trello/Jira style) built
        as a portfolio project, to demonstrate full CRUD, authentication,
        backend and database integration.
      </p>
      <p>
        It is a project for the Programming Technician course (Apprenticeship
        track), built by Tomas Seabra. It is not a commercial product — it
        serves to organize personal tasks and as a technical demo.
      </p>
      <h2>Stack</h2>
      <p>
        Next.js (App Router) + TypeScript, PostgreSQL via Prisma ORM, and
        authentication with NextAuth.js / Auth.js (email+password, Google and
        GitHub).
      </p>
    </LegalPage>
  );
}
