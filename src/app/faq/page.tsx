import type { Metadata } from "next";
import { SiteHeader } from "@/components/site/header";
import { Faq } from "@/components/site/faq";

export const metadata: Metadata = {
  title: "FAQ - TaskFlow",
};

export default function FaqPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Faq />
      </main>
    </>
  );
}
