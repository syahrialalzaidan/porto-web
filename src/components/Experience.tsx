import Image from "next/image";

interface ExperienceProps {
  title: string;
  date: string;
  logo: string;
  description: string;
}

export default function Experience({
  title,
  date,
  logo,
  description,
}: ExperienceProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col lg:justify-between lg:flex-row lg:items-center">
        <div className="flex gap-3 items-center">
          <Image src={logo} alt="wesclic" width={54} height={27} />
          <p className="text-lg lg:text-xl font-semibold">{title}</p>
        </div>

        <p className="project hidden lg:block text-sm lg:text-base text-right">
          {date}
        </p>
      </div>

      <p className="text-[#8491A0] text-sm lg:text-base">{description}</p>
      <p className="project text-sm lg:hidden lg:text-base text-right">
        {date}
      </p>
    </div>
  );
}
