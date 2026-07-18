import { Mail, MapPin, Phone, MessageSquare, ExternalLink } from "lucide-react"
import Link from "next/link"
import { cn } from "../lib/utils"

function TelegramOutlineIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`size-8 text-accent mx-auto mb-4 transition-transform duration-300 hover:scale-110 ${className}`}
    >
      <path d="M21.5 4.5l-3.8 15.1c-.2.8-1.1 1.1-1.7.7l-4.4-3.2-2.1 2
      c-.5.5-1.3.2-1.5-.5L7.4 14l-4.1-1.3c-.8-.2-.8-1.3-.1-1.6L20.2 3.8
      c.7-.3 1.4.4 1.3 1.1z"/>
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always open to discussing technical strategies, enterprise infrastructure projects, or cybersecurity leadership opportunities. Reach out via any of the channels below.
          </p>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <Link
              href="mailto:yosephmarie716@gmail.com"
              className="p-6 rounded-lg border border-border hover:border-accent/50 bg-background/50 hover:bg-background/80 transition-all group flex flex-col justify-center"
            >
              <Mail className="size-8 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-xs text-muted-foreground truncate w-full">yosephmarie716@gmail.com</p>
            </Link>

            <Link
              href="tel:+251939607017"
              className="p-6 rounded-lg border border-border hover:border-accent/50 bg-background/50 hover:bg-background/80 transition-all group flex flex-col justify-center"
            >
              <Phone className="size-8 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-2">Phone</h3>
              <p className="text-xs text-muted-foreground">+251 939 607 017</p>
            </Link>
            
            <Link
              href="https://wa.me/251939607017"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-lg border border-border hover:border-accent/50 bg-background/50 hover:bg-background/80 transition-all group flex flex-col justify-center"
            >
              <MessageSquare className="size-8 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-2">WhatsApp</h3>
              <p className="text-xs text-muted-foreground">Chat securely</p>
            </Link>
            
            <Link
              href="https://t.me/Joy_Marie"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-lg border border-border hover:border-accent/50 bg-background/50 hover:bg-background/80 transition-all group flex flex-col justify-center"
            >
              <TelegramOutlineIcon className="size-8 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-2">Telegram</h3>
              <p className="text-xs text-muted-foreground">@Joy_Marie</p>
            </Link>
          </div>

          {/* Location with Embedded Map Container */}
          <div className="rounded-lg border border-border bg-background/50 overflow-hidden mb-12 shadow-sm">
            <div className="p-6 flex items-center justify-center gap-3 border-b border-border bg-card/10">
              <MapPin className="size-5 text-accent" />
              <p className="text-muted-foreground font-medium text-sm sm:text-base">Addis Ababa, Ethiopia</p>
            </div>
            <div className="w-full h-64 md:h-80 relative bg-muted/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126115.11563816625!2d38.67848695000001!3d9.0094916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1711200000000!5m2!1sen!2set"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map - Addis Ababa, Ethiopia"
              />
            </div>
            <div className="p-4 text-center border-t border-border bg-card/5">
              <Link
                href="https://www.google.com/maps/place/Addis+Ababa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline text-sm inline-flex items-center gap-2 transition-colors hover:text-accent/80"
              >
                <ExternalLink size={14} /> View on Google Maps
              </Link>
            </div>
          </div>

          {/* Core Footer Social Profile Badges */}
          <div className="flex items-center justify-center gap-4">
            <Link
              href="https://github.com/Yoseph-Marie"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card border border-border hover:border-accent hover:text-accent transition-all hover:-translate-y-0.5"
            >
              <svg
                className="size-[22px]"
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
              <span className="sr-only">GitHub</span>
            </Link>
            
            <Link
              href="https://www.linkedin.com/in/yoseph-marie-mengistu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card border border-border hover:border-accent hover:text-accent transition-all hover:-translate-y-0.5"
            >
              <svg
                className="size-[22px]"
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
              <span className="sr-only">LinkedIn</span>
            </Link>
            
            <Link
              href="mailto:yosephmarie716@gmail.com"
              className="p-3 rounded-lg bg-card border border-border hover:border-accent hover:text-accent transition-all hover:-translate-y-0.5"
            >
              <Mail size={22} />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}