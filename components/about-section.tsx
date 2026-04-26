import { Code2, ShieldCheck, Award, Briefcase, Trophy, GraduationCap, FileCode, Database, User2Icon, CircleUserRound, Smile, UserCheck, UserCheck2, Workflow, WebhookIcon, MonitorCheck, Monitor } from "lucide-react"

const skills = [
  { name: "Frontend - Python, React.js, Node.js, Next.js, Kotlin, Jetpack Compose, Tailwind CSS", icon: Code2 },
  { name: "Backend & DB - Node.js, PHP, MySQL, Vector Databases (Weaviate)", icon: Database },
  { name: "DevOps/Tools - Git, Docker, AI-Assisted Code Auditing, Firebase", icon: ShieldCheck },
]

const certifications = [
  "AI & Intelligence - GenAI Engineering, Prompt Engineering Bootcamp, Automation Anywhere",
  "Full Stack & Engineering - Digital Engineering (NASSCOM), Data Visualization (Python)",
]

const experience = [
  {
    year: "2025",
    title: "Full Stack Developer | Intern",
    description: "Contributed as a Full Stack Developer at Gyaankool Research Labs, delivering robust web applications through clean code and analytical problem-solving. Played a vital role in enhancing project initiatives and streamlining development workflows.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            <span className="gradient-text">About & Skills</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Combining deep technical expertise with a passion for product development.
          </p>
        </div>

        {/* Bento Grid - Simplified to a strict 2-column layout with equal row heights */}
        <div className="grid gap-6 md:grid-cols-2 auto-rows-fr">
          
          {/* About Card */}
          <div className="glass-card rounded-3xl p-6 flex flex-col h-full">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0ea5e9]/10 shrink-0">
              <Smile className="h-6 w-6 text-[#0ea5e9]" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-foreground">Who Am I?</h3>
            <p className="text-muted-foreground leading-relaxed flex-grow">
              I am a Full Stack Developer and final-year student with a passion for building scalable, end-to-end applications. 
              I bridge the gap between complex backend logic and intuitive user interfaces. 
              My approach combines traditional software engineering principles with AI-driven development to build faster, 
              smarter, and more efficient digital solutions.
            </p>
          </div>

          {/* Skills Card */}
          <div className="glass-card rounded-3xl p-6 flex flex-col h-full">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#14b8a6]/10 shrink-0">
              <Code2 className="h-6 w-6 text-[#14b8a6]" />
            </div>
            <h3 className="mb-4 text-lg font-bold text-foreground">Technical Skills</h3>
            <div className="flex flex-wrap gap-2 flex-grow">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground"
                >
                  <skill.icon className="h-3.5 w-3.5" />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Experience Timeline Card */}
          <div className="glass-card rounded-3xl p-6 flex flex-col h-full">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0ea5e9]/10 shrink-0">
              <Briefcase className="h-6 w-6 text-[#0ea5e9]" />
            </div>
            <h3 className="mb-4 text-lg font-bold text-foreground">Experience</h3>
            <div className="space-y-4 flex-grow">
              {experience.map((exp, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#0ea5e9] to-[#14b8a6]">
                      {index === 0 ? (
                        <Monitor className="h-4 w-4 text-white" />
                      ) : index === 1 ? (
                        <ShieldCheck className="h-4 w-4 text-white" />  
                      ) : (
                        <GraduationCap className="h-4 w-4 text-white" />
                      )}
                    </div>
                    {index !== experience.length - 1 && <div className="mt-2 h-full w-px bg-border" />}
                  </div>
                  <div className="pb-4">
                    <span className="text-xs font-medium text-[#0ea5e9]">{exp.year}</span>
                    <h4 className="font-semibold text-foreground">{exp.title}</h4>
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Card */}
          <div className="glass-card rounded-3xl p-6 flex flex-col h-full">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#a78bfa]/10 shrink-0">
              <Award className="h-6 w-6 text-[#a78bfa]" />
            </div>
            <h3 className="mb-4 text-lg font-bold text-foreground">Certifications</h3>
            <ul className="space-y-2 flex-grow">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#a78bfa] shrink-0" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  )
}