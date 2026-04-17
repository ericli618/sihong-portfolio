import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eric Sihong Li — Product Designer",
  description:
    "Product designer specializing in enterprise UX and AI workflows. Currently at iCONECT.",
  openGraph: {
    title: "Eric Sihong Li — Product Designer",
    description:
      "Product designer specializing in enterprise UX and AI workflows.",
    url: "https://sihong.ca",
    siteName: "Eric Sihong Li",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Office Code Pro — display/titles via Font Library */}
        <link
          href="https://fontlibrary.org/face/office-code-pro"
          rel="stylesheet"
        />
        {/* Junicode — body text via CDNFonts */}
        <link
          rel="preconnect"
          href="https://fonts.cdnfonts.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.cdnfonts.com/css/junicode"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
