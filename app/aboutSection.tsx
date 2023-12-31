import PercentageBars from "./percentageBars";

export default function AboutSection() {
  return (
    <div className="bg-grey-50" id="about">
      <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
        <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
          <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            Who am I?
          </h2>
          <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            I&apos;m Luke Davison
          </h4>
          <p className="pt-6 font-body leading-relaxed text-grey-20">
            In 2017 I had an epiphany. As fun as it was to conduct tax audits,
            being a developer was likely much more enjoyable. Since then I have
            been pursuing a career as a web developer and life has been pretty
            good. Check out my portfolio and work history below to learn more
            about me and what I can do.
          </p>
        </div>

        <PercentageBars />
      </div>
    </div>
  );
}
