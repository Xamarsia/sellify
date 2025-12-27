import BreadcrumbsProvider from "common/providers/BreadcrumbsProvider";

export default function LayoutWithBreadcrumbs({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full flex-col gap-6">
      <BreadcrumbsProvider>{children}</BreadcrumbsProvider>
    </div>
  );
}
