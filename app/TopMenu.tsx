"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "./navLink";

export default function TopMenu() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  let containerClassName = "w-full z-50 top-0 py-3 sm:py-5";

  if (isHomepage) {
    containerClassName += " absolute";
  } else {
    containerClassName += " bg-primary";
  }

  return (
    <div className={containerClassName}>
      <div className="container flex items-center justify-between">
        <Link href="/" className="text-white uppercase font-semibold">
          {!isHomepage && "Home"}
        </Link>
        <div className="block">
          <ul className="flex items-center">
            <NavLink id="about" text="About" />
            <NavLink id="portfolio" text="Portfolio" />
            <NavLink id="work" text="Work" />
          </ul>
        </div>
      </div>
    </div>
  );
}
