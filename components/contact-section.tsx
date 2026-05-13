"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import { FaGithub, FaLinkedin, FaXTwitter, FaDiscord } from "react-icons/fa6"

const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/Abubakker07",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/md-abubakker-siddiqui/",
  },
  {
    name: "X (Twitter)",
    icon: FaXTwitter,
    href: "https://x.com/abubakker_7",
  },
  {
    name: "Discord",
    icon: FaDiscord,
    href: "https://discord.com/users/1320366211418161253",
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch(
        "https://formspree.io/f/mqenjoya",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      )

      if (response.ok) {
        setStatus("success")
        setFormData({
          name: "",
          email: "",
          message: "",
        })
      } else {
        setStatus("error")
      }
    } catch (error) {
      console.error(error)
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="px-4 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            <span className="gradient-text">Get In Touch</span>
          </h2>

          <p className="mx-auto max-w-2xl text-muted-foreground">
            Have a project in mind or want to collaborate? I&apos;d love to
            hear from you.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="glass-card rounded-3xl p-6 sm:p-8">
            {status === "success" && (
              <div className="mb-6 flex items-center gap-3 rounded-2xl border border-green-500/30 bg-green-500/10 p-4 text-green-400">
                <CheckCircle className="h-5 w-5 shrink-0" />

                <p className="text-sm font-medium">
                  Message sent! I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            )}

            {status === "error" && (
              <div className="mb-6 flex items-center gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-red-400">
                <AlertCircle className="h-5 w-5 shrink-0" />

                <p className="text-sm font-medium">
                  Something went wrong. Please try again or email me directly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  Name
                </Label>

                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="border-border bg-secondary/50 focus:ring-[#0ea5e9]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Email
                </Label>

                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="border-border bg-secondary/50 focus:ring-[#0ea5e9]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">
                  Message
                </Label>

                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  className="border-border bg-secondary/50 resize-none focus:ring-[#0ea5e9]"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={status === "loading"}
                className="gradient-btn w-full border-0 py-6 text-base font-semibold text-white disabled:opacity-70"
              >
                {status === "loading" ? (
                  <>
                    <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Social Links & Info */}
          <div className="flex flex-col justify-center">
            <div className="glass-card rounded-3xl p-6 sm:p-8">
              <h3 className="mb-6 text-xl font-bold text-foreground">
                Connect With Me
              </h3>

              <div className="mb-8 grid grid-cols-2 gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-2xl bg-secondary/50 p-4 transition-all hover:-translate-y-0.5 hover:bg-secondary"
                    >
                      <div className="gradient-btn flex h-10 w-10 items-center justify-center rounded-xl">
                        <Icon className="h-5 w-5 text-white" />
                      </div>

                      <span className="font-medium text-foreground">
                        {social.name}
                      </span>
                    </a>
                  )
                })}
              </div>

              <div className="space-y-4 border-t border-border pt-6">
                <div>
                  <span className="text-sm text-muted-foreground">
                    Email
                  </span>

                  <p className="font-medium text-foreground">
                    mh.abubakker7@gmail.com
                  </p>
                </div>

                <div>
                  <span className="text-sm text-muted-foreground">
                    Location
                  </span>

                  <p className="font-medium text-foreground">
                    Bangalore, India
                  </p>
                </div>

                <div>
                  <span className="text-sm text-muted-foreground">
                    Response Time
                  </span>

                  <p className="font-medium text-foreground">
                    Usually within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}