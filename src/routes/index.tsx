import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AuditoriaSection } from "@/components/AuditoriaSection";
import { BPOSection } from "@/components/BPOSection";
import { ComoFunciona } from "@/components/ComoFunciona";
import { QuemAssina } from "@/components/QuemAssina";
import { Pilares } from "@/components/Pilares";
import { Contato } from "@/components/Contato";
import { Footer } from "@/components/Footer";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Blomberg Auditoria e BPO",
  description:
    "Auditoria condominial investigativa e BPO financeiro e contábil para condomínios no Rio Grande do Sul.",
  url: "https://id-preview--84d63696-31e3-4dad-8294-30019472074f.lovable.app",
  telephone: "+5551999187885",
  address: {
    "@type": "PostalAddress",
    addressRegion: "RS",
    addressCountry: "BR",
  },
  sameAs: ["https://www.instagram.com/bloombergconsultoria/"],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Blomberg Auditoria e BPO — Auditoria Condominial no RS" },
      {
        name: "description",
        content:
          "Auditoria condominial investigativa e BPO financeiro e contábil para condomínios no Rio Grande do Sul. Patricia Bloomberg: 25 anos de controladoria e 15 anos de auditoria.",
      },
      {
        property: "og:title",
        content: "Blomberg Auditoria e BPO — Auditoria Condominial no RS",
      },
      {
        property: "og:description",
        content:
          "Auditoria condominial investigativa e BPO financeiro e contábil para condomínios no Rio Grande do Sul.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      <Header />
      <main>
        <Hero />
        <AuditoriaSection />
        <BPOSection />
        <ComoFunciona />
        <QuemAssina />
        <Pilares />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
