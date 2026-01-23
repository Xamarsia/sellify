import ProductAddedDialogProvider from "providers/ProductAddedDialogProvider";

export default function CatalogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col grow w-full justify-center items-center relative shrink-0 mt-20">
      <ProductAddedDialogProvider>{children}</ProductAddedDialogProvider>
    </main>
  );
}
