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
    <div className="flex w-64 flex-col items-center justify-center gap-5">
      <Image
        src={src}
        width={250}
        height={70}
        alt="image of a distinction point"
      />
      <p className=" max-w-60 text-center text-base font-bold uppercase leading-5 text-grape">
        {title}
      </p>
      <p className=" text-dark max-w-60 text-pretty text-center text-sm">
        {description}
      </p>
    </div>
  );
}
