import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/LegalPage";

export const metadata: Metadata = { title: "Terms & conditions" };

export default function Page() {
  return <LegalPage slug="terms-and-conditions" />;
}
