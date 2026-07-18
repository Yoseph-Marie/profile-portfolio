export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Sidebar Navigation */}
          <div className="hidden md:block">
            <div className="border-l-2 border-primary pl-6 space-y-8">
              <div>
                <h3 className="font-mono text-sm text-muted-foreground mb-2">Sections</h3>
                <p className="text-lg font-semibold text-foreground">About Me</p>
              </div>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Profile</p>
                <p>Location</p>
                <p>Expertise</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2">
            <div className="space-y-6">
              <div>
                <p className="text-muted-foreground text-sm font-mono mb-4">📍 Addis Ababa, Ethiopia</p>
                <h2 className="text-3xl font-bold mb-6">About Me</h2>
              </div>

              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  I'm <strong>Yoseph Marie Mengistu</strong>, serving as the <strong>Chief Technology Officer (CTO)</strong> and lead Cybersecurity Engineer at <strong>Symbol Technologies PLC</strong>. I hold a Bachelor of Science degree in Computer Engineering from the <strong>Bahir Dar Institute of Technology, Bahir Dar University</strong>.
                </p>

                <p>
                  With four years of hands-on technical experience, my career focuses on directing and executing enterprise-grade cybersecurity, network security, and datacenter infrastructure solutions. I specialize in securing environments for major banking systems, financial consortiums, and public enterprises—ranging from multi-site Fortinet Security Fabric deployments to critical Hardware Security Module (HSM) integrations.
                </p>

                <p>
                  As an engineering leader, I bridge high-level architectural design with deep technical implementation. I possess extensive expertise across Cisco datacenter architectures, VMware clusters, and enterprise network visibility frameworks, ensuring scalable, secure, and highly available infrastructures tailored to tight regulatory and compliance requirements[cite: 1].
                </p>

                <div className="pt-4 grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-lg bg-background/50 border border-border">
                    <p className="text-xs text-foreground/70 font-mono">Professional Experience</p>
                    <p className="text-lg font-bold text-accent">4 Years</p>
                  </div>                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}