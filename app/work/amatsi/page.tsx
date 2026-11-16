import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const screenshots = [
  {
    src: "/images/projects/amatsi-dashboard.webp",
    alt: "Amatsi dashboard showing the main reservoir, water level and recent activity",
    title: "The dashboard",
    description:
      "An overview of reservoir levels, water usage and recent irrigation alerts.",
    className: "md:col-span-2",
  },
  {
    src: "/images/projects/amatsi-alerts.webp",
    alt: "Amatsi SMS alerts page showing subscription status and alert history",
    title: "SMS alerts",
    description:
      "A dedicated space for SMS preferences, delivery summaries and alert history.",
    className: "",
  },
  {
    src: "/images/projects/amatsi-login.webp",
    alt: "Amatsi login screen",
    title: "Farmer access",
    description:
      "A simple login experience for farmers accessing their farm information.",
    className: "",
  },
];

const technologies = [
  "IoT",
  "KijaniAPI",
  "Africa's Talking",
  "LLM",
  "Weather data",
  "Smart irrigation",
];

export default function AmatsiCaseStudy() {
  return (
    <>
      <Navbar />

      <main className="px-6 pb-24 pt-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/#work"
            className="mb-12 inline-flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            <ArrowLeft size={16} />
            Back to selected work
          </Link>

          {/* Hero */}
          <section className="grid gap-12 border-b border-[var(--border)] pb-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
                Project 02 / GreenTech
              </p>

              <h1 className="text-6xl font-bold tracking-[-0.05em] sm:text-7xl lg:text-8xl">
                Amatsi<span className="text-[var(--pink)]">.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
                Helping smallholder farmers make better irrigation decisions
                with soil information, weather insights and timely alerts.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://amatsi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-dark inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
                >
                  Visit live project
                  <ExternalLink size={16} />
                </a>

                <a
                  href="https://github.com/Amonochuka/amatsi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium transition-colors hover:border-[var(--foreground)]"
                >
                  View repository
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 border-t border-[var(--border)] pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <div>
                <p className="text-xs uppercase tracking-wider text-[var(--muted)]">
                  Category
                </p>
                <p className="mt-2 font-medium">Agriculture & IoT</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-[var(--muted)]">
                  Context
                </p>
                <p className="mt-2 font-medium">GreenTech Hackathon</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-[var(--muted)]">
                  Location
                </p>
                <p className="mt-2 font-medium">Zone01 Kisumu</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-[var(--muted)]">
                  Focus
                </p>
                <p className="mt-2 font-medium">Smart irrigation</p>
              </div>
            </div>
          </section>

          {/* Main visual */}
          <section className="py-16">
            <div className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[#201e19]">
              <Image
                src="/images/projects/amatsi-dashboard.webp"
                alt="Amatsi smart irrigation dashboard"
                width={1164}
                height={894}
                priority
                className="h-auto w-full"
              />
            </div>

            <p className="mt-4 text-sm text-[var(--muted)]">
              A look inside the Amatsi farmer dashboard.
            </p>
          </section>

          {/* Problem */}
          <section className="grid gap-8 border-t border-[var(--border)] py-16 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
                01 / The problem
              </p>
            </div>

            <div>
              <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
                Irrigation shouldn't have to rely on guesswork.
              </h2>

              <div className="mt-6 max-w-3xl space-y-5 text-base leading-8 text-[var(--muted)]">
                <p>
                  For many smallholder farmers, deciding when and how much to
                  irrigate is not always straightforward. Unpredictable
                  rainfall makes planning difficult, while traditional
                  irrigation methods can make it harder to monitor water use.
                </p>

                <p>
                  Too much or too little water can affect crop growth, waste
                  resources and make an already unpredictable farming season
                  even more challenging.
                </p>

                <p>
                  Amatsi was built around a simple idea: give farmers useful
                  information that can help them make more informed irrigation
                  decisions.
                </p>
              </div>
            </div>
          </section>

          {/* Solution */}
          <section className="grid gap-8 border-t border-[var(--border)] py-16 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
                02 / The solution
              </p>
            </div>

            <div>
              <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
                Bringing farm information into one place.
              </h2>

              <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)]">
                Amatsi combines soil and environmental information with
                weather insights to support irrigation decisions. The
                platform brings together farm monitoring, water management,
                recommendations and SMS alerts in one experience.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    number: "01",
                    title: "Monitor",
                    description:
                      "Use sensor and environmental information to understand farm conditions.",
                  },
                  {
                    number: "02",
                    title: "Understand",
                    description:
                      "Bring weather and soil information together to support irrigation decisions.",
                  },
                  {
                    number: "03",
                    title: "Act",
                    description:
                      "Present irrigation guidance through the application.",
                  },
                  {
                    number: "04",
                    title: "Stay informed",
                    description:
                      "Use SMS notifications to communicate important irrigation updates.",
                  },
                ].map((item) => (
                  <div
                    key={item.number}
                    className="rounded-2xl border border-[var(--border)] bg-white p-6"
                  >
                    <span className="text-sm text-[var(--accent)]">
                      {item.number}
                    </span>
                    <h3 className="mt-4 text-xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Interface gallery */}
          <section className="border-t border-[var(--border)] py-16">
            <div className="mb-10">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
                03 / Inside the platform
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                A closer look at Amatsi.
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-[var(--muted)]">
                A few screens from the application, showing how farmers
                interact with their farm information and notifications.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {screenshots.map((screen) => (
                <article
                  key={screen.src}
                  className={`overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-white ${screen.className}`}
                >
                  <div className="overflow-hidden bg-[#201e19]">
                    <Image
                      src={screen.src}
                      alt={screen.alt}
                      width={1164}
                      height={894}
                      className="h-auto w-full transition-transform duration-500 hover:scale-[1.02]"
                    />
                  </div>

                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl font-semibold">{screen.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      {screen.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Technology */}
          <section className="grid gap-8 border-t border-[var(--border)] py-16 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
                04 / Technology
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                The tools behind the idea.
              </h2>

              <p className="mt-5 max-w-2xl leading-7 text-[var(--muted)]">
                The project brings together connected devices, environmental
                data, messaging and AI-assisted recommendations to support
                smarter irrigation.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-[var(--border)] px-4 py-2 text-sm text-[var(--muted)]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Team and learning */}
          <section className="grid gap-8 border-t border-[var(--border)] py-16 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
                05 / The experience
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Building technology around real problems.
              </h2>

              <div className="mt-6 max-w-3xl space-y-5 text-base leading-8 text-[var(--muted)]">
                <p>
                  Amatsi was developed collaboratively during the GreenTech
                  Hackathon at Zone01 Kisumu. The project challenged us to
                  think beyond building an application and consider how
                  technology could address a practical problem faced by
                  farmers.
                </p>

                <p>
                  It brought together ideas around IoT, environmental data,
                  irrigation, messaging and AI-assisted guidance. More
                  importantly, it reinforced the value of building with the
                  people and problems behind the technology in mind.
                </p>
              </div>
            </div>
          </section>

          {/* Closing CTA */}
          <section className="relative mt-8 overflow-hidden rounded-[2rem] bg-[#171717] px-8 py-14 text-white sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[var(--pink)] opacity-10 blur-3xl" />

            <div className="relative z-10 max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#9de8d2]">
                Want to explore?
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                Take a look at Amatsi.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-white/65">
                Explore the live application and see how the platform brings
                together farm monitoring, irrigation and alerts.
              </p>

              <a
                href="https://amatsi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#171717] transition-transform hover:-translate-y-0.5"
              >
                Visit Amatsi
                <ArrowUpRight size={16} />
              </a>
            </div>
          </section>

          <div className="mt-12">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              <ArrowLeft size={16} />
              Back to all projects
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}