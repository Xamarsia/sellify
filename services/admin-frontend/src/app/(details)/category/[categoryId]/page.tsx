import "server-only";

import { Category, ProductPreview } from "@sellify/admin-ui-components/types";

import {
  getCategoryById,
  getProductPreviewsByCategoryId,
} from "actions/category-actions";
import CategoryDetailsPage from "components/pages/CategoryDetailsPage";

type Props = {
  params: Promise<{ categoryId: number }>;
};

export default async function CategoryPage({ params }: Props) {
  const categoryId: number = (await params).categoryId;
  const category: Category = getCategoryById(categoryId);
  const relatedProducts: Array<ProductPreview> =
    getProductPreviewsByCategoryId(categoryId);

  return (
    <CategoryDetailsPage
      category={category}
      relatedProducts={relatedProducts}
    />
  );
}
