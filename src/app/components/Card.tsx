"use client";
import Image from "next/image";
import Link from "next/link";

type CardProps = {
    title: string;
    titleColor?: string; 
    description?: string;
    descriptionColor?: string; 
    href?: string;
    src?: string;
    onOpen?: () => void;
};

export default function Card ( {
    title,
    titleColor = "black",
    description,
    descriptionColor = "black",
    href,
    src,
    onOpen
}: CardProps) {
    const clickable = Boolean(onOpen || href);

    const handleClick = (e: React.MouseEvent) => {
        if (onOpen) {
            e.preventDefault();
            onOpen();
        }
    }

    const Wrapper: React.ElementType = href ? Link : "button";
    
    return (
        <Wrapper {...(href ? { href } : { type: "button" })} onClick={onOpen ? handleClick : undefined} className="card">
                    <div className="card-content">
                        <div className="card-title" style={{color: titleColor}}> {title} </div>
                        {description && <div style={{color: descriptionColor}}> {description} </div>}
                    </div>

                    {/* Card media */}
                    {src && <div className="card-media">
                        <Image
                        src={src.startsWith("/") ? src : `/${src.replace(/^.\//, "")}`}
                        alt={title}
                        fill
                        style={{aspectRatio: "1 / 1", objectFit: "contain"}}
                        priority={false}
                        />
                    </div>}
        </Wrapper>
    );
}