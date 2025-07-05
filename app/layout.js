import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header"
import Footer from "./components/footer"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "K-venture",
  description: "Cabinet de coaching et de développement personnel",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon-180x180.png",
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-icon-180x180.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/android-icon-192x192.png",
      },
    ],
  },
  manifest: "/manifest.json",
  themeColor: "#ffffff",
  msApplicationTileColor: "#ffffff",
  msApplicationTileImage: "/ms-icon-144x144.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}