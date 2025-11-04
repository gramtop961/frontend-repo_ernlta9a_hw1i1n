import { Clock, Laptop, Layers, Globe, Code, Server } from "lucide-react";

const courses = [
  {
    id: "frontend",
    title: "Front-end Development",
    duration: "6 weeks",
    mode: "Online / Offline",
    price: "PKR 30,000",
    tools: ["HTML", "CSS", "JS", "React"],
  },
  {
    id: "backend",
    title: "Back-end Development",
    duration: "6 weeks",
    mode: "Online / Offline",
    price: "PKR 35,000",
    tools: ["Node.js", "Express", "MongoDB"],
  },
  {
    id: "fullstack",
    title: "Full Stack Development",
    duration: "10 weeks",
    mode: "Online / Offline",
    price: "PKR 60,000",
    tools: ["React", "Node", "MongoDB", "Auth"],
  },
  {
    id: "seo",
    title: "SEO (Search Engine Optimization)",
    duration: "4 weeks",
    mode: "Online / Offline",
    price: "PKR 25,000",
    tools: ["On-Page", "Off-Page", "GA4", "GSC"],
  },
  {
    id: "ads",
    title: "Google Ads & Digital Marketing",
    duration: "4 weeks",
    mode: "Online / Offline",
    price: "PKR 30,000",
    tools: ["Google Ads", "Meta", "Funnels"],
  },
];

export default function CoursesGrid() {
  const handleWhatsApp = (course) => {
    const msg = encodeURIComponent(
      `Hi Abdullah! I want to enroll in ${course.title}. Please share the next steps.`
    );
    window.open(`https://wa.me/923001234567?text=${msg}`, "_blank");
  };

  return (
    <section id="courses" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
              Explore Courses
            </h2>
            <p className="mt-2 text-white/70">
              Practical, project-based learning with mentor support.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 text-sm rounded-lg border border-white/10 px-4 py-2 text-white hover:bg-white/5"
          >
            <Globe className="h-4 w-4" /> Need help choosing?
          </a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c) => (
            <article
              key={c.id}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition overflow-hidden"
            >
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-white">{c.title}</h3>
                  <span className="text-xs text-white/60">{c.mode}</span>
                </div>
                <div className="mt-3 flex items-center gap-4 text-sm text-white/70">
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" />{c.duration}</span>
                  <span className="inline-flex items-center gap-1.5"><Layers className="h-4 w-4" />{c.price}</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tools.map((t) => (
                    <span
                      key={t}
                      className="text-xs text-[#47B5FF] bg-[#47B5FF]/10 border border-[#47B5FF]/30 px-2 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="border-t border-white/10 p-4 flex items-center justify-between">
                <button
                  onClick={() => handleWhatsApp(c)}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#0A74DA] px-3 py-2 text-sm font-medium text-white hover:brightness-110"
                >
                  <Laptop className="h-4 w-4" /> Enroll Now
                </button>
                <a
                  href={`#${c.id}-details`}
                  className="text-sm text-white/70 hover:text-white"
                >
                  View details
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
