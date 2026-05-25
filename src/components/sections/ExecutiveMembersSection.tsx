import { EXECUTIVE_MEMBERS } from "@/data/site";

export function ExecutiveMembersSection() {
  return (
    <section className="bg-[var(--color-content-bg)] py-14 lg:py-20">
      <div className="mx-auto max-w-[var(--site-content-width)] px-6">
        <h1 className="mb-4 text-center text-[clamp(1.75rem,4vw,2.75rem)] font-bold uppercase tracking-wide text-[var(--color-content-heading)]">
          Executive Members
        </h1>
        <h2 className="mb-6 text-center text-[clamp(1.125rem,2.5vw,1.75rem)] font-normal text-[var(--color-content-primary)]">
          Guiding Visionaries, Steering Progress
        </h2>
        <p className="mx-auto mb-12 max-w-4xl text-center text-[var(--color-content-text)]">
          At Mandi Bahauddin Chamber of Small Traders &amp; Small Industry, our
          esteemed Executive Members are the architects of our strategic vision,
          steering the course towards sustainable growth and prosperity with
          unwavering commitment and expertise.
        </p>

        {EXECUTIVE_MEMBERS.length > 0 ? (
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {EXECUTIVE_MEMBERS.map((member) => (
              <li
                key={member.name}
                className="rounded-sm border border-[var(--color-content-border)] bg-[var(--color-content-bg-alt)] px-6 py-8 text-center"
              >
                <h3 className="mb-2 text-lg font-bold text-[var(--color-content-heading)]">
                  {member.name}
                </h3>
                <p className="text-[var(--color-content-primary)]">
                  {member.role ?? "Executive Member"}
                </p>
                {member.company ? (
                  <p className="mt-3 text-sm text-[var(--color-content-text)]">
                    Company: {member.company}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
