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
      <div className="flex grow w-full justify-center relative flex-shrink-0 px-8 pt-12 max-w-7xl">
        <div className="flex-none w-64 not-lg:hidden py-4">
          <MainMenu />
        </div>
        <main className="flex flex-1 flex-col gap-8 h-full overflow-x-auto">
          {children}
        </main>
      </div>
    </>
  );
}
