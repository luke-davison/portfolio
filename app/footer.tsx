import ContactLinks from "./contactLinks";

export default function Footer() {
  return (
    <div className="bg-primary">
      <div className="container flex flex-col justify-between py-6 sm:flex-row">
        <p />
        <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
          <ContactLinks />
        </div>
      </div>
    </div>
  );
}
