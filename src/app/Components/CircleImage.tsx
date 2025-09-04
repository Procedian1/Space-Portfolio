import Image from "next/image";

type CircleImageProps = {
  src: string;
  alt: string;
  size?: number;
  priority?: boolean;
};

export default function CircleImage({
  src,
  alt,
  size = 512,
  priority = true,
}: CircleImageProps) {
  return (
    <div className="circle-image" style={{ width: size, height: size }}>
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: "cover" }}
        priority={priority}
      />
    </div>
  );
}
