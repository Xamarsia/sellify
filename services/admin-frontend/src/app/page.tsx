"use client";

import { useState } from "react";

import Button from "@sellify/common-ui-components/buttons/Button";

import image from "./../resources/1/image.jpg";
import image2 from "./../resources/2/image.jpg";

import { AdminStatus } from "@sellify/admin-ui-components/constants";
import AdminsPreviewView from "@sellify/admin-ui-components/data-view/AdminsPreviewView";
import AdminsView from "@sellify/admin-ui-components/data-view/AdminsView";
import CategoriesView from "@sellify/admin-ui-components/data-view/CategoriesView";
import CustomersView from "@sellify/admin-ui-components/data-view/CustomersView";
import InventoryView from "@sellify/admin-ui-components/data-view/InventoryView";
import OrdersView from "@sellify/admin-ui-components/data-view/OrdersView";
import ProductPreviewView from "@sellify/admin-ui-components/data-view/ProductPreviewView";
import ProductsView from "@sellify/admin-ui-components/data-view/ProductsView";
import RolesView from "@sellify/admin-ui-components/data-view/RolesView";
import CardWithChard from "@sellify/admin-ui-components/card/CardWithChard";
import ProductImage from "@sellify/admin-ui-components/product/ProductImage";

import {
  Admin,
  AdminPreview,
  Category,
  Customer,
  Inventory,
  Product,
  Role,
} from "@sellify/admin-ui-components/types";
import { getOrders } from "common/actions/order-actions";
import { getProductPreviews } from "common/actions/product-actions";
import { getRoleById } from "common/actions/roles-actions";
import {
  getCategoryById,
  getCategoryPreview,
} from "common/actions/category-actions";
import { getCustomerById } from "common/actions/customer-actions";

export default function Home() {
  const [quantity, setQuantity] = useState<number>();
  const categoryPreview = getCategoryPreview("");

  const product: Product = {
    image: image.src,
    title: "Product Title",
    productId: 43545445,
    status: "ACTIVE",
    quantity: 12,
    category: categoryPreview,
    price: 60,
  };

  const inventory: Inventory = {
    image: image.src,
    productTitle: "Product Title",
    productId: 43545445,
    quantity: 2,
  };

  const customer: Customer = getCustomerById(45645);
  const category: Category = getCategoryById(3453456);

  const admin: Admin = {
    adminId: 233432,
    name: "Ronald Jones",
    role: "Content Manager",
    createdOn: "Jan 10, 2020",
    status: AdminStatus.Invited,
  };

  const adminPreview: AdminPreview = {
    adminId: 233432,
    name: "Ronald Jones",
    role: "Content Manager",
  };

  const role: Role = getRoleById(4365);

  return (
    <div className="flex-row gap-20">
      <div className="flex m-16 gap-10">
        <Button size="small">
          <p> Small Button</p>
        </Button>
        <Button size="small" variant="destructive">
          <p> Small Button</p>
        </Button>
        <Button size="small" variant="outline">
          <p> Small Button</p>
        </Button>
      </div>
      <div className="flex m-16 gap-10">
        <ProductImage src={image.src} />
        <ProductImage src={image2.src} />
      </div>

      <div className="flex flex-row m-16 gap-10">
        <CardWithChard label="Revenue" value="$7,823" trendValue={10} />
        <CardWithChard label="Revenue" value="$7,823" trendValue={-10} />
        <CardWithChard label="Revenue" value="$7,823" trendValue={0} />
      </div>

      <div className="flex flex-col m-16 gap-10">
        <OrdersView content={getOrders()} />

        <ProductsView content={[product, product, product, product, product]} />

        <InventoryView
          content={[inventory, inventory, inventory, inventory, inventory]}
          onSubmit={setQuantity}
        />

        <CustomersView content={[customer, customer, customer, customer]} />
        <CategoriesView
          content={[category, category, category, category, category]}
        />

        <AdminsView content={[admin, admin, admin, admin, admin, admin]} />

        <RolesView content={[role, role, role, role, role, role]} />

        <ProductPreviewView content={getProductPreviews()} />

        <AdminsPreviewView
          content={[
            adminPreview,
            adminPreview,
            adminPreview,
            adminPreview,
            adminPreview,
            adminPreview,
          ]}
        />
      </div>
      <div className=" w-[76px] rounded-md gap-4" />
    </div>
  );
}
