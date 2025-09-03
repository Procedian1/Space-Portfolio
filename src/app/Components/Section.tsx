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
  const themeClasses = theme === "light" ? "section--light" : "section--dark";
  const layoutClasses = center ? "section--center" : "";

  return (
    <section id={id} className={`section vh-screen snap-start ${themeClasses} ${layoutClasses}`}>
      {children}
    </section>
  );
}

// super lightweight placeholder
function ProjectCarousel() {
  return (
    <div className="carousel">
      <div className="carousel-grid">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="carousel-card" />
        ))}
      </div>
    </div>
  );
}