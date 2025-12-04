"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Github, Linkedin, Twitter, MessageCircle, Send, Sparkles } from "lucide-react"

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "X (Twitter)", icon: Twitter, href: "https://x.com" },
  { name: "Discord", icon: MessageCircle, href: "https://discord.com" },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-24 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Open for Audits Banner */}
        <div className="mb-16 glass-card rounded-3xl p-6 sm:p-8 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-[#0ea5e9]" />
            <span className="text-sm font-semibold text-[#0ea5e9] uppercase tracking-wide">Available for Work</span>
          </div>
          <h3 className="text-2xl font-bold mb-2 text-foreground sm:text-3xl">Open for Audits & Collaborations</h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Looking for a thorough security review of your smart contracts? Let's discuss how I can help secure your
            protocol.
          </p>
        </div>

        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="glass-card rounded-3xl p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-secondary/50 border-border focus:ring-[#0ea5e9]"
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
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-secondary/50 border-border focus:ring-[#0ea5e9]"
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
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-secondary/50 border-border focus:ring-[#0ea5e9] resize-none"
                  required
                />
              </div>

              <Button type="submit" className="w-full gradient-btn text-white border-0 py-6 text-base font-semibold">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Social Links & Info */}
          <div className="flex flex-col justify-center">
            <div className="glass-card rounded-3xl p-6 sm:p-8">
              <h3 className="mb-6 text-xl font-bold text-foreground">Connect With Me</h3>

              {/* Social Icons */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-2xl bg-secondary/50 p-4 transition-all hover:bg-secondary hover:-translate-y-0.5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-btn">
                      <social.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium text-foreground">{social.name}</span>
                  </a>
                ))}
              </div>

              {/* Additional Info */}
              <div className="space-y-4 pt-6 border-t border-border">
                <div>
                  <span className="text-sm text-muted-foreground">Email</span>
                  <p className="font-medium text-foreground">hello@masiddiqui.dev</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Location</span>
                  <p className="font-medium text-foreground">Bangalore, India</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Response Time</span>
                  <p className="font-medium text-foreground">Usually within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
