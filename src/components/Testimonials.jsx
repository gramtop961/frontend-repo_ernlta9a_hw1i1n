import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ayesha Khan",
    role: "Front-end Graduate",
    text:
      "I built my first React app in week 3 and landed two freelance projects within a month! Highly recommend Abdullah’s practical approach.",
  },
  {
    name: "Hassan Ali",
    role: "SEO Trainee",
    text:
      "We ranked a local business from page 5 to top 3 in 6 weeks. The hands-on assignments and audits made all the difference.",
  },
  {
    name: "Maria Iqbal",
    role: "Full Stack Student",
    text:
      "Clear explanations, real-world projects, and continuous feedback. The best investment I’ve made in my career.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
          Student Testimonials
        </h2>
        <p className="mt-2 text-white/70">What our learners say about the academy</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
            >
              <div className="flex items-center gap-1 text-[#FFD166]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-3 text-white/80">“{t.text}”</blockquote>
              <figcaption className="mt-4 text-sm text-white/60">
                {t.name} • {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
