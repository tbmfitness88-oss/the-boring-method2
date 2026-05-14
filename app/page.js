export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex items-center justify-center">
      <div className="max-w-4xl px-8 text-center space-y-8">
        <p className="uppercase tracking-[0.4em] text-neutral-400 text-sm">
          Hybrid Performance Coaching
        </p>

        <div>
          <h1 className="text-6xl md:text-8xl font-black">THE BORING</h1>
          <h1 className="text-6xl md:text-8xl font-black text-neutral-500">
            METHOD
          </h1>
        </div>

        <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
          Evidence-based hybrid performance coaching built through consistency,
          discipline, and intelligent training.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/639614416755"
            target="_blank"
            className="bg-white text-black px-6 py-3 rounded-2xl font-semibold"
          >
            Contact via Viber
          </a>

          <a
            href="mailto:tbmfitness88@gmail.com"
            className="border border-neutral-700 px-6 py-3 rounded-2xl"
          >
            Email TBM
          </a>
        </div>
      </div>
    </div>
  )
}
