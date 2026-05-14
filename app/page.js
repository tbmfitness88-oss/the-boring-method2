
export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* HERO */}
      <section className="flex min-h-screen flex-col items-center justify-center px-8 text-center">
        <div className="max-w-5xl space-y-8">
          <p className="text-sm uppercase tracking-[0.4em] text-neutral-400">
            Hybrid Performance Coaching
          </p>

          <div>
            <h1 className="text-6xl font-black md:text-8xl">
              THE BORING
            </h1>
            <h1 className="text-6xl font-black text-neutral-500 md:text-8xl">
              METHOD
            </h1>
          </div>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-300 md:text-xl">
            Evidence-based hybrid performance coaching built through consistency,
            discipline, and intelligent training.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/639614416755"
              target="_blank"
              className="rounded-2xl bg-white px-6 py-3 font-semibold text-black"
            >
              Contact via Viber
            </a>

            <a
              href="mailto:tbmfitness88@gmail.com"
              className="rounded-2xl border border-neutral-700 px-6 py-3"
            >
              Email TBM
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-neutral-900 px-8 py-24 md:px-20">
        <div className="mb-14">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Services
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Performance Coaching
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[
            '1-on-1 Coaching',
            'HYROX Prep',
            'Running Programs',
            'S&C Programming',
            'Group Training',
            'Run Club / Run Class',
          ].map((service) => (
            <div
              key={service}
              className="rounded-3xl border border-neutral-900 bg-neutral-950 p-8"
            >
              <h3 className="text-2xl font-semibold">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="border-t border-neutral-900 px-8 py-24 md:px-20">
        <div className="mb-14">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Pricing
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Coaching Packages
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: '10 Sessions',
              price: '₱10,000',
              desc: '1-on-1 face-to-face coaching.',
            },
            {
              title: '15 Sessions',
              price: '₱14,000',
              desc: 'Structured hybrid performance coaching.',
            },
            {
              title: '20 Sessions',
              price: '₱18,000',
              desc: 'Long-term coaching for serious progress.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-neutral-900 bg-neutral-950 p-8"
            >
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-4xl font-black">{item.price}</p>
              <p className="mt-4 text-neutral-400">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-neutral-900 bg-neutral-950 p-8">
            <h3 className="text-2xl font-semibold">Group Training</h3>

            <div className="mt-6 space-y-3 text-neutral-300">
              <p>3–5 People — ₱2,500/session</p>
              <p>6–8 People — ₱3,500/session</p>
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-900 bg-neutral-950 p-8">
            <h3 className="text-2xl font-semibold">Run Club / Run Class</h3>

            <div className="mt-6 space-y-3 text-neutral-300">
              <p>Minimum of 10 participants</p>
              <p>₱4,000 per session</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
