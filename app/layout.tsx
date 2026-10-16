import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "VisiMatrix — See how AI talks about your brand", template: "%s — VisiMatrix" },
  description:
    "VisiMatrix tracks how ChatGPT, Gemini, Claude, Perplexity, and other AI assistants mention, recommend, and cite your brand — while monitoring competitors and AI search performance.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        {/* Geist (sans + mono) and EB Garamond — the Visi Matrix type families */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;700&family=Geist+Mono:wght@400;500&family=EB+Garamond:ital,wght@0,400;1,500&display=swap" />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("vm-theme");if(t)document.documentElement.dataset.theme=t;}catch(e){}`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
