import PageTitle from "components/PageTitle";
import ProfileMenu from "components/profile-menu/ProfileMenu";
import ProfileMenuDrawer from "components/profile-menu/ProfileMenuDrawer";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-col gap-9">
      <div className="flex w-full flex-col gap-6">
        <div className="w-full lg:hidden">
          <ProfileMenuDrawer />
        </div>
        <PageTitle />
      </div>

      <div className="relative flex grow w-full gap-12 max-w-7xl ">
        <div className="flex-none w-64 not-lg:hidden">
          <ProfileMenu />
        </div>
        {/*
          `overflow-x-auto` clips focus rings on elements inside `children`.
          Adding `-m-3 p-3` provides enough space to keep them visible.
        */}
        <div className="flex flex-1 overflow-x-auto -m-3 p-3">{children}</div>
      </div>
    </div>
  );
}
