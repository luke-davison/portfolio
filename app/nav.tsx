import NavLink from "./navLink";

export default function Nav() {
  return (
    <div className="w-full z-50 top-0 py-3 sm:py-5  absolute">
      <div className="container flex items-center justify-between">
        <div />
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
