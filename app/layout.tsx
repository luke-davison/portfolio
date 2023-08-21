import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import LandingSection from "./landingSection";
import AboutSection from "./aboutSection";
import PortfolioSection from "./portfolioSection";
import WorkSection from "./workSection";

export const metadata: Metadata = {
  title: "This is Luke",
  description: "This is my portfolio"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />

        <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />

        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          name="viewport"
        />

        <meta property="og:title" content="This is Luke" />

        <meta property="og:locale" content="en_US" />

        <link rel="canonical" href="//" />

        <meta property="og:url" content="//" />

        <meta name="description" content="This is Luke's portfolio" />

        <link rel="icon" type="image/png" href="/assets/img/favicon.png" />

        <meta name="theme-color" content="#5540af" />

        <meta property="og:site_name" content="Atom Template" />

        <meta property="og:image" content="//assets/img/social.jpg" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:site" content="@tailwindmade" />

        <link
          crossOrigin="anonymous"
          // crossorigin="crossorigin"
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />

        <link
          as="style"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="preload"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        />

        <link
          crossOrigin="anonymous"
          // crossorigin="crossorigin"
          href="/assets/styles/main.min.css"
          media="screen"
          rel="stylesheet"
        />

        {/* <script
    defer
    src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
  ></script>

  <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script> */}
      </head>

      <body
        //  :className="{ 'overflow-hidden max-h-screen': mobileMenu }"
        className="relative"
        x-data="{ mobileMenu: false }"
      >
        <div id="main" className="relative">
          {/* <div>
      <div
  x-data="{
    triggerNavItem(id) {
        $scroll(id)
    },
    triggerMobileNavItem(id) {
        mobileMenu = false;
        this.triggerNavItem(id)
    }
}"
> */}
          <div className="w-full z-50 top-0 py-3 sm:py-5  absolute">
            <div className="container flex items-center justify-between">
              <div />
              <div className="hidden lg:block">
                <ul className="flex items-center">
                  <li className="group pl-6">
                    <span
                      // @click="triggerNavItem('#about')"
                      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                    >
                      About
                    </span>

                    <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                  </li>

                  <li className="group pl-6">
                    <span
                      // @click="triggerNavItem('#portfolio')"
                      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                    >
                      Portfolio
                    </span>

                    <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                  </li>

                  <li className="group pl-6">
                    <span
                      // @click="triggerNavItem('#work')"
                      className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                    >
                      Work
                    </span>

                    <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                  </li>
                </ul>
              </div>
              <div className="block lg:hidden">
                <button>
                  {/* <button @click="mobileMenu = true"> */}
                  <i className="bx bx-menu text-4xl text-white"></i>
                </button>
              </div>
            </div>
          </div>

          <div
            className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden"
            // :className="{ 'opacity-100 pointer-events-auto': mobileMenu }"
          >
            <div className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">
              <button
                className="absolute top-0 right-0 mt-4 mr-4"
                // @click="mobileMenu = false"
              >
                <img
                  src="/assets/img/icon-close.svg"
                  className="h-10 w-auto"
                  alt=""
                />
              </button>

              <ul className="mt-8 flex flex-col">
                <li className="py-2">
                  <span
                    // @click="triggerMobileNavItem('#about')"
                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    About
                  </span>
                </li>

                <li className="py-2">
                  <span
                    // @click="triggerMobileNavItem('#portfolio')"
                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Portfolio
                  </span>
                </li>

                <li className="py-2">
                  <span
                    // @click="triggerMobileNavItem('#work')"
                    className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Work
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <LandingSection />
            <AboutSection />
            <PortfolioSection />
            <WorkSection />
          </div>

          <div className="bg-primary">
            <div className="container flex flex-col justify-between py-6 sm:flex-row">
              <p />
              <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
                <a href="/" className="pl-4">
                  <i className="bx bxl-github text-2xl text-white hover:text-yellow"></i>
                </a>
                <a href="/" className="pl-4">
                  <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
