import Image from "next/image";
import { SECRETARIAT_MEMBERS } from "@/data/site";

export function SecretariatAdministrationSection() {
  return (
    <section className="bg-[var(--color-content-bg)] py-14 lg:py-20">
      <div className="mx-auto max-w-[var(--site-content-width)] px-6">
        <h1 className="mb-12 text-center text-[clamp(1.75rem,4vw,2.75rem)] font-bold uppercase tracking-wide text-[var(--color-content-heading)]">
          Secretariat Team
        </h1>

        {SECRETARIAT_MEMBERS.length > 0 ? (
          <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {SECRETARIAT_MEMBERS.map((member) => (
              <li key={member.name} className="flex flex-col items-center">
                {member.image ? (
                  <div className="relative mb-4 aspect-[270/300] w-[min(270px,85vw)] overflow-hidden rounded-sm">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="270px"
                      className="object-cover object-top"
                    />
                  </div>
                ) : null}
                <h3 className="text-center text-lg font-bold uppercase tracking-wide text-[var(--color-content-heading)]">
                  {member.name}
                </h3>
                {member.role ? (
                  <p className="mt-2 text-center text-[var(--color-content-text)]">
                    {member.role}
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
