import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Address, Phone, PhoneType } from "./example-form.models";

export function buildAddressGroup(address: Address): FormGroup {
  return new FormGroup({
    street: new FormControl(address.street, Validators.required),
    zip: new FormControl(address.zip, Validators.required),
  });
}

export function buildPhoneGroup(phone: Phone): FormGroup {
  return new FormGroup({
    number: new FormControl(phone.number, Validators.required),
    type: new FormControl(PhoneType[phone.type], Validators.required),
  });
}
