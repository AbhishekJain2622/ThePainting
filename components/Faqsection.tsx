import React from 'react'

function Faqsection() {
  return (
    <>
            <section className="py-16 bg-gray-50">
<div className="container mx-auto px-4">
  <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">
    Frequently Asked Questions
  </h2>

  <div className="max-w-4xl mx-auto space-y-4">
    {[
      {
        q: "What types of painting services do you offer?",
        a: "We offer complete painting solutions, including:\n• Interior wall painting\n• Exterior wall painting\n• Maintenance & repainting services\n• Artistic wall highlights such as murals, calligraphy, doodles, and graffiti-inspired designs",
      },
      {
        q: "Do you provide the paint and materials, or do I need to supply them?",
        a: "We provide all required paints, tools, and materials. We use high-quality, trusted brands. If you have a preferred paint brand or finish, we're happy to accommodate it.",
      },
      {
        q: "How long does a typical painting project take?",
        a: "It depends on the size and scope:\n• A single room: 1 day\n• Full apartment/villa: 2–5 days\n• Commercial or exterior projects: Variable based on surface size and prep requirements",
      },
      {
        q: "Do you do surface preparation and repairs?",
        a: "Yes. All our jobs include full surface prep — sanding, filling cracks or holes, priming, and treating stains or humidity damage before painting begins.",
      },
      {
        q: "Can you repaint areas affected by water damage or renovation?",
        a: "Absolutely. We specialize in post-repair touch-ups, repainting water-damaged walls, and restoring surfaces after maintenance or construction work.",
      },
      {
        q: "Do you offer maintenance contracts or regular repainting services?",
        a: "Yes. We offer monthly, quarterly, or annual maintenance packages for residential communities, commercial properties, and shared spaces.",
      },
      {
        q: "Can you help me choose the right colors or finishes?",
        a: "Of course. We offer color consultation services to help you select tones that match your space, lighting, and design goals. We can also provide sample applications if needed.",
      },
      {
        q: "Do you offer wall art services like murals or graffiti?",
        a: "Yes. We have an in-house team of artists who create custom murals, graffiti-inspired designs, Arabic or modern calligraphy, doodles, and more.",
      },
      {
        q: "Will the painters clean up after the job?",
        a: "Always. Clean-up is part of our process. We protect your furniture, flooring, and belongings during painting and leave your space clean and paint-free once we're done.",
      },
      {
        q: "How do I request a quote?",
        a: "Just click [Request a Free Quote] or reach out via WhatsApp, phone, or our contact form. Share a few details and we'll get back to you with a customized quote.",
      },
    ].map((item, index) => (
      <details
        key={index}
        className="group border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
      >
        <summary className="flex items-center justify-between cursor-pointer px-4 py-3 md:px-6 md:py-4 text-base md:text-lg font-semibold text-gray-800 group-open:bg-teal-50 group-open:text-teal-600 transition-colors">
          <span>{item.q}</span>
          <svg
            className="w-5 h-5 transform transition-transform duration-200 group-open:rotate-180 text-teal-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>
        <div className="px-4 md:px-6 pb-4 text-gray-700 whitespace-pre-line">
          {item.a}
        </div>
      </details>
    ))}
  </div>
</div>
</section>
    </>
  )
}

export default Faqsection
