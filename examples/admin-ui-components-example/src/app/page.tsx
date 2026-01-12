"use client";

import { useState } from "react";

import {
  Admin,
  AdminPreview,
  Category,
  CategoryPreview,
  Customer,
  DeliveryAddress,
  InventoryProduct,
  Order,
  OrderPreview,
  Product,
  ProductPreview,
  Role,
  RolePreview,
} from "@sellify/admin-ui-components/types";

import {
  AdminStatus,
  CustomerStatus,
} from "@sellify/admin-ui-components/constants";

import { OrderStatus } from "@sellify/common-ui-components/constants";

import AddAmountButton from "@sellify/admin-ui-components/AddAmountButton";
import Card from "@sellify/admin-ui-components/card/Card";
import CardWithChard from "@sellify/admin-ui-components/card/CardWithChard";
import AdminsPreviewView from "@sellify/admin-ui-components/data-view/AdminsPreviewView";
import AdminsView from "@sellify/admin-ui-components/data-view/AdminsView";
import CategoriesView from "@sellify/admin-ui-components/data-view/CategoriesView";
import CustomersView from "@sellify/admin-ui-components/data-view/CustomersView";
import InventoryView from "@sellify/admin-ui-components/data-view/InventoryView";
import OrdersView from "@sellify/admin-ui-components/data-view/OrdersView";
import ProductPreviewView from "@sellify/admin-ui-components/data-view/ProductPreviewView";
import ProductsView from "@sellify/admin-ui-components/data-view/ProductsView";
import RolesView from "@sellify/admin-ui-components/data-view/RolesView";
import ProductImage from "@sellify/admin-ui-components/product/ProductImage";

import image from "resources/image.jpg";
import Section from "./components/Section";
import SectionItem from "./components/SectionItem";
import { Permission } from "@sellify/admin-ui-components/enums";

export default function Home() {
  const [quantity, setQuantity] = useState<number>();

  const categoryPreview: CategoryPreview = {
    categoryId: 324534,
    title: "Ring",
  };

  const orderPreview: OrderPreview = {
    orderId: 2343,
    customerId: 23465,
    date: "June 23, 2024",
    customerName: "John Thomson",
    total: 23.46,
    status: OrderStatus.Shipped,
  };

  const orderPreview2: OrderPreview = {
    orderId: 2343,
    customerId: 23465,
    date: "June 23, 2024",
    customerName: "John Thomson",
    total: 23.46,
    status: OrderStatus.Shipped,
  };

  const orderPreview3: OrderPreview = {
    orderId: 67843,
    customerId: 23465,
    date: "Aug 7, 2024",
    customerName: "John Thomson",
    total: 64.32,
    status: OrderStatus.InProgress,
  };

  const orderPreview4: OrderPreview = {
    orderId: 56736784,
    customerId: 23465,
    date: "Jan 13, 2025",
    customerName: "John Thomson",
    total: 345.46,
    status: OrderStatus.Shipped,
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
    category: categoryPreview,
    price: 60,
  };

  const productPreview: ProductPreview = {
    image: image.src,
    title: "Product Title",
    price: 124,
    productId: 43545445,
  };

  const inventory: InventoryProduct = {
    image: image.src,
    productTitle: "Product Title",
    productId: 43545445,
    quantity: 2,
  };

  const deliveryAddress: DeliveryAddress = {
    address: "123 Maple Street, Toronto, ON, M5A 1A1",
    country: "Canada"
  };

  const customer: Customer = {
    customerId: 213234,
    name: "Ronald Jones",
    ordersCount: 5,
    totalExpenses: 234.43,
    createdOn: "Jan 10, 2020",
    deliveryAddress: deliveryAddress,
    status: CustomerStatus.Active,
  };

  const category: Category = {
    categoryId: 456,
    title: "Ring",
    relatedProductsCount: 4,
  };

  const rolePreview: RolePreview = {
    title: "ContentManager",
    roleId: 1,
  };

  const admin: Admin = {
    adminId: 233432,
    name: "Ronald Jones",
    role: rolePreview,
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
    roleId: 12,
    permissions: [
      Permission.VIEW_PRODUCT,
      Permission.CREATE_PRODUCT,
      Permission.ARCHIVE_PRODUCT,
      Permission.EDIT_PRODUCT,
    ],
  };

  return (
    <div className="min-h-full">
      <header className="flex items-center h-32 bg-primary px-4 sm:px-6 lg:px-8">
        <h1 className="text-white text-3xl">Admin UI Components</h1>
      </header>
      <main className="flex flex-col w-full ">
        <Section title={"Add Amount Button"}>
          <SectionItem>
            <AddAmountButton
              value={quantity}
              onChange={setQuantity}
              onSubmit={setQuantity}
            />
            <AddAmountButton
              value={quantity}
              onChange={setQuantity}
              onSubmit={setQuantity}
              disabled
            />
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Product Image"}>
          <SectionItem>
            <ProductImage src={image.src} />
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Card"}>
          <SectionItem>
            <CardWithChard label="Revenue" value="$7,823" trendValue={10} />
            <CardWithChard label="Revenue" value="$7,823" trendValue={-10} />
            <CardWithChard label="Revenue" value="$7,823" trendValue={0} />
            <Card label="Revenue" value="$7,823" />
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Table"}>
          <SectionItem title="Orders Table">
            <OrdersView content={[orderPreview, orderPreview2, orderPreview3, orderPreview4]} />
          </SectionItem>

          <SectionItem title="Products Table">
            <ProductsView
              content={[product, product, product, product, product]}
            />
          </SectionItem>

          <SectionItem title="Inventory Table">
            <InventoryView
              content={[inventory, inventory, inventory, inventory, inventory]}
              onSubmit={setQuantity}
            />
          </SectionItem>

          <SectionItem title="Customers Table">
            <CustomersView content={[customer, customer, customer, customer]} />
          </SectionItem>

          <SectionItem title="Categories Table">
            <CategoriesView
              content={[category, category, category, category, category]}
            />
          </SectionItem>

          <SectionItem title="Admins Table">
            <AdminsView content={[admin, admin, admin, admin, admin, admin]} />
          </SectionItem>

          <SectionItem title="Roles Table">
            <RolesView content={[role, role, role, role, role, role]} />
          </SectionItem>

          <SectionItem title="Product Preview Table">
            <ProductPreviewView
              content={[
                productPreview,
                productPreview,
                productPreview,
                productPreview,
                productPreview,
              ]}
            />
          </SectionItem>

          <SectionItem title="Admins Preview Table">
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
          </SectionItem>
        </Section>
      </main>
    </div>
  );
}
