import { Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-btn">
              <Shield className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold text-foreground">Mohammed Abubakker Siddiqui</span>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} All rights reserved. Built with security in mind.
          </p>
        </div>
      </div>
    </footer>
  )
}
