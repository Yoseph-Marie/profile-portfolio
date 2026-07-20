import Link from "next/link"
import { FileText, Download, ExternalLink, BookOpen } from "lucide-react"
import { withBasePath } from "../lib/utils"

export default function Publication() {
    return (
        <section id="publication" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-background/50 backdrop-blur-3xl -z-10"></div>
            <div className="hidden md:block absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10"></div>
            <div className="hidden md:block absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary md:text-transparent md:bg-clip-text md:bg-gradient-to-r md:from-primary md:via-accent md:to-primary md:bg-300% md:animate-gradient">
                        Technical Research & Core Blueprints
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-6">
                        Documentation on enterprise network hard fencing, cryptographic operations, and automated risk analysis systems.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Featured Engineering Capstone Card */}
                    <div className="group relative bg-card/40 backdrop-blur-md rounded-2xl border border-white/10 p-1 hover:bg-card/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 lg:col-span-2 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative p-8 h-full flex flex-col md:flex-row gap-8">
                            <div className="flex-1 space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 bg-primary/20 rounded-xl text-foreground ring-1 ring-primary/50">
                                        <BookOpen size={24} />
                                    </div>
                                    <span className="px-3 py-1 rounded-full bg-primary/10 text-foreground text-sm font-semibold border border-primary/20">
                                        Computer Engineering Thesis
                                    </span>
                                    <span className="text-muted-foreground text-sm flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span>
                                        Bahir Dar University
                                    </span>
                                </div>

                                <div className="block group/title">
                                    <h3 className="text-3xl font-bold mb-3 text-foreground group-hover/title:text-primary transition-colors">
                                        Design and Optimization of Resilient Multi-Protocol Enterprise Networks
                                    </h3>
                                    <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mt-2 group-hover/title:w-32 transition-all duration-300"></div>
                                </div>

                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    Investigated failover convergence timings across hybrid OSPF and BGP topologies. Evaluated hardware-accelerated cryptographic processing pipelines to balance security overhead against sub-second packet translation windows across core network meshes.
                                </p>

                                <div className="flex flex-wrap gap-4 pt-4">
                                    <Link
                                        href={withBasePath("/thesis/engineering-network-thesis.pdf")}
                                        target="_blank"
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5"
                                    >
                                        <Download size={18} /> Download Thesis PDF
                                    </Link>
                                    <Link
                                        href="https://github.com/your-username/portfolio/tree/main/thesis"
                                        target="_blank"
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-accent/5 transition-all hover:-translate-y-0.5"
                                    >
                                        <svg
                                            className="size-[18px]"
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
                                        View Topologies
                                    </Link>
                                </div>
                            </div>

                            {/* Visual Metric Display */}
                            <div className="hidden md:flex w-1/3 items-center justify-center relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
                                <div className="relative z-10 bg-card/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl w-full rotate-3 transition-transform duration-500 group-hover:rotate-0">
                                    <div className="space-y-3 opacity-80">
                                        <div className="h-2 w-1/2 bg-muted rounded"></div>
                                        <div className="h-2 w-3/4 bg-muted rounded"></div>
                                        <div className="h-32 w-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-primary/10 flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="text-4xl font-bold text-primary mb-1">99.99%</div>
                                                <div className="text-xs text-muted-foreground uppercase tracking-wider">Uptime Target</div>
                                            </div>
                                        </div>
                                        <div className="h-2 w-full bg-muted rounded"></div>
                                        <div className="h-2 w-5/6 bg-muted rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Operational Risk Assessment Blueprint */}
                    <div className="group relative bg-card/40 backdrop-blur-md rounded-2xl border border-white/10 p-1 hover:bg-card/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative p-8 h-full flex flex-col">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2.5 bg-primary/20 rounded-xl text-foreground ring-1 ring-primary/50">
                                    <BookOpen size={24} />
                                </div>
                                <span className="px-3 py-1 rounded-full bg-primary/10 text-foreground text-sm font-semibold border border-primary/20">
                                    Deployment Deliverables
                                </span>
                                <span className="text-muted-foreground text-sm flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span>
                                    Eth-switch & BDU Banking Nodes
                                </span>
                            </div>

                            <div className="block group/title">
                                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover/title:text-primary transition-colors">
                                    Financial Infrastructure Deployment & Risk Mitigations
                                </h3>
                                <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mt-2 group-hover/title:w-32 transition-all duration-300"></div>
                            </div>

                            <p className="text-muted-foreground text-base leading-relaxed mt-4 mb-6 flex-1">
                                A hardened architectural framework blueprint mapping out threat vectors, HSM integration nodes, and strict firewall configurations. Contains actionable verification scripts to evaluate edge routing risks and prevent unauthorized clearing hops between target platform clusters.
                            </p>

                            <div className="flex flex-wrap gap-3">
                                <Link
                                    href="https://github.com/your-username/portfolio/tree/main/banking-deployments"
                                    target="_blank"
                                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5"
                                >
                                    <svg
                                        className="size-[18px]"
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
                                    View Security Tracklist
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Technical Report Card */}
                    <div className="group relative bg-card/40 backdrop-blur-md rounded-2xl border border-white/10 p-8 hover:bg-card/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <div className="flex items-start justify-between mb-6">
                            <div className="p-3 bg-accent/10 rounded-xl text-foreground ring-1 ring-accent/30">
                                <FileText size={24} />
                            </div>
                            <span className="px-3 py-1 rounded-full bg-accent/10 text-foreground text-xs font-semibold border border-accent/20">
                                Framework Specification
                            </span>
                        </div>

                        <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                            Secure API Backend Hardening Standards
                        </h3>

                        <p className="text-muted-foreground mb-8 line-clamp-3 leading-relaxed">
                            A reference blueprint mapping standard controls for Python and Node.js backend spaces. Outlines secure context isolation pipelines, algorithmic JWT authorization schemas, rate restriction variables, and deep input parameters scanning controls.
                        </p>

                        <Link
                            href={withBasePath("/docs/Backend_API_Hardening_Standards.pdf")}
                            target="_blank"
                            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-card border border-border hover:border-accent/50 hover:bg-accent/5 transition-all group-hover:shadow-lg group-hover:shadow-accent/10"
                        >
                            <Download size={18} /> Download Specifications PDF
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}