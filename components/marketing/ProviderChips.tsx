import { providers } from "@/lib/site";

export function ProviderChips() {
  return (
    <ul className="vm-row" aria-label="Tracked AI assistants">
      {providers.map((p) => (
        <li key={p.name} className="vm-chip"><span className="vm-chip__dot" aria-hidden="true" />{p.name}</li>
      ))}
    </ul>
  );
}
