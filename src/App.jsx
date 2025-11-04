import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CoursesGrid from "./components/CoursesGrid";
import Testimonials from "./components/Testimonials";
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-[#0B0C10] text-white">
      <Navbar />
      <main>
        <Hero />
        <CoursesGrid />
        <Testimonials />

        {/* Contact section */}
        <section id="contact" className="py-16 md:py-24 border-t border-white/10 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Get in touch</h2>
              <p className="mt-2 text-white/70">
                Have questions about courses, schedules, or fees? Reach out and we’ll guide you.
              </p>
              <div className="mt-6 space-y-3 text-sm">
                <p className="flex items-center gap-2 text-white/80">
                  <Phone className="h-4 w-4" /> +92 300 123 4567
                </p>
                <p className="flex items-center gap-2 text-white/80">
                  <Mail className="h-4 w-4" /> hello@abdullahnadeem.academy
                </p>
                <p className="flex items-center gap-2 text-white/80">
                  <MapPin className="h-4 w-4" /> Lahore, Pakistan (Hybrid Campus)
                </p>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="https://wa.me/923001234567?text=Hi%20Abdullah!%20I%20have%20a%20question%20about%20your%20courses."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#47B5FF] px-4 py-2.5 text-sm font-medium text-black hover:brightness-110"
                >
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </a>
                <a
                  href="https://maps.google.com/?q=Lahore%20Pakistan"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/5"
                >
                  <MapPin className="h-4 w-4" /> View on Google Maps
                </a>
              </div>
            </div>
            <div>
              <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  title="Academy Location"
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27220.394040423058!2d74.309!3d31.520!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904c34a9b1f6b%3A0x6e64c0a2e0d6b3b5!2sLahore!5e0!3m2!1sen!2sPK!4v1680000000000"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Abdullah Nadeem — Web Development & Digital Marketing Academy
          </p>
          <div className="flex items-center gap-3 text-sm text-white/60">
            <a href="#courses" className="hover:text-white">Courses</a>
            <span className="opacity-30">•</span>
            <a href="#testimonials" className="hover:text-white">Testimonials</a>
            <span className="opacity-30">•</span>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/923001234567?text=Hi%20Abdullah!%20I’m%20interested%20in%20your%20courses."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-black px-4 py-3 shadow-lg hover:brightness-110"
      >
        <MessageCircle className="h-5 w-5" />
        WhatsApp
      </a>
    </div>
  );
}

export default App;
