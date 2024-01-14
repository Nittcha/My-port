import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nittcha",
  description: "This is my portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body>
        <ActiveSectionContextProvider>
          <Navbar />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}

