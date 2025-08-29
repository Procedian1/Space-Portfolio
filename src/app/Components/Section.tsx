import { ReactNode } from "react";

type SectionProps = {
  id: string;
  theme?: "light" | "dark";
  center?: boolean;
  animated?: boolean;
  children: ReactNode;
};

export default function Section({
  id,
  theme = "light",
  center = true,
  children,
}: SectionProps) {
  const themeClasses = theme === "light" ? "bg-white text-black" : "bg-black text-white";
  const layoutClasses = center ? "flex items-center justify-center" : "";

  return (
    <section id={id} className={`h-screen snap-start ${themeClasses} ${layoutClasses}`}>
      {children}
    </section>
  );
}

// super lightweight placeholder
function ProjectCarousel() {
  return (
    <div className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="aspect-video rounded-xl bg-white/5 border border-white/10" />
      ))}
    </div>
  );
}