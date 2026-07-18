const professionalExperiences = [
  {
    title: "Chief Technology Officer (CTO)",
    company: "Symbol Technologies P.L.C.",
    location: "Addis Ababa, Ethiopia",
    period: "January 2026 – Present",
    description:
      "Provide strategic technical leadership and oversee the implementation of enterprise-grade cybersecurity, infrastructure modernization, and cloud solutions for banking, financial services, and government institutions.",
    highlights: [
      "EthSwitch S.C. Project: Overseeing the Disaster Recovery (DR) Network & Security Infrastructure Upgrade, deploying FortiGate infrastructure, FortiEMS (ZTNA) secure endpoints, and integrating Arista SDN technologies.",
      "Addis Bank S.C. Project: Directed the FortiSIEM Maintenance project, optimizing security monitoring, event collection, and log correlation rules across collectors and agents.",
      "Bahir Dar University Project: Managed the Private Cloud FlexPod Infrastructure Maintenance, supporting Cisco Nexus fabrics, UCS Manager, blade server environments, and NetApp clustered storage infrastructure.",
      "Formulate high-level solution designs and secure reference architectures while managing project coordination and cross-functional deployment pipelines.",
    ],
  },
  {
    title: "Cybersecurity & Network Engineer",
    company: "Symbol Technologies P.L.C.",
    location: "Addis Ababa, Ethiopia",
    period: "September 2022 – January 2026",
    description:
      "Designed, deployed, and optimized secure network infrastructures and cryptographic data protection mechanisms for major banking and public enterprise networks.",
    highlights: [
      "Premier Switch Solutions (PSS): Led the Main Data Center Network & Security Modernization, implementing the full Fortinet Security Fabric (FortiGate, FortiManager, FortiAnalyzer, FortiSIEM, FortiNAC, FortiEMS, FortiWeb).",
      "Abay Bank S.C.: Installed, configured, and hardened Thales payShield 10K Hardware Security Modules (HSMs) alongside Thales Monitor and Trusted Management Devices (TMD).",
      "Awash Insurance Company: Engineered network monitoring and operational management pipelines using SolarWinds solutions (NPM, NCM, NTA, SAM, IPAM) across distributed corporate branches.",
      "AEMFI Core Banking: Administered edge security controls, deploying Cisco Firepower Threat Defense (FTD) and Firepower Management Center (FMC) to host core banking assets securely.",
      "NIB Bank & Sidama Bank: Executed comprehensive firewall rule migrations, traffic baseline optimizations, and post-deployment operational support to elevate platform defense postures.",
      "ATA Project: Hardened application delivery environments through the setup, validation, and testing of Cisco Web Security Appliances (WSA).",
    ],
  },
]

const labProjects = [
  {
    title: "Enterprise Architecture & Defensive Labs",
    company: "Technical Research & Labs",
    location: "Addis Ababa, Ethiopia",
    period: "Continuous",
    description:
      "Maintain isolated sandboxes to execute vulnerability assessments, script logging automation, and test secure baseline implementations for enterprise tech stacks.",
    highlights: [
      "Designed automated Python scripts for parsing complex firewall traffic logs, checking configuration compliances, and speeding up incident investigations.",
      "Configured virtual test networks to simulate advanced Layer-2/Layer-3 routing protocols, access control matrices, and high-availability failover behaviors.",
      "Conducted security risk analysis, mock penetration testing exercises (Kali Linux), and system hardening validations to build optimized reference architectures.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Experience</h2>
        <p className="text-muted-foreground mb-12 max-w-3xl">
          My professional engineering trajectory, executive leadership responsibilities, and key banking-sector implementations.
        </p>

        {/* Professional Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-2 pb-2 border-b border-border/60">
            💼 Professional Experience
          </h3>
          <div className="space-y-8">
            {professionalExperiences.map((exp, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-border hover:border-primary/50 transition-colors bg-card/40"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-foreground">{exp.title}</h4>
                    <p className="text-accent font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-sm text-foreground bg-primary/20 px-3 py-1.5 rounded-full font-semibold border border-primary/40 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-4 flex items-center gap-2">📍 {exp.location}</p>

                <p className="text-muted-foreground mb-4 text-sm sm:text-base">{exp.description}</p>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-foreground/80 flex gap-3">
                      <span className="text-accent font-bold">▸</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>        
      </div>
    </section>
  )
}