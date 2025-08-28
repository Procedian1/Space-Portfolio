import { ReactNode } from "react";

type SectionProps = {
  id: string;
  theme?: "light" | "dark";
  center?: boolean;
  children: ReactNode;
};

export default function Section({
  id,
  theme = "light",
  center = true,
  children,
}: SectionProps) {
  //Background/text color
  const themeClasses = theme === "light" ? "bg-white text-black" : "bg-black text-white";

  //Decide if centered
  const layoutClasses = center ? "flex items-center justify-center" : "";

  return (
    <section
      id={id}
      className={`h-screen snap-start ${themeClasses} ${layoutClasses}`}
    >
      {children}
    </section>
  );
}
