import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/LegalPage";

export const metadata: Metadata = { title: "Privacy policy" };

export default function Page() {
  return <LegalPage slug="privacy-policy" />;
}
