import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/header";
import { Support } from "@/components/site/support";

export const metadata: Metadata = {
  title: "Support - TaskFlow",
};

export default function SupportPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Support />
      </main>
    </>
  );
}
