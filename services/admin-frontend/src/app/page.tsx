"use client";

import { useState } from "react";
import ProductImage from "@sellify/admin-ui-components/product/ProductImage";
import Button from "@sellify/common-ui-components/buttons/Button";

import image from "./../resources/1/image.jpg";
import image2 from "./../resources/2/image.jpg";

import {
  AdminStatus,
  CustomerStatus,
} from "@sellify/admin-ui-components/constants";

import OrdersTable from "@sellify/admin-ui-components/table/OrdersTable";
import ProductsTable from "@sellify/admin-ui-components/table/ProductsTable";
import InventoryTable from "@sellify/admin-ui-components/table/InventoryTable";
import CustomersTable from "@sellify/admin-ui-components/table/CustomersTable";
import CategoriesTable from "@sellify/admin-ui-components/table/CategoriesTable";
import AdminsTable from "@sellify/admin-ui-components/table/AdminsTable";
import RolesTable from "@sellify/admin-ui-components/table/RolesTable";
import ProductPreviewTable from "@sellify/admin-ui-components/table/ProductPreviewTable";
import AdminsPreviewTable from "@sellify/admin-ui-components/table/AdminsPreviewTable";
import CardWithChard from "@sellify/admin-ui-components/card/CardWithChard";
import { Admin, AdminPreview, Category, Customer, Inventory, Product, Role } from "@sellify/admin-ui-components/types";
import { getOrders } from "common/actions/order-actions";
import { getProductPreviews } from "common/actions/product-actions";

import OrdersView from "@sellify/admin-ui-components/data-view/OrdersView";

export default function Home() {
  const [quantity, setQuantity] = useState<number>();

  const tableHeader: Array<string> = [
    "Order ID",
    "Date",
    "Customer",
    "Total",
    "Status",
    "Items",
  ];
  const tableContent: Array<string> = [
    "#546545454",
    "Jan 10, 2020",
    "Ronald Jones",
    "$253.82",
    "New",
    "1 item",
  ];

  const product: Product = {
    image: image.src,
    title: "Product Title",
    productId: 43545445,
    status: "ACTIVE",
    quantity: 12,
    category: "Rings",
    price: 60,
  };

  const inventory: Inventory = {
    image: image.src,
    productTitle: "Product Title",
    productId: 43545445,
    quantity: 2,
  };
  const customer: Customer = {
    customerId: 213234,
    name: "Ronald Jones",
    ordersCount: 5,
    totalExpenses: 234.43,
    status: CustomerStatus.Active,
  };

  const category: Category = {
    title: "Ring",
    relatedProductsCount: 4,
  };

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

  const role: Role = {
    title: "ContentManager",
    relatedUsersCount: 1,
  };

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
        <OrdersTable content={getOrders()} />
        <OrdersView content={getOrders()} />

        <ProductsTable
          content={[product, product, product, product, product]}
        />
        <InventoryTable
          content={[inventory, inventory, inventory, inventory, inventory]}
          onSubmit={setQuantity}
        />
        <CustomersTable content={[customer, customer, customer, customer]} />
        <CategoriesTable
          content={[category, category, category, category, category]}
        />
        <AdminsTable content={[admin, admin, admin, admin, admin, admin]} />
        <RolesTable content={[role, role, role, role, role, role]} />
        <ProductPreviewTable content={getProductPreviews()} />
        <AdminsPreviewTable
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
