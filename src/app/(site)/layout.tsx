import "../globals.css";
import "../site.css";
import { getPages } from "../../../sanity/sanity-utils";
import { Inter } from "next/font/google";
import React from "react";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecommerce App",
  description: "Sanity with Next Ecommerce App",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pages = await getPages();

  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex items-center justify-between px-10 mx-auto my-2 max-w-7xl">
          <h2 className="text-3xl font-bold text-transparent drop-shadow bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text">
            <Link href="/">Ecommerce App</Link>
          </h2>
          <div className="flex gap-2">
            {pages?.map((item, i: React.Key) => (
              <Link key={i} href={`/${item.slug}`}>
                {item.title}
              </Link>
            ))}
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
