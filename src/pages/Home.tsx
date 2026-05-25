import { Link } from "react-router-dom";
import { ArrowRight, Database, ClipboardList, FileBarChart, LineChart, Sparkles, Star, Scale, Megaphone, BarChart3, Briefcase } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { AnimatedNumber } from "@/components/site/AnimatedNumber";

const HERO_IMG = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85";
const CTA_IMG = "https://images.unsplash.com/photo-1497366754035-f200968a5db4?w=1400&q=80";
const T1 = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=85";
const T2 = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=85";

const Overline = ({ children }: { children: React.ReactNode }) => (
  <p className="overline mb-4">{children}</p>
);

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-canvas pt-32 lg:pt-40 pb-12 lg:pb-16 overflow-hidden">
        <div className="container-page grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <Reveal><Overline>Fractional Finance Services</Overline></Reveal>
            <Reveal delay={0.05}>
              <h1 className="h1 text-navy">
                Fractional Finance Services for <span className="accent-word">Service-Based Companies</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead mt-5 max-w-xl">
                We partner with service-based businesses generating $2M–$30M in revenue to optimize their
                systems, strategy, and profitability.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-7 flex flex-col sm:flex-row flex-wrap gap-3">
                <Link to="/contact" className="btn-primary w-full sm:w-auto justify-center">
                  Book a Free Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/services" className="btn-outline w-full sm:w-auto justify-center">See How It Works</Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <img
                src={HERO_IMG}
                alt="Modern bright workspace with natural light"
                loading="lazy"
                className="w-full aspect-[4/3] object-cover rounded-2xl"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white section-pad">
        <div className="container-page">
          <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { v: 50, suffix: "+", label: "Years Combined Experience" },
              { v: 10, suffix: "+", label: "Industries Served" },
              { v: 95, suffix: "%+", label: "Client Satisfaction" },
              { v: 3, suffix: "", label: "Levels of Finance Support" },
            ].map((s) => (
              <StaggerItem key={s.label}>
                <p className="text-4xl lg:text-5xl font-extrabold text-navy tracking-tight">
                  <AnimatedNumber value={s.v} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-bodytext">{s.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="bg-canvas section-pad">
        <div className="container-page">
          <div className="max-w-3xl">
            <Reveal><Overline>Who We Serve</Overline></Reveal>
            <Reveal delay={0.05}>
              <h2 className="h2">
                Built for <span className="accent-word">Service-Based Businesses</span> Scaling Past $2M
              </h2>
            </Reveal>
          </div>
          <Stagger className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Scale, title: "Law Firms", body: "Track billable hours, manage trust accounts, and understand profitability by practice area." },
              { icon: Megaphone, title: "PR & Communications Firms", body: "Forecast retainer revenue, manage contractor costs, and understand campaign profitability." },
              { icon: BarChart3, title: "Marketing Agencies", body: "Track project margins, manage burn rate, and forecast growth with confidence." },
              { icon: Briefcase, title: "Consulting Firms", body: "Management and strategy consulting firms that need financial clarity to price, staff, and scale their engagements profitably." },
            ].map((c) => (
              <StaggerItem key={c.title}>
                <div className="card-warm card-hover p-7 h-full">
                  <div className="icon-tile mb-5"><c.icon className="w-5 h-5" /></div>
                  <h3 className="h3 mb-2">{c.title}</h3>
                  <p className="text-sm leading-relaxed">{c.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="bg-white section-pad">
        <div className="container-page">
          <div className="max-w-3xl">
            <Reveal><Overline>How We Work</Overline></Reveal>
            <Reveal delay={0.05}>
              <h2 className="h2">
                We Build Your Financial <span className="accent-word">Infrastructure</span> from the Ground Up
              </h2>
            </Reveal>
          </div>

          <Stagger className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              { icon: Database, title: "Data Capture & Foundation", body: "AR, AP, expense categorization, Dext/Hubdoc, Plooto." },
              { icon: ClipboardList, title: "Monthly Close & Compliance", body: "Bank recs, accruals, journal entries, financial statements." },
              { icon: FileBarChart, title: "Reporting & Insights", body: "Management reports, Power BI dashboards, KPI tracking." },
              { icon: LineChart, title: "FP&A & Forecasting", body: "Annual budgets, rolling forecasts, scenario modeling." },
              { icon: Sparkles, title: "Strategic Advisory", body: "Board guidance, growth strategy, M&A, capital raising." },
            ].map((p, i) => (
              <StaggerItem key={p.title}>
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-cardwarm border border-[hsl(var(--border-warm))] flex items-center justify-center text-amber mb-4 shadow-sm">
                    <p.icon className="w-6 h-6" />
                  </div>
                  <p className="overline mb-1">Phase {i + 1}</p>
                  <h3 className="h3 mb-2 leading-snug">{p.title}</h3>
                  <p className="text-sm leading-relaxed">{p.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-canvas section-pad">
        <div className="container-page">
          <div className="max-w-3xl">
            <Reveal><Overline>Client Stories</Overline></Reveal>
            <Reveal delay={0.05}>
              <h2 className="h2">What Our <span className="accent-word">Clients</span> Say</h2>
            </Reveal>
          </div>
          <Stagger className="mt-10 grid md:grid-cols-2 gap-5">
            {[
              {
                photo: T1,
                quote: "Working with TheCFO.Site gave us a senior finance team without the overhead of a full CFO hire. They mapped our processes, fixed the gaps, and now we run on real numbers.",
                name: "Jean Carlson", title: "Manager",
              },
              {
                photo: T2,
                quote: "Their collaborative approach is what sets them apart. We don't get one person — we get a full team of experts working on our business across every layer of finance.",
                name: "Louis Rios", title: "Manager",
              },
            ].map((t) => (
              <StaggerItem key={t.name}>
                <div className="card-warm p-7 h-full">
                  <div className="flex items-center gap-1 mb-4 text-amber">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="italic text-bodytext leading-relaxed">"{t.quote}"</p>
                  <div className="mt-6 flex items-center gap-3">
                    <img src={t.photo} alt={t.name} loading="lazy" className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <p className="text-sm font-semibold text-navy">{t.name}</p>
                      <p className="text-xs text-bodytext">{t.title}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative section-pad overflow-hidden">
        <div className="absolute inset-0 bg-navy">
          <img src={CTA_IMG} alt="" loading="lazy" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="relative container-page text-white">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal><p className="overline mb-4">Ready to Scale?</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="h2 text-white">Let's Build Your <span className="accent-word">Financial Foundation</span></h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-white/80 leading-relaxed text-lg">
                Book a free 30-minute discovery call. We'll discuss your challenges, where you want to go,
                and whether we're the right fit. No obligation, no pressure.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3 justify-center">
                <Link to="/contact" className="btn-on-dark w-full sm:w-auto justify-center">
                  Book a Free Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/services" className="btn-ghost-dark w-full sm:w-auto justify-center">See How We Work</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
