import Navbar from '@/components/Navigation/Navbar'
import CircuitBoard from '@/components/Circuit/CircuitBoard'
import ContactForm from '@/components/Contact/ContactForm'

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="relative pt-24 pb-16">
        <CircuitBoard />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-signal-neon to-signal-cyan bg-clip-text text-transparent">
            Contact
          </h1>
          <div className="max-w-6xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  )
}

