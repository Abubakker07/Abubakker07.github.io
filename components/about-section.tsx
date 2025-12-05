import { Code2, ShieldCheck, Award, Briefcase, Trophy, GraduationCap, FileCode, Database } from "lucide-react"

const skills = [
  { name: "Solidity", icon: FileCode },
  { name: "JavaScript", icon: Code2 },
  { name: "Smart Contract Auditing", icon: ShieldCheck },
  { name: "Foundry / Hardhat", icon: Database },
]

const certifications = [
  "Blockchain Basics",
  "Solidity Smart Contract Developer",
]

const experience = [
  {/*{
    year: "2024",
    title: "ETHGlobal Bangkok Finalist",
    description: "Built a cross-chain security monitoring tool",
  },
  {
    year: "2023",
    title: "Lead Security Researcher",
    description: "Independent smart contract auditing",
  },
  {
    year: "2022",
    title: "Web3 Developer Intern",
    description: "DeFi protocol development at a top firm",
  },*/}
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
            Combining deep technical expertise with a passion for blockchain security
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          {/* About Card - Large */}
          <div className="glass-card rounded-3xl p-8 md:col-span-2 lg:col-span-2 lg:row-span-2">
            <div className="flex h-full flex-col">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0ea5e9]/10">
                <ShieldCheck className="h-6 w-6 text-[#0ea5e9]" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                I'm a passionate Web3 Security Researcher with a keen eye for vulnerabilities in smart contracts and
                decentralized protocols. My journey began with a deep fascination for blockchain technology, which
                evolved into a commitment to making the decentralized ecosystem safer for everyone.
              </p>
              {/*<p className="mt-4 text-muted-foreground leading-relaxed">
                With experience auditing DeFi protocols, NFT marketplaces, and cross-chain bridges, I bring a
                comprehensive approach to security that combines manual review with advanced tooling.
              </p>*/}
            </div>
          </div>

          {/* Skills Card */}
          <div className="glass-card rounded-3xl p-6 md:col-span-1 lg:col-span-2">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#14b8a6]/10">
              <Code2 className="h-6 w-6 text-[#14b8a6]" />
            </div>
            <h3 className="mb-4 text-lg font-bold text-foreground">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
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

          {/* Certifications Card */}
          <div className="glass-card rounded-3xl p-6 md:col-span-1 lg:col-span-2">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#a78bfa]/10">
              <Award className="h-6 w-6 text-[#a78bfa]" />
            </div>
            <h3 className="mb-4 text-lg font-bold text-foreground">Certifications</h3>
            <ul className="space-y-2">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#a78bfa]" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>

          {/* Experience Timeline Card
          <div className="glass-card rounded-3xl p-6 md:col-span-2 lg:col-span-2">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0ea5e9]/10">
              <Briefcase className="h-6 w-6 text-[#0ea5e9]" />
            </div>
            <h3 className="mb-4 text-lg font-bold text-foreground">Experience</h3>
            <div className="space-y-4">
              {experience.map((exp, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#0ea5e9] to-[#14b8a6]">
                      {index === 0 ? (
                        <Trophy className="h-4 w-4 text-white" />
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
          </div>*/}
        </div>
      </div>
    </section>
  )
}
