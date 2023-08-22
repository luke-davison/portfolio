export default function ProjectLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-primary py-6"></div>
      {children}
    </>
  );
}
