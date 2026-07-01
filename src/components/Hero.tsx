const stars = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: Math.random() * 2.5 + 1,
  delay: `${Math.random() * 5}s`,
  duration: `${Math.random() * 2.5 + 1.5}s`,
}))

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 sm:pb-24 animate-gradient"
      style={{
        background: 'linear-gradient(-45deg, #0a0a2e, #1a0a2e, #0f172a, #1e1b4b, #0a0a2e)',
        backgroundSize: '400% 400%',
      }}
    >

      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-surface pointer-events-none" />

      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-white/60 animate-pulse"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
            animationDuration: s.duration,
          }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 tracking-tight">
            abgg <span className="text-accent">development</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/60 max-w-xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </section>
  )
}
