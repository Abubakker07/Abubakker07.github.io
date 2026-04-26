"use client" // Make sure this is at the very top if you are using Next.js App Router

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { 
  ExternalLink, 
  Github, 
  Car, 
  Gamepad2, 
  CircleDollarSign, 
  Play, 
  X 
} from "lucide-react"

const projects = [
  {
    title: "Rock Paper Scissors Game",
    description:
      "A classic game of Rock, Paper, Scissors. This project was created in 2023 as part of my early web development learning journey.",
    tags: ["HTML", "CSS", "JavaScript"],
    icon: Gamepad2,
    color: "#0ea5e9",
    github: "https://github.com/Abubakker07/rock-paper-scissors-game",
    demoLink: "https://abubakker07.github.io/rock-paper-scissors-game/", 
    // Live web link, so no video needed
  },
  {
    title: "NammaRide - Ride Simulator",
    description:
      "NammaRide is a native Android ride-hailing simulator engineered to tackle real-world transit challenges across major transit hubs in Bangalore.",
    tags: ["Kotlin", "Jetpack Compose", "PHP", "MySQL", "Firebase", "Railway"],
    icon: Car,
    color: "#14b8a6",
    github: "https://github.com/Abubakker07/NammaRide-Android",
    // Added video path instead of web link
    videoSrc: "/videos/nammaride-demo.mp4", 
  },
  {
    title: "Crypto Mining Profitability Calculator",
    description:
      "A Windows desktop application that calculates the potential profitability of cryptocurrency mining.",
    tags: ["VB.NET", "MySQL", "Visual Studio", "CoinGecko"],
    icon: CircleDollarSign,
    color: "#a78bfa",
    github: "https://github.com/Abubakker07/crypto-calculator-project",
    // Added video path instead of web link
    videoSrc: "/videos/crypto-calculator-demo.mp4", 
  },
]

export function ProjectsSection() {
  // State to handle the video modal
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Building secure, scalable full-stack applications
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
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                
                {/* Conditionally render Video Trigger OR External Link */}
                {project.videoSrc ? (
                  <Button 
                    size="sm" 
                    className="flex-1 gradient-btn text-white border-0 cursor-pointer" 
                    onClick={() => setActiveVideo(project.videoSrc as string)}
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Watch Demo
                  </Button>
                ) : (
                  <Button size="sm" className="flex-1 gradient-btn text-white border-0" asChild>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Overlay */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setActiveVideo(null)} // Close when clicking outside
        >
          <div 
            className="relative w-full max-w-4xl bg-[#0a0a0a] rounded-2xl overflow-hidden shadow-2xl border border-secondary/50"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the video box
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b border-secondary/30">
              <h3 className="font-semibold text-foreground">Project Demonstration</h3>
              <button 
                onClick={() => setActiveVideo(null)} 
                className="text-muted-foreground hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            {/* Video Player */}
            <div className="aspect-video w-full bg-black">
              <video 
                src={activeVideo} 
                controls 
                autoPlay 
                className="w-full h-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}