"use client"
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Header() {
     //Watch for header in viewport
    const [revealed, setRevealed] = useState(false);
    const observer = useRef<IntersectionObserver | null>(null);
    const sentinelRef = useRef<HTMLDivElement | null>(null);

    //Reveal when out of view, run once []
    useEffect(() => {
        const sentinel = document.getElementById("reveal-sentinel");
        if (!sentinel) return;

        //Instantiate observer 
        observer.current = new IntersectionObserver(
        ([entry]) => {
            const atTop = entry.isIntersecting;
            // at top -> hide (slide-out), scrolled -> show (slide-in)
            setRevealed(!atTop);
        },
        { threshold: 0 } // trigger as soon as it touches viewport
        );
        observer.current.observe(sentinel); //Begin watching element
        
        return() => observer.current?.disconnect(); //?. only disconnect when not null

    }, []);

    return (
        <>
        {/* invisible 1px sentinel at very top */}
        <div
            id="reveal-sentinel"
            ref={sentinelRef}
            style={{ position: "absolute", inset: 0, height: 1 }}
            aria-hidden="true"
        />
            <header className={`header ${revealed ? "slide-in" : "slide-out"}`}>
                <div className="nav-bar">
                    <div> </div>
                    
                    {/* Logo */}
                    <a href="#about" className="flex-1 justify-content: end">
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
                            <li><a href="#projects" className="nav-style">Projects</a></li>
                            <li><a href="#involvement" className="nav-style">Involvement</a></li>
                            <li><a href="#extras" className="nav-style">Extras</a></li>
                        </ul>
                    </nav>

                    {/*Contact */}
                    <nav className={"contact justify-content: start"}>
                        <div className = "nav-list nav-text-size contact-style">
                            <a href="#contact" className="default-text">Contact Me</a>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}