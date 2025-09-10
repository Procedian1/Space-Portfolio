"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [revealed, setRevealed] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const target = document.getElementById("header-static");
    if (!target) return;

    observer.current = new IntersectionObserver(
      ([entry]) => {
        // If static header is visible, HIDE overlay; else SHOW overlay
        setRevealed(!entry.isIntersecting);
      },
      { threshold: 0 } // trigger as soon as any part appears/disappears
    );

    observer.current.observe(target);
    return () => observer.current?.disconnect();
  }, []);

  return (
    <header className={`header-dynamic ${revealed ? "slide-in" : "slide-out"}`} aria-hidden={!revealed}>
      <div className="nav-bar-blue">
        <div />
        {/* Logo */}
        <a href="#about" className="flex-1">
          <Image src="./images/final-logo.svg" alt="Final Logo" width={100} height={100} />
        </a>

        {/* Middle links */}
        <nav className="nav">
          <ul className="nav-list nav-text-size">
            <li><a href="#projects" className="nav-style">Projects</a></li>
            <li><a href="#involvement" className="nav-style">Involvement</a></li>
            <li><a href="#extras" className="nav-style">Extras</a></li>
          </ul>
        </nav>

        {/* Contact */}
        <nav className="contact">
          <div className="nav-list nav-text-size contact-style">
            <a href="#contact" className="default-text">Contact Me</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
