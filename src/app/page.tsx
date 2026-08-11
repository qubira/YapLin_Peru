import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PaymentMethods } from "@/components/PaymentMethods";
import { ProblemSolution } from "@/components/ProblemSolution";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getLocale } from "@/lib/locale";

export default async function Home() {
  const locale = await getLocale();

  return (
    <div className="flex min-h-full flex-col">
      <Header locale={locale} />
      <main className="flex-1">
        <Hero locale={locale} />
        <PaymentMethods locale={locale} />
        <ProblemSolution locale={locale} />
        <Features locale={locale} />
        <HowItWorks locale={locale} />
        <FAQ locale={locale} />
        <CTASection locale={locale} />
      </main>
      <Footer locale={locale} />
      <WhatsAppButton locale={locale} />
    </div>
  );
}
