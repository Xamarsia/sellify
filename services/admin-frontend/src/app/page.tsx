"use client";

import { useState } from "react";
import ProductImage from "@sellify/admin-ui-components/product/ProductImage";
import Button from "@sellify/common-ui-components/buttons/Button";
import image from "./../resources/image1.jpg";
import image2 from "./../resources/image2.jpg";

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
import Card from "@sellify/admin-ui-components/card/Card";
import CardWithChard from "@sellify/admin-ui-components/card/CardWithChard";
import {
  Admin,
  AdminPreview,
  Category,
  Customer,
  Inventory,
  Order,
  Product,
  ProductPreview,
  Role,
} from "@sellify/admin-ui-components/types";
import { OrderStatus } from "@sellify/common-ui-components/constants";

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

  const order: Order = {
    orderId: 2343,
    date: "June 23, 2024",
    customerName: "John Thomson",
    total: 23.46,
    status: OrderStatus.Shipped,
    items: 1,
  };

  const order2: Order = {
    orderId: 67843,
    date: "Aug 7, 2024",
    customerName: "John Thomson",
    total: 64.32,
    status: OrderStatus.InProgress,
    items: 5,
  };

  const order3: Order = {
    orderId: 56736784,
    date: "Jan 13, 2025",
    customerName: "John Thomson",
    total: 345.46,
    status: OrderStatus.Shipped,
    items: 3,
  };

  const order4: Order = {
    orderId: 245,
    date: "Aug 18, 2025",
    customerName: "John Thomson",
    total: 253.82,
    status: OrderStatus.New,
    items: 10,
  };

  const product: Product = {
    image: image.src,
    title: "Product Title",
    productId: 43545445,
    status: "ACTIVE",
    quantity: 12,
    category: "Rings",
    price: 60,
  };

  const productPreview: ProductPreview = {
    image: image.src,
    title: "Product Title",
    productId: 43545445,
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
        <OrdersTable content={[order, order2, order3, order4]} />
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
        <ProductPreviewTable
          content={[
            productPreview,
            productPreview,
            productPreview,
            productPreview,
            productPreview,
          ]}
        />
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
