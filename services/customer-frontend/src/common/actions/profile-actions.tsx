import { SidebarItemInfo } from "@sellify/common-ui-components/types";
import { ContactInfo, DeliveryAddress } from "@sellify/customer-ui-components/types";

export function getSidebarItems(): Array<SidebarItemInfo> {
  const items: Array<SidebarItemInfo> = [
    { href: "/profile/", title: "Profile" },
    { href: "/profile/orders", title: "Order History" },
    // { href: "/profile/wishlist", title: "Wishlist" },
    { href: "/profile/settings", title: "Settings" },
  ];
  return items;
}

export function updateDefaultContactInfo(contactInfo: ContactInfo): void {

}

export function updateDefaultDeliveryAddress(deliveryAddress: DeliveryAddress): void {

}

export function getDefaultContactInfo(): ContactInfo | undefined {
  const contactInfo: ContactInfo = {
    firstName: "Robert",
    lastName: "Fox",
    email: "robertfox@example.com",
    phoneNumber: "+1 (416) 555-0123",
  };
  return contactInfo;
}

export function getDefaultDeliveryAddress(): DeliveryAddress | undefined {
  const deliveryAddress: DeliveryAddress = {
    address: "123 Maple Street, Toronto, ON, M5A 1A1",
    country: "Canada",
  };
  return deliveryAddress;
}

export function getAvailableCountries(): Map<string, string> {
  const countries = new Map<string, string>([
    ["canada", "Canada"],
    ["usa", "USA"],
    ["ukraine", "Ukraine"],
  ]);
  return countries;
}
