import { Button } from "@/components/ui/button"
import { ArrowRight, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="mx-auto max-w-5xl text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full glass-card px-4 py-2">
          <Shield className="h-4 w-4 text-[#0ea5e9]" />
          <span className="text-sm font-medium text-foreground">Web3 Security Researcher</span>
        </div>

        {/* Main Headline */}
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="gradient-text text-balance">Securing the Decentralized Future.</span>
        </h1>

        {/* Sub-headline */}
        <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed text-balance">
          Hi, I'm <span className="font-semibold text-foreground">Mohammed Abubakker Siddiqui</span>. A Web3 Security
          Researcher & Full-Stack Developer based in Bangalore, dedicated to building and securing the next generation
          of decentralized applications.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="gradient-btn text-white border-0 px-8 py-6 text-base font-semibold hover:opacity-90 transition-opacity"
          >
            View Audits
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-base font-semibold border-2 hover:bg-secondary/50 transition-colors bg-transparent"
          >
            Contact Me
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {[
            { value: "15+", label: "Audits Completed" },
            { value: "50k+", label: "Lines Reviewed" },
            { value: "3+", label: "Years Experience" },
            { value: "5", label: "Hackathon Wins" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold gradient-text sm:text-4xl">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground">Scroll to explore</span>
          <div className="h-10 w-6 rounded-full border-2 border-muted-foreground/30 p-1">
            <div className="h-2 w-1.5 mx-auto rounded-full bg-muted-foreground/50 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
