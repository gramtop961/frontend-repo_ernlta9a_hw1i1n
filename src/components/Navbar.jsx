import { GraduationCap, Phone, MessageCircle } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-white">
          <div className="h-9 w-9 rounded-lg bg-[#0A74DA] grid place-content-center shadow-lg shadow-[#0A74DA]/30">
            <GraduationCap className="h-5 w-5 text-white" />
          </div>
          <div className="leading-tight">
            <p className="font-semibold tracking-tight">Abdullah Nadeem</p>
            <p className="text-xs text-white/60">Web Dev & Marketing Academy</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#courses" className="hover:text-white transition-colors">Courses</a>
          <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/923001234567?text=Hi%20Abdullah!%20I%20want%20to%20enroll.%20Please%20share%20details."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#47B5FF] px-3 py-2 text-sm font-medium text-black hover:brightness-110 transition"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href="tel:+923001234567"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-sm font-medium text-white hover:bg-white/5"
          >
            <Phone className="h-4 w-4" />
            Call
          </a>
        </div>
      </div>
    </header>
  );
}
