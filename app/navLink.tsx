import Link from "next/link";

export default function NavLink(props: { text: string; id: string }) {
  return (
    <li className="group pl-6">
      <Link
        href={"/#" + props.id}
        className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
      >
        {props.text}
      </Link>

      <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
    </li>
  );
}
