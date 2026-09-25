import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/header";
import { HowItWorks } from "@/components/site/how-it-works";

export const metadata: Metadata = {
  title: "Como funciona - TaskFlow",
};

export default function ComoFuncionaPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HowItWorks />
      </main>
    </>
  );
}
