import Image from "next/image";
import { projects } from "@/app/projects";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    return <p>An error occurred</p>;
  }

  const url = Array.isArray(project.url) ? project.url : [project.url];
  const sourceUrl = Array.isArray(project.sourceUrl)
    ? project.sourceUrl
    : [project.sourceUrl];

  return (
    <div>
      <h2>{project.title}</h2>
      <p>Date: {project.date}</p>
      <h4>{project.description}</h4>
      <Image
        src={`/assets/img${project.image}`}
        className="w-full shadow"
        alt="portfolio image"
        width={552}
        height={294}
        priority
      />
      {project.notes.map((note, index) => (
        <p key={index}>{note}</p>
      ))}
      <p>Tech used: {project.tech.join(", ")}</p>
      <p className="flex">
        <span>Live site:&nbsp;</span>
        <span>
          {url.map((str) => (
            <a key={str} href={str} className="block">
              {str}
            </a>
          ))}
        </span>
      </p>
      <p className="flex">
        <span>Repo(s):&nbsp;</span>
        <span>
          {sourceUrl.map((str) => (
            <a key={str} href={str} className="block">
              {str}
            </a>
          ))}
        </span>
      </p>
    </div>
  );
}
