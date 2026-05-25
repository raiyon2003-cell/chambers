import { LeadershipCard } from "@/components/sections/LeadershipCard";
import { LEADERSHIP } from "@/data/site";

export function LeadershipSection() {
  return (
    <section className="bg-[var(--color-content-bg)] py-14 lg:py-20">
      <div className="mx-auto max-w-[var(--site-content-width)] px-6">
        <h1 className="mb-4 text-center text-[clamp(1.75rem,4vw,2.75rem)] font-bold uppercase tracking-wide text-[var(--color-content-heading)]">
          Leadership
        </h1>
        <p className="mx-auto mb-12 max-w-4xl text-center text-[var(--color-content-text)]">
          Meet the dynamic leaders guiding MBCST&amp;I towards excellence. Our
          members comprise experienced professionals dedicated to fostering
          business growth and innovation.
        </p>

        <ul className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {LEADERSHIP.map((person, index) => (
            <li
              key={person.name ?? person.description ?? index}
              className="flex justify-center"
            >
              <LeadershipCard person={person} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
