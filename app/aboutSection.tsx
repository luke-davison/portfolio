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
            In 2017 I had an epiphany - as fun as conducting tax audits were,
            being a developer was much more enjoyable. Since then I have been
            pursuing a career as a web developer.
          </p>
        </div>
        <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
          <div>
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">
                React
              </h4>
              <h3 className="font-body text-3xl font-bold text-primary">95%</h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
              <div
                className="h-3 rounded-full bg-primary"
                style={{ width: "95%" }}
              ></div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">
                TypeScript
              </h4>
              <h3 className="font-body text-3xl font-bold text-primary">85%</h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
              <div
                className="h-3 rounded-full bg-primary"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">
                Node / Express
              </h4>
              <h3 className="font-body text-3xl font-bold text-primary">70%</h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
              <div
                className="h-3 rounded-full bg-primary"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>
          <div className="pt-6">
            <div className="flex items-end justify-between">
              <h4 className="font-body font-semibold uppercase text-black">
                Misremembering song lyrics
              </h4>
              <h3 className="font-body text-3xl font-bold text-primary">
                100%
              </h3>
            </div>
            <div className="mt-2 h-3 w-full rounded-full bg-lila">
              <div
                className="h-3 rounded-full bg-primary"
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
