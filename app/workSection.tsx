import Image from "next/image";

export default function WorkSection() {
  return (
    <div className="container py-16 md:py-20" id="work">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        My work experience
      </h2>

      <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
        <span className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"></span>

        <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
          <div className="md:w-2/5">
            <div className="flex justify-center md:justify-start">
              <span className="shrink-0">
                <img
                  src="/assets/img/best-practice-logo-grey.png"
                  className="h-auto w-48"
                  alt="company logo"
                />
              </span>
              <div className="relative ml-3 hidden w-full md:block">
                <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
              </div>
            </div>
          </div>
          <div className="md:w-3/5">
            <div className="relative flex md:pl-18">
              <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

              <div className="mt-1 flex">
                <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                <div className="md:-mt-1 md:pl-8">
                  <span className="block font-body font-bold text-grey-40">
                    Dec 2020 - Apr 2023
                  </span>
                  <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                    Front End Developer
                  </span>
                  <div className="pt-2">
                    <span className="block font-body text-black">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum mattis felis vitae risus pulvinar tincidunt.
                      Nam ac venenatis enim.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
          <div className="md:w-2/5">
            <div className="flex justify-center md:justify-start">
              <span className="shrink-0">
                <img
                  src="/assets/img/koda-logo-grey.png"
                  className="h-auto w-40"
                  alt="company logo"
                />
              </span>
              <div className="relative ml-3 hidden w-full md:block">
                <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
              </div>
            </div>
          </div>
          <div className="md:w-3/5">
            <div className="relative flex md:pl-18">
              <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

              <div className="mt-1 flex">
                <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                <div className="md:-mt-1 md:pl-8">
                  <span className="block font-body font-bold text-grey-40">
                    Feb 2019 - Nov 2020
                  </span>
                  <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                    ReactJS Developer
                  </span>
                  <div className="pt-2">
                    <span className="block font-body text-black">
                      The start of my years long dive into React development. My
                      role here also involved some Node, React Native, and a
                      whole lot of CSS.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
          <div className="md:w-2/5">
            <div className="flex justify-center md:justify-start">
              <span className="shrink-0">
                <img
                  src="/assets/img/enlighten-logo-grey.png"
                  className="h-auto w-48"
                  alt="company logo"
                />
              </span>
              <div className="relative ml-3 hidden w-full md:block">
                <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
              </div>
            </div>
          </div>
          <div className="md:w-3/5">
            <div className="relative flex md:pl-18">
              <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

              <div className="mt-1 flex">
                <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                <div className="md:-mt-1 md:pl-8">
                  <span className="block font-body font-bold text-grey-40">
                    Jan 2018 - Jan 2019
                  </span>
                  <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                    SharePoint Developer
                  </span>
                  <div className="pt-2">
                    <span className="block font-body text-black">
                      At Enlighten I wore a wide variety of hats - liasing
                      directly with clients, holding half-day training sessions,
                      and occassionally doing some programming.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
          <div className="md:w-2/5">
            <div className="flex justify-center md:justify-start">
              <span className="shrink-0">
                <img
                  src="/assets/img/inland-revenue-logo-grey.png"
                  className="h-auto w-32"
                  alt="company logo"
                />
              </span>
              <div className="relative ml-3 hidden w-full md:block">
                <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
              </div>
            </div>
          </div>
          <div className="md:w-3/5">
            <div className="relative flex md:pl-18">
              <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

              <div className="mt-1 flex">
                <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                <div className="md:-mt-1 md:pl-8">
                  <span className="block font-body font-bold text-grey-40">
                    2013 - 2017
                  </span>
                  <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                    Investigator
                  </span>
                  <div className="pt-2">
                    <span className="block font-body text-black">
                      The skills I picked up as an investigator for the New
                      Zealand tax department aren&apos;t totally relevant to my
                      job as a developer, but they come in handy from time to
                      time.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
