import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, Download, FileText, FileSpreadsheet, BarChart3, ChevronDown, Check } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";

const blogs = [
  { tag: "Metrics", title: "The 5 Financial Metrics Every Service Firm Must Track Past $2M", excerpt: "From gross margin per client to cash conversion cycles — the metrics that actually predict your next stage.", read: "6 min", date: "Apr 2026" },
  { tag: "CFO 101", title: "Why Your Bookkeeper Can't Replace a CFO", excerpt: "The clear lines between bookkeeping, controllership, and CFO work — and how to know what your firm needs.", read: "5 min", date: "Mar 2026" },
  { tag: "Cash Flow", title: "How to Build a 13-Week Cash Flow Forecast", excerpt: "A step-by-step playbook for the most important short-term planning tool growing firms can build.", read: "8 min", date: "Mar 2026" },
  { tag: "Dashboards", title: "KPI Dashboards for Agency Owners: A Complete Guide", excerpt: "What to track, how to visualize it, and the cadence to review it with your leadership team.", read: "9 min", date: "Feb 2026" },
  { tag: "Hiring", title: "When Is It Time to Hire a Fractional CFO?", excerpt: "Five inflection points when bringing in CFO-level help unlocks more value than it costs.", read: "4 min", date: "Feb 2026" },
];

const guides = [
  { icon: FileText, title: "CFO Readiness Checklist", desc: "12-page PDF", bullets: ["50-point readiness audit", "Roles & responsibilities map", "Stage-by-stage rollout plan"] },
  { icon: FileSpreadsheet, title: "Cash Flow Forecast Template", desc: "Excel workbook", bullets: ["13-week rolling model", "Scenario toggles", "Bank balance tracker"] },
  { icon: BarChart3, title: "KPI Dashboard Template", desc: "Power BI / Excel", bullets: ["Service-firm KPI library", "Drill-down by client/project", "Monthly review template"] },
];

const faqs = [
  { q: "How is TheCFO.Site different from a bookkeeper?", a: "Bookkeepers record what happened. We interpret what it means, build the systems and dashboards your leadership team needs, and partner on what to do next." },
  { q: "What does a fractional CFO actually do day-to-day?", a: "We run your monthly close cycle, deliver management reports, maintain rolling forecasts, prepare board materials, and act as the financial sounding board for major decisions." },
  { q: "How long does an engagement typically last?", a: "Our average engagement is 24+ months. We're built for long-term partnership — most clients grow with us through multiple stages." },
  { q: "What size of business do you work with?", a: "Service-based businesses scaling from $2M to $30M+ in annual revenue. That's our sweet spot." },
  { q: "How quickly can you start?", a: "Onboarding typically begins within 2–4 weeks of signing. Full reporting cadence is live shortly after." },
  { q: "What accounting software do you support?", a: "QuickBooks Online, QuickBooks Advanced, and Xero. We pair them with Dext, Hubdoc, Plooto, QBO Time, and Power BI." },
  { q: "Do we need to change our current systems?", a: "Not necessarily. We do a stack review during onboarding and only recommend changes if there's clear ROI." },
  { q: "Do you work with US-based businesses?", a: "Yes. We serve clients across Canada and the United States." },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="card-warm">
      <button onClick={() => setOpen((v) => !v)} className="w-full flex items-center justify-between gap-4 p-6 text-left">
        <span className="font-bold text-navy">{q}</span>
        <ChevronDown className={`w-5 h-5 text-amber transition-transform shrink-0 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
            <p className="px-6 pb-6 text-sm leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Resources() {
  return (
    <>
      <section className="bg-canvas pt-36 lg:pt-40 pb-12 lg:pb-16">
        <div className="container-page max-w-4xl">
          <Reveal><p className="overline mb-4">Resources</p></Reveal>
          <Reveal delay={0.05}><h1 className="h1">Tools and Insights to Help You <span className="accent-word">Scale</span></h1></Reveal>
          <Reveal delay={0.1}><p className="lead mt-6 max-w-2xl">Articles, downloadable templates, and answers to the questions service-firm owners ask us most often.</p></Reveal>
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="container-page">
          <Reveal><p className="overline mb-4">Insights</p></Reveal>
          <Reveal delay={0.05}><h2 className="h2 mb-10">Latest <span className="accent-word">Articles</span></h2></Reveal>
          <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogs.map((b) => (
              <StaggerItem key={b.title}>
                <Link to="/resources/blog" className="card-warm card-hover p-6 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4 text-xs">
                    <span className="px-2.5 py-1 rounded-md bg-amber/10 text-amber font-semibold uppercase tracking-wider">{b.tag}</span>
                    <span className="text-bodytext flex items-center gap-1"><BookOpen className="w-3 h-3" /> {b.read}</span>
                  </div>
                  <h3 className="text-base font-bold text-navy leading-snug mb-3">{b.title}</h3>
                  <p className="text-sm leading-relaxed flex-1">{b.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs text-bodytext">{b.date}</span>
                    <span className="amber-link">Read Article <ArrowRight className="w-3.5 h-3.5" /></span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-canvas section-pad">
        <div className="container-page">
          <Reveal><p className="overline mb-4">Guides & Templates</p></Reveal>
          <Reveal delay={0.05}><h2 className="h2 mb-10">Free <span className="accent-word">Downloads</span></h2></Reveal>
          <Stagger className="grid md:grid-cols-3 gap-5">
            {guides.map((g) => (
              <StaggerItem key={g.title}>
                <div className="card-warm card-hover p-7 h-full flex flex-col">
                  <div className="aspect-[4/3] rounded-lg bg-navy/95 mb-5 flex items-center justify-center">
                    <g.icon className="w-12 h-12 text-amber" />
                  </div>
                  <h3 className="h3 mb-1">{g.title}</h3>
                  <p className="text-xs uppercase tracking-wider text-amber font-semibold mb-3">{g.desc}</p>
                  <ul className="space-y-2 mb-5 flex-1">
                    {g.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm"><Check className="w-4 h-4 text-amber mt-0.5 shrink-0" /><span>{b}</span></li>
                    ))}
                  </ul>
                  <Link to="/resources/guides" className="btn-primary w-full">Download Free <Download className="w-4 h-4" /></Link>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="container-page max-w-3xl">
          <Reveal><p className="overline mb-4">FAQ</p></Reveal>
          <Reveal delay={0.05}><h2 className="h2 mb-8">Common <span className="accent-word">Questions</span></h2></Reveal>
          <div className="space-y-3">
            {faqs.map((f) => <Reveal key={f.q}><FAQItem {...f} /></Reveal>)}
          </div>
          <div className="text-center mt-8">
            <Link to="/resources/faq" className="amber-link">See Full FAQ <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
