import PortfolioProject from "./portfolioProject";
import { projects } from "./projects";

export default function PortfolioSection() {
  return (
    <div className="container py-16 md:py-20" id="portfolio">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        Check out my Portfolio
      </h2>
      <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        Here&apos;s a collection of various tinkerings and small personal
        projects I&apos;ve completed over the years
      </h3>

      <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
        {projects.map((project) => (
          <PortfolioProject key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
