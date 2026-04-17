import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Curso de Astrologia Cristã",
  description: "A Astrologia que a modernidade distorceu — restaurada à luz da fé.",
  openGraph: {
    title: "Curso de Astrologia Cristã",
    description: "A Astrologia que a modernidade distorceu — restaurada à luz da fé.",
    url: "https://cursoastrologiacrista.vercel.app/",
    siteName: "Lucas Zaranza's Portfolio",
    images: [
      {
        url: "https://cursoastrologiacrista.vercel.app/og-card-0.png",
        width: 1200,
        height: 630,
        alt: "Preview do Curso de Astrologia Cristã",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
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
