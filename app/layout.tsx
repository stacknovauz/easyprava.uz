import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter, Sora } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://easyprava.uz"),
  title: {
    default: "EasyPrava — Prava imtihoniga onlayn tayyorlaning",
    template: "%s | EasyPrava",
  },
  description:
    "EasyPrava — haydovchilik guvohnomasiga tayyorlanish uchun zamonaviy ilova. 20 ta imtihon bileti, 20 ta nazariy mavzu, real imtihon rejimi va shaxsiy statistika — hammasi bir joyda.",
  keywords: [
    "prava",
    "prava imtihoni",
    "haydovchilik guvohnomasi",
    "PDD test",
    "yo'l harakati qoidalari",
    "avtomaktab",
    "EasyPrava",
  ],
  openGraph: {
    title: "EasyPrava — Prava imtihoniga onlayn tayyorlaning",
    description:
      "20 ta imtihon bileti, 20 ta nazariy mavzu, real imtihon rejimi va shaxsiy statistika — hammasi bir ilovada.",
    url: "https://easyprava.uz",
    siteName: "EasyPrava",
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EasyPrava — Prava imtihoniga onlayn tayyorlaning",
    description:
      "Testlar, darslar va statistika — prava imtihoniga tayyorlanish uchun hammasi bir ilovada.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f7fd" },
    { media: "(prefers-color-scheme: dark)", color: "#060a13" },
  ],
};

const themeScript = `(function(){document.documentElement.classList.add("js");try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d);}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="uz"
      className={cn(
        "h-full antialiased dark",
        inter.variable,
        sora.variable,
        geistMono.variable,
        "font-sans"
      )}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col overflow-x-clip">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
