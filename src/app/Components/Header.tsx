"use client"
import { useEffect, useRef, useState } from "react";

export default function Header() {
     //Watch for header in viewport
    const[revealed, setRevealed] = useState(false);
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
}