import Image from "next/image";
import TitleSwitcher from "./TitleSwitcher";
import ContactLinks from "./contactLinks";

export default function LandingSection() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-8"
      style={{ backgroundImage: "url(/assets/img/bg-hero.jpg)" }}
    >
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat"></div>

      <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
        <div className="flex flex-col items-center justify-center lg:flex-row">
          <div className="rounded-full border-8 border-primary shadow-xl">
            <Image
              src="/assets/img/blog-author.jpg"
              alt="author"
              className="h-48 rounded-full sm:h-56 w-auto"
              width={224}
              height={224}
              priority
            />
          </div>
          <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
            <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
              Luke Davison
            </h1>
            <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
              <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                <TitleSwitcher />
                <div className="hidden sm:block">
                  <i className="bx bx-chevron-right text-3xl text-yellow"></i>
                </div>
              </div>
              <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                <ContactLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
