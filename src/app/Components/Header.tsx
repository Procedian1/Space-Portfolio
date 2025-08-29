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
        <header className={`sticky top-0 z-50 transition-all ${revealed ? "translate-y-0" : "-translate-y-full"}`}>
            <div className={"flex backdrop-blur bg-black/85"}>

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
                <nav className={"flex-1 flex justify-center sm: py-1 lg:py-2"}>
                    <ul className="flex items-center gap-30 opacity-90 text-2xl font-bold">
                        <li><a href="#projects" className="hover:underline underline-offset-4">Projects</a></li>
                        <li><a href="#involvement" className="hover:underline underline-offset-4">Involvement</a></li>
                        <li><a href="#extras" className="hover:underline underline-offset-4">Extras</a></li>
                    </ul>
                </nav>

                {/*Contact */}
                <div className="flex-1 flex items-center justify-end px-25 opacity-90 text-2xl font-bold">
                    Contact Me
                </div>

            </div>
        </header>
    )
}