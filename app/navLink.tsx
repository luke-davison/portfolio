"use client";

export default function NavLink(props: { text: string; id: string }) {
  const onClick = () => {
    const element = document.getElementById(props.id);
    if (element) {
      element.scrollIntoView();
    }
  };

  return (
    <li className="group pl-6">
      <span
        onClick={onClick}
        className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
      >
        {props.text}
      </span>

      <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
    </li>
  );
}
