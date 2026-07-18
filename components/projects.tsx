"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

const projects = [
  {
    title: "EthSwitch S.C. – Disaster Recovery Network & Security Infrastructure Upgrade",
    description:
      "Implemented high-availability perimeter security, zero-trust client routing, and data center delivery engines to achieve automated disaster recovery readiness.",
    tags: ["FortiGate NGFW", "FortiEMS (ZTNA)", "FortiADC", "Arista SDN", "Disaster Recovery"],
    period: "Nov 2025 - Present",
    image: "/personalportfolio/ethswitch-dr.png",
    details: {
      overview:
        "Led network security deployment for EthSwitch S.C.'s mission-critical Disaster Recovery (DR) data center loop. Focused on establishing zero-trust endpoint entry points, application balancing, and automated SDN fabrics.",
      objectives: [
        "Deploy enterprise FortiGate firewalls to protect key disaster recovery processing segments.",
        "Implement FortiEMS (ZTNA) to enforce secure device validation and encrypted remote access routing.",
        "Configure FortiADC load balancers to distribute high-volume financial traffic across active recovery nodes.",
        "Support the integration of underlying Arista SDN switching topologies for automated site failovers."
      ],
      techStack: [
        "Fortinet FortiGate NGFW - Zone-based security, stateful deep packet inspection, and transit shielding",
        "FortiEMS & ZTNA - Device profile tracking, posture checks, and secure zero-trust remote access clients",
        "FortiADC, FortiManager & FortiAnalyzer - Layer-7 traffic distribution, centralized device orchestration, and threat analysis",
        "Arista SDN - Automated software-defined network fabrics engineered for rapid cross-site data mirroring"
      ],
      outcomes: [
        "Minimised manual failover windows by tuning cross-site security rules for instantaneous execution.",
        "Enforced granular access control policies across all remote corporate devices accessing the DR core.",
        "Authored complete operational deployment runbooks and engineering technical handoff documents."
      ],
      screenshots: ["/personalportfolio/ztna.png"]
    }
  },
  {
    title: "Addis Bank S.C. – Distributed FortiSIEM Maintenance & Analytics Project",
    description:
      "Engineered a centralized security information monitoring infrastructure to ingest, parse, and correlate distributed event telemetry.",
    tags: ["FortiSIEM", "Log Collection", "Event Correlation", "Threat Auditing"],
    period: "Feb 2026 - Apr 2026",
    image: "/personalportfolio/FortiSIEM.png",
    details: {
      overview:
        "Maintained and optimized the security logging architecture for Addis Bank S.C. Implemented multi-tier collection fabrics using collectors, workers, and supervisory engines to guarantee visibility across distributed systems.",
      objectives: [
        "Configure and maintain distributed FortiSIEM Supervisor, Workers, and active hardware collector lines.",
        "Optimize multi-tier security event logging, parsing, and correlation rule structures.",
        "Conduct regular platform health validation, bug troubleshooting, and hardware performance tuning."
      ],
      techStack: [
        "FortiSIEM (Supervisor/Workers/Collectors) - High-velocity security telemetry correlation framework",
        "FortiSIEM Local Linux Agents - Endpoint file integrity tracking and local OS logging capture matrices"
      ],
      outcomes: [
        "Drastically optimized data parsing profiles, reducing system alert noise via custom log overrides.",
        "Resolved intermittent connection bottlenecks between branch collectors and the core supervisor node.",
        "Delivered end-to-end technical knowledge transfer seminars directly to the bank's internal SOC division."
      ],
      screenshots: ["personalportfolio/FortiSIEM.png"]
    }
  },
  {
    title: "Bahir Dar University – Private Cloud FlexPod Architecture Deployment",
    description:
      "Unified compute blade pools, automated network fabrics, and clustered enterprise arrays into a resilient multi-tenant campus cloud platform.",
    tags: ["Cisco Nexus", "Cisco UCS Manager", "NetApp Storage", "VMware ESXi", "FlexPod Cloud"],
    period: "Dec 2025 - May 2026",
    image: "personalportfolio/FlexPod.png",
    details: {
      overview:
        "Executed data center engineering routines to maintain Bahir Dar University's private cloud infrastructure. Orchestrated raw hardware compute layers with high-capacity storage clusters using bare-metal virtualization panels.",
      objectives: [
        "Provision and configure low-latency Cisco Nexus switching fabrics across core cloud infrastructure nodes.",
        "Manage Fabric Interconnect groups and assign optimized server profiles inside Cisco UCS Manager profiles.",
        "Deploy, monitor, and troubleshoot enterprise compute blades alongside high-density NetApp storage volumes."
      ],
      techStack: [
        "Cisco Nexus Switches - High-speed internal data center transport networks with unified I/O profiles",
        "Cisco UCS Manager & Blade Chassis - Automated compute orchestration and bare-metal resource provisioning",
        "NetApp Clustered Storage - Resilient, high-density network-attached storage pipelines",
        "VMware vSphere (ESXi/vCenter) - Mission-critical bare-metal resource abstraction matrices"
      ],
      outcomes: [
        "Validated system hardware compute baselines to ensure zero degradation under high concurrent usage peaks.",
        "Isolated core administrative databases from public academic user segments using logical firewall partitioning.",
        "Created infrastructure maintenance guides covering storage replication and physical blade diagnostic maps."
      ],
      screenshots: ["personalportfolio/VMflexPod.png"]
    }
  },
  {
    title: "Premier Switch Solutions (PSS) – Core Data Center Network Modernization",
    description:
      "Architected a comprehensive security perimeter overhaul, unifying web application defense, endpoint control, and central incident tracking.",
    tags: ["FortiGate NGFW", "FortiWeb WAF", "FortiNAC", "FortiManager", "Data Center Modernization"],
    period: "Dec 2024 - Sep 2025",
    image: "personalportfolio/FortiFabric.png",
    details: {
      overview:
        "Modernized the active financial network edge for Premier Switch Solutions (PSS). Developed a multi-layered defence system separating third-party transaction pathways from core internal banking databases.",
      objectives: [
        "Analyze complex network requirements to design and implement robust perimeter FortiGate firewalls.",
        "Deploy FortiWeb WAF rules to protect web-facing financial web APIs from injection vectors.",
        "Implement FortiNAC frameworks to monitor, inventory, and restrict unauthorized devices inside the network."
      ],
      techStack: [
        "Fortinet FortiGate NGFW - Core network segmentation and deep packet boundary defense",
        "FortiWeb WAF - Layer-7 application security, deep API parsing, and automated bot prevention rules",
        "FortiNAC & FortiSIEM - Automated network access admission controls and event logging monitoring systems",
        "FortiManager & FortiAnalyzer - Multi-device configuration synchronizations and threat report dashboarding"
      ],
      outcomes: [
        "Successfully migrated production payment gateways onto updated firewalls with zero operational downtime.",
        "Achieved absolute compliance with internal audit security benchmarks for active financial switches.",
        "Delivered deep technical workshops for internal specialists covering emergency firewall recovery routines."
      ],
      screenshots: ["personalportfolio/FortinetFabric.png"]
    }
  },
  {
    title: "NIB Bank S.C. – HCI & Data Protection Security Optimization",
    description:
      "Migrated legacy filtering arrays onto updated firewall policies to secure newly deployed Hyperconverged Infrastructure.",
    tags: ["FortiGate NGFW", "Policy Migration", "HCI Security", "Access Control"],
    period: "Jan 2025 - Feb 2025",
    image: "personalportfolio/FortiGate.png",
    details: {
      overview:
        "Provided dedicated security integration for NIB Bank's core Hyperconverged Infrastructure (HCI) and data preservation environment. Streamlined old security rules into clean, low-latency inspection structures.",
      objectives: [
        "Execute FortiGate firewall configurations, target asset rule migrations, and system optimizations.",
        "Implement secure firewall policy transformations and advanced threat protection profiles.",
        "Perform deep security routing validation, platform load testing, and direct post-migration support."
      ],
      techStack: [
        "Fortinet FortiGate NGFW - Boundary separation, low-latency traffic processing, and custom inspection profiles",
        "HCI Interconnect Ports - Hardened data links optimized to prevent cross-segment boundary hopping"
      ],
      outcomes: [
        "Optimized firewall rule matching times by rewriting duplicate inherited legacy filtering rules.",
        "Secured critical host replication segments against external application-layer injection threats.",
        "Delivered production deployment documentation highlighting structural configurations and failover paths."
      ],
      screenshots: ["personalportfolio/FG.png"]
    }
  },
  {
    title: "Abay Bank S.C. – Thales payShield 10K HSM Secure Deployment",
    description:
      "Provisioned specialized payment processing cryptographic hardware to isolate master keys and validate card clearance cycles.",
    tags: ["Thales payShield", "Hardware Security Module", "TMD Configuration", "Financial Cryptography"],
    period: "Jun 2024 - Apr 2025",
    image: "personalportfolio/PayshieldM.png",
    details: {
      overview:
        "Deployed the core cryptographic security anchor for Abay Bank's clearing platform. Configured hardware security modules (HSM) to safely execute real-time transaction validation, PIN translation, and card verification loops.",
      objectives: [
        "Install and set up dual hardware-isolated Thales payShield 10K modules inside production environments.",
        "Configure Trusted Management Devices (TMD) using local smartcards for safe key component separation.",
        "Deploy Thales Monitor and Thales Manager platforms to establish real-time operational health tracking."
      ],
      techStack: [
        "Thales payShield 10K - Enterprise payment processing host security acceleration hardware",
        "Trusted Management Device (TMD) - Smartcard-based hardware utility for secure split-knowledge key loading",
        "Thales Monitor & Manager - Diagnostic health panels, exception handling triggers, and syslog collection units"
      ],
      outcomes: [
        "Achieved full compliance with international transaction clearing audits for core credit and debit channels.",
        "Built a resilient, high-availability twin-chassis module layout to ensure continuous automated system uptime.",
        "Conducted structured training workshops for internal engineering leads covering master key loading routines."
      ],
      screenshots: ["personalportfolio/HSM.png"]
    }
  },
  {
    title: "Sidama Bank S.C. – Network Security Firewall Project",
    description:
      "Designed and deployed enterprise security zones to isolate internal banking resources across multiple branches.",
    tags: ["FortiGate NGFW", "Security Assessments", "Access Controls", "Network Segmentation"],
    period: "Feb 2024 - Jul 2024",
    image: "personalportfolio/FortiGate.png",
    details: {
      overview:
        "Designed and implemented perimeter network security lines for Sidama Bank S.C. Developed granular security models to protect core processing applications from standard user networks.",
      objectives: [
        "Conduct comprehensive security architecture assessments and collect functional business requirement limits.",
        "Design and implement enterprise FortiGate firewall components at data center edge limits.",
        "Configure fine-grained security policies, application control rules, and explicit network access lists."
      ],
      techStack: [
        "Fortinet FortiGate NGFW - Enterprise edge boundary protection and internal vDOM segmenting",
        "Fortinet OS Engine - Deep inspection processing engines with automated signature update streams"
      ],
      outcomes: [
        "Reduced potential system exposure by enforcing strict firewall zoning models between operational layers.",
        "Built complete architectural visibility structures, highlighting traffic flows across external nodes.",
        "Delivered complete post-deployment runbooks to help internal IT teams manage day-to-day policy additions."
      ],
      screenshots: ["personalportfolio/FG.png"]
    }
  },
  {
    title: "Ethiopian Agricultural Transformation Agency (ATA) – DR & Telepresence Security Project",
    description:
      "Hardened corporate web proxy platforms to enforce strict content filtering, data loss prevention, and secure video collaboration spaces.",
    tags: ["Web Security Appliance", "Security Hardening", "Disaster Recovery", "Content Filtering"],
    period: "Sep 2023 - Aug 2024",
    image: "personalportfolio/WSA.png",
    details: {
      overview:
        "Secured outbound web traffic channels and remote web services for the Ethiopian Agricultural Transformation Agency (ATA). Implemented robust filtering proxies to safeguard core disaster recovery portals.",
      objectives: [
        "Install, configure, and initialize enterprise Web Security Appliance (WSA) hardware nodes.",
        "Execute end-to-end proxy software hardening, threat landscape checks, and production service tuning.",
        "Provide dedicated technical input to support core organizational disaster recovery readiness operations."
      ],
      techStack: [
        "Cisco Web Security Appliance (WSA) - High-throughput web traffic proxies, URL categorization, and layer-4 filtering",
        "Disaster Recovery Infrastructure Links - Hardened connection profiles for high-definition telepresence communication"
      ],
      outcomes: [
        "Protected internal systems against web-based malware by routing traffic through high-speed checking proxies.",
        "Ensured secure video link channels for remote organizational coordination during disaster recovery tests.",
        "Authored step-by-step user administration guides and technical configuration reference maps."
      ],
      screenshots: ["personalportfolio/WSAConfig.png"]
    }
  },
  {
    title: "Awash Insurance Company S.C. – Network Monitoring & Visibility Project",
    description:
      "Built a unified telemetry monitoring center to capture real-time performance metrics, network configs, and bandwidth utilization profiles.",
    tags: ["SolarWinds NPM", "SolarWinds NCM", "Bandwidth Analytics (NTA)", "SAM", "IPAM Platform"],
    period: "Aug 2023 - Dec 2024",
    image: "personalportfolio/SolarWinds.png",
    details: {
      overview:
        "Engineered an enterprise-wide network orchestration and infrastructure tracking system for Awash Insurance Company S.C. Unified tracking across distributed branch networks into a single dashboard.",
      objectives: [
        "Deploy SolarWinds Network Performance Monitor (NPM) and Network Configuration Manager (NCM) platforms.",
        "Implement NetFlow Traffic Analyzer (NTA) modules alongside Server & Application Monitor (SAM) engines.",
        "Configure IP Address Management (IPAM) pipelines to streamline automated resource tracking."
      ],
      techStack: [
        "SolarWinds Platform (NPM/NCM) - Multi-node performance tracking dashboards and automated hardware configuration backups",
        "SolarWinds NTA & SAM - NetFlow bandwidth usage analysis engines and multi-tier server stack diagnostic applications",
        "SolarWinds IPAM - Centralized IP space tracking dashboards with automated subnet discovery sweeps"
      ],
      outcomes: [
        "Drastically improved infrastructure visibility, reducing fault identification times via real-time alerting.",
        "Automated device configuration backup tasks across all core enterprise routers and distribution switches.",
        "Delivered complete dashboard operational runbooks directly to the internal network administration teams."
      ],
      screenshots: ["personalportfolio/SolarWindsNPM.png"]
    }
  },
  {
    title: "AEMFI – Core Banking Data Center Hosting Project",
    description:
      "Provisioned unified firewall protection layers to safeguard multi-tenant microfinance core banking platforms hosted inside central data spaces.",
    tags: ["Cisco FTD", "Firepower Management (FMC)", "Data Center Hosting", "Multi-Tenant Security"],
    period: "Jun 2023 - Sep 2024",
    image: "personalportfolio/FTD.png",
    details: {
      overview:
        "Provided advanced implementation support for the Association of Ethiopian Microfinance Institutions (AEMFI) data center hosting platform. Managed security policies to protect critical shared accounting engines.",
      objectives: [
        "Configure and support Cisco Firepower Threat Defense (FTD) next-generation hardware firewalls.",
        "Deploy Cisco Firepower Management Center (FMC) appliances to centralize access rules.",
        "Troubleshoot active connection anomalies, manage patch levels, and provide ongoing infrastructure support."
      ],
      techStack: [
        "Cisco Firepower Threat Defense (FTD) - High-throughput multi-tenant perimeter security boundaries",
        "Cisco Firepower Management Center (FMC) - Unified policy control panels, rule synchronization, and event collection dashboard systems"
      ],
      outcomes: [
        "Maintained continuous uptime across shared multi-tenant microfinance core banking hosting segments.",
        "Streamlined edge routing definitions by grouping tenant access rules into clear, distinct policy layers.",
        "Produced comprehensive data center implementation maps and step-by-step troubleshooting guides."
      ],
      screenshots: ["personalportfolio/FMC.png"]
    }
  }
]

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Security Eng & Infrastructure Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg border border-border hover:border-accent/50 transition-all bg-background/50 hover:bg-background/80 cursor-pointer flex flex-col justify-between"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedProject(project)}
            >
            <div>
              <div className="relative h-40 overflow-hidden bg-background/30">
                {/* Safely clean and validate the main project image path */}
                {(() => {
                  let mainSrc = project.image && project.image.trim() !== "" ? project.image.trim() : "/placeholder.svg";
                  
                  if (mainSrc !== "/placeholder.svg" && !mainSrc.startsWith("/") && !mainSrc.startsWith("http")) {
                    mainSrc = `/${mainSrc}`;
                  }
                  
                  return (
                    <Image
                      src={mainSrc}
                      alt={project.title}
                      width={500}
                      height={160}
                      className={`w-full h-full object-cover transition-transform duration-500 ${
                        hoveredIndex === index ? "scale-110" : "scale-100"
                      }`}
                    />
                  );
                })()}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>

              <div className="p-6 pb-0">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors flex-1">
                    {project.title}
                  </h3>
                  <span className="text-xs text-muted-foreground bg-primary/10 px-2 py-1 rounded whitespace-nowrap ml-2">
                    {project.period}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>

              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`text-xs px-2.5 py-1 rounded-full bg-primary/10 text-accent border border-primary/20 transition-all duration-300 ${
                        hoveredIndex === index ? "bg-primary/20 border-primary/40 scale-105" : ""
                      }`}
                      style={{
                        transitionDelay: `${i * 30}ms`
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="w-full py-2 text-sm font-medium text-accent border border-accent/30 rounded hover:bg-accent/10 transition-colors">
                  View Technical Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Unified Project Details Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-lg border border-border bg-card p-6 md:p-8 shadow-2xl">
            <button
              className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted transition-colors"
              onClick={() => setSelectedProject(null)}
            >
              <X size={20} />
              <span className="sr-only">Close Modal</span>
            </button>

            <div className="mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-accent">{selectedProject.period} Architectural Review</span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-1">{selectedProject.title}</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h4 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-2">Overview Matrix</h4>
                  <p className="text-foreground/90 leading-relaxed text-sm md:text-base">{selectedProject.details.overview}</p>
                </div>

                <div>
                  <h4 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-2">Core Technical Objectives</h4>
                  <ul className="space-y-1.5 text-sm">
                    {selectedProject.details.objectives.map((obj, i) => (
                      <li key={i} className="flex gap-2 text-foreground/80">
                        <span className="text-accent font-bold">▪</span> {obj}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-2">Quantifiable Outcomes</h4>
                  <ul className="space-y-1.5 text-sm">
                    {selectedProject.details.outcomes.map((out, i) => (
                      <li key={i} className="flex gap-2 text-foreground/80">
                        <span className="text-primary font-bold">✓</span> {out}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-3">Technology Integration</h4>
                  <div className="flex flex-col gap-2">
                    {selectedProject.details.techStack.map((tech, i) => (
                      <div key={i} className="p-3 rounded border border-border/60 bg-background/40 text-xs text-foreground/90 font-medium">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-3">Artefact Mockups</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {selectedProject.details.screenshots.map((src, i) => {
                      // 1. Initial validation for empty or malformed entries
                      let cleanedSrc = src && src.trim() !== "" ? src.trim() : "/placeholder.svg";

                      // 2. Automatically enforce the leading slash for relative assets
                      if (cleanedSrc !== "/placeholder.svg" && !cleanedSrc.startsWith("/") && !cleanedSrc.startsWith("http")) {
                        cleanedSrc = `/${cleanedSrc}`;
                      }

                      return (
                        <div key={i} className="relative h-28 rounded overflow-hidden border border-border bg-muted/20">
                          <Image 
                            src={cleanedSrc} 
                            alt="Deployment Verification Screenshot" 
                            fill 
                            className="object-cover" 
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}