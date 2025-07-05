import "@/app/globals.css";

import React from "react";
import { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { headers } from "next/headers";


export const dynamic = "force-dynamic";

const font = Open_Sans({
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const host = (await headers()).get("host")
  return {
    title: "Joseph Encila | Portfolio",
    description: `I'm a Frontend Developer based in the Philippines committed to continuous learning and improving my skills in an educational or professional settings, always 
thrilled about the opportunity to contribute to a dynamic team and learn from industry experts.
    `,
    metadataBase: new URL(`https://${host}`),
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en" className={font.className} suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>

  );
}
