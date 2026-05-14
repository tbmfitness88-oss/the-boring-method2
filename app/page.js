export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-neutral-900">
        <div className="grid min-h-screen items-center gap-10 px-8 py-20 lg:grid-cols-[60%_40%] lg:px-20">
          
          <div className="max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-neutral-500">
              The Boring Method
            </p>

            <h1 className="text-6xl font-black leading-none md:text-8xl">
              THE BORING
            </h1>

            <h1 className="mb-8 text-6xl font-black leading-none text-neutral-500 md:text-8xl">
              METHOD
            </h1>

            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-neutral-300 md:text-xl">
              Private performance coaching for busy professionals,
              runners, and athletes focused on sustainable progress,
              discipline, and long-term fitness.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/639614416755"
                className="rounded-2xl bg-white px-7 py-4 text-sm font-semibold text-black"
              >
                Apply for Coaching
              </a>

              <a
                href="#services"
                className="rounded-2xl border border-neutral-700 px-7 py-4 text-sm font-semibold"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm overflow-hidden rounded-[2rem] border border-neutral-800">
              <img
                src="/Coach Chan.png"
                alt="Coach Chan"
                className="h-[520px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/25" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-900 px-8 py-24 lg:px-20">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-neutral-500">
            Services
          </p>

          <h2 className="text-4xl font-bold md:text-6xl">
            Coaching Built Around You
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {['Private Coaching','Running Performance','Hybrid Performance','Group Training'].map((service)=>(
            <div key={service} className="rounded-3xl border border-neutral-900 bg-neutral-950 p-8">
              <h3 className="mb-4 text-3xl font-bold">{service}</h3>
              <p className="leading-relaxed text-neutral-400">
                Structured coaching designed for sustainable performance and long-term progress.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-24 lg:px-20">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <img
              src="/Coach Chan.png"
              alt="Coach Chan Running"
              className="rounded-[2rem] object-cover"
            />
          </div>

          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-neutral-500">
              About
            </p>

            <h2 className="mb-8 text-5xl font-bold">
              Coach Chan
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-neutral-300">
              <p>
                Coach Chan is a private performance coach focused on helping busy professionals, runners, and athletes build sustainable fitness through structured training, discipline, and long-term consistency.
              </p>

              <p>
                His coaching philosophy is built around consistency over intensity — focusing on sustainable progress, intelligent training, and disciplined execution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}