import "./globals.css";
import type { Metadata } from "next";
import LandingSection from "./landingSection";
import AboutSection from "./aboutSection";
import PortfolioSection from "./portfolioSection";
import WorkSection from "./workSection";
import Footer from "./footer";
import Nav from "./nav";

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
          <Nav />

          <div>
            <LandingSection />
            <AboutSection />
            <PortfolioSection />
            <WorkSection />
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
