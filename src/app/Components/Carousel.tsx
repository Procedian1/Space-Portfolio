"use client";

export default function Carousel ( {children}: {children:React.ReactNode}) {
    
    return (
        <section className="carousel">
            {children}
        </section>
    );
}