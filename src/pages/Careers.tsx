import { Globe, GraduationCap, DollarSign, Users, ArrowRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";

const benefits = [
  { icon: Globe, title: "Primarily Remote", body: "Work from anywhere. We've been remote-first since day one." },
  { icon: GraduationCap, title: "Growth-First", body: "Certifications paid for, mentorship built into your week." },
  { icon: DollarSign, title: "Competitive Pay", body: "Market-rate compensation with profit-sharing for senior roles." },
  { icon: Users, title: "Variety", body: "Work with 10+ industries — never get bored." },
];

export default function Careers() {
  return (
    <>
      {/* HERO — only this page allows navy hero per spec */}
      <section className="bg-navy text-white pt-36 lg:pt-40 pb-20 lg:pb-24">
        <div className="container-page max-w-4xl">
          <Reveal><p className="overline mb-4">Join Us</p></Reveal>
          <Reveal delay={0.05}>
            <h1 className="h1 text-white">
              Join a Team That's Redefining <span className="accent-word">Financial Leadership</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-white/75 mt-6 max-w-2xl text-lg leading-relaxed">
              Senior finance work, primarily remote, with the variety only fractional work can offer.
            </p>
          </Reveal>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-canvas section-pad">
        <div className="container-page">
          <Reveal><p className="overline mb-4">Why Join Us</p></Reveal>
          <Reveal delay={0.05}><h2 className="h2 mb-10">A Better Way to <span className="accent-word">Practice Finance</span></h2></Reveal>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b) => (
              <StaggerItem key={b.title}>
                <div className="card-warm card-hover p-7 h-full">
                  <div className="icon-tile mb-5"><b.icon className="w-5 h-5" /></div>
                  <h3 className="h3 mb-2">{b.title}</h3>
                  <p className="text-sm leading-relaxed">{b.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* GENERAL APPLICATION */}
      <section className="bg-white section-pad">
        <div className="container-page max-w-2xl">
          <Reveal><p className="overline mb-4">General Application</p></Reveal>
          <Reveal delay={0.05}><h2 className="h2 mb-3">Don't See Your <span className="accent-word">Role?</span></h2></Reveal>
          <Reveal delay={0.1}><p className="lead mb-10">Tell us about yourself. We're always looking for senior finance talent.</p></Reveal>

          <Reveal delay={0.15}>
            <form
              onSubmit={(e) => { e.preventDefault(); alert("Application submitted — thanks!"); }}
              className="card-warm p-8 space-y-5"
            >
              {[
                { label: "Full Name", type: "text", req: true },
                { label: "Email", type: "email", req: true },
                { label: "Role of Interest", type: "text", req: false },
                { label: "LinkedIn URL", type: "url", req: false },
              ].map((f) => (
                <div key={f.label}>
                  <label className="block text-sm font-semibold text-navy mb-2">{f.label}{f.req && <span className="text-amber"> *</span>}</label>
                  <input
                    type={f.type} required={f.req}
                    className="w-full px-4 py-3 rounded-lg border border-[hsl(var(--border-warm))] bg-white focus:outline-none focus:border-amber"
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Resume</label>
                <input type="file" className="w-full text-sm" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-[hsl(var(--border-warm))] bg-white focus:outline-none focus:border-amber resize-none" />
              </div>
              <button className="btn-primary w-full">Submit Application <ArrowRight className="w-4 h-4" /></button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
