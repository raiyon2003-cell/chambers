import Image from "next/image";
import type { LeadershipMember } from "@/data/site";

export function LeadershipCard({ person }: { person: LeadershipMember }) {
  const isCaptionCard = Boolean(person.description && !person.name);

  return (
    <div className="flex flex-col items-center">
      <div
        className={
          isCaptionCard
            ? "relative mb-4 aspect-[270/300] w-[min(270px,85vw)] overflow-hidden rounded-sm"
            : "relative mb-4 aspect-[270/300] w-[min(270px,85vw)] overflow-hidden rounded-sm"
        }
      >
        <Image
          src={person.image}
          alt={
            person.name ?? person.description ?? "Leadership highlight"
          }
          fill
          sizes={isCaptionCard ? "360px" : "270px"}
          className={
            isCaptionCard
              ? "object-contain object-center"
              : "object-cover object-top"
          }
        />
      </div>
      {isCaptionCard ? (
        <p className="max-w-[min(360px,85vw)] text-center text-base font-light leading-relaxed text-[var(--color-content-heading)]">
          {person.description}
        </p>
      ) : (
        <>
          <h3 className="text-center text-lg font-normal uppercase tracking-wide text-[var(--color-content-heading)]">
            {person.name}
          </h3>
          <p className="mt-1 text-center text-base font-light text-[var(--color-content-heading)]">
            {person.role}
          </p>
        </>
      )}
    </div>
  );
}
