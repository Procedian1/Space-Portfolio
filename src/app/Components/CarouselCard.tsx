"use client";
import Image from "next/image";

type CarouselProps = {
    title: string;
    titleColor?: string; 
    description: string;
    descriptionColor?: string; 
    backgroundColor?: string;
    href: string;
    src: string;
};

export default function CarouselCard ( {
    title,
    titleColor = "black",
    description,
    descriptionColor = "black",
    href,
    backgroundColor = "rgb(from var(--brand-blue) r g b / 1)",
    src,
}: CarouselProps) {
    
    
    return (
        <a href={href}>
            <section className = "carousel-card heading-xl" style={{backgroundColor}}>
                {/* Card content */}
                <div className="carousel-card-content">
                    <div style={{color: titleColor}}> {title} </div>
                    <div style={{color: descriptionColor}}> {description} </div>
                </div>

                {/* Card media */}
                <div className="carousel-card-media">
                    <Image
                    src={src}
                    alt={title}
                    fill
                    style={{objectFit: "cover"}}
                    priority={false}
                    />
                </div>
            </section>
        </a>
    );
}