import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { ContactInfo } from "@/components/contact-info"

import { Cases } from "@/components/cases"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Process />
      <Contact />

      <Cases />
      <ContactInfo />
      <FAQ />
      <Footer />
    </main>
  )
}
