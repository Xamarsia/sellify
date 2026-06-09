"use client";

import { useState } from "react";

import Section from "@sellify/example-ui-components/Section";
import SectionItem from "@sellify/example-ui-components/SectionItem";
import Header from "@sellify/example-ui-components/Header";
import MainLayout from "@sellify/example-ui-components/MainLayout";

import {
  Admin,
  AdminPreview,
  CartItem,
  Category,
  CategoryPreview,
  Customer,
  DeliveryAddress,
  InventoryProduct,
  OrderPreview,
  Permission as PermissionData,
  Product,
  ProductPreview,
  Role,
  RolePreview,
} from "@sellify/admin-ui-components/types";

import { ADMIN_STATUS } from "@sellify/admin-ui-components/statuses/AdminStatus";
import { CUSTOMER_STATUS } from "@sellify/admin-ui-components/statuses/CustomerStatus";
import { ORDER_STATUS } from "@sellify/common-ui-components/statuses/OrderStatus";
import { PRODUCT_STATUS } from "@sellify/common-ui-components/statuses/ProductStatus";

import AddAmountButton from "@sellify/admin-ui-components/AddAmountButton";
import SettingsSection from "@sellify/admin-ui-components/SettingsSection";
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
import OrderProductsView from "@sellify/admin-ui-components/data-view/OrderProductsView";
import PermissionsView from "@sellify/admin-ui-components/data-view/PermissionsView";
import RolesPreviewView from "@sellify/admin-ui-components/data-view/RolesPreviewView";
import AdminStatusComponent from "@sellify/admin-ui-components/statuses/AdminStatus";
import CustomerStatusComponent from "@sellify/admin-ui-components/statuses/CustomerStatus";
import OrderStatusComponent from "@sellify/common-ui-components/statuses/OrderStatus";
import ProductStatusComponent from "@sellify/common-ui-components/statuses/ProductStatus";

import image from "resources/image.jpg";
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
    customerName: "John Thomsonscsdfsdddddddddddsdfffffffffffffffffffffff",
    total: 23.46,
    status: ORDER_STATUS.SHIPPED,
  };

  const orderPreview2: OrderPreview = {
    orderId: 2343,
    customerId: 23465,
    date: "June 23, 2024",
    customerName:
      "John Thomson sdfsdfgfgrgeee eeeeeeeee tryyyyyyyyyyyy rtyrtyrtyrty rtyrty rtyrt yrtyrtyrt rtyrty rty eeee",
    total: 23.46,
    status: ORDER_STATUS.SHIPPED,
  };

  const orderPreview3: OrderPreview = {
    orderId: 67843,
    customerId: 23465,
    date: "Aug 7, 2024",
    customerName: "John Thomson",
    total: 64.32,
    status: ORDER_STATUS.IN_PROGRESS,
  };

  const orderPreview4: OrderPreview = {
    orderId: 56736784,
    customerId: 23465,
    date: "Jan 13, 2025",
    customerName: "John Thomson",
    total: 345.46,
    status: ORDER_STATUS.SHIPPED,
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
    country: "Canada",
  };

  const customer: Customer = {
    customerId: 213234,
    name: "Ronald Jones",
    ordersCount: 5,
    totalExpenses: 234.43,
    createdOn: "Jan 10, 2020",
    deliveryAddress: deliveryAddress,
    status: CUSTOMER_STATUS.ACTIVE,
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
    status: ADMIN_STATUS.INVITED,
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

  const cartItem: CartItem = {
    cartItemId: 1,
    product: productPreview,
    amount: 3,
  };

  const permissionDataItem: PermissionData = {
    permissionId: 1,
    title: "View Product",
    relatedRolesCount: 3,
  };

  return (
    <>
      <Header title="Admin UI Components" />
      <MainLayout>
        <Section title={"Add Amount Button"}>
          <SectionItem>
            <AddAmountButton
              value={quantity}
              onChange={setQuantity}
              onSubmit={setQuantity}
            />
            <AddAmountButton
              value={-34}
              onChange={setQuantity}
              onSubmit={setQuantity}
              disabled
            />
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

        <Section title={"Settings Section"}>
          <SectionItem>
            <SettingsSection
              title="Regular Action"
              description="Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              buttonText="Edit"
            />
            <SettingsSection
              title="Destructive Action"
              description="Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus, massa venenatis ornare aliquam, urna enim interdum nibh, non fermentum magna odio eget odio."
              buttonText="Delete"
              type="destructive"
            />
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Statuses"}>
          <SectionItem title="Admin Status">
            <AdminStatusComponent status={ADMIN_STATUS.ACTIVE} />
            <AdminStatusComponent status={ADMIN_STATUS.INVITED} />
            <AdminStatusComponent status={ADMIN_STATUS.DISABLED} />
          </SectionItem>
          <SectionItem title="Customer Status">
            <CustomerStatusComponent status={CUSTOMER_STATUS.ACTIVE} />
            <CustomerStatusComponent status={CUSTOMER_STATUS.ARCHIVED} />
          </SectionItem>
          <SectionItem title="Order Status">
            <OrderStatusComponent status={ORDER_STATUS.NEW} />
            <OrderStatusComponent status={ORDER_STATUS.IN_PROGRESS} />
            <OrderStatusComponent status={ORDER_STATUS.SHIPPED} />
            <OrderStatusComponent status={ORDER_STATUS.CANCELED} />
          </SectionItem>
          <SectionItem title="Product Status">
            <ProductStatusComponent status={PRODUCT_STATUS.ACTIVE} />
            <ProductStatusComponent status={PRODUCT_STATUS.ARCHIVED} />
          </SectionItem>
        </Section>

        {/* ------------------------------------------------------------- */}

        <Section title={"Table"}>
          <SectionItem title="Orders Table">
            <OrdersView
              content={[
                orderPreview,
                orderPreview2,
                orderPreview3,
                orderPreview4,
                orderPreview,
                orderPreview2,
              ]}
            />
          </SectionItem>

          <SectionItem title="Products Table">
            <ProductsView
              content={[product, product, product, product, product]}
            />
          </SectionItem>

          <SectionItem title="Inventory Table">
            <InventoryView
              content={[inventory, inventory]}
              onSubmit={setQuantity}
            />
          </SectionItem>

          <SectionItem title="Customers Table">
            <CustomersView
              content={[
                customer,
                customer,
                customer,
                customer,
                customer,
                customer,
              ]}
            />
          </SectionItem>

          <SectionItem title="Categories Table">
            <CategoriesView
              content={[category, category, category, category]}
            />
          </SectionItem>

          <SectionItem title="Admins Table">
            <AdminsView content={[admin, admin]} />
          </SectionItem>

          <SectionItem title="Roles Table">
            <RolesView content={[role, role, role, role]} />
          </SectionItem>

          <SectionItem title="Product Preview Table">
            <ProductPreviewView content={[productPreview, productPreview]} />
          </SectionItem>

          <SectionItem title="Admins Preview Table">
            <AdminsPreviewView
              content={[adminPreview, adminPreview, adminPreview]}
            />
          </SectionItem>

          <SectionItem title="Order Products Table">
            <OrderProductsView content={[cartItem, cartItem, cartItem]} />
          </SectionItem>

          <SectionItem title="Permissions Table">
            <PermissionsView
              content={[
                permissionDataItem,
                permissionDataItem,
                permissionDataItem,
              ]}
            />
          </SectionItem>

          <SectionItem title="Roles Preview Table">
            <RolesPreviewView content={[rolePreview, rolePreview]} />
          </SectionItem>
        </Section>
      </MainLayout>
    </>
  );
}
