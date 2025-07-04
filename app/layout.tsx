import "@/app/globals.css";

import React from "react";
import { Metadata } from "next";
import { Outfit } from "next/font/google";
import { headers } from "next/headers";


export const dynamic = "force-dynamic";

const outfit = Outfit({
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Joseph Encila",
    description: `I'm a Frontend Developer based in the Philippines committed to continuous learning and improving my skills in an educational or professional settings, always 
thrilled about the opportunity to contribute to a dynamic team and learn from industry experts.
    `,
    metadataBase: new URL(`https://${headers().get("host")}`),
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en" className={outfit.className} suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>

  );
}
