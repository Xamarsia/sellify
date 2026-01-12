import "server-only";

import Button from "@sellify/common-ui-components/buttons/Button";

import Card from "@sellify/admin-ui-components/card/Card";
import InfoSection from "@sellify/admin-ui-components/InfoSection";
import { Category, ProductPreview } from "@sellify/admin-ui-components/types";
import ProductPreviewView from "@sellify/admin-ui-components/data-view/ProductPreviewView";

import {
  getCategoryById,
  getProductPreviewsByCategoryId,
} from "common/actions/category-actions";

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
      <h1 className="py-4">{`Category: ${category.title}`}</h1>
      <Card label="Related Products" value="5" />
      <InfoSection title="Related Products">
        <ProductPreviewView content={relatedProducts} />
      </InfoSection>
      <Button variant="destructive">Remove Category</Button>
    </>
  );
}
