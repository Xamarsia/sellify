import BackButton from "components/BackButton";

export default function DetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex grow w-full justify-center relative shrink-0 px-8 pt-12 max-w-7xl">
        <main className="flex flex-1 flex-col gap-8 h-full overflow-x-auto">
          <BackButton />
          {children}
        </main>
      </div>
    </>
  );
}
