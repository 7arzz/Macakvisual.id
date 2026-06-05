import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "MacakVisual.id | Seni Perencanaan Pernikahan Eksklusif",
  description: "Wujudkan pernikahan paling berkesan dengan MacakVisual.id. Kami menciptakan elegansi abadi dan kenangan sinematik berkualitas editorial untuk hari paling istimewa Anda.",
  keywords: ["Wedding Organizer Solo", "WO Solo", "Pernikahan Mewah", "Sinematografi Pernikahan", "Dekorasi Pernikahan Eksklusif", "MacakVisual.id", "Elegansi Pernikahan"],
  authors: [{ name: "MacakVisual.id" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://macakvisual.id",
    title: "MacakVisual.id | Seni Perencanaan Pernikahan Eksklusif",
    description: "Menciptakan elegansi abadi dan kenangan sinematik. Kisah cinta Anda layak menjadi mahakarya visual berkualitas editorial.",
    siteName: "MacakVisual.id",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 800,
        alt: "MacakVisual.id Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MacakVisual.id | Seni Perencanaan Pernikahan Eksklusif",
    description: "Wujudkan pernikahan paling berkesan dengan MacakVisual.id.",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${outfit.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
