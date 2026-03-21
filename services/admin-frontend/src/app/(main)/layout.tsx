import MainMenu from "components/main-menu/MainMenu";
import MainMenuDrawer from "components/main-menu/MainMenuDrawer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex w-full lg:hidden px-8 pt-12">
        <MainMenuDrawer />
      </div>
      <div className="flex grow w-full justify-center relative shrink-0 px-8 pt-12 max-w-7xl">
        <div className="flex-none w-64 not-lg:hidden py-4">
          <MainMenu />
        </div>
        {/*
          `overflow-x-auto` clips focus rings on elements inside `children`.
          Adding `-mx-3 px-3` provides enough horizontal space to keep them visible.
        */}
        <main className="flex flex-1 flex-col gap-8 h-full overflow-x-auto -mx-3 px-3">
          {children}
        </main>
      </div>
    </>
  );
}
