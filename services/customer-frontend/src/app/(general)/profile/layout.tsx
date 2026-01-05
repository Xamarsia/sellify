import PageTitle from "components/PageTitle";
import ProfileMenu from "components/ProfileMenu";
import ProfileMenuDrawer from "components/ProfileMenuDrawer";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-col gap-9">
      <div className="flex w-full flex-col gap-6">
        <section className="flex w-full sm:hidden">
          <ProfileMenuDrawer />
        </section>
        <PageTitle />
      </div>
      <div className="relative flex grow w-full gap-12 not-sm:flex-col max-w-7xl ">
        <section className="flex w-72 not-sm:hidden">
          <ProfileMenu />
        </section>
        <section className="flex w-full">{children}</section>
      </div>
    </div>
  );
}
