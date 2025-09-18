import Image from "next/image";

type CircleImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
};

export default function CircleImage({
  src,
  alt,
  priority = true,
}: CircleImageProps) {

  return (
    <div className="circle-image" style={{ width: "60%", aspectRatio: "1 / 1" }}>
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
