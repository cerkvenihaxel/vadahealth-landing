import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientAnimations from "../components/ClientAnimations";
import SmoothScrollNav, { ScrollToTopButton } from "../components/SmoothScrollNav";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Vada Health Argentina - Soluciones Digitales para la Salud",
  description: "Facilitamos el crecimiento y la gestión de las organizaciones de salud a través de soluciones digitales innovadoras y eficientes.",
  keywords: ["salud digital", "gestión hospitalaria", "auditoría médica", "telemedicina", "Argentina"],
  authors: [{ name: "Vada Health Argentina" }],
  creator: "Vada Health Argentina",
  publisher: "Vada Health Argentina",
  robots: "index, follow",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },
  manifest: "/site.webmanifest",
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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#1e3a8a" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <ClientAnimations />
        <SmoothScrollNav 
          items={[
            { id: 'hero', label: 'Inicio', icon: '🏠' },
            { id: 'servicios', label: 'Servicios', icon: '⚕️' },
            { id: 'plataforma', label: 'Plataforma', icon: '💻' },
            { id: 'about', label: 'Nosotros', icon: '👥' },
            { id: 'testimonios', label: 'Testimonios', icon: '⭐' },
            { id: 'contacto', label: 'Contacto', icon: '📞' }
          ]}
        />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
