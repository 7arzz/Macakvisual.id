import type { Metadata, Viewport } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["italic", "normal"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#C4A35A",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://macakvisual.id"),
  title: {
    default: "MacakVisual.id | Wedding Organizer Solo – Eksklusif & Sinematik",
    template: "%s | MacakVisual.id",
  },
  description:
    "Wujudkan pernikahan paling berkesan dengan MacakVisual.id. Kami menciptakan elegansi abadi dan kenangan sinematik berkualitas editorial untuk hari paling istimewa Anda di Solo & sekitarnya.",
  keywords: [
    "Wedding Organizer Solo",
    "WO Solo",
    "Pernikahan Mewah Solo",
    "Sinematografi Pernikahan",
    "Dekorasi Pernikahan Eksklusif",
    "MacakVisual.id",
    "Fotografer Wedding Solo",
    "Paket Wedding Solo",
  ],
  authors: [{ name: "MacakVisual.id", url: "https://macakvisual.id" }],
  creator: "MacakVisual.id",
  publisher: "MacakVisual.id",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logo.jpg", type: "image/jpeg" },
    ],
    apple: "/logo.jpg",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://macakvisual.id",
    title: "MacakVisual.id | Wedding Organizer Solo – Eksklusif & Sinematik",
    description:
      "Menciptakan elegansi abadi dan kenangan sinematik. Kisah cinta Anda layak menjadi mahakarya visual berkualitas editorial.",
    siteName: "MacakVisual.id",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "MacakVisual.id – Wedding Organizer Solo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MacakVisual.id | Wedding Organizer Solo",
    description: "Wujudkan pernikahan paling berkesan dengan MacakVisual.id.",
    images: ["/logo.jpg"],
  },
  alternates: {
    canonical: "https://macakvisual.id",
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
