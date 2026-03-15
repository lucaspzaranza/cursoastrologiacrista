import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Curso de Astrologia Cristã",
  description: "A Astrologia que a modernidade distorceu — restaurada à luz da fé.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#080e1f] text-[#e8e4d8] antialiased">{children}</body>
    </html>
  );
}
