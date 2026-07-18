export default function Education() {
  const achievements = [
    { icon: "🎓", label: "Computer Engineer", description: "BSc Computer Engineering graduate" },
    { icon: "🖥️", label: "Virtualization Lab", description: "Enterprise infrastructure & private cloud clusters" },
    { icon: "⚙️", label: "Security Architect", description: "Hardware Security Modules & cryptographic systems" },
    { icon: "🌐", label: "Network Engineer", description: "Advanced routing protocols & firewall hardening" },
  ]

  const coursework = [
    "Computer & Network Security",
    "Advanced Network Routing",
    "Database Management Systems",
    "Data Communication & Networking",
    "Cryptography & Information Hiding",
    "Operating Systems & Administration",
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Education</h2>

        <div className="max-w-4xl space-y-8">
          <div className="p-8 rounded-lg border-2 border-accent/30 bg-card/50 hover:border-accent/60 transition-colors">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  Bachelor of Science in Computer Engineering
                </h3>
                <p className="text-lg font-semibold text-accent">Bahir Dar University</p>
                <p className="text-sm text-muted-foreground font-medium mt-1">Bahir Dar Institute of Technology</p>
              </div>
              <span className="text-sm text-muted-foreground bg-primary/10 px-4 py-2 rounded-full whitespace-nowrap">
                Graduated 2022
              </span>
            </div>

            <p className="text-sm text-muted-foreground mb-6">📍 Bahir Dar, Amhara, Ethiopia</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {achievements.map((achievement, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-background/50 border border-border/50 hover:border-accent/50 hover:bg-accent/5 transition-all group"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{achievement.icon}</div>
                  <p className="text-sm font-semibold text-foreground mb-1">{achievement.label}</p>
                  <p className="text-xs text-muted-foreground">{achievement.description}</p>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground font-mono mb-4 uppercase tracking-wider">
                Advanced Coursework & Specializations
              </p>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-colors"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Focus Areas */}
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground font-mono mb-3 uppercase tracking-wider">
                Academic Highlights
              </p>
              <ul className="space-y-2 grid md:grid-cols-2 gap-3">
                <li className="flex gap-3 text-foreground/80">
                  <span className="text-accent">▸</span>
                  <span>Rigorous engineering curriculum centered on systems architecture, digital logics, and infrastructure design</span>
                </li>
                <li className="flex gap-3 text-foreground/80">
                  <span className="text-accent">▸</span>
                  <span>Deep dive into enterprise hardware integrations, network telemetry, and distributed platform defense systems</span>
                </li>
                <li className="flex gap-3 text-foreground/80">
                  <span className="text-accent">▸</span>
                  <span>Strong theoretical foundation in cryptographic mechanisms, security policy frameworks, and routing protocol matrices</span>
                </li>
                <li className="flex gap-3 text-foreground/80">
                  <span className="text-accent">▸</span>
                  <span>Practical exploration of high-availability system designs, network administration, and automated test environments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}