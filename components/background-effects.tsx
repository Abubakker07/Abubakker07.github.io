export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-[#0ea5e9]/20 to-[#14b8a6]/20 blur-3xl" />
      <div className="absolute top-1/3 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-[#a78bfa]/20 to-[#0ea5e9]/20 blur-3xl" />
      <div className="absolute bottom-20 right-1/4 h-64 w-64 rounded-full bg-gradient-to-br from-[#14b8a6]/15 to-[#a78bfa]/15 blur-3xl" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15, 23, 42, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15, 23, 42, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  )
}
