"use client";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  name: string;
  image: string;
  link: string;
  description: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  const handleCardClick = () => {
    window.open(props.link, "_blank");
  };

  return (
    <div className="w-[350px] h-[500px] hover:text-[#2A2A2A] bg-[#2A2A2A] hover:bg-white rounded-lg cursor-pointer" onClick={handleCardClick}>
      <div className="w-[350px] h-[225px] overflow-hidden group relative">
        <div className="image-container rounded-lg z-10">
          <Image
            src={props.image}
            alt="project1"
            className="object-cover"
            width={390}
            height={200}
          />
        </div>
      </div>
      <div className="rounded-b-lg py-4 px-8 z-50 flex flex-col gap-4 ">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-left">
            {props.name}
          </h3>
          <FaExternalLinkAlt className="text-xl font-bold text-right" />
        </div>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
