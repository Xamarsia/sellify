import "server-only";

import ProductFeedContent from "components/ProductFeedContent";

export default async function AllProductsPage() {
  return (
    <div className="flex w-full flex-col gap-12">
      <h1>{"Shop all"}</h1>
      <ProductFeedContent />
    </div>
  );
}
