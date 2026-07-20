"use client"

import { useState } from "react"
import { Download, FileText, Check, ArrowRight } from "lucide-react"
import { withBasePath } from "../lib/utils"

export default function ResumeDownload() {
  const [downloadedFormat, setDownloadedFormat] = useState<string | null>(null)

  const handleDownloadTrigger = (format: string) => {
    setDownloadedFormat(format)
    // Clear checkmark interaction state loop back to standard icon after delay
    setTimeout(() => setDownloadedFormat(null), 3000)
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-3xl mx-auto rounded-xl border border-border bg-card/50 p-6 md:p-8 shadow-md">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          
          {/* Left Side: Context Metadata */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Verified Architecture Stack
            </div>
            <h3 className="text-xl font-bold text-foreground tracking-tight">
              Curriculum Vitae / Technical Resume
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              Review comprehensive engineering matrices, production infrastructure deployments, and verified platform credentials.
            </p>
            <div className="text-xs text-muted-foreground/70 pt-1">
              Last optimized: <span className="font-medium text-foreground">July 2026</span>
            </div>
          </div>

          {/* Right Side: Action Matrix */}
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 min-w-[240px]">
            
            {/* Primary Action: Functional PDF Anchor Download Link */}
            <a
              href={withBasePath("/Yoseph_Marie_CV.pdf")}
              download="Yoseph_Marie_CV.pdf"
              onClick={() => handleDownloadTrigger("PDF")}
              className="flex-1 flex items-center justify-between gap-3 px-5 py-3.5 bg-accent hover:bg-accent/90 text-accent-foreground font-medium rounded-lg transition-all duration-200 group shadow-sm active:scale-[0.98] text-center decoration-transparent"
            >
              <div className="flex items-center gap-3 text-left">
                <FileText size={18} className="opacity-90 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="block text-sm font-semibold leading-none">Download CV</span>
                  <span className="text-[10px] opacity-70 font-mono">PDF format • 142 KB</span>
                </div>
              </div>
              {downloadedFormat === "PDF" ? (
                <Check size={16} className="text-emerald-300 animate-scale-in animate-none" />
              ) : (
                <Download size={16} className="opacity-70 group-hover:translate-y-0.5 transition-transform" />
              )}
            </a>

            {/* Secondary Action: Functional DOCX Alternative Anchor Link */}
            <a
              href={withBasePath("/Yoseph_Marie_CV.docx")}
              download="Yoseph_Marie_CV.docx"
              onClick={() => handleDownloadTrigger("DOCX")}
              className="flex items-center justify-center gap-2 px-4 py-3.5 border border-border bg-background/60 hover:bg-muted/50 text-foreground font-medium text-sm rounded-lg transition-colors duration-200 active:scale-[0.98] font-mono text-xs opacity-80 decoration-transparent"
            >
              {downloadedFormat === "DOCX" ? (
                <Check size={14} className="text-emerald-500" />
              ) : (
                <span>DOCX</span>
              )}
            </a>
            
          </div>

        </div>

        {/* Inline ATS Optimization Note */}
        <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-2 text-xs text-muted-foreground">
          <ArrowRight size={12} className="text-accent" />
          <span>Engineered with standard structure for parsing accuracy across enterprise recruitment gateways.</span>
        </div>
      </div>
    </section>
  )
}