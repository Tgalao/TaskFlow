import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/header";
import { HowItWorks } from "@/components/site/how-it-works";

export const metadata: Metadata = {
  title: "How it works - TaskFlow",
};

export default function HowItWorksPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HowItWorks />
      </main>
    </>
  );
}
