import Image from "next/image";

interface UniqueCardProps {
  src: string;
  title: string;
  description: string;
}

export default function UniqueCard({
  src,
  title,
  description,
}: UniqueCardProps) {
  return (
    <div className="mx-auto flex w-64 flex-col items-center justify-center  gap-5 text-center">
      <Image
        src={src}
        width={75}
        height={90}
        alt="image of a distinction point"
      />
      <p className="w-30 text-pretty text-center text-base font-bold uppercase leading-5 text-grape">
        {title}
      </p>
      <p className="text-dark w-30 text-pretty text-center text-sm">
        {description}
      </p>
    </div>
  );
}
