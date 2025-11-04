import { Rocket, Star } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#0A74DA]/20 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-medium text-[#47B5FF] bg-[#47B5FF]/10 border border-[#47B5FF]/30 px-2.5 py-1 rounded-full">
              <Star className="h-3.5 w-3.5" />
              Job-ready training • Online & Offline
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
              Web Development, SEO & Google Ads — learn by building real projects
            </h1>
            <p className="mt-4 text-white/70 max-w-prose">
              Join Abdullah Nadeem’s hands-on academy and master in-demand skills: Front-end, Back-end, Full Stack, SEO, and Digital Ads. Small batches, practical labs, and mentor support.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#courses" className="inline-flex items-center gap-2 rounded-lg bg-[#0A74DA] px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-[#0A74DA]/30 hover:brightness-110">
                <Rocket className="h-4 w-4" />
                View Courses
              </a>
              <a
                href="https://wa.me/923001234567?text=Hi%20Abdullah!%20I’d%20like%20to%20enroll.%20Please%20guide%20me."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/5"
              >
                Talk on WhatsApp
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 sm:grid-cols-3 gap-4 text-center">
              {[
                { label: "Learners Trained", value: "1,200+" },
                { label: "Avg. Rating", value: "4.9/5" },
                { label: "Projects Built", value: "80+" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <p className="text-xl font-semibold text-white">{s.value}</p>
                  <p className="text-xs text-white/60">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-white/10 bg-gradient-to-br from-[#0A74DA]/20 via-[#47B5FF]/10 to-transparent overflow-hidden">
              <div className="absolute inset-0 opacity-70 mix-blend-screen bg-[radial-gradient(circle_at_20%_20%,rgba(71,181,255,0.35),transparent_40%),_radial-gradient(circle_at_80%_30%,rgba(10,116,218,0.5),transparent_35%),_radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.08),transparent_45%)]" />
              <div className="relative p-6 md:p-8 h-full flex flex-col justify-end">
                <p className="text-sm text-white/70">Upcoming Batch</p>
                <p className="text-xl font-medium text-white">Full Stack Development — 6 Weeks</p>
                <p className="text-sm text-white/60">Hybrid (Online + Lahore Campus)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
