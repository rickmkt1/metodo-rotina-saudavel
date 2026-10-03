import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Método Rotina Saudável em 90 Dias",
  description:
    "Construa hábitos saudáveis, um dia de cada vez, em 90 dias.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-green-50 text-gray-800 antialiased">
        {children}
      </body>
    </html>
  );
}
