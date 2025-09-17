"use client";

import { useState } from "react";
import Card from "./Card";
import Modal from "./Modal";

const projects = [
  { title: "To-do List", img: "/images/light-todo-svgrepo-com.svg", href: "/projects/todo" },
  { title: "Calculator", img: "/images/calculator-svgrepo-com.svg", href: "/projects/calculator" },
  { title: "Stormy-Castle", img: "/images/castle-svgrepo-com.svg", href: "/projects/stormy-castle" },
];

export default function ProjectsGrid() {
  const [open, setOpen] = useState(false);
  const [activeTitle, setActiveTitle] = useState("");

  const openComingSoon = (title: string) => {
    setActiveTitle(title);
    setOpen(true);
  };

  return (
    <>
      <div className="card-container">
        {projects.map((p) => (
          <Card
            key={p.title}
            title={p.title}
            titleColor="black"
            descriptionColor="white"
            src={p.img}
            href={p.href}
            onOpen={() => openComingSoon(p.title)} // intercepts click for now
          />
        ))}
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title={activeTitle}>
        This project is coming soon!
      </Modal>
    </>
  );
}
