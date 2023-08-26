"use client";

import { useTypingText } from "../hooks/useTypingText";

const wordlist = [
  "Front End Developer",
  "Full Stack Developer",
  "ReactJS Developer",
  "Web Developer"
];

export default function TitleSwitcher() {
  const text = useTypingText(wordlist);

  return (
    <p className="font-body text-lg uppercase text-white w-52 h-7">{text}</p>
  );
}
