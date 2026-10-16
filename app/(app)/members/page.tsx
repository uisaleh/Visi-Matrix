import { TopBar } from "@/components/app/AppShell";
import { MembersView } from "./MembersView";
export const metadata = { title: "Members" };
export default function Page() { return (<><TopBar crumbs={[{ label: "VisiMatrix Pro" }, { label: "Members" }]} /><MembersView /></>); }
