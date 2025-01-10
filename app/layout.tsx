import type { Metadata } from "next";

import "./globals.css";
import MainLayout from "@/layouts/MainLayout";
import localFont from "next/font/local";


const BadScript = localFont({
    src: [
        {
            path: '../assets/fonts/badScript/BadScript-Regular.ttf',
            weight: '400',
            style: 'lighter',
        }
    ],
    variable: "--font-bad-script",
});

const PTSans = localFont({
    src: [
        {
            path: '../assets/fonts/pt-sans/PTSansNarrow-Regular.ttf',
            weight: '400',
            style: 'regular',
        },
        {
            path: '../assets/fonts/pt-sans/PTSansNarrow-Bold.ttf',
            weight: '800',
            style: 'bold',
        }
    ],
    variable: "--font-pt-sans",
});

export const metadata: Metadata = {
  title: "Segenskirche Eggartskirch | Taufen, Hochzeiten, Geburten, Trauerfeiern",
  description: "Ob Taufe, Hochzeit, Segnunge von Paaren, auch von gleichgeschlechtlichen Paaren. Unser Fokus liegt nicht nur auf traditionellen Feiern:",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${PTSans.variable} ${BadScript.variable}`}>
      <MainLayout>
        {children}
      </MainLayout>
      </body>
    </html>
  );
}
