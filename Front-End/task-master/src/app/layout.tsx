import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../Styles/globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: "../../public/images.png",
  title: "Task master",
  description: "To Create task master",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
