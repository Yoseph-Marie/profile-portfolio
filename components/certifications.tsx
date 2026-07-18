const certifications = [
  {
    title: "Fortinet Certified Professional - Security Operations",
    issuer: "Fortinet Training Institute",
    areas: "FortiGate Administrator (7.2), FortiSIEM Administrator (6.3), Advanced Incident Detection and Security Operations",
    icon: "🛡️",
    url:"https://www.credly.com/org/fortinet/badge/fortinet-certified-professional-secure-networking"
    // You can add your verified drive or sharing link here if desired
  },
  {
    title: "Thales payShield 10K HSM Professional Engineer",
    issuer: "Thales Group",
    areas: "Hardware Security Module Installation, Security Management, Host Integration, Monitor, and Trusted Management Devices (TMD)",
    icon: "🔑",
    url:"https://www.credential.net/7d47942d-08f8-4373-8904-e3c229cf5254#acc.GBKoJanv"
  },
  {
    title: "Fortinet Certified Associate in Cybersecurity",
    issuer: "Fortinet Training Institute",
    areas: "Core Cyber Threat Landscape, Security Fabric Technologies, Network Security Essentials (NSE1 & NSE2)",
    icon: "🎓",
    url:"https://www.credly.com/org/fortinet/badge/fortinet-certified-associate-in-cybersecurity"
  },
  {
    title: "Fortinet Certified Fundamentals in Cybersecurity",
    issuer: "Fortinet Training Institute",
    areas: "Fundamental Security Concepts, Threat Mitigation Frameworks, Gateways and Access Controllers (NSE3)",
    icon: "🌐",
    url:"https://www.credly.com/org/fortinet/badge/fortinet-certified-fundamentals-in-cybersecurity"
  },
]

export default function Certifications() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Certifications & Credentials</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border hover:border-accent/50 transition-colors bg-card/50"
            >
              <div className="text-3xl mb-4">{cert.icon}</div>
              <h3 className="text-lg font-bold text-foreground mb-2">{cert.title}</h3>
              <p className="text-accent font-semibold mb-3">{cert.issuer}</p>
              <p className="text-sm text-muted-foreground mb-4">{cert.areas}</p>
              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  View Certificate
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}