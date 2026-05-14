
'use client'
import { useState } from 'react'

export default function HomePage() {
  const [openCard, setOpenCard] = useState(null)

  const services = [
    {
      title: 'Private Coaching',
      desc: 'Structured one-on-one coaching for busy professionals focused on fat loss, body recomposition, strength, energy, and sustainable long-term fitness.',
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
      title: 'Running Programs',
      desc: 'Endurance-focused training built around sustainable progress.',
      inclusions: [
        'Structured run programming',
        'Aerobic development',
        'Pacing strategy',
        'Recovery guidance',
      ],
      pricing: ['Custom coaching plans available'],
    },
    {
      title: 'Hybrid Performance',
      desc: 'Strength and conditioning for long-term athletic development.',
      inclusions: [
        'Strength development',
        'Conditioning systems',
        'Mobility integration',
        'Athlete-focused progression',
      ],
      pricing: ['Custom pricing available'],
    },
    {
      title: 'Group Training',
      desc: 'Small-group coaching for accountability and structured progression.',
      inclusions: [
        'Small-group coaching',
        'Team conditioning',
        'Structured progression',
        'Performance-focused sessions',
      ],
      pricing: [
        '3–5 People — ₱2,500/session',
        '6–8 People — ₱3,500/session',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <section className="flex min-h-screen flex-col items-center justify-center px-8 text-center">
        <div className="max-w-5xl space-y-8">
          <p className="text-sm uppercase tracking-[0.4em] text-neutral-400">
            Private Performance Coaching
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
            Structured coaching for busy professionals focused on fat loss,
            body recomposition, strength, endurance, and sustainable fitness.
          </p>
        </div>
      </section>

      <section className="border-t border-neutral-900 px-8 py-24 md:px-20">
        <div className="mb-14">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Services
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Private Coaching Services
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => {
            const isOpen = openCard === index

            return (
              <div
                key={service.title}
                className="rounded-3xl border border-neutral-900 bg-neutral-950 p-8 transition duration-300 hover:border-neutral-700"
              >
                <div className="space-y-5">
                  <h3 className="text-3xl font-bold">
                    {service.title}
                  </h3>

                  <p className="leading-relaxed text-neutral-400">
                    {service.desc}
                  </p>

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
                        className="inline-block rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black"
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
    </div>
  )
}
