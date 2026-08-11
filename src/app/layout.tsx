import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getLocale } from "@/lib/locale";
import { getDictionary } from "@/translations";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = getDictionary(locale);
  const { title, description } = t.metadata;

  return {
    // TODO: reemplaza por el dominio real una vez publicada la página.
    metadataBase: new URL("https://yaplin.pe"),
    title,
    description,
    openGraph: {
      title,
      description,
      locale: locale === "en" ? "en_US" : "es_PE",
      type: "website",
      images: [{ url: "/brands/yaplin.png" }],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: ["/brands/yaplin.png"],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg text-text">{children}</body>
    </html>
  );
}
