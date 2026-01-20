import {
  Category,
  CategoryPreview,
  ProductPreview,
} from "@sellify/admin-ui-components/types";
import { getProductPreviews } from "./product-actions";

const category: Category = {
  categoryId: 3434,
  title: "Ring",
  relatedProductsCount: 4,
};

const category2: Category = {
  categoryId: 23,
  title:
    "LongUnbreakableCategoryTitleWord|LongUnbreakableCategoryTitleWordLongUnbreakableCategoryTitleWord",
  relatedProductsCount: 2,
};

const category3: Category = {
  categoryId: 55,
  title:
    "Long Category Title | Long Category Title | Long Category Title | Long Category Title | Long Category Title | Long Category Title | Long Category Title | Long Category Title | Long Category Title",
  relatedProductsCount: 2,
};

export function getCategoryComboboxItems(): Map<number, string> {
  return new Map<number, string>(
    getCategories().map((category) => [category.categoryId, category.title]),
  );
}

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

export function getRelatedProductsCount(categoryId: number): number {
  return 6;
}

const categoryPreview: CategoryPreview = {
  categoryId: 324534,
  title: "Ring",
};

export function getCategoryPreview(title: string): CategoryPreview {
  return categoryPreview;
}
