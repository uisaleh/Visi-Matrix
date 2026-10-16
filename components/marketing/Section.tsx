import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title?: ReactNode;
  lede?: ReactNode;
  center?: boolean;
  as?: "h1" | "h2";
  variant?: "default" | "card" | "hero" | "flush";
  id?: string;
  children?: ReactNode;
};

/** One band of an outline page: a ruled section with an optional eyebrow + heading block. */
export function Section({ eyebrow, title, lede, center, as = "h2", variant = "default", id, children }: Props) {
  const H = as;
  const cls = ["vm-section", variant === "card" && "vm-section--card", variant === "hero" && "vm-section--hero", variant === "flush" && "vm-section--flush"].filter(Boolean).join(" ");
  return (
    <section className={cls} id={id}>
      {(eyebrow || title || lede) && (
        <div className={`vm-head${center ? " vm-head--center" : ""}`}>
          {eyebrow && <p className="vm-eyebrow">{eyebrow}</p>}
          {title && <H className={as === "h1" ? "type-xl" : "type-lg"}>{title}</H>}
          {lede && <p className="lede">{lede}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
