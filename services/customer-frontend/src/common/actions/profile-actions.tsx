import {
  ContactInfo,
  DeliveryAddress,
} from "@sellify/customer-ui-components/types";
import { EditProfileRequest } from "types";

export function updateDefaultContactInfo(contactInfo: ContactInfo): void { }

export function updateDefaultDeliveryAddress(
  deliveryAddress: DeliveryAddress,
): void { }

export function getDefaultContactInfo(): ContactInfo | undefined {
  const contactInfo: ContactInfo = {
    fullName: "Robert Fox",
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

export function deleteUserAccount(): void {

}

export function editProfile(editProfileRequest: EditProfileRequest): void {

}
