import Image from "next/image";
import { Project } from "./projects";

export default function PortfolioProject({ project }: { project: Project }) {
  return (
    <a
      href={project.slug}
      className="mx-auto transform transition-all hover:scale-105 md:mx-0"
    >
      <Image
        src={`/assets/img${project.image}`}
        className="w-full shadow"
        alt="portfolio image"
        width={552}
        height={294}
        priority
      />
    </a>
  );
}
