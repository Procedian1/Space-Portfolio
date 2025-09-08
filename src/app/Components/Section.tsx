import { ReactNode } from "react";

type SectionProps = {
  id: string;
  title?: string;
  subtext?: string;
  theme?: "light" | "dark";
  center?: boolean;
  animated?: boolean;
  children: ReactNode;
};

export default function Section({
  id,
  title,
  subtext,
  theme = "light",
  center = true,
  children,
}: SectionProps) {
  const themeClasses = theme === "light" ? "section--light" : "section--dark";
  const layoutClasses = center ? "section--center" : "";

  return (
    <section id={id} className={`section snap-start ${themeClasses} ${layoutClasses}`}>
      <div className="section-inner">
        {/* Title */}
        {title && <h1 className="section-title heading-xl">{title}</h1>}

        {/* Content */}
        {children && <div className="section-content">{children}</div>}
  
        {/* Subtext */}
        {subtext && <h1 className="section-title heading-xl">{subtext}</h1>}
      </div>
    </section>
  );
}