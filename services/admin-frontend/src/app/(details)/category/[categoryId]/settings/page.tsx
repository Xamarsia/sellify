import "server-only";

import { Category } from "@sellify/admin-ui-components/types";

import { getCategoryById } from "actions/category-actions";
import CategorySettings from "setting-sections/category-settings";

type Props = {
  params: Promise<{ categoryId: number }>;
};

export default async function CategorySettingsPage({ params }: Props) {
  const categoryId: number = (await params).categoryId;
  const category: Category = getCategoryById(categoryId);

  return (
    <>
      <h1 className="py-4">{`Category Settings: ${category.title}`}</h1>
      <CategorySettings />
    </>
  );
}
