"""Compile design-system/tokens.json -> app/styles/tokens.css (run: python3 scripts/build-tokens.py)."""
import json, re, pathlib
root = pathlib.Path(__file__).resolve().parent.parent
t = json.loads((root / "design-system/tokens.json").read_text())
esc = lambda n: re.sub(r"([.])", r"\\\1", n)
themes = [th["id"] for th in t["color"]["themes"]]
first = themes[0]
def val(v, th):
    if isinstance(v, str): return v if th == first else None
    return v.get(th)
out = ["/* Visi Matrix — generated from design-system/tokens.json. Do not edit by hand. */"]
for th in themes:
    sel = f':root, [data-theme="{first}"]' if th == first else f'[data-theme="{th}"]'
    lines = []
    for fam in ("color", "shadow"):
        for tok in t.get(fam, {}).get("tokens", []):
            v = val(tok["value"], th)
            if v: lines.append(f"  --{esc(tok['name'])}: {v};")
    if th != first: lines.append("  color-scheme: dark;")
    out.append(sel + " {\n" + "\n".join(lines) + "\n}")
lines = []
for fam in ("spacing", "radius", "layout"):
    for tok in t.get(fam, {}).get("tokens", []):
        lines.append(f"  --{esc(tok['name'])}: {tok['value']};")
for k, v in t["type"]["families"].items():
    lines.append(f"  --font-{k}: {v};")
out.append(":root {\n" + "\n".join(lines) + "\n}")
for g in t["type"]["groups"]:
    for s in g["styles"]:
        fam = s.get("family", g["family"])
        decl = [f"font-family: var(--font-{fam})", f"font-size: {s['fontSize']}", f"line-height: {s['lineHeight']}", f"font-weight: {s['fontWeight']}"]
        if s.get("letterSpacing"): decl.append(f"letter-spacing: {s['letterSpacing']}")
        if s["name"] == "eyebrow": decl.append("text-transform: uppercase")
        out.append(f".{esc(s['name'])} {{ " + "; ".join(decl) + "; }")
(root / "app/styles/tokens.css").write_text("\n".join(out) + "\n")
print("tokens.css written")
