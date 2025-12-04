import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Shield, Coins, ImageIcon, Search } from "lucide-react"

const projects = [
  {
    title: "DeFi Staking Platform",
    description:
      "A secure staking protocol with multi-asset support, time-locked rewards, and comprehensive slashing protection mechanisms.",
    tags: ["Solidity", "Ethereum", "Next.js", "Foundry"],
    icon: Coins,
    color: "#0ea5e9",
    github: "#",
    demo: "#",
  },
  {
    title: "Smart Contract Vulnerability Scanner",
    description:
      "An automated security analysis tool that detects common vulnerabilities including reentrancy, integer overflow, and access control issues.",
    tags: ["Python", "Slither", "Foundry", "React"],
    icon: Search,
    color: "#14b8a6",
    github: "#",
    demo: "#",
  },
  {
    title: "NFT Marketplace",
    description:
      "A gas-optimized marketplace with royalty enforcement, lazy minting, and auction functionality built on ERC-721A.",
    tags: ["Solidity", "IPFS", "Next.js", "Hardhat"],
    icon: ImageIcon,
    color: "#a78bfa",
    github: "#",
    demo: "#",
  },
]

const auditHighlights = [
  { protocol: "CrossChain Bridge Protocol", findings: "3 Critical, 5 High", saved: "$2M+" },
  { protocol: "Lending Protocol X", findings: "1 Critical, 8 Medium", saved: "$500K+" },
  { protocol: "DEX Aggregator", findings: "2 High, 4 Medium", saved: "$300K+" },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            <span className="gradient-text">Projects & Portfolio</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Building secure, scalable decentralized applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group glass-card rounded-3xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div
                className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{ backgroundColor: `${project.color}15` }}
              >
                <project.icon className="h-7 w-7" style={{ color: project.color }} />
              </div>

              <h3 className="mb-2 text-xl font-bold text-foreground">{project.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{project.description}</p>

              {/* Tags */}
              <div className="mb-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
                  <a href={project.github}>
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button size="sm" className="flex-1 gradient-btn text-white border-0" asChild>
                  <a href={project.demo}>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Security Audits Section */}
        <div id="audits" className="mt-20">
          <div className="mb-10 text-center">
            <h3 className="mb-4 text-2xl font-bold sm:text-3xl">
              <span className="gradient-text">Security Audit Highlights</span>
            </h3>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Protecting protocols and their users through thorough security analysis
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6 sm:p-8">
            <div className="grid gap-6 md:grid-cols-3">
              {auditHighlights.map((audit, index) => (
                <div
                  key={index}
                  className="relative rounded-2xl bg-secondary/50 p-6 transition-colors hover:bg-secondary"
                >
                  <div className="mb-3 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-[#0ea5e9]" />
                    <span className="font-semibold text-foreground">{audit.protocol}</span>
                  </div>
                  <div className="space-y-1 text-sm">
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Findings:</span> {audit.findings}
                    </p>
                    <p className="text-[#14b8a6] font-medium">Potential Value Saved: {audit.saved}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Button className="gradient-btn text-white border-0 px-8">
                <Shield className="mr-2 h-4 w-4" />
                View Full Audit Reports
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
