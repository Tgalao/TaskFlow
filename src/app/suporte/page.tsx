import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/header";
import { Support } from "@/components/site/support";

export const metadata: Metadata = {
  title: "Suporte - TaskFlow",
};

export default function SuportePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Support />
      </main>
    </>
  );
}
