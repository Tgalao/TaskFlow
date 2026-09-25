import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";

export const metadata: Metadata = { title: "Terms of Use - TaskFlow" };

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use">
      <p>
        By creating a TaskFlow account, you accept these terms. TaskFlow is a
        portfolio project, provided &ldquo;as is&rdquo;, without formal
        guarantees of continuous availability.
      </p>
      <h2>Your account</h2>
      <p>
        You are responsible for keeping your password secure. Only you have
        access to the tasks you create in your account.
      </p>
      <h2>Acceptable use</h2>
      <p>
        Use the platform only for personal, legal purposes. Attempting to
        access other users&apos; accounts or using the app for abusive
        purposes is not allowed.
      </p>
      <h2>Changes and termination</h2>
      <p>
        You can delete your account at any time in Settings. As an academic
        project under continuous development, the platform may change or
        become unavailable without prior notice.
      </p>
    </LegalPage>
  );
}
