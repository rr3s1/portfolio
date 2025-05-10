import { ContactForm } from "@/components/ui/contact-form";
import { Toaster } from "@/components/ui/toaster"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-3xl">
        <h1 className="text-6xl font-normal mb-16 text-center">Get in touch</h1>
        <ContactForm />
      </div>
      <Toaster />
    </div>
  )
}
