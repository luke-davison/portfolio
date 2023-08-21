export const LINKEDIN_URL =
  "https://www.linkedin.com/in/luke-davison-170bb0145/";
export const GITHUB_URL = "https://www.linkedin.com/in/luke-davison-170bb0145/";

export default function ContactLinks() {
  return (
    <>
      <a href={GITHUB_URL} className="pl-4">
        <i className="bx bxl-github text-2xl text-white hover:text-yellow"></i>
      </a>
      <a href={LINKEDIN_URL} className="pl-4">
        <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
      </a>
    </>
  );
}
