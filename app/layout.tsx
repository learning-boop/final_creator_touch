import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Creators Touch Global",
  description: "Digital studio, Vijayawada",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=Geist+Mono:wght@400&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/assets/images/creator_touch.png" />
        <link rel="apple-touch-icon" href="/assets/images/creator_touch.png" />
      </head>
      <body style={{ margin: 0, background: "#08090A" }}>{children}</body>
    </html>
  );
}
