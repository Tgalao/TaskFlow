import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";

export const metadata: Metadata = { title: "Cookies - TaskFlow" };

export default function CookiesPage() {
  return (
    <LegalPage title="Cookie Policy">
      <p>
        TaskFlow uses the bare minimum: no advertising cookies and no
        third-party tracking.
      </p>
      <h2>Session cookie (essential)</h2>
      <p>
        When you sign in, a session cookie
        (<code>authjs.session-token</code>) is created to keep you
        authenticated. Without this cookie you cannot access the dashboard or
        your tasks — so it cannot be disabled.
      </p>
      <h2>Theme preference</h2>
      <p>
        The choice between light and dark mode is stored in your own browser
        via <code>localStorage</code>, not a cookie — it never leaves your
        device.
      </p>
      <h2>Nothing else</h2>
      <p>
        We do not use Google Analytics, advertising pixels, or any
        third-party cookies.
      </p>
    </LegalPage>
  );
}
