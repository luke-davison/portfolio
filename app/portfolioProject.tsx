import Image from "next/image";
import { Project } from "./projects";
import Link from "next/link";

export default function PortfolioProject({ project }: { project: Project }) {
  return (
    <Link
      href={`projects/${project.slug}`}
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
      <div className="absolute flex flex-wrap left-1 bottom-0 text-white ">
        {project.tech.map((label) => (
          <span key="label" className="bg-primary px-2 py-1 ml-1 mb-2">
            {label}
          </span>
        ))}
      </div>
    </Link>
  );
}
