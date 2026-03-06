import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Highlights } from "@/components/highlights"
import { TargetClients } from "@/components/target-clients"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { ContactInfo } from "@/components/contact-info"
import { Cases } from "@/components/cases"
import { WorkGallery } from "@/components/work-gallery"
import { CtaBanner } from "@/components/cta-banner"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { WhatsappFloat } from "@/components/whatsapp-float"

export default function Home() {
  return (
    <main className="min-h-screen">
      <WhatsappFloat />
      <Header />
      <Hero />
      <Highlights />
      <TargetClients />
      <Services />
      <Process />
      <Cases />
      <WorkGallery />
      <CtaBanner />
      <ContactInfo />
      <FAQ />
      <Footer />
    </main>
  )
}
