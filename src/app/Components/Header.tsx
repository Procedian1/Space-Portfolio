"use client"
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Header() {
     //Watch for header in viewport
    const[revealed, setRevealed] = useState(true);
    const observer = useRef<IntersectionObserver | null>(null);

    //Reveal when out of view, run once []
    useEffect(() => {
        const sentinel = document.getElementById("reveal-sentinel");
        if (!sentinel) return;

        //Instantiate observer 
        observer.current = new IntersectionObserver(
            ([entry]) => setRevealed(!entry.isIntersecting),
            {threshold: 0.01} //When 1% is out of view
        );
        observer.current.observe(sentinel); //Begin watching element
        
        return() => observer.current?.disconnect(); //?. only disconnect when not null

    }, []);

    return (
        <header className={`header ${revealed ? "slide-in" : "slide-out"}`}>
            <div className="nav-bar">

                {/* Logo */}
                <a href="#about" className="flex-1 flex">
                    <Image
                        src="./images/final-logo.svg"
                        alt="Final Logo"
                        width={100}
                        height={100}
                    />
                </a>

                {/* Middle links */}
                <nav className={"nav"}>
                    <ul className = "nav-list nav-text-size">
                        <li><a href="#projects" className="nav-link">Projects</a></li>
                        <li><a href="#involvement" className="nav-link">Involvement</a></li>
                        <li><a href="#extras" className="nav-link">Extras</a></li>
                    </ul>
                </nav>

                {/*Contact */}
                <nav className={"contact"}>
                    <ul className = "nav-list nav-text-size">
                        <li><a href="#contact" className="nav-link">Contact Me</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}