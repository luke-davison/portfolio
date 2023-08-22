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
    <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
      <div className="w-full sm:w-3/4 lg:w-3/5 text-center m-auto">
        <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          {project.title}
        </h2>
        <p className="pt-2">{project.date}</p>
        <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl">
          {project.description}
        </h4>

        <Image
          src={`/assets/img${project.image}`}
          className="w-full shadow pt-4"
          alt="portfolio image"
          width={552}
          height={294}
          priority
        />

        <p className="font-body leading-relaxed text-grey-20">
          {project.notes.map((note, index) => (
            <p key={index} className="pt-6">
              {note}
            </p>
          ))}
        </p>

        <div className="grid gap-4 grid-cols-12 pt-4 text-grey-20">
          <div className="col-span-3">Tech used:</div>
          <div className="col-span-9">{project.tech.join(", ")}</div>
          <div className="col-span-3">Live site:</div>
          <div className="col-span-9 text-black">
            {url.map((str) => (
              <a key={str} href={str} className="block">
                {str}
              </a>
            ))}
          </div>
          <div className="col-span-3">Code:</div>
          <div className="col-span-9 text-black">
            {sourceUrl.map((str) => (
              <a key={str} href={str} className="block">
                {str}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
