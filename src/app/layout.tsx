import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientAnimations from "../components/ClientAnimations";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

export const metadata: Metadata = {
  title: "VADA Health Argentina - Auditorías Médicas con IA",
  description: "Revolucionamos las auditorías médicas con IA + Auditores Profesionales. Reducción de costos, rapidez y beneficios para pacientes.",
  keywords: ["auditoría médica", "IA salud", "gestión hospitalaria", "Argentina", "VADA"],
  authors: [{ name: "VADA Health Argentina" }],
  creator: "VADA Health Argentina",
  publisher: "VADA Health Argentina",
  robots: "index, follow",
  icons: {
    icon: [
      {
        url: "/assets/vada-logo.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/assets/vada-logo.png",
        type: "image/png",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#1e3a8a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/assets/vada-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/assets/vada-logo.png" />
        <meta name="msapplication-TileColor" content="#1B3A5C" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <ClientAnimations />
      </body>
    </html>
  );
}
