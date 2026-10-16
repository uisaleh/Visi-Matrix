import { TopBar } from "@/components/app/AppShell";
import { BillingView } from "./BillingView";
export const metadata = { title: "Billing & credits" };
export default function Page() {
  return (<><TopBar crumbs={[{ label: "VisiMatrix Pro" }, { label: "Billing & credits" }]} /><BillingView /></>);
}
