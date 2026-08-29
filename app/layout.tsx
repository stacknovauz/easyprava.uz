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
    default: "EasyPrava — Toshkentdagi haydovchilik o'quv markazi",
    template: "%s | EasyPrava",
  },
  description:
    "EasyPrava — Toshkentdagi litsenziyalangan haydovchilik o'quv markazi. A, B, BC, C va D toifalari bo'yicha tayyorlaymiz: amaliy haydash o'z avtodromimizda, nazariya esa o'z ilovamizda bepul. Narxlar 1 200 000 so'mdan, 3 oyga bo'lib to'lash mumkin.",
  keywords: [
    "avtomaktab",
    "avtomaktab Toshkent",
    "haydovchilik kurslari",
    "B toifa narxi",
    "haydovchilik guvohnomasi",
    "prava olish",
    "amaliy haydash",
    "avtodrom",
    "EasyPrava",
  ],
  openGraph: {
    title: "EasyPrava — Toshkentdagi haydovchilik o'quv markazi",
    description:
      "A, B, BC, C va D toifalari bo'yicha to'liq tayyorlov. Amaliyot o'z avtodromimizda, nazariya ilovada bepul. 3 oyga bo'lib to'lash.",
    url: "https://easyprava.uz",
    siteName: "EasyPrava",
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EasyPrava — Toshkentdagi haydovchilik o'quv markazi",
    description:
      "A, B, BC, C va D toifalari bo'yicha to'liq tayyorlov — narxlar ochiq, bo'lib to'lash mumkin.",
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
