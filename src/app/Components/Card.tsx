"use client";
import Image from "next/image";

type CardProps = {
    title: string;
    titleColor?: string; 
    description?: string;
    descriptionColor?: string; 
    href: string;
    src?: string;
};

export default function Card ( {
    title,
    titleColor = "black",
    description,
    descriptionColor = "black",
    href,
    src,
}: CardProps) {
    
    return (
            <a href={href}>
                <section className = "card">
                    {/* Card content */}
                    <div className="card-content">
                        <div style={{color: titleColor}}> {title} </div>
                        {description && <div style={{color: descriptionColor}}> {description} </div>}
                    </div>

                    {/* Card media */}
                    {src && <div className="card-media">
                        <Image
                        src={src}
                        alt={title}
                        fill
                        style={{aspectRatio: "1 / 1", objectFit: "contain"}}
                        priority={false}
                        />
                    </div>}
                </section>
            </a>
    );
}