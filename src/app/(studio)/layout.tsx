import "../globals.css";
import React from "react";

export const metadata = {
  title: "Admin Panal",
  description: "Admin of Ecommerce App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}