import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Repositório de louvores - IPBetsaida",
  description: " Bem-vindo ao repositório de louvores da Igreja Presbiteriana Betsaida. Aqui, você encontrará hinos e canções que elevam a fé, fortalecem o espírito e nos aproximam da presença de Deus. Explore e encontre aquele louvor que toca o seu coração.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
