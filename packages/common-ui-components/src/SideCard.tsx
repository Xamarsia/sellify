import { ReactNode } from "react";

type SideCardProps = {
  children: ReactNode;
};

/**
 * Provides a bordered card container for side-panel content.
 * @param children - Content rendered inside the card.
 */
export default function SideCard({ children }: SideCardProps) {
  return (
    <section
      aria-label="side-card"
      className="flex h-72 w-full min-w-80 flex-col justify-between rounded-lg border border-stroke bg-white p-4 gap-4"
    >
      {children}
    </section>
  );
}
