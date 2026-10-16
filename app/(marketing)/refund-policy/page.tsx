import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/LegalPage";

export const metadata: Metadata = { title: "Refund policy" };

export default function Page() {
  return <LegalPage slug="refund-policy" />;
}
