import "server-only";

import Card from "@sellify/admin-ui-components/card/Card";
import { Category, ProductPreview } from "@sellify/admin-ui-components/types";
import ProductPreviewView from "@sellify/admin-ui-components/data-view/ProductPreviewView";

import BackButton from "components/BackButton";
import {
  getCategoryById,
  getProductPreviewsByCategoryId,
} from "common/actions/category-actions";
import Button from "@sellify/common-ui-components/buttons/Button";

type Props = {
  params: Promise<{ categoryId: number }>;
};

export default async function CategoryDetailsPage({ params }: Props) {
  const categoryId: number = (await params).categoryId;
  const category: Category = getCategoryById(categoryId);
  const relatedProducts: Array<ProductPreview> =
    getProductPreviewsByCategoryId(categoryId);

  return (
    <>
      <BackButton />
      <h1 className="py-4">{`Category: ${category.title}`}</h1>
      <Card label="Related Products" value="5" />
      <div className="flex flex-col w-full gap-6">
        <h2>{`Related Products`}</h2>
        <ProductPreviewView content={relatedProducts} />
      </div>
      <Button variant="destructive">Remove Category</Button>
    </>
  );
}
