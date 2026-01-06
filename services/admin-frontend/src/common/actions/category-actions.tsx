import { Category, ProductPreview } from "@sellify/admin-ui-components/types";
import { getProductPreviews } from "./product-actions";

const category: Category = {
  title: "Ring",
  relatedProductsCount: 4,
};

const category2: Category = {
  title:
    "LongUnbreakableCategoryTitleWord|LongUnbreakableCategoryTitleWordLongUnbreakableCategoryTitleWord",
  relatedProductsCount: 2,
};

const category3: Category = {
  title:
    "Long Category Title | Long Category Title | Long Category Title | Long Category Title | Long Category Title | Long Category Title | Long Category Title | Long Category Title | Long Category Title",
  relatedProductsCount: 2,
};

export function filterCategories(query: string): Array<Category> {
  return [category, category2];
}

export function getCategories(): Array<Category> {
  return [
    category,
    category,
    category2,
    category3,
    category2,
    category3,
    category,
    category2,
    category,
    category3,
    category2,
    category,
    category,
    category,
    category3,
    category,
    category3,
    category,
    category,
    category3,
    category3,
    category2,
    category2,
    category2,
  ];
}

export function getCategoryById(categoryId: number): Category {
  return category;
}

export function getProductPreviewsByCategoryId(
  categoryId: number,
): Array<ProductPreview> {
  return getProductPreviews();
}
