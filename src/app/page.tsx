import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Impact from '@/components/Impact'
import Contact from '@/components/Contact'
import StickyVolunteerButton from '@/components/StickyVolunteerButton'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Impact />
      <Contact />
      <StickyVolunteerButton />
    </main>
  )
}
