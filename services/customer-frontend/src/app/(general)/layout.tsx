import ProductAddedDialogProvider from "providers/ProductAddedDialogProvider";

export default function GeneralLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex grow w-full justify-center relative shrink-0 mt-20 px-8 pt-12 pb-16 max-w-7xl">
      <ProductAddedDialogProvider>{children}</ProductAddedDialogProvider>
    </main>
  );
}
