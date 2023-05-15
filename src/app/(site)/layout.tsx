import "../globals.css";
import "../site.css";
import { getPages } from "../../../sanity/sanity-utils";
import { Inter } from "next/font/google";
import React from "react";
import Link from "next/link";
import Logo from "../../components/Logo";
// import SearchBar from "../components/SearchBar-Client";
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
        <nav className="flex flex-col items-center justify-between gap-4 px-10 mx-auto mt-6 md:flex-row max-w-7xl">
          <Logo />

          <div className="flex justify-center gap-4 md:justify-end ">
            {pages?.map((item, i: React.Key) => (
              <Link
                key={i}
                href={`/${item.slug}`}
                className="text-gray-700 hover:text-gray-500"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </nav>
        {/* <div className="max-w-lg px-10 mx-auto">
          <SearchBar />
        </div> */}
        <main>{children}</main>
      </body>
    </html>
  );
}
