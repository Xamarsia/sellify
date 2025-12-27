import ProductAddedDialogProvider from "common/providers/ProductAddedDialogProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col grow w-full justify-center items-center relative flex-shrink-0 mt-20">
      <ProductAddedDialogProvider>{children}</ProductAddedDialogProvider>
    </main>
  );
}
