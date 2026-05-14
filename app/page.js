'use client'

import { useState } from 'react'

export default function HomePage() {
  const [openCard, setOpenCard] = useState(null)

  const services = [
    {
      title: 'Private Coaching',
      description:
        'Structured one-on-one coaching focused on fat loss, body recomposition, strength, energy, and sustainable long-term fitness.',
      inclusions: [
        'Personalized coaching',
        'Fat loss & body recomposition',
        'Strength & conditioning',
        'Performance tracking',
        'Accountability support',
      ],
      pricing: [
        '10 Sessions — ₱10,000',
        '15 Sessions — ₱14,000',
        '20 Sessions — ₱18,000',
      ],
    },
    {
      title: 'Running Performance',
      description:
        'Endurance-focused coaching designed to improve aerobic capacity, pacing, and long-term running performance.',
      inclusions: [
        'Running endurance',
        'Race pacing',
        'Aerobic development',
        'Injury prevention',
        'Structured progression',
      ],
      pricing: ['Custom coaching plans available'],
    },
    {
      title: 'Hybrid Performance',
      description:
        'Strength and conditioning systems built for individuals seeking improved endurance, athleticism, and work capacity.',
      inclusions: [
        'Strength development',
        'Conditioning systems',
        'Athletic development',
        'Functional fitness',
        'Sustainable performance',
      ],
      pricing: ['Custom pricing available'],
    },
    {
      title: 'Group Training',
      description:
        'Small-group performance coaching built around accountability and structured progression.',
      inclusions: [
        'Accountability',
        'Team environment',
        'Structured sessions',
        'Performance culture',
      ],
      pricing: [
        '3–5 People — ₱2,500/session',
        '6–8 People — ₱3,500/session',
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-neutral-900">
        <div className="grid min-h-screen lg:grid-cols-2">
          <div className="flex flex-col justify-center px-8 py-24 lg:px-20">
            <div className="mb-8">
              <p className="mb-3 text-xs uppercase tracking-[0.4em] text-neutral-500">
                The Boring Method
              </p>

              <h1 className="text-6xl font-black leading-none md:text-8xl">
                THE BORING
              </h1>

              <h1 className="text-6xl font-black leading-none text-neutral-500 md:text-8xl">
                METHOD
              </h1>
            </div>

            <p className="mb-10 max-w-xl text-lg leading-relaxed text-neutral-300 md:text-xl">
              Private performance coaching for busy professionals,
              runners, and athletes who want sustainable progress
              through structure, consistency, and intelligent training.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/639614416755"
                target="_blank"
                className="rounded-2xl bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-neutral-200"
              >
                Apply for Coaching
              </a>

              <a
                href="#services"
                className="rounded-2xl border border-neutral-700 px-7 py-4 text-sm font-semibold transition hover:border-white"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="relative min-h-[500px] lg:min-h-screen">
            <img
              src="/Coach Chan.png"
              alt="Coach Chan"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/70" />
          </div>
        </div>
      </section>

      <section
        id="services"
        className="border-b border-neutral-900 px-8 py-24 lg:px-20"
      >
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-neutral-500">
            Services
          </p>

          <h2 className="text-4xl font-bold md:text-6xl">
            Coaching Built Around You
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((service, index) => {
            const isOpen = openCard === index

            return (
              <div
                key={service.title}
                className="rounded-3xl border border-neutral-900 bg-neutral-950 p-8 transition hover:border-neutral-700"
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-4 text-3xl font-bold">
                      {service.title}
                    </h3>

                    <p className="leading-relaxed text-neutral-400">
                      {service.description}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      setOpenCard(isOpen ? null : index)
                    }
                    className="rounded-2xl border border-neutral-700 px-5 py-3 text-sm font-semibold transition hover:border-white"
                  >
                    {isOpen ? 'Close' : 'Learn More'}
                  </button>

                  {isOpen && (
                    <div className="space-y-8 border-t border-neutral-800 pt-8">
                      <div>
                        <h4 className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
                          Inclusions
                        </h4>

                        <div className="space-y-2 text-neutral-300">
                          {service.inclusions.map((item) => (
                            <p key={item}>• {item}</p>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
                          Coaching Pricing
                        </h4>

                        <div className="space-y-2 text-neutral-300">
                          {service.pricing.map((item) => (
                            <p key={item}>{item}</p>
                          ))}
                        </div>
                      </div>

                      <a
                        href="https://wa.me/639614416755"
                        target="_blank"
                        className="inline-block rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
                      >
                        Apply for Coaching
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="border-b border-neutral-900 px-8 py-24 lg:px-20">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <img
              src="/Coach Chan.png"
              alt="Coach Chan Running"
              className="rounded-3xl object-cover"
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
                With a background in strength & conditioning, collegiate athletics, and performance coaching, his approach combines evidence-based programming with real-world athletic experience.
              </p>

              <p>
                A former NCAA Season 94 Most Bemedalled Athlete in track and field, Coach Chan specializes in strength development, endurance systems, body recomposition, hybrid performance, and long-term athletic development.
              </p>

              <p>
                His coaching philosophy is built around consistency over intensity — focusing on sustainable progress, intelligent training, and disciplined execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-24 text-center lg:px-20">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-neutral-500">
          Ready To Get Started?
        </p>

        <h2 className="mx-auto mb-8 max-w-3xl text-4xl font-bold md:text-6xl">
          Let’s build a plan that fits your goals and your life.
        </h2>

        <a
          href="https://wa.me/639614416755"
          target="_blank"
          className="inline-block rounded-2xl bg-white px-8 py-4 text-sm font-semibold text-black transition hover:bg-neutral-200"
        >
          Apply for Coaching
        </a>
      </section>
    </main>
  )
}
