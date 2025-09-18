"use client";

import { useState } from "react";
import Card from './Card';
import Modal from './Modal';

const projects = [
  { title: "To-do List", img: "./images/light-todo-svgrepo-com.svg", href: "/projects/todo" },
  { title: "Calculator", img: "./images/calculator-svgrepo-com.svg", href: "/projects/calculator" },
  { title: "Stormy-Castle", img: "./images/castle-svgrepo-com.svg", href: "/projects/stormy-castle" },
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
        <Card
          title="To-do List"
          src="./images/light-todo-svgrepo-com.svg"
          href="/projects/todo"
        />
        <Card
          title="Calculator"
          src="./images/calculator-svgrepo-com.svg"
          href="/projects/calculator"
          onOpen={() => openComingSoon("Calculator")}
        />
        <Card
          title="Stormy-Castle"
          src="./images/castle-svgrepo-com.svg"
          href="/projects/stormy-castle"
          onOpen={() => openComingSoon("Stormy-Castle")}
        />
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title={activeTitle}>
        This project is coming soon!
      </Modal>
    </>
  );
}
