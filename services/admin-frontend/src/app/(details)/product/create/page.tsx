import "server-only";

import CreateProductForm from "components/forms/CreateProductForm";

export default function CreateProductPage() {
  return (
    <>
      <h1 className="py-4">{`Create Product`}</h1>
      <CreateProductForm />
    </>
  );
}
