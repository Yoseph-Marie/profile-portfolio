import { ArrowRight, Mail } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 -z-10" />

      <div className="max-w-4xl mx-auto text-center animate-fade-in-up">

        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono font-medium text-emerald-400 bg-emerald-950/50 border border-emerald-800/60 rounded-full w-fit mb-8 mx-auto">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for Cybersecurity &amp; Network Engineer Roles
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-[0.95] tracking-tighter">
          Yoseph Marie Mengistu
        </h1>

        <div className="flex flex-col gap-6 mb-12 items-center">
          <div className="animate-fade-in-up">
            <span className="text-xl sm:text-2xl lg:text-4xl font-bold bg-primary/10 text-primary px-8 py-3 rounded-2xl border border-primary/20 backdrop-blur-md inline-block">
              Chief Technology Officer (CTO)  For Network & Security Engineering Dep't
            </span>
          </div>
        </div>

        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Computer Engineering graduate from{" "}
          <strong className="text-foreground">Bahir Dar University</strong>.
          <br />
          <strong className="text-foreground">Bahir Dar Institute of Technology</strong>. 
          Proven technical leader and architect with deep hands-on experience designing and securing enterprise network and 
          infrastructure solutions across the financial, banking, and government sectors. 
          Specializing in Fortinet security fabrics, HSM deployments, SIEM systems, and resilient virtualization.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="#experience"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
          >
            Explore Deployments <ArrowRight size={20} />
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors flex items-center gap-2"
          >
            Get in Touch <ArrowRight size={20} />
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          <Link
            href="https://github.com/Yoseph-Marie"
            className="p-3 rounded-lg bg-card hover:bg-card/80 transition-colors text-muted-foreground hover:text-accent flex items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <svg
              className="size-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </Link>
          <Link
            href="https://linkedin.com/in/yoseph-marie-mengistu"
            className="p-3 rounded-lg bg-card hover:bg-card/80 transition-colors text-muted-foreground hover:text-accent flex items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <svg
              className="size-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </Link>
          <Link
            href="mailto:yosephmarie716@gmail.com"
            className="p-3 rounded-lg bg-card hover:bg-card/80 transition-colors text-muted-foreground hover:text-accent"
            aria-label="Email Contact"
          >
            <Mail size={24} />
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-2 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-muted-foreground rounded-full animate-glow" />
          </div>
        </div>
      </div>
    </section>
  )
}