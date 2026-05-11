import Image from "next/image";

interface ExecutiveCardProps {
  src: string;
  name: string;
}

export default function ExecutiveCard({ src, name }: ExecutiveCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="rounded-full bg-gradient-to-br from-[#cc0000] via-[#f97316] to-[#7a0000] p-[3px] shadow-[0_0_24px_rgba(204,0,0,0.45)]">
        <div className="relative h-32 w-32 overflow-hidden rounded-full bg-[#111111]">
          <Image
            src={src}
            alt={name}
            fill
            className="object-cover"
            sizes="128px"
          />
        </div>
      </div>
      <p className="mt-3 text-sm font-bold tracking-wide text-white">{name}</p>
    </div>
  );
}
