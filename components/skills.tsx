const skillCategories = [
  {
    category: "Cybersecurity & Security Platforms",
    skills: [
      "FortiGate Firewall",
      "FortiManager",
      "FortiAnalyzer",
      "FortiSIEM",
      "FortiNAC",
      "FortiWeb (WAF)",
      "FortiEMS (ZTNA)",
      "FortiADC",
      "FortiSASE",
      "F5 Load Balancer",
      "Cisco Firepower (FTD)",
      "Firepower Management (FMC)",
      "Cisco Web Security (WSA)",
    ],
  },
  {
    category: "Data Protection & Cryptography",
    skills: [
      "Thales payShield 10K HSM",
      "Thales Monitor",
      "Thales Manager",
      "Trusted Management Devices (TMD)",
      "Hardware Security Modules Deployment",
      "Key Management & Provisioning",
    ],
  },
  {
    category: "Network & Datacenter Infrastructure",
    skills: [
      "Enterprise Network Design & Migration",
      "Routing & Switching Technologies",
      "Cisco Nexus Switches",
      "Cisco UCS Manager & Blade Servers",
      "Cisco Fabric Interconnect",
      "Arista SDN Infrastructure",
      "Network Load Balancing & HA",
    ],
  },
  {
    category: "Virtualization & Storage Administration",
    skills: [
      "VMware ESXi Hypervisor",
      "VMware vCenter Server",
      "NetApp Clustered Storage",
      "Disaster Recovery (DR) Readiness",
      "HCI & Data Protection Solutions",
      "System Migration Workflows",
    ],
  },
  {
    category: "Security Operations & Monitoring",
    skills: [
      "SolarWinds NPM, NCM & NTA",
      "SolarWinds SAM & IPAM",
      "Vulnerability Assessment & Risk Analysis",
      "Security Incident Investigation",
      "Firewall Policy Optimization",
      "Kali Linux & Ethical Hacking",
    ],
  },
  {
    category: "Systems, Automation & Programming",
    skills: [
      "Python (Automation Scripting)",
      "Bash Scripting",
      "Linux/UNIX Systems",
      "Windows Server & Client Environments",
    ],
  },
  {
    category: "Consulting & Executive Leadership",
    skills: [
      "Client Requirements Analysis",
      "Solution Design & Architecture",
      "Technical Documentation & Reporting",
      "Customer Training & Knowledge Transfer",
      "Project Coordination",
      "Presales Technical Presentations",
    ],
  },
  {
    category: "Languages",
    skills: [
      "Amharic (Native)",
      "English (Fluent)",
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-foreground">Technical Skills</h2>
        <p className="text-muted-foreground mb-12 max-w-3xl">
          A comprehensive breakdown of my engineering capabilities across cryptographic platforms, secure transport matrices, automation, and organizational leadership.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg border border-border bg-card/40 hover:border-primary/30 transition-colors flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-accent mb-4 border-b border-border/40 pb-2">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-full bg-accent/5 text-accent border border-accent/20 text-xs sm:text-sm font-medium hover:border-primary hover:text-primary hover:bg-primary/5 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}